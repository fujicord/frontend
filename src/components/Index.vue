<template>
    <div id="index">
        <div class="container">
            <div class="row">
                <div class="col-md"></div>
                <div class="col-md-10 col-sm text-center">
                    <div class="title" @click="clickTitle()">Fujibot</div>
                    <div class="description">{{description}}</div>
                    <div class="buttons">
                        <b-row>
                            <b-col md><b-btn class="button" variant="fuji" @click="invite()"><font-awesome-icon :icon="['fab', 'discord']"/> Add to your server</b-btn></b-col>
                            <b-col md><b-btn class="button" variant="fuji-yellow" @click="goToFeatures()"><font-awesome-icon :icon="['fas', 'list']"/> View features</b-btn></b-col>
                        </b-row>
                        
                    </div>
                </div>
                <div class="col-md"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            description: "It's time to enhance your discord experience",
            clicks: 0,
            easter_egg: ['Never gonna give you up', 'Never gonna let you down', 'Never gonna run around and desert you', 'Never gonna make you cry', ' Never gonna say goodbye', 'Never gonna tell a lie and hurt you']
        }
    },
    methods: {
        clickTitle(){
            if(this.clicks < 6)
                this.description = this.easter_egg[this.clicks]
            this.clicks = this.clicks + 1
        },
        invite(){
            open("https://discordapp.com/api/oauth2/authorize?client_id=307653150515658753&permissions=540339414&scope=bot")
        },
        goToFeatures(){
            this.$router.push('Features')
        }
    }
}
</script>

<style>

#index{
    
    padding-top: 90px;
}


/* body { 
  background: url(https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1369&q=80) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
} */
.title{
    font-size: 4em;
    color: white;
}
.description{
    color: white;
    font-size: 2.5em;
}
.button{
    margin-top: 30px;
    font-size: 1.5em;
}

@media (max-width: 575.98px) {
    .description{
        font-size: 1.5em;
    }
    .button{
        font-size: 1.5em;
    }
}
@media (min-width: 576px) and (max-width: 767.98px) {}


</style>