export default {
  state: {
    isSignUpComponent: true,
  },
  getters: {
    isSignUpComponent(state) {
      return state.isSignUpComponent;
    },
  },
  mutations: {
    changeSignUpStatus(state) {
      state.isSignUpComponent = !state.isSignUpComponent;
    },
  },
};
