<template>
  <transition :name="isTransition" mode="in-out">
  <div class="store"
  >123
  </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        isTransition: 'slide-rent'
      }
    }
  }
</script>

<style>
</style>
