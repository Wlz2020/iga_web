<script setup>
import { ref } from 'vue'
import { useMenuIconStore } from '@/stores/menu'
import LoadingView from './components/LoadingView.vue'
import MainView from './components/MainView.vue'
const loading = ref(true)
const menuIconStore = useMenuIconStore()

function onCloseLoadingView() {
  loading.value = false
  menuIconStore.changeMenuIconStatus(true)
}
</script>

<template>
  <LoadingView @close-loading-view="onCloseLoadingView" v-if="loading"></LoadingView>
  <MainView v-else></MainView>
</template>

<style scoped lang="less"></style>
