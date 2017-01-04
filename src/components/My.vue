<template>
  <transition :name="isTransition">
  <div class="dashboard">
	    <div class="info">
	      <div class="info-avatar">
	        <img src="http://wx.qlogo.cn/mmopen/uKx75PzicibB7VXttaNyhc2iagamEwoHicNE8DByMTtygNfehu8LDNH7ZVUzqHXeep8GsLMibHoicqyHy4Mic9VibBmAibuyWgC2EibraO/0">
	      </div>
		  <div class="info-detail">
		    <span class="info-name">消志捞</span>
		    <div>
		    	<span class="info-intro">wowowowowowoowowowowowoow</span>
		    	<i class="iconfont iconfont-edit">&#xe609;</i>
		    </div>
		  </div>
	    </div>
	    <div class="info-point">
			<div class="point-item">
				<div class="point-num">2</div>
				<div class="point-for">评论</div>
			</div>
			<div class="point-item">
				<div class="point-num">2</div>
				<div class="point-for">积分</div>
			</div>
			<div class="point-item">
				<div class="point-num">2</div>
				<div class="point-for">收藏</div>
			</div>
		</div>
	    <div class="button-sise">
	      <div class="main-button">
		      <ul>
		        <li v-for="button in mainButton" 
		        :url="button.url" 
		        :iconfont="button.iconfont" 
		        :title="button.title" 
		        is="buttonLink"></li>
		      </ul>
	      </div>
	      <div class="other-button">
		      <ul>
            <li v-for="button in otherButton" :iconfont="button.iconfont" :url="button.url" :title="button.title" is="buttonLink"></li>
		      </ul>
	      </div>
	    </div>
      <tabbar></tabbar>
  </div>
  </transition>
</template>

<script>
  import ButtonLink from './ButtonLink'
  import Tabbar from './Tabbar'

  export default {
    data () {
      return {
        isTransition: 'slide-my',
        actions: [
          {name: '扫条形码', method: 'xixixi'}
        ],
        actionsVisible: false,
        mainButton: [
          {title: '借阅书籍', url: '/my/rent', iconfont: '#icon-rent'},
          {title: '过期书籍', url: '/my/outdate', iconfont: '#icon-out-date'},
          {title: '我的预约', url: '', iconfont: '#icon-order'},
          {title: '我要借阅', url: '', iconfont: '#icon-want'}
        ],
        otherButton: [
          {title: '积分排行', url: 'point/rank', iconfont: '#icon-rank'}
        ],
        visible: false,
        popup: [
          {visible: false},
          {visible: false}
        ]
      }
    },
    beforeRouteEnter (to, from, next) {
      if (from.path === '/home') {
        next(vm => {
          vm.$el.className = 'dashboard'
        })
      }

      next()
    },
    components: { 'buttonLink': ButtonLink, 'tabbar': Tabbar }
  }
</script>

<style>
  .dashboard {
    width: 100%;
    min-height: 100%;
    background: #ECECEC;
  }
  .info {
    height: 9em;
    background: #2FD4C9;
    padding-top: 1.5em;
    border-bottom: 1px solid rgba(27, 148, 140, 0.3);
  }
  .info .info-avatar {
  	width: 4em;
  	height: 4em;
  	margin: 0 auto;
  }
  .info .info-avatar img {
  	width: 4em;
  	height: 4em;
  	border-radius: 50%;
  	border: 3px solid white;
  	display: block;
  }
  .info .info-detail {
  	font-size: 14px;
  	color: white;
  	text-align: center;
  }
  .info span {
  	margin: 0 auto;
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
  }
  .info .info-name {
  	display: block;
    width: 60%;
  }
  .info .info-intro {
	max-width: 50%;
	display: inline-block;
  }
  .info-detail div {
  	height: 1.8em;
	  width: 100%;
	  text-align: center;
  }
  .info-point {
  	height: 4.5em;
    text-align: center;
    background: white;
    border-bottom: 1px solid #E0E0E0;
  }
  .info-point .point-item {
	  display: inline-block;
	  width: 33.3%;
	  padding: 1em 0;
	  font-weight: bold
  }
  .info-point .point-item:not(:first-child) {
  	margin-left: -5px;
  	border-left: 1px solid #E0E0E0;
  }
  .info-point .point-num {
	  color: #fd9a57;
  }
  .info-point .point-for {
	  color: #999;
	  font-size: 14px;
  }
  .is-selected {
  	color: #2FD4C9 !important;
  }
  .main-button {
  	margin-top: .8em;
  }
  .other-button{
  	margin-top: .8em;
  }
  .button-sise ul {
  	background: white;
  	font-size: 14px;
  }
  .button-sise ul li {
  	color: #7D7D7D;
  	padding: .7em 0;
  	padding-left: 3em;
  	border-bottom: 1px solid #E0E0E0
  }
  .button-sise ul li:first-child,{
  	border-top: 1px solid #E0E0E0
  }
  
  /*icon*/
  .iconfont-edit {
  	position: relative;
  	top: -.35em;
  	left: -.1em;
  	padding-left: 0;
  	color: white;
  }
  .slide-my-leave-active {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: -999;
    animation: myLeave .2s linear;
  }
  .slide-my-enter-active {
    width: 100%;
    position: fixed;
    top: 0;
    animation: myEnter .2s linear;
  }
  @keyframes myEnter {
    0% {
      right: 100%;
    } 
    100% {
      right: 0;
    }
  }
  @keyframes myLeave {
    0% {
      right: 0;
    } 
    100% {
      right: 0;
    }
  }
</style>
