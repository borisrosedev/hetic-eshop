<template>
  <Teleport to="body">
    <Transition>
      <aside class="confirmation-popup" v-if="isVisible">
        <form class="confirmation-popup__content" id="confirmation-form">
          <figure>
            <img :src="data.url" :alt="data.name" />
          </figure>
          <section class="confirmation-popup__message">
            {{ data.question }}
          </section>
          <section class="confirmation-popup__actions">
            <button
              v-for="(option, i) in data.options"
              :key="i"
              @click="handlers[charChanger(option.name, 'lower')]"
            >
              {{ option.placeholder }}
            </button>
          </section>
        </form>
      </aside>
    </Transition>
  </Teleport>
</template>
<script setup>
import { onMounted } from "vue";
import charChanger from "../utils/char-changer";

const props = defineProps({
  data: Object,
  handlers: Object,
  isVisible: Boolean,
});

onMounted(() => {
  console.log("popup has mounted");
});
</script>
<style lang="scss" scoped>
@mixin FlexBox($dir: row, $justif: flex-start, $align: flex-start) {
  display: flex;
  flex-direction: $dir;
  justify-content: $justif;
  align-items: $align;
}

.confirmation-popup {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index:20;
  background-color: rgba($color: gray, $alpha: 0.4);

  &__message {
    padding: 20px;
  }

  &__content {
    @include FlexBox(column);
    width: 300px;
    margin: 25vh auto;
    background-color: var(--secondary-color);
    
    & > figure {
      height: 50%;
      width: 100%;
    }

    @media (0<= width <= 714px) {
      width: 90%;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    width: 100%;
    & > button {
      width: 50%;
      border: solid black 1px;
    }
    
  }
}
</style>
