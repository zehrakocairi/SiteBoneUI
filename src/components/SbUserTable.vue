<template>
  <div>
    <div class="q-pa-md">
      <q-table
        title="Users"
        :data="filteredUsers"
        :columns="columns"
        row-key="id"
        selection="single"
        :selected.sync="selected"
        :pagination="initialPagination"
      >
        <template v-slot:top>
          <q-input
            outlined
            :dense="true"
            v-model="text"
            label="Filter"
            style="width: 300px"
          />
          <q-space></q-space>
          <q-btn
            class="q-ml-sm"
            color="primary"
            label="Update"
            size="sm"
            @click="updateUser()"
          />
          <q-btn
            class="q-ml-sm"
            color="negative"
            label="Delete"
            size="sm"
            @click="deleteUser()"
          />
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-debugger */
export default {
  name: "sbUserTable",
  data() {
    return {
      selected: [],
      initialPagination: {
        sortBy: "id",
        descending: false,
        rowsPerPage: 10,
      },
      columns: [
        {
          name: "id",
          required: true,
          label: "ID",
          align: "left",
          field: "id",
          sortable: true,
        },
        {
          name: "email",
          align: "center",
          label: "Email",
          field: "email",
          sortable: true,
        },
        {
          name: "userName",
          align: "center",
          label: "Firstname",
          field: "userName",
          sortable: true,
        },
        {
          name: "name",
          align: "center",
          label: "Name",
          field: "name",
          sortable: true,
        },
        {
          name: "phone",
          align: "center",
          label: "Phone",
          field: "phone",
          sortable: true,
        },
        {
          name: "address",
          align: "center",
          label: "Address",
          field: "address",
          sortable: true,
        },
      ],
      accounts: [],
      text: "",
    };
  },
  created() {
    this.getData();
  },
  computed: {
    filteredUsers() {
      let filteredAccounts = this.accounts.filter((account) => {
        return (
          account.email.toLowerCase().includes(this.text.toLowerCase()) ||
          account.userName.toLowerCase().includes(this.text.toLowerCase()) ||
          account.name?.toLowerCase().includes(this.text.toLowerCase())
        );
      });
      return filteredAccounts;
    },
    // normalizedAccounts() {
    //   return this.filteredUsers.map((account) => {
    //     if (account.address) {
    //       return {
    //         ...account,
    //         address: `${account.address?.details} ${account.address?.city}/${account.address?.country}`,
    //       };
    //     } else return "";
    //   });
    // },
  },
  methods: {
    async getData() {
      // eslint-disable-next-line no-unused-vars
      this.accounts = await fetch("https://localhost:5001/api/Account/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then((res) => res.json());
    },
    updateUser() {
      if (this.selected.length < 1) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Lütfen kullanıcı seçiniz",
        });
        return;
      }
      this.$router.push("/updateuser/" + this.selected[0].id);
    },
    deleteUser() {
      if (this.selected.length < 1) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Lütfen kullanıcı seçiniz",
        });
        return;
      }
      fetch("https://localhost:5001/api/Account/user/" + this.selected[0].id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then((response) => {
        if (response.ok == true) {
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Kullanıcı başarıyla silindi",
          });
        } else {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Hata!",
          });
        }
      });
      this.getData();
    },
  },
};
</script>

<style></style>
