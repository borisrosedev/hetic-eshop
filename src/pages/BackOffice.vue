<template>
  <main>Vendeur</main>
</template>
<script setup>
import { onMounted } from 'vue';
import { state } from '../stores/harlem/auth-store'
onMounted(() => {
    console.log(state)
})
</script>
<style lang="scss" scoped></style>
