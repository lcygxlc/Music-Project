<template>
  <div>
    <Navber> </Navber>
    <!-- 歌曲搜索 -->
    <div class="Found-sousuo" @click="onClickLeft">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词">
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
    </div>
    <!-- 歌曲分类 -->
    <van-tabs v-model="active">
      <!-- 推荐页内容 -->
      <van-tab title="推荐">
        <!-- 顶部分类推荐 -->
        <div class="Found-fenlei-tuijian">
          <div class="Found-fenlei-tuijian-A">
            <span>#百万收藏</span><br />
            <span>6020人参加</span>
          </div>
          <div class="Found-fenlei-tuijian-A">
            <span>#一曲古风万人吟</span><br />
            <span>1011人参加</span>
          </div>
          <div class="Found-fenlei-tuijian-A">
            <span>#分享你的歌单</span><br />
            <span>19163人参加</span>
          </div>
        </div>
        <!-- 久忆音乐 -->
        <div class="Found-jiuyiyinyue">
          <van-row>
            <van-col span="2"></van-col>
            <van-col span="8">──────────</van-col>
            <van-col span="4">久忆音乐</van-col>
            <van-col span="8">──────────</van-col>
            <van-col span="2"></van-col>
          </van-row>
        </div>
        <!-- 歌单 -->
        <div class="Found-liebiao" v-for="(Song, id) in Song" :key="id">
          <div class="Found-liebiao-gedan">
            <div>
              <img
                :src="Song.imgurl"
                alt="加载失败"
                class="Found-liebiao-gedan-img"
              />
            </div>
            <div class="Found-liebiao-gedan-name">{{ Song.name }}</div>
            <div class="Found-liebiao-gedan-desc">
              <van-icon name="like-o" size="" />{{ Song.favoriate }}
            </div>
          </div>
        </div>
        <!-- 占位行 -->
        <div
          style="
            background-color: whitesmoke;
            height: 90px;
            margin-top: 8%;
            margin-left: 40%;
            float: left;
            text-align: center;
          "
        >
          没有更多了
        </div>
      </van-tab>
      <van-tab title="粤语">内容 2</van-tab>
      <van-tab title="古风">内容 3</van-tab>
      <van-tab title="动漫">内容 4</van-tab>
      <van-tab title="二次元">内容 4</van-tab>
      <van-tab
        ><template #title> <van-icon name="arrow-down" size="20" /></template
      ></van-tab>
    </van-tabs>
    <Tabber></Tabber>
  </div>
</template>

<script>
import Tabber from "../components/Tabbar.vue";
import Navber from "../components/Navber.vue";
import axios from "axios";
export default {
  name: "Found",
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "onSearch",
      });
    },
  },
  components: {
    Tabber,
    Navber,
  },
  data() {
    return {
      value: "",
      active: 0,
      Song: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/Song")
      .then((res) => {
        this.Song = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.Found-sousuo {
  margin-top: 5px;
}

.Found-fenlei-tuijian {
  margin-top: 15px;
  height: 80px;
}

.Found-fenlei-tuijian-A {
  margin-left: 5px;
  width: 130px;
  height: 60px;
  border: 2px solid grey;
  border-radius: 10px;
  background-size: 100% 90%;
  background: url("../assets/images/lunbo2.png");
  padding-top: 20px;
  text-align: center;
  color: rgb(231, 231, 231);
  float: left;
}

.Found-jiuyiyinyue {
  color: rgb(131, 131, 131);
  margin-top: 20px;
  text-align: center;
}

.Found-liebiao {
  width: 100%;
}

.Found-liebiao-gedan {
  float: left;
  margin-top: 20px;
  width: 46%;
  margin-left: 11px;
  height: 260px;
  color: black;
}

.Found-liebiao-gedan:hover {
  background-color: rgb(223, 223, 223);
}

.Found-liebiao-gedan-img {
  width: 100%;
  height: 75%;
  background-color: aqua;
}

.Found-liebiao-gedan-name {
  margin-top: 5%;
  margin-left: 5%;
}

.Found-liebiao-gedan-desc {
  margin-top: 3%;
  margin-left: 5%;
}
</style>>