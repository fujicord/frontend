<template>
  <div id="app">
    <Navbar></Navbar>
    <vue-headful title="Title from vue-headful" description="Description from vue-headful" />
    <router-view/>
  </div>
</template>

<script>

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import Navbar from'@/components/Navbar.vue'

export default {
  name: 'App',
  components: {Navbar},
  data (){
    return {
      window: null,
      login_window_watcher: null,
      token: localStorage.getItem("token")
    }
  },
  methods: {
    login () {
      this.window = window.open("https://api.yvan.dev/login", "_blank", "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=800")
      this.login_window_watcher = setInterval(() => {
        if (this.window.closed){
          if (localStorage.token){
            this.token = localStorage.getItem("token")
          }
          clearInterval(this.login_window_watcher)
        }
      }, 1000)
    }
  }
}

</script>

<style lang="scss">

@import './custom.scss';

</style>
