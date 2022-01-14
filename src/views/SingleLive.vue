<template>
  <div class="about">
    <div id="vs"></div>
  </div>
</template>
<script>
  import FlvPlayer from 'xgplayer-flv-single-4reach.js'
  import { onMounted } from 'vue'

  export default {
    name: 'SingleVod',
    setup () {
      onMounted(() => {
        new FlvPlayer({
          id: 'vs',
          url: 'http://192.168.91.144/live/channel1.flv',
          isLive: true,
          autoplay: true,
          videoInit: true,
          lang: 'zh-cn',
          playsinline: false,
          ignores: ['time', 'progress']
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  #vs {
    margin: 20px auto;
  }
</style>

