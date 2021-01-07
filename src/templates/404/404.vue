<template>
  <div class="load">
    <div class="effect">
      <i class="el-icon-dm-icon-test" @click="$router.back()"></i>
    </div>
    <p>页面似乎出了一点小问题</p>
  </div>
</template>
<style lang="less" scoped>
.load {
  width: 600px;
  margin: 0 auto;
  text-align: center;
  .effect {
    display: inline-block;
    width: 200px;
    margin: 200px 0 0px;
    i {
      font-size: 200px;
      margin-top: 20px;
      color: @sec-color;
      cursor: pointer;
    }
  }
  p {
    text-align: center;
    font-size: 16px;
    color: @sec-color;
  }
}
</style>
