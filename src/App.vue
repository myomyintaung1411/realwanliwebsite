<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    if (this.isMobile()) {
      this.$router.push("/m");
    } else {
      this.$router.push("/");
    }
  },
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
}
// /* body {
// } */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* height: 100vh; */
  overflow-x: hidden !important;
  // /* min-width: 1275px !important; */
  /* height: 100vh; */
  // min-width: 1300px !important;
  // height: 100%;
  width: 100%;
}
</style>
