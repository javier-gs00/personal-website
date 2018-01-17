<template>
  <div id="app">
    <Navigation :lang="lang"/>
    <div class="main-container">
      <router-view :lang="lang" :changeLang="changeLang"/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation'

export default {
  name: 'app',
  data() {
    return {
      lang: 'english'
    }
  },
  methods: {
    changeLang() {
      if(this.lang === 'english') {
        return this.lang = 'spanish'
      } else {
        return this.lang = 'english'
      }
    }
  },
  components: {
    Navigation
  }
}
</script>

<style lang="less">
@import (reference) './assets/style/style.less';

html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: @primary-dark;
}
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 300;
  color: @accent;
}
a, p, span, input {
  font-family: 'Muli', sans-serif;
  font-size: 20px;
  color: @accent-light;
}
a {
  text-decoration: none;
  color: @accent-dark;
}
.logo {
  font-family: 'Playfair Display', serif;
}
#app {
  height: 100%;
}
.main-container {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.4)),
  //                         url('./assets/img/santiago_landscape_1920x1080.jpg');
  // background-size: cover; 
  // position: fixed;
  // z-index: -1;
}
</style>
