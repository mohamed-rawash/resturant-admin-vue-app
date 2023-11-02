<template>
  <div class="container">
    <form action="" @submit.prevent>
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
        <h1 class="text-primary">Sign up</h1>
        <div class="col-auto mx-auto mb-3 d-block">
          <input
            type="text"
            name="userName"
            id="user-name"
            class="form-control"
            placeholder="Enter Your Name"
            v-model.lazy="userName"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto my-3 d-block">
          <input
            type="text"
            name="userName"
            id="user-name"
            class="form-control"
            placeholder="Enter Your Email"
            v-model.lazy="email"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto my-3 d-block">
          <input
            type="text"
            name="phone"
            id="phone"
            class="form-control"
            placeholder="Enter Your Phone"
            v-model.lazy="phone"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto my-3 d-block">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Enter Your Password"
            v-model.lazy="password"
          />
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto mx-auto mt-5 d-block">
          <button type="submit" class="btn btn-outline-primary">
            Signup Now
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data: () => ({
    userName: "",
    email: "",
    password: "",
    phone: "",
  }),
};
</script>

<style scoped lang="scss">
.container {
  width: 350px;
  padding: 30px 0;
  margin: 50px auto;
  border-radius: 16px;
  background-color: #e2e2e2;
  border: 2px solid #afeeee;
}
</style>
