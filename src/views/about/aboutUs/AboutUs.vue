<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'

import bus from '@/utils/bus'
import { goHome } from '@/helps/go-home'

import { useMenuStore } from '@/stores/menu'

import IconClose from '@/components/IconClose.vue'
import IconAdd from '@/components/IconAdd.vue'

import ImgIGALogo from '@/assets/image/index/iga-logo.png'
import ImgSHCoverUrl from '@/assets/image/index/cover-sh-video.png'
import VideoSHUrl from '@/assets/image/index/IGA-SH.mp4'
import ImgSZCoverUrl from '@/assets/image/index/cover-sz-video.png'
import VideoSZUrl from '@/assets/image/index/IGA-SZ.mp4'

const menuStore = useMenuStore()

const showVideo = ref(false)

const videoModel = ref({
  video: VideoSHUrl,
  cover: ImgSHCoverUrl
})

const addFilterBg = ref(false)

const videoViewRef = ref(null)

const mapper = new Map()
mapper.set(0, { video: VideoSHUrl, cover: ImgSHCoverUrl })
mapper.set(1, { video: VideoSZUrl, cover: ImgSZCoverUrl })

function openVideo(flag) {
  videoViewRef.value.classList.toggle('ani-fadeIn', flag)
  menuStore.changeMenuShowIconStatus(false)
  showVideo.value = true
  addFilterBg.value = true
  videoModel.value = mapper.get(flag)
}

function onCloseVideo() {
  showVideo.value = false
  addFilterBg.value = false
  menuStore.changeMenuShowIconStatus(true)
}
const instance = getCurrentInstance()

function onGoHome() {
  const { $router } = instance.proxy
  goHome($router)
}

onMounted(() => {
  bus.on('bus-show-menu', (v) => {
    addFilterBg.value = v
  })
})
</script>
<template>
  <div>
    <div class="about-us-view" :class="{ filter: addFilterBg }">
      <IconClose @click="onGoHome()" class="close-icon"></IconClose>
      <div class="content">
        <div class="top">
          <div class="logo">
            <div class="img-contain">
              <img :src="ImgIGALogo" />
            </div>
          </div>
          <div class="text font-wrap ch_font_light">
            <p>
              专注游戏研发与教育，培养高水平游戏设计人才（程序、设计、美术、制作）。累计收获CMU、USC、NYU、UPenn、UAL、Parsons
              等全球顶尖学府游戏设计offer 550+。
            </p>
            <p>2023年NYU 19 offer，USC 11 offer，CMU 3offer。</p>
            <p>
              IGA Studio 与多家游戏公司合作活动/赛事，通过Workshop、Game Pitch、Game
              Jam、游戏论坛等形式，帮助学生了解行业信息并拿到实习/全职机会，直通游戏产业。孵化Project
              GC青年游戏设计社群。
            </p>
          </div>
        </div>

        <div class="footer ch_font_light">
          <div class="item"><IconAdd></IconAdd> [联系我们]</div>
          <div class="item" @click="openVideo(0)"><IconAdd></IconAdd> [上海校区]</div>
          <div class="item"><IconAdd></IconAdd> 上海市徐汇区吴兴路277号 吴界808</div>
          <div class="item" @click="openVideo(1)"><IconAdd></IconAdd> [深圳校区]</div>
          <div class="item"><IconAdd></IconAdd> 深圳市南山区南山街道 前海企业公馆8栋</div>
        </div>
      </div>
    </div>

    <div class="video-view" ref="videoViewRef" @click.stop="onCloseVideo" v-show="showVideo">
      <IconClose class="close-video"></IconClose>
      <video
        @click.stop
        class="video"
        :autoplay="true"
        :loop="true"
        :controls="false"
        :key="videoModel.cover"
      >
        <source :src="videoModel.video" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<style scoped lang="less">
@modalWidth: 1200rem;
@modalHeight: 480rem;

.about-us-view {
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
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    .top {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-around;

      .logo {
        .img-contain {
          width: calc(660rem / 2);
          height: calc(440rem / 2);
        }
      }

      .text {
        color: #fff;
        width: 62%;
        font-size: 16rem;
      }
    }

    .footer {
      margin-top: 50rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      color: #fff;
      font-size: 16rem;

      .item {
        border: 1px solid transparent;
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(2) {
          &:hover {
            cursor: pointer;
            width: max-content;
            border-bottom-color: #fff;
            // text-decoration: underline;
          }
        }

        &:nth-child(4) {
          &:hover {
            cursor: pointer;
            width: max-content;
            border-bottom-color: #fff;
            // text-decoration: underline;
          }
        }
      }
    }
  }
}

.video-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  justify-content: center;

  .video {
    width: unset;
    height: 500rem;
    border: 1rem solid #fff;
    padding: 51rem 0;
  }

  .close-video {
    position: absolute;
    bottom: calc(50% - 250rem - 50rem);

    &:hover {
      &::before {
        top: 30rem;
      }
    }
  }
}

.font-wrap {
  line-height: 30rem;

  p {
    font-size: 18rem;

    &:nth-child(2) {
      margin: 20rem 0;
    }
  }
}
</style>
