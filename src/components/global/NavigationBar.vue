<template>
  <nav class="nav-bar">
    <div class="logo">
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
    <div class="content">
      <button @click="showLinks" class="btn btn-outline-info burger-icon">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
      <ul @mouseleave="showLinks" class="links" :class="{ show: this.toggle }">
        <li>
          <router-link :to="{ name: 'dashboard' }" exact>
            <font-awesome-icon icon="fa-solid fa-chart-bar" />
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'profile' }">
            <font-awesome-icon icon="fa-regular fa-user" />
            Profile
          </router-link>
        </li>
      </ul>
      <div class="logut">
        <button class="btn btn-outline-info" @click="logout">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    toggle: true,
  }),
  methods: {
    showLinks() {
      this.toggle = !this.toggle;
    },
    logout() {
      localStorage.removeItem("user-info");
      this.$router.push({ name: "auth-view" });
    },
  },
};
</script>
<style lang="scss">
.nav-bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.33);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  border: 1px solid #0dcaf0;
  padding: 6px 25px;
  border-radius: 16px;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0;
    @media (min-width: 768px) {
      .burger-icon {
        display: none;
      }
      .links {
        list-style: none;
        margin: 0;
        & li {
          display: inline-block;
          margin-left: 10px;
          color: #0dcaf0;
          & a {
            text-decoration: none;
            padding: 9px 9px;
            border-radius: 6px;
            color: inherit;
            border: 1px solid #0dcaf0;
            transition: 0.2s all ease-in-out;
            &:hover,
            &.router-link-active {
              background-color: #0dcaf0;
              color: black;
            }
          }
        }
      }
    }
    @media (max-width: 767px) {
      .show {
        display: none;
      }
      .links {
        position: absolute;
        top: 105%;
        right: 70px;
        list-style: none;
        margin: 0;
        padding: 0;
        height: fit-content;
        background-color: rgba(255, 255, 255, 0.33);
        border: 1px solid #0dcaf0;
        border-radius: 16px;
        overflow: hidden;
        z-index: 100000;
        & li {
          display: block;
          padding: 0;
          color: black;
          & a {
            display: flex;
            gap: 5px;
            align-items: center;
            justify-content: start;
            text-decoration: none;
            padding: 9px;
            color: inherit;
            transition: 0.2s all ease-in-out;
            &:hover,
            &.router-link-active {
              color: #0dcaf0;
              background-color: bisque;
            }
          }
        }
      }
    }
  }
}
</style>
