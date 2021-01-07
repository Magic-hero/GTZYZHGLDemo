<template>
  <div class="SYForm">
    <el-form class="baseIfo" :inline="true" ref="form" label-position="left" :model="this.showData" label-width="100px" size="mini">
      <el-form-item label="地块编号">
        <el-input v-model="this.showData.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="开工时间">
        <el-input v-model="this.showData.kgsj" disabled></el-input>
      </el-form-item>
      <el-form-item label="竣工时间">
        <el-input v-model="this.showData.jgsj" disabled></el-input>
      </el-form-item>
      <el-form-item label="土地利用情况">
        <el-input v-model="this.showData.tdkfly" disabled></el-input>
      </el-form-item>
      <el-form-item label="土地面积">
        <el-input v-model="this.showData.tdmj" disabled></el-input>
      </el-form-item>
      <el-form-item label="土地用途">
        <el-input v-model="this.showData.tdyt" disabled></el-input>
      </el-form-item>
      <el-form-item label="容积率">
        <el-input v-model="this.showData.rjl" disabled></el-input>
      </el-form-item>
      <el-form-item label="建筑密度">
        <el-input v-model="this.showData.jzmd" disabled></el-input>
      </el-form-item>
      <el-form-item label="使用年限">
        <el-input v-model="this.showData.synx" disabled></el-input>
      </el-form-item>
      <el-form-item label="其他说明">
        <el-input rows="4" v-model="this.showData.qtsm" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SYForm',
  props: {
    showData: {
      type: Object, //指定传入的类型
      default: {
        id: '1',
        kgsj: '2020/09/06',
        jgsj: '2023/06/08',
        tdkfly: '闲置',
        tdmj: '37.76',
        tdyt: '住宅',
        rjl: '2.2',
        jzxg: '150m',
        synx: '70',
        gyjg: '45900（万元）',
        qtsm: '是否依照划拨决定书或土地出让合同确定的面积、用途、容积率、绿地率、建筑密度、投资强度等建设条件和标准使用土地，项目开、竣工时间以及土地开发利用与闲置等情况'
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
</style>