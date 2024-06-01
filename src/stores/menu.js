import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuIconStore = defineStore('menuIconStore', () => {
  const menuIconStatus = ref(false)

  function changeMenuIconStatus(flag) {
    menuIconStatus.value = flag
  }

  return { menuIconStatus, changeMenuIconStatus }
})
