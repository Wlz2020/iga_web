import { RouterName as RN } from '@/config/router'

export function toPage(router, name, query, params) {
  router.push({
    name,
    query,
    params
  })
}

export const goAboutUs = (router, query, params) => {
  toPage(router, RN.AboutUs, query, params)
}
