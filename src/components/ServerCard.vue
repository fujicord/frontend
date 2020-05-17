<template>
    <div class="servercard">
        <b-card no-body class="overflow-hidden" bg-variant="discord-darkest">
            <div class="row">
                <div class="col-xs-4">
                    <b-card-img :src="Icon" alt="Server icon" class="rounded-0"></b-card-img>
                </div>
                <div class="col-xs-8">
                    <b-card-body :title="ServerName">
                        <b-card-text>
                            <div class="button" v-if="isBotPresent"><b-btn variant="fuji-yellow" @click="manage">Manage server</b-btn></div>
                            <div class="button" v-else><b-btn>Invite the bot</b-btn></div>
                        </b-card-text>
                    </b-card-body>

                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    props: ["ServerName", "ServerID", "Icon", "isBotPresent"],
    methods: {
        manage(){
            this.$router.push({name: "Server", params: {id: this.ServerID}})
        },
        invite(){

        }
    }
}
</script>

<style>

</style>