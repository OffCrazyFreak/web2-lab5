import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import UsersView from "@/views/UsersView.vue";
import UserView from "@/views/UserView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { useAuthStore } from "@/stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/users",
      name: "Users",
      component: UsersView,
    },
    {
      path: "/users/:id",
      name: "User",
      component: UserView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "Page not found",
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.path.startsWith("/users") && !authStore.getUserAuthStatus) {
    next("/");
  } else {
    next();
  }
});

router.afterEach((to) => {
  const baseTitle = "WEB 2 Lab 5";
  document.title = `${baseTitle} - ${to.name}`;
});

export default router;
