<script setup>
import loadingView from '@/assets/image/index/iga_web_loading.gif'
import { defineEmits } from 'vue'

const emit = defineEmits(['close-loading-view'])

function onClick() {
  emit('close-loading-view')
}
</script>

<template>
  <div class="load-wrap">
    <div class="size100 load-img">
      <img :src="loadingView" />
    </div>

    <div class="font text-wrap en_font_bold">
      <span class="animate__animated animate__zoomIn" @click="onClick">START YOUR NEXT LEVEN</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.load-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .load-img {
    img {
      object-fit: contain;
    }
  }

  .text-wrap {
    position: absolute;
    text-align: center;
    width: 100%;
    bottom: 2vh;

    span {
      position: relative;
      display: inline-block;
      padding: 20rem;
      font-size: 12rem;
      font-weight: bold;
      color: #454545;
      word-spacing: 4rem;

      &:hover {
        &::before {
          content: '+';
          position: absolute;
          left: 0;
        }

        &::after {
          content: '+';
          position: absolute;
          right: 0;
        }
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
