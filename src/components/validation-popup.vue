<template>
  <Teleport to="body">
    <Transition>
      <aside class="validation-popup" v-if="isVisible">
        <font-awesome-icon :icon="['fas', 'circle-chevron-down']" />
        <section class="validation-popup__message">
          {{ message }}
        </section>
      </aside>
    </Transition>
  </Teleport>
</template>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
  message: String,
  isVisible: Boolean,
});

onMounted(() => {
  console.log("popup has mounted");
});
</script>
