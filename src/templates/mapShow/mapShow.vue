<template>
  <div id="mapShow">
    <el-card class="mapshowCon" id="baseMap"></el-card>
    <div class="selectBar">
      <el-form :inline="true" ref="form" :model="form" label-width="100px" size="mini">
        <el-form-item>
          <el-date-picker v-model="form.yearSelect" type="year" value-format="yyyyMM" placeholder="审批年限"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.area" placeholder="请选择查看区域">
            <el-option label="全省" value="全省"></el-option>
            <el-option label="贵阳" value="贵阳"></el-option>
            <el-option label="遵义" value="遵义"></el-option>
            <el-option label="毕节" value="毕节"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.GJZ" placeholder="请输入关键字查询"></el-input>
        </el-form-item>>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import * as maptalks from 'maptalks'
export default {
  data() {
    return {
      form: {
        yearSelect: [],
        area: '全省',
        GJZ: ''
      }
    }
  },
  created() {},
  mounted() {
    this.loadBaseMap()
  },
  methods: {
    loadBaseMap() {
      let map = new maptalks.Map('baseMap', {
        center: [106.48341025400003, 26.57011626600007],
        zoom: 16,
        minZoom: 6,
        maxZoom: 19,
        spatialReference: {
          projection: 'EPSG:4326'
        },
        baseLayer: new maptalks.TileLayer('base', {
          tileSystem: [1, -1, -180, 90],
          urlTemplate: 'http://t{s}.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=de0dc270a51aaca3dd4e64d4f8c81ff6',
          subdomains: ['1', '2', '3', '4', '5'],
          attribution: '&copy; <a target="_blank" href="http://www.tianditu.cn">Tianditu</a>'
        }),
        layers: [
          new maptalks.TileLayer('img', {
            urlTemplate: 'http://t{s}.tianditu.com/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=de0dc270a51aaca3dd4e64d4f8c81ff6',
            subdomains: ['1', '2', '3', '4', '5'],
            opacity: 1
          }),
          new maptalks.TileLayer('road', {
            urlTemplate: 'http://t{s}.tianditu.com/DataServer?T=cia_c&x={x}&y={y}&l={z}&tk=de0dc270a51aaca3dd4e64d4f8c81ff6',
            subdomains: ['1', '2', '3', '4', '5'],
            opacity: 1
          })
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
#mapShow {
  .mapshowCon {
    z-index: 10;
    position: absolute;
    top: 90px;
    bottom: 30px;
    left: 30px;
    right: 30px;
  }
  .selectBar {
    position: absolute;
    z-index: 100;
    margin-top: 20px;
    .el-form-item__label {
      color: #ffffff !important;
    }
  }
}
</style>