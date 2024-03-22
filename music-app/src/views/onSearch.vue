<template>
  <div>
    <Navber> </Navber>
    <van-row class="onSearch-head">
      <!-- 返回上一页 -->
      <van-col span="2">
        <div @click="onClickLeft" class="onSearch-head-sousuo">
          <van-icon name="arrow-left" size="15" class="onSearch-fanhui">
          </van-icon>
        </div>
      </van-col>
      <!-- 歌曲搜索 -->
      <van-col span="21">
        <div class="Found-sousuo">
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
      </van-col>
      <van-col span="1"> </van-col>
    </van-row>
    <!-- 宫格 -->
    <van-grid :column-num="5" :gutter="10" class="onSearch-gongge">
      <van-grid-item
        icon="manager-o"
        text="歌手"
        class="onSearch-gongge-fenlei"
      />
      <van-grid-item icon="chart-trending-o" text="排行" />
      <van-grid-item icon="music-o" text="听歌识曲" />
      <van-grid-item icon="calendar-o" text="本周歌王" />
      <van-grid-item icon="hot-o" text="最多人听" />
    </van-grid>
    <!-- 搜索列表 -->
    <div class="onSearch-remen">热门歌曲推荐</div>
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
  </div>
</template>

<script>
import Navber from "../components/Navber.vue";
import axios from "axios";
export default {
  name: "onSearch",
  inject: ["reload"],
  data() {
    return {
      value: "",
      search: "",
      songList: [],
      isShow: true,
    };
  },
  mounted() {
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
        .get("http://localhost:3000/song")
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
.onSearch-head {
  margin-top: 8px;
}

.onSearch-head-sousuo {
  margin-top: 3px;
}

.onSearch-fanhui {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 5px;
}

.onSearch-gongge {
  margin-top: 10px;
}

::v-deep .van-grid-item__content:hover {
  background-color: gainsboro;
}

.onSearch-remen {
  margin-left: 6%;
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>