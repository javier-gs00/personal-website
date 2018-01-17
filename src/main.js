// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// FontAwesome library
import fontAwesome from '@fortawesome/fontawesome'
// import brands from '@fortawesome/fontawesome-free-brands'
// Brands icons
import { codepen, github, linkedin, node, react } from '@fortawesome/fontawesome-free-brands'
// import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
// import github from '@fortawesome/fontawesome-free-brands/faGithub'
// import codepen from '@fortawesome/fontawesome-free-brands/faCodepen'
// import react from '@fortawesome/fontawesome-free-brands/faReact'
// import node from '@fortawesome/fontawesome-free-brands/faNode'
// Solid icons
import home from '@fortawesome/fontawesome-free-solid/faHome'
import user from '@fortawesome/fontawesome-free-solid/faUser'
import briefcase from '@fortawesome/fontawesome-free-solid/faBriefcase'
import at from '@fortawesome/fontawesome-free-solid/faAt'
import externalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt'
import bars from '@fortawesome/fontawesome-free-solid/faBars'
import times from '@fortawesome/fontawesome-free-solid/faTimes'

// fontAwesome.library.add(
//   linkedin, github. codepen, react, node,
//   home, user, briefcase, at, externalLinkAlt)

fontAwesome.library.add(home, user, briefcase, at, externalLinkAlt, bars, times)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
