<template>
  <div class="page_onboarding">
    <div class="onboarding-card">
      <div class="onboarding-text">
        <h1>Твоё путешествие начинается</h1>
        <p>
          Ты — рыцарь <strong>#</strong>, потерявший память. Принцесса <strong>C</strong> похищена,
          столицу захватил некто по имени <strong>Null</strong>.
        </p>
        <p>
          Чтобы вернуть память и спасти её, тебе предстоит пройти через пять городов.
          В каждом — свои жители, свои задания и новая глава C#.
          Помогаешь людям — получаешь опыт, открываешь сюжет, двигаешься дальше.
        </p>
        <p>
          Никакой спешки. Просто читай, решай, смотри что происходит.
        </p>
      </div>
      <button class="onboarding-btn" @click="start">Начать приключение →</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { fetchCourse } from "../utils/api";

const router = useRouter();

async function start() {
  const course = await fetchCourse().catch(() => []);
  const firstTopic = course[0];
  const firstLesson = firstTopic?.items?.find(item => item.type === "lesson");
  if (firstTopic && firstLesson) {
    router.push(`/theory/${firstTopic.id}/${firstLesson.id}`);
  }
}
</script>