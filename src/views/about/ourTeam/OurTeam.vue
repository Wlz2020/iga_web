<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import IconClose from '@/components/IconClose.vue'
import bus from '@/utils/bus'

import { teamList } from './hook/data'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
const modules = [Mousewheel, Pagination]

const addFilterBg = ref(false)

const swiperList = ref([])

const currenrTeacher = ref()

const currenrTeacherName = ref()

function onMouseoverTeacher(item) {
  currenrTeacher.value = item
}

function generateSwiperItems(list = []) {
  const maxPerItem = 6
  const swiperItems = []

  for (let i = 0; i < list.length; i += maxPerItem) {
    const swiperItem = list.slice(i, i + maxPerItem)
    swiperItems.push(swiperItem)
  }

  return swiperItems
}

function initDataList() {
  swiperList.value = generateSwiperItems(teamList)
}

function onClickTeacher(item) {
  currenrTeacherName.value = item.name
}

function onShowTip(item) {
  return currenrTeacher.value === item && currenrTeacherName.value !== item.name
}

onMounted(() => {
  initDataList()
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>
<template>
  <div class="our-team-view" :class="{ filter: addFilterBg }">
    <IconClose class="close-icon"></IconClose>
    <div class="content">
      <div class="filter-box">filter-box</div>
      <div class="swiper-box">
        <swiper
          :modules="modules"
          class="swiper-container"
          :slides-per-view="1"
          :grabCursor="true"
          :pagination="{ clickable: true }"
          :mousewheel="true"
          :loop="true"
          @swiper="onSwiper"
          direction="vertical"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(swiperItem, swiperIndex) in swiperList"
            :key="swiperIndex"
            class="slide-item"
          >
            <div
              v-for="(teacherItem, teacherIndex) in swiperItem"
              :key="teacherIndex"
              class="teacher-info-item-box"
            >
              <div class="teacher-info-item">
                <div class="top">
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>

                  <div
                    class="info"
                    @mouseover="onMouseoverTeacher(teacherItem)"
                    @click="onClickTeacher(teacherItem)"
                  >
                    <div class="img-container">
                      <img :src="teacherItem.img" alt="" />
                    </div>
                    <div class="tip" v-if="onShowTip(teacherItem)">
                      <p>More</p>
                      <p>Info</p>
                      <p><Icon type="ios-arrow-round-forward" /></p>
                    </div>
                    <div class="teacher-content" v-if="teacherItem.name === currenrTeacherName">
                      <div class="top-wrap">
                        <p>{{ teacherItem.title }}</p>
                        <p>{{ teacherItem.subTitle }}</p>
                      </div>
                      <div class="bottom-wrap">
                        <p>{{ teacherItem.desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bottom">
                  <div class="name">{{ teacherItem.isActive }}</div>
                  <div class="level">{{ teacherItem.level }}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 500rem;

.our-team-view {
  position: absolute;
  top: calc(50% - (@modalHeight / 2));
  left: calc(50% - (@modalWidth / 2));
  width: @modalWidth;
  height: @modalHeight;
  display: flex;
  align-items: center;

  .close-icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    // border: 1px solid red;

    .filter-box {
      flex: 1;
      height: 100%;
      // border: 1px solid orange;
    }

    .swiper-box {
      flex: 6;
      height: 100%;
      // border: 1px solid green;
    }
  }
}

.swiper-container {
  width: 100%;
  height: 100%;

  :deep(.swiper-pagination) {
    .swiper-pagination-bullet {
      background-color: green;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background-color: blue;
    }
  }
}

.slide-item {
  display: flex;
  flex-wrap: wrap;
}

.teacher-info-item-box {
  width: 33%;
  height: 50%;
}

.teacher-info-item {
  width: max-content;
  max-width: 92%;
  height: 100%;
  display: flex;
  padding: 10rem;
  flex-direction: column;

  .top {
    position: relative;
    flex: 6;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    .bar {
      width: 30rem;
      height: 30rem;
      position: absolute;
      &:nth-child(1) {
        top: 0;
        left: 0;
        border-top: 1rem solid #fff;
        border-left: 1rem solid #fff;
      }
      &:nth-child(2) {
        top: 0;
        right: 0;
        border-top: 1rem solid #fff;
        border-right: 1rem solid #fff;
      }
      &:nth-child(3) {
        bottom: 0;
        left: 0;
        border-bottom: 1rem solid #fff;
        border-left: 1rem solid #fff;
      }
      &:nth-child(4) {
        bottom: 0;
        right: 0;
        border-bottom: 1rem solid #fff;
        border-right: 1rem solid #fff;
      }
    }

    .info {
      margin: 20rem;
      display: flex;
      justify-content: space-between;
      // align-items: center;

      &:hover {
        cursor: pointer;
      }
    }

    .tip {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 20rem;
      p {
        font-size: 16rem;
        color: #fff;

        &:nth-child(3) {
          font-size: 30rem;
        }
      }
    }

    .teacher-content {
      flex: 1;
      font-size: 12rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform: scale(0.85);

      .bottom-wrap {
        color: #aaa;
      }
    }

    .img-container {
      width: calc(833rem / 9);
      height: calc(1125rem / 9);
    }
  }
  .bottom {
    color: #fff;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
