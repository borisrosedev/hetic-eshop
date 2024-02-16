<template>
  <main class="login__main">
    <ul class="login__options">
      <li
        @click="logChoice = 'login'"
        :class="
          logChoice == 'login'
            ? 'selected-log selected-log--true'
            : 'selected-log'
        "
      >
        Connexion
      </li>
      <li
        @click="logChoice = 'register'"
        :class="
          logChoice == 'register'
            ? 'selected-log selected-log--true'
            : 'selected-log'
        "
      >
        Inscription
      </li>
    </ul>
    <section class="login__form-section">
      <Form
        :data="inputs"
        :text-button="logChoice == 'login' ? 'Connexion' : 'Inscription'"
        @submit.prevent="onSubmit"
        :handlers="handlers"
        id="form"
      />
    </section>
  </main>
</template>
<script setup>
import { reactive, ref, watch } from "vue";
import Form from "../components/form.vue";
import checker from "../utils/checker";

const fields = reactive({});

const logChoice = ref("login");

const inputs = ref([
  {
    name: "email",
    placeholder: "Entrez votre identifiant",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Entrez votre mot de passe",
    type: "password",
  },
]);

watch(logChoice, (val) => {
  if (val == "login") {
    inputs.value = inputs.value.filter(
      (el) => el.name != "confirmedPassword" && el.name != "role"
    );
    inputs.value.push({
      name: "role",
      type: "select",
      options: ["vendeur", "acheteur"],
    });
  } else {
    inputs.value = inputs.value.filter((el) => el.name != "role");
    inputs.value.push(
      {
        name: "confirmedPassword",
        placeholder: "Confirmer le mot de passe",
        type: "password",
      },
      {
        name: "role",
        type: "select",
        options: ["vendeur", "acheteur"],
      }
    );
  }
  fields.email = ""
  fields.password = ""
  fields.confirmedPassword = ""
  fields.role = ""
  const form = document.getElementById('form');
  form.reset()
  console.log('fields after option changed', fields)
  
});

const emailHandler = (e) => {
  fields.email = e.target.value;
  console.log(fields.email);
};

const passwordHandler = (e) => {
  fields.password = e.target.value;
  console.log(fields.password);
};

const confirmedPasswordHandler = (e) => {
  fields.confirmedPassword = e.target.value;
  console.log(fields.confirmedPassword);
};

const selectHandler = (opt) => {
  fields.role = opt;
  console.log(fields.role);
};

const handlers = {
  email: emailHandler,
  password: passwordHandler,
  confirmedPassword: confirmedPasswordHandler,
  role: selectHandler,
};

const onSubmit = () => {
  console.log("into on submit");
  if(logChoice == 'login'){
    if (checker(fields.password, "password") && checker(fields.email, "email")) {
    console.log("🎉 form :", fields);
    }
  } else {
    if (checker(fields.password, "password") && checker(fields.email, "email") && fields.password === fields.confirmedPassword) {
      console.log("🎉 form :", fields);
    } 
  }
 
};
</script>
<style lang="scss" scoped>
@mixin FlexBox($dir: row, $justif: flex-start, $align: flex-start) {
  display: flex;
  flex-direction: $dir;
  justify-content: $justif;
  align-items: $align;
}

.login {
  &__main {
    @include FlexBox(column, center, center);
    height: 100vh;
  }
  &__options {
    border: solid var(--primary-color) 2px;
    width: 400px;

    li {
      padding: 10px;
      text-align: center;
      width: 50%;
    }
  }
}

.selected-log {
  background-color: (--secondary-color);
  transition: all 300ms ease-in-out;
  &:hover {
    cursor: pointer;
  }
}
.selected-log.selected-log--true {
  background-color: var(--primary-color);
  color: white;
}
.login__form-section {
  @include FlexBox(column);
  padding: 20px;
  width: 400px;
  background-color: var(--secondary-color);
}
</style>
