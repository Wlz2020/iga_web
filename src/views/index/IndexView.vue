<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { usebackHomeFlagStore } from '@/stores/backHome'
import { RouterName as RN } from '@/config/router'
import LoadingView from './components/LoadingView.vue'
import MainView from './components/MainView.vue'

const loading = ref(true)
const menuStore = useMenuStore()
const backHomeFlagStore = usebackHomeFlagStore()

function onCloseLoadingView() {
  loading.value = false
  menuStore.changeMenuShowIconStatus(true)
}

function judgeCloseLoadingView() {
  if (backHomeFlagStore.isBackHomeFlagStatus) {
    onCloseLoadingView()
  }
}

function judgeMenuShowIconStatus() {
  const instance = getCurrentInstance()
  const { $router } = instance.proxy
  const currentRoute = $router.currentRoute.value
  if (currentRoute.name === RN.Home) {
    menuStore.changeMenuShowIconStatus(false)
  }
}

onMounted(() => {
  judgeMenuShowIconStatus()
  judgeCloseLoadingView()
})
</script>

<template>
  <LoadingView @close-loading-view="onCloseLoadingView" v-if="loading"></LoadingView>
  <MainView v-else></MainView>
</template>

<style scoped lang="less"></style>
