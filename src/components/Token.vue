<template>
    <div>Loading....</div>
</template>

<script>
export default {
    mounted(){
        localStorage.setItem("token", this.$route.query.token)
        close()
    }
}
</script>

<style>

</style>