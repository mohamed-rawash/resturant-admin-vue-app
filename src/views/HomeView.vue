<template>
  <div class="home">
    <navigation-bar />
    <div class="body">
      <span class="badge" v-if="this.user">{{ this.user.userName }}</span>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NavigationBar from "@/components/global/NavigationBar.vue";
export default {
  name: "HomeView",
  data: () => ({
    user: {},
  }),
  components: {
    NavigationBar,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["getUserDataFromStorage"]),
  },
  mounted() {
    this.getUserDataFromStorage();
    console.log(`From Home ${this.user.userName}`);
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "auth-view" });
    } else {
      this.user = JSON.parse(localStorage.getItem("user-info"));
      this.$router.push({ name: "dashboard" });
    }
  },
};
</script>
<style lang="scss">
.home {
  padding: 25px;
  height: 100vh;
  width: 100vw;
  background-color: cadetblue;
  background-image: url("@/assets/images/background.jpg");
  background-size: cover;
  .body {
    height: calc(100vh - 147px);
    margin: 25px 0;
    background: rgba(255, 255, 255, 0.33);
    border: 1px solid #0dcaf0;
    border-radius: 16px;
    overflow: auto;
    .badge {
      position: fixed;
      top: 150;
      right: 25px;
      padding: 6px 12px;
      border-radius: 0;
      border-top-right-radius: 16px;
      background-color: cadetblue;
      z-index: 10;
    }
    @media (max-width: 767px) {
      .badge {
        display: none;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
