import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Ring from '../components/Service-ring.vue'
import Glass from '../components/Service-glass.vue'
import ClientInfo from '../components/ClientInfo.vue'
import Confirmation from '../components/Confirmation.vue'
import Contact from '../components/Contact.vue'
import Location from '../components/Location.vue'
import Booking from '../components/Booking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        background: 'roman-derrick-okello-wuijDIYPejk-unsplash.jpg',
        ifSlogan: true,
        slogan: '',
      },
    },
    {
      path: '/ring',
      name: 'ring',
      component: Ring,
      meta: {
        background: 'edgar-soto-o87CUS_uDiQ-unsplash.jpg',
        ifSlogan: true,
        slogan: 'The best workshop in London',
        buttonLabel: 'Craft a Ring',
      },
    },
    {
      path: '/glass',
      name: 'glass',
      component: Glass,
      meta: {
        background: 'david-clode-JGeqqZEuagg-unsplash.jpg',
        ifSlogan: true,
        slogan: 'The best workshop in London',
        buttonLabel: 'Glassblowing',
      },
    },
    {
      path: '/clientInfo',
      name: 'clientInfo',
      component: ClientInfo,
      meta: {
        background: 'marisa-buhr-mizunaka-9YzA4cFSCdE-unsplash.jpg',
        ifSlogan: false,
      },
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: Confirmation,
      meta: {
        // background: 'joanna-kosinska-kKfVAvdBsAw-unsplash.jpg',
        background: 'bernard-hermant-XFCei-F4mjg-unsplash.jpg',
        ifSlogan: false,
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        background: 'sebastian-pociecha-XoOjLGLavJU-unsplash.jpg',
        ifSlogan: false,
      },
    },
    {
      path: '/location',
      name: 'location',
      component: Location,
      meta: {
        background: 'alisa-anton-SiKMqywFKWA-unsplash.jpg',
        ifSlogan: false,
      },
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking,
      meta: {
        background: 'kelvin-han-vZNR15AOqrg-unsplash.jpg',
        ifSlogan: false,
      },
    },
    {
      path: '/',
      redirect: '/home',
    },
  ],
})

export default router
