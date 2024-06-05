<script setup>
import bus from '@/utils/bus'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { ref } from 'vue'
import OfferPreview from '@/components/OfferPreview.vue'

import USOfferPreview from './components/USOfferPreview.vue'
import UKOfferPreview from './components/UKOfferPreview.vue'
import OtherOfferPreview from './components/OtherOfferPreview.vue'

const modules = [Mousewheel, Pagination]
const currentIndex = ref(0)

const onSlideChange = (slideRef) => {
  const index = slideRef.activeIndex
  currentIndex.value = index
  bus.emit('bus-offers-slide-active-index', index)
}
</script>

<template>
  <div class="swiper-box">
    <swiper
      :modules="modules"
      class="swiper-container"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :mousewheel="true"
      :grabCursor="true"
      direction="vertical"
      @slideChange="onSlideChange"
    >
      <swiper-slide key="swiperIndex1" class="slide-item">
        <OfferPreview class="offers-wrap"></OfferPreview>
      </swiper-slide>
      <swiper-slide key="swiperIndex2" class="slide-item">
        <USOfferPreview></USOfferPreview>
      </swiper-slide>
      <swiper-slide key="swiperIndex3" class="slide-item">
        <UKOfferPreview></UKOfferPreview>
      </swiper-slide>
      <swiper-slide key="swiperIndex4" class="slide-item">
        <OtherOfferPreview></OtherOfferPreview>
      </swiper-slide>
    </swiper>

    <div class="tip">
      <div class="arrow-container en_font_bold">
        <div class="first-arrow">
          <Icon :type="currentIndex === 3 ? '' : 'ios-arrow-down'" />
        </div>
        <div>
          <Icon :type="currentIndex === 3 ? '' : 'ios-arrow-down'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 500rem;

.swiper-box {
  position: absolute;
  top: calc(50% - (@modalHeight / 2));
  left: calc(50% - (@modalWidth / 2));
  width: @modalWidth;
  height: @modalHeight;
  display: flex;
  align-items: center;

  .slide-item {
    position: relative;
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

.offers-wrap {
  position: absolute;
  top: 20%;
  left: 20%;

  :deep(.offer-preview-view) {
    transform: scale(1.4);
  }
}

.tip {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-family: 'en_font_bold';
  font-size: 14rem;
  color: #fff;
  opacity: 0.6;
  text-align: center;

  .first-arrow {
    margin-bottom: -10rem;
  }
}
</style>
