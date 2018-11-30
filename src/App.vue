<template>
  <div id="app">
    <header>
      <el-menu 
        :default-active="$route.path" class="elMenu" mode="horizontal" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/heart">heart</el-menu-item>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
      </el-menu>
    </header>
    <router-view class="routerMain" />
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from '@/components/vFooter'
  export default {
    name: 'app',
    components: {
      vFooter
    },
    data() {
      return {
        activeIndex2: '1'
      }
    }
  }

</script>

<style>
  body {
    background-color: #fff
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .elMenu{
    padding:0 30px;
  }

  .routerMain {
    flex: 1
  }

</style>
