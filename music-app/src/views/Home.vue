<template>
  <div>
    <Navber> </Navber>
    <!-- 占位行 -->
    <div style="height: 20px"></div>
    <!-- 页面内容 -->
    <van-tabs style="">
      <!-- 关注分栏 -->
      <van-tab title="关注" style="">
        <!-- 轮播图 -->
        <Carousel> </Carousel>
        <!-- 推荐用户 -->
        <div class="Home-tuijian">
          <span>推些有趣的人给你<span class="bank20"></span>></span>
        </div>
        <!-- 占位行 -->
        <div
          style="background-color: whitesmoke; height: 10px; margin-top: 15px"
        ></div>
        <!-- 推荐人 -->
        <div class="Home-tuijianren">
          <p>
            来自你的好友<span style="color: #57bbbd"
              >&nbsp;&nbsp;凉城&nbsp;&nbsp;</span
            >推荐
          </p>
        </div>
        <!-- 占位行 -->
        <div
          style="background-color: whitesmoke; height: 2px; margin-top: 15px"
        ></div>
        <!-- 推荐人信息 -->
        <van-row type="flex" gutter="20" class="Home-tuijianrenxinxi">
          <van-col span="3"
            ><van-image
              round
              width="45"
              height="45"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
          /></van-col>
          <van-col span="12" class="Home-tuijianrenxinxi-mingzi"
            >洛笙箫12138</van-col
          >
          <van-col span="6"
            ><van-button
              type="primary"
              color="linear-gradient(to right, #84fab0, #8fd3f4)"
              class="Home-tuijianrenxinxi-guanzhu"
              >已关注</van-button
            ></van-col
          >
          <van-col span="5" class="Home-tuijianrenxinxi-fenxiang"
            ><van-icon name="more-o" size="25" color="black"
          /></van-col>
        </van-row>
        <!-- 推荐歌单 -->
        <div @click="onClickLeft" class="Home-tuijiangedan">
          <img v-for="img in imageList" v-lazy="img" :key="img" />
        </div>
      </van-tab>
      <!-- 订阅分栏 -->
      <van-tab title="订阅"> </van-tab>
      <!-- 推荐分栏 -->
      <van-tab title="推荐"> </van-tab>
      <!-- 占位 -->
      <van-tab disabled> </van-tab><van-tab disabled> </van-tab
      ><van-tab disabled> </van-tab> <van-tab disabled> </van-tab
      ><van-tab disabled> </van-tab><van-tab disabled> </van-tab>
      <van-tab disabled> </van-tab>
      <!-- 推荐分栏 -->
      <van-tab
        ><template #title> <van-icon name="friends-o" size="20" /></template
      ></van-tab>
    </van-tabs>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar.vue";
import Navber from "../components/Navber.vue";
import Carousel from "../components/Carousel.vue";
export default {
  name: "Home",
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/Song",
      });
    },
  },
  data() {
    return {
      imageList: [
        "https://qpic.y.qq.com/music_cover/ibvcgAia1fwfRda3icX3kMtpr9UjWFJ1SNbQEBj0uF5f0OW4zzs0DzTFQ/600?n=1",
      ],
    };
  },
  components: {
    Tabbar,
    Navber,
    Carousel,
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  margin-top: 10px;
  color: white;
  font-size: 20px;
  line-height: 0px;
  text-align: center;
  background-color: white;
}

.Home-tuijian {
  margin-left: 2%;
  margin-top: 10px;
}

.Home-tuijianren {
  margin-top: 15px;
  margin-left: 30px;
  color: #9e9e9e;
}

.Home-tuijianrenxinxi {
  margin-top: 5px;
  margin-left: 30px;
}

.Home-tuijianrenxinxi-mingzi {
  margin-top: 10px;
  width: 160px;
  color: black;
}

.Home-tuijianrenxinxi-mingzi:hover {
  color: #ea6c46;
}

.Home-tuijianrenxinxi-guanzhu {
  width: 75px;
  height: 30px;
  text-align: center;
  font-size: 13px;
  margin-top: 7px;
  margin-left: 0px;
}

.Home-tuijianrenxinxi-fenxiang {
  margin-top: 10px;
  margin-left: 5px;
  color: rgb(57, 210, 43);
}

.Home-tuijiangedan {
  width: 410px;
  height: 410px;
  display: flex;
  margin: 0 auto;
  margin-top: 5px;
  justify-content: center;
}
</style>

<style scoped>
p {
  margin: 0px;
}

.bank20 {
  padding-left: 10px;
}
</style>

