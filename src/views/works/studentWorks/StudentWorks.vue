<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { goHome } from '@/helps/go-home'

import IconClose from '@/components/IconClose.vue'
import bus from '@/utils/bus'

import { studentWorksList, levels } from './hook/data'

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const modules = [Mousewheel, Pagination]

const addFilterBg = ref(false)

const swiperList = ref([])

const reallySwiperList = ref(studentWorksList)

const currenrTeacher = ref(studentWorksList[0])

const currentLevel = ref(levels.All)

const showoDetailsInfoView = ref(false)

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
  swiperList.value = generateSwiperItems(reallySwiperList.value)
}

function onMouseoverTeacher(item) {
  currenrTeacher.value = item
}

function onClickTeacher(item) {
  currenrTeacher.value = item

  showoDetailsInfoView.value = true
  addFilterBg.value = true
}

function onShowTip(item) {
  return currenrTeacher.value === item
}

function onCloseInfoView() {
  showoDetailsInfoView.value = false
  addFilterBg.value = false
}

function onFilterTeacherByLevel(level) {
  currentLevel.value = level

  if (level === levels.All) {
    reallySwiperList.value = studentWorksList
    initDataList()
    return
  }

  reallySwiperList.value = studentWorksList.filter((item) => item.level === level)
  initDataList()
}

const instance = getCurrentInstance()

function onGoHome() {
  const { $router } = instance.proxy
  goHome($router)
}

onMounted(() => {
  initDataList()

  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>
<template>
  <div class="our-team-view en_font_bold" :class="{ filter: addFilterBg }">
    <IconClose @click="onGoHome()" class="close-icon"></IconClose>
    <div class="content">
      <div class="filter-box">
        <div class="name">FILTER</div>
        <div class="filter-list">
          <div
            class="item"
            :class="{ active: currentLevel === level }"
            @click="onFilterTeacherByLevel(level)"
            v-for="level in levels"
            :key="level"
          >
            {{ level }}
          </div>
        </div>
      </div>
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
                  </div>
                </div>
                <div class="bottom">
                  <div class="name">{{ teacherItem.name }}</div>
                  <div class="level">{{ teacherItem.level }}</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>

  <div
    class="teacher-info-view ch_font_light"
    @click.stop="onCloseInfoView"
    v-if="showoDetailsInfoView"
  >
    <IconClose class="close-teacher-info-view"></IconClose>
    <div class="info-view">
      <div class="img-view">
        <div class="img-container"><img :src="currenrTeacher.img" alt="" /></div>
      </div>
      <div class="content-view">
        <div class="top-wrap">
          <p>{{ currenrTeacher.title }}</p>
          <p>{{ currenrTeacher.subTitle }}</p>
        </div>
        <div class="bottom-wrap">
          <p>{{ currenrTeacher.desc }}</p>
        </div>
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
    z-index: 2;
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
      margin-top: 30rem;

      .name {
        font-size: 22rem;
        color: #fff;
        font-weight: bold;
      }

      .filter-list {
        margin-top: 20rem;

        &:hover {
          // color: #fff;
          // cursor: pointer;
        }

        .item {
          font-size: 16rem;
          margin-bottom: 16rem;
          &:hover {
            color: #fff;
            cursor: pointer;
          }
        }

        .active {
          font-size: 18rem;
          color: #fff;
        }
      }
      // border: 1px solid orange;
    }

    .swiper-box {
      flex: 5.5;
      height: 100%;
      // border: 1px solid green;
    }
  }
}

.swiper-container {
  width: 100%;
  height: 100%;

  :deep(.swiper-pagination) {
    top: unset;
    bottom: 2%;

    .swiper-pagination-bullet {
      opacity: 1;
      width: 10rem;
      height: 2rem;
      border-radius: 0%;
      background-color: #fff;
      opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
      height: 4rem;
    }
  }
}

.slide-item {
  display: flex;
  flex-wrap: wrap;
}

.teacher-info-item-box {
  width: 31.8%;
  height: 50%;
}

.teacher-info-item {
  width: max-content;
  height: 100%;
  display: flex;
  padding: 20rem;
  flex-direction: column;

  .top {
    position: relative;
    flex: 6;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    &:hover {
      cursor: pointer;
    }

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
      position: relative;
    }

    .tip {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 20rem;
      p {
        font-size: 12rem;
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
      width: calc(833rem / 8);
      height: calc(1125rem / 8);

      &:hover {
        opacity: 0.5;
      }
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

.teacher-info-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;

  .close-teacher-info-view {
    position: absolute;
    bottom: calc(50% - 250rem - 50rem);

    &:hover {
      &::before {
        top: 30rem;
      }
    }
  }

  .info-view {
    width: 800rem;
    height: 400rem;
    border: 1rem solid #fff;
    padding: 10rem;
    display: flex;
    align-items: center;

    .img-view {
      flex: 1.4;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .img-container {
      width: calc(833rem / 5);
      height: calc(1125rem / 5);
    }

    .content-view {
      flex: 2;
      color: #fff;
      font-size: 18rem;
      margin-right: 36rem;
      display: flex;
      flex-direction: column;
      // align-items: center;
      height: calc(1125rem / 5);
      justify-content: space-around;
    }
  }
}
</style>
