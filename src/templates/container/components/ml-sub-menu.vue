<template>
  <div class="sub-menu" v-if="subMenu.length > 1">
    <!-- 二级菜单 -->
    <template v-for="item in subMenu">
      <router-link
        v-if="item.menuType == '00'"
        :key="item.menuId"
        :to="parentPath + item.url"
        class="sub-menu-item iconfont"
        :class="{ 'router-link-active': currentUrl == parentPath + item.url }"
      >
        <i :class="item.iconCls"></i>
        <span class="itemStyle">{{ item.menuName }}</span>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: 'submenu',
  props: ['currentUrl'],
  data() {
    return {
      isShow: false,
      parentPath: '',
      mainMenus: [],
      currentMenu: null,
      subMenu: []
    }
  },
  watch: {
    $route() {
      this.subMenuInit() //监听菜单变动
    }
  },
  created() {
    // this.mainMenus = ["/404","/login","/roadsectionactual","/trafficaccident"]
    // this.mainMenus = this.$store.state.menuList;
  },
  mounted() {
    this.subMenuInit()
  },
  methods: {
    subMenuInit() {
      //查找当前在那个菜单下
      this.parentPath = this.$route.matched[0].path

      if (this.$route.path == '/401' && this.$route.query.purl) {
        this.parentPath = this.$route.query.purl //如果是401界面，也要把二级菜单显示出来
      }

      this.subMenu = []
      this.mainMenus.map(item => {
        if (item.url == this.parentPath && item.children) {
          this.subMenu = item.children
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
.sub-menu {
  width: 120px;
  height: 100%;
  background: #f6f6f6;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(204, 204, 204, 1);
  .sub-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 120px;
    font-size: 16px;
    color: #666;
    border: 2px solid transparent;
    border-bottom-color: #ddd;
    transition: color 0.3s;
    box-sizing: border-box;
    .itemStyle {
      text-align: center;
    }
    i {
      font-size: 26px;
      margin-bottom: 6px;
    }
    &:hover {
      opacity: 0.6;
      // .router-link-active;
    }
    // &.router-link-active {
    //   background: rgba(51, 147, 255, 0.1);
    //   border: 2px solid rgba(51, 147, 255, 1);
    //   color: rgba(51, 147, 255, 1);
    // }
  }
}
</style>
