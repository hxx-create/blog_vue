<template>
  <div class="background">
    <div class="container">
      <div class="box login">
        <div class="header">
          <h2 v-if="isLogin">Welcome back</h2>
          <h2 v-if="!isLogin">Let's get started</h2>
        </div>
        <div class="center">
          <el-form :model="ruleForm" ref="ruleForm" class="form">
            <el-form-item
              size="small"
              prop="tel"
              :rules="[{ required: true, message: '手机号不能为空' }]"
            >
              <el-input placeholder="请输入手机号" v-model="ruleForm.tel">
                <i slot="prefix" class="el-icon-user-solid"></i>
              </el-input>
            </el-form-item>
            <el-form-item
              size="small"
              prop="password"
              :rules="[{ required: true, message: '不能为空' }]"
            >
              <el-input
                placeholder="请输入密码"
                v-model="ruleForm.password"
                show-password
              >
                <i slot="prefix" class="iconfont icon-Passwordalt2"></i>
              </el-input>
            </el-form-item>
            <el-form-item
              v-if="!isLogin"
              size="small"
              :rules="[{ required: true, message: '手机号不能为空' }]"
            >
              <el-input placeholder="再次输入密码" v-model="pwd" show-password>
                <i slot="prefix" class="iconfont icon-Passwordalt2"></i>
              </el-input>
            </el-form-item>
            <el-form-item size="small">
              <el-button
                class="button"
                round
                type="primary"
                @click="submitForm"
                >{{ btnText }}</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="footer">
          <p v-if="isLogin">
            还没有账号?
            <span class="signupbtn" @click="isLogin = false">去注册</span>
          </p>
          <p v-if="!isLogin">
            已有账号?
            <span class="signupbtn" @click="isLogin = true">去登陆</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register, login } from "../api/common";
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        tel: "",
        password: "",
      },
      pwd: "",
      isLogin: true,
      btnText: "登陆",
    };
  },
  methods: {
    async submitForm() {
      if (this.isLogin) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            const res = await login(this.ruleForm);
            console.log(res.data[0].token);
            this.$store.commit("changIsSignIn", 1);
            sessionStorage.setItem("token", res.data[0].token);
            // 设置vuex里的token
            this.$store.commit("setToken", res.data[0].token);
            this.$router.push({ path: "/home" });
            return res;
          } else {
            return false;
          }
        });
      } else {
        await register(this.ruleForm);
      }
    },
  },
};
</script>
<style lang="scss" scope>
.background {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/background.jpg");
  background-position: center top;
  background-size: cover;

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 28rem;
    border-radius: 20px;
    background: url("../assets/background.jpg");
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;

    .box {
      top: 0;
      left: 0;
      width: 20rem;
      height: 28rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      .header {
        padding-top: 2rem;
        padding-bottom: 1rem;
      }
      .button {
        width: 18rem;
      }
      .footer {
        padding-bottom: 2rem;
        .signupbtn {
          color: #40f2ff;
        }
      }
    }
  }
}
</style>
