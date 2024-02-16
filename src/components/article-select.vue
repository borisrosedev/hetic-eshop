<template>
  <article class="article-select">
    <section aria-label="conteneur du sélecteur">
      <section aria-label="conteneur de l'option choisie">
        <p v-if="!showOptions">
          {{ !selectedOption ? data.options[0] : selectedOption }}
        </p>
      </section>
      <ul aria-label="options" v-if="showOptions">
        <li v-for="option in data.options" @click="optionHandler(option)">{{ option }}</li>
      </ul>
    </section>
    <div aria-label="conteneur de l'icône d'ouverture et fermeture des options">
      <font-awesome-icon
        :icon="!showOptions ? ['fas', 'chevron-down'] : ['fas', 'chevron-up']"
        @click="!showOptions ? (showOptions = true) : (showOptions = false)"
      />
    </div>
  </article>
</template>
<script setup>
import { onMounted, ref } from "vue";

const showOptions = ref(false);
const selectedOption = ref("");

const props = defineProps({
  data: Array,
});

onMounted(() => {
  console.log("article select has mounted", props.data);
});

const optionHandler = (option) => {
    selectedOption.value = option 
    showOptions.value = false
}

</script>
<style lang="scss" scoped>

@mixin FlexBox($dir:row, $justif:flex-start, $align:flex-start){
    display: flex;
    flex-direction: $dir;
    justify-content: $justif;
    align-items: $align;
}
.article-select {
  display: flex;
  border: solid black 1px;

  & > section {
    height: 40px;
    width: 90%;
    position: relative;

    section {
      @include FlexBox(row,flex-start,center);
      padding-left: 10px;
      height: inherit;
      align-items: center;
    }
  }
  ul {
    @include FlexBox(column);
    position: absolute;
    bottom: -100;
    left: 0;
    background-color: white;
    width: 100%;
    border-top: solid black 1px;

    li {
      padding: 10px;
      &:hover {
        cursor: pointer;
        background-color: rgba($color: #000000, $alpha: 0.6);
        color: white;
      }
    }
  }
  div {
    width: 10%;
    @include FlexBox(row,center,center);
  }
}
</style>
