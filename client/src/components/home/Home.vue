<template>
  <div class="container">
    <div class="row ">
        <div class="sidebar">
            Notification bar
          </div>
          <div class="home-view">
              <img class="img-home" src="../../assets/7.png" alt="">

              <div>
                <h3>
                    <span style="padding-right:150px;">SAY FIT </span>
                    <span style="padding-left:150px">SAY HAPPY :)</span>
                </h3>
                
              </div>
            
          </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'home-view',
  data() {
    return {      
      key: '',
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};

</script>
<style>

.sidebar {
  width: 15%;
  height: auto;
  position: fixed;
}

.img-home  {
	width: 560px !important;
	height: 400px !important;	
	
}

.home-view {
  padding: 50px;
  margin-left: 15%;
}

</style>
