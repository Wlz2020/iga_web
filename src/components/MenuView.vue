<script setup>
import { useMenuIconStore } from '@/stores/menu'
const menuIconStore = useMenuIconStore()
</script>

<template>
  <div v-if="menuIconStore.menuIconStatus">
    <div>MenuView</div>
  </div>
</template>

<style scoped lang="less"></style>
