import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);
  const username = ref(localStorage.getItem("web2_lab5-username") || "");

  async function checkUsername(username) {
    return true;

    // TODO: connect to the API
    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      });
      if (response.ok) {
        console.log("Login successful");
        return true;
      } else {
        console.error("Failed to add user:", response.statusText);
      }

      c;
    } catch (error) {
      console.error("Failed to check username:", error);
      return false;
    }
  }

  async function loginUser(username) {
    isLoggedIn.value = true;

    localStorage.setItem("web2_lab5-username", username);
  }

  function logoutUser() {
    isLoggedIn.value = false;
    username.value = "";
    localStorage.removeItem("web2_lab5-username");

    if (router.currentRoute.value.path === "/users") {
      router.push("/");
    }
  }

  async function autoLogin() {
    const storedUsername = localStorage.getItem("web2_lab5-username");
    if (storedUsername) {
      const userExists = await checkUsername(storedUsername);
      if (userExists) {
        loginUser(storedUsername);
      } else {
        logoutUser();
      }
    }
  }

  const getUserAuthStatus = computed(() => isLoggedIn.value);

  return { loginUser, logoutUser, getUserAuthStatus, checkUsername, autoLogin };
});
