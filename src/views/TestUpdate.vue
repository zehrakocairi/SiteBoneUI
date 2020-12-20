<template>
  <div class="q-gutter-md" style="max-width: 300px">
    <label>{{ id }}</label>
    <q-input filled v-model="email" label="" />
    <q-input filled v-model="first_name" label="" />
    <q-input filled v-model="last_name" label="" />
    <q-btn color="secondary" label="Update" @click="update()" />
  </div>
</template>

<script>
/* eslint-disable no-debugger */
export default {
  name: "Testupdate",
  data() {
    return {
      id: undefined,
      email: "",
      first_name: "",
      last_name: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getData();
  },
  methods: {
    getData() {
      fetch("https://reqres.in/api/users/" + this.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          this.email = response.data.email;
          this.first_name = response.data.first_name;
          this.last_name = response.data.last_name;
        });
    },
    update() {
      let user = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
      };
      fetch("https://reqres.in/api/users/" + this.id, {
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
              message: response.error,
            });
          } else {
            this.$q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Hosgeldin",
            });
            this.$router.push("/");
          }
        });
    },
  },
};
</script>

<style></style>
