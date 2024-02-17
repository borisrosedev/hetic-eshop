<template>
  <main class="dashboard__main">
    <h1>Tableau de Bord</h1>
    <section v-if="!state.firstname && !state.lastname" class="dashboard__form">
      <h2>Complément d'informations</h2>
      <Form
        :data="inputs"
        :text-button="textButton"
        :handlers="handlers"
        @submit.prevent="onSubmit"
      />
    </section>
    <ConfirmationPopup :is-visible="isVisible" :data="loadedImage" :handlers="{confirm: handlers.confirm, cancel: handlers.cancel}"/>
  </main>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { state } from "../stores/harlem/auth-store";
import Form from "../components/form.vue";
import checker from "../utils/checker";
import ConfirmationPopup from "../components/confirmation-popup.vue";

onMounted(() => {
  console.log(state);
});

const fields = reactive({
  firstname: "",
  lastname: "",
  file: "",
});

const isVisible = ref(false);
const reader = ref(null)

const loadedImage = reactive({
  name: "portrait",
  url: "",
  question: 'Voulez-vous conserver cette photo ?',
  options: [{
    name: 'confirm',
    placeholder: 'Confirmer'
  }, {
    name: 'cancel',
    placeholder: 'Annuler'
  }]
});

const inputs = [
  {
    name: "firstname",
    placeholder: "Entrez votre prénom",
    type: "text",
  },
  {
    name: "lastname",
    placeholder: "Entrez votre nom",
    type: "text",
  },
  {
    name: "url",
    type: "file",
    placeholder: "Télécharger une photo de vous",
  },
];

const textButton = "Enregistrer";

const firstnameHandler = (e) => {
  fields.firstname = e.target.value;
  console.log("fields", fields.firstname);
};

const lastnameHandler = (e) => {
  fields.lastname = e.target.value;
  console.log("fields", fields.lastname);
};

const urlHandler = (e) => {
  isVisible.value = true
  const file = e.target.files[0];
  if (file) {
    fields.file = file;
    reader.value = new FileReader();
    reader.value.onload = (e) => {
      console.log(e.target.result)
      loadedImage.url = e.target.result;
    };
    reader.value.readAsDataURL(file);
  }
};

const confirmHandler = () => {
  isVisible.value = false;
  console.log("fields", fields);
  loadedImage.url = "";
};

const cancelHandler = () => {
  isVisible.value = false;
  fields.file = "";
  loadedImage.url = "";
  reader.value = null;
  const form = document.getElementById('confirmation-form')
  form.reset()
  

 
};

const onSubmit = () => {
  console.log("in on submit");
  if (
    checker(fields.firstname) &&
    checker(fields.lastname) &&
    fields.file.length
  ) {
    console.log("fields", fields);
  }
};

const handlers = {
  firstname: firstnameHandler,
  lastname: lastnameHandler,
  url: urlHandler,
  confirm: confirmHandler,
  cancel: cancelHandler,
};
</script>
<style lang="scss" scoped>
@mixin FlexBox($dir: row, $justif: flex-start, $align: flex-start) {
  display: flex;
  flex-direction: $dir;
  justify-content: $justif;
  align-items: $align;
}

.dashboard {
  &__main {
    @include FlexBox(column);
    height: 100vh;
    h1 {
      padding: 20px;
    }

    @media (0 <= width <= 714px) {
      height: 100%;
      @include FlexBox(column);
    }
  }

  &__form {
    @include FlexBox(column);
    padding: 20px;
    width: 400px;
    height: 400px;
    background-color: var(--secondary-color);
    align-self: center;
  

    @media (0 <= width <= 714px) {
      width: 90%;
    }
  }
}
</style>
