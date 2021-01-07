<template>
  <div class="sjxBar">
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2020/4/12" placement="top">
          <el-card>
            <h4>现场拍照</h4>
            <p>王小虎 提交于 2020/7/12 20:46</p>
            <el-image
              style="height:100%,width:100%"
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2079947367,952944769&fm=26&gp=0.jpg"
              fit="contain"
            ></el-image>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/4/3" placement="top">
          <el-card>
            <h4>现场拍照</h4>
            <p>王小虎 提交于 2020/4/3 20:46</p>
            <el-image
              style="height:100%,width:100%"
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1432643503,2388490402&fm=26&gp=0.jpg"
              fit="contain"
            ></el-image>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/4/2" placement="top">
          <el-card>
            <h4>现场拍照</h4>
            <p>王小虎 提交于 2020/4/2 20:46</p>
            <el-image
              style="height:100%,width:100%"
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2054137981,3015651379&fm=26&gp=0.jpg"
              fit="contain"
            ></el-image>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sjxBar',
  props: {},
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