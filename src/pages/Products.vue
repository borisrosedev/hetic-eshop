<template>
    <main class="products__main">
        <h1> Notre Atelier des saveurs </h1>    
    </main>

</template>
<script setup></script>
<style lang="scss" scoped>

@mixin FlexBox($dir: row, $justif: flex-start, $align: flex-start){
    display: flex;
    flex-direction: $dir;
    justify-content: $justif;
    align-items: $align;
}

.products__main {
    @include FlexBox(column);
}


</style>