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
                      <ServerCard ServerName="Fujibot" Icon="https://cdn.discordapp.com/icons/311081903933358081/c8fcfb9e4f9f1f8d6789423917ee515f.png?size=1024" ServerID="311081903933358081" :isBotPresent="true"></ServerCard>
                      <ServerCard ServerName="Fujibot" Icon="https://cdn.discordapp.com/icons/311081903933358081/c8fcfb9e4f9f1f8d6789423917ee515f.png?size=1024" ServerID="311081903933358081" :isBotPresent="false"></ServerCard>
                      <ServerCard ServerName="Fujibot" Icon="https://cdn.discordapp.com/icons/311081903933358081/c8fcfb9e4f9f1f8d6789423917ee515f.png?size=1024" ServerID="311081903933358081"></ServerCard>
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
    return {};
  },
  components: { NotLoggedIn, ServerCard },
  computed: {
    isLoggedIn() {
      return this.$store.state.token != null;
    }
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