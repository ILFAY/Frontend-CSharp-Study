<template>
  <div class="page_registration">
    <main>
      <form class="card" @submit.prevent="onSubmit">

        <div v-if="tokenStatus === 'checking'" class="verify-content">
          <div class="verify-spinner"></div>
          <h2>Проверка ссылки...</h2>
        </div>

        <div v-else-if="tokenStatus === 'invalid'" class="verify-content">
          <div class="verify-icon verify-icon-error">✕</div>
          <h2>Ссылка недействительна</h2>
          <p class="error-text">Ссылка устарела или уже была использована.</p>
          <router-link to="/forgot-password" class="btn-link">Запросить новую</router-link>
        </div>

        <div v-else-if="done" class="verify-content">
          <div class="verify-icon verify-icon-success">✓</div>
          <h2>Пароль изменён</h2>
          <p class="verify-text">Можно войти с новым паролем.</p>
          <router-link to="/authorisation" class="btn-link">Войти</router-link>
        </div>

        <template v-else>
          <h2>Новый пароль</h2>

          <div class="password_input_block">
            <h3>Пароль</h3>
            <input v-model="password1" type="password" />
            <div class="field-message">
              <h5 v-if="password1Error">{{ password1Error }}</h5>
            </div>
          </div>

          <div class="password_input_block">
            <h3>Подтверждение пароля</h3>
            <input v-model="password2" type="password" />
            <div class="field-message">
              <h5 v-if="password2Error">{{ password2Error }}</h5>
            </div>
          </div>

          <button class="form_btn" type="submit" :disabled="loading">
            {{ loading ? "Сохранение..." : "Сохранить пароль" }}
          </button>
        </template>

      </form>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { isValidPassword } from "../utils/validators";

const route = useRoute();
const token = route.query.token || "";

const tokenStatus = ref("checking"); // checking | valid | invalid
const done = ref(false);
const loading = ref(false);

const password1 = ref("");
const password2 = ref("");
const password1Error = ref("");
const password2Error = ref("");

onMounted(async () => {
  if (!token) {
    tokenStatus.value = "invalid";
    return;
  }
  try {
    const res = await fetch("http://localhost:8000/api/v1/auth/reset-password/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    tokenStatus.value = res.ok ? "valid" : "invalid";
  } catch {
    tokenStatus.value = "invalid";
  }
});

async function onSubmit() {
  password1Error.value = "";
  password2Error.value = "";

  if (!isValidPassword(password1.value)) {
    password1Error.value = "Пароль должен быть не менее 8 символов";
    return;
  }
  if (password1.value !== password2.value) {
    password2Error.value = "Пароли не совпадают";
    return;
  }

  loading.value = true;
  try {
    const res = await fetch("http://localhost:8000/api/v1/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, new_password: password1.value }),
    });
    if (res.ok) {
      done.value = true;
    } else {
      const data = await res.json();
      password2Error.value = data.detail || "Ошибка. Попробуйте запросить новую ссылку.";
    }
  } catch {
    password2Error.value = "Сервер недоступен";
  } finally {
    loading.value = false;
  }
}
</script>
