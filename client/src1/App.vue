<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
  },
};

// FIXME Please move the css to a seperate CSS File.
// It seems the css written below is not plain css, but LESS or PostCSS
</script>

<style>
body {
  background-color: #f8fbee !important;
}
body::-webkit-scrollbar-thumb {
  background-color: #142c36;
  border-radius: 4px;
}

body::-webkit-scrollbar {
  width: 6px;
  background: #fff;
  border-radius: 4px;
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#app {
  font-family: "roboto" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.align-center {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 99;
}
.cursor-pointer {
  cursor: pointer;
}

.error-style {
  font-size: 12px;
  color: #ff4848;
  padding-bottom: 5px;
  padding-left: 0;
}

/* Popover Arrow */
.arrow {
  border-right-color: red !important;
}

/*Margins*/
.m-0 {
  margin: 0px !important;
}
.m-5 {
  margin: 5px;
}
.m-10 {
  margin: 10px;
}
.mt-4 {
  margin-top: 4px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-100 {
  margin-top: 100px;
}
.ml-200 {
  margin-left: 200px;
}
.ml-20 {
  margin-left: 20px;
}
.ml-15 {
  margin-left: 15px;
}
.ml-50 {
  margin-left: 50px;
}
.ml-57 {
  margin-left: 57px;
}
.ml-0 {
  margin-left: 0px;
}
.mr-20 {
  margin-right: 20px;
}

/*Paddings*/
.p-0 {
  padding: 0px !important;
}
.p-5 {
  padding: 5px !important;
}
.p-10 {
  padding: 10px !important;
}
.p-20 {
  padding: 20px !important;
}
.pt-25 {
  padding-top: 25px !important;
}
.p-30 {
  padding: 20px !important;
}
.pt-5 {
  padding-top: 5px;
}
.pl-5 {
  padding-left: 5px;
}
.pl-10 {
  padding-left: 10px;
}
.pl-15 {
  padding-left: 15px;
}
.pb-10 {
  padding-bottom: 10px;
}
.pb-15 {
  padding-bottom: 15px;
}
.pb-20 {
  padding-bottom: 20px;
}
.pt-10 {
  padding-top: 10px !important;
}
.pt-15 {
  padding-top: 15px !important;
}
.pt-20 {
  padding-top: 20px !important;
}
.pt-30 {
  padding-top: 30px !important;
}
.pt-40 {
  padding-top: 40px !important;
}
.pb-30 {
  padding-bottom: 30px !important;
}
.pr-5 {
  padding-right: 5px;
}
.pr-20 {
  padding-right: 20px;
}

/*Fonts*/
.fw-bold {
  font-weight: bold;
}
.fs-40 {
  font-size: 40px;
}
.fs-20 {
  font-size: 20px;
}
.fs-14 {
  font-size: 14px;
}
.fs-16 {
  font-size: 16px;
}
.fs-18 {
  font-size: 18px !important;
}
.fs-20 {
  font-size: 20px;
}

/*Borders*/
.b-1 {
  border: 1px solid grey;
}

/*Colors*/
.color-red {
  color: #cc0a21 !important;
}
.color-blue {
  color: #cc0a21 !important;
}
.color-green {
  color: #49802b !important;
}
.color-white {
  color: #fff !important;
}
.color-black {
  color: #2c3e50 !important;
}

/*Background-colors*/
.bg-grey {
  background-color: #a9a9a9 !important;
}
.bg-white {
  background-color: #fff !important;
}
.bg-blue {
  background-color: #337ab7 !important;
}
.bg-green {
  background-color: #5cb85c !important;
}

/*Display*/
.display-block {
  display: block;
}

/*Modal classses*/

.modal-title {
  font-size: 20px !important;
  color: #666769;
  padding: 0px;
}
.model-content {
  margin-top: 80px !important;
}

.modal-header {
  padding: 7px 20px;
  background-color: #fff;
}

.modal-header .close {
  font-size: 28px;
}

.modal-footer {
  padding: 7px !important;
  color: #fff;
}

/*Global headers*/

.modal-content {
  margin-top: 80px;
}

.main-header {
  font-size: 30px;
  font-weight: 500;
  color: #666769 !important;
}

.label-title {
  font-size: 15px;
  font-weight: 600;
  color: #666769;
  padding-bottom: 4px;
}
.label-sub {
  font-size: 14px;
  font-weight: 600;
  color: #2e6da4;
}

.app_logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  width: 40px;
}
/*Positions*/

.position-relative {
  position: relative;
}


.panel-parent {
  text-align: center;
  margin-top: 50px;
  }  

  /* login block form outlayer*/
  
  .panel-padding {
  padding: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  width: 480px;
  height: 450px;
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  }
  
  .font-style {
  margin-bottom: 20px;
  margin-top: 0px;
  text-align: center;
  opacity: 0.5;
  font-weight: 600;
  }
  
  .login {
      width: 30%;
      background-color: rgba(0, 0, 0, 0.075);
      margin: auto;
  }
  input,
  
  
  .login_form {
  margin-left: auto;
  padding: 30px
  }
/*Side nav*/

.navbar-global {
  background-color: indigo;
}

.navbar-global .navbar-brand {
  color: white;
}

.navbar-global .navbar-user > li > a {
  color: white;
}

.navbar-primary {
  background-color:#6485a2 !important;
  color: #333;
  bottom: 0px;
  left: 0px;
  position: fixed;
  top: 49px;
  z-index: 9999;
  width: 150px;
  height: 100%;
  z-index: 8;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

.navbar-primary.collapsed {
  width: 60px;
}

.navbar-primary.collapsed .glyphicon {
  font-size: 22px;
}

.navbar-primary.collapsed .nav-label {
  display: none;
}

.btn-expand-collapse {
  position: fixed;
  display: block;
  background-color: #6485a2 !important;
  left: 0px;
  bottom: 0;
  width: inherit;
  z-index: 10;
  padding: 8px 0;
  border-top: solid 1px #666;
  color: #444;
  font-size: 20px;
  text-align: center;
  height: 44px;
}

.btn-expand-collapse:hover,
.btn-expand-collapse:focus {
  color: white;
}

.navbar-primary-menu,
.navbar-primary-menu li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar-primary-menu li a {
  display: block;
  padding: 18px 18px; /*19px 21px*/
  text-align: center;
  letter-spacing: 0.015em;
  color: #333;
}

.navbar-primary-menu li a:hover {
  background-color: rgba(0, 0, 0, 0.42); /*#0000006b*/
  text-decoration: none;
  color: #333;
}

.navbar-primary-menu li a .glyphicon {
  margin-right: 6px;
}

.navbar-primary-menu li a:hover .glyphicon {
  color: orchid;
}

.main-content {
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
}

.collapsed + .main-content {
  margin-left: 60px !important;
}


.center-text {
  text-align: center !important;
}
.center-align {
  padding: 70px 0;
  text-align: center;
}
</style>