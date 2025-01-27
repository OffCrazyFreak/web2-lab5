<script setup>
import { ref, watch } from "vue";
import { useUsersStore } from "@/stores/usersStore";

const emit = defineEmits(["edit-user"]);

const usersStore = useUsersStore();
const username = ref("");
const isEditing = ref(false);
const userId = ref(null);

function handleSubmit() {
  if (isEditing.value) {
    usersStore.editUser(userId.value, { username: username.value });
  } else {
    usersStore.addUser({ username: username.value });
  }
  resetForm();
}

function resetForm() {
  username.value = "";
  isEditing.value = false;
  userId.value = null;
}

watch(
  () => emit("edit-user"),
  (user) => {
    username.value = user.username;
    isEditing.value = true;
    userId.value = user.id;
  }
);
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <legend>User form</legend>
      <div class="username-field">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>

      <button type="submit">{{ isEditing ? "Save User" : "Add User" }}</button>
    </fieldset>
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
