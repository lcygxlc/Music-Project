import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Minereview from '../views/mine/Minereview.vue'
import MineChatgroup from '../views/mine/MineChatgroup.vue'
import MineLikesreceived from '../views/mine/MineLikesreceived.vue'
import MineInform from '../views/mine/MineInform.vue'
import MineCollect from '../views/mine/MineCollect.vue'
import Minedata from '../views/mine/Minedata.vue'
import Found from '../views/Found.vue'
import Community from '../views/Community.vue'
import Denglu from '../views/Denglu.vue'
import Zhuce from '../views/Zhuce.vue'
import Song from '../views/Song.vue'
import Songdetails from '../views/songs/Songdetails.vue'
import Songreview from '../views/songs/Songreview.vue'
import Install from '../views/Install.vue'
import security from '../views/install/security.vue'
import changepassword from '../views/install/changepassword.vue'
import onSearch from '../views/onSearch.vue'

Vue.use(VueRouter)
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine,
    meta: { login_required: true }
  },
  {
    path: '/Found',
    name: 'Found',
    component: Found
  },
  {
    path: '/Community',
    name: 'Community',
    component: Community
  },
  {
    path: '/Denglu',
    name: 'Denglu',
    component: Denglu,
  },
  {
    path: '/Zhuce',
    name: 'Zhuce',
    component: Zhuce
  },
  {
    path: '/Song',
    name: 'Song',
    component: Song
  },
  {
    path: '/Install',
    name: 'Install',
    component: Install
  },
  {
    path: '/install/security',
    name: 'security',
    component: security
  },
  {
    path: '/songs/Songdetails/:id',
    name: 'Songdetails',
    component: Songdetails
  },
  {
    path: '/songs/Songreview/:id',
    name: 'Songreview',
    component: Songreview
  },
  {
    path: '/onSearch',
    name: 'onSearch',
    component: onSearch
  },
  {
    path: '/install/changepassword',
    name: 'changepassword',
    component: changepassword
  },
  {
    path: '/mine/Minereview/',
    name: 'Minereview',
    component: Minereview
  },
  {
    path: '/mine/MineLikesreceived/',
    name: 'MineLikesreceived',
    component: MineLikesreceived
  },
  {
    path: '/mine/MineInform/',
    name: 'MineInform',
    component: MineInform
  },
  {
    path: '/mine/MineChatgroup/',
    name: 'MineChatgroup',
    component: MineChatgroup
  },
  {
    path: '/mine/MineCollect/',
    name: 'MineCollect',
    component: MineCollect
  },
  {
    path: '/mine/Minedata/',
    name: 'Minedata',
    component: Minedata
  },
  // {
  //   path: '/mine/Minereview/',
  //   name: 'Minereview',
  //   component: Minereview
  // },
  // {
  //   path: '/mine/Minereview/',
  //   name: 'Minereview',
  //   component: Minereview
  // },
  // {
  //   path: '/mine/Minereview/',
  //   name: 'Minereview',
  //   component: Minereview
  // },
  // {
  //   path: '/mine/Minereview/',
  //   name: 'Minereview',
  //   component: Minereview
  // },
  // {
  //   path: '/mine/Minereview/',
  //   name: 'Minereview',
  //   component: Minereview
  // },
  // {
  //   path: '/mine/Minereview/',
  //   name: 'Minereview',
  //   component: Minereview
  // },
  // {
  //   path: '/mine/Minereview/',
  //   name: 'Minereview',
  //   component: Minereview
  // },

]

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

let router = new VueRouter({
  routes
});

// 去除应路由拦截而产生的的报错，可有可无
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve || reject) return originalPush.call(this, location, resolve, reject)
  return originalPush.call(this, location).catch((e) => { })
}

//局部拦截
router.beforeEach(function (to, from, next) {
  //logged_in变量 记录用户是否登录
  var logged_in = false
  var logged = window.localStorage.getItem('userid') //取出的是string类型
  if (logged !== '') {
    logged_in = true
  }
  if (!logged_in && to.matched.some(function (item) {
    return item.meta.login_required
  })) {
    next('/Denglu');
  } else {
    next();
  }
});

export default router
