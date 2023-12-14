import { createStore } from "vuex";
import auth from "@/store/auth";
import axios from "axios";

export default createStore({
  state: {
    showEditProfile: false,
    addrestaurantStatus: "",
    userInfo: {},
  },
  getters: {
    getuser(state) {
      return state.userInfo;
    },
    getShowEditProfile(state) {
      return state.showEditProfile;
    },
  },
  mutations: {
    getUserData(state, payload) {
      console.log(`payload ${payload}`);
      state.userInfo = { ...payload };
      console.log(`state.user ${state.userInfo}`);
    },
    changeEditstatus(state) {
      state.showEditProfile = !state.showEditProfile;
    },
    changerestaurantStatus(state, value) {
      state.addrestaurantStatus = value;
    },
  },
  actions: {
    addUserDataToStorage(user) {
      localStorage.setItem("user-info", JSON.stringify(user.getters.getuser));
    },
    getUserDataFromStorage(context) {
      const user = JSON.parse(localStorage.getItem("user-info"));
      console.log(user);
      context.commit("getUserData", user);
    },
    async addNewRestaurant(context, restaurant) {
      await axios
        .post("http://localhost:3000/locations", restaurant)
        .then((res) => context.commit("changerestaurantStatus", res.status))
        .catch((error) =>
          context.commit("changerestaurantStatus", error.status)
        );
    },
  },
  modules: {
    auth,
  },
});
