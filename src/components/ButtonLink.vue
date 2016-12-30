<template>
  <div>
  <router-link to="/title"><li>{{ title }}<i class="iconfont">&#xe641;</i></li></router-link>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style scoped>
  .iconfont {
    float: right;
    margin-right: .6em;
    margin-top: .3em;
    font-size: 14px
  }
</style>