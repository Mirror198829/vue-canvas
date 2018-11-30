<!--
 * @Author: caojing
 * @Date: 2017-11-27 15:35:23
 * @LastEditors: caojing
 * @LastEditTime: 2018-11-30 16:49:53
 -->
<template>
  <footer class="foot">
  	<div class="foot-txt">
      <a href="https://github.com/Mirror198829" target="_blank">
      江苏南京 前端开发工程师 曹静
      </a>
    </div>
  	<div class="foot-txt">
      <a href="https://github.com/Mirror198829" target="_blank">
      Github：https://github.com/Mirror198829
      </a>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'vFooter',
  data () {
    return {
     
    }
  }
}
</script>
<style scoped lang="less">
.foot{height:70px;background-color: @theme-color;color:@theme-font-color;text-align: center;font-size: 14px;display: flex;flex-direction: column;justify-content: center;}
.foot-txt{-webkit-user-select:none;user-select:none;
  a{color:@theme-font-color;text-decoration: none;}
  &:first-child{margin-bottom:5px;}
}
</style>