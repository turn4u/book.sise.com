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
  a {
    text-decoration: none;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 212597 */
    src: url('//at.alicdn.com/t/font_a6q61i730r6647vi.eot');
    src: url('//at.alicdn.com/t/font_a6q61i730r6647vi.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_a6q61i730r6647vi.woff') format('woff'),
    url('//at.alicdn.com/t/font_a6q61i730r6647vi.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_a6q61i730r6647vi.svg#iconfont') format('svg');
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
  .icon {
     width: 1em; height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
  }
</style>