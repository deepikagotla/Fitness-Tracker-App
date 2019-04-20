import Vue from 'vue';
import Router from 'vue-router';
import store from './../vuex/store';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import dashboardComponent from './../components/common/Dashboard';
import pageNotFoundComponent from './../components/common/PageNotFound';
import Home from './../components/home/Home';
import auth from '../auth';


Vue.use(Router);

export default new Router({
  // mode: 'history',
  hashbang: false,
  routes: [{
    path: '/',
    name: 'Root',
    redirect: 'signin',
  },
  {
    path: '/signin',
    name: 'Signin',
    beforeEnter: function(to, from, next) {
        if (auth.checkAuth() && auth.getUser()) {
          next({ name: 'HomeView' });
        } else {
          next();
        }
        
    },
    component: Signin,
    
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: {
      name: 'HomeView',
    },
    component: dashboardComponent,
    children: [{
      path: '/dashboard/home',
      name: 'HomeView',      
      component: Home,
    },
    ],
  },
  {
    path: '*',
    component: pageNotFoundComponent,
  },
  ],
});
