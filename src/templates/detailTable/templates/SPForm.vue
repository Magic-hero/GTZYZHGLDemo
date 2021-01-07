<template>
  <div class="detailDialog">
    <el-form
      :inline="true"
      class="baseIfo"
      ref="form"
      label-position="left"
      :model="this.selectItem"
      label-width="100px"
      size="mini"
    >
      <el-form-item label="地块编号">
        <el-input v-model="this.selectItem.id" disabled></el-input>
      </el-form-item>
      <el-form-item label="市(州/地)">
        <el-input v-model="this.selectItem.SZDqh" disabled></el-input>
      </el-form-item>
      <el-form-item label="县/市">
        <el-input v-model="this.selectItem.XScity" disabled></el-input>
      </el-form-item>
      <el-form-item label="建设项目名称">
        <el-input rows="2" v-model="this.selectItem.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="批准机关">
        <el-input v-model="this.selectItem.PZJG" disabled></el-input>
      </el-form-item>
      <el-form-item label="项目类型">
        <el-input v-model="this.selectItem.XMLX" disabled></el-input>
      </el-form-item>
      <el-form-item label="用地性质">
        <el-input v-model="this.selectItem.YDXZ" disabled></el-input>
      </el-form-item>
      <el-form-item label="批准文号">
        <el-input v-model="this.selectItem.SPWH" disabled></el-input>
      </el-form-item>
      <el-form-item label="批准日期">
        <el-input v-model="this.selectItem.PZRQ" disabled></el-input>
      </el-form-item>
      <el-form-item label="总面积">
        <el-input v-model="this.selectItem.ZMJ" disabled></el-input>
      </el-form-item>
      <el-form-item label="新增建设用地">
        <el-input v-model="this.selectItem.XZJSYD" disabled></el-input>
      </el-form-item>
      <el-form-item label="农用地">
        <el-input v-model="this.selectItem.NYD" disabled></el-input>
      </el-form-item>
      <el-form-item label="耕地">
        <el-input v-model="this.selectItem.GD" disabled></el-input>
      </el-form-item>
      <el-form-item label="未利用地">
        <el-input v-model="this.selectItem.WLYD" disabled></el-input>
      </el-form-item>
      <el-form-item label="征收土地">
        <el-input v-model="this.selectItem.ZSTD" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'detailDialog',
  props: {
    msgVal: {
      type: Object, //指定传入的类型
      default: {
        id: '',
        SZDqh: '',
        XScity: '',
        name: '',
        PZJG: '',
        XMLX: '',
        YDXZ: '',
        SPWH: '',
        PZRQ: '',
        ZMJ: 0,
        XZJSYD: 0,
        NYD: 0,
        GD: 0,
        WLYD: 0,
        ZSTD: 0
      } //这样可以指定默认的值
    }
  },
  data() {
    return {
      selectItem: {}
    }
  },
  created() {
    this.selectItem = this.msgVal
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
</style>