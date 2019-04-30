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
  
  </script>
  
  <style>

    body{
      padding: 5px;
    }
  
  .align-center {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 99;
  }
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
  .cursor-pointer {
    cursor: pointer;
  }
  
  /* Popover Arrow */
  .arrow {
    border-right-color: red !important;
  }
  
  
  
/*Display*/
.display-block {
  display: block;
}
.app_band {
	display: block;
	margin-left: auto;
	margin-right: auto;
	height: 65px !important;
	width: 160px !important;
	padding: 5px;
}
  
.app_logo {
  display: block;
  margin-left: 0px;
  margin-right: auto;
  margin-top: -8px;
  height: 40px !important;
  width: 60px !important;
}
  /*Positions*/
  
  .position-relative {
    position: relative;
  }
  
    
  .main-content {
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px;
  }
  
  .center-text {
    text-align: center !important;
  }
  </style>