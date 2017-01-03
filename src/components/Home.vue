<template>
  <div class="dashboard">
  <tabbar></tabbar>
  </div>
</template>

<script>
  import ButtonLink from './ButtonLink'
  import Tabbar from './Tabbar'

  export default {
    data () {
      return {
        clicked: '1',
        mainButton: [
          {title: '借阅书籍'},
          {title: '过期书籍'},
          {title: '我的预约'},
          {title: '我要借阅'}
        ],
        otherButton: [
          {title: '积分排行', url: 'point/rank'}
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
    components: { 'buttonLink': ButtonLink, 'tabbar': Tabbar }
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
  .info .info-point {

  }
  .info-point .point-item {
    
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
