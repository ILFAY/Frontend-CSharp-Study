<template>
  <div class="page_registration page-compact">
    <main>
      <form class="card" @submit.prevent="onSubmit">
        <h2>Восстановление пароля</h2>

        <div v-if="!sent" class="forgot-form-body">
          <div class="email_input_block">
            <h3>Email</h3>
            <input v-model="email" type="email" placeholder="Введите ваш email" />
            <div class="field-message">
              <h5 v-if="emailError">{{ emailError }}</h5>
            </div>
          </div>

          <button class="form_btn" type="submit" :disabled="loading">
            {{ loading ? "Отправка..." : "Отправить ссылку" }}
          </button>
        </div>

        <div v-else class="sent-message">
          <div class="sent-icon">✉️</div>
          <p>Если такой email зарегистрирован, мы отправили на него ссылку для восстановления пароля.</p>
          <p class="sent-hint">Проверьте папку «Спам», если письмо не пришло.</p>
        </div>

        <div class="subtext">
          <router-link to="/authorisation">← Вернуться ко входу</router-link>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { isValidEmail } from "../utils/validators";

const email = ref("");
const emailError = ref("");
const loading = ref(false);
const sent = ref(false);

async function onSubmit() {
  emailError.value = "";

  if (!isValidEmail(email.value.trim())) {
    emailError.value = "Введите корректный email";
    return;
  }

  loading.value = true;
  try {
    await fetch("http://localhost:8000/api/v1/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value.trim() }),
    });
    // Всегда показываем успех — бэк не раскрывает, есть ли email
    sent.value = true;
  } catch {
    emailError.value = "Сервер недоступен";
  } finally {
    loading.value = false;
  }
}
</script>
