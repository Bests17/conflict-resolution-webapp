import { createWebHistory, createRouter } from "vue-router"
import DashboardVue from "../views/dashboard/dashboard.vue"
import ActivitiesVue from "../views/activities/activities.vue"
import CategoriesVue from "../views/categories/categories.vue"
import CategoryFilesVue from "../views/files/files.vue"

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
    children: [
      {
        path: "",
        component: CategoriesVue,
      },
      {
        path: ":category_id/files",
        component: CategoryFilesVue,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
