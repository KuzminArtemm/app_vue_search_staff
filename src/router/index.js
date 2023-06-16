import { createRouter, createWebHistory } from "vue-router";
import UserCardVue from "../components/UserCardVue";

const routes = [
  {
    path: "/users/:id",
    component: UserCardVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
