<template>
<div>
  <div class="row ">
    <div class="col-md-2 pading">
      <a href="#/dashboard/excersice-fitness" class="">
        <h2>Fitness</h2>
        <img src="../../assets/7.png" alt="">
      </a>
    </div>
    <div class="col-md-2 pading">
      <a href="#/dashboard/excersice-routine">
        <h2>Routine</h2>
        <img src="../../assets/1.png" alt="">
      </a>
    </div>
    <div class="col-md-2 pading">
      <a href="#/dashboard/excersice-workouts">
        <h2>Workouts</h2>
        <img src="../../assets/5.png" alt="">
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'excersice-view',
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
img {
	width: 200px !important;
	height: 200px !important;
	/* text-align: center; */
	padding: 20px;
}
.pading {
  padding: 20px;
  display: block;
  width: 250px;
  height: auto;
  align-items: center;
  text-align: center;
}
</style>
      