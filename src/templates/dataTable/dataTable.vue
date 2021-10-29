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
          <el-col :span="5" :key="index">
            <el-card class="box-card">
              <el-descriptions class="margin-top" title="开发区、工业园区建设用地调查" :column="1" border>
                <el-descriptions-item>
                  <template slot="label">园区范围</template>
                  <h5>1396.00公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">其中</template>
                  <h5>国家公告目录范围5.0480平方公里</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">基础库</template>
                  <h5>批地:40批次，面积522.9400公顷</h5>
                  <h5>供地:117宗，面积420.2600公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">问题图斑举证</template>
                  <h5>888块 面积1118.2128公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">成果库</template>
                  <h5>批地:40批次，面积497.5907公顷</h5>
                  <h5>供地:125宗，面积464.9631公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">调查</template>
                  <h5>建设用地面积602.2100公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">闲置厂房</template>
                  <h5>0 个； 0公顷（政府出资）</h5>
                </el-descriptions-item>
              </el-descriptions>
            </el-card>
          </el-col>
          <!-- 建设用地审批、供应利用情况调查 -->
          <el-col :span="5" :key="index">
            <el-card class="box-card">
              <el-descriptions class="margin-top" title="建设用地审批、供应利用情况调查" :column="1" border>
                <el-descriptions-item>
                  <template slot="label">下发数据</template>
                  <h5>批地:台账136批次，矢量129批次</h5>
                  <h5>供地:台账1067宗，矢量866宗</h5>
                </el-descriptions-item>
                  <el-descriptions-item>
                  <template slot="label">问题图斑举证</template>
                  <h5>2411块 面积2891.3831公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">基础库</template>
                  <h5>批地:129批次，面积4552.12公顷</h5>
                  <h5>供地:1002宗，面积3680.19公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">成果库</template>
                  <h5>批地:128批次，面积4517.8913公顷</h5>
                  <h5>供地:995宗，面积3637.17公顷</h5>
                </el-descriptions-item>
              </el-descriptions>
            </el-card>
          </el-col>
          <!-- “三改”建设用地调查 -->
          <el-col :span="5" :key="index">
            <el-card class="box-card">
              <el-descriptions class="margin-top" title="“三改”建设用地调查" :column="1" border>
                <el-descriptions-item>
                  <template slot="label">调查面积</template>
                  <h5>3540公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">“三改”范围内</template>
                  <h5>建设用地面积：110.082公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">城镇老旧小区</template>
                  <h5>24个；10.5871公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">棚户区</template>
                  <h5>14个；83.5215公顷（城中村）</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">背街小巷</template>
                  <h5>33条；45371米</h5>
                </el-descriptions-item>
              </el-descriptions>
            </el-card>
          </el-col>
          <!-- 城镇建设用地开发利用情况调查评价 -->
          <el-col :span="4" :key="index">
            <el-card class="box-card">
              <el-descriptions class="margin-top" title="城镇建设用地开发利用情况调查评价" :column="1" border>
                <el-descriptions-item>
                  <template slot="label">调查面积</template>
                  <h5>公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">过渡利用土地</template>
                  <h5>块；公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">集约利用土地</template>
                  <h5>块；公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">中度利用土地</template>
                  <h5>块；公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">低效利用土地</template>
                  <h5>块；公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">再开发潜力</template>
                  <h5>公顷</h5>
                </el-descriptions-item>
              </el-descriptions>
            </el-card>
          </el-col>
          <!-- 其他建设用地利用状况调查 -->
          <el-col :span="4" :key="index">
            <el-card class="box-card">
              <el-descriptions class="margin-top" title="其他建设用地利用状况调查" :column="1" border>
                <el-descriptions-item>
                  <template slot="label">调查面积</template>
                  <h5>公顷</h5>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">低效利用土地</template>
                  <h5>块；公顷</h5>
                </el-descriptions-item>
              </el-descriptions>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </div>
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
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZh5NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
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