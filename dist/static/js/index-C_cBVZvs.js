import{u as l}from"./index-BnekdxXA.js";import{_ as c}from"./plugin-vueexport-helper-DlAUqK2U.js";import{aL as a,Z as p,_ as i,bd as _,aV as d,a6 as u,r as g,X as r}from"./@vue-DNcgG2if.js";/* empty css                    */import"./view-ui-plus-BGxeEOhN.js";import"./@babel-Blnz0a2F.js";import"./vue-CLOkXO9n.js";import"./ismobilejs-CHLuctl-.js";import"./@videojs-player-Cm1vjMhE.js";import"./video.js-BT8-Wkfq.js";import"./global-Cj-WuTRJ.js";import"./keycode-C2ki2JxI.js";import"./safe-json-parse-Pj9f_QCS.js";import"./@videojs-NMLOuVdQ.js";import"./is-function-Bs8j6Gmq.js";import"./url-toolkit-CDETGiKc.js";import"./videojs-vtt.js-Cn22oKaJ.js";import"./m3u8-parser-BlHpSQaL.js";import"./mpd-parser-C5UIIFif.js";import"./@xmldom-9sfdwTZH.js";import"./mux.js-CjPRN9AE.js";import"./pinia-BKgnzFKA.js";import"./vue-router-CGEEWhDu.js";const f="/iga_web/static/gif/iga_web_loading-CdFicWoC.gif",v={class:"load-wrap"},w={class:"size100 load-img"},V=["src"],y={__name:"LoadingView",emits:["close-loading-view"],setup(n,{emit:e}){const o=e;function t(){o("close-loading-view")}return(s,m)=>(a(),p("div",v,[i("div",w,[i("img",{src:_(f)},null,8,V)]),i("div",{class:"font text-wrap"},[i("span",{class:"animate__animated animate__zoomIn",onClick:t},"START YOUR NEXT LEVEN")])]))}},I=c(y,[["__scopeId","data-v-b0781e78"]]),h="/iga_web/static/mp4/iga_video-PIQ2IEjV.mp4",k={class:"main-view"},x={__name:"MainView",setup(n){const e={playbackRates:[.5,1,1.5,2],autoplay:!0,muted:!1,loop:!0,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:h}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}};return(o,t)=>{const s=d("video-player");return a(),p("div",k,[u(s,{class:"video-player vjs-custom-skin",ref:"videoPlayer",options:e},null,512)])}}},C=c(x,[["__scopeId","data-v-c9d12cb5"]]),b={__name:"IndexView",setup(n){const e=g(!0),o=l();function t(){e.value=!1,o.changeMenuIconStatus(!0)}return(s,m)=>e.value?(a(),r(I,{key:0,onCloseLoadingView:t})):(a(),r(C,{key:1}))}},G=b;export{G as default};