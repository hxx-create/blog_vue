<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-button @click="getUserInfo"> </el-button>
      </el-header>
      <el-main> </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { getArticleList, getArticleDet, getUserData } from "../api/common";
export default {
  name: "Home",
  mounted() {
    this.getArticle();
    console.log(111111111);
  },
  methods: {
    async getArticle() {
      // let res = await getArticleList();
      let res = await getArticleDet({ article_id: 168 });
      console.log(res);
    },

    async getUserInfo() {
      let res = await getUserData();
    },
  },
};
</script>
<style lang="scss" scope>
.home {
  width: 80%;
  height: 40rem;
  display: flex;
  // justify-content: center;
  align-items: center;
}
</style>
