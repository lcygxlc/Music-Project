<template>
  <div id="app">
    <router-view v-if="isRouterAlive"> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isRouterAlive: true,
    };
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    // 界面刷新
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style>
body {
  background-color: #ffffff;
}
</style>
