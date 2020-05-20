<template>
    <div>Loading....</div>
</template>

<script>
export default {
    mounted(){
        if(!this.$route.query.error){
            localStorage.setItem("token", this.$route.query.token)
            close()
        }
        else if(this.$route.query.error){
            close()
        }
    }
}
</script>

<style>

</style>