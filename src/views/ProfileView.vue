<template>
  <div class="profile">
    <div v-if="!getShowEditProfile" class="profile-card">
      <div class="user-photo">
        <div class="photo"></div>
      </div>
      <div class="user-data">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-user" />
        </span>
        <span class="text">
          <p>{{ getuser.userName }}</p>
        </span>
      </div>
      <div class="user-data">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </span>
        <span class="text">
          <p>{{ getuser.email }}</p>
        </span>
      </div>
      <div class="user-data">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-phone" />
        </span>
        <span class="text">
          <p>{{ getuser.phone }}</p>
        </span>
      </div>
      <div class="btns d-flex gap-3">
        <button
          @click="goToEditProfile"
          @mouseover="() => (editHover = true)"
          @mouseleave="() => (editHover = false)"
          class="btn btn-outline-primary d-flex gap-2 align-items-center"
        >
          <span class="icon">
            <font-awesome-icon
              v-if="editHover"
              icon="fa-solid fa-user-pen"
              bounce
            />
            <font-awesome-icon v-if="!editHover" icon="fa-solid fa-user-pen" />
          </span>
          <span class="text">Edit Profile</span>
        </button>
        <button
          @click="deleteAccount"
          @mouseover="() => (deleteHover = true)"
          @mouseleave="() => (deleteHover = false)"
          class="btn btn-outline-danger d-flex gap-2 align-items-center"
        >
          <span class="icon">
            <font-awesome-icon
              v-if="deleteHover"
              :icon="['fas', 'trash']"
              shake
            />
            <font-awesome-icon v-if="!deleteHover" :icon="['fas', 'trash']" />
          </span>
          <span class="text">Delete Account</span>
        </button>
      </div>
    </div>
    <!-- <div class="edit-profile-card text-center">
      <h1>Edit Profile</h1>
      <div>
        <input
          class="form-control mb-2"
          :class="{ error: v$.editUserName.$error }"
          :placeholder="getuser.userName"
          type="text"
          name="user-name"
          id="user-name"
          v-model.lazy="editUserName"
        />
        <span class="error-feedback" v-if="v$.editUserName.$error">{{
          v$.editUserName.$errors[0].$message
        }}</span>
      </div>
      <div>
        <input
          class="form-control mb-2"
          :class="{ error: v$.editEmail.$error }"
          :placeholder="getuser.email"
          type="email"
          name="email"
          id="email"
          v-model.lazy="editEmail"
        />
        <span class="error-feedback" v-if="v$.editEmail.$error">{{
          v$.editEmail.$errors[0].$message
        }}</span>
      </div>
      <div>
        <input
          class="form-control mb-2"
          :class="{ error: v$.editPhone.$error }"
          :placeholder="getuser.phone"
          type="phone"
          name="phone"
          id="phone"
          v-model.lazy="editPhone"
        />
        <span class="error-feedback" v-if="v$.editPhone.$error">{{
          v$.editPhone.$errors[0].$message
        }}</span>
      </div>
      <div class="btns d-flex gap-3">
        <button @click="editProfile" class="btn btn-outline-primary">
          Confirm Edit
        </button>
        <button @click="changeEditstatus" class="btn btn-outline-danger">
          Cancel
        </button>
      </div>
    </div> -->
    <router-view v-else></router-view>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data: () => ({
    deleteHover: false,
    editHover: false,
    showEditProfile: false,
  }),
  components: {},
  computed: {
    ...mapState(["showEditProfile"]),
    ...mapGetters(["getuser", "getShowEditProfile"]),
  },
  methods: {
    ...mapMutations(["changeEditstatus"]),
    ...mapActions(["getUserDataFromStorage", "addUserDataToStorage"]),
    goToEditProfile() {
      this.$router.push({ name: "editProfile" });
      this.changeEditstatus();
      console.log(`status is : ${this.getShowEditProfile}`);
    },
  },
  beforeUpdate() {
    this.getUserDataFromStorage();
  },
};
</script>
<style lang="scss">
.profile {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  .profile-card,
  .edit-profile-card {
    width: fit-content;
    padding: 20px 30px;
    text-align: start;
    background-color: #89d2e8;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .user-photo {
      display: grid;
      place-content: center;
      margin-bottom: 30px;
      .photo {
        width: 100px;
        height: 100px;
        border: 1px solid #fff;
        border-radius: 50%;
        background-image: url("../assets/images/background.jpg");
        background-size: cover;
      }
    }
    .user-data {
      display: flex;
      gap: 10px;
      .icon {
        color: #0d6efd;
      }
    }
  }
  .edit-profile-card {
    .error-feedback {
      display: inline-block;
      width: 200px;
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
  }
  @media (max-width: 767px) {
    .profile-card {
      margin: 0 10px;
    }
  }
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
}
</style>
