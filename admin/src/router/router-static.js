import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import leixing from '@/views/modules/leixing/list'
    import news from '@/views/modules/news/list'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import examquestion from '@/views/modules/examquestion/list'
    import exampaper from '@/views/modules/exampaper/list'
    import storeup from '@/views/modules/storeup/list'
    import huodongshenqing from '@/views/modules/huodongshenqing/list'
    import hongsehuodong from '@/views/modules/hongsehuodong/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yigonghuodong from '@/views/modules/yigonghuodong/list'
    import yigongshenqing from '@/views/modules/yigongshenqing/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/leixing',
        name: '类型',
        component: leixing
      }
      ,{
	path: '/news',
        name: '党建动态',
        component: news
      }
      ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
      ,{
	path: '/examquestion',
        name: '试题管理',
        component: examquestion
      }
      ,{
	path: '/exampaper',
        name: '在线答题管理',
        component: exampaper
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/huodongshenqing',
        name: '活动申请',
        component: huodongshenqing
      }
      ,{
	path: '/hongsehuodong',
        name: '红色活动',
        component: hongsehuodong
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/yigonghuodong',
        name: '义工活动',
        component: yigonghuodong
      }
      ,{
	path: '/yigongshenqing',
        name: '义工申请',
        component: yigongshenqing
      }
      ,{
	path: '/exampaperlist',
        name: '在线答题列表',
        component: exampaperlist
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/examrecord',
        name: '考试记录',
        component: examrecord
      }
    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
