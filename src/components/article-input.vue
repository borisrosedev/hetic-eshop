<template>
    <article class="article-input">
        <label :for="name"></label>
        <input :placeholder="placeholder" :type="type" :id="name">
    </article>
</template>
<script setup>
import { onMounted } from "vue"
const props = defineProps({
    data: {
        type: Object,
        default: {}
    }

})

onMounted(() => {
    console.log('🟠 article input has mounted')
})

</script>
<style lang="scss" scoped>

.article-input {
    display: flex;
    flex-direction: column;
    margin-block: 10px;
}

</style>