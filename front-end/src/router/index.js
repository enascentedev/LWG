import { createRouter, createWebHistory } from "vue-router";
import { StoreUser } from "@/stores/user";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/lembrar-senha",
			name: "forgottenName",
			component: () => import("@/views/forgottenView.vue"),
		},
		{
			path: "/register",
			name: "register",
			component: () => import("@/views/registerView.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/loginView.vue"),
		},
		{
			path: "/",
			component: () => import("@/views/HomeView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/home",
			name: "home",
			component: () => import("@/views/HomeView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/artigo-semanal",
			name: "ArtigoView",
			component: () => import("@/views/ArtigoView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: "/livros",
			name: "livrosView",
			component: () => import("@/views/livrosView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
	],
});

router.beforeEach((to, from, next) => {
  const storeUser = StoreUser(); // Acessa a store do Pinia
  const isAuthenticated = storeUser.authToken && localStorage.getItem('authToken'); // Verifica se está autenticado

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // Se a rota requer autenticação e o usuário não está autenticado, redireciona para o login
    next('/login');
  } else {
    // Caso contrário, prossegue normalmente
    next();
  }
});

export default router;
