<template>
  <div class="datailTable">
    <el-card class="mainContainer">
      <h3>{{form.yearSelect}} 起底{{form.JGDW}}大调查情况成果</h3>
      <el-divider></el-divider>
      <el-form :inline="true" ref="form" :model="form" label-width="100px" size="mini">
        <el-form-item label="调查年份">
          <el-select v-model="form.yearSelect" placeholder="请选择年份">
            <el-option v-for="item in yearOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属区域">
          <el-cascader
            v-model="form.area"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="调查类型">
          <el-select v-model="form.JGDW" placeholder="选择调查类型">
            <el-option label="'三改'建设用地调查" value="'三改'建设用地调查"></el-option>
            <!-- //  <el-option label="国务院" value="国务院"></el-option>
            <el-option label="市州" value="市州"></el-option>-->
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

      <el-row type="flex" :gutter="15">
        <el-col :span="16">
          <el-card>
            <el-tabs v-model="activeName" @tab-click="handleClick2" size="mini">
              <el-tab-pane label="“三改”建设用地情况调查成果台账表" name="first">
                <el-table :data="tableData" stripe :height="this.tableHeight" border style="width: 100%" size="mini">
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
                      <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div style="margin-top:20px">
                  <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="60"></el-pagination>
                </div>
              </el-tab-pane>
              <el-tab-pane label="住建部门“三改”数据纳入情况表" name="second">
                <el-table :data="ZJtableData" stripe :height="this.tableHeight" border style="width: 100%" size="mini">
                  <el-table-column
                    align="center"
                    v-for="(item,index) in ZJtableHead"
                    :key="index"
                    :prop="item.en"
                    :label="item.cn "
                    :width="item.width"
                  ></el-table-column>
                </el-table>
                <div style="margin-top:20px">
                  <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="60"></el-pagination>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card style="height:100%;">
            <el-collapse v-model="activeNames" accordion @change="handleChange3">
              <el-collapse-item title="图件成果" name="图件成果">
                <el-carousel :interval="4000" type="card" height="400px">
                  <el-carousel-item v-for="item in imgList" :key="item">
                    <div class="imageBar">
                      <el-image style="height:100%" :src="item" fit="contain"></el-image>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </el-collapse-item>
              <el-collapse-item title="文档成果" name="文档成果">
                <div>
                  <a href>仁怀市“三改”建设用地调查报告</a>
                </div>
              </el-collapse-item>
              <el-collapse-item title="表格统计成果" name="表格统计成果">
                <div>xx表格</div>
              </el-collapse-item>
              <el-collapse-item title="矢量数据成果" name="矢量数据成果">
                <div>如需获取矢量数据文件，请联系当地自然资源局或调查单位获取.</div>
              </el-collapse-item>
            </el-collapse>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <div></div>
    <el-dialog
      class="dialogContrl"
      :title="this.selectRow.name +'   详情 (单位:公顷)'"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose"
    >
      <detailDialog style="height:100%" :msg-val="this.selectRow"></detailDialog>
    </el-dialog>
  </div>
</template>

<script>
import showData from '../../dataJSON/sangai.json' //三改数据
import detailDialog from './templates/detailDialog.vue' //弹窗组件
export default {
  name: 'detailTable',
  components: {
    detailDialog
  },
  data() {
    return {
      imgList: [
        require('@/assets/sangai/仁怀市“三改”建设用地调查现状图样图.jpg'),
        require('@/assets/sangai/仁怀市“三改”建设用地调查影像图.jpg'),
        require('@/assets/sangai/仁怀市“三改”建设用地调查影像图样图.jpg'),
        require('@/assets/sangai/仁怀市“三改”建设用地类型分布图样图.jpg')
      ],
      activeNames: ['图件成果'],
      activeName: 'first', //选种的表
      selectRow: '', //选中的行
      dialogVisible: false, //控制详情窗口打开关闭
      tableHeight: '',
      tableHead: {}, //结果数据表头
      tableData: [], //结果数据
      ZJtableData: [], //住建数据
      ZJtableHead: {}, //住建局数据表头
      form: {
        yearSelect: '2021年',
        area: '仁怀市',
        JGDW: "'三改'建设用地调查"
        //  XMLX: '批次',
        //  YDXZ: '工业'
      },
      yearOptions: [
        {
          value: '2021年',
          label: '2021年'
        }
      ],
      tjcgList: [],
      options: [
        {
          value: '仁怀市',
          label: '仁怀市'
        }
      ]
    }
  },
  watch: {},
  created() {
    this.tableHeight = `${document.documentElement.clientHeight}` - 450
  },
  mounted() {
    this.tableData = showData.resultdata //成果数据
    this.ZJtableData = showData.ZJData //住建局数据纳入情况
    this.tableHead = showData.tableHead
    this.ZJtableHead = showData.zjtableHead
  },
  methods: {
    //成果展示事件
    handleChange3(val) {
      console.log(val)
    },
    //切换展示表
    handleClick2(tab, event) {
      console.log(tab, event)
    },
    onSubmit() {},
    handleChange(value) {
      console.log(value)
    },
    //详情窗口控制
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    //点击详情按钮
    handleClick(postData) {
      this.dialogVisible = true
      this.selectRow = postData
    }
  }
}
</script>

<style lang="less" scoped>
.datailTable {
  .dialogContrl {
    .el-dialog__body {
      padding-top: 0px !important;
    }
  }

  .mainContainer {
    width: 100%;
    height: 100%;
  }
  .imageBar {
    height: 400px;
    text-align: center;
  }
}
</style>