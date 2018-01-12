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

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #fafafa;
  /* background: linear-gradient(141deg, #6a0080, #9c27b0, #d05ce3, #67daff, #03a9f4, #007ac1); */
  /* background: linear-gradient(141deg, #9c27b0, #03a9f4); */
}
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 300;
}
a, p, span, input {
  font-family: 'Muli', sans-serif;
  font-size: 20px;
}
a {
    text-decoration: none;
    /* color: #2e2e2e; */
    color:#2196f3;
}
.logo {
  font-family: 'Playfair Display', serif;
}
#app {
  display: flex;
  height: 100%;
}
.main-container {
  width: 100%;
}
</style>
