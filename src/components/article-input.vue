<template>
  <article class="article-input" v-if="data.type != 'select'">
    <label :for="data.name"></label>
    <input
      :placeholder="data.placeholder"
      :type="data.type"
      :id="data.name"
      @input="(e) => handler(e)"
    />
  </article>
  <ArticleSelect :data="data" :handler="handler" v-else />
</template>
<script setup>
import { onMounted } from "vue";
import ArticleSelect from "./article-select.vue";
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
  handler: Function,
});

onMounted(() => {
  console.log("🟠 article input has mounted", props.data);
});
</script>
<style lang="scss" scoped>
.article-input {
  display: flex;
  flex-direction: column;
  margin-block: 10px;
  width: 100%;

  input {
    padding: 10px;
  }
}
</style>
