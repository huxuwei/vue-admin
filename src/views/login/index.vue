<template>
  <div>
    <el-form :modele='form'>
      <el-form-item>
        <el-input v-model="form.username"></el-input>
        
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="login">登录</el-button>
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
import { test } from "@/api";
export default {
  data(){
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      this.$store.dispatch('LoginByUsername',{
        username: this.form.username,
        password: this.form.password
      })
    },
    test(){
      test().then(res=>{
        // this.$message({
        //   type: 'success',
        //   message: 'success'
        // })
      }).catch(err=>{
       console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
