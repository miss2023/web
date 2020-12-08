/*
 * @Author: your name
 * @Date: 2020-11-26 17:33:59
 * @LastEditTime: 2020-11-26 17:35:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\node-vue-moba\admin\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryAdd from '../views/CategoryAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
    children:[
      {
        path:'/categories/create',
        component:CategoryAdd
      }
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
