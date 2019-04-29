<template>
	<div class="container">
		<div class="row border">
			<div class="col-md-2 " style="border-right: 1px solid gray;">
				<img src="../../assets/3.png" class="app_band">
			</div>
			<div class="col-md-10  " style="padding-left: 70px;">
				<h2 ><i>Fitness Tracker</i></h2>
			</div>
		</div>
		<div class="row signin-btn">
			<div class="col-sm-6">
				<a href="#/signin" class="btn btn-lg btn-success" >Login</a>
			</div>
			<div class="col-sm-6 ">
				<a href="#/signup" class="btn btn-lg btn-primary" >Register</a>
			</div>
		</div>
		<div class="row galary">
			<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
				<!-- Indicators -->
				<ol class="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					<li data-target="#carousel-example-generic" data-slide-to="2"></li>
					<li data-target="#carousel-example-generic" data-slide-to="3" ></li>
					<li data-target="#carousel-example-generic" data-slide-to="4"></li>
					<li data-target="#carousel-example-generic" data-slide-to="5"></li>
					<li data-target="#carousel-example-generic" data-slide-to="6"></li>
					<li data-target="#carousel-example-generic" data-slide-to="7"></li>
				</ol>
					
						<!-- Wrapper for slides -->
						<div class="carousel-inner" role="listbox">
							<div class="item active">
								<img src="../../assets/1.png" >
							</div>
							<div class="item">
								<img src="../../assets/2.png" >
							</div>
							<div class="item">
								<img src="../../assets/3.png" >
							</div>
							<div class="item">
								<img src="../../assets/4.png" >
							</div>
							<div class="item">
								<img src="../../assets/5.png" >
							</div>
							<div class="item">
								<img src="../../assets/6.png" >
							</div>
							<div class="item">
								<img src="../../assets/7.png" >
							</div>
							<div class="item">
								<img src="../../assets/8.png" >
							</div>
						</div>
					
						<!-- Controls -->
						<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
			<!-- <div class="">
				<img src="../../assets/1.png">
			</div>
			<div>
				<img src="../../assets/2.png">
			</div>
			<div>
				<img src="../../assets/3.png">
			</div>
			<div>
				<img src="../../assets/4.png">
			</div>			
			<div>
				<img src="../../assets/5.png">
			</div>
			<div>
				<img src="../../assets/6.png">
			</div>
			<div>
				<img src="../../assets/7.png">
			</div>
			<div>
				<img src="../../assets/8.png">
			</div> -->
		
		</div>
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'landing-view',
    data() {
      return {      
        key: '',
      };
    },
    created() {
			window.$('.carousel').carousel({
				interval: 1000,
				wrap:true
			})
    },
    mounted() {
    },
    methods: {
    }
  };
  
  </script>
  <style>
.galary {
	padding: 20px !important;
	text-align: center !important;
}
.signin-btn {
	padding-top: 40px !important;
	text-align: center !important;
}

img {
	width: 600px !important;
	height: 400px !important;
	/* text-align: center; */
	/* padding: 20px; */
}
.border {
	border: 1px solid gray;
}
.item {
	text-align: center !important;
	margin-left: 50px;
}
.btn {
	border-radius:20px 
}
</style>
  