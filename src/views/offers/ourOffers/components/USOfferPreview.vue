<script setup>
import bus from '@/utils/bus'
import scrollNumber from '@/helps/scroll-number.js'
import { onMounted, ref } from 'vue'
import { list1, listRef } from '../hook/data'

const list2 = ref(listRef)

function initAnimations(durationTime = 2000) {
  const instances = []

  // 更新 list2.all
  const allInstance = scrollNumber('0', list1.all, durationTime, (value) => {
    list2.value.all = value
  })

  instances.push(allInstance)

  // 更新 list2.arr
  list1.arr.forEach((item, index) => {
    const instance = scrollNumber('0', item.num, durationTime, (value) => {
      list2.value.arr[index].num = value
    })
    instances.push(instance)
  })

  return {
    // 返回所有实例的引用
    instances,

    // 清除所有实例
    clearAllInstances() {
      instances.forEach((instance) => {
        instance.stopAnimation()
      })
    }
  }
}

const showMaskLayer = ref(false)

onMounted(() => {
  initAnimations(2000)

  bus.on('bus-offers-slide-active-index', (v) => {
    if (v === 1) {
      initAnimations(2000)
    }
  })
})
</script>

<template>
  <div class="p-relative">
    <div
      :class="{ filter: showMaskLayer }"
      class="offer-preview-view"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
    >
      <div class="chat-view">
        <div class="top">
          <div class="box1 samall_lcd_sign_font">U.S.</div>
          <div class="box2 samall_lcd_sign_font">OFFERS</div>
        </div>
        <div class="bottom">
          <div>
            <div
              class="all seven_Segment_font"
              v-for="(item, index) in String(list2.all).split('')"
              :key="index"
            >
              <div>{{ item }}</div>
            </div>
            <div class="all seven_Segment_font">
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="list">
          <div class="item" v-for="(item, index) in list2.arr" :key="index">
            <div class="samall_lcd_sign_font">{{ item.name1 }}</div>
            <div class="samall_lcd_sign_font">{{ item.name2 }}</div>
            <div class="seven_Segment_font">{{ item.num }}</div>
          </div>
        </div>
        <!-- <div class="list">
          <div class="item" v-for="(item, index) in list2.arr2" :key="index">
            <div class="samall_lcd_sign_font">{{ item.name1 }}</div>
            <div class="samall_lcd_sign_font">{{ item.name2 }}</div>
            <div class="seven_Segment_font">{{ item.num }}</div>
          </div>
        </div>
        <div class="list">
          <div class="item" v-for="(item, index) in list2.arr3" :key="index">
            <div class="samall_lcd_sign_font">{{ item.name1 }}</div>
            <div class="samall_lcd_sign_font">{{ item.name2 }}</div>
            <div class="seven_Segment_font">{{ item.num }}</div>
          </div>
        </div> -->
      </div>
    </div>
    <div v-if="showMaskLayer" class="en_font_bold mask-layer">VIEW MORES</div>
  </div>
</template>

<style scoped lang="less">
.offer-preview-view {
  color: #fff;
  // width: 716rem;

  .top {
    display: flex;
    font-size: 30rem;
    border: 2rem solid #fff;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15rem 20rem;
    }

    .img-icon-wrap {
      margin-top: 1rem;
    }

    .box1 {
      width: 50%;
      justify-content: flex-start;
    }
    .box2 {
      width: 50%;
      justify-content: flex-end;
    }
  }

  .bottom {
    display: flex;

    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 20rem;

      .all {
        height: 150rem;
        font-size: 130rem;
        border: 2rem solid #fff;
        width: 100rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .area-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
    }

    .area-box-item {
      .name {
        font-size: 11rem;
      }

      .num {
        margin-top: -4rem;
        font-size: 23rem;
      }
    }
  }
}

.mask-layer {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 25rem;
  background-color: rgba(#000, #000, #000, 0.1);

  &:hover {
    cursor: pointer;
  }
}

.chat-view {
  position: relative;
  left: 20%;
  width: 716rem;
  transform: scale(0.85);
}

.footer {
  margin-top: -30rem;
  transform: scale(0.85) translateX(-8.5%) translateY(30rem);
  width: 120%;
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    min-width: calc(100% / 6);
    max-width: calc(100% / 6);
    div {
      color: #fff;
      &:nth-child(1) {
        font-size: 11rem;
      }
      &:nth-child(2) {
        font-size: 11rem;
      }
      &:nth-child(3) {
        margin-top: -10rem;
        font-size: 40rem;
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
