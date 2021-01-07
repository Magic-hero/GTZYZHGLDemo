import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Container from '@/templates/container/container'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: HelloWorld
    },
    {
      path: "/",
      name:"system",
      component: Container,
    //   //二级界面路由
      children: [
        {
          path: "",
          redirect: "table",
        },
        {
          path: "table",
          name: "/table",
          component: () => import(`@/templates/dataTable/dataTable`),
          meta: { title: "全省概况总览", isrole: true }
        }, 
        {
          path: "mapShow",
          name: "/mapShow",
          component: () => import(`@/templates/mapShow/mapShow`),
          meta: { title: "地图矢量总览", isrole: true }
        }, 
        {
          path: "detail",
          name: "/detail",
          component: () => import(`@/templates/detailTable/detailTable`),
          meta: { title: "审批数据详情", isrole: true }
        },
        {
          path: "mapJudge",
          name: "/mapJudge",
          component: () => import(`@/templates/mapJudge/mapJudge`),
          meta: { title: "多实相对比", isrole: true }
        },
        {
          path: "person",
          name: "/person",
          component: () => import(`@/templates/personCenter/personCenter`),
          meta: { title: "用户管理", isrole: true }
        }
 
      ]
    }
  ]
})
