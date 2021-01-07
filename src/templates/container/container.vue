<template>
  <div class="home">
    <mlHeader></mlHeader>
    <div class="page">
      <!-- <submenu ref="subMenu"></submenu> -->
      <div class="content">
        <!-- <ml-crumbs></ml-crumbs> -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import mlHeader from './components/ml-header.vue'
// import submenu from './components/ml-sub-menu.vue'
// import mlCrumbs from './components/ml-crumbs.vue'
export default {
  name: 'home',
  components: {
    mlHeader
    // submenu,
    // mlCrumbs
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .page {
    width: 100%;
    flex: 1;
    display: flex;
    & > .content {
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: #f1f4f9;
      overflow: hidden;
      & > div {
        flex: 1;
        padding: 30px;
        background-color: #ffffff;
      }
    }
  }
}
</style>
