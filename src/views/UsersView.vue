<script setup>
import { ref } from "vue";
import UsersForm from "@/components/UsersForm.vue";
import UsersTable from "@/components/UsersTable.vue";

const selectedUser = ref(null);

function handleEditUser(user) {
  selectedUser.value = user;
}
</script>

<template>
  <main>
    <h1>Users</h1>

    <UsersForm :user="selectedUser" />

    <UsersTable @edit-user="handleEditUser" />
  </main>
</template>

<style scoped></style>
