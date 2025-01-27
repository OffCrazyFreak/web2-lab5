<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

const route = useRouter().currentRoute;
const userId = ref(route.value.params.id);
</script>

<template>
  <main>User with id: {{ $route.params.id }}</main>
</template>

<style scoped></style>
