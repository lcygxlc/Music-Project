<template>
  <div class="head">
    <Navber> </Navber>
    <div class="Songreview-background">
      <!-- 页头 -->
      <van-row class="Songreview-head">
        <van-col span="8"
          ><van-icon
            name="arrow-left"
            class="Songreview-head-fanhui"
            @click="onClickLeft"
            size="20"
        /></van-col>
        <van-col span="8" class="Songreview-head-title"
          >评论{{ song.favoriate }}</van-col
        >
        <van-col span="8"
          ><van-icon
            name="share-o"
            size="20"
            class="Songreview-head-titleleft" /><van-icon
            name="more-o"
            size="20"
            class="Songreview-head-titleright"
        /></van-col>
      </van-row>
      <!-- 歌曲 -->
      <div class="Songreview-song">
        <van-image
          round
          width="80"
          height="80"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          class="Songreview-song-img"
        />
        <div class="Songreview-song-name">{{ song.name }}</div>
        <div class="Songreview-song-singer">{{ song.singer }}</div>
        <div class="Songreview-song-listener">{{ song.listener }}人在听</div>
      </div>
      <!-- 评论区 -->
      <div class="Songreview-section">
        评论区 {{ song.singer }}
        <div
          v-for="(songreview, id) in songreview"
          :key="id"
          class="Songreview-section-div"
        >
          <van-row>
            <van-col span="4">
              <div class="Songreview-section-img"></div>
            </van-col>
            <van-col span="19">
              <div class="Songreview-section-name">
                {{ songreview.username }}
              </div>
              <!-- 评论时间 -->
              <!-- <van-count-down :time="songreview.Date" /> -->
              <div class="Songreview-section-time">{{ songreview.Date }}</div>
              <div class="Songreview-section-desc">
                {{ songreview.songdesc }}
              </div>
              <div class="Songreview-section-reply"></div>
              <!-- 点赞 -->
              <van-row>
                <van-col span="8"></van-col>
                <van-col span="8"></van-col>
                <van-col span="8">
                  <div class="Songreview-section-favoriate">
                    <van-icon
                      name="thumb-circle-o"
                      size="20"
                      @click="praise"
                      style="font-size: 15px"
                    >
                      {{ songreview.favoriate }}
                    </van-icon>
                  </div>
                </van-col>
              </van-row>
            </van-col>
            <van-col span="1"></van-col>
          </van-row>
        </div>
        <!-- 占位 -->
        <div class="Songreview-zhanwei"></div>
        <!-- 个人评论 -->
        <div class="Songreview-review">
          <van-popup
            v-model="show"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '12%' }"
          >
            <!-- 图片 -->
            <van-icon
              name="photo-o"
              size="28"
              class="Songreview-review-review-img"
            />
            <!-- 表情 -->
            <van-icon
              name="smile-o"
              size="28"
              class="Songreview-review-review-img"
            />
            <!-- 弹出评论区 -->
            <van-row>
              <van-col span="19"
                ><van-field
                  v-model="songdesc"
                  rows="1"
                  autosize
                  type="textarea"
                  placeholder="此刻的你想说些什么"
                  show-word-limit
                  class="Songreview-review-review-function"
                />
              </van-col>
              <van-col span="3" class="Songreview-review-review"
                ><van-button
                  type="primary"
                  color="linear-gradient(to right, #84fab0, #8fd3f4)"
                  class="Songreview-tuijianrenxinxi-fasong"
                  @click="send"
                  >发送</van-button
                ></van-col
              >
              <van-col span="2"></van-col>
            </van-row>
          </van-popup>

          <!-- 评论区 -->
          <van-tabbar v-model="active">
            <van-field
              v-model="songdesc"
              rows="1"
              label="评论"
              placeholder="此刻的你想说些什么"
              @click="showPopup"
            />
          </van-tabbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navber from "../../components/Navber.vue";
import axios from "axios";
export default {
  name: "Songreview",
  // 导入App.vue中的刷新方法
  inject: ["reload"],
  data() {
    return {
      active: 0,
      song: {},
      id: "",
      songreview: [],
      songdesc: "",
      username: "",
      show: false,
      time: 30 * 60 * 60 * 1000,
    };
  },
  mounted() {
    // 歌曲数据
    var id = localStorage.getItem("songid");
    axios
      .get("http://localhost:3000/song/" + id)
      .then((res) => {
        this.song = res.data;
        this.id = res.data.id;
      })
      .catch((err) => {
        console.log(err);
      });
    // 歌曲评论数据
    axios
      .get("http://localhost:3000/songreview?songid=" + id)
      .then((res) => {
        this.songreview = res.data;
        console.log(res);
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

    // 就这块，出大事了

    // 点赞
    praise() {
      // var id = localStorage.getItem("songid");
      this.songreview.favoriate += 1;
      let data = {
        Date: this.songreview.Date,
        songdesc: this.songreview.songdesc,
        username: this.songreview.username,
        songid: this.songreview.songid,
        userid: this.songreview.userid,
        favoriate: this.songreview.favoriate,
        id: this.songreview.id,
      };
      // 2.把改完的数据存到db.json中
      axios
        .put("http://localhost:3000/songreview?songid=" + id, data)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    },
    // 弹出框
    showPopup() {
      this.show = true;
    },
    // 发表评论
    send() {
      // 把所属歌曲的id传进去
      let songid = localStorage.getItem("songid");
      let userid = localStorage.getItem("userid");
      let username = localStorage.getItem("username");
      if (userid == "") {
        this.$toast.fail({
          message: "未登录请先登录",
        });
        this.$router.push("/Denglu");
      } else {
        // 把取出的songid转换成整数，再存入数据
        // let userid = parseInt(this.userid);
        let data = {
          Date: new Date(),
          songdesc: this.songdesc,
          username: username,
          // 把所属歌曲的id传进去
          songid: songid,
          songname: this.song.name,
          userid: userid,
          favoriate: 0,
        };
        axios
          .post("http://localhost:3000/songreview", data)
          .then((res) => {
            console.log(res);
            // 刷新界面
            this.$toast.success({
                message: "评论成功！",
              });
            this.reload(); // 需要刷新页面

          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //
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
.Songreview-background {
  margin: 0 auto;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 20px;
  width: 96%;
  height: 93vh;
  background-color: white;
}

.Songreview-head-title {
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
}

.Songreview-head-fanhui {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 5px;
}

.Songreview-head-titleleft {
  margin-top: 15px;
  margin-left: 60px;
}

.Songreview-head-titleright {
  margin-top: 15px;
  margin-left: 15px;
}

.Songreview-song {
  margin: 0 auto;
  margin-top: 10px;
  height: 100px;
  width: 94%;
  background-color: #ebebeb;
  border-radius: 20px;
}

.Songreview-song-img {
  margin-top: 10px;
  margin-left: 10px;
  float: left;
}

.Songreview-song-name {
  padding-top: 25px;
  padding-left: 110px;
  padding-bottom: 0px;
  width: 40%;
}

.Songreview-song-singer {
  padding-top: 5px;
  padding-left: 110px;
  font-size: 12px;
  color: grey;
  width: 20%;
}

.Songreview-song-listener {
  float: right;
  margin-right: 10px;
  font-size: 12px;
  color: grey;
}

.Songreview-section {
  font-size: 16px;
  margin: 0 auto;
  margin-top: 15px;
  height: 100vh;
  width: 94%;
}

.Songreview-section-div {
  margin-top: 15px;
}

.Songreview-review-review-img {
  margin: 0 auto;
  padding-top: 10px;
  padding-left: 15px;
}

.Songreview-review-review-function {
  margin-top: 0px;
  padding-top: 20px;
}

.Songreview-tuijianrenxinxi-fasong {
  width: 75px;
  height: 30px;
  text-align: center;
  font-size: 13px;
  margin-top: 20px;
}

.Songreview-zhanwei {
  height: 60px;
  margin: 0 auto;
}
</style>