<template>
  <div class="book-item">
    <div class="book-cover">
      <img :src="book.cover">
    </div>
    <div class="book-info">
      <h1>{{ book.title }}</h1>
      <div v-if="book.outDate" class="book-detail red">逾期时间 : {{ book.time }}</div>
      <div v-else class="book-detail">还书时间 : {{ book.time }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['book']
  }
</script>

<style>
  .book-item {
    background: white;
    padding: .5em .5em;
    overflow: hidden;
    border-bottom: 1px solid #E0E0E0;
  }
  .book-cover {
    padding-top: .1em;
    float:  left;
  }
  .book-cover img {
    display: block; 
  }
  .book-info {
    position: relative;
    float: left;
    margin-left: .8em;
  }
  .book-info h1 {
    line-height:  2em;
    font-size:  14px;
    font-weight: bold;  
  }
  .book-info .book-detail {
    color: #868484;
    font-size:  12px;
    padding-top: 3.5em;
  }
</style>
