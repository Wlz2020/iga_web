import { RouterName as RN } from '@/config/router'

export const routes = [
  {
    path: '/',
    name: RN.Root,
    redirect: {
      name: RN.Home
    },
    children: [
      // 首页
      {
        path: '',
        name: RN.Home,
        component: () => import('@/views/index')
      },
      // 关于页
      {
        path: '/about',
        name: RN.About,
        component: () => import('@/views/about')
      }
    ]
  }
]
