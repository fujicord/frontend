<template>
<div>
  <b-navbar toggleable="sm" type="dark" variant="fuji">
    <b-navbar-brand href="/">
      <img src="@/assets/logo-inline.png" height="64" alt="home">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"><font-awesome-icon icon="bars"/></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/features">Features</b-nav-item>
        <b-nav-item href="#">Dashboard</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            Login
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

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