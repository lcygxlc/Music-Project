<template>
  <!-- 标题 -->
  <div style="border-bottom: 1px soild red">
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="4000"
      indicator-color="white"
      height="180"
      :touchable="true"
      :show-indicators="false"
    >
      <van-swipe-item>
        <img src="../assets/images/lunbo6.jpg" class="lunbo" />
      </van-swipe-item>
      <van-swipe-item
        ><img src="../assets/images/lunbo5.jpg" class="lunbo"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../assets/images/lunbo7.jpg" class="lunbo"
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../assets/images/lunbo8.jpg" class="lunbo"
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style scoped>
.lunbo {
  margin-top: 20px;
  padding-bottom: 20px;
  margin-left: 2%;
  height: 90%;
  width: 95%;
}
</style>