<template>
    <div class="servercard container">
        <div class="row no-gutters server-row">
            <div class="col-3-sm no-padding">
                <div v-if ="Icon"><img :src="Icon" alt="Server icon" class="servericon" height="128" width="128"></div>
                <div v-else><img class="servericon" v-holder="{text: compiledname, img: '128x128', bg: '#36393F', pt: 13}" alt="Server icon"></div>
                
            </div>
            <div class="col-9-sm">
                <div class="server-informations">
                    <div class="server-name">{{ServerName}}</div>
                    <div v-if="isBotPresent">
                        <b-btn @click="manage" variant="fuji-yellow">Manage server</b-btn>
                    </div>
                    <div v-else>
                        <b-btn @click="invite">Invite the bot</b-btn>
                    </div>
                </div>
            </div>
        </div>
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
.server-row{
    background: #23272A;
    border-radius: 5px;
}
.no-padding{
    padding-right:0;
    padding-left:0;
}
.server-informations{
    margin-left: 10px;
}
.server-name{
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
}
.servericon{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
</style>