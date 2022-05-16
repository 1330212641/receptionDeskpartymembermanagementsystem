import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
	hidden:true
  },
  {
    path: '/Home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
	hidden:true
  },
  {
    path: '/Home',
    name: '信息查询',
    component: () => import('../views/Home.vue'),
	children:[
		{
		  path:'/person',
		  name:'个人信息',
		  component: () => import( '../views/person.vue')
		},
		{
		  path:'/request',
		  name:'发展要求',
		  component: () => import( '../views/request.vue')
		},
		{
		  path:'/person',
		  name:'发展流程',
		  component: () => import( '../views/person.vue')
		},
		{
		  path:'/person',
		  name:'积极分子申请',
		  component: () => import( '../views/person.vue')
		},
		{
		  path:'/request',
		  name:'发展对象申请',
		  component: () => import( '../views/request.vue')
		},
		{
		  path:'/request',
		  name:'预备党员申请',
		  component: () => import( '../views/request.vue')
		},
		{
		  path:'/request',
		  name:'党员转正申请',
		  component: () => import( '../views/request.vue')
		},
		{
		  path:'/request',
		  name:'违纪情况',
		  component: () => import( '../views/request.vue')
		},
		{
		  path:'/request',
		  name:'荣誉情况',
		  component: () => import( '../views/request.vue')
		},
		{
		  path:'/request',
		  name:'荣誉情况',
		  component: () => import( '../views/request.vue')
		}
	]
  }
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
