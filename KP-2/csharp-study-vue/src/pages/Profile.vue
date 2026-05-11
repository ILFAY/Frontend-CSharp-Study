<template>
  <div class="page_material">
    <header class="topbar">
      <div class="topbar_leftside">
        <div><img class="logo_img" src="../assets/images/logo.png" alt=""></div>
        <div><h3 class="logo_text">C# Study</h3></div>
          <router-link to="/leaderboard" class="topbar-map-link">
              <svg class="topbar-trophy-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.58,15.181c0.438-0.732,1.082-1.107,1.936-1.117c0.854-0.01,1.285-0.445,1.299-1.301c0.012-0.852,0.383-1.496,1.115-1.932c0.734-0.438,0.893-1.027,0.475-1.773c-0.416-0.744-0.416-1.488,0-2.234c0.418-0.744,0.26-1.332-0.475-1.77c-0.732-0.439-1.104-1.082-1.115-1.938c-0.014-0.852-0.445-1.287-1.299-1.297c-0.854-0.012-1.498-0.385-1.936-1.117c-0.438-0.734-1.027-0.893-1.771-0.475c-0.744,0.416-1.49,0.416-2.234,0C9.83-0.19,9.241-0.032,8.803,0.702C8.366,1.435,7.721,1.808,6.868,1.819c-0.852,0.01-1.285,0.445-1.297,1.297C5.557,3.972,5.186,4.614,4.454,5.054C3.72,5.492,3.559,6.079,3.979,6.824c0.418,0.746,0.418,1.49,0,2.234c-0.42,0.746-0.26,1.336,0.475,1.773c0.732,0.436,1.104,1.08,1.117,1.932c0.012,0.855,0.445,1.291,1.297,1.301c0.854,0.01,1.498,0.385,1.936,1.117c0.438,0.734,1.027,0.893,1.771,0.473c0.744-0.412,1.49-0.412,2.234,0C13.553,16.073,14.143,15.915,14.58,15.181z M11.694,12.614c-2.582,0-4.674-2.092-4.674-4.674c0-2.58,2.092-4.672,4.674-4.672c2.58,0,4.672,2.092,4.672,4.672C16.366,10.522,14.274,12.614,11.694,12.614z" fill="currentColor"/>
                <path d="M6.793,14.749c-0.898,0-1.018-0.418-1.018-0.418l-3.507,6.893l2.812-0.316l1.555,2.34c0,0,3.24-6.76,3.24-6.715C8.196,16.491,8.864,14.794,6.793,14.749z" fill="currentColor"/>
                <path d="M17.563,14.601c-2.562,0.268-2.041,0.904-2.627,1.398c-0.674,0.719-1.516,0.578-1.516,0.578l3.955,6.805l0.973-2.52l2.766,0.361L17.563,14.601z" fill="currentColor"/>
                <polygon points="12.67,6.909 11.692,4.929 10.713,6.909 8.524,7.229 10.106,8.772 9.733,10.954 11.692,9.925 13.651,10.954 13.278,8.772 14.86,7.229" fill="currentColor"/>
              </svg>
            Лидеры
          </router-link>
      </div>
      <div class="topbar_rightside">
        <router-link to="/profile" class="topbar-username">{{ user?.name ?? '' }}</router-link>
        <div class="streak-badge" v-if="streak > 0">
          <svg class="streak-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.294 -2.333 5.588c0 3.704 3.134 6.706 7 6.706c3.866 0 7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
          </svg>

            {{ streak }}
        </div>
        <div class="xp-badge">✦ {{ user?.xp ?? 0 }} XP</div>
      </div>
    </header>

    <main class="profile-main">
      <div class="profile-card" v-if="user">

        <div class="profile-header">
          <div class="profile-avatar">{{ initials }}</div>
          <div class="profile-identity">
            <h1 class="profile-name">{{ user.name }}</h1>
            <span class="profile-email">{{ user.email }}</span>
            <span class="profile-verified" v-if="user.email_verified">✓ Email подтверждён</span>
          </div>
        </div>

        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-value">✦ {{ user.xp }}</span>
            <span class="stat-label">Опыт</span>
          </div>
          <div class="stat-item" style="cursor: pointer;" @click="router.push('/leaderboard')">
  <span class="stat-value"># {{ rank ?? '—' }}</span>
  <span class="stat-label">Место</span>
</div>
                  <div class="stat-item">
          <div class="streak-badge">
            <svg class="streak-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.294 -2.333 5.588c0 3.704 3.134 6.706 7 6.706c3.866 0 7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
            </svg>
            {{ streak }}
          </div>
          <span class="stat-label">Стрик</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ tasksProgress?.completedTasksTotal ?? 0 }} / {{ tasksProgress?.totalTasksTotal ?? 0 }}</span>
            <span class="stat-label">Заданий</span>
          </div>
        </div>

        <div class="profile-progress" v-if="tasksProgress?.topics?.length">
          <h2 class="profile-section-title">Прогресс по темам</h2>
          <div class="topic-progress-list">
            <div class="topic-progress-item" v-for="t in tasksProgress.topics" :key="t.topicId">
              <div class="topic-progress-header">
                <span class="topic-progress-title">{{ t.topicTitle }}</span>
                <span class="topic-progress-count">{{ t.completedTasks }} / {{ t.totalTasks }}</span>
              </div>
              <div class="topic-progress-bar">
                <div class="topic-progress-fill" :style="{ width: barWidth(t) + '%' }"></div>
              </div>

            </div>

          </div>

        </div>
        <button class="profile-back-btn" @click="goToCourse">← Вернуться к курсу</button>
      </div>


      <div class="profile-card" v-else>
        <p>Загрузка...</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { fetchCurrentUser, fetchXpRank, fetchStreak, fetchTasksProgress, fetchCourse } from "../utils/api";
import { lastCourseRoute } from "../utils/sidebar_state";
import { useRouter } from "vue-router";


const user = ref(null);
const rank = ref(null);
const streak = ref(0);
const tasksProgress = ref(null);
const router = useRouter();

onMounted(async () => {
  [user.value, streak.value, tasksProgress.value] = await Promise.all([
    fetchCurrentUser().catch(() => null),
    fetchStreak().catch(() => 0),
    fetchTasksProgress().catch(() => null),
  ]);
  const xpRank = await fetchXpRank().catch(() => null);
  rank.value = xpRank?.rank ?? null;
});

const initials = computed(() => {
  if (!user.value?.name) return '?';
  return user.value.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
});

function barWidth(t) {
  if (!t.totalTasks) return 0;
  return Math.round((t.completedTasks / t.totalTasks) * 100);
}

async function goToCourse() {
  if (lastCourseRoute.value) {
    router.push(lastCourseRoute.value);
    return;
  }
  const course = await fetchCourse().catch(() => []);
  const firstTopic = course[0];
  const firstLesson = firstTopic?.items?.find(item => item.type === "lesson");
  if (firstTopic && firstLesson) {
    router.push(`/theory/${firstTopic.id}/${firstLesson.id}`);
  }
}
</script>