<template>
  <div class="about">
    <div id="vs"></div>
  </div>
</template>
<script>
  import Player from 'xgplayer-multi-vod-4reach'
  import { onMounted } from 'vue'

  export default {
    name: 'SingleVod',
    setup () {
      onMounted(() => {
        let defaultLevel = '两路视频', defaultUrl
        let streams = [
          {
            "name": "两路视频",
            "channel": [
              {
                "ID": "1",
                "type": "mp4",
                "files": [
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  },
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  },
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  }
                ]
              },

              {
                "ID": "2",
                "type": "jpg",
                "files": [
                  {
                    "starttime": "0",
                    "imageUrl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857217324,3205513960&fm=26&gp=0.jpg"
                  },
                  {
                    "starttime": "2175",
                    "imageUrl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3849375989,755838305&fm=26&gp=0.jpg"
                  },
                  {
                    "starttime": "5500",
                    "imageUrl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857217324,3205513960&fm=26&gp=0.jpg"
                  }
                ]
              }
            ]
          },
          {
            "name": "三路视频",
            "channel": [
              {
                "ID": "1",
                "type": "mp4",
                "files": [
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  },
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  },
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  }
                ]
              },

              {
                "ID": "2",
                "type": "mp4",
                "files": [
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  },
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  },
                  {
                    "starttime": "0",
                    "totaltime": "2675",
                    "url": "http://192.168.91.144/Rec/test2.mp4"
                  }
                ]
              },

              {
                "ID": "3",
                "type": "jpg",
                "files": [
                  {
                    "starttime": "0",
                    "imageUrl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857217324,3205513960&fm=26&gp=0.jpg"
                  },
                  {
                    "starttime": "2175",
                    "imageUrl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3849375989,755838305&fm=26&gp=0.jpg"
                  },
                  {
                    "starttime": "5500",
                    "imageUrl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857217324,3205513960&fm=26&gp=0.jpg"
                  }
                ]
              }
            ]
          }
        ];

        for(let i = 0; i < streams.length; i++) {
          let stream = streams[i]
          if(stream.name === defaultLevel) {
            defaultUrl = stream
            break
          }
        }

        let player = new Player({
          id: 'vs',
          videoInit: true,
          lang: 'en',
          sideBySideMode: true,
          playsinline: false,
          url: defaultUrl
        })

        player.emit('resourceReady', streams);

        player.on('error', function (err) {
          console.log(err)
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

