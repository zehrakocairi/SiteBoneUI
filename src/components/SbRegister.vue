<template>
  <div class="q-gutter-md" style="max-width: 400px">
    <h5>Register</h5>

    <q-input
      square
      filled
      v-model="userName"
      label="Username or e-mail"
      :rules="[
        (val) =>
          (userName && userName.length > 10) || 'Gecerli bir mail adresi girin',
      ]"
    />
    <q-input
      square
      outlined
      v-model="password"
      type="password"
      label="cerate password"
    />
    <q-input
      square
      outlined
      v-model="rePassword"
      type="password"
      label="re-enter password"
      :rules="[
        (val) =>
          (password && password === rePassword) || 'Sifreler ayni olmali',
      ]"
    />

    <div><q-btn color="primary" label="Register" @click="register()" /></div>
  </div>
</template>

<script>
export default {
  name: "SbRegister",
  data() {
    return {
      userName: null,
      password: null,
      rePassword: null,
    };
  },
  methods: {
    register() {
      if (
        this.password !== this.rePassword ||
        (this.userName && this.userName.length < 10)
      ) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Lutfen formu dogru sekilde doldurun.",
        });
        return;
      }
      let user = {
        email: this.userName,
        password: this.password,
        rePassword: this.rePassword,
      };
      user.email = "eve.holt@reqres.in";
      let baseUrl = "https://reqres.in/api";
      fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.error) {
            alert("hata!");
            this.password = "";
            this.rePassword = "";
          } else alert("kaydedildi");
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style></style>
