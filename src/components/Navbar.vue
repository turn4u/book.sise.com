<template>
  <div class="navbar">
    <i class="iconfont iconfont-left"
     @click="goBack">&#xe693;</i>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .iconfont-left {
    float:  left;
    padding-top: 1.1em;
    position: relative;
    left: .6em;
    color: white;
    padding-left: 0;
  }
  .navbar {
  	background: #2FD4C9;
  	width: 100%;
  	height: 2.8em;
  }
  .navbar h1 {
    margin: 0;
    padding: 0;
    text-indent: -.3em;
  	letter-spacing: 3px;
  	font-weight: normal;
  	text-align: center;
  	color: white;
  	line-height: 2.8em;
  	font-size: 16px;
  }
</style>