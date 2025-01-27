<script setup></script>

<template>
  <main>
    <h1>Oops! You've reached a page that doesn't exist.</h1>

    <router-link class="link" to="/">Go back to the home page</router-link>
  </main>
</template>

<style scoped>
main {
  padding-top: 30%;

  display: grid;
  place-items: center;
  gap: 3rem;
}

h1,
.link {
  width: fit-content;

  text-align: center;
  font-weight: bold;
  margin-inline: 1rem;
  text-wrap: balance;
}

.link {
  color: #eee;
}
</style>
