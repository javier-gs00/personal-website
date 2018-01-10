import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Work from '@/components/work'
import Experience from '@/components/experience'
import Contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
