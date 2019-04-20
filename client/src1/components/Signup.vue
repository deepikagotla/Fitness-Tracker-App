<!--  Signup.vue -->
<template>  
		<div class="login_bg">
			<div class="container">
				<div class="row">
					<div class="">
						<div class="panel-parent">
							<div class="panel-body panel-padding">
								<h4 class="font-style">Fitness Tracker App</h4>
								<img src="../assets/logo.jpg" alt="App Logo" class="app_logo">

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
														<input type="text" name="name"  class="form-control " v-model="newUser.name" placeholder="Name"
																required autocomplete="off">
												</div>
													<div class="form-group">
														<input type="text" name="mobile"  class="form-control " v-model="newUser.mobile" placeholder="Mobile"
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
														<button type="button"  class="btn btn-lg btn-block login" v-on:click="signup()"> Sign Up</button>
														
														</div>
												<hr>
										<div class="form-group">
												Or Sign In With 
										<a href="#" class="btn btn-primary" v-on:click="loginFacebook()"><span class="fa fa-facebook"></span> Facebook</a>
										<a href="#" class="btn btn-danger" v-on:click="loginGoogle()"><span class="fa fa-google-plus"></span> Google</a> 
												
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
					mobile:'',
					password: '',
					name: '',
					confirmpassword: ''
				}
			}
		},
	
		methods: {
			isValidForm(){
				if (this.newUser.name !==''
				&& this.newUser.mobile !==''
				&& this.newUser.email !=='' 
				&& this.newUser.password !=='' 
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
			loginFacebook(){
				console.log('Clieckd loginFacebook');
			},
			loginGoogle(){
				console.log('Clieckd loginGoogle');
			},
		}
		
	}
	
	
	</script>
		
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.panel-padding {
  width: 480px;
  height: 520px;
  }
	button {
  border-radius: 30px;
  }
  
		
	</style>
		


