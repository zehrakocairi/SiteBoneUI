<template>
  <div class="q-pa-xl row">
    <div class="col"></div>
    <div class="col-4">
      <q-card class="my-card q-px-md q-py-xl shadow-5">
        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <h5 class="q-ma-sm">Log in</h5>
            <q-input
              outlined
              :dense="true"
              v-model="userName"
              label="Your username *"
              hint="Username"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-input
              outlined
              :dense="true"
              type="password"
              v-model="password"
              label="Your password *"
              lazy-rules
              :rules="[
                (val) => {
                  return (
                    (val !== undefined && val.length > 5) ||
                    'Şifre en az 6 karakterli olmalıdır'
                  );
                },
              ]"
            />
            <q-toggle
              class="q-ma-sm"
              v-model="rememberMe"
              label="Beni hatırla"
            />
            <a href="/register ">Create user</a>
            <div>
              <q-btn label="Login" type="submit" color="primary" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "SbLogin",
  data() {
    return {
      userName: "",
      password: "",
      rememberMe: true,
    };
  },

  methods: {
    onSubmit() {
      this.logIn();
    },

    onReset() {
      this.userName = "";
      this.password = "";
      this.rememberMe = false;
    },
    logIn() {
      let user = {
        userName: this.userName,
        password: this.password,
        isRememberMe: this.isRememberMe,
      };
      fetch("https://localhost:5001/api/Account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((response) => {
          debugger;
          if (response.error) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: response.error,
            });
            this.password = "";
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
