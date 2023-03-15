import { createRouter, createWebHistory } from "vue-router";
import QuizView from "@/views/QuizView.vue";
import QuizesView from "@/views/QuizesView.vue";
import NotFound from "@/views/NotFound.vue";
// const QuizView = () => import('@/views/QuizView.vue');
const routes = [
  {
    path: "/",
    name: "quizes",
    component: QuizesView,
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: QuizView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
