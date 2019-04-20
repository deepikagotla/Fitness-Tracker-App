<template>
<nav class="navbar custom-header navbar-fixed-top">
  
  <div class="row text-left pt-10 fs-20">
    <div class="col-lg-11 col-sm-10 col-md-11 col-xs-10" style="margin-top:5px">
      
      <span class="pl-15"><img src="../../assets/logo.jpg" alt="Logo" class="main_logo"></span>
    </div>
    <div class="col-lg-1 col-sm-2 col-md-1 col-xs-2 p-0 m-0 text-right position-relative">
      <div class="username-main">
        <span>{{userData.first_name}}</span>
      </div>
      <div class="dropdown img-box logout-hover">
        <a type="button" data-toggle="dropdown">
          <img class="fa fa-user-circle user-icon" style="height: 34px; width: 34px; border-radius: 100px" v-if="displayImage" :src="displayImage" :title="userData.first_name"/>
          <i class="fa fa-user-circle user-icon" style="font-size:30px; margin-top:2px;" v-else :title="userData.first_name"/>
        </a>
        <ul class="dropdown-menu logout-dropdown">
          <!-- here need to add modal for showing user profile details, clicking on profile  menu -->
          <li class="logout-hover">
            <a>
              <div class="" >
              <span class="dropdown-icon profile-icon">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              </span>Profile
              </div>
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
    </div>
  </div>
</nav>
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
          name: 'Signin',
        });        
      },
      toggleSideBar() {
        this.$emit('toggle-sidebar');
      },
    },
  };

</script>

<style scoped>
  .custom-header {
    background-color: rgba(0, 0, 0, 0.075);
    border-bottom-color: #6485a2;
    color: #333;
    height: 55px;
  }

  .dropdown-menu>li:first-child {
    border-bottom: 1px solid #ccc;
  }

  .dropdown-menu {
    min-width: 140px;
    left: -103px;
    border-radius: 0;
  }

  .logout-icon {
    color: #bd0e28;
  }

  .profile-icon {
    color: #0a8caa;
  }

  .dropdown-icon {
    margin-right: 21px;
    font-size: 1.2em;
    cursor: pointer;
  }

  .toggler {
    transform: rotateZ(0deg);
    transition: 0.3s ease-out;
  }

  .toggler:hover {
    transform: rotateZ(90deg);
    color: #000;
  }

  /* username */

  .username-main {
    float: right;
    font-size: 14px;
    left: -100px;
    top: 10px;
    margin-left: -30px;
    position: relative;
  }

  .logout-dropdown {
    margin-top: 45px;
    margin-left: -42px;
  }

  .user-icon {
    margin-left: -55px;
    margin-top: 0px;
    position: absolute;
    color: #6485a2;
  }
.main_logo {
  display: block;
  margin-left: 10px;
  height: 30px;
  width: 60px;
  margin-top: -30px;
  position: absolute;
}
.logout-hover{
cursor: pointer;
}
img {
  width: auto;
  height: 164px;
}



</style>
