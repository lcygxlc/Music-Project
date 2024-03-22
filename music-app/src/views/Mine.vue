<template>
  <div>
    <Navber> </Navber>
    <!-- 个人 -->
    <van-cell-group inset>
      <van-grid direction="horizontal" :column-num="2" class="Mine-geren">
        <van-image
        round
          width="50"
          height="50"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          class="Mine-geren-img"
        />
        <div class="Mine-geren-username">{{ username }}</div>
      </van-grid>
    </van-cell-group>
    <!-- 个人状态 -->
    <div class="Mine-geren-zhuangtai">
      <van-row gutter="20">
        <van-col span="8">
          <template>
            <van-icon name="question-o" size="30px" />
            <p class="Mine-geren-zhuangtai-A">关注</p>
          </template>
        </van-col>
        <van-col span="8">
          <template>
            <van-icon name="question-o" size="30px" />
            <p class="Mine-geren-zhuangtai-A">粉丝</p>
          </template>
        </van-col>
        <van-col span="8">
          <template>
            <van-icon name="question-o" size="30px" />
            <p class="Mine-geren-zhuangtai-A">推荐</p>
          </template>
        </van-col>
      </van-row>
    </div>
    <!-- 个人功能 -->
    <van-cell-group inset>
      <van-grid :column-num="4" class="Mine-geren-gongneng">
        <van-grid-item icon="like-o" text="收到的喜欢" to="/mine/MineLikesreceived"/>
        <van-grid-item icon="comment-o" text="评论" to="/mine/Minereview"/>
        <van-grid-item icon="friends-o" text="聊天" to="/mine/MineChatgroup"/>
        <van-grid-item icon="bullhorn-o" text="通知" to="/mine/MineInform"/>
      </van-grid>
    </van-cell-group>
    <!-- 功能上部 -->
    <van-cell-group inset class="Mine-gongneng">
      <van-cell title="活动中心" value="开始创作 GO" icon="shop-o" is-link />
      <van-cell title="我的收藏" value="" icon="shop-o" is-link to="/mine/Minecollect"/>
      <van-cell title="我的喜欢" value="" icon="shop-o" is-link />
      <van-cell title="我的钱包" value="" icon="shop-o" is-link />
      <van-cell title="我的足迹" value="历史记录" icon="shop-o" is-link />
      <van-cell title="我的提问箱" value="" icon="shop-o" is-link />
    </van-cell-group>
    <!-- 功能中部 -->
    <van-cell-group inset class="Mine-gongneng">
      <van-cell title="歌手认证" value="" icon="shop-o" is-link />
      <van-cell title="歌手签约" value="" icon="shop-o" is-link />
      <van-cell title="个人应用" value="" icon="shop-o" is-link />
    </van-cell-group>
    <!-- 功能下部 -->
    <van-cell-group inset class="Mine-gongneng" style="margin-bottom: 50px">
      <van-cell title="帮助与反馈" value="" icon="shop-o" is-link to="/install" />
      <van-cell title="设置" value="" icon="shop-o" is-link to="/install" />
    </van-cell-group>
    <!-- 页尾 -->
    <Tabber></Tabber>
  </div>
</template>

<script>
import Tabber from "../components/Tabbar.vue";
import Navber from "../components/Navber.vue";
export default {
  name: "Mine",
  methods: {
    Denglu() {},
  },
  components: {
    Tabber,
    Navber,
  },
  data() {
    return {
      username: "",
    };
  },
  mounted() {
  this.username=localStorage.getItem("username")
  if(this.username!=''){
    this.isshow=false
  }
  },
};
</script>

<style scoped>
.Mine-geren {
  margin-top: 10px;
  padding: 10px;
  background-color: #ebebeb;
  font-size: 30px;
  border-radius: 20px;
}

.Mine-geren-img {
  margin:5px;
  margin-left: 18px;
}

.Mine-geren-username {
  margin-top: 16px;
  margin-left: 20px;
  font-size: 24px;
}

.Mine-geren-zhuangtai {
  margin-top: 23px;
  text-align: center;
}

.Mine-geren-zhuangtai-A {
  margin: 0px;
  margin-bottom: 23px;
}

.Mine-geren-zhuangtai-gongneng {
  border: 5px solid #ebebeb;
  border-radius: 20px;
}

.Mine-gongneng {
  margin-top: 20px;
}
</style>

// 强制执行
<style scoped>
::v-deep .van-grid-item__content {
  display: flex;
  height: 100%;
  padding: 16px 8px;
  background-color: #ebebeb;
}

::v-deep .van-cell {
  background-color: #ebebeb;
}

::v-deep .van-cell-group--inset {
  margin-left: 11px;
}
</style>