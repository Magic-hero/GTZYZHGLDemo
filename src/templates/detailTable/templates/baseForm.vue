<template>
  <div class="detailDialog">
    <el-form class="baseIfo" ref="form" label-position="left" :model="this.showData" label-width="100px" size="mini">
      <el-form-item label="地块编号">
        <el-input v-model="this.showData.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="东至">
        <el-input v-model="this.showData.dz" disabled></el-input>
      </el-form-item>
      <el-form-item label="西至">
        <el-input v-model="this.showData.xz" disabled></el-input>
      </el-form-item>
      <el-form-item label="南至">
        <el-input v-model="this.showData.nz" disabled></el-input>
      </el-form-item>
      <el-form-item label="北至">
        <el-input v-model="this.showData.bz" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'detailDialog',
  props: {
    baseData: {
      type: Object, //指定传入的类型
      default: {
        id: '1',
        dz: '房屋',
        xz: '原厂房',
        nz: '道路',
        bz: '道路'
      } //这样可以指定默认的值
    }
  },
  data() {
    return {
      showData: {}
    }
  },
  created() {
    this.showData = this.baseData
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
</style>