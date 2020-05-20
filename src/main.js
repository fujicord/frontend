// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueHeadful from 'vue-headful'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faList } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

// name is optional
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.use(VueLodash, { name: 'loadash' , lodash: lodash })

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
library.add(faBars, faList)
library.add(faDiscord)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-headful', vueHeadful)

const store = new Vuex.Store({
  state:{
      window: null,
      login_window_watcher: null,
      token: localStorage.getItem("token"),
      user: null,
      guilds: []
  },
  mutations: {
    login (state) {
      state.window = window.open("https://api.yvan.dev/login", "_blank", "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=740")
      state.login_window_watcher = setInterval(() => {
        if (state.window.closed){
          if (localStorage.token){
            state.token = localStorage.getItem("token")
            this.commit("getUser")
            this.commit("getGuilds")
          }
          clearInterval(state.login_window_watcher)
        }
      }, 1000)
    },
    logout(state){
      localStorage.removeItem("token")
      state.user = null
      state.token = null
      state.guilds = []
    },
    getUser(state){
      if(state.token){
        axios.get("https://api.yvan.dev/api/v1/user/user", {headers: {Authorization:`Bearer ${state.token}`}}).then(response=> state.user = response.data.data)
      }
    },
    getGuilds(state){
      if(state.token){
        axios.get("https://api.yvan.dev/api/v1/user/guilds", {headers: {Authorization: `Bearer ${state.token}`}}).then(response => state.guilds = response.data.guilds)
      }
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
