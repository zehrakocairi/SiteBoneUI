<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        lazy-rules
        :rules="[
          (val) =>
            (val !== undefined && val.length > 5) ||
            'Şifre en az 6 karakterli olmalıdır',
        ]"
      />

      <q-toggle v-model="rememberMe" label="Beni hatırla" />

      <div>
        <q-btn label="Login" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "SbLogin",
  data() {
    return {
      name: null,
      password: null,
      rememberMe: false,
    };
  },

  methods: {
    onSubmit() {
      this.logIn();
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.rememberMe = false;
    },
    logIn() {
      let user = {
        email: this.name,
        password: this.password,
        isRememberMe: this.isRememberMe,
      };
      user.email = "eve.holt@reqres.in"; // For Test
      fetch("https://reqres.in/api/login", {
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
