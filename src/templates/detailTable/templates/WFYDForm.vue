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
        <el-input v-model="this.showData.dkid" disabled></el-input>
      </el-form-item>
      <el-form-item label="地块名称">
        <el-input v-model="this.showData.dkmc" disabled></el-input>
      </el-form-item>
      <el-form-item label="违法类型">
        <el-input v-model="this.showData.wflx" disabled></el-input>
      </el-form-item>
      <el-form-item label="违法人">
        <el-input v-model="this.showData.wfr" disabled></el-input>
      </el-form-item>
      <el-form-item label="违法时间">
        <el-input v-model="this.showData.wfsj" disabled></el-input>
      </el-form-item>
      <el-form-item label="处罚类型">
        <el-input v-model="this.showData.cflx" disabled></el-input>
      </el-form-item>
      <el-form-item label="处罚情况">
        <el-input v-model="this.showData.cfqk" disabled></el-input>
      </el-form-item>
      <el-form-item label="处罚时间">
        <el-input v-model="this.showData.cfsj" disabled></el-input>
      </el-form-item>
      <el-form-item label="处罚人">
        <el-input v-model="this.showData.cfr" disabled></el-input>
      </el-form-item>
      <h4 style="margin:20px">违法用地查处，查询属性信息及地方政府和自然资源部门对违法违规用地的发现、制止、查处和报告情况等附件</h4>
      <el-carousel height="350px">
        <el-carousel-item v-for="item in 1" :key="item">
          <div class="imageBar">
            <el-image
              style="height:100%"
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=763228951,1956806480&fm=26&gp=0.jpg"
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
        dkid: '202004033901',
        dkmc: '贵阳市云岩区中天组团',
        wflx: '多占',
        wfr: '张三',
        wfsj: '20200501',
        cflx: '罚款',
        cfqk: '已落实处罚',
        cfsj: '20200801',
        cfr: '贵阳市政府'
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