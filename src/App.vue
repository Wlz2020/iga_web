<script setup>
// import { getCurrentInstance, onMounted } from 'vue'
// import { RouterName as RN } from '@/config/router'
import MenuView from './components/MenuView.vue'

// function showMainView() {
//   const instance = getCurrentInstance()
//   const { $router } = instance.proxy
//   const currentMenuName = $router.currentRoute.value.name
//   console.log('==', currentMenuName)
//   return !(currentMenuName === RN.Home)
// }

// onMounted(() => {
//   showMainView()
// })
</script>
<template>
  <div class="page-layout-view mainBgColor">
    <RouterView />
    <MenuView />
  </div>
</template>

<style scoped>
.page-layout-view {
  position: relative;
  height: 100vh;
  width: 100vw;
}
</style>
