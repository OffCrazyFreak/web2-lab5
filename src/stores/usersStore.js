import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore("users", function () {
  const users = ref([]);

  async function fetchUsers() {
    try {
      const response = await fetch("/api/users");
      users.value = await response.json();
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }

  async function fetchUserById(userId) {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (response.ok) {
        return await response.json();
      } else {
        console.error("Failed to fetch user:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
    return null;
  }

  async function addUser(newUser) {
    try {
      const response = await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        console.log("User added successfully");
      } else {
        console.error("Failed to add user:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  }

  async function editUser(userId, updatedUser) {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      if (response.ok) {
        const index = users.value.findIndex((user) => user.id === userId);
        if (index !== -1) {
          users.value[index] = await response.json();
        }
      } else {
        console.error("Failed to edit user:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to edit user:", error);
    }
  }

  async function deleteUser(userId) {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        users.value = users.value.filter((user) => user.id !== userId);
      } else {
        console.error("Failed to delete user:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  }

  return {
    users,
    fetchUsers,
    fetchUserById,
    addUser,
    editUser,
    deleteUser,
  };
});
