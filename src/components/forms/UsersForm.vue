<script setup>
import { ref, watch } from "vue";
import { useUsersStore } from "@/stores/usersStore";

const props = defineProps({
  user: Object,
});

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
  () => props.user,
  (user) => {
    if (user) {
      username.value = user.username;
      isEditing.value = true;
      userId.value = user.id;
    } else {
      resetForm();
    }
  },
  { immediate: true }
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

      <button type="submit">
        <font-awesome-icon v-if="!isEditing" icon="plus-circle" />
        <font-awesome-icon v-else icon="save" />
        {{ !isEditing ? "Add" : "Save" }} user
      </button>
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
