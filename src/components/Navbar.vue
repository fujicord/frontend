<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="fuji">
    <b-navbar-brand :to="{name: 'Index'}">
      <img src="@/assets/logo-inline.png" height="64" alt="home">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"><font-awesome-icon icon="bars"/></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name:'Index'}">Home</b-nav-item>
        <b-nav-item :to="{name:'Features'}">Features</b-nav-item>
        <b-nav-item :to="{name: 'Dashboard'}">Dashboard</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div v-if="isLoggedIn">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              UserName#0000
            </template>
            <b-dropdown-item @click="logout">Log out</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
        <div v-else @click="login">
          <b-nav-item>
            Login
          </b-nav-item>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  computed: {
    token(){
      return this.$store.state.token
    },
    isLoggedIn(){
      return (this.token != null)
    }
  },
  methods: {
    login(){
      this.$store.commit("login")
    },
    logout(){
      this.$store.commit("logout")
    }
  }
}
</script>

<style>
.nav-link{
  font-weight: bold;
  color: white !important;
  opacity: 0.9;
}
.nav-link:hover , .nav-link:active{
  color: #FDB717 !important;
}
</style>