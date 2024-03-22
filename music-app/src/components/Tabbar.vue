<template>
  <!-- 底部导航 -->
  <van-tabbar v-model="active" active-color="grey" inactive-color="#000" route>
    <van-tabbar-item icon="service-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="guide-o" to="Found">发现</van-tabbar-item>
    <van-tabbar-item to="/">
      <template><van-icon name="play-circle" size="40" color="#57BBBD"/></template>
    </van-tabbar-item>
    <van-tabbar-item icon="smile-comment-o" to="Community">社区</van-tabbar-item>
    <van-tabbar-item icon="contact" to="Mine" badge="9">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
.php {
  text-align: center;
}
</style>