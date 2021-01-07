<template>
  <b
    class="sub-crumbs"
    v-if="
      subMenu.length > 0 && currentMenu != null && currentMenu.meta.parentUrl
    "
  >
    <router-link :to="parentPath + currentMenu.meta.parentUrl">
      {{ parentMenuName }}
    </router-link>
    <i class="el-icon-arrow-right"></i>
    <span>{{ currentMenu.meta.title }}</span>
  </b>
  <b
    class="sub-crumbs"
    v-else-if="
      subMenu.length > 0 &&
        currentMenu != null &&
        currentMenu.fullPath != '/travelpathanalysis/travelpath' &&
        currentMenu.fullPath != '/roadsectionactual/mainPage'
    "
  >
    <span>{{ currentMenu.meta.title }}</span>
  </b>
</template>
<script>
export default {
  name: "crumbs",
  data() {
    return {
      route: null,
      parentPath: "",
      mainMenus: [],
      currentMenu: null,
      subMenu: []
    };
  },
  watch: {
    $route() {
      this.subMenuInit(); //监听菜单变动
    }
  },
  created() {
    // this.mainMenus = this.$store.state.menuList;
  //  this.mainMenus = ["/404","/login","/roadsectionactual","/trafficaccident"]
  },
  mounted() {
    this.subMenuInit();
  },
  methods: {
    subMenuInit() {
      //查找当前在那个菜单下
      this.parentPath = this.$route.matched[0].path;
      this.currentMenu = this.$route;
      this.subMenu = [];
      this.mainMenus.forEach(item => {
        if (item.url == this.parentPath && item.children) {
          this.subMenu = item.children; //找到当前的二级菜单列表
        }
      });
      this.subMenu.forEach(item => {
        if (item.url == this.currentMenu.meta.parentUrl) {
          this.parentMenuName = item.menuName;
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.sub-crumbs {
  display: block;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  background-color: #fdfdfd;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(204, 204, 204, 1);
  a {
    font-weight: normal;
    padding: 0 10px;
    // color: @main-color;
    cursor: default;
  }
  span {
    font-weight: normal;
    padding: 0 5px;
    color: #1456ae;
    cursor: default;
  }
}
</style>
