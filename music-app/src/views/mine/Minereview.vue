<template>
  <div class="head">
    <Navber> </Navber>
    <div class="Minereview-background">
      <!-- 页头 -->
      <van-row class="Minereview-head">
        <van-col span="8"
          ><van-icon
            name="arrow-left"
            class="Minereview-head-fanhui"
            @click="onClickLeft"
            size="20"
        /></van-col>
      </van-row>
      <!-- 评论区 -->
      <div class="Minereview-section">
        历史评论
        <div
          v-for="(songreview, id) in songreview"
          :key="id"
          class="Minereview-section-div"
        >
          <van-row>
            <van-col span="4">
              <div class="Minereview-section-img"></div>
            </van-col>
            <van-col span="19">
              <div class="Minereview-section-name">
                {{ songreview.songname }}
              </div>
              <div class="Minereview-section-time">{{ songreview.Date }}</div>
              <div class="Minereview-section-desc">
                {{ songreview.songdesc }}
              </div>
              <div class="Minereview-section-reply"></div>
            </van-col>
            <van-col span="1"></van-col>
            <!-- 点赞 -->
            <van-row>
              <van-col span="10"></van-col>
              <van-col span="10"></van-col>
              <van-col span="4">
                <van-cell @click="showPopup">
                  <div class="Minereview-section-favoriate">
                    <van-icon name="ellipsis" size="20" style="font-size: 15px">
                    </van-icon>
                  </div>
                </van-cell>
              </van-col>
            </van-row>
          </van-row>
        </div>
      </div>
    </div>
    <!-- 弹出框内容 -->
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '15%' }"
      ><div class="Minereview-tanchuang">
        <!-- 删除 -->
        <van-icon
          name="close"
          size="40"
          class="Minereview-tanchuang-img"
          @click="handleDelete(id)"
        />
        <!-- 分享 -->
        <van-icon name="share-o" size="40" class="Minereview-tanchuang-img" />
        <!-- 复制 -->
        <van-icon name="coupon-o" size="40" class="Minereview-tanchuang-img" />
      </div>
      <div>
        <div class="Minereview-tanchuang-text-delete" @click="handleDelete(id)">
          删除
        </div>
        <div class="Minereview-tanchuang-text-share">分享</div>
        <div class="Minereview-tanchuang-text-copy">复制</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Navber from "../../components/Navber.vue";
import axios from "axios";
export default {
  name: "Minereview",
  // 导入App.vue中的刷新方法
  inject: ["reload"],
  data() {
    return {
      active: 0,
      song: {},
      id: "",
      songreview: [],
      username: "",
      show: false,
    };
  },
  mounted() {
    // 歌曲数据
    axios
      .get("http://localhost:3000/song/")
      .then((res) => {
        this.song = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    // 歌曲评论数据
    axios
      .get("http://localhost:3000/songreview")
      .then((res) => {
        this.songreview = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    // 删除
    //row获取到点击事件传来的参数
    handleDelete() {
      axios
        .delete("http://localhost:3000/songreview/"+id)
        .then(res => {
          console.log(300);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Navber,
  },
};
</script>

<style scoped>
.head {
  background-color: whitesmoke;
}
.Minereview-background {
  margin: 0 auto;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 20px;
  width: 96%;
  height: 93vh;
  background-color: white;
}

.Minereview-head-title {
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
}

.Minereview-head-fanhui {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 5px;
}

.Minereview-section {
  font-size: 16px;
  margin: 0 auto;
  margin-top: 15px;
  height: 100vh;
  width: 94%;
}

.Minereview-section-div {
  margin-top: 15px;
}

.Minereview-tanchuang {
  margin-top: 40px;
}

.Minereview-tanchuang-img {
  margin-left: 40px;
}

.Minereview-tanchuang-text-delete {
  margin-top: 5px;
  margin-left: 44px;
  float: left;
}

.Minereview-tanchuang-text-share {
  margin-top: 5px;
  margin-left: 46px;
  float: left;
}

.Minereview-tanchuang-text-copy {
  margin-top: 5px;
  margin-left: 50px;
  float: left;
}
</style>