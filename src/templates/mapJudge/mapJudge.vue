<template>
  <div class="mapJudge">
    <el-row class="mainContainer" :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div  id="TDTmapL" :style="{height:  tdtBarHeight}"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card mapCard">
          <div id="TDTmapR" :style="{height: tdtBarHeight}" ></div>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="box-card" style="margin-top:30px">
        <el-form :inline="true" ref="form" :model="form" label-width="100px">
       <el-form-item label="统计区间">
            <el-date-picker
              v-model="form.yearSelect"
              type="monthrange"
              value-format="yyyyMM"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
        <el-form-item label="所属区域">
          <el-cascader
            v-model="form.area"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="审批机关">
          <el-select v-model="form.JGDW" placeholder="请选择审批机关">
            <el-option label="省政府" value="省政府"></el-option>
            <el-option label="国务院" value="国务院"></el-option>
            <el-option label="市州" value="市州"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe border :height="this.tableHeight" style="width: 100%">
        <el-table-column
          align="center"
          v-for="(item,index) in tableHead"
          :key="index"
          :prop="item.en"
          :label="item.cn "
          :width="item.width"
        ></el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">定位</el-button></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top:20px">
        <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="60"></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as maptalks from 'maptalks'
import showData from '../../dataJSON/data.json'
import showTableHead from '../../dataJSON/tableHead.json'
import showArea from './../../dataJSON/area.json'
export default {
  data() {
    return { 
      mapHeight:"",//地图窗口高度
      map1:"",
      map2:"",
      tableData: {}, 
      tableHead: {}, 
      tableHeight: '' ,  
      form: {
        yearSelect: [],
        area: '贵阳',
        JGDW: '省政府',
        XMLX: '批次',
        YDXZ: '工业'
      }, 
      options: [
        {
          value: '贵阳',
          label: '贵阳',
          children: [
            {
              value: '云岩区',
              label: '云岩区'
            },
            {
              value: '南明区',
              label: '南明区'
            },
            {
              value: '花溪区',
              label: '花溪区'
            },
            {
              value: '乌当区',
              label: '乌当区'
            },
            {
              value: '白云区',
              label: '白云区'
            },
            {
              value: '观山湖区',
              label: '观山湖区'
            },
            {
              value: '开阳县',
              label: '开阳县'
            },
            {
              value: '息烽县',
              label: '息烽县'
            },
            {
              value: '修文县',
              label: '修文县'
            },
            {
              value: '清镇市',
              label: '清镇市'
            }
          ]
        },
        {
          value: '遵义',
          label: '遵义'
        },
        {
          value: '六盘水',
          label: '六盘水'
        }
      ]}
  },
  computed: {
    tdtBarHeight: function() {
      return (`${document.documentElement.clientHeight}` * 0.35) + 'px';
    }
  },
  created() {
    this.showAreaData = showArea
    this.tableHeight = `${document.documentElement.clientHeight}` * 0.65 - 340
    this.tableData = showData
    this.tableHead = showTableHead.tableHead
  },
  mounted() {
    this.addbasemapL()
    this.addbasemapR()
  },
  methods: {
    onSubmit(){},
    handleChange(){},
    handleClick(data){
      debugger
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
      var polygonLayer1 = new maptalks.VectorLayer('region-line').addGeometry(polygonList).addTo(this.map1)
     // var polygonLayer2 = new maptalks.VectorLayer('region-line').addGeometry(polygonList).addTo(this.map2)
        this.map1.setZoom('18')
      this.map1.setCenter( [106.48341025400003,
      26.57011626600007]);
      this.map2.setZoom('18')
      this.map2.setCenter( [106.48341025400003,
      26.57011626600007]);
    },
    addbasemapL() {
      this.map1 = new maptalks.Map('TDTmapL', {
        center: [106.66, 26.801],
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
    },
    addbasemapR() {
      this.map2 = new maptalks.Map('TDTmapR', {
        center: [106.66, 26.801],
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

</style>