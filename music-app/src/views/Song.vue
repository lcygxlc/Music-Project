<template>
  <div>
    <!-- 顶部导航 -->
    <Navber> </Navber>
    <!-- 返回上一页 -->
    <div @click="onClickLeft">
      <van-icon name="arrow-left" size="20" class="Song-fanhui"> </van-icon>
    </div>
    <!-- 歌单详情 -->
    <div class="Song-xiangqin">
      <van-card
        desc="带你掌握时下新潮流，来听这些百万播放的热歌。"
        title="抖音百万播放|掌握时下新潮流"
        thumb="https://qpic.y.qq.com/music_cover/ibvcgAia1fwfRda3icX3kMtpr9UjWFJ1SNbQEBj0uF5f0OW4zzs0DzTFQ/600?n=1"
      >
        <template #tags>
          <van-tag plain type="danger" color="rgb(79, 183, 252)">国语</van-tag>
          <van-tag plain type="danger" color="rgb(79, 183, 252)">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini"> <van-icon name="like-o" />收藏</van-button>
          <van-button size="mini">
            <van-icon name="comment-o" />评论</van-button
          >
          <van-button size="mini"><van-icon name="share-o" />分享</van-button>
        </template>
      </van-card>
    </div>
    <!-- 歌曲搜索 -->
    <div class="sousuo">
      <van-search placeholder="请输入搜索关键词" />
    </div>
    <!-- 歌曲列表 -->
    <div class="Song-liebiao">
      <div class="Song-liebiao-jia">
        <van-cell-group inset center>
          <van-cell icon="play-circle-o" title="全部播放" size="large">
            <template #right-icon>
              <van-icon name="down" class="search-icon" />
              <van-icon name="descending" class="search-icon" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
      <!-- 歌曲 -->
      <div v-for="(song, index) in song" :key="index">
        <van-cell-group inset center>
          <van-cell
            :title="song.name"
            :label="song.singer"
            size="large"
            @click="goDetail(song.id)"
          >
            <template #right-icon>
              <van-icon name="play-circle-o" class="search-icon" />
              <van-icon name="ellipsis" class="search-icon" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>
    <!-- 正在播放 -->
    <div class="Song-bofang">
      <div class="Song-bofang-yi">
        <div class="Song-bofang-bin">
          <van-loading
            size="24px"
            type="spinner"
            color="rgb(79, 183, 252)"
          ></van-loading>
        </div>
        <div class="Song-bofang-ding">
          <div class="Song-bofang-mao">久忆音乐，让生活充满音乐</div>
          <div class="Song-bofang-jia">
            <van-icon name="bars" size="25" />
          </div>
          <div class="Song-bofang-jia">
            <van-icon name="play-circle-o" size="25" />
          </div>
        </div>
        <div class="Mine-bofang-ji"></div>
      </div>
    </div>
    <div class="Song-dicen"></div>
  </div>
</template>

<script>
import Tabber from "../components/Tabbar.vue";
import Navber from "../components/Navber.vue";
import axios from "axios";
export default {
  name: "Song",
  data() {
    return {
      songList: [],
      search: "",
      song: {},
    };
  },
  mounted() {
    // console.log('触发');
    this.getallsong();
    axios
      .get("http://localhost:3000/Song")
      .then((res) => {
        this.song = res.data;
        console.log(this.song);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/",
      });
    },
    // 获取所有歌曲
    getallsong() {
      axios
        .get("http://localhost:3000/song")
        .then((res) => {
          console.log(res);
          if (res.statusText == "OK") {
            this.songList = res.data;
            console.log("A");
          } else {
            console.log("B");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 歌曲跳转
    goDetail(id) {
      localStorage.setItem("songid", id);
      this.$router.push("/songs/Songdetails/" + id);
    },
  },
  components: {
    Tabber,
    Navber,
  },
};
</script>

<style scoped>
.Song-fanhui {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 5px;
}

.Song-xiangqin {
  margin-top: 5px;
}

.Song-liebiao {
  margin-top: 5px;
}

.Song-liebiao-jia {
  margin-bottom: 10px;
  margin-top: 10px;
}

.search-icon {
  font-size: 25px;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 10px;
  line-height: 15px;
}

.Song-bofang {
  margin-left: 40px;
  position: fixed;
  bottom: 10px;
}

.Song-bofang-jia {
  margin-left: 20px;
  padding-right: 5px;
  float: right;
}
.Song-bofang-yi {
  font-size: small;
  text-align: left;
  height: 35px;
  padding-top: 5px;
}

.Song-bofang-bin {
  width: 32px;
  height: 31px;
  margin-top: 9px;
  padding-top: 8px;
  padding-left: 8px;
  float: left;
  border-top-left-radius: 30%;
  border-bottom-left-radius: 30%;
  background-color: rgb(216, 208, 208);
  opacity: 80%;
}

.Song-bofang-ding {
  float: left;
  padding-top: 8px;
  padding-left: 18px;
  padding-bottom: 6px;
  margin-top: 9px;
  background-color: rgb(216, 208, 208);
  opacity: 80%;
}

.Song-bofang-mao {
  float: left;
  padding-top: 3px;
}

.Song-bofang-ji {
  width: 30px;
  height: 39px;
  background-color: rgb(216, 208, 208);
  opacity: 90%;
  float: left;
  margin-top: 9px;
  border-top-right-radius: 40%;
  border-bottom-right-radius: 40%;
}

.Song-dicen {
  height: 30px;
}
</style>