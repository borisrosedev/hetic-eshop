<template>
  <form class="form">
    <ArticleInput v-for="(el, index) in data" :key="index" :data="el"  :handler="handlers[el.name]"/>
    <button>{{ textButton ? textButton : 'Valider' }}</button>
  </form>
</template>
<script setup>
import ArticleInput from "./article-input.vue";
import { onMounted } from "vue"
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
  textButton: String,
  handlers: Object
});
onMounted(()=> {
    console.log('Form component has mounted', props.data, props.textButton);
})
</script>
<style lang="scss" scoped>

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}

button {
  background-color: rgb(40, 37, 37);
  color: white;
  border: none;
  padding: 10px 30px;
  margin-block: 30px;
  box-shadow: 0px 3px gray;
  align-self: center;
  &:hover {
    cursor: pointer;
  }

}
</style>
