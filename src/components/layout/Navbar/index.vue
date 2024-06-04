<template>
  <div class="navbar">
    <!--收缩-->
    <Hamburger class="hamburger-container"></Hamburger>
    <!--收缩-->
    <BreadList></BreadList>
    <div class="right-menu">
      <!--主题选择-->
      <theme-picker class="right-menu-item hover-effect"></theme-picker>
      <!--主题选择-->
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
import ThemePicker from '@/components/layout/ThemePicker/index'
import BreadList from '@/components/layout/BreadList/index.vue'
import Hamburger from '@/components/layout/Hamburger/index.vue'
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
  .hamburger-container {
    cursor: pointer;
    float: left;
    line-height: 50px;
  }
  .breadcrumb-container {
    float: left;
  }
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
// .el-dropdown-menu__item--divided:before {
//   margin: 0px 0px;
// }
</style>
