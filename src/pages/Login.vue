<template>
  <main class="login__main">
    <h1>Login</h1>
    <section class="login__form-section">
      <Form :data="inputs" :text-button="'Connexion'" />
    </section>
  </main>
</template>
<script setup>
import Form from "../components/form.vue";

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
