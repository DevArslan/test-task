import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [

  {
    path: '/auth/',
    name: 'auth',
    component: () => import('../views/authView.vue'),
  },
  {
    path: '/list/',
    name: 'list',
    component: () => import(/* webpackChunkName: "login" */ '../views/listUsersView.vue'),
  },
  {
    path: '/createUser/',
    name: 'createUser',
    // route level code-splitting
    // this generates a separate chunk (addPerson.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/createUpdateUserView.vue'),
  },
];

const router = new VueRouter({
  routes,
});



router.beforeEach((to, from, next) => {
  if (to.name !== 'auth' && !localStorage.getItem('token')) next({ name: 'auth' })
  else{
    next()
  }
})

export default router;