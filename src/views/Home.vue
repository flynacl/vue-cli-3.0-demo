<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    computed: {
      msg() {
        return this.$store.state.home.msg;
      }
    }
  }
</script>
