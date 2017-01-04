<template>
  <span class="tue-badge tue-badge-right">{{ text }}</span>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style>
  .tue-badge {
    padding: .1em .6em;
    border-radius: 6em;
    color: white;
    font-size: 12px;
    background: #FF4F4F;
  }
  .tue-badge-right {
    float: right;
  }
</style>