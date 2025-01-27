<script setup>
import { useRouter } from "vue-router";

import { ref } from "vue";

import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

function goToRandomUrl() {
  const randomUrl = `/${Math.random().toString(36).substring(2, 18)}`;

  router.push(randomUrl);
}
</script>

<template>
  <main>
    <h1>Welcome to my vue 3 web app</h1>

    <h3 v-if="!authStore.getUserAuthStatus">Login to view users</h3>
  </main>

  <footer>
    <p @click="goToRandomUrl">Or try clicking here to visit a random URL</p>
  </footer>
</template>

<style scoped>
main {
  padding-top: 30%;

  display: grid;
  place-items: center;
  gap: 3rem;
}

h1,
h3 {
  width: fit-content;
  margin-inline: 1rem;

  text-align: center;
  font-weight: bold;
}

footer {
  padding-top: 50%;

  display: grid;
  place-items: center;
}

footer > p {
  margin-inline: 1rem;

  max-width: fit-content;

  text-align: center;

  cursor: pointer;
}
</style>
