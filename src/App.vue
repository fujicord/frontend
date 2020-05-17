<template>
  <div id="app">
    <Navbar></Navbar>
    <vue-headful title="Title from vue-headful" description="Description from vue-headful" />
    <router-view/>
  </div>
</template>

<script>


import Navbar from'@/components/Navbar.vue'

export default {
  name: 'App',
  components: {Navbar},
}

</script>

<style lang="scss">

@import './custom.scss';

</style>
