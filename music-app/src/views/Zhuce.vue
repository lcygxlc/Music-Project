<template>
  <div>
    <Navber> </Navber>
    <!-- 返回页面 -->
    <van-nav-bar left-text="" left-arrow @click-left="onClickLeft" />
    <!-- 大图 -->
    <div class="Denglu-datu">
      <van-image :src="require('../assets/music/logo.png')" />
    </div>
    <div class="Denglu-text">
      <!-- 注册界面 -->
      <div>
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '没有用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[
              { required: true, message: '没有密码' },
              { pattern: /^\d{6}$/, message: '密码格式错误！' },
            ]"
          />
          <van-field
            v-model="newpassword"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ validator, message: '两次密码输入不一致' }]"
          />
          <van-field
            v-model="phonenumber"
            :rules="[
              { required: true, message: '请填写您的手机号码！' },
              { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
            ]"
            type="tel"
            label="联系方式"
            placeholder="手机号码"
            clearable
          />
          <van-field
            v-model="email"
            label="邮箱"
            placeholder="邮箱"
            clearable
            :rules="[
              { required: true, message: '请填写您的邮箱！' },
              {
                pattern:
                  /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
                message: '邮箱格式错误！',
              },
            ]"
          />
          <!-- 登录页面返回 -->
          <div @click="reg">
            <div class="Denglu-zc">返回登录页</div>
          </div>
          <div style="margin: 16px">
            <van-button round block native-type="submit" color="rgb(7,193,96)"
              >注册</van-button
            >
          </div>
          <!-- 用户协议 -->
          <div class="Denglu-xieyi">
            <van-checkbox v-model="checked" label-disabled
              >同意《用户许可协议》</van-checkbox
            >
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import Tabber from "../components/Tabbar.vue";
import Navber from "../components/Navber.vue";
import axios from "axios";
export default {
  name: "Zhuce",
  data() {
    return {
      username: "",
      password: "",
      newpassword: "",
      phonenumber: "",
      email: "",
      value: "",
      checked: true,
    };
  },
  methods: {
    // 密码验证
    validator() {
      return this.password == this.newpassword;
    },
    // 页面转换
    reg() {
      this.$router.push("/Denglu");
    },
    // 返回
    onClickLeft() {
      this.$router.push({
        path: "/",
      });
    },
    onSubmit() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          res.data.forEach((item) => {
            if (item.username != this.username) {
              let data = {
                username: this.username,
                password: this.password,
                phonenumber: this.phonenumber,
                email: this.email,
              };
              axios
                .post("http://localhost:3000/users", data)
                .then((res) => {
                  console.log(res);
                  if (res.statusText == "Created") {
                    this.$router.push("/Denglu");
                  }
                  this.$toast.success({
                    message: "注册成功",
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
              throw Error();
            } else {
              this.$toast.fail({
                message: "该用户已存在",
              });
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Tabber,
    Navber,
  },
};
</script>

<style>
.background {
  width: 390px;
  height: 844px;
  background: url("");
}
.Denglu-datu {
  margin-top: 160px;
  width: 150px;
  height: 150px;
  margin-left: 120px;
}

.Denglu-text {
  width: 300px;
  height: 250px;
  text-align: center;
  margin-top: 60px;
  margin-left: 60px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
}

.Denglu-zc {
  margin-top: 10px;
}

.Denglu-xieyi {
  margin-top: 5px;
  margin-left: 35px;
}

.Denglu-sanfang {
  margin-top: 10px;
}
</style>