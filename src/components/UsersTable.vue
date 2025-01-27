<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const emit = defineEmits(["edit-user"]);

const router = useRouter();
const authStore = useAuthStore();

const users = ref([
  { id: 1, username: "John Doe" },
  { id: 2, username: "Jane Smith" },
]);

function viewUser(id) {
  router.push("/users/" + id);
}

function editUser(user) {
  emit("edit-user", user);
}

function deleteUser(id) {
  authStore.deleteUser(id);
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td class="table-username">
          <p tabindex="0" @click="viewUser(user.id)">
            {{ user.username }}
          </p>
        </td>
        <td class="table-actions">
          <button @click="editUser(user)">
            <font-awesome-icon icon="edit" />
          </button>
          <button @click="deleteUser(user.id)">
            <font-awesome-icon icon="trash-alt" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #eee;
  padding: 0.5rem;
}

.table-username {
  width: 100%;
}

.table-username > p {
  cursor: pointer;

  width: fit-content;
}

.table-username > p:hover {
  text-decoration: underline;
}

.table-actions {
  width: max-content;

  display: flex;
  gap: 0.5rem;
}

.table-actions > button {
  padding: 0rem;
  width: 1.75rem;
  aspect-ratio: 1;
}
</style>
