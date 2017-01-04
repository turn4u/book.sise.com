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
  	font-family: 'Microsoft Yahei' !important
  }
  body, html, #app {
    width: 100%;
    height: 100%;
  }
  body {
  	background: #ECECEC;
  }
  ul {
  	list-style: none;
  }
  a {
    text-decoration: none;
  }
  .red {
    color: red !important;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 212597 */
    src: url('//at.alicdn.com/t/font_ck3xv9sipacyp66r.eot');
    src: url('//at.alicdn.com/t/font_ck3xv9sipacyp66r.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_ck3xv9sipacyp66r.woff') format('woff'),
    url('//at.alicdn.com/t/font_ck3xv9sipacyp66r.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_ck3xv9sipacyp66r.svg#iconfont') format('svg');
  }
  .iconfont{
	  font-family:"iconfont" !important;
	  font-size:14px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale; 
    padding-left:20px;
    color: #E0E0E0;
  }
  .icon {
     width: 1em; height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
  }
</style>