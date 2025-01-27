<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

const username = ref("");
const errorMessage = ref("");
const authStore = useAuthStore();
const router = useRouter();

async function handleLogin() {
  const trimmedUsername = username.value?.trim();
  const userExists = await authStore.checkUsername(trimmedUsername);
  if (userExists) {
    authStore.loginUser(trimmedUsername);
    router.push("/users");
  } else {
    errorMessage.value = "User with that username does not exist";
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <fieldset>
      <legend>Login form</legend>
      <div class="username-field">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>

      <button type="submit">Login</button>
    </fieldset>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>

<style scoped>
form {
  margin-block: 1rem;
}

fieldset {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.username-field > label {
  margin-right: 0.5rem;
}

.username-field > input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.username-field > label {
  margin-right: 0.5rem;
}
</style>
