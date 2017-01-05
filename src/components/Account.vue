<template>
  <transition :name="isTransition" mode="in-out">
  <div class="account">
    <navbar title="我的信息"></navbar>
    <div @click="xixixi">123</div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="value"></mt-field>
    <mt-button v-if="loading" size="large" @click="loading = !loading">
      修改资料
    </mt-button>
    <mt-button v-else size="large" disabled>
      <mt-spinner type="snake"></mt-spinner>
    </mt-button>
  </div>
  </transition>
</template>

<script>
  import Navbar from './Navbar'

  export default {
    data () {
      return {
        loading: true,
        value: '',
        isTransition: 'slide-rent'
      }
    },
    methods: {
      xixixi: function () {
        this.loading = !this.loading
        this.$toast({
          message: '修改成功',
          duration: 800
        })
      }
    },
    components: {'navbar': Navbar}
  }
</script>
<style>
  .account {
    height: 100%;
    background: #ECECEC;
  } 
  .account .mint-cell-wrapper {
    font-size: 14px;
  }
  .account .mint-cell-value{
    max-width: 50%;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .account .mint-button {
    border-radius: 0;
  }
  .account .mint-button--default {
    position: fixed;
    bottom: 0;
    color: white;
    background: #F75F5F;
  }
  .account .mint-spinner-snake {
    border-top-color: rgba(255,255,255,.6) !important;
    border-left-color: rgba(255,255,255,.6) !important;
    border-bottom-color: rgba(255,255,255,.6) !important;
    margin: 0 auto;
  }
</style>