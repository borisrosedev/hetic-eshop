<template>
  <article class="article-uploader">
    <section class="article-uploader__left">
      <p>{{ data.placeholder }}</p>
      <input :id="data.name" type="file" @change="handler" />
    </section>
    <section class="article-uploader__right">
      <label :for="data.name">
        <font-awesome-icon :icon="['fas', 'upload']" class="uploader-icon"/>
      </label>
    </section>
  </article>
</template>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
  data: Object,
  handler: Function,
});

onMounted(() => {
  console.log("uploader has mounted", props.data);
});
</script>
<style scoped lang="scss">
@mixin FlexBox($dir: row, $justif: flex-start, $align: flex-start) {
  display: flex;
  flex-direction: $dir;
  justify-content: $justif;
  align-items: $align;
}
.article-uploader {
  height: 40px;
  @include FlexBox(row);

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 10px;
    z-index: -1;
  }

  &__left {
    width: 50%;
    @include FlexBox(row, center, center);
    height: 100%;
    border-block: solid black 1px;
    border-inline-start: solid black 1px;
    text-align: center;
  }

  &__right {
    width: 50%;
    position: relative;
    border: solid black 1px;
    height: 100%;
    @include FlexBox(row, center, center);
  }


}

.uploader-icon {
    transition: all 300ms ease-in-out;
    animation: iconMove 1000ms ease-in-out infinite;
    &:hover {
      cursor:pointer;
    }
}

@keyframes iconMove {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-4px);
  }
}
</style>
