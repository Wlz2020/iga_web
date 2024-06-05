<script setup>
import ImgIgaStu from '@/assets/image/common/iga_stu.png'
import scrollNumber from '@/helps/scroll-number.js'
import { onMounted, ref } from 'vue'
import bus from '@/utils/bus'

const list1 = {
  all: '555',
  arr: [
    {
      name: 'U.S.',
      num: '00300'
    },
    {
      name: 'U.K.',
      num: '00150'
    },
    {
      name: 'OTHERS',
      num: '00070'
    }
  ]
}

const list2 = ref({
  all: '0',
  arr: [
    {
      name: 'U.S.',
      num: '0'
    },
    {
      name: 'U.K.',
      num: '0'
    },
    {
      name: 'OTHERS',
      num: '0'
    }
  ]
})

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
    if (v === 0) {
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
      <div class="top">
        <div class="box1">
          <div class="img-icon-wrap"><img :src="ImgIgaStu" alt="" /></div>
        </div>
        <div class="box2 samall_lcd_sign_font">OFFERS</div>
        <div class="box3 samall_lcd_sign_font">WORLDWIOE</div>
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
        </div>

        <div class="area-box">
          <div v-for="(item, index) in list2.arr" :key="index" class="area-box-item">
            <div class="name samall_lcd_sign_font">{{ item.name }}</div>
            <div class="num seven_Segment_font">{{ item.num }}+</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showMaskLayer" class="en_font_bold mask-layer">VIEW MORES</div>
  </div>
</template>

<style scoped lang="less">
.offer-preview-view {
  color: #fff;
  width: 716rem;

  .top {
    display: flex;
    border: 1rem solid #fff;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1rem solid #fff;
      padding: 15rem 20rem;
    }

    .img-icon-wrap {
      margin-top: 1rem;
    }

    .box1 {
      width: 30%;
    }
    .box2 {
      width: 20%;
    }
    .box3 {
      width: 50%;
      justify-content: flex-end;
    }
  }

  .bottom {
    display: flex;

    > div {
      display: flex;
      margin-top: 20rem;

      .all {
        height: 150rem;
        font-size: 130rem;
        border: 2rem solid #fff;
        margin-right: 29rem;
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
</style>
