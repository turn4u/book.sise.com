<template>
  <div class="tabbar">
      <router-link to="/home" :class="[$route.path === '/home' || $route.path === '/' ? activeClass : '']">
        <i class="iconfont iconfont-tab">&#xe628;</i>
        <span class="tab-title">首页</span>
      </router-link>
      <router-link to="/category" :class="[$route.path === '/category' ? activeClass : '']">
        <i class="iconfont iconfont-tab">&#xe60a;</i>
        <span class="tab-title">检索</span>
      </router-link>
      <router-link to="/store" :class="[$route.path === '/store' ? activeClass : '']">
        <i class="iconfont iconfont-tab">&#xe695;</i>
        <span class="tab-title">收藏</span>
      </router-link>
      <router-link to="/my" :class="[$route.path === '/my' ? activeClass : '']">
        <i class="iconfont iconfont-tab">&#xe606;</i>
        <span class="tab-title">我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeClass: 'tabbar-active'
      }
    }
  }
</script>

<style>
  .tabbar {
    border-top: 1px solid #E0E0E0;
    background: white;
    width: 100%;
    height: 3.2em;
    padding-top: .4em;
    position: fixed;
    bottom: 0;
  }
  .tabbar a {
    width: 25%;
    color: #444;
    font-size: 14px;
    text-align: center;
    display: inline-block;
  }
  .tabbar a.tabbar-active {
    color: #59CAC2;
  }
  .tabbar a:not(:first-child) {
    margin-left: -5px;
  }
  .tabbar .tab-title {
    display: block;
    font-size: 12px;
    margin-top: -.2em;
  }
  .iconfont-tab {
    font-size: 20px;
    font-family:"iconfont";
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale; 
    padding-left: 0;
    color: #6B6B6B;
    display: block;
  }
</style>