<template>
  <div class="category">
    <div class="category-flex">
      <div class="category-all">
        <ul>
          <li class="category-item" :class="{'category-active':isActive === index}" v-for="(item, index) in 15" @click="clickTab(index)">{{ item }}</li>
        </ul>
      </div>
      <div class="category-content">
        <div class="category-content-item">
          <img src="https://img3.doubanio.com/spic/s4141593.jpg">
          <div class="category-content-title">
            软件计算机程序设计软件计算机程序设计
          </div>
        </div>
        <div class="category-content-item">
          <img src="https://img3.doubanio.com/spic/s4141593.jpg">
          <div class="category-content-title">
            软件计算机程序设计软件计算机程序设计
          </div>
        </div>
        <div class="category-content-item">
          <img src="https://img3.doubanio.com/spic/s4141593.jpg">
          <div class="category-content-title">
            软件计算机程序设计软件计算机程序设计
          </div>
        </div>
        <div class="category-content-item">
          <img src="https://img3.doubanio.com/spic/s4141593.jpg">
          <div class="category-content-title">
            软件计算机程序设计软件计算机程序设计
          </div>
        </div>
        <div class="category-content-item">
          <img src="https://img3.doubanio.com/spic/s4141593.jpg">
          <div class="category-content-title">
            软件计算机程序设计软件计算机程序设计
          </div>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from './Tabbar'

  export default {
    data () {
      return {
        isActive: false
      }
    },
    methods: {
      clickTab: function (index) {
        this.isActive = index
      }
    },
    components: { 'tabbar': Tabbar }
  }
</script>

<style>
  .category {
    min-height: 100%;
    background: white;
  }
  .category .category-flex {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    margin-bottom: 3em;
  }
  .category .category-all {
    width: 5em;
    height: auto;
  }
  .category .category-item {
    padding: .5em 0;
    color: white;
    margin-bottom: 1px;
    text-align: center;
    background: #38D0C6;
  }
  .category .category-content {
    flex:1;
  }
  .category .category-content-item {
    width: 5.5em;
    padding: .5em .5em;
    height: auto;
    float: left;
  }
  .category .category-active {
    border: 1px solid #45B3AB;
    background: white;
    color: #6B6B6B;
  }
  .category .category-content-title {
    font-size: 12px;
    max-height: 3em;
    word-break:break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }
</style>
