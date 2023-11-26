<template>
  <div class="edit-profile-card text-center">
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
      <button @click="cancelEditProfile" class="btn btn-outline-danger">
        Cancel
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  data: () => ({
    v$: useVuelidate(),
    showEditProfile: false,
    editUserName: "",
    editEmail: "",
    editPhone: "",
  }),
  validations: {
    editUserName: { required, minLength: minLength(12) },
    editEmail: { required, email },
    editPhone: { required },
  },
  computed: {
    ...mapGetters(["getuser", "getShowEditProfile"]),
  },
  methods: {
    ...mapMutations(["changeEditstatus"]),
    ...mapActions(["getUserDataFromStorage", "addUserDataToStorage"]),
    async editProfile() {
      this.v$.$validate();
      if (!this.v$.$error) {
        const result = await axios.put(
          `http://localhost:3000/users/${this.getuser.id}`,
          {
            userName: this.editUserName,
            email: this.editEmail,
            phone: this.editPhone,
            password: this.getuser.password,
          }
        );
        if (result.status == 200) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "profile" });
          this.changeEditstatus();
          console.log(result.data);
          console.log(result);
        } else {
          console.log(`error hapend ${result.data}`);
          console.log(result.data);
        }
      }
    },
    cancelEditProfile() {
      this.changeEditstatus();
      this.$router.push({ name: "profile" });
      console.log(`status is : ${this.getShowEditProfile}`);
    },
  },
};
</script>
