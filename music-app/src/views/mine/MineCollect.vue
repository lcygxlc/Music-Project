<template>
  <div>
    <!-- 顶部导航 -->
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
      <van-col span="8" class="Install-head-title">我的收藏</van-col>
      <van-col span="8"></van-col>
    </van-row>
    <!-- 歌曲搜索 -->
    <div class="sousuo">
      <van-search
        v-model="search"
        :show-action="true"
        :clearable="true"
        placeholder="请输入搜索关键词"
        @search="filterCourses()"
        @cancel="onCancel"
      >
      </van-search>
    </div>
    <!-- 搜索列表 -->
    <van-cell-group inset center>
      <van-cell
        center
        v-for="(item, index) in songList"
        :key="index"
        :label="item.singer"
        @click="goDetail(item.id)"
      >
        <template #title>
          <span class="custom-title">{{ item.name }}</span>
        </template>
      </van-cell>
    </van-cell-group>
    <div class="Song-dicen"></div>
  </div>
</template>

<script>
import Navber from "../../components/Navber.vue";
import axios from "axios";
export default {
  name: "MineCollect",
  data() {
    return {
      value: "",
      songList: [],
      search: "",
      song: {},
      isShow: true,
    };
  },
  mounted() {
    // console.log('触发');
    this.getallsong();
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取所有歌曲
    getallsong() {
      axios
        .get("http://localhost:3000/song?alreadyCollected=true")
        .then((res) => {
          // console.log(res);

          this.songList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 搜索
    filterCourses() {
      var search = this.search;
      this.songList = this.songList.filter(function (item) {
        return item.name.match(search);
      });
    },
    // 取消搜索
    onCancel() {
      this.reload(); // 刷新页面
    },
    // 跳转歌曲
    goDetail(id) {
      localStorage.setItem("songid", id);
      this.$router.push("/songs/Songdetails/" + id);
    },
  },
  components: {
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
</style>