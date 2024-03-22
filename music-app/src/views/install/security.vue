<template>
  <div class="security-background">
    <Navber> </Navber>
    <!-- 返回上一页 -->
    <van-row class="security-head">
      <van-col span="8"
        ><van-icon
          name="arrow-left"
          class="security-fanhui"
          @click="onClickLeft"
          size="20"
      /></van-col>
      <van-col span="8" class="security-head-title">账号安全</van-col>
      <van-col span="8"></van-col>
    </van-row>
    <!-- 占位行 -->
    <div class="security-zhanweihang"></div>
    <!-- 占位行 -->
    <div class="security-zhanweihang"></div>
    <!-- 占位行 -->
    <div class="security-zhanweihang"></div>
    <van-loading size="90px" vertical color="#0094ff" text-color="black"
      >风险检测中...</van-loading
    >
    <!-- 占位行 -->
    <div class="security-zhanweihang"></div>
    <!-- 占位行 -->
    <div class="security-zhanweihang"></div>
    <!-- 占位行 -->
    <div class="security-zhanweihang"></div>
    <!-- 账号安全 -->
    <van-cell title="密码修改" is-link to="changepassword"/>
    <van-cell title="人脸识别" is-link value="已启用" />
    <van-cell title="解锁设置" is-link value="未设置" />
    <van-cell title="账号注销" is-link />
    <!-- 占位行 -->
    <div class="security-zhanweihang"></div>
    <!-- 久忆安全中心 -->
    <van-cell title="久忆安全中心" is-link />
    <!-- 占位行 -->
    <div class="security-zhanweihang"></div>
  </div>
</template>

<script>
import Navber from "../../components/Navber.vue";
export default {
  name: "security",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    logout() {
      localStorage.setItem("userid", "");
      this.$router.push({
        path: "Denglu",
      });
    },
  },
  components: {
    Navber,
  },
};
</script>

<style scoped>
.security-background {
  background-color: whitesmoke;
  height: 100vh;
}

.security-fanhui {
  margin-top: 10px;
  margin-left: 5px;
}

.security-head {
  margin: 0 auto;
  text-align: left;
  background-color: white;
}

.security-head-title {
  margin-top: 4px;
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  background-color: white;
}

.security-zhanweihang {
  background-color: whitesmoke;
  height: 20px;
}
</style>