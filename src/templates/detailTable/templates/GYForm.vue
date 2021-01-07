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
      <el-form-item label="地块编号">
        <el-input v-model="this.showData.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="用地供应类型">
        <el-input v-model="this.showData.jsydlx" disabled></el-input>
      </el-form-item>
      <el-form-item label="总面积">
        <el-input v-model="this.showData.zmj" disabled></el-input>
      </el-form-item>
      <el-form-item label="行政区划">
        <el-input v-model="this.showData.xzqh" disabled></el-input>
      </el-form-item>
      <el-form-item label="地块位置">
        <el-input v-model="this.showData.dkwz" disabled></el-input>
      </el-form-item>
      <el-form-item label="土地用途">
        <el-input v-model="this.showData.tdyt" disabled></el-input>
      </el-form-item>
      <el-form-item label="供应价格">
        <el-input v-model="this.showData.gyjg" disabled></el-input>
      </el-form-item>
      <h3 style="margin:20px">政府公告、土地划拨决定书或土地出让合同等文件附件</h3>
      <el-carousel height="350px">
        <el-carousel-item v-for="item in 1" :key="item" style="height:100%,width:100%">
          <div class="imageBar">
            <el-image
              style="height:100%"
              src="http://n.sinaimg.cn/news/transform/w550h733/20180205/9IHx-fyrhcqy8897895.jpg"
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
        id: '1',
        jsydlx: '协议出让',
        zmj: '37.76',
        xzqh: '贵阳市云岩区',
        dkwz: '贵阳市云岩区中天组团',
        tdyt: '住宅',
        gyjg: '45900（万元）'
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
  height: 350px;
  text-align: center;
}
</style>