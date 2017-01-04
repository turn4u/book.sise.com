<template>
  <router-link :to="{ path: url}">  
  <svg class="icon icon-dashboard" aria-hidden="true">
      <use :xlink:href="iconfont"></use>
  </svg>
  <li>{{ title }}<i class="iconfont iconfont-forward">&#xe641;</i><badge :text="10"></badge></li></router-link>
</template>

<script>
  import Badge from './Badge'

  export default {
    props: ['title', 'url', 'iconfont'],
    components: {'badge': Badge}
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
    margin: .3em .6em 0 -.8em;
    font-size: 14px
  }
</style>