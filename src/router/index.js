import Vue from 'vue'
import Router from 'vue-router'
import lottery from '@/components/lottery'
import lotteryRecord from '@/components/lotteryRecord'

Vue.use(Router)

const router = new Router({
  routes: [
    {
    path: '/',
    name: 'lottery',
    meta: {
      title: '幸运九宫格'
    },
    component: lottery
  },
    {
    path: '/lottery',
    name: 'lottery',
    meta: {
      title: '幸运九宫格'
    },
    component: lottery
  },
  {
    path: '/lotteryRecord',
    name: 'lotteryRecord',
    meta: {
      title: '幸运九宫格中奖纪录'
    },
    component: lotteryRecord
  }]
})

export default router
