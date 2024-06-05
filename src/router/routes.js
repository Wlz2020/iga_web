import { RouterName as RN } from '@/config/router'

export const routes = [
  {
    path: '/',
    children: [
      // 首页
      {
        name: RN.Home,
        path: '',
        component: () => import('@/views/index')
      },
      // 关于页
      {
        path: '/about',
        name: RN.About,
        children: [
          {
            path: '/about-us',
            name: RN.AboutUs,
            component: () => import('@/views/about/aboutUs')
          },
          {
            path: '/our-team',
            name: RN.OurTeam,
            component: () => import('@/views/about/ourTeam')
          }
        ]
      },
      // 作品集
      {
        path: '/works',
        name: RN.Works,
        children: [
          {
            path: '/student-works',
            name: RN.StudentWorks,
            component: () => import('@/views/works/studentWorks')
          }
        ]
      },
      // OurOffers
      {
        path: '/offers',
        name: RN.Offers,
        children: [
          {
            path: '/our-offers',
            name: RN.OurOffers,
            component: () => import('@/views/offers/ourOffers')
          }
        ]
      }
    ]
  }
]
