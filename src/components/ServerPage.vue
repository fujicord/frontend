<template>
  <div>
    <div>{{server}}</div>
    <b-btn @click="test">Fetch guild</b-btn>
    Error: {{error}} <br/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "ServerPage",
    data(){
        return {
          server: this.$route.params.id,
          loaded: false,
          denied: false,
          guild: {},
          error: null
        }
    },
    methods: {
      test(){
        this.$router.push({name: "ServerOverview", params: {id:this.server}})
      },
      getGuild(){
        this.$http.get(`https://api.yvan.dev/api/v1/config/guild/${this.server}`, {headers: {"Authorization": `Bearer ${this.$store.state.token}`}}).then(response => this.guild = response.data.guild).catch(error => this.error = error.response.status)
      }
    }

}
</script>
