<template>
  <div class="LoginPage">
    <div class="Formbox">
      <div class="FormWrap">
        <!-- <font-awesome-icon icon="eye" style="font-size: 32px" />
    <font-awesome-icon icon="eye-slash" style="font-size: 32px" /> -->
        <div class="title">用户登陆</div>
        <el-form
          :model="formdata"
          ref="loginFormRef"
          :rules="rules"
          class="FormContent"
        >
          <!-- 用户名 -->
          <el-form-item prop="username" class="formitem">
            <el-input v-model="formdata.username" placeholder="只能是admin">
              <template #prepend>
                <svg-icon icon="user" className="svgbox"></svg-icon>
              </template>
            </el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password" class="formitem">
            <el-input
              v-model="formdata.password"
              placeholder="只能是123456"
              :type="testType"
            >
              <template #prepend>
                <svg-icon icon="password" className="svgbox"></svg-icon>
              </template>
              <template #append>
                <svg-icon
                  icon="eye"
                  className="svgboxeye"
                  v-if="testType == 'password'"
                  @click="changetestType('text')"
                ></svg-icon>

                <svg-icon
                  icon="eye-open"
                  className="svgboxeye"
                  v-if="testType == 'text'"
                  @click="changetestType('password')"
                ></svg-icon>
              </template>
            </el-input>
          </el-form-item>
          <!-- 协议 -->
          <el-form-item prop="agreement" class="formitem xieyi">
            <el-checkbox class="agreementcontent" v-model="formdata.agreement">
              我同意此协议
            </el-checkbox>
          </el-form-item>
          <!--TODO:提交按钮-->
          <el-button
            type="primary"
            :loading="loading"
            class="submitbutton"
            @click="submitchange"
          >
            登陆
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  checkusername,
  checkpassword,
  checkagreement
} from '@/utils/Login/tools.js'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// NOTE:获取表单
const loginFormRef = ref(null)
// NOTE:Login 等待
const loading = ref(false)
// NOTE:login密码框类型
const testType = ref('password')
// NOTE:login表单数据
const formdata = ref({
  username: '',
  password: '',
  agreement: false
})
// NOTE:自定义验证
const rules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      validator: checkusername
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: checkpassword
    }
  ],
  agreement: [
    {
      required: true,
      validator: checkagreement
    }
  ]
})

// NOTE:Store

const store = useStore()

// NOTE:Router
const router = useRouter()
// TODO: login提交事件
const submitchange = () => {
  loginFormRef.value.validate((result) => {
    console.log(result)
    // 验证失败
    if (!result) {
      return
    }
    store
      .dispatch('Login/loginapi', formdata.value)
      .then((res) => {
        // 登陆成功
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
// TODO: login改变密码框
const changetestType = (result) => {
  testType.value = result
}
</script>

<style lang="scss" scoped>
.LoginPage {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #2a2c41;
  .Formbox {
    width: 600px;
    height: auto;
    margin: 0 auto;
    margin-top: 300px;
    .FormWrap {
      width: 100%;
      height: 100%;
      .title {
        width: 100%;
        font-size: 28px;
        color: white;
        letter-spacing: 4px;
        text-align: center;
      }
      .FormContent {
        .formitem {
          width: 90%;
          margin-left: 5%;
          border: none !important;
          margin-top: 40px;
          ::v-deep .el-input-group__prepend {
            background: #252729;
            color: wheat;
            border: 1px solid wheat;
            border-right: none;
          }
          ::v-deep .el-input-group__append {
            background: #fff;
            border: none;
            color: #000;
            cursor: pointer !important;
          }
          ::v-deep .el-form-item__error {
            top: 48px;
            font-size: 16px;
          }
          .svgboxeye {
            font-size: 26px;
          }
        }
        .xieyi {
          ::v-deep .el-form-item__error {
            top: 8px;
            font-size: 16px;
            left: 120px;
          }
        }
        .agreementcontent {
          color: white;
        }
        .submitbutton {
          width: 90%;
          margin-left: 5%;
        }
      }
    }
  }
}
</style>
