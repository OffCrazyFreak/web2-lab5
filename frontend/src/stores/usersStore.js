import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore("users", function () {
  const users = ref([]);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/42f1fdd2-fc9f-4824-b789-884e938205db"
      );
      users.value = await response.json();
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }

  async function fetchUserById(userId) {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/6b6e4085-798c-43d8-a858-72e6c3305749"
      );
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
      const response = await fetch(
        "https://run.mocky.io/v3/d2a59290-e048-4af1-8d4e-93ae547ee128",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
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
      const response = await fetch(
        "https://run.mocky.io/v3/fcb73b61-4b1e-46a2-a30e-5e2e5a1621ed",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
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
      const response = await fetch(
        "https://run.mocky.io/v3/0c044473-b159-461e-a530-76c2fa267a2c",
        {
          method: "DELETE",
        }
      );
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
