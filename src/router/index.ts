import { createWebHistory, createRouter } from "vue-router"
import DashboardVue from "../views/dashboard/dashboard.vue"
import ActivitiesVue from "../views/activities/activities.vue"
import CategoriesVue from "../views/categories/categories.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: DashboardVue,
  },
  {
    path: "/activities",
    name: "Activities",
    component: ActivitiesVue,
  },
  {
    path: "/categories",
    name: "Categories",
    component: CategoriesVue,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
