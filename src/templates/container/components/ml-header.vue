<template>
  <div class="header" ref="header">
    <div class="main-menu">
      <img class="logo" src="./images/logo.png" alt="贵州省建设用地起底大调查成果展现平台" title="贵州省建设用地起底大调查成果展现平台" draggable="false" />
      <span class="float-left" @click="jumpToFirstPage">贵州省建设用地起底大调查成果展现平台</span>
      <template v-for="(item, index) in mainMenus">
        <router-link
          class="main-router-item"
          :class="[index == 0 ? 'menu-link-first' : '']"
          :key="index"
          :to="item.path"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </template>
      <div class="custom">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          background-color="#1456ae"
          text-color="#fff"
          active-text-color="#fff"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">个人中心</el-menu-item>
            <el-menu-item index="2-3">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      mainMenus: []
    }
  },
  created() {
    this.$router.options.routes.forEach(route => {
      if (route.name == 'system') {
        route.children.forEach(item => {
          if (item.meta) {
            this.mainMenus.push({
              name: item.meta.title,
              path: item.path
            })
          }
        })
      }
    })
  },
  methods: {
    jumpToFirstPage() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped lang="less">
.header {
  z-index: 100;
  position: relative;
  width: 100%;
  z-index: 20;
  height: 60px;

  background: linear-gradient(180deg, rgba(20, 86, 174, 0.7) 0%, rgba(20, 86, 174, 1) 100%);
  text-align: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  .main-menu {
    height: 60px;
    .logo {
      height: 30px;
      margin: 15px 0px 15px 30px;
      user-select: none;
      float: left;
    }
    .float-left {
      cursor: pointer;
      display: inline-block;
      float: left;
      padding-left: 15px;
      color: rgba(255, 255, 255, 1);
      display: inline-block;
      line-height: 60px;
      font-family: '微软雅黑';
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 1.5px;
    }
    .main-router-item {
      width: 180px;
      display: inline-block;
      line-height: 58px;
      font-size: 16px;
      color: #666;
      transition: all 0.2s;
      padding: 0 20px;
      span {
        font-size: 18px;
        font-weight: bold;
        transition: all 0.2s;
        color: rgba(255, 255, 255, 1);
      }
      .iconStyle {
        width: 12px;
        height: 10px;
      }
      i {
        color: #666;
        font-size: 18px;
      }
      &:hover {
        opacity: 0.8;
        text-decoration: none;
      }
    }
    @media screen and(max-width: 1800px) and(min-width: 1500px) {
      .main-router-item {
        width: auto;
        padding: 0 30px;
      }
    }
    @media screen and(max-width: 1499px) {
      .main-router-item {
        width: auto;
        padding: 0 10px;
      }
    }
    .router-link-active {
      color: #fff;
      background: linear-gradient(180deg, rgba(20, 86, 174, 0.54) 0%, rgba(25, 59, 105, 1) 100%);
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
      span {
        border-right: none;
        // border-color: @link-active;
        color: rgba(255, 255, 255, 1);
      }
      i {
        color: #fff;
      }
    }
    .zvm-ywpt {
      font-size: 18px;
      color: #333;
      font-weight: 600;
      padding-left: 0;
    }
    .custom {
      width: 140px;
      float: right;
      &:hover {
        .modify {
          display: block;
        }
      }
      .submenu {
        width: 120px;
        position: relative;
        height: 60px;
        color: rgba(255, 255, 255, 0.6);
        i {
          color: rgba(255, 255, 255, 0.6);
        }

        .no-read {
          position: absolute;
          top: 0;
          right: -6px;
          height: 20px;
          border-radius: 10px;
          line-height: 20px;
          padding: 0 6px;
          font-weight: normal;
          color: #fff;
          // background-color: @error-color;
        }
      }
      .submenu:last-child {
        margin-right: 30px;
      }
      .topSJ {
        position: relative;
        margin-left: 150px;
        width: 0;
        height: 0;
        border: 15px solid;
        border-color: transparent transparent #cccccc;
        z-index: -2;
      }
      .topSJ2 {
        position: absolute;
        top: 51px;
        right: 20px;
        width: 0;
        height: 0;
        border: 15px solid;
        border-color: transparent transparent #fcfcfc;
        z-index: -1;
      }
      .modify {
        z-index: 10;
        display: none;
        margin-top: -10px;
        width: 190px;
        text-align: center;
        .container {
          background-color: rgba(252, 252, 252, 1);
          a {
            display: block;
            line-height: 60px;
            font-size: 16px;
            color: #333;
            border: 1px solid #ccc;
            &:hover {
              border: 1px solid #19439a !important;
              background: rgba(20, 86, 174, 0.2);
              color: #19439a;
            }
          }

          .router-link-active {
            border: 1px solid #19439a !important;
            background: rgba(20, 86, 174, 0.2);
            color: #19439a;
          }
        }
      }
    }
  }
}
</style>
