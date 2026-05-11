<template>
  <div class="page_material">
    <header class="topbar">
      <div class="topbar_leftside">
        <div><img class="logo_img" src="../assets/images/logo.png" alt=""></div>
        <div><h3 class="logo_text">C# Study</h3></div>
      </div>
      <div class="topbar_rightside">
        <router-link to="/profile" class="topbar-username">{{ currentUser?.name ?? '' }}</router-link>
        <div class="streak-badge" v-if="streak > 0">
          <svg class="streak-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.294 -2.333 5.588c0 3.704 3.134 6.706 7 6.706c3.866 0 7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
          </svg>
          {{ streak }}
        </div>
        <div class="xp-badge">✦ {{ currentUser?.xp ?? 0 }} XP</div>
      </div>
    </header>

    <main class="leaderboard-main">
      <div class="leaderboard-card">
        <h2 class="leaderboard-title">Таблица лидеров</h2>

        <div class="leaderboard-list" v-if="entries.length">
          <div
            class="leaderboard-row"
            v-for="entry in entries"
            :key="entry.rank"
            :class="{
              'is-top1': entry.rank === 1,
              'is-top2': entry.rank === 2,
              'is-top3': entry.rank === 3,
              'is-me': entry.name === currentUser?.name
            }"
          >
            <span class="lb-rank">{{ entry.rank }}</span>
            <span class="lb-name">{{ entry.name }}</span>
            <span class="lb-xp">✦ {{ entry.xp }}</span>
          </div>
        </div>

        <p v-else class="lb-empty">Загрузка...</p>

        <button class="profile-back-btn" @click="goBack">← Назад</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { fetchCurrentUser, fetchStreak, fetchCourse } from "../utils/api";
import { lastCourseRoute } from "../utils/sidebar_state";
import { getAuthHeaders } from "../utils/auth_storage";

const router = useRouter();
const currentUser = ref(null);
const streak = ref(0);
const entries = ref([]);

onMounted(async () => {
  [currentUser.value, streak.value] = await Promise.all([
    fetchCurrentUser().catch(() => null),
    fetchStreak().catch(() => 0),
  ]);

  const res = await fetch("http://localhost:8000/api/v1/users/leaderboard", {
    headers: getAuthHeaders(),
  }).catch(() => null);
  if (res?.ok) {
    const data = await res.json();
    const top10 = (data.entries ?? []).slice(0, 10);
    const isInTop10 = top10.some(e => e.name === currentUser.value?.name);
    if (!isInTop10) {
      const myEntry = (data.entries ?? []).find(e => e.name === currentUser.value?.name);
      entries.value = myEntry ? [...top10, myEntry] : top10;
    } else {
      entries.value = top10;
    }
  }
});

async function goBack() {
  if (lastCourseRoute.value) {
    await router.push(lastCourseRoute.value);
    return;
  }
  const course = await fetchCourse().catch(() => []);
  const firstTopic = course[0];
  const firstLesson = firstTopic?.items?.find(item => item.type === "lesson");
  if (firstTopic && firstLesson) {
    await router.push(`/theory/${firstTopic.id}/${firstLesson.id}`);
  }
}
</script>