<template>
  <main class="login__main">
    <h1>Login</h1>
    <section class="login__form-section">
      <form @submit.prevent="onSubmit">
        <article>
          <label for="email"></label>
          <input
            id="email"
            v-model="loginInputs.email"
            placeholder="Entrez votre identifiant"
          />
        </article>
        <article>
          <label for="password"></label>
          <input
            id="password"
            v-model="loginInputs.password"
            placeholder="Entrez un mot de passe"
          />
        </article>
        <button type="submit">Valider</button>
      </form>
    </section>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import Form from "../components/form.vue";
import { auth } from "../../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../node_modules/firebase/firebase-auth";

const formInputs = [
  {
    name: "email",
    placeholder: "Entrez votre email",
  },
  {
    name: "password",
    placeholder: "Entrez votre mot de passe",
  },
];

const loginInputs = reactive({
  email: "",
  password: "",
});

const onSubmit = () => {
  createUserWithEmailAndPassword(
    auth,
    loginInputs.email,
    loginInputs.password
  ).then((result) => {
    console.log(result);
  });
};
</script>
<style lang="scss" scoped>
@keyframes down {
  from {
    opacity: 0;
    transform: translateY(-300px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

%flex {
  display: flex;
  flex-direction: column;
}

.login__main {
  height: 100vh;
  @extend %flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    animation: down 500ms ease-in-out forwards;
  }

  .login__form-section {
    align-items: center;
    width: 100%;
    padding: 20px;
    @extend %flex;

    form {
      opacity: 0;
      animation: down 500ms ease-in-out forwards;
      @extend %flex;
      padding: 10px;

      border: solid white 2px;
      article {
        margin-block: 10px;
        border: solid red 1px;
      }
      input {
        padding: 10px;
        width: 100%;
      }
      min-width: 500px;
      box-shadow: 1px 1px 5px gray;
    }
  }
}
</style>
