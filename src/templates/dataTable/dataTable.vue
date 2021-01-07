<template>
  <div id="dataTable">
    <div class="topBar">
      <el-card class="mainLastYear">
        <h3>{{showRang}} 期间建设用地季度审批情况</h3>
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
          <el-form-item label="区域统计">
            <el-select v-model="form.area" placeholder="请选择查看区域">
              <el-option label="全省" value="全省"></el-option>
              <el-option label="贵阳" value="贵阳"></el-option>
              <el-option label="遵义" value="遵义"></el-option>
              <el-option label="毕节" value="毕节"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item,index) in lastYear" :key="index">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="font-weight:bold">第{{item.season}}季度</span>
                <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
              </div>
              <div class="showNumber">
                <P>
                  {{form.area}}区域审批数目
                  <span style="color:#9847ff;font-size:24px;font-weight:bold">{{item.number}}</span>条
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
      <div id="cityNumberEcharts"></div>
      <div style="clear: both;"></div>
    </el-card>
    <div class="rightBottomBar">
      <div style="height:100%">
        <div class="rightCharts borderCom">
          <div id="areaYTEcharts"></div>
        </div>
        <div class="newsBar borderCom">
          <h3>土地审批最新信息</h3>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newlist: [
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
        {
          time: '2020-12-17',
          title: '贵阳最新组团项目规划调整信息汇总！',
          jumpTo:
            'https://mp.weixin.qq.com/s?__biz=MzI5MzY0OTMxOA==&mid=2247510546&idx=1&sn=4c90737406303477d1b581064e96eaed&chksm=ec6c04dbdb1b8dcd8866f49a70078acd989dd385024169fee3869692a3da0922cc15cf979e33&mpshare=1&scene=24&srcid=0105AypKGr9qfa0v2cGA0cB1&sharer_sharetime=1609829141012&sharer_shareid=1e71bc0e3279e932c89276afdcadc457&key=aa37eea3a2616ab3726dfcd8cde0018bba0b9a78aeccc9e7558c978dc7d22be557efb75fa4cf0e142f1d2a4c1de1ca4a529aa8d6cf25dc1e3e03124a2c6c19af9778f9545c90f17614ebaa47a97906a0ed714c6b25cf011b07a8dd8413d2cf784c4723899ef61c8b097eb085d6ba008a358a6bd052b4adb41bd140181717cd6d&ascene=14&uin=Mjg4MjE1MDAyOQ%3D%3D&devicetype=Windows+10+x64&version=6300002f&lang=zh_CN&exportkey=AxRhNEteWMdfKC2j%2FMsVI8c%3D&pass_ticket=n5rb4RexikQYkKcZH4NUJeoDRumESY1ZMuUL2LW%2BRtq%2F8aj3MGBKvP8r%2Bqoeh9rY&wx_header=0'
        },
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
        area: '全省'
      },
      lastYear: [
        {
          season: '一',
          number: '238',
          fullSize: '3870.65'
        },
        {
          season: '二',
          number: '238',
          fullSize: '3870.65'
        },
        {
          season: '三',
          number: '238',
          fullSize: '3870.65'
        },
        {
          season: '四',
          number: '238',
          fullSize: '3870.65'
        }
      ]
    }
  },
  watch: {
    form: {
      handler(oldValue, newValue) {
        this.showRang = newValue.yearSelect[0] + '~' + newValue.yearSelect[1]
        //分市州柱状图
        this.loadEcharts()
        //用地性质饼状图
        this.loadEcharts2()
      },
      deep: true
    }
  },
  created() {},
  mounted() {
    //分市州柱状图
    this.loadEcharts()
    //用地性质饼状图
    this.loadEcharts2()
  },
  methods: {
    loadEcharts2() {
      let myChart = this.$echarts.init(document.getElementById('areaYTEcharts'))
      var option = {
        title: {
          text: this.showRang + '期间审批土地用地性质',
          subtext: '虚构数据',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['城镇', '工业', '水利', '交通', '村民建房']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '城镇' },
              { value: 310, name: '工业' },
              { value: 234, name: '水利' },
              { value: 135, name: '交通' },
              { value: 1548, name: '村民建房' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    },
    onSubmit() {},
    loadEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('cityNumberEcharts'))
      // 绘制图表
      myChart.setOption({
        title: { text: this.showRang + '期间各市州土地情况表', subtext: '虚构数据' },
        grid: {
          y: 90,
          borderWidth: 1
        },
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          left: 'right',
          data: ['审批地块数', '已供地块数', '已用地块数', '查处违法地块数']
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: ['贵阳', '六盘水', '遵义', '安顺', '毕节', '铜仁', '黔东南', '黔南', '黔西南']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '审批地块数',
            type: 'bar',
            barGap: 0,
            data: [46, 65, 48, 21, 38, 42, 68, 90, 54]
          },
          {
            name: '已供地块数',
            type: 'bar',
            data: [35, 54, 38, 13, 32, 32, 52, 73, 32]
          },
          {
            name: '已用地块数',
            type: 'bar',
            data: [18, 25, 22, 8, 21, 16, 29, 54, 18]
          },
          {
            name: '查处违法地块数',
            type: 'bar',
            data: [6, 18, 9, 5, 14, 8, 21, 43, 6]
          }
        ]
      })
    }
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
  width: 60%;
  bottom: 30px;
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
    height: calc(60% - 50px);
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