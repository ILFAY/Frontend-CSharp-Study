<template>
    <div class="page_landing">
      <header class="topbar">
        <div class="topbar_leftside">
            <div>
                <img class="logo_img" src="../assets/images/logo.png" alt="">
            </div>
            <div>
                <h3 class="logo_text">C# Study</h3>
            </div>
        </div>

        <div class="topbar_rightside">
            <router-link to="/register" class="top_btn"><strong>Регистрация</strong></router-link>
            <router-link to="/authorisation" class="top_btn"><strong>Авторизация</strong></router-link>
        </div>
    </header>
    <main>
        <section class="main_part">
            <h1 class="title">Изучи C# как приключение</h1>
            <h3 class="description">Города — это темы, задания — помощь жителям, сюжет открывается по мере прогресса
            </h3>
            <div class="email_form">
                <form @submit.prevent="onStart" novalidate>
            <input
            id="email"
            name="email"
            type="email"
            placeholder="Введите ваш email"
            v-model="email"
            @input="error = ''"
            >
            <button class="email_btn" type="submit">Начать</button>
            </form>
            </div>
            <h5 v-if="error" class="form_error">
                {{ error }}
            </h5>
        </section>

        <section class="info">
            <div class="column">
                <h2>О курсе</h2>
                <p><em>Небольшое описание курсика</em></p>
            </div>

            <div class="column_with_separation">
                <h2>Список тем</h2>
                <div class="topic">
                    <h3>Тема 1</h3>
                    <p><em>Описание темы 1</em></p>
                </div>
                <div class="topic">
                    <h3>Тема 2</h3>
                    <p><em>Описание темы 2</em></p>
                </div>
                <div class="topic">
                    <h3>Тема 3</h3>
                    <p><em>Описание темы 3</em></p>
                </div>
                <div class="topic">
                    <h3>...</h3>
                </div>
            </div>

            <div class="column_with_separation">
                <h2>Дополнительные материалы</h2>
                <ul class=resources>
                    <li class="resources_item">
                        <span class="check" aria-hidden="true"></span>
                        <div>
                            <div class="resources_title">Документация</div>
                        </div>
                    </li>
                    <li class="resources_item">
                        <span class="check" aria-hidden="true"></span>
                        <div>
                            <div class="resources_title">Ссылки для углубления материала</div>
                        </div>
                    </li>
                    <li class="resources_item">
                        <span class="check" aria-hidden="true"></span>
                        <div>
                            <div class="resources_title">То что не вошло в курс</div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</div>
</template>

<script setup>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { isValidEmail } from "../utils/validators";
    import { saveEmail } from "../utils/email_prefill_utils";
    
    const router = useRouter();
    const email = ref("");
    const error = ref("");

    function onStart() {
    const value = email.value.trim();

    if (!isValidEmail(value)) {
        error.value = "Введите корректный email (например: name@mail.com)";
        return;
    }

    error.value = "";
    saveEmail(value);
    router.push("/register");
    }

</script>
