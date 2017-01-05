<template>
  <div class="home">
  <mt-swipe class="tue-swipe" :auto="4000">
    <mt-swipe-item v-for="item in swipeData"><img :src="item.imgSrc"></mt-swipe-item>
  </mt-swipe>
  <div class="rank-nav">
    <router-link v-for="nav in rankNav" :to="{path: nav.url}">
      <div class="rank-item">
        <svg class="icon icon-nav" aria-hidden="true">
          <use :xlink:href="nav.iconfont"></use>
        </svg>
        <span class="nav-title">{{ nav.title }}</span>
      </div>
    </router-link>
  </div>
  <div class="comment">
    <span class="comment-title">最新评论</span>
    <div class="comment-info">
      <div class="comment-item">
        <div class="comment-detail">
          <img src="http://wx.qlogo.cn/mmopen/uKx75PzicibB4O58X8RaBPicXCLHOJuXibyqRueqKq2f2I2utww53x7bmHMiaW7DOLmjWL9LVJNyTnHcIzX6NtPuGeDC4WFwCEvic2/0">
          <div class="comment-detail-right">
            <div class="name">王玉玺</div><span class="badge">博览群书</span>
            <div class="time">12-05 20:56 来自《魔兽》</div>
          </div>
        </div>
        <div class="comment-content">
            asdadasfsafasdadasfsafasdadasasdadasfsafasdaasdadasfsafasdaasdadasfsafasdaasdadasfsafasdaasdadasfsafasdaasdadasfsafasdafsafasdaasdadasfsafasdaasdadasfsafasdaasdadasfsafasdaasdadasfsafasdaasdadasfsafasda
        </div>
      </div>
      <div class="comment-item">
        <div class="comment-detail">
          <img src="http://wx.qlogo.cn/mmopen/uKx75PzicibB7VXttaNyhc2iagamEwoHicNE8DByMTtygNfehu8LDNH7ZVUzqHXeep8GsLMibHoicqyHy4Mic9VibBmAibuyWgC2EibraO/0">
          <div class="comment-detail-right">
            <div class="name">消志捞</div><span class="badge">博览群书</span>
            <div class="time">12-12 20:56 来自《魔兽》</div>
          </div>
        </div>
        <div class="comment-content">
            asdadasfsafasdadasfsafasdadasasdaasda
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
        rankNav: [
          {url: '123', iconfont: '#icon-JingleBell', 'title': '热门'},
          {url: '123', iconfont: '#icon-Church', 'title': '推荐'},
          {url: '123', iconfont: '#icon-ChristmasTree', 'title': '活动'}
        ],
        swipeData: [{
          href: 'http://www.baidu.com',
          imgSrc: 'http://www.zunars.com/assets/img/act_m_banner.png'
        }, {
          href: 'http://www.baidu.com',
          imgSrc: 'http://www.zunars.com/assets/img/tenant/tenant_2.jpg'
        }, {
          href: 'http://www.baidu.com',
          imgSrc: 'http://www.zunars.com/assets/img/m3.jpg'
        }],
        mySwipe: {},
        slideNum: {}
      }
    },
    components: { 'tabbar': Tabbar }
  }
</script>

<style> 
  .home {
    height: 100%;
    background: #ECECEC
  }
  .rank-nav {
    width: 100%;
    height: 5em;
    background: white;
    border-bottom: 1px solid #E0DFDF;
  }
  .rank-nav .rank-item {
    width: 33.3%;
    height: 100%;
    padding-top: .8em;
    float: left;
    text-align: center;
  }
  .rank-nav .icon-nav {
    width: 2.2em;
    height: 2.2em;
  }
  .rank-nav .nav-title {
    font-size: 12px;
    color: #6B6B6B;
    display: block;
  }
  .tue-swipe {
    height: 13em !important;
    background: white;
  }
  .mint-swipe-item img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .mint-swipe-indicator.is-active {
    background: #000 !important;
    opacity: .4 !important;
  }
  .comment {
    margin-bottom: 3.5em;
  }
  .comment-title {
    display: block;
    font-size: 12px;
    color: #6B6B6B;
    padding: .8em 0 .5em .8em;
  }
  .comment-info {
    background: white;
  }
  .comment-item {
    position: relative;
    padding: .8em .5em;
    overflow: hidden;
    border-bottom: 1px solid #E0DFDF;
  }
  .comment-item .badge {
    position: absolute;
    right: 0;
    top: .6em;
    padding: .1em 1em;
    display: block;
    color: white;
    background: #36C7BE;
    border-radius: 15em 0 0 15em;
  }
  .comment-detail {
    overflow: hidden;
  }
  .comment-detail img {
    float: left;
    width: 2.5em;
    height: 2.5em;
    border-radius: 15em;
  }
  .comment-detail .comment-detail-right {
    float: left;
    font-size: 13px;
    padding-left: 1em;
  }
  .comment-detail-right .name {
    color: #2FD4C9;
  }
  .comment-detail-right .time {
    color: #6B6B6B;
    padding-top: .2em;
    font-size: 12px;
    float: right;
  }
  .comment .comment-content {
    margin-top: .5em;
    color: #6B6B6B;
    max-width: 100%;
    max-height: 4.5em;
    font-size: 14px;
    word-break:break-all;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }
</style>
