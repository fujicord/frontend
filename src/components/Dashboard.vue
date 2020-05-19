<template>
  <div id="dashboard">
    <div v-if="!isLoggedIn">
      <NotLoggedIn></NotLoggedIn>
    </div>
    <div v-else>
      <div class="container">
        <div class="row">
          <div class="col-md"></div>
          <div class="col-md-8 text-center">Your servers</div>
          <div class="col-md"></div>
        </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-md col-lg"></div>
              <div class="col-md-6 col-lg-8">
                  <div class="list">
                        <div class="servers" v-for="server in servers" v-bind:key="server.id">
                          <ServerCard class="lol" :ServerID="server.id" :ServerName="server.name" :isBotPresent="true" Icon="lol.png"></ServerCard>
                        </div>
                  </div>
              </div>
              <div class="col-md col-lg"></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotLoggedIn from "@/components/NotLoggedIn.vue";
import ServerCard from "@/components/ServerCard.vue";
export default {
  data() {
    return {
        wait_for_login: null
    }
  },
  components: { NotLoggedIn, ServerCard },
  computed: {
    isLoggedIn() {
      return this.$store.state.token != null;
    },
    servers(){
      return this.$store.state.guilds
    }
  },
  methods: {
  },
  mounted() {
    this.$store.commit("getGuilds")
  }
};
</script>

<style>
/* fOND: 2C2F33 ; Fond pour les champs: #23272A */
body {
  background: #2c2f33;
}
.servercard{
    margin-top: 10px;
}
#dashboard {
  color: white;
}
</style>