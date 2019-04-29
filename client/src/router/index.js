import Vue from 'vue';
import Router from 'vue-router';
import store from './../vuex/store';
import Landing from './../components/common/Landing';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import dashboardComponent from './../components/common/Dashboard';
import pageNotFoundComponent from './../components/common/PageNotFound';
import Home from './../components/home/Home';
import Profile from './../components/profile/Profile';
import FriendList from './../components/friends/FriendList';
import Excersice from './../components/excersice/Excersice';
import FitnessExcersice from './../components/excersice/Fitness';
import RoutineExcersice from './../components/excersice/Routine';
import WorkoutsExcersice from './../components/excersice/Workouts';
import Product from './../components/products/Product';
import DietPlans from './../components/diet/DietPlans';
import AllUsers from './../components/users/AllUsers';
import auth from '../auth';


Vue.use(Router);

export default new Router({
  // mode: 'history',
  hashbang: false,
  routes: [{
    path: '/',
    name: 'Root',
    beforeEnter: function(to, from, next) {
      if (auth.checkAuth() && auth.getUser()) {
        next({ name: 'HomeView' });
      } else {
        next();
      }
      
  },
    component: Landing,
  },
  {
    path: '/signin',
    name: 'Signin',    
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
    {
      path: '/dashboard/profile',
      name: 'ProfileView',      
      component: Profile,
    },
    {
      path: '/dashboard/friends',
      name: 'FriendListView',      
      component: FriendList,
    },
    {
      path: '/dashboard/excersice',
      name: 'ExcersiceView',      
      component: Excersice,
      // children: [
      //   {
      //     path: '/dashboard/excersice-fitness',
      //     name: 'FitnessExcersiceView',      
      //     component: FitnessExcersice,
      //   },
      //   {
      //     path: '/dashboard/excersice-routine',
      //     name: 'RoutineExcersiceView',      
      //     component: RoutineExcersice,
      //   },
      //   {
      //     path: '/dashboard/excersice-workouts',
      //     name: 'WorkoutsExcersiceView',      
      //     component: WorkoutsExcersice,
      //   },
      // ]
    },
    {
      path: '/dashboard/excersice-fitness',
      name: 'FitnessExcersiceView',      
      component: FitnessExcersice,
    },
    {
      path: '/dashboard/excersice-routine',
      name: 'RoutineExcersiceView',      
      component: RoutineExcersice,
    },
    {
      path: '/dashboard/excersice-workouts',
      name: 'WorkoutsExcersiceView',      
      component: WorkoutsExcersice,
    },
    {
      path: '/dashboard/products',
      name: 'ProductView',      
      component: Product,
    },
    {
      path: '/dashboard/diet',
      name: 'DietPlansView',      
      component: DietPlans,
    },
    {
      path: '/dashboard/users',
      name: 'AllUsersView',      
      component: AllUsers,
    },    
    ],
  },
  {
    path: '*',
    component: pageNotFoundComponent,
  },
  ],
});
