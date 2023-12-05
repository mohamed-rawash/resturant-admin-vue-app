<template>
  <div class="error-page">
    <div class="content"></div>
    <button @click="goHome" class="btn btn-outline-dark">Go to home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: "home-view" });
    },
  },
};
</script>

<style lang="scss" scoped>
.error-page {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  .content {
    width: 400px;
    height: 400px;
    background-image: url("../assets/images/error.jpg");
    background-size: cover;
  }
}
</style>
