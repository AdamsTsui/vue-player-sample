<template>
  <div class="about">
    <div id="vs"></div>
  </div>
</template>
<script>
  import Player from 'xgplayer-single-video-4reach'
  import { onMounted } from 'vue'

  export default {
    name: 'SingleVod',
    setup () {
      onMounted(() => {
        new Player({
          id: 'vs',
          url: 'http://192.168.91.144/Rec/test1.mp4'
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

