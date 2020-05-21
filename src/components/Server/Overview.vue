<template>
  <div>Lol mdr {{guild.name}}</div>
</template>

<script>
export default {
    computed:{
        guild(){
            return this.$parent.guild
        }
    }
}
</script>

<style>

</style>