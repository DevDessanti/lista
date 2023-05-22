import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/LoginTela.vue";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
//   {
//     path: "/Sobre",
//     name: "Sobre",
//     component: () =>
//       import("../views/Sobre.vue")
//   },
//   {
//     path: "/Perfil",
//     name: "Perfil",
//     component: () =>
//       import("../views/Perfil.vue")
//   }

];


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')
  
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/login')
    } else {
      next()
    }
  })
  
  export default router;