<template>
<div class="page_material">
<header class="topbar">
        <div class="topbar_leftside">
            <div>
                <img class="logo_img" src="../assets/images/logo.png" alt="">
            </div>
            <div>
                <h3 class="logo_text">C# Study</h3>
            </div>

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

    <main class="layout">
        <aside class="sidebar">
  <h3 class="sidebar_title">Темы курса</h3>
  <nav class="nav">
    <ul class="nav_list">
      <li v-for="(t, tIndex) in courseData" :key="t.id" class="nav_item">
        <button class="nav_topic" @click="openTopic(t.id)">
          <span>{{ tIndex + 1 }}. {{ t.title }}</span>
          <span class="topic-percent">{{ getTopicProgress(t.id, t.items).percent }}%</span>
        </button>
        <ul class="nav__sublist" :class="{ 'is-open': isExpanded(t.id) }">
          <li v-for="(item, index) in t.items" :key="item.id">
            <a
              class="nav_link nav_link--sub"
              :class="{ 'is-active': isActive(t.id, item), 'is-done': isCompleted(t.id, item.id) }"
              @click="navigate(t.id, item)"
              >

              {{ tIndex + 1 }}.{{ index + 1 }}. {{ item.title }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</aside>

        <section class="content">
          <div class="content_card" v-if="!courseData.length && !loading">
            Загрузка...
          </div>
            <div class="content_card" v-if="topic && !loading">
  <template v-for="(block, index) in theoryBlocks" :key="index">
    <h1 v-if="block.type === 'title'">
      {{ block.content }}
    </h1>

    <h2 v-else-if="block.type === 'subtitle'">
      {{ block.content }}
    </h2>

    <p v-else-if="block.type === 'text'">
      {{ block.content }}
    </p>

    <pre v-else-if="block.type === 'code'"><code>{{ block.content }}</code></pre>

    <img
      v-else-if="block.type === 'image'"
      :src="block.src"
      :alt="block.alt"
    >

  </template>

  <button class="btn_to_task" @click="goToTask" v-if="nextTask">
    Перейти к заданию →
  </button>
</div>

          <div class="content_card" v-else>
  <h1>Тема не найдена</h1>
  <p>Проверь topicId в адресной строке и данные в courseData.</p>
</div>


        </section>
    </main>
    </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchCourse, fetchCurrentUser, markProgress, fetchStreak } from "../utils/api";
import { isCompleted, getTopicProgress, syncProgress, markLocalCompleted } from "../utils/progress_storage";
import { openTopics, sharedCourseData, lastCourseRoute } from "../utils/sidebar_state";

const route = useRoute();
const router = useRouter();

const loading = ref(true);
const courseData = sharedCourseData;
const currentUser = ref(null);
const streak = ref(0);

onMounted(async () => {
  await syncProgress();
  currentUser.value = await fetchCurrentUser().catch(() => null);
  if (!courseData.value.length) {
    courseData.value = await fetchCourse().catch(() => []);
  }
  if (route.params.topicId) openTopics.value[route.params.topicId] = true;
  streak.value = await fetchStreak().catch(() => 0);
  loading.value = false;
  lastCourseRoute.value = route.fullPath;
});

watch(() => route.fullPath, (newPath) => {
  lastCourseRoute.value = newPath;
}, { immediate: true });

const topic = computed(() => {
  return courseData.value.find((item) => item.id === route.params.topicId);
});

const lesson = computed(() => {
  if (!topic.value) return null;
  return topic.value.items.find(item => item.type === "lesson" && item.id === route.params.lessonId);
});


const theoryBlocks = computed(() => {
  return lesson.value ? lesson.value.theoryBlocks : [];
});

function isActive(topicId, item) {
  if (topicId !== route.params.topicId) return false;
  return item.id === route.params.lessonId ;
}

function navigate(topicId, item) {
  if (item.type === "lesson") {
    router.push(`/theory/${topicId}/${item.id}`);
  } else {
    router.push(`/task/${topicId}/${item.id}`);
  }
}

function openTopic(topicId) {
  openTopics.value[topicId] = !openTopics.value[topicId];
}

function isExpanded(topicId) {
  return !!openTopics.value[topicId];
}

const nextTask = computed(() => {
  if (!topic.value || !lesson.value) return null;
  const items = topic.value.items;
  const lessonIndex = items.findIndex(item => item.id === lesson.value.id);
  for (let i = lessonIndex + 1; i < items.length; i++) {
    if (items[i].type === 'task') return items[i];
  }
  return items.find(item => item.type === 'task') || null;
});

function goToTask() {
  if (nextTask.value) {
    router.push(`/task/${route.params.topicId}/${nextTask.value.id}`);
  }
}

watch(() => route.params.topicId, (newVal) => {
  if (newVal) openTopics.value[newVal] = true;
});

watch(lesson, (newLesson) => {
  if (newLesson && route.params.topicId) {
    markLocalCompleted(route.params.topicId, newLesson.id);
    markProgress(route.params.topicId, newLesson.id).catch(() => {});
  }
}, { immediate: true });
</script>