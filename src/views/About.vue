<template>
  <div class="about">
    <el-container>
      <el-main>
        <el-input v-model="desc" placeholder="请输入内容" clearable></el-input>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'about',
    computed: {
      ...mapState('about', [
        'description'
      ]),
      desc: {
        get() {
          return this.description;
        },
        set(newDescription) {
          this.updateDescription(newDescription)
        }
      }
    },
    methods: {
      ...mapActions('about', [
        'updateDescription'
      ])
    }
  }
</script>

<style  lang="stylus" scoped>
  .about
    i
      font-size 1.5rem
      margin 0 20px
</style>