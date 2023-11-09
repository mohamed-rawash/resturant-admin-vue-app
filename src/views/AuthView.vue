<template>
  <div class="parent">
    <SignupForm v-if="isSignUpComponent"></SignupForm>
    <SigninForm v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SignupForm from "@/components/auth/SignupFormComponent.vue";
import SigninForm from "@/components/auth/SigninFormComponent.vue";
export default {
  name: "AuthView",
  components: {
    SignupForm,
    SigninForm,
  },
  data: () => ({
    signup: true,
  }),
  computed: {
    ...mapGetters(["isSignUpComponent"]),
  },
  methods: {
    chanageAuthComponent() {
      this.signup = !this.signup;
    },
  },
};
</script>

<style scoped lang="scss"></style>
