<template>
  <div class="q-gutter-md row q-pa-xl">
    <div class="col"></div>
    <div class="col-4 q-gutter-sm">
      <q-card class="my-card q-pa-md shadow-5">
        <q-card-section>
          <h5 class="q-ma-md">Register</h5>
          <q-input
            square
            outlined
            :dense="true"
            v-model="userName"
            label="Username"
            :rules="[
              (val) =>
                (userName && userName.length > 5) ||
                'Gecerli bir kullanıcı adı girin',
            ]"
          />
          <q-input
            square
            outlined
            :dense="true"
            v-model="email"
            label="email"
            :rules="[
              (val) =>
                (email && email.length > 10) || 'Gecerli bir mail adresi girin',
            ]"
          />
          <div class="q-gutter-lg">
            <q-input
              square
              outlined
              :dense="true"
              v-model="password"
              type="password"
              label="cerate password"
            />
            <q-input
              square
              outlined
              :dense="true"
              v-model="rePassword"
              type="password"
              label="re-enter password"
              :rules="[
                (val) =>
                  (password && password === rePassword) ||
                  'Sifreler ayni olmali',
              ]"
            />
          </div>

          <div>
            <q-btn color="primary" label="Register" @click="register()" />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
export default {
  name: "SbRegister",
  data() {
    return {
      userName: null,
      email: null,
      password: null,
      rePassword: null,
    };
  },
  methods: {
    register() {
      if (this.password !== this.rePassword) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Lutfen formu dogru sekilde doldurun.",
        });
        return;
      }
      let user = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        rePassword: this.rePassword,
      };

      fetch("https://localhost:5001/api/Account/register", {
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
              message: "Hata!",
            });
          } else {
            debugger;
            this.$q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: response.message,
            });
            this.$router.push("/login");
          }
        });
    },
  },
};
</script>

<style></style>
