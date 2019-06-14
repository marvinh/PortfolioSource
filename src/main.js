import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma-start/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck,faSpinner, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

library.add(faCheck)
library.add(faSpinner)
library.add(faDesktop)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

 


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
 
const router =   new VueRouter({
routes : [
  { path: '/', name: 'Home', component: require('./components/Home/Home').default },
  { path: '/projects', name: 'Projects' , component: require('./components/UnderConstruction').default},
  { path: '/blog', name: 'Blog' ,component: require('./components/UnderConstruction').default},
  { path: '/thesis', name: 'Thesis' ,component: require('./components/UnderConstruction').default},
  { path: '/contact', name: 'Contact' ,component: require('./components/UnderConstruction').default}
]
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
