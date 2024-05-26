<template>
  <div>
    <el-button type="primary" @click="handleClick">点击我Post</el-button>
    <el-button type="primary" @click="handleClick2">点击我Get</el-button>
    <svg-icon icon="eye" className="svgbox"></svg-icon>
  </div>
</template>

<script setup>
import { loginApiPost, loginApiGet } from '@/api/Login/index'

const handleClick = () => {
  loginApiPost({
    username: 'admin',
    password: '123456'
  }).then((res) => {
    console.log(res)
  })
}

const handleClick2 = () => {
  loginApiGet({
    username: 'admin',
    password: '123456'
  }).then((res) => {
    console.log(res)
  })
}
</script>

<style lang="scss" scoped>
.svgbox {
  font-size: 48px;
}
</style>
