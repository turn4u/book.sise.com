<template>
  <transition :name="isTransition">
  <div class="rent-books">
    <navbar title="借阅书籍"></navbar>
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
        isTransition: 'slide-rent',
        bookItems: [
          {title: '冰与火之歌 (卷一)', cover: 'https://img1.doubanio.com/spic/s8855217.jpg', time: '2016-12-09 02:25:40'},
          {title: '冰与火之歌 (卷二)', cover: 'https://img1.doubanio.com/spic/s8855217.jpg', time: '2016-12-09 02:25:40', outDate: true}
        ]
      }
    },
    beforeRouteEnter (to, from, next) {
      if (from.path === '/my') {
        next(vm => {
          // console.log(vm.isTransition)
          vm.isTransition = ''
        })
      }

      next()
    },
    components: {'navbar': Navbar, 'bookItem': BookItem}
  }
</script>

<style>
  .rent-book {
    width: 100%;
    height: 100%;
  }
  .slide-rent-enter-active {
    width: 100%;
    position: fixed;
    top: 0;
    animation: rentEnter .2s linear;
  }
  .slide-rent-leave-active {
    width: 100%;
    position: fixed;
    top: 0;
    animation: rentLeave .2s linear;
  }
  @keyframes rentLeave {
    0% {
      opacity: 50%;
      right: 0;
    } 
    100% {
      opacity: 0;
      right: -100%;
    }
  }
  @keyframes rentEnter{
    0% {
      opacity: 50;
      right: -100%;
    } 
    100% {
      opacity: 100%;
      right: 0;
    }
  }
</style>
