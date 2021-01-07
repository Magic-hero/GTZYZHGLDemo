<template>
  <div class="datailTable">
    <el-card class="mainContainer">
      <h3>{{showRang}} 年度建设用地审批情况表总览</h3>
      <el-divider></el-divider>
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
      <el-card>
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
              <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top:20px">
          <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="60"></el-pagination>
        </div>
      </el-card>
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
import showData from '../../dataJSON/data.json'
import showTableHead from '../../dataJSON/tableHead.json'
import detailDialog from './templates/detailDialog.vue' //弹窗组件

export default {
  name: 'detailTable',
  components: {
    detailDialog
  },
  data() {
    return {
      showRang: '201901~202001',
      selectRow: '', //选中的行
      dialogVisible: false, //控制详情窗口打开关闭
      tableHeight: '',
      tableHead: {}, //表头
      tableData: [], //数据
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
      ]
    }
  },
  watch: {
    form: {
      handler(oldValue, newValue) {
        this.showRang = newValue.yearSelect[0] + '~' + newValue.yearSelect[1]
      },
      deep: true
    }
  },
  created() {
    this.tableHeight = `${document.documentElement.clientHeight}` - 390
  },
  mounted() {
    this.tableData = showData
    this.tableHead = showTableHead.tableHead
  },
  methods: {
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
}
</style>