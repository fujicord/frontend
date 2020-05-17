<template>
  <div>{{server}}</div>
</template>

<script>
export default {
    data(){
        return {server: this.$route.params.id}
    }
}
</script>

<style>

</style>