<template>
  <div id="app">
    <Navigation />
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation'

export default {
  name: 'app',
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
/* @media only screen and (max-width: 599px){
  html {
    width: auto;
    height: auto;
  }
} */
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #fafafa;
}
/* @media only screen and (max-width: 599px){
  body {
    width: auto;
    height: auto;
  }
} */

h1 {
  font-family: 'Playfair Display', serif;  
}
a, p, span {
  font-family: 'Muli', sans-serif;
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
