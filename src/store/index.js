import { createStore } from "vuex";
import auth from "@/store/auth";

export default createStore({
  state: {
    showEditProfile: false,
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
  },
  modules: {
    auth,
  },
});
