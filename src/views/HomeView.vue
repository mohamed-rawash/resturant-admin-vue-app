<template>
  <div class="home">
    <button class="btn btn-outline-primary" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    user: {},
  }),
  methods: {
    logout() {
      localStorage.removeItem("user-info");
      this.$router.push({ name: "auth-view" });
    },
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "auth-view" });
    } else {
      this.user = JSON.parse(localStorage.getItem("user-info"));
    }
  },
};
</script>
