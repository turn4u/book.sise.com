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
  .book-item .book-cover {
    padding-top: .3em;
    float: left;
  }
  .book-item .book-cover img {
    display: inline-block;
  }
  .book-item .book-info {
    float: left;
    padding: .2em 0 0 .5em;
  }
  .book-item .book-info h1 {
    font-size: 14px;
  }
  .book-item .book-detail {
    padding-top: 5em;
    font-size: 12px;
  }
/*  .book-item .book-cover {
    background: red;
    padding-top: .1em;
    float:  left;
  }
  .book-item .book-cover img {
    display: block; 
  }
  .book-item .book-info {
    background: green;
    position: relative;
    float: left;
    margin-left: .8em;
  }
  .book-item .book-info h1 {
    line-height:  2em;
    font-size:  14px;
    font-weight: bold;  
  }
  .book-item .book-info .book-detail {
    color: #868484;
    font-size:  12px;
    padding-top: 3.5em;
  }*/
</style>
