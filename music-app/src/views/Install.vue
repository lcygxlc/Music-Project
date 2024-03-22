<template>
  <div class="Install-background">
    <Navber> </Navber>
    <!-- 返回上一页 -->
    <van-row class="Install-head">
      <van-col span="8"
        ><van-icon
          name="arrow-left"
          class="Install-fanhui"
          @click="onClickLeft"
          size="20"
      /></van-col>
      <van-col span="8" class="Install-head-title">设置</van-col>
      <van-col span="8"></van-col>
    </van-row>
    <!-- 占位行 -->
    <div class="Install-zhanweihang"></div>
    <!-- 设置上部 -->
    <van-cell title="个人资料" is-link to="/mine/Minedata" />
    <van-cell title="账号管理" is-link />
    <van-cell title="隐私设置" is-link />
    <van-cell title="屏蔽设置" is-link />
    <van-cell title="账号安全" is-link to="/install/security" />
    <!-- 占位行 -->
    <div class="Install-zhanweihang"></div>
    <!-- 设置中部 -->
    <van-cell title="偏好设置" is-link />
    <van-cell title="打赏设置" is-link />
    <van-cell title="夜间模式" is-link />
    <van-cell title="合集更新" is-link />
    <!-- 占位行 -->
    <div class="Install-zhanweihang"></div>
    <!-- 关于久忆音乐 -->
    <van-cell title="关于久忆音乐" is-link />
    <!-- 占位行 -->
    <div class="Install-zhanweihang"></div>
    <!-- 清理缓存 -->
    <van-cell title="清理缓存" is-link value="69M" />
    <!-- 占位行 -->
    <div class="Install-zhanweihang"></div>
    <!-- 退出登录 -->
    <van-cell title="退出登录" is-link value="" @click="logout" />
    <!-- 占位行 -->
    <div class="Install-zhanweihang"></div>
  </div>
</template>

<script>
import Navber from "../components/Navber.vue";
export default {
  name: "Install",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    logout() {
      localStorage.setItem("userid", "");
      localStorage.setItem("username", "");
      this.$router.push({
        path: "/Denglu",
      });
    },
  },
  components: {
    Navber,
  },
};
</script>

<style scoped>
.Install-background {
  background-color: whitesmoke;
  height: 100vh;
}

.Install-fanhui {
  margin-top: 10px;
  margin-left: 5px;
}

.Install-head {
  margin: 0 auto;
  text-align: left;
  background-color: white;
}

.Install-head-title {
  margin-top: 4px;
  margin-bottom: 7px;
  font-size: 20px;
  text-align: center;
}

.Install-zhanweihang {
  background-color: whitesmoke;
  height: 20px;
}
</style>