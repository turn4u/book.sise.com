<template>
  <div class="store">123
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from './Tabbar'

  export default {
    components: { 'tabbar': Tabbar }
  }
</script>

<style>
  .store {
    height: 100%;
    background: #ECECEC
  }
</style>
