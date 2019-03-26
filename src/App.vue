<template>
  <div id="app">
    <header>
      <el-menu 
        :router="true"
        :default-active="$route.path" class="elMenu" mode="horizontal" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="/mouseDraw">小黑板</el-menu-item>
        <!-- <el-menu-item index="/heart">heart</el-menu-item> -->
        <el-menu-item index="/time">会动的时钟</el-menu-item>
        <el-menu-item index="/transformDemo">变换</el-menu-item>
        <!-- <el-menu-item index="/clock">时钟</el-menu-item> -->
        <el-menu-item index="/coolClock">炫酷时钟</el-menu-item>
        <el-menu-item index="/imgDemo">背景色彩</el-menu-item>
        <!-- <el-menu-item index="/pixelDemo">像素处理</el-menu-item> -->
        <el-menu-item index="/3d">3d交互</el-menu-item>
        <!-- <el-menu-item index="/progress">进度条</el-menu-item> -->
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
    flex: 1;
    overflow: auto;
  }

</style>
