<template>
  <div class="head">
    <Navber> </Navber>
    <div class="songdetails-background">
      <!-- 返回上一页 -->
      <div class="songdetails-neirong">
        <van-row>
          <van-col span="2"
            ><div @click="onClickLeft" class="songdetails-fanhui">
              <van-icon name="arrow-down" size="20" /></div
          ></van-col>
          <van-col span="20"
            ><van-tabs v-model="active" swipeable>
              <van-tab title="" disabled></van-tab>
              <van-tab title="推荐">内容</van-tab>
              <van-tab title="歌曲">
                <!-- 歌曲图片 -->
                <div>
                  <img
                    :src="song.imgurl"
                    width="80%"
                    class="songdetails-neirong-img"
                  />
                </div>
                <!-- 名人词 -->
                <div>
                  <div class="songdetails-neirong-name">{{ song.name }}</div>
                  <div class="songdetails-neirong-singer">
                    {{ song.singer }}
                  </div>
                  <div class="songdetails-neirong-lyric">
                    词:{{ song.desc }}
                  </div>
                </div>
                <!-- 功能区上部 -->
                <van-grid
                  :column-num="8"
                  class="songdetails-neirong-function-up"
                >
                  <!-- 占位 -->
                  <van-grid-item />
                  <!-- 收藏 -->
                  <van-grid-item
                    icon="like"
                    v-if="alreadyCollected"
                    @click="collected"
                  />
                  <van-grid-item icon="like-o" v-else @click="nocollected" />
                  <!-- 点赞 -->
                  <van-grid-item icon="good-job-o" v-on:click.once="praise" />
                  <van-grid-item icon="todo-list-o" />
                  <van-grid-item icon="share-o" />
                  <van-grid-item icon="chat-o" @click="goDetail(song.id)" />
                  <van-grid-item icon="down" />
                  <!-- 占位 -->
                  <van-grid-item />
                </van-grid>
                <!-- 进度条 -->
                <div class="songdetails-neirong-jindu">
                  <van-progress color="#57BBBD" :percentage="61" />
                  <van-row style="margin-top: 5px">
                    <van-col span="4">02:50</van-col>
                    <van-col span="16"></van-col>
                    <van-col span="4">04:12</van-col>
                  </van-row>
                </div>
                <!-- 功能区下部 -->
                <van-grid
                  :column-num="5"
                  class="songdetails-neirong-function-down"
                >
                  <van-grid-item
                    ><van-icon name="exchange" size="25"
                  /></van-grid-item>
                  <van-grid-item
                    ><van-icon name="arrow-left" size="25"
                  /></van-grid-item>
                  <van-grid-item
                    ><van-icon name="play-circle-o" size="45"
                  /></van-grid-item>
                  <van-grid-item
                    ><van-icon name="arrow" size="25"
                  /></van-grid-item>
                  <van-grid-item
                    ><van-icon name="replay" size="25"
                  /></van-grid-item>
                </van-grid>
              </van-tab>
              <van-tab title="歌词">内容</van-tab>
              <van-tab title="" disabled></van-tab> </van-tabs
          ></van-col>
          <!-- 占位  -->
          <van-col span="2"></van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import Navber from "../../components/Navber.vue";
import axios from "axios";
export default {
  name: "Songdetails",
  data() {
    return {
      active: 2,
      alreadyCollected: false,
      song: {},
      id: "",
    };
  },
  // 歌曲数据
  mounted() {
    var id = localStorage.getItem("songid");
    axios
      .get("http://localhost:3000/song/" + id)
      .then((res) => {
        this.song = res.data;
        this.alreadyCollected = res.data.alreadyCollected;
        this.id = res.data.id;
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
    // 收藏
    nocollected() {
      var id = localStorage.getItem("songid");
      this.alreadyCollected = true;
      let data = {
        list: this.song.list,
        name: this.song.name,
        singer: this.song.singer,
        desc: this.song.desc,
        quality: this.song.quality,
        imgurl: this.song.imgurl,
        favoriate: this.song.favoriate,
        id: this.song.id,
        alreadyCollected: true,
      };
      let userid = localStorage.getItem("userid");
      // let data2 = {
      //   list: this.song.list,
      //   name: this.song.name,
      //   singer: this.song.singer,
      //   desc: this.song.desc,
      //   quality: this.song.quality,
      //   imgurl: this.song.imgurl,
      //   favoriate: this.song.favoriate,
      //   id: this.song.id,
      //   alreadyCollected: true,
      //   userid: userid,
      // };
      if (userid == "") {
        this.$toast.fail({
          message: "未登录请先登录",
        });
        this.$router.push("/Denglu");
      } else {
        axios
          .put("http://localhost:3000/song/" + id, data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        this.$toast.success({
          message: "收藏成功",
        });
        // axios
        //   .post("http://localhost:3000/userCollection/", data2)
        //   .then((res) => {
        //     console.log("****" + res);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        // this.$toast.success({
        //   message: "收藏成功",
        // });
      }
    },
    collected() {
      var id = localStorage.getItem("songid");
      this.alreadyCollected = false;
      let data = {
        list: this.song.list,
        name: this.song.name,
        singer: this.song.singer,
        desc: this.song.desc,
        quality: this.song.quality,
        listimgurl: this.song.listimgurl,
        imgurl: this.song.imgurl,
        favoriate: this.song.favoriate,
        id: this.song.id,
        alreadyCollected: false,
      };
      axios
        .put("http://localhost:3000/song/" + id, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      this.$toast.fail({
        message: "取消收藏",
      });
    },
    // 前往评论页
    goDetail(id) {
      localStorage.setItem("songid", id);
      this.$router.push("/songs/Songreview/" + id);
    },
    // 获取全部数据
    getbookbyid(id) {
      axios
        .get("http://localhost:3000/song/" + id)
        .then((res) => {
          console.log(res);
          if (res.statusText == "OK") {
            this.song = res.data;
            console.log("A");
          } else {
            console.log("B");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 点赞
    praise() {
      var id = localStorage.getItem("songid");
      this.song.favoriate += 1;
      let data = {
        list: this.song.list,
        name: this.song.name,
        singer: this.song.singer,
        desc: this.song.desc,
        quality: this.song.quality,
        imgurl: this.song.imgurl,
        favoriate: this.song.favoriate,
        id: this.song.id,
        alreadyCollected: this.song.alreadyCollected,
      };
      // 2.把改完的数据存到db.json中
      axios
        .put("http://localhost:3000/song/" + id, data)
        .then((res) => {
          console.log("200" + res);
          this.$toast.success({
            message: "点赞成功",
          });
        })
        .catch((err) => {
          console.log(err);
        });
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
.songdetails-background {
  margin: 0 auto;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 20px;
  width: 96%;
  height: 93vh;
  background-color: white;
}

.songdetails-fanhui {
  margin-top: 10px;
  margin-left: 10px;
}

.songdetails-neirong {
  padding-top: 10px;
}

.songdetails-neirong-img {
  border-radius: 50%;
  margin-top: 30px;
  margin-left: 30px;
  text-align: center;
}

.songdetails-neirong-name {
  text-align: center;
  font-size: 24px;
  margin-top: 15px;
  font-family: "黑体";
}

.songdetails-neirong-singer {
  text-align: center;
  font-size: 12px;
  margin-top: 8px;
  font-family: "微软雅黑";
}

.songdetails-neirong-lyric {
  text-align: center;
  font-size: 16px;
  margin-top: 150px;
  font-family: "微软雅黑";
}

.songdetails-neirong-function-up {
  margin-top: 40px;
}

.songdetails-neirong-jindu {
  margin-top: 20px;
}

.songdetails-neirong-function-down {
  margin-top: 15px;
}
</style>