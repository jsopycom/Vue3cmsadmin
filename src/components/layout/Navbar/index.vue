<!--
 * @Author: jsopy
 * @Date: 2024-05-28 19:50:59
 * @LastEditTime: 2024-06-01 21:32:54
 * @FilePath: /cmsadmin/src/components/layout/Navbar/index.vue
 * @Description: 头部导航栏
 * 
-->

<template>
  <div class="navbar">
    <div class="right-menu">
      <!--头像-->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          >
          </el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> 主页 </el-dropdown-item>
            </router-link>
            <a target="_blank" href="#">
              <el-dropdown-item> 项目地址 </el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!--头像-->
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const logout = () => {
  store.dispatch('Login/loginout')
  console.log('退出登录')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hiddne;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 6px;
    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
