<template>
  <div>
    <mlHeader></mlHeader>
    <div class="load">
      <div class="effect">
        <i class="el-icon-dm-wuquanfangwen" @click="$router.back()"></i>
      </div>
      <p>您当前职位没有访问权限</p>
    </div>
  </div>
</template>
<script>
import mlHeader from "../container/components/ml-header.vue";
export default {
  components: {
    mlHeader
  }
};
</script>
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
