<template>
  <div id="dataTable">
    <div class="topBar">
      <el-card class="mainLastYear">
        <h3>2021年建设用地起底大调查基本情况</h3>
        <el-divider></el-divider>
        <el-form :inline="true" ref="form" :model="form" label-width="100px">
          <el-form-item label="区域统计">
            <el-select v-model="form.area" disabled placeholder="请选择查看区域">
              <el-option label="仁怀" value="仁怀"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" disabled @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-row type="flex" justify="space-around">
          <el-col :span="4" v-for="(item,index) in lastYear" :key="index">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="font-weight:bold">{{item.type}}</span>
              </div>
              <div class="showNumber">
                <P style="line-height:35px">
                  {{form.area}}范围共调查
                  <span style="color:#9847ff;font-size:24px;font-weight:bold">{{item.number}}</span>处
                </P>
                <p style="text-align: right;">
                  涉及土地
                  <span style="color:#2244ef;font-size:24px;font-weight:bold">{{item.fullSize}}</span>
                  公顷
                </p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <!-- <el-row :gutter="20">
      <el-col :span="18" ></el-col>
      <el-col :span="6"  ></el-col>
    </el-row>-->
    <el-card class="leftBottomBar">
      <el-tabs v-model="activeChart" @tab-click="handleClick">
        <el-tab-pane label="建设用地审批、供应利用情况调查" name="first">
          <el-carousel height="450px">
            <el-carousel-item>
              <h3 class="TjTitle">仁怀市建设用地审批、供应利用情况调查汇总表</h3>
              <el-table :data="tableData_LY" style="width: 100%">
                <el-table-column
                  v-for="(item,index ) in tableHead_LY"
                  :key="index"
                  :prop="item.ENG"
                  :label="item.CHN"
                  :width="item.width"
                >
                  <el-table-column
                    v-show="item.child.length!='0'"
                    v-for="(ite,ind ) in item.child"
                    :key="ind"
                    :prop="ite.ENG"
                    :label="ite.CHN"
                    :width="ite.width"
                  >
                    <el-table-column
                      v-show="ite.child.length!='0'"
                      v-for="(it,inw ) in ite.child"
                      :key="inw"
                      :prop="it.ENG"
                      :label="it.CHN"
                      :width="it.width"
                    ></el-table-column>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </el-carousel-item>
            <el-carousel-item>
              <h3 class="TjTitle">仁怀市获批建设用地对应供地调查表</h3>
              <el-table :data="tableData_HP" style="width: 100%">
                <el-table-column
                  v-for="(item,index ) in tableHead_HP"
                  :key="index"
                  :prop="item.ENG"
                  :label="item.CHN"
                  :width="item.width"
                >
                  <el-table-column
                    v-show="item.child.length!='0'"
                    v-for="(ite,ind ) in item.child"
                    :key="ind"
                    :prop="ite.ENG"
                    :label="ite.CHN"
                    :width="ite.width"
                  >
                    <el-table-column
                      v-show="ite.child.length!='0'"
                      v-for="(it,inw ) in ite.child"
                      :key="inw"
                      :prop="it.ENG"
                      :label="it.CHN"
                      :width="it.width"
                    ></el-table-column>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </el-carousel-item>
            <el-carousel-item>
              <h3 class="TjTitle">仁怀市供应土地情况统计表</h3>
              <el-table :data="tableData_GD" style="width: 100%">
                <el-table-column
                  v-for="(item,index ) in tableHead_GD"
                  :key="index"
                  :prop="item.ENG"
                  :label="item.CHN"
                  :width="item.width"
                >
                  <el-table-column
                    v-show="item.child.length!='0'"
                    v-for="(ite,ind ) in item.child"
                    :key="ind"
                    :prop="ite.ENG"
                    :label="ite.CHN"
                    :width="ite.width"
                  >
                    <el-table-column
                      v-show="ite.child.length!='0'"
                      v-for="(it,inw ) in ite.child"
                      :key="inw"
                      :prop="it.ENG"
                      :label="it.CHN"
                      :width="it.width"
                    ></el-table-column>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="开发区、工业园区建设用地调查" name="second">
          <el-carousel height="450px">
            <el-carousel-item>
              <h3 class="TjTitle">贵州仁怀经济开发区建设用地调查汇总表</h3>
              <el-table :data="kfqTD_js" style="width: 100%">
                <el-table-column
                  v-for="(item,index ) in kfqTH_js"
                  :key="index"
                  :prop="item.ENG"
                  :label="item.CHN"
                  :width="item.width"
                >
                  <el-table-column
                    v-show="item.child.length!='0'"
                    v-for="(ite,ind ) in item.child"
                    :key="ind"
                    :prop="ite.ENG"
                    :label="ite.CHN"
                    :width="ite.width"
                  >
                    <el-table-column
                      v-show="ite.child.length!='0'"
                      v-for="(it,inw ) in ite.child"
                      :key="inw"
                      :prop="it.ENG"
                      :label="it.CHN"
                      :width="it.width"
                    ></el-table-column>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </el-carousel-item>
            <el-carousel-item>
              <h3 class="TjTitle">贵州仁怀经济开发区建设用地审批、供应利用情况调查汇总表</h3>
              <el-table :data="kfqTD_SP" style="width: 100%">
                <el-table-column
                  v-for="(item,index ) in kfqTH_SP"
                  :key="index"
                  :prop="item.ENG"
                  :label="item.CHN"
                  :width="item.width"
                >
                  <el-table-column
                    v-show="item.child.length!='0'"
                    v-for="(ite,ind ) in item.child"
                    :key="ind"
                    :prop="ite.ENG"
                    :label="ite.CHN"
                    :width="ite.width"
                  >
                    <el-table-column
                      v-show="ite.child.length!='0'"
                      v-for="(it,inw ) in ite.child"
                      :key="inw"
                      :prop="it.ENG"
                      :label="it.CHN"
                      :width="it.width"
                    ></el-table-column>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </el-carousel-item>
            <el-carousel-item>
              <h3 class="TjTitle">贵州仁怀经济开发区社会经济数据汇总表</h3>
              <el-table :data="kfqTD_jj" style="width: 100%">
                <el-table-column
                  v-for="(item,index ) in kfqTH_jj"
                  :key="index"
                  :prop="item.ENG"
                  :label="item.CHN"
                  :width="item.width"
                >
                  <el-table-column
                    v-show="item.child.length!='0'"
                    v-for="(ite,ind ) in item.child"
                    :key="ind"
                    :prop="ite.ENG"
                    :label="ite.CHN"
                    :width="ite.width"
                  >
                    <el-table-column
                      v-show="ite.child.length!='0'"
                      v-for="(it,inw ) in ite.child"
                      :key="inw"
                      :prop="it.ENG"
                      :label="it.CHN"
                      :width="it.width"
                    ></el-table-column>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="城镇建设用地开发利用情况调查" name="third">城镇建设用地开发利用情况调查</el-tab-pane>
        <el-tab-pane label="其他建设用地利用状况调查" name="fourth">其他建设用地利用状况调查</el-tab-pane>
        <!-- 三改 -->
        <el-tab-pane label="“三改”建设用地调查" name="fivth">
          <el-carousel height="450px">
            <el-carousel-item>
              <h3 class="TjTitle">仁怀市“三改”建设用地调查统计表</h3>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="序号" width="60"></el-table-column>
                <el-table-column prop="szjd" label="所在乡镇（街道）"></el-table-column>
                <el-table-column label="城镇老旧小区" width="120" align="center">
                  <el-table-column prop="count1" label="数量" align="center"></el-table-column>
                  <el-table-column prop="area1" label="面积" align="center"></el-table-column>
                </el-table-column>
                <el-table-column label="棚户区（城中村）" width="120" align="center">
                  <el-table-column prop="count2" label="数量" align="center"></el-table-column>
                  <el-table-column prop="area2" label="面积" align="center"></el-table-column>
                </el-table-column>
                <el-table-column label="背街小巷" width="180" align="center">
                  <el-table-column prop="count3" label="数量" align="center"></el-table-column>
                  <el-table-column prop="length" label="长度" align="center"></el-table-column>
                  <el-table-column prop="area3" label="面积" align="center"></el-table-column>
                </el-table-column>
              </el-table>
            </el-carousel-item>
            <el-carousel-item>
              <h3 class="TjTitle">仁怀市“三改”用地土地现状用途统计表（单位：公顷）</h3>
              <el-table :data="tableData2" style="width: 100%;" height="520">
                <el-table-column prop="yjl" label="一级类名称" width="150" align="center"></el-table-column>
                <el-table-column prop="ejl" label="二级类名称" width="150" align="center"></el-table-column>
                <el-table-column label="‘三改’类型" width="120" align="center">
                  <el-table-column prop="mj1" label="城镇老旧小区" align="center"></el-table-column>
                  <el-table-column prop="mj2" label="棚户区（城中村）" align="center"></el-table-column>
                  <el-table-column prop="mj3" label="背街小巷" align="center"></el-table-column>
                </el-table-column>
                <el-table-column label="合计" prop="hj" width="120"></el-table-column>
              </el-table>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
      </el-tabs>
      <div style="clear: both;"></div>
    </el-card>
    <!-- <div class="rightBottomBar">
      <div style="height:100%">
        <!-- <div class="rightCharts borderCom">
          <div id="areaYTEcharts"></div>
        </div>
        <div class="newsBar borderCom">
          <h3>建设用地起底大调查统计文档成果下载</h3>
          <div class="newsContainer">
            <ul class="infinite-list" style="overflow:auto">
              <li v-for="(i ,index) in newlist" :key="index" class="infinite-list-item">
                <a target="_blank" :href="i.jumpTo">{{ i.title }}</a>
                <span style="float:right;margin-right:10px;font-size:12px">{{i.time}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { tableData, tableData2 } from './json/sangai.json'
import { tableHead_LY, tableData_LY, tableHead_HP, tableData_HP, tableHead_GD, tableData_GD } from './json/spgy.json'
import { kfqTH_js, kfqTD_js, kfqTH_SP, kfqTD_SP, kfqTH_jj, kfqTD_jj } from './json/kfq.json'
export default {
  data() {
    return {
      activeChart: 'first',
      newlist: [
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        }
      ],
      showRang: '201701~201908',
      form: {
        yearSelect: [],
        area: '仁怀'
      },
      lastYear: [
        {
          type: '建设用地审批、供应利用情况调查',
          number: '996',
          fullSize: '3637.19'
        },
        {
          type: '开发区、工业园区建设用地调查',
          number: '125',
          fullSize: '502.33'
        },
        {
          type: '城镇建设用地开发利用情况调查',
          number: '',
          fullSize: ''
        },
        {
          type: '其他建设用地利用状况调查',
          number: '',
          fullSize: ''
        },
        {
          type: '“三改”建设用地调查',
          number: '71',
          fullSize: '110.08'
        }
      ],
      //三改统计
      tableData: null,
      tableData2: null,
      //批供地审批
      //利用
      tableHead_LY: null,
      tableData_LY: null,
      //获批
      tableHead_HP: null,
      tableData_HP: null,
      //供地
      tableHead_GD: null,
      tableData_GD: null,
      //开发区
      //建设
      kfqTH_js: null,
      kfqTD_js: null,
      //审批
      kfqTH_SP: null,
      kfqTD_SP: null,
      //经济
      kfqTH_jj: null,
      kfqTD_jj: null
    }
  },
  watch: {
    form: {
      handler(oldValue, newValue) {
        this.form.area = '仁怀'
      },
      deep: true
    }
  },
  created() {
    this.form.area = '仁怀'
    this.tableData = tableData
    this.tableData2 = tableData2
    //利用
    this.tableHead_LY = tableHead_LY
    this.tableData_LY = tableData_LY
    //获批
    this.tableHead_HP = tableHead_HP
    this.tableData_HP = tableData_HP
    //供地
    this.tableHead_GD = tableHead_GD
    this.tableData_GD = tableData_GD
    //开发区
    this.kfqTH_js = kfqTH_js
    this.kfqTD_js = kfqTD_js
    //审批
    this.kfqTH_SP = kfqTH_SP
    this.kfqTD_SP = kfqTD_SP
    //经济
    this.kfqTH_jj = kfqTH_jj
    this.kfqTD_jj = kfqTD_jj
  },
  mounted() {
    //分市州柱状图
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    onSubmit() {}
  }
}
</script>

<style lang="less" scoped>
.mainLastYear {
  .el-divider--horizontal {
    margin: 15px 0px !important;
  }
  .el-form-item {
    margin-bottom: 12px !important;
  }
  .el-form-item {
    margin-right: 30px;
  }
  .showNumber {
    //min-height: 100px;
    p:first {
      padding-bottom: 10px;
    }
  }
}
.leftBottomBar {
  display: inline-block;
  position: absolute;
  top: 420px;
  left: 30px;
  right: 30px;
  bottom: 30px;
  .TjTitle {
    text-align: center;
    line-height: 40px;
  }
  #cityNumberEcharts {
    margin: 10px;
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
}
.rightBottomBar {
  display: inline-block;
  position: absolute;
  top: 420px;
  left: calc(60% + 30px);
  right: 30px;
  bottom: 30px;
  padding-left: 15px;

  .borderCom {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
  .rightCharts {
    height: 40%;
    #areaYTEcharts {
      height: 100%;
      width: 100%;
    }
  }
  .newsBar {
    margin-top: 5px;
    height: calc(100% - 30px);
    // height: calc(60% - 50px);
    overflow: hidden;
    .newsContainer {
      overflow: auto;
      left: 10px;
      right: 10px;
      height: 100%;
    }
    .infinite-list-item {
      height: 30px;
      &:hover {
        background-color: #eeeeee;
      }
    }
  }
}
</style>