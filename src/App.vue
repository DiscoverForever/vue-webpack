<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        message: 'hello'
      }
    },
    mounted() {
      console.log(this.$router)
    }
  }
</script>

<style scoped>
  
</style>