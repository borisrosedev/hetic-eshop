<template>
    <main>
        <h1> Login </h1>
        <form @submit.prevent="onSubmit">
            <input v-model="loginInputs.email"  placeholder="Entrez votre identifiant"/>
            <input v-model="loginInputs.password" placeholder="Entrez un mot de passe"/>
            <button type="submit"> Valider </button>
        </form>
    </main>
</template>
<script setup>
import { reactive } from "vue"
import Form from '../components/form.vue';
import { auth } from '../../config/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from '../../node_modules/firebase/firebase-auth'

const formInputs = [
    {
        name: 'email',
        placeholder: 'Entrez votre email'
    },
    {
        name: 'password',
        placeholder: 'Entrez votre mot de passe'
    }
]

const loginInputs = reactive({
    email: '',
    password:''
})


const onSubmit = () => {
    createUserWithEmailAndPassword(auth, loginInputs.email, loginInputs.password)
        .then((result) => {
            console.log(result)
        })
}




</script>
<style lang="scss" scoped>

</style>