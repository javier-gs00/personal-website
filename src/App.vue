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
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #fafafa;
}
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
  /* flex-basis: 1; */
  /* display: inline-block; */
  /* margin: 0 0 0 250px; */
  /* margin: 0;
  padding: 0; */
}
</style>
