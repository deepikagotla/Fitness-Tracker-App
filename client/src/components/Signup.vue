<!--  Signup.vue -->
<template>  

	<div class="container">
		<div class="row border">
			<div class="col-md-2 " style="border-right: 1px solid gray;">
				<a href="/#/"><img src="../assets/3.png" class="app_band"></a>							
			</div>
			<div class="col-md-10  " style="padding-left: 70px;">
				<h2 ><i>Fitness Tracker</i></h2>
			</div>
		</div>
		<div class="row pt-50">
			<div class="col-md-3 ">

			</div>
			<div class="col-md-6">
				<div class="panel form-panel">
					<h4 >Registration</h4>
					<div class="panel-body ">
						<div v-if="success" >
							<br> <br>
							<h1>Thanks for signup !</h1>
							<h4>Your registration done succesfully.</h4>									
							<br> <br>
							<div class="container-login100-form-btn">
								<div class="wrap-login100-form-btn">
									<div class="login100-form-bgbtn"></div>
									<router-link :to="{ name: 'Signin' }"><button class="login100-form-btn">Sign In</button></router-link>
								</div>
							</div>
						</div>
						<div v-if="!success"> 
							<form  class="login_form">
								<div class="form-group">
									<input type="text" name="fname"  class="form-control " v-model="newUser.first_name" placeholder="First Name"
												required autocomplete="off">
								</div>
								<div class="form-group">
									<input type="text" name="lname"  class="form-control " v-model="newUser.last_name" placeholder="Last Name"
												required autocomplete="off">
								</div>
								
								<div class="form-group">                                        
									<input type="text" name="email" class="form-control" v-model="newUser.email"
												placeholder="Email" autofocus required>
								</div>								
								<div class="form-group">
									<input type="password" name="password"  class="form-control " v-model="newUser.password" placeholder="Password"
												required autocomplete="off">
								</div>
								<div class="form-group">
									<input type="password" name="password"  class="form-control " v-model="newUser.confirmpassword" placeholder="Confirm Password"
												required autocomplete="off">
								</div>
								<div class="form-group">
										<label for="inputPassword3" class="radio-inline">Gender:</label>
									<label class="radio-inline">
										<input type="radio" name="gender" id="inlineRadio1" v-model="newUser.gender" value="male"> Male
									</label>
									<label class="radio-inline">
										<input type="radio" name="gender" id="inlineRadio2" v-model="newUser.gender" value="female"> Female
									</label>
								</div>
								<div class="form-group">
										<button type="button"  class="btn btn-primary " v-on:click="signup()"> Sign Up</button>
								</div>		
								<hr>
								<div class="form-group">
									Or Already member? <a href="#/signin" class="" >Sign In</a> Here.
								</div>
							</form>
						</div>		
					</div>
			</div>
		</div>
	</div>
</div>		
</template>
		
	<script>
	import { API_HOST } from '../api/urls';
	import auth from '../auth'
	
	export default {
		name: 'signup',
		data () {
			return {
				success: false,
				newUser: {
					email: '',
					password: '',
					first_name: '',
					last_name: '',
					gender: 'male',
					confirmpassword: ''
				}
			}
		},
	
		methods: {
			isValidForm(){
				if (this.newUser.first_name !==''
				&& this.newUser.last_name !=='' 
				&& this.newUser.email !=='' 
				&& this.newUser.password !==''
				&& this.newUser.gender !==''  
				&& this.newUser.confirmpassword !=='') {
					if (this.newUser.password !== this.newUser.confirmpassword) {
						this.$toastr.error('Password not match with confirm password', "Sign Up Error!");
						return false;
					} 
						return true;
				} else {
					this.$toastr.error('Empty fields', "Sign Up Error!");
						return false;
				}
			},
				
			signup(){
				const self = this;
				if (this.isValidForm()) {
					NProgress.start()

					auth.signup(this.newUser).then(() => {
						NProgress.done()
							this.$toastr.success("You are logged in successfully", "Login Success");
							self.success = true;
							return true;  
					}, error => {
							// error callback
							NProgress.done()
							this.$toastr.error(error, "Login Error!");
							return false;
					});					
				} else {
					NProgress.done()					
					return;
				}				
			},
		}
		
	}
	
	
	</script>
		
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
	border-radius: 30px;
}
.display-img {
	display: block;
	margin-left: auto;
	margin-right: auto;
	height: 100%;
	width: 100%;
}
.border {
	border: 1px solid gray;
}
 
.form-panel {
  padding: 30px;
	position: relative;
	margin-left: auto;
	margin-top: 35px;
	margin-right: auto;
	text-align: center;
	background-color: #dff0d8;
} 
</style>
		


