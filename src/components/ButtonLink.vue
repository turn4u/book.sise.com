<template>
  <router-link :to="{ path: url}">  
  <svg class="icon icon-dashboard" aria-hidden="true">
      <use :xlink:href="iconfont"></use>
  </svg>
  <li>{{ title }}<i class="iconfont iconfont-forward">&#xe641;</i></li></router-link>
</template>

<script>
  export default {
    props: ['title', 'url', 'iconfont']
  }
</script>

<style>
  .icon-dashboard {
    width: 1.5em;
    height: 1.8em;
    float: left;
    margin: .5em .3em 0 .8em;
  }
  .iconfont-forward {
    color: #c5c5c5;
    float: right;
    margin-right: .6em;
    margin-top: .3em;
    font-size: 14px
  }
</style>