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
    margin-top: .2em;
    padding: 0 .4em;
    border-radius: 6em;
    color: white;
    font-size: 12px;
    background: #FF4F4F;
  }
  .tue-badge-right {
    float: right;
  }
</style>