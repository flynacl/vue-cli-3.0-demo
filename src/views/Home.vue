<template>
  <el-row type="flex" justify="center">
    <HelloWorld :msg="msg"/>
  </el-row>
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
