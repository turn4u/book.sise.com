<template>
  <div class="list">
    <navbar title="网络安全"></navbar>
  </div>
</template>

<script>
  import Navbar from './Navbar'

  export default {
    data () {
      return {
        isActive: false
      }
    },
    components: { 'navbar': Navbar }
  }
</script>

<style>
</style>
