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
      let isLoginSuccess = this.logIn();
      if (isLoginSuccess) {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
        this.$router.push("/");
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Giriş yaparken bir hatayla karşılaşıldı",
        });
        this.password = "";
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.rememberMe = false;
    },
    logIn() {
      // eslint-disable-next-line
      let user = {
        name: this.name,
        password: this.password,
        isRememberMe: this.isRememberMe,
      };
      //send user to backend
      return true;
    },
  },
};
</script>

<style></style>
