// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueHeadful from 'vue-headful'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faUser, faList } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faList)
library.add(faDiscord)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-headful', vueHeadful)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




