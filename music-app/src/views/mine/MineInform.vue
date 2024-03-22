<template>
  <div>
    <!-- 顶部导航 -->
    <Navber> </Navber>
    <div class="Inform-background">
      <!-- 页头 -->
      <van-row class="Inform-head">
        <van-col span="8"
          ><van-icon
            name="arrow-left"
            class="Inform-head-fanhui"
            @click="onClickLeft"
            size="20"
        /></van-col>
      </van-row>
    <van-empty style="margin-top:150px" description="还没有内容哦" />
  </div>
  </div>
</template>

<script>
import Navber from "../../components/Navber.vue";
export default {
  name: "Inform",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  components: {
    Navber,
  },
};
</script>

<style scoped>
.Inform-head-title {
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
}

.Inform-head-fanhui {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 5px;
}
</style>