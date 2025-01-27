import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);
  const username = ref(localStorage.getItem("web2_lab5-username") || "");

  async function checkUsername(username) {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/6f398628-ed97-4d8d-a16f-96f2e7b8144b",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username }),
        }
      );
      if (response.ok) {
        console.log("Username verified successfully");
        return true;
      } else {
        console.error("Failed to verify username:", response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Error checking username:", error);
      return false;
    }
  }

  async function loginUser(inputUsername) {
    isLoggedIn.value = true;
    username.value = inputUsername;
    localStorage.setItem("web2_lab5-username", inputUsername);
    console.log("User logged in:", inputUsername);
  }

  function logoutUser() {
    isLoggedIn.value = false;
    username.value = "";
    localStorage.removeItem("web2_lab5-username");

    if (/^\/users(\/.*)?$/.test(router.currentRoute.value.path)) {
      router.push("/");
    }

    console.log("User logged out");
  }

  async function autoLogin() {
    const storedUsername = localStorage.getItem("web2_lab5-username");
    if (storedUsername) {
      const userExists = await checkUsername(storedUsername);
      if (userExists) {
        await loginUser(storedUsername);
      } else {
        logoutUser();
      }
    }
  }

  const getUserAuthStatus = computed(() => isLoggedIn.value);

  return { loginUser, logoutUser, getUserAuthStatus, checkUsername, autoLogin };
});
