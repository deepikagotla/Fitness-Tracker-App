<template>
  <div class="container">
    <div class="row">
        <navbar />
    </div>
    <div class="row " >      
      <div class="main-content ">
        <router-view></router-view>
      </div>      
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
import auth from '../../auth'

export default {
  name: 'dashboard',
  data() {
    return {
      showSideBar: true,
    };
  },
  created() {
    const token = localStorage.getItem('id_token');
    if (token && typeof (token) !== 'string') {
      this.$router.push({ name: 'Signin' });
    }
  },
  mounted() {
  },
  components: {
    Navbar,
  },
  computed: {
    userData() {
      return auth.getUser();
    },
  },
  methods: {
  },
};

</script>

<style>

</style>
