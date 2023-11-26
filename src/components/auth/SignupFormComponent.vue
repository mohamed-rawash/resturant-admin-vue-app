<template>
  <div
    class="container"
    :class="{ 'danger-border': this.v$.$error || this.emailFounded }"
  >
    <form action="" @submit.prevent="signUp">
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto my-3 d-block">
          <svg
            viewBox="0 0 31.996 31.996"
            xmlns="http://www.w3.org/2000/svg"
            style="width: 60px"
            fill="#555555"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="dashboard" transform="translate(-372.002 -124.002)">
                <path
                  id="Path_60"
                  data-name="Path 60"
                  d="M389.561,142.316,391,138l-3-4-3,4,1.438,4.316"
                  fill="none"
                  stroke="#f1d17c"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <circle
                  id="Ellipse_21"
                  data-name="Ellipse 21"
                  cx="14.998"
                  cy="14.998"
                  r="14.998"
                  transform="translate(373.002 125.002)"
                  fill="none"
                  stroke="#498efc"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <path
                  id="Path_61"
                  data-name="Path 61"
                  d="M392,146h4a10,10,0,1,0-16,0h4"
                  fill="none"
                  stroke="#498efc"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  stroke-width="2"
                ></path>
                <circle
                  id="Ellipse_22"
                  data-name="Ellipse 22"
                  cx="4"
                  cy="4"
                  r="4"
                  transform="translate(384 142)"
                  fill="none"
                  stroke="#498efc"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="row align-items-center">
        <h1 class="text-primary text-center">Sign up</h1>
        <div class="col-auto mx-auto mb-3 d-block">
          <input
            type="text"
            name="userName"
            class="form-control"
            :class="{ error: v$.userName.$error }"
            placeholder="Enter Your Name"
            v-model.lazy="userName"
          />
          <span class="error-feedback" v-if="v$.userName.$error">{{
            v$.userName.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto my-3 d-block">
          <input
            type="email"
            name="email"
            class="form-control"
            :class="{ error: v$.email.$error }"
            placeholder="Enter Your Email"
            v-model.lazy="email"
          />
          <span class="error-feedback" v-if="v$.email.$error">{{
            v$.email.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto my-3 d-block">
          <input
            type="text"
            name="phone"
            class="form-control"
            :class="{ error: v$.phone.$error }"
            placeholder="Enter Your Phone"
            v-model.lazy="phone"
          />
          <span class="error-feedback" v-if="v$.phone.$error">{{
            v$.phone.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto my-3 d-block">
          <input
            type="password"
            name="password"
            class="form-control"
            :class="{ error: v$.password.$error }"
            placeholder="Enter Your Password"
            v-model.lazy="password"
          />
          <span class="error-feedback" v-if="v$.password.$error">{{
            v$.password.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto mt-3 d-block">
          <button type="submit" class="btn btn-outline-info">Signup Now</button>
        </div>
        <div v-if="this.emailFounded">
          <span class="error-feedback" style="text-align: center"
            >{{ this.email }} this email not aviliable</span
          >
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto mt-3 d-block">
          <span>Are you have an account </span>
          <span @click="changeSignUpStatus" class="signin-btn">Signin</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { mapMutations } from "vuex";
export default {
  name: "SignupForm",
  data: () => ({
    v$: useVuelidate(),
    userName: "",
    email: "",
    password: "",
    phone: "",
    emailFounded: false,
  }),
  validations: {
    userName: { required },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    phone: { required },
  },
  methods: {
    ...mapMutations(["changeSignUpStatus"]),
    async signUp() {
      console.log("Sign up");
      this.v$.$validate();
      if (!this.v$.$error) {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}`
        );
        if (result.status === 200 && result.data.length === 0) {
          this.emailFounded = false;
          if (!this.v$.$error) {
            let result = await axios.post("http://localhost:3000/users", {
              userName: this.userName,
              email: this.email,
              password: this.password,
              phone: this.phone,
            });
            if (result.status == 201) {
              localStorage.setItem("user-info", JSON.stringify(result.data));
              this.$router.push({ name: "home-view" });
            }
          }
        } else if (!this.v$.$error) {
          this.emailFounded = true;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 350px;
  padding: 15px 0;
  margin: 50px auto;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.33);
  border-radius: 16px;
  box-shadow: 0 4px 30px #0000001a;
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  border: 1px solid #0dcaf0;
  .error-feedback {
    display: inline-block;
    width: 100%;
    margin-top: 2px;
    color: red;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .error {
    border-color: red;
    animation-name: bounce;
    animation-duration: 0.5s;
    animation-delay: 0.25s;
  }
  .signin-btn {
    text-transform: none;
    color: white;
    cursor: pointer;
  }
}
.danger-border {
  border: 2px solid red;
}
/* This approximates the ease-in-out-bounce animation from easings.net, which would require a plug-in to use*/
@keyframes bounce {
  0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(5px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-5px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(4px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-4px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(2px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-2px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
}
</style>
