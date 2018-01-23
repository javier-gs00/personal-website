// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// FontAwesome library
import fontAwesome from '@fortawesome/fontawesome'
import { codepen, github, linkedin, node, react } from '@fortawesome/fontawesome-free-brands'
import externalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'

fontAwesome.library.add(externalLinkAlt)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
