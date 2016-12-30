<template>
  <div class="dashboard">
    <navbar title="资料"></navbar>
    <div>
      <router-link to="/home">个人</router-link>
    </div>
    <input type="text" v-model="typeWord" @keyup.enter="addItem" placeholder="add a todo">
    <ul>
      <li v-for="m in msg">
        {{ m }}
      </li>
    </ul>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-header style="background: red" title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-cell title="标题文字" value="说明文字"><mt-spinner type="snake" ></mt-spinner></mt-cell>
  </div>
</template>

<script>
  import Navbar from './Navbar'

  export default {
    data () {
      return {
        typeWord: '',
        selected: '1',
        msg: [
          'you',
          'I'
        ]
      }
    },
    methods: {
      addItem () {
        this.msg.push(this.typeWord)
        this.typeWord = ''
      }
    },
    components: { 'navbar': Navbar }
  }
</script>
