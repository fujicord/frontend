<template>
    <div class="servercard">
        <b-card no-body class="overflow-hidden" bg-variant="discord-darkest">
            <div class="row">
                <div class="col-xs-5">
                    <div class="serverimg" v-if="Icon">
                        <b-card-img :src="Icon" alt="Server icon" class="rounded-0 servericon" style="max-width:128px"></b-card-img>
                    </div>
                    <div class="serverimg" v-else>
                        <img class="rounded-0 servericon card-img" v-holder="{text: compiledname, img: '128x128', bg: '#36393F', pt: 13}" style="" alt="server icon">
                    </div>
                </div>
                <div class="col-xs-7">
                    <b-card-body :title="ServerName">
                        <b-card-text>
                            <div class="button" v-if="isBotPresent"><b-btn variant="fuji-yellow" @click="manage">Manage server</b-btn></div>
                            <div class="button" v-else><b-btn @click="invite">Invite the bot</b-btn></div>
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
    computed:{
        compiledname(){
            return this.ServerName.match(/\b\w/g).join('').toUpperCase()
        }
    },
    methods: {
        manage(){
            this.$router.push({name: "Server", params: {id: this.ServerID}})
        },
        invite(){
            open(`https://discord.com/oauth2/authorize?client_id=505808254690000896&permissions=540339414&scope=bot&guild_id=${this.ServerID}`)
        }
    }
}
</script>

<style>
.card-img-top {
    width: 128px;
    height: 128px;
    object-fit: cover;
}
</style>