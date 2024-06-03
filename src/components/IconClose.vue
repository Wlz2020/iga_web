<script setup></script>

<template>
  <div class="icon-box"><Icon type="ios-close" class="icon" /></div>
</template>

<style scoped lang="less">
.icon-box {
  position: relative;
  z-index: 2;

  &:hover {
    cursor: pointer;
    opacity: 0.5;

    &::before {
      content: 'CLOSE';
      position: absolute;
      bottom: 30rem;
      left: -35rem;
      text-align: center;
      width: 100rem;
      color: #fff;
    }
  }

  .icon {
    font-size: 30rem;
    color: #fff;
  }
}
</style>
