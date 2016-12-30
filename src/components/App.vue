<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  * {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;
  	font-family: 'Microsoft Yahei'
  }
  body {
  	background: #ECECEC;
  }
  ul {
  	list-style: none;
  }
  @font-face {
  font-family: 'iconfont';  /* project id 212597 */
  src: url('//at.alicdn.com/t/font_1quxww0qezevobt9.eot');
  src: url('//at.alicdn.com/t/font_1quxww0qezevobt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1quxww0qezevobt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_1quxww0qezevobt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1quxww0qezevobt9.svg#iconfont') format('svg');
}
  .iconfont{
	font-family:"iconfont";
	font-size:14px;
	font-style:normal;
	-webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale; 
    padding-left:20px;
    color: #E0E0E0;
  }
</style>