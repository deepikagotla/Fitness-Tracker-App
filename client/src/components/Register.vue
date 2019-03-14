<template>
  <div>
    <h1>FITNESS-TRACKER-REGISTRATION</h1>

    <input
      type="firstname"
      name="firstname"
      v-model="firstname"
      placeholder="firstname" />
      <br>
      <br>
    <input
      type="lastname"
      name="lastname"
      v-model="lastname"
      placeholder="lastname" />
      <br>
      <br>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <br>
    <button
      @click="register">
      Register
      </button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
