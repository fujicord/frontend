<template>
  <div id="dashboard">
      <NotLoggedIn></NotLoggedIn>
  </div>
</template>

<script>
import NotLoggedIn from '@/components/NotLoggedIn.vue'
export default {
    data(){
        return {
            logged: false
        }
    },
    components: {NotLoggedIn}
}
</script>

<style>
/* fOND: 2C2F33 ; Fond pour les champs: #23272A */
body{
    background: #2C2F33;
}
</style>