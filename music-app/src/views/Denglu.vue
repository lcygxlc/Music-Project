<template>
  <div>
    <Navber> </Navber>
    <!-- 返回页面 -->
    <van-nav-bar left-text="" left-arrow @click-left="onClickLeft" />
    <!-- 登录界面 -->
    <div class="Denglu-datu">
      <!-- logo -->
      <van-image :src="require('../assets/music/logo.png')" />
    </div>
    <div class="Denglu-text">
      <!-- 界面 -->
      <div>
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '填写密码' }]"
          />
          <div @click="reg">
            <div class="Denglu-zc">若没有此账户，请点击注册</div>
          </div>
          <div style="margin: 16px">
            <van-button
              round
              block
              type="info"
              native-type="submit"
              color="rgb(7,193,96)"
              >登录</van-button
            >
            <!-- 用户协议 -->
            <div class="Denglu-xieyi">
              <van-checkbox v-model="checked" label-disabled>
                同意《用户许可协议》
              </van-checkbox>
            </div>
            <!-- 第三方登录 -->
            <div class="Denglu-sanfang">
              <van-grid :column-num="3" gutter="0">
                <van-grid-item icon="star" text="QQ" />
                <van-grid-item icon="star" text="微信" />
                <van-grid-item icon="star" text="网易云" />
              </van-grid>
            </div>
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
  name: "Denglu",
  data() {
    return {
      username: "",
      password: "",
      checked: true,
    };
  },
  methods: {
    reg() {
      this.$router.push({
        path: "/Zhuce",
      });
    },
    onClickLeft() {
      this.$router.push({
        path: "/",
      });
    },
    onSubmit() {
      axios
        .get("http://localhost:3000/users?username=" + this.username)
        .then((res) => {
          console.log(res.data[0].username);
          console.log(this.username);
          res.data.forEach((item) => {
            if (
              item.username == this.username &&
              item.password == this.password
            ) {
              localStorage.setItem("userid", res.data[0].id);
              localStorage.setItem("username", this.username);
              this.$router.push({
                path: "/",
              });
              this.$toast.success({
                message: "欢迎使用",
              });
              throw Error();
            } else if (
              item.username == this.username &&
              item.password != this.password
            ) {
              this.$toast.fail({
                message: "密码错误",
              });
              throw Error();
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

<style scoped>
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