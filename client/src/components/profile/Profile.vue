<template>
  <div>
    <div class="row ">
      <div class="panel">
        <h2 class="panel_head">Profile Setting</h2>
        <form >              
            <div class="form-group">
                <input type="text" class="form-control " v-model="user.first_name" placeholder="First Name"
                    required autocomplete="off">
            </div>
            <div class="form-group">
              <input type="text"  class="form-control " v-model="user.last_name" placeholder="Last Name"
                  required autocomplete="off">
          </div>
            <div class="form-group">
                <input type="text" name="lname"  class="form-control " v-model="user.phone" placeholder="Phone Number"
                    required autocomplete="off">
            </div>
            
            <div class="form-group">
                <div class='input-group date' id='dateofbirth'>
                    <input type='text' id="dob" class="form-control" placeholder="Date of Birth" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar" ></span>
                    </span>
                </div>
              </div>
              <div class="form-group">  Gender :                                     
                  <label class="radio-inline" >
                    <input type="radio" :selected="user.gender === 'male'" v-model="user.gender" value="male"> Male
                  </label>
                  <label class="radio-inline">
                    <input type="radio" :selected="user.gender === 'female'" v-model="user.gender" value="female"> Female
                  </label>
              </div>
              <div class="form-group">
                <button type="button"  class="btn btn-primary " v-on:click="update()"> Save Setting</button>
              
              </div>
        </form>
      </div>
        
      
  </div>
</div>
</template>

<script>
import Vue from 'vue';
// import { API_HOST } from '../../api/urls';
import auth from '../../auth'

export default {
  name: 'profile-view',
  data() {
    return {      
      key: '',
      user: {
        dob: '',
        gender: '',
        first_name: '',
        last_name: '',
        phone: '',
      }
    };
  },
  created() {''
    // this.status.user_id = 
    window.$('#dob').val(this.userData.dob);
    this.user.dob = this.userData.dob ;
    this.user.gender = this.userData.gender;
    this.user.first_name = this.userData.first_name;
    this.user.last_name = this.userData.last_name;
    this.user.phone = this.userData.phone;
    this.user.id = this.userData.id
  },
  computed: {
      userData() {
        return auth.getUser();      
      },
    },
  mounted() {
    window.$('#dateofbirth').datetimepicker({
      format: 'MM/DD/YYYY',
      // maxDate: new Date()
    });
  },
  methods: {
    update(){
      this.user.dob = this.isoDate('dob')
      const self = this;
      console.log(this.user)
      NProgress.start()

      Vue.http.put('users', self.user)
      .then((data) => {
        NProgress.done()
        this.$toastr.success("Status posted.");
      })
      .catch((err) => {
        NProgress.done()
        this.$toastr.error(error, "Error while post status!");
      });
    
    }, 
    isoDate(id) {
      const val = window.document.getElementById(id).value;
      if (val) {
        const day = new Date(val);  // eslint-disable-line
        return day.toISOString();
      } else { //eslint-disable-line
        return null;
      }
    },
  }
};

</script>
<style>
  .panel{
    margin: auto;
    width: 60%;
    padding: 7%;
    background-color: #dff0d8;
  }
  .panel_head{
    padding-bottom: 5%;
    text-align: center;
    margin-top: -10%;
  }

</style>
