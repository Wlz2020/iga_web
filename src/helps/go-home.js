import { usebackHomeFlagStore } from '@/stores/backHome'
import { toPage } from '@/helps/navigation'
import { RouterName as RN } from '@/config/router'

const backHomeFlagStore = usebackHomeFlagStore()

export function goHome(router) {
  backHomeFlagStore.changeBackHomeFlagStatus(true)
  toPage(router, RN.Home)
}
