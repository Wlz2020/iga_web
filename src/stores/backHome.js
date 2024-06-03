import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usebackHomeFlagStore = defineStore(
  'backHomeFlagStore',
  () => {
    const isBackHomeFlagStatus = ref(false)

    function changeBackHomeFlagStatus(flag) {
      isBackHomeFlagStatus.value = flag
    }

    return { isBackHomeFlagStatus, changeBackHomeFlagStatus }
  },
  {
    // persist: {
    //   key:'my-custom-key', // 存储的key, 默认store.$id
    //   storage: sessionStorage // 存储的类型，默认localStorage
    //   paths:['name','sex']// 指定 state 中哪些数据需要被持久化, 默认undefined
    // }
  }
)
