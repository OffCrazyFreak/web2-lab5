import { ref, computed } from "vue";
import { defineStore } from "pinia";

import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);

  function loginUser() {
    isLoggedIn.value = true;
  }

  function logoutUser() {
    isLoggedIn.value = false;

    if (router.currentRoute.value.path === "/users") {
      router.push("/");
    }
  }

  const getUserAuthStatus = computed(() => isLoggedIn.value);

  return { loginUser, logoutUser, getUserAuthStatus };
});
