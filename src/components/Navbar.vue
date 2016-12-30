<template>
  <div class="navbar">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style>
  .navbar {
  	background: #28beb4;
  	width: 100%;
  	height: 40px;
  }
  .navbar h1 {
  	letter-spacing: 3px;
  	font-weight: normal;
  	text-align: center;
  	color: white;
  	line-height: 40px;
  	font-size: 16px
  }
</style>