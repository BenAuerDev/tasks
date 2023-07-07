import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Overview",
    component: () => import("../views/Overview.vue"),
  },
  {
    path: "/finished",
    name: "Finished",
    component: () => import("../views/FinishedTasksView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
