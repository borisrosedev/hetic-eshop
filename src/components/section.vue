<template>
  <section class="section">
    <h2 v-if="title">
      {{ title }}
    </h2>
    <section class="section__content" v-if="content.length">
      <p v-for="(el, i) in content" :key="i">{{ el }}</p>
    </section>
    <section class="section__actions" v-if="actions.length">
      <button v-for="(action, index) in actions" :key="index" @click="action.handler"> {{ action.name }}</button>
    </section>
  </section>
</template>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  title: String,
  content: Array,
  actions: Array,
});

onMounted(() => {
  console.log('section has mounted with', props.title, props.content, props.actions)
})
</script>
<style scoped lang="scss">

.section {

  h2 {
    margin: 0;
  }
  button {
    margin-right: 10px;
  }
  display: flex;
  flex-direction: column;

 
}

</style>
