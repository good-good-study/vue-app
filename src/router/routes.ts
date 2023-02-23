import HomeView from '../components/home/HomeView.vue'
import FlutterView from '../components/flutter/FlutterView.vue'
import RankView from '../components/rank/RankView.vue'
import A from '../components/a/A.vue'
import B from '../components/b/B.vue'
import C from '../components/c/C.vue'
import D from '../components/d/D.vue'

// 路由定义
const Router = {
  home: {
    path: '/',
    name: '首页',
    componet: HomeView
  },
  flutter: {
    path: '/flutter',
    name: 'Flutter',
    componet: FlutterView
  },
  rank: {
    path: '/rank',
    name: '排行榜',
    componet: RankView
  },
  a: {
    path: '/a',
    name: 'A',
    componet: A
  },
  b: {
    path: '/b',
    name: 'B',
    componet: B
  },
  c: {
    path: '/c',
    name: 'C',
    componet: C
  },
  d: {
    path: '/d',
    name: 'D',
    componet: D
  }
}

export default Router