<script setup>
import { ref, onMounted } from "vue";
import { useUsersStore } from "@/stores/usersStore";
import { useRoute } from "vue-router";

const route = useRoute();
const usersStore = useUsersStore();

const userId = ref(route.params.id);
const username = ref("");

onMounted(async () => {
  const user = await usersStore.fetchUserById(userId.value);
  if (user) {
    username.value = user.username;
  } else {
    username.value = "User not found";
  }
});
</script>

<template>
  <main>
    <p>User with ID: {{ userId }}</p>
    <p>Username via fetch: {{ username }}</p>
  </main>
</template>

<style scoped></style>
