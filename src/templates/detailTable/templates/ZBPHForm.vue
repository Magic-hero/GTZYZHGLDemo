<template>
  <div class="GYForm">
    <el-form
      class="baseIfo"
      :inline="true"
      ref="form"
      label-position="left"
      :model="this.showData"
      label-width="100px"
      size="mini"
    >
      <el-form-item label="项目编号">
        <el-input v-model="this.showData.xmid" disabled></el-input>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input v-model="this.showData.xmmc" disabled></el-input>
      </el-form-item>
      <el-form-item label="新增耕地面积">
        <el-input v-model="this.showData.xzgdmj" disabled></el-input>
      </el-form-item>
      <el-form-item label="行政区划">
        <el-input v-model="this.showData.xzqh" disabled></el-input>
      </el-form-item>
      <el-form-item label="立项批复文号">
        <el-input v-model="this.showData.dkwz" disabled></el-input>
      </el-form-item>
      <el-form-item label="验收批复文号">
        <el-input v-model="this.showData.lxpfwh" disabled></el-input>
      </el-form-item>
      <el-form-item label="验收时间">
        <el-input v-model="this.showData.yshj" disabled></el-input>
      </el-form-item>
      <el-form-item label="批复机关">
        <el-input v-model="this.showData.pfjg" disabled></el-input>
      </el-form-item>
      <h3 style="margin:20px">土地开发、整理、复垦立项、验收等文件附件</h3>
      <el-carousel height="350px">
        <el-carousel-item>
          <div class="imageBar">
            <el-image
              style="height:100%"
              src="http://www.gywb.cn/pic/003/007/607/00300760720_e748c183.jpg"
              fit="contain"
            ></el-image>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="imageBar">
            <el-image
              style="height:100%"
              src="http://www.gywb.cn/pic/003/007/607/00300760728_d3322262.jpg"
              fit="contain"
            ></el-image>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="imageBar">
            <el-image
              style="height:100%"
              src="http://www.gywb.cn/pic/003/007/607/00300760738_bbc510c9.png"
              fit="contain"
            ></el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'GYForm',
  props: {
    showData: {
      type: Object, //指定传入的类型
      default: {
        xmid: '202004033901',
        xmmc: '贵阳市云岩区中天组团',
        xzgdmj: '0',
        xzqh: '贵阳市云岩区',
        lxpfwh: 'GYSkf09sf78756',
        ysphwh: 'GYSkd53300790756',
        yshj: '20200927',
        pfjg: '贵阳市政府'
      } //这样可以指定默认的值
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
.imageBar {
  height: 100%;
  text-align: center;
}
</style>