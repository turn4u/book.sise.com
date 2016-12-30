<template>
  <div class="dashboard">
    <mt-tabbar fixed="true" v-model="clicked">
      <mt-tab-item id="1">
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        图书
      </mt-tab-item>
      <mt-tab-item id="3">
        收藏
      </mt-tab-item>
      <mt-tab-item id="4">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="clicked">
	  <mt-tab-container-item id="1">
	    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2">
	    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="3">
	    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="4">
	    <div class="info">
	      <div class="info-item">
	        <img src="http://wx.qlogo.cn/mmopen/uKx75PzicibB7VXttaNyhc2iagamEwoHicNE8DByMTtygNfehu8LDNH7ZVUzqHXeep8GsLMibHoicqyHy4Mic9VibBmAibuyWgC2EibraO/0">
	      </div>
		  <div class="info-name">
		    <span>消志捞</span>
		    <span>wowowowowowoowowowowowoow</span>
		  </div>
	    </div>
	    <div class="button">
	      <div class="main-button">
		      <ul>
		        <li v-for="n in 5" @click="popupEvent(n)">图书{{ n }}</li>
		      </ul>
	      </div>
	      <div class="other-button">
		      <ul>
		        <li v-for="button in otherButton" :title="button.title" is="buttonLink"></li>
		      </ul>
	      </div>
	    </div>
	  </mt-tab-container-item>
	</mt-tab-container>
	  <mt-popup
	  v-model="visible"
	  position="top">
	  <div>
	    1231234124214
	  </div>
      </mt-popup>
  </div>
</template>

<script>
  import ButtonLink from './ButtonLink'

  export default {
    data () {
      return {
        clicked: '1',
        mainButton: [
          {title: '借阅书籍'},
          {title: '过期书籍'},
          {title: '我的预约'},
          {title: '我要借书'}
        ],
        otherButton: [
          {title: '积分排行'}
        ],
        visible: false,
        popup: [
          {visible: false},
          {visible: false}
        ]
      }
    },
    methods: {
      showInfo () {
        this.popupVisible = !this.popupVisible
      },
      popupEvent (index) {
        this.popup[index].visible = true
      }
    },
    components: { 'buttonLink': ButtonLink }
  }
</script>

<style>
  .info {
    height: 9em;
    background: #2FD4C9;
    padding-top: 1.5em;
    border-bottom: 1px solid rgba(27, 148, 140, 0.3);
  }
  .info .info-item {
  	width: 4em;
  	height: 4em;
  	margin: 0 auto;
  }
  .info .info-item img {
  	width: 4em;
  	height: 4em;
  	border-radius: 50%;
  	border: 3px solid white;
  	display: block;
  }
  .info .info-name {
  	padding-top: .5em;
  	font-size: 14px;
  	color: white;
  	text-align: center;
  }
  .info .info-name span {
  	display: block;
    width: 60%;
    margin: 0 auto;
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
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
  .button ul {
  	background: white;
  	font-size: 14px;
  }
  .button ul li {
  	color: #7D7D7D;
  	padding: .5em 0;
  	padding-left: 1.3em;
  	border-bottom: 1px solid #E0E0E0
  }
  .button ul li:first-child,{
  	border-top: 1px solid #E0E0E0
  }
</style>
