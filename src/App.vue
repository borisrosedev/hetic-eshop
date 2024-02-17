<template>
  <Header />
  <router-view></router-view>
</template>
<script setup>
import { onAuthStateChanged } from "firebase/auth";
import Header from "./layouts/Header.vue";
import { auth } from "../config/firebase.config";
import { FirestoreService } from "./services/firestore.service";
import { useRouter } from "vue-router";
import {
  tokenGetter,
  roleGetter,
  fetchUserData,
} from "./stores/harlem/auth-store";
const router = useRouter();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user-uid", user.uid);
    fetchUserData(user.uid).then(() => {
      if (roleGetter.value == "seller") {
        router.push("/backoffice/" + user.uid);
      }
      if (roleGetter.value == "buyer") {
        router.push("/dashboard/" + user.uid);
      }
    });
  }
});
</script>
<style lang="scss">


</style>
