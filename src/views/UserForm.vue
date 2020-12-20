<template>
  <div>
    <div class="row">
      <div class="col-4">
        <h4 class="q-ma-sm text-left">Update User</h4>
      </div>
    </div>
    <hr />
    <div class="row q-gutter-md full-width">
      <div class="col-6 q-gutter-md">
        <q-input outlined :dense="true" v-model="user.email" label="email" />
        <q-input
          outlined
          :dense="true"
          v-model="user.userName"
          label="username"
        />
        <q-input outlined :dense="true" v-model="user.name" label="name" />
        <q-input outlined :dense="true" v-model="user.phone" label="phone" />
      </div>
    </div>
    <br />

    <div>
      <h5 class="q-ma-sm text-left">Address</h5>
      <hr />
      <div class="row q-gutter-md full-width">
        <div class="col-6 q-gutter-md">
          <q-input
            outlined
            :dense="true"
            v-model="user.address.city"
            label="city"
          />
          <q-input
            outlined
            :dense="true"
            v-model="user.address.country"
            label="country"
          />
          <q-input
            outlined
            :dense="true"
            v-model="user.address.details"
            label="details"
          />
        </div>
      </div>
    </div>
    <div class="text-right q-mr-lg q-gutter-sm">
      <q-btn color="primary" label="Update" @click="update()" />
      <q-btn text-color="secondary" label="Cancel" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      user: {
        id: "",
        email: "",
        userName: "",
        name: "",
        phone: "",
        address: {
          id: "",
          city: "",
          country: "",
          details: "",
        },
      },
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getUser();
  },
  methods: {
    getUser() {
      fetch("https://localhost:5001/api/Account/user/" + this.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          this.user.id = response.id;
          this.user.email = response.email;
          this.user.userName = response.userName;
          this.user.name = response.name;
          this.user.phone = response.phone;
          this.user.address = response.address || "";
        });
    },
    update() {
      let user = {
        id: this.user.id,
        email: this.user.email,
        userName: this.user.userName,
        name: this.user.name,
        phone: this.user.phone,
        address: this.user.address,
      };
      fetch("https://localhost:5001/api/Account/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.error) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: response.message,
            });
          } else {
            this.$q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: response.message,
            });
            this.$router.push("/");
          }
        });
    },
  },
};
</script>

<style>
</style>