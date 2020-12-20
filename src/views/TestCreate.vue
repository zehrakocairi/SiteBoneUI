<template>
  <div class="q-gutter-md" style="max-width: 300px">
    <q-input
      filled
      v-model="email"
      label="e-mail"
      :rules="[
        (val) => (email && email.length > 10) || 'Gecerli bir e-mail girin',
      ]"
    />
    <q-input
      filled
      v-model="first_name"
      label="Firstname"
      :rules="[
        (val) =>
          (first_name && first_name.length > 1) || 'Gecerli bir isim girin',
      ]"
    />
    <q-input
      filled
      v-model="last_name"
      label="Lastname"
      :rules="[
        (val) =>
          (last_name && last_name.length > 1) || 'Gecerli bir soyisim girin',
      ]"
    />
    <q-btn color="secondary" label="Create" @click="addUser()" />
  </div>
</template>

<script>
export default {
  name: "Testcreate",
  data() {
    return {
      email: "",
      first_name: "",
      last_name: "",
    };
  },
  methods: {
    addUser() {
      let user = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
      };
      fetch("https://reqres.in/api/users", {
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
              message: "Yeni kullanıcı oluşturuldu",
            });
            this.$router.push("/");
          }
        });
    },
  },
};
</script>

<style></style>
