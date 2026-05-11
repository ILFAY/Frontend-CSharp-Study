<template>
  <div class="page_registration">
    <main>
      <div class="card verify-card">

        <div v-if="status === 'loading'" class="verify-content">
          <div class="verify-spinner"></div>
          <h2>Подтверждение...</h2>
          <p class="verify-text">Проверяем ссылку</p>
        </div>

        <div v-else-if="status === 'success'" class="verify-content">
          <div class="verify-icon verify-icon-success">✓</div>
          <h2>Email подтверждён</h2>
          <p class="verify-text">Теперь можно войти в аккаунт.</p>
          <router-link to="/authorisation" class="btn-link">Войти</router-link>
        </div>

        <div v-else class="verify-content">
          <div class="verify-icon verify-icon-error">✕</div>
          <h2>Ошибка</h2>
          <p class="verify-text error-text">{{ errorMessage }}</p>
          <router-link to="/register" class="btn-link">Зарегистрироваться снова</router-link>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const status = ref("loading");
const errorMessage = ref("");

onMounted(async () => {
  const token = route.query.token;

  if (!token) {
    status.value = "error";
    errorMessage.value = "Ссылка недействительна.";
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/auth/verify-email?token=${encodeURIComponent(token)}`
    );
    if (response.ok) {
      status.value = "success";
    } else {
      const data = await response.json();
      status.value = "error";
      errorMessage.value = data.detail || "Недействительная или устаревшая ссылка.";
    }
  } catch {
    status.value = "error";
    errorMessage.value = "Сервер недоступен.";
  }
});
</script>
