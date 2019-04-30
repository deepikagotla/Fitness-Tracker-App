<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
            
            <a class="navbar-brand" href="#"><img src="../../assets/3.png" class="app_logo"></a>
          </div>
          <!-- Search bar -->
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <!-- <button type="submit" class="btn btn-default">Submit</button> -->
          </form>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#/dashboard/home">Home <span class="sr-only">(current)</span></a></li>
              <li><a href="#/dashboard/profile">Profile</a></li>
              <li><a href="#/dashboard/friends">Friends</a></li>
              
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Exercise <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#/dashboard/exercise-fitness">Physical Fitness</a></li>
                    <li><a href="#/dashboard/exercise-mental">Mental Fitness</a></li>
                    <li ><a href="#/dashboard/exercise-routine">Routine Exercise</a></li>
                    <li class="dropdown-submenu">
                        <a class="test" tabindex="-1" href="#">Workouts <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li><a tabindex="-1" href="#/dashboard/exercise-running">Running or walking</a></li>
                          <li><a tabindex="-1" href="#/dashboard/exercise-bicycling">Bicycling</a></li>
                          <li><a tabindex="-1" href="#/dashboard/exercise-bicycle-exercise">The Bicycle Exercise</a></li>
                          <li><a tabindex="-1" href="#/dashboard/exercise-CRUNCHES">CRUNCHES</a></li>
                          <li><a tabindex="-1" href="#/dashboard/exercise-LUNGES">LUNGES</a></li>
                          <li><a tabindex="-1" href="#/dashboard/exercise-PUSHup">PUSH UPS</a></li>
                          <li><a tabindex="-1" href="#/dashboard/exercise-SQUATS">SQUATS</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#/dashboard/products">Products</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Diet Plans <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#/dashboard/fatburn">Fat Burn</a></li>
                    <li><a href="#/dashboard/sixpack">Six Pack</a></li>
                    <li ><a href="#/dashboard/weightloss">Weight Loss</a></li>
                    <li ><a href="#/dashboard/burnbellyfat">Burn Belly Fat</a></li>
                    <li ><a href="#/dashboard/fitnessregular">Fitness Regular</a></li>
                  </ul>
                </li>
                <li><a href="#/dashboard/users">All Users</a></li>
            </ul>
            
            <div class="username-main text-right position-relative">
                <span>{{userData.first_name}}</span>
            </div>
              <div class="dropdown img-box logout-hover">
                  <a type="button" data-toggle="dropdown">
                    <img class="fa fa-user-circle user-icon" style="height: 34px; width: 34px; border-radius: 100px" v-if="displayImage" :src="displayImage" :title="userData.first_name"/>
                    <i class="fa fa-user-circle user-icon" style="font-size:30px; margin-top:2px;" v-else :title="userData.first_name"/>
                  </a>
                  <ul class="dropdown-menu logout-dropdown">
                    <li class="logout-hover">
                      <a href="#/dashboard/profile">
                        <span class="dropdown-icon profile-icon">
                          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                        </span>Profile
                        </a>
                    </li>
                    <li class="logout-hover">
                      <a v-on:click="logout()">
                        <span class="dropdown-icon logout-icon">
                          <i class="fa fa-sign-out" aria-hidden="true"></i>
                        </span>Logout</a>
                    </li>
                  </ul>
                </div>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import auth from '../../auth'



  export default {
    name: 'Navbar',
    props: [],
    data() {
      return {
        defaultImage: '../../assets/logo.jpg',
        displayImage: '', 
      };
    },
    mounted() {
      // this.displayImage = this.userData.profileImage ? this.userData.profileImage : '';
      window.$('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
    },
    computed: {
      
      userData() {
        return auth.getUser();      
      },
      profilePic() {        
      },
    },
    methods: {
      logout() {
        auth.logout();
        this.$router.push({
          name: 'Root',
        });        
      },
      toggleSideBar() {
        this.$emit('toggle-sidebar');
      },
    },
  };

</script>

<style scoped>

.dropdown-menu>li:first-child {
  border-bottom: 1px solid #ccc;
}

.dropdown-menu {
  min-width: 140px;
  left: -39px;
  border-radius: 0;
}

.logout-icon {
  color: red;
}

.profile-icon {
  color: #999;
}
.user-icon {
margin-left: -55px;
margin-top: 0px;
position: absolute;
color: #999;
}

  .dropdown-icon {
    margin-right: 14px;
    font-size: 1.2em;
    cursor: pointer;
  }

/* username */

.username-main {
  float: right;
  font-size: 14px;
  left: -90px;
  top: 14px;
  margin-left: -30px;
  position: relative;
  color: white;
}

.logout-dropdown {
  margin-top: 45px;
  margin-left: -42px;
}

.logout-hover{
  cursor: pointer;
}

.img-box {
  position: absolute;
  right: 30px;
  top: 10px;
}
.dropdown-submenu {
    position: relative;
}

.dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -1px;
}




</style>
