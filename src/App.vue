<script setup>
import { RouterLink, RouterView } from "vue-router";

import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped>
#app {
  /* so the footer sticks to the bottom of page with margin-top: auto; */
  display: flex;
  flex-direction: column;
  min-height: 100%;

  position: relative;
}
</style>
