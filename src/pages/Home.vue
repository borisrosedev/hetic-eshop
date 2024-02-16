<template>
  <main class="home__main">
    <section class="home__section">
        <Section title="Bienvenue 👋🏽" :content="content" :actions="actions" />
    </section>
  </main>
</template>
<script setup>
import Section from "../components/section.vue";
import { useRouter } from "vue-router"

const router = useRouter();

const content = [
  "Notre petite boutique est prête à vous recevoir",
  "Venez découvrir nos produits",
  "Vous n'allez pas le regretter",
  "Vous devez d'ailleurs vous inscrire pour commander nos produits"
];

const discoverHandler = () => {
    router.push('/products')
}

const registerHandler = () => {
    router.push('/login')
}

const actions = [{
    name: 'Découvrir',
    handler: discoverHandler
}, {
    name: 'S\'inscrire',
    handler: registerHandler
}];

</script>
<style scoped lang="scss">

.home {



    &__main {
        height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    &__section {
        background-color:var(--secondary-color);
        padding: 20px;
        opacity: 0;
        animation: sectionAnim 1000ms ease-in-out forwards;
    }
}

@keyframes sectionAnim {
    from {
        opacity: 0;
        transform: translateY(
            -300px
        );
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>
