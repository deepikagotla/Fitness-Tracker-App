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
import FitnessExcersice from './../components/excersice/Fitness';
import MentalExcersice from './../components/excersice/Mental';
import RoutineExcersice from './../components/excersice/Routine';
import WorkoutsRunning from './../components/workouts/Running';
import WorkoutsbicycleExercise from './../components/workouts/bicycleExercise';
import WorkoutsBicycling from './../components/workouts/Bicycling';
import WorkoutsCRUNCHES from './../components/workouts/CRUNCHES';
import WorkoutsLUNGES from './../components/workouts/LUNGES';
import WorkoutsPUSHUPS from './../components/workouts/PUSHUPS';
import WorkoutsSQUATS from './../components/workouts/SQUATS';
// import WorkoutsRunning from './../components/workouts/Workouts';
import Product from './../components/products/Product';
import DietPlans from './../components/diet/DietPlans';
import BurnBellyFat from './../components/diet/burn-belly-fat.vue';
import FatBurn from './../components/diet/fat-burn.vue';
import FitnessRegular from './../components/diet/fitness-regular.vue';
import SixPack from './../components/diet/six-pack.vue';
import WeightLoss from './../components/diet/weight-loss.vue';
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
      path: '/dashboard/exercise-fitness',
      name: 'FitnessExcersiceView',      
      component: FitnessExcersice,
    },
    {
      path: '/dashboard/exercise-mental',
      name: 'MentalExcersiceView',      
      component: MentalExcersice,
    },
    {
      path: '/dashboard/exercise-routine',
      name: 'RoutineExcersiceView',      
      component: RoutineExcersice,
    },
    {
      path: '/dashboard/exercise-running',
      name: 'WorkoutsRunningView',      
      component: WorkoutsRunning,
    },
    {
      path: '/dashboard/exercise-bicycling',
      name: 'WorkoutsBicyclingView',      
      component: WorkoutsBicycling,
    },
    {
      path: '/dashboard/exercise-bicycle-exercise',
      name: 'WorkoutsbicycleExerciseView',      
      component: WorkoutsbicycleExercise,
    },
    {
      path: '/dashboard/exercise-CRUNCHES',
      name: 'WorkoutsCRUNCHESView',      
      component: WorkoutsCRUNCHES,
    },
    {
      path: '/dashboard/exercise-LUNGES',
      name: 'WorkoutsLUNGESView',      
      component: WorkoutsLUNGES,
    },
    {
      path: '/dashboard/exercise-PUSHup',
      name: 'WorkoutsPUSHUPSView',      
      component: WorkoutsPUSHUPS,
    },
    {
      path: '/dashboard/exercise-SQUATS',
      name: 'WorkoutsSQUATSView',      
      component: WorkoutsSQUATS,
    },
    {
      path: '/dashboard/products',
      name: 'ProductView',      
      component: Product,
    },
    {
      path: '/dashboard/burnbellyfat',
      name: 'BurnBellyFatView',      
      component: BurnBellyFat,
    },
    {
      path: '/dashboard/fatburn',
      name: 'FatBurnView',      
      component: FatBurn,
    },
    {
      path: '/dashboard/fitnessregular',
      name: 'FitnessRegularView',      
      component: FitnessRegular,
    },
    {
      path: '/dashboard/sixpack',
      name: 'SixPackView',      
      component: SixPack,
    },
    {
      path: '/dashboard/weightloss',
      name: 'WeightLossView',      
      component: WeightLoss,
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
