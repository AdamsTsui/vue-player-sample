<template>
  <div class="about">
    <div id="vs"></div>
  </div>
</template>
<script>
  import FlvPlayer from 'xgplayer-flv-multi-4reach.js'
  import { onMounted } from 'vue'

  export default {
    name: 'SingleVod',
    setup () {
      onMounted(() => {
        const player = new FlvPlayer({
          id: 'vs',
          url: ['http://192.168.91.144/live/channel1.flv','http://192.168.91.144/live/channel2.flv'],
          isLive: true,
          autoplay: true,
          videoInit: true,
          // isH323: true,
          sideBySideMode: true,
          lang: 'en',
          playsinline: false,
          ignores: ['progress']
        })
        player.emit('resourceReady', [{name: '高清', url: ['http://192.168.91.144/live/channel1.flv','http://192.168.91.144/live/channel2.flv']}
          , {name: '超清', url: ['http://192.168.91.144/live/channel2.flv','http://192.168.91.144/live/channel1.flv']}]);
      })
    }
  }
</script>

<style lang="scss" scoped>
  #vs {
    margin: 20px auto;
  }
</style>

