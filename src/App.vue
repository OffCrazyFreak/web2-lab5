<script setup>
import { onMounted } from "vue";

import { RouterLink, RouterView } from "vue-router";

import { useAuthStore } from "@/stores/authStore";

import Navbar from "@/components/Navbar.vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.autoLogin();
});
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  position: relative;
}
</style>
