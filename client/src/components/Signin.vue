<!--  SignIn.vue -->
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
					<h4 >Login</h4>
					<div class="panel-body">
						<form >
							<div class="form-group">
							<input type="text" name="email" class="form-control" v-model="formData.email"
									placeholder="Email" autofocus required>
							</div>
							<div class="form-group">
							<input type="password" name="password"  class="form-control " v-model="formData.password" placeholder="Password"
									required autocomplete="off">
							</div>
							<br>
							<div class="form-group">
								<button type="button"  class="btn btn-primary" v-on:click="loginNormal()"> Sign In</button>								
							</div>
							<hr>
							<div class="form-group">
									Or Sign In With 
								<a href="#" class="btn btn-primary" v-on:click="loginFacebook()"><span class="fa fa-facebook"></span> Facebook</a>
								<a href="#" class="btn" id='google-signin-button' v-on:click="loginGoogle()"><span class="fa fa-google-plus"></span> Google</a> 
							</div>
							<hr>
							<div class="form-group">
									Or New User <a href="#/signup" class="" >Sign Up</a> Here.
											
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>		
</template>
  
<script>
import Vue from 'vue';
import auth from '../auth'

window.fbAsyncInit = function() {
    FB.init({
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      appId            : '522269604611938',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.6'
    });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

export default {
	name: 'signin',
	data () {
		return {
			formData: {
				email:'',
				password:'',
			},
		}
	},
	mounted() {
		gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })
	},

	methods: {
		onSignIn (googleUser) {
			const self = this;
			const profile = googleUser.getBasicProfile();
		
			const userData = {
				first_name: profile.getGivenName() || '',
				last_name: profile.getFamilyName() || '',
				email: profile.getEmail()
			}
			Vue.http.post('signin/social', userData)				
			.then((data) => {
				console.log(data)
				NProgress.done()
				if (data.body && data.body.results && data.body.results.status) {
					auth.setToken(data.body.results.token);
					localStorage.setItem('user_data', JSON.stringify(data.body.results.user));					
					self.$toastr.success("You are logged in successfully", "Login Success");
					self.$router.push({ name: 'HomeView' });
					return true; 
				} else {
					let msg = data.body.results.message || 'Unable to Login';					
					self.$toastr.error(msg, "Google Login Error!");
					return false;
				}
			})
			.catch((err) => {
				NProgress.done()
				console.log("login----------errr", err)
				if (err.body && err.body.results.message) {
					self.$toastr.error(err.body.results.message, "Google Login Error!");
					return false;
				} else {
					self.$toastr.error( "Google Login Error!");
					return false;
				}
			});
			
			this.signOut();	
		},
		signOut() {
			var auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut().then(function () {
			});
		},
		isValidForm(){
			if (this.formData !=='' && this.formData.password !=='') {
					return true;
			} else {
					return false;
			}
		},
		loginNormal(){
			var self = this;
			NProgress.start()
			if (this.isValidForm()) { 
				auth.login(this.formData).then(() => {
					NProgress.done()
					this.$toastr.success("You are logged in successfully", "Login Success");
					self.$router.push({ name: 'HomeView' });
					return true;  
				}, error => {
					// error callback
					NProgress.done()
					this.$toastr.error(error, "Login Error!");
					return false;
				});
			} else {
				NProgress.done()
				this.$toastr.error('Empty fields', "Login Error!");
				return false;
			}
		},
		loginFacebook(){
			console.log('Clieckd loginFacebook');
			const self = this;
			NProgress.start()
			FB.login(function(response) {
				FB.api('/me?fields=id,name,email', function(profile) {
					console.log('facebbok Successful login : ' );
					let name = profile.name.split(' ')
					const userData = {
						first_name: name[0] || '',
						last_name: name[1] || '',
						email: profile.email
					}
					Vue.http.post('signin/social', userData)						
					.then((data) => {
						console.log(data)
						NProgress.done()
						if (data.body && data.body.results && data.body.results.status) {
							auth.setToken(data.body.results.token);
							localStorage.setItem('user_data', JSON.stringify(data.body.results.user));							
							self.$toastr.success("You are logged in successfully", "Login Success");
							self.$router.push({ name: 'HomeView' });
							return true; 
						} else {
							let msg = data.body.results.message || 'Unable to Login';
							self.$toastr.error(msg, "Facebook Login Error!");
							return false;
						}
					})
					.catch((err) => {
						console.log("login----------errr", err)
						if (err.body && err.body.results.message) {
							NProgress.done()
							self.$toastr.error(err.body.results.message, "Facebook Login Error!");
							return false;
						} else {
							NProgress.done()
							self.$toastr.error( "Facebook Login Error!");
							return false;
						}
					});

				});
			// handle the response
			}, {scope: 'public_profile, email'});
			
		},
	}
  
}


</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-panel {
	padding: 30px;
	position: relative;
	margin-left: auto;
	margin-top: 35px;
	margin-right: auto;
	text-align: center;
	background-color: #dff0d8;
}
.border {
	border: 1px solid gray;
}

button {
	border-radius: 30px;
  }

</style>
  