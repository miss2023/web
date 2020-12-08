<template>
  <div>
    <h1>新建分类</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="mode.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode:{}
    };
  },
  create(){
    
  },
  methods:{
    save(){
     console.log(this.$http.get())
    }
  }
};
</script>

<style>
</style>