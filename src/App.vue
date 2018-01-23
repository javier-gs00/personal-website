<template>
  <div id="app">
    <Navigation :lang="lang"/>
    <button class="btn-open-nav" @click="openNav"><span>&#9776;</span></button>
    <div class="main-container">
      <transition name="fade" mode="out-in">
        <router-view :lang="lang" :changeLang="changeLang"/>
      </transition>
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
      return this.lang === 'english' 
        ? this.lang = 'spanish'
        : this.lang = 'english'
    },
    openNav() {
      document.getElementById('nav').style.width = "170px"
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
  color: @accent-light;
}
span {
  font-size: 20px;
}
p {
  font-size: 18px; 
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
    position: fixed;
    z-index: 1;
    right: 0px;
    outline: none;
    padding: 10px 10px;
    margin: 0;
    background: transparent;
    border: 0px;
    font-size: 24px;
    .for-tablet-landscape-up({ display: none; })
}
.main-container {
  height: 100%;
  .for-tablet-landscape-up({
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
  });
}
.fade-enter-active, .fade-leave-active {
  .for-phone-and-tablet-portrait({
    transition-property: opacity;
    transition-duration: .2s;
    transition-timing-function: ease;
  });
}

.fade-enter-active {
  .for-phone-and-tablet-portrait({
    transition-delay: .1s;
  });
}

.fade-enter, .fade-leave-active {
  .for-phone-and-tablet-portrait({
    opacity: 0
  });
}
</style>
