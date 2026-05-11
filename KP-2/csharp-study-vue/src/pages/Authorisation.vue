<template>
  <div class="page_registration">
    <main>
      <form class="card" @submit.prevent="onSubmit">
        <h2>Авторизация</h2>

        <div class="email_input_block">
          <h3>Email</h3>
          <input v-model="email" type="email" />
          <div class="field-message">
            <h5 v-if="emailError">{{ emailError }}</h5>
          </div>
        </div>

        <div class="password_input_block">
          <h3>Пароль</h3>
          <input v-model="password" type="password" />
          <div class="field-message">
            <h5 v-if="passwordError">{{ passwordError }}</h5>
          </div>
        </div>

        <button class="form_btn" type="submit">Войти</button>

        <div class="subtext">
          <router-link to="/forgot-password" class="forgot-link">Забыли пароль?</router-link>
        </div>

        <div class="subtext">
          <h5>Ещё нет аккаунта?</h5>
          <router-link to="/register">Зарегистрироваться</router-link>
        </div>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { isValidEmail, isValidPassword } from "../utils/validators";
import { loadEmail, saveEmail } from "../utils/email_prefill_utils";
import { loginUser } from "../utils/auth_storage";

const router = useRouter();
const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");

onMounted(async () => {
  email.value = loadEmail();
});

watch(email, (newValue) => {
  saveEmail(newValue.trim());
});

function validateForm() {
  emailError.value = "";
  passwordError.value = "";

  if (!isValidEmail(email.value.trim())) {
    emailError.value = "Введите корректный email";
    return false;
  }

  if (!isValidPassword(password.value)) {
    passwordError.value = "Пароль должен быть не менее 8 символов";
    return false;
  }

  return true;
}

async function onSubmit() {
  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  const result = await loginUser(email.value, password.value);

  if (!result.ok) {
    const msg = result.message || "";
    if (msg.includes("подтвержд")) {
      emailError.value = "Email не подтверждён — проверьте почту";
    } else if (msg.toLowerCase().includes("email") || msg.includes("не найден")) {
      emailError.value = msg;
    } else {
      passwordError.value = msg || "Неверный email или пароль";
    }
    return;
  }

  router.push("/Onboarding");
}
</script>
