<template>
  <transition name="slide" mode="in-out">
  <div class="rent-books">
    <navbar title="逾期书籍"></navbar>
    <bookItem v-for="bookItem in bookItems" :book="bookItem"></bookItem>
  </div>
  </transition>
</template>

<script>
  import Navbar from './Navbar'
  import BookItem from './BookItem'

  export default {
    data () {
      return {
        bookItems: [
          {title: '冰与火之歌 (卷si)', cover: 'https://img1.doubanio.com/spic/s8855217.jpg', time: '2017-12-09 02:25:40', outDate: true},
          {title: '冰与火之歌 (卷wu)', cover: 'https://img1.doubanio.com/spic/s8855217.jpg', time: '2016-12-09 02:25:40', outDate: true}
        ]
      }
    },
    components: {'navbar': Navbar, 'bookItem': BookItem}
  }
</script>

<style>
  .rent-books {
    width: 100%;
    min-height: 100%;
    background: #ECECEC;
  }
  .slide-enter-active {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    animation: slideEnter .2s linear;
  }
  .slide-leave-active {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: -999;
    animation: slideLeave .2s linear;
  }
  @keyframes slideLeave {
    0% {
      right: 0;
    } 
    100% {
      right: 0;
    }
  }
  @keyframes slideEnter{
    0% {
      right: -100%;
    } 
    100% {
      right: 0;
    }
  }
</style>
