<template>
    <div id="login">
        <div class="container">
            <div class="row">
                <div class="col-md"></div>
                <div class="col-md-10 col-sm text-center">
                    <div class="login_required">You need to log in with Discord to manage the bot</div>
                    <b-btn @click="login()" class="login">Login with discord</b-btn>
                </div>
                <div class="col-md"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        login(){
            this.$store.commit('login')
        }
    }
}
</script>

<style>
.login_required{
    color: white;
}
#login{
    padding-top: 70px;
}
.login{
    margin-top: 20px;
}
</style>