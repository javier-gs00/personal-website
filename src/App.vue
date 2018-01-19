<template>
  <div id="app">
    <Navigation :lang="lang"/>
    <button class="btn-open-nav" @click="openNav"><span>&#9776;</span></button>
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
    },
    openNav(){
      document.getElementById('nav').style.width = "200px"
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
.btn-open-nav {
    display: inline;
    float: right;
    outline: none;
    padding: 10px 10px;
    background: transparent;
    border: 0px;
    font-size: 24px;
    // .for-phone-only({
    //     display: inline;
    //     float: right;
    //     outline: none;
    //     padding: 10px 10px;
    //     background: transparent;
    //     border: 0px;
    //     font-size: 24px;
    // });
    .for-tablet-landscape-up({
        display: none;
    })
}
.main-container {
  height: 100%;
  // .for-phone-only({
  //   height: 100%;
  // });
  .for-tablet-landscape-up({
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  });
}
</style>
