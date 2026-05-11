<template>
<div class="page_registration">
    <main>
        <form class="card" @submit.prevent="onSubmit">
            <h2>Регистрация</h2>
            <div class="email_input_block">
                <h3>Имя</h3>
                <input v-model="name" type="text">
            </div>
            <div class="email_input_block">
                <h3>Email</h3>
                <input v-model="email" type="email">
                <div class="field-message">
                <h5 v-if="emailError">{{ emailError }}</h5>
                </div>
            </div>
            <div class="password_input_block">
                <h3>Пароль</h3>
                <input v-model="password1" type="password">
                <div class="field-message">
                    <h5 v-if="passwordError">{{ passwordError }}</h5>
                </div>
            </div>
            <div class="password_input_block">
                <h3>Подтверждение пароля</h3>
                <input v-model="password2" type="password">
                <div class="field-message">
                    <h5 v-if="passwordError">{{ passwordError }}</h5>
                </div>
            </div>
            <button class="form_btn" type="submit">
             Зарегистрироваться
            </button>
            <div class="subtext">
                <h5>Уже есть аккаунт?</h5>
                <router-link to="/authorisation">Войти</router-link>
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
import { registerUser } from "../utils/auth_storage";

const router = useRouter();

const email = ref("");
const password1 = ref("");
const password2 = ref("");

const emailError = ref("");
const passwordError = ref("");

const name = ref("");

onMounted(() => {
  email.value = loadEmail();
});

watch(email, (newValue) => {
  saveEmail(newValue.trim());
});

async function  onSubmit() {
  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  const result = await registerUser(name.value.trim(), email.value, password1.value);

  if (!result.ok) {
    emailError.value = result.message;
    return;
  }

  router.push("/authorisation");
}

function validateForm() {
  emailError.value = "";
  passwordError.value = "";

  if (!isValidEmail(email.value.trim())) {
    emailError.value = "Введите корректный email";
    return false;
  }

  if (!isValidPassword(password1.value)) {
    passwordError.value = "Пароль должен быть не менее 8 символов";
    return false;
  }

  if (password1.value !== password2.value) {
    passwordError.value = "Пароли не совпадают";
    return false;
  }

  return true;
}
</script>


