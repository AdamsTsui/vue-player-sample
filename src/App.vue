<template>
  <div id="nav">
    <router-link to="/single/vod">单路点播</router-link> |
    <router-link to="/single/live">单路直播</router-link> |
    <router-link to="/multi/vod">多路点播</router-link> |
    <router-link to="/multi/live">多路直播</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
