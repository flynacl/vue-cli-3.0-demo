<template>
  <div class="hello">
    <h1 @click="click">{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    methods: {
      click() {
        this.$message({
          message: this.msg,
          type: 'success',
          showClose: true,
          duration: 4500
        });
        this.$notify({
          title: '通知',
          message: this.msg,
          position: 'bottom-right',
          type: 'success'
        });
        this.$notify({
          title: '通知',
          message: this.msg,
          position: 'bottom-left',
          type: 'success'
        });
        this.$notify({
          title: '通知',
          message: this.msg,
          position: 'top-right',
          type: 'success'
        });
        this.$notify({
          title: '通知',
          message: this.msg,
          position: 'top-left',
          type: 'success'
        });
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `action: ${ action }`
            });
          }
        });
        // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });
        // });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  h3
    margin 40px 0 0

  ul
    list-style-type none
    padding 0

  li
    display inline-block
    margin 0 10px

  a
    color #42b983
</style>
