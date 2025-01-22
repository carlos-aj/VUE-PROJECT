import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

import { createWebHistory, createRouter } from 'vue-router'
import login from './components/login.vue'
import App from './App.vue'
import landig from './components/landig.vue'
import reminder from './components/reminder.vue'
import register from './components/register.vue'

const routes = [
  { path: '/reminder', component:  reminder, meta:{ requiresAuth: true }},
  { path: '/logIn', component: login, meta:{ requiresAuth: false } },
  { path: '/', component: landig, meta:{ requiresAuth: false } },
  { path: '/register', component: register, meta:{ requiresAuth: false } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App)
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  });

  app.use(router);
  
  app.mount('#app')