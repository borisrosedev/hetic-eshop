<template>
  <main class="login__main">
    <h1>Login</h1>
    <section class="login__form-section">
      <Form :data="inputs" :text-button="'Connexion'" @submit.prevent="onSubmit"/>
    </section>
  </main>
</template>
<script setup>
import Form from "../components/form.vue";
import checker from "../utils/checker";

const fields = reactive({})

const inputs = [
  {
    name: "email",
    placeholder: "Entrez votre identifiant",
    type: "email"
  },
  {
    name: "password",
    placeholder: "Entrez votre mot de passe",
    type: "password"
  },
  {
    name: 'role',
    type:'select',
    options: ['vendeur', 'acheteur']
  }
];

const emailHandler = (e) => {
  fields.email = e.target.value
}

const passwordHandler = (e) => {
  fields.password = e.target.value
}

const confirmedPasswordHandler = (e) => {
  fields.confirmedPassword = e.target.value
}



const onSubmit = () => {
  if(checker('alexandre', 'password')){
    console.log('hello');
  }
}

</script>
<style lang="scss" scoped>
@mixin FlexBox($dir:row, $justif:flex-start, $align:flex-start){
  display: flex;
  flex-direction: $dir;
  justify-content: $justif;
  align-items: $align;
}

.login__main {
  @include FlexBox(column, center, center);
  height: 100vh;
}
.login__form-section {
  @include FlexBox(column);
  padding: 20px;
  width: 400px;
  background-color: var(--secondary-color);

}
</style>
