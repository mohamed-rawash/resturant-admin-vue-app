<template>
  <div class="new-location">
    <div
      v-if="success"
      class="alert alert-success mb-3 mx-3 text-start"
      role="alert"
    >
      Successfully added new Restaurant
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add New Restaurant
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Restaurant</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': v$.restuarantName.$error }"
                  id="floatingInput"
                  v-model="state.restuarantName"
                />
                <label for="floatingInput">Restaurant Name</label>
                <span v-if="v$.restuarantName.$error" class="text-danger">
                  {{ v$.restuarantName.$errors[0].$message }}
                </span>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="phone"
                  class="form-control"
                  :class="{ 'is-invalid': v$.phone.$error }"
                  v-model="state.phone"
                />
                <label for="floatingPassword">Phone Number</label>
                <span v-if="v$.phone.$error" class="text-danger">
                  {{ v$.phone.$errors[0].$message }}
                </span>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': v$.address.$error }"
                  v-model="state.address"
                />
                <label for="floatingPassword">Address</label>
                <span v-if="v$.address.$error" class="text-danger">
                  {{ v$.address.$errors[0].$message }}
                </span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="addRestaurant"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { mapState, mapActions } from "vuex";
export default {
  setup() {
    const state = reactive({
      restuarantName: "",
      phone: "",
      address: "",
    });
    const rules = computed(() => ({
      restuarantName: { required, minLength: minLength(10) },
      phone: { required, minLength: minLength(11) },
      address: { required, minLength: minLength(10) },
    }));
    const v$ = useVuelidate(rules, state);
    return { state, v$ };
  },
  data: () => ({
    closeModal: "",
    success: false,
    failure: false,
  }),
  computed: {
    ...mapState(["addrestaurantStatus"]),
  },
  methods: {
    ...mapActions(["addNewRestaurant"]),
    resetForm() {
      this.state.restuarantName = "";
      this.state.phone = "";
      this.state.address = "";
    },
    async addRestaurant() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.addNewRestaurant({
          name: this.state.restuarantName,
          phone: this.state.phone,
          address: this.state.address,
          userId: JSON.parse(localStorage.getItem("user-info")).id,
        });
        console.log(this.addrestaurantStatus);
        if (this.addrestaurantStatus == 201) {
          this.closeModal = "modal";
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 2000);
          this.resetForm();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.new-location {
  text-align: end;
  margin-top: 20px;
  margin-right: 10px;
  .modal-body {
    text-align: start;
  }
}
</style>
