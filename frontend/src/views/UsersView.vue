<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

import UsersForm from "@/components/forms/UsersForm.vue";

import { useUsersStore } from "@/stores/usersStore";

const UsersTable = defineAsyncComponent(() =>
  import("@/components/UsersTable.vue")
);

const usersStore = useUsersStore();

const selectedUser = ref(null);

function handleEditUser(user) {
  selectedUser.value = user;
}

onMounted(() => {
  usersStore.fetchUsers();
});
</script>

<template>
  <main>
    <h1>Users</h1>

    <UsersForm :user="selectedUser" />

    <UsersTable @edit-user="handleEditUser" />
  </main>
</template>
