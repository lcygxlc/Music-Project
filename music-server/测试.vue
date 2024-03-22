<template>
  <div>
      <el-table
        :data="
          SongData
        "
        border
        style="width: 100%"
      >
        <el-table-column prop="id" label="编号" width="180"> </el-table-column>
        <el-table-column prop="name" label="歌曲名称" width="180">
        </el-table-column>
        <el-table-column prop="singer" label="歌曲作者"> </el-table-column>
        <el-table-column prop="desc" label="歌曲专辑"> </el-table-column>
        <el-table-column label="操作">
          <!-- 编辑删除功能 -->
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    <!-- 添加歌曲 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%">
      <el-form
        label-width="80px"
        :model="Songform"
      >
        <el-form-item label="歌曲榜单">
          <el-input v-model="Songform.list"></el-input>
        </el-form-item>
        <el-form-item label="歌曲名称">
          <el-input v-model="Songform.name"></el-input>
        </el-form-item>
        <el-form-item label="歌曲专辑">
          <el-input v-model="Songform.desc"></el-input>
        </el-form-item>
        <el-form-item label="歌手">
          <el-input v-model="Songform.singer"></el-input>
        </el-form-item>
        <el-form-item label="品质">
          <el-input v-model="Songform.quality"></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-input v-model="Songform.imgurl"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit"> 确 定 </el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Song",
  data() {
    return {
      song: "",
      dialogTitle: "",
      dialogVisible: false,
      SongData: [],
      Songform: {
        id: "",
        name: "",
        singer: "",
        desc: "",
        quality: "",
        imgurl: "",
        list: "",
        // favoriate表示收藏个数，初始化时设置为0
        favoriate: "",
      },
    };
  },
  mounted() {
    this.getAllData();
  },
  methods: {
    //添加歌曲
    submit() {
        //触发编辑请求
        let data = {
          name: this.Songform.name,
          singer: this.Songform.singer,
          desc: this.Songform.desc,
          quality: this.Songform.quality,
          imgurl: this.Songform.imgurl,
          list: this.Songform.list,
          // favoriate表示收藏个数，初始化时设置为0
          favoriate: this.Songform.favoriate,
        };
        axios
          .put("http://localhost:3000/song/" + this.Songform.id, data)
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
              //修改成功
              this.getAllData();
              this.dialogVisible = false;
              this.$message.success("修改歌曲成功");
            } else {
              //修改失败
              this.$message.error("修改歌曲失败");
            }
          })
          .catch((err) => {
            console.log(err);
          });
    },
    //获取数据
    getAllData() {
      axios
        .get("http://localhost:3000/song/")
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.SongData = res.data;
          } else {
            console.log("获取详细歌曲数据失败！");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 编辑与删除

    handleEdit(row) {
      this.dialogTitle = "编辑课程";
      console.log(row);
      this.Songform.id = row.id;
      this.Songform.list = row.list;
      this.Songform.name = row.name;
      this.Songform.desc = row.desc;
      this.Songform.singer = row.singer;
      this.Songform.quality = row.quality;
      this.Songform.imgurl = row.imgurl;
      this.Songform.favoriate = row.favoriate;
      this.dialogVisible = true;
    },
    handleDelete(id) {
      axios
        .delete("http://localhost:3000/song/" + id)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$message({
              message: "删除成功!",
              type: "success",
            });
            this.getAllData();
          } else {
            console.log("删除失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>             