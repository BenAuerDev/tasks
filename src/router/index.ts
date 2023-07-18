import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: () => import('../views/Overview.vue'),
  },
  {
    path: '/completed',
    name: 'Completed',
    component: () => import('../views/CompletedTasksView.vue'),
  },
  {
    path: '/add-task',
    name: 'Add-Task',
    component: () => import('../views/AddTaskView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
