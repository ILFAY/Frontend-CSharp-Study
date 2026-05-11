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
        <div class="content_card" v-if="task">
          <p class="npc-text">{{ task.npcText }}</p>

          <template v-if="task.taskType === 'single-choice'">
            <h2 class="task-question">{{ task.question }}</h2>
            <form class="answers">
              <label class="answer" v-for="(answer, index) in task.answers" :key="index">
                <input type="radio" name="answer" :value="index" v-model="selectedAnswer">
                <span>{{ answer }}</span>
              </label>
            </form>
          </template>

          <template v-else-if="task.taskType === 'fill-in-blank'">
            <div class="fill-blank-wrapper">
              <pre class="code-part">{{ parts[0] }}<input
                class="blank-input"
                v-model="userInput"
                placeholder="?"
                autocomplete="off"
                :size="10"
              />{{ parts[1] }}</pre>
            </div>
          </template>

          <template v-else-if="task.taskType === 'find-the-bug'">
            <p class="find-bug-hint">Выбери строку с ошибкой</p>
            <div class="code-editor">
              <div
                v-for="(line, i) in task.codeLines"
                  :key="i"
                  class="editor-line"
                  :class="{
                    'is-selected': !result && selectedLine === i,
                    'is-correct': result === 'correct' && selectedLine === i,
                    'is-wrong':   result === 'wrong'   && selectedLine === i
                  }"
                  @click="selectLine(i)"
                  >
                  <span class="editor-line__num">{{ i + 1 }}</span>
                  <code class="editor-line__code">{{ line }}</code>
              </div>
            </div>
            <p v-if="result === 'correct'" class="bug-explanation">{{ task.explanation }}</p>
          </template>

          <template v-else-if="task.taskType === 'code-order'">
            <p class="task-description">{{ task.description }}</p>

            <div class="order-pool">
              <div
                v-for="item in pool"
                :key="item.originalIndex"
                class="order-chip"
                @click="takeItem(item)"
              >
                <code>{{ item.text }}</code>
              </div>
            </div>

            <div class="code-editor order-sequence">
              <div
                v-if="!order.length"
                class="order-sequence__placeholder"
              >
                Кликай строки выше, чтобы выстроить код
              </div>
              <div
                v-for="(item, i) in order"
                :key="item.originalIndex"
                class="editor-line"
                @click="dropItem(i)"
              >
                <code class="editor-line__code">{{ item.text }}</code>
              </div>
            </div>
          </template>

          <template v-else-if="task.taskType === 'match-pairs'">
            <div class="pairs-grid" ref="gridRef">
              <div class="pairs-col">
                <div
                  v-for="(text, i) in task.leftItems"
                  :key="i"
                  :ref="el => { if (el) leftRefs[i] = el }"
                  class="pair-item pair-item--left"
                  :class="{
                    'is-selected': selectedLeft === i,
                    'is-matched': matches[i] !== undefined
                  }"
                  :style="matches[i] !== undefined
                    ? { '--pair-color': getPairColor(i), borderColor: getPairColor(i), background: getPairColor(i) + '22' }
                    : {}"
                  @click="clickLeft(i)"
                >
                  {{text}}
                </div>
              </div>
              <div class="pairs-col">
                <div
                  v-for="(item, i) in shuffledRight"
                  :key="item.originalIndex"
                  :ref="el => { if (el) rightRefs[i] = el }"
                  class="pair-item pair-item--right"
                  :class="{ 'is-matched': isAlreadyMatched(i) }"
                  :style="getRightPairIndex(i) >= 0
                    ? { '--pair-color': getPairColor(getRightPairIndex(i)), borderColor: getPairColor(getRightPairIndex(i)), background: getPairColor(getRightPairIndex(i)) + '22' }
                    : {}"
                  @click="clickRight(i)"
                >
                  {{item.text}}
                </div>
              </div>
              <svg class="pairs-svg" xmlns="http://www.w3.org/2000/svg">
                <g v-for="(line, i) in svgLines" :key="i">
                  <line
                    :x1="line.x1" :y1="line.y1"
                    :x2="line.x2" :y2="line.y2"
                    :stroke="line.color"
                    stroke-width="8"
                    stroke-opacity="0.18"
                    stroke-linecap="round"
                  />
                  <line
                    :x1="line.x1" :y1="line.y1"
                    :x2="line.x2" :y2="line.y2"
                    :stroke="line.color"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </div>
          </template>

          <button class="btn_answer" @click="checkAnswer">Ответить</button>

          <div v-if="result === 'correct'" class="feedback feedback--correct">
            ✓ Правильно! +{{ earnedXp }} XP
          </div>
          <div v-if="result === 'wrong'" class="feedback feedback--wrong">
            ✗ Неверно, попробуй ещё раз
          </div>

        </div>

        <div class="content_card" v-else-if="!loading">
          <h1>Задание не найдено</h1>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getTopicProgress, isCompleted, syncProgress, markLocalCompleted } from "../utils/progress_storage";
import { fetchCourse, submitAnswer, fetchCurrentUser, fetchStreak } from "../utils/api";
import { openTopics, sharedCourseData, lastCourseRoute } from "../utils/sidebar_state";

const route = useRoute();
const router = useRouter();

const courseData = sharedCourseData;
const loading = ref(true);
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

const topic = computed(() =>
  courseData.value.find(t => t.id === route.params.topicId)
);

const task = computed(() => {
  if (!topic.value) return null;
  return topic.value.items.find(
    item => item.type === "task" && item.id === route.params.taskId
  );
});



function isActive(topicId, item) {
  if (topicId !== route.params.topicId) return false;
  return item.id === route.params.taskId;
}

function navigate(topicId, item) {
  if (item.type === "lesson") {
    router.push(`/theory/${topicId}/${item.id}`);
  } else {
    router.push(`/task/${topicId}/${item.id}`);
  }
}



watch(() => route.params.topicId, (newVal) => {
  if (newVal) openTopics.value[newVal] = true;
});

function openTopic(topicId) {
  openTopics.value[topicId] = !openTopics.value[topicId];
}

function isExpanded(topicId) {
  return !!openTopics.value[topicId];
}
const pairColors = ['#e74c8b', '#84cc16', '#34d399', '#7c3aed', '#22d3ee'];

const gridRef = ref(null);
const leftRefs = ref([]);
const rightRefs = ref([]);
const svgLines = ref([]);

function updateLines() {
  if (!gridRef.value) return;
  const gridRect = gridRef.value.getBoundingClientRect();
  const lines = [];
  for (const [leftI, rightI] of Object.entries(matches.value)) {
    const leftEl = leftRefs.value[Number(leftI)];
    const rightEl = rightRefs.value[Number(rightI)];
    if (!leftEl || !rightEl) continue;
    const lr = leftEl.getBoundingClientRect();
    const rr = rightEl.getBoundingClientRect();
    lines.push({
      x1: lr.right - gridRect.left,
      y1: lr.top + lr.height / 2 - gridRect.top,
      x2: rr.left - gridRect.left,
      y2: rr.top + rr.height / 2 - gridRect.top,
      color: getPairColor(Number(leftI)),
    });
  }
  svgLines.value = lines;
}
const selectedAnswer = ref(null);
const userInput = ref('');
const selectedLine = ref(null);
const result = ref(null);
const earnedXp = ref(0);
const pool = ref([]);
const order = ref([]);
const selectedLeft = ref(null);
const matches = ref({});
const shuffledRight = ref([]);

watch(() => route.params.taskId, () => {
  selectedAnswer.value = null;
  userInput.value = '';
  selectedLine.value = null;
  result.value = null;
  earnedXp.value = 0;
  pool.value = [];
  order.value = [];
  selectedLeft.value = null;
  matches.value = {};
  shuffledRight.value = [];
});

const parts = computed(() => {
  if (!task.value || task.value.taskType !== 'fill-in-blank') return ['', ''];
  return task.value.codeTemplate.split('___');
});

function selectLine(i) {
  selectedLine.value = i;
  result.value = null;
}

function shuffleTask() {
  if (!task.value || task.value.taskType !== 'code-order') return;
  const items = (task.value.codeLines || []).map((text, i) => ({ originalIndex: i, text }));
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  pool.value = items;
  order.value = [];
}

watch(task, (newTask) => {
  if (newTask?.taskType === 'code-order') shuffleTask();
  if (newTask?.taskType === 'match-pairs') initMatchPairs();
}, { immediate: true });

watch(matches, () => nextTick(updateLines), { deep: true });

function takeItem(item) {
  pool.value = pool.value.filter(p => p.originalIndex !== item.originalIndex);
  order.value.push(item);
}

function dropItem(i) {
  const item = order.value.splice(i, 1)[0];
  pool.value.push(item);
}

function initMatchPairs(){
  if(!task.value || task.value.taskType !== 'match-pairs') return;
  const rights = (task.value.rightItems || []).map((text, i) => ({ originalIndex: i, text }));
  for (let i = rights.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rights[i], rights[j]] = [rights[j], rights[i]];
  }
  shuffledRight.value = rights;
  matches.value = {};
  selectedLeft.value = null;
}

function clickLeft(i) {
  if (matches.value[i] !== undefined){
    const newMatches = { ...matches.value };
    delete newMatches[i];
    matches.value = newMatches;
  }
  else {
    selectedLeft.value = i;
  }
}

function isAlreadyMatched(i) {
  return Object.values(matches.value).includes(i);
}

function clickRight(i) {
  if (selectedLeft.value === null) return;
  if (isAlreadyMatched(i)) return;
  matches.value ={...matches.value, [selectedLeft.value]: i}
  selectedLeft.value = null;
}

function getPairColor(pairIndex) {
  return pairColors[pairIndex % pairColors.length];
}

function getRightPairIndex(rightI) {
  const entry = Object.entries(matches.value).find(([, v]) => Number(v) === rightI);
  return entry ? Number(entry[0]) : -1;
}


async function checkAnswer() {
  const t = task.value;
  if (!t) return;

  let payload = null;

  if (t.taskType === 'single-choice') {
    if (selectedAnswer.value === null) return;
    payload = { selectedIndex: selectedAnswer.value };
  } else if (t.taskType === 'fill-in-blank') {
    if (!userInput.value.trim()) return;
    payload = { text: userInput.value.trim() };
  } else if (t.taskType === 'find-the-bug') {
    if (selectedLine.value === null) return;
    payload = { bugLineIndex: selectedLine.value };
  } else if (t.taskType === 'code-order') {
    if (order.value.length !== (t.codeLines || []).length) return;
    payload = { order: order.value.map(item => item.originalIndex) };
  } else if (t.taskType === 'match-pairs') {
    if (Object.keys(matches.value).length !== (t.leftItems || []).length) return;
    payload = {
      pairs: Object.entries(matches.value).map(([leftI, rightShuffledI]) => ({
        left: t.leftItems[Number(leftI)],
        right: shuffledRight.value[Number(rightShuffledI)].text,
      }))
    };
  }

  if (!payload) return;

  try {
    const response = await submitAnswer(t.id, t.taskType, payload);
    if (response.isCorrect) {
      result.value = 'correct';
      earnedXp.value = response.rewardXp || 0;
      markLocalCompleted(route.params.topicId, t.id);
      try {
        const updated = await fetchCurrentUser();
        if (updated) currentUser.value = updated;
      } catch {}
    } else {
      result.value = 'wrong';
    }
  } catch {
    result.value = 'wrong';
  }
}

const nextLesson = computed(() => {
  if (!topic.value || !task.value) return null;
  const items = topic.value.items;
  const taskIndex = items.findIndex(item => item.id === task.value.id);
  for (let i = taskIndex + 1; i < items.length; i++) {
    if (items[i].type === 'lesson') return items[i];
  }
  return null;
});

const nextLessonLink = computed(() => {
  if (!nextLesson.value) return null;
  return `/theory/${route.params.topicId}/${nextLesson.value.id}`;
});
</script>