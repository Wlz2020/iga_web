import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore(
  'menuStore',
  () => {
    const menuShowIconStatus = ref(false)
    const menuOpenStatus = ref(false)

    function changeMenuShowIconStatus(flag) {
      menuShowIconStatus.value = flag
    }

    function changeMenuOpenStatus(flag) {
      menuOpenStatus.value = flag
    }

    return { menuShowIconStatus, menuOpenStatus, changeMenuShowIconStatus, changeMenuOpenStatus }
  },
  {
    persist: {
      // key:'my-custom-key', // 存储的key, 默认store.$id
      storage: sessionStorage // 存储的类型，默认localStorage
      // paths:['name','sex']// 指定 state 中哪些数据需要被持久化, 默认undefined
    }
  }
)
