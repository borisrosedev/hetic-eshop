<template>
  <form>
    <ArticleInput v-for="(el, index) in data" :key="index" :data="el" />
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
});
onMounted(()=> {
    console.log('Form component has mounted');
})
</script>
<style lang="scss" scoped></style>
