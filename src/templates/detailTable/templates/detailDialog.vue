<template>
  <div class="detailDialog">
    <el-row class="mainContainer" :gutter="20">
      <el-col :span="12">
        <el-card class="box-card mapCard">
          <div id="TDTmap" :style="{height:  tdtBarHeight}"></div>
        </el-card>
        <el-card class="box-card detailCard">
          <div slot="header" class="clearfix">
            <p>地块基本情况</p>
          </div>
          <!-- <baseForm :base-data="this.baseIfo"></baseForm> -->
          <baseForm></baseForm>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-tabs type="border-card" :style="{height:  leftBarHeight}" style="overflow:auto">
          <el-tab-pane label="详细信息">
            <SPForm :msg-val="this.msgVal"></SPForm>
          </el-tab-pane>
          <!-- <el-tab-pane label="供应信息">
            <GYForm></GYForm>
          </el-tab-pane>
          <el-tab-pane label="使用情况">
            <SYForm></SYForm>
          </el-tab-pane>
          <el-tab-pane label="耕地占补平衡">
            <ZBPHForm></ZBPHForm>
          </el-tab-pane>
          <el-tab-pane label="违法用地查处">
            <WFYDForm></WFYDForm>
          </el-tab-pane> -->
          <el-tab-pane label="现场照片">
            <ydsjxBar></ydsjxBar>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import baseForm from './baseForm' //基础信息表
import SPForm from './SPForm' //审批信息表
import GYForm from './GYForm'
import SYForm from './SYForm'
import ZBPHForm from './ZBPHForm'
import WFYDForm from './WFYDForm'
import ydsjxBar from './ydsjxBar'
import showArea from './../../../dataJSON/area.json'

import * as maptalks from 'maptalks'
export default {
  name: 'detailDialog',
  components: {
    baseForm,
    SPForm,
    GYForm,
    SYForm,
    ZBPHForm,
    WFYDForm,
    ydsjxBar
  },
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
      map: '',
      baseIfo: {},
      showLable: {}
    }
  },
  computed: {
    tdtBarHeight: function() {
      return `${document.documentElement.clientHeight}` * 0.35 + 'px'
    },
    leftBarHeight: function() {
      return `${document.documentElement.clientHeight}` * 0.35 + 350 + 'px'
    }
  },
  created() {
    this.showAreaData = showArea
    this.selectItem = this.msgVal
    console.log(this.msgVal)
  },
  mounted() {
    this.addbasemap()
  },
  methods: {
    //加载天地图
    addbasemap() {
      this.map = new maptalks.Map('TDTmap', {
        center: [106.48341025400003, 26.57011626600007],
        zoom: 18,
        minZoom: 6,
        maxZoom: 19,
        spatialReference: {
          projection: 'EPSG:4490'
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
      this.loadAreaLine()
    },
    loadAreaLine() {
      var polygonList = []
      var _this = this
      const element = this.showAreaData.rings
      var polygon = new maptalks.Polygon([element], {
        visible: true,
        editable: true,
        cursor: 'pointer',
        shadowBlur: 0,
        shadowColor: 'black',
        draggable: false,
        dragShadow: false, // display a shadow during dragging
        drawOnAxis: null, // force dragging stick on a axis, can be: x, y
        symbol: {
          lineColor: '#34495e',
          lineWidth: 2,
          polygonFill: 'rgb(135,196,240)',
          polygonOpacity: 0.6,
          zIndex: 8
        },
        properties: {
          message: '地块1'
        }
      }).on('click', function(e) {
        _this.map.setZoom('11')
        _this.map.setCenter(e.target.properties.message.centerPoint)
      })
      polygonList.push(polygon)
      var polygonLayer = new maptalks.VectorLayer('region-line').addGeometry(polygonList).addTo(this.map)
    }
  }
}
</script>
<style lang="less" scoped>
.detailDialog {
  .mainContainer {
    margin-top: -30px;
  }
  .mapCard {
    margin-bottom: 10px;
  }
  .detailCard {
    height: 300px;
    .baseIfo {
      height: 300px;
      overflow: auto;
    }
  }
}
</style>