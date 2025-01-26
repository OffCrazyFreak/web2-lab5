<script setup>
import { ref } from "vue";

import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
</script>

<template>
  <header>
    <div>
      <nav>
        <router-link class="nav-logo" to="/">WEB 2 - Lab 5</router-link>

        <router-link class="nav-link" to="/">Home</router-link>

        <router-link
          v-if="authStore.getUserAuthStatus"
          class="nav-link"
          to="/users"
        >
          Users
        </router-link>
      </nav>
    </div>

    <div>
      <button
        class="login-button"
        @click="
          authStore.getUserAuthStatus
            ? authStore.logoutUser()
            : authStore.loginUser()
        "
      >
        <p v-if="!authStore.getUserAuthStatus">Login</p>
        <p v-else>Logout</p>
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 0.75rem 1rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

nav > * {
  color: #eee;
  text-decoration: none;
  font-weight: bold;

  transition: all 0.3s ease-in-out;
}
nav > *:hover {
  color: #ccc;
  transform: scale(1.05);
}

.nav-logo {
  font-size: 1.5em;
}

.nav-link {
  font-size: 1.25em;
}

.nav-link:hover {
  text-decoration: underline;
  color: #ccc;
}

.login-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #eee;
  color: #333;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  font-weight: bold;
}

.login-button:hover {
  background-color: #ccc;
  transform: scale(1.05);
}

.login-button > p {
  font-size: 1rem;
  font-weight: bold;
}
</style>
