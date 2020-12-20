<template>
  <div>
    <div class="row">
      <div><h4 class="text-left q-ma-sm">Pages</h4></div>
      <q-space />
      <div>
        <q-btn disable color="primary" label="Create New" @click="addNew()" />
      </div>
    </div>
    <hr />
    <div class="q-pa-md q-gutter-sm">
      <div class="row">
        <div class="col"></div>
        <div class="col-6 q-gutter-sm">
          <div
            class="row q-gutter-sm"
            v-for="(page, index) in pages"
            :key="index"
          >
            <q-btn color="primary" @click="edit(page.id)" style="width: 80%">
              {{ page.pageTitle }}
            </q-btn>
            <q-btn
              round
              outline
              rounded
              color=""
              text-color="negative"
              icon="delete"
              @click="openConfirm(page)"
            >
              <q-tooltip
                anchor="center right"
                self="center left"
                :offset="[10, 10]"
              >
                <strong>Delete page</strong>
              </q-tooltip>
            </q-btn>
          </div>

          <q-dialog v-model="confirm" persistent>
            <q-card v-if="selectedPage">
              <q-card-section class="row items-center">
                <q-avatar icon="warning" color="primary" text-color="white" />
                <span class="q-ml-sm">
                  {{ selectedPage.pageTitle }} sayfasını silmek istediğinizden
                  emin misiniz?
                </span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn
                  flat
                  label="Evet"
                  @click="deletePage(selectedPage)"
                  color="primary"
                  v-close-popup
                />
                <q-btn flat label="Hayır" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-debugger */

export default {
  name: "Pagelist",
  data() {
    return {
      pages: [],
      confirm: false,
      selectedPage: null,
    };
  },
  created() {
    this.getPages();
  },
  methods: {
    getPages() {
      fetch("https://localhost:5001/api/Page", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          this.pages = response;
        });
    },
    edit(id) {
      this.$router.push("/updatepage/" + id);
    },
    openConfirm(page) {
      this.confirm = true;
      this.selectedPage = page;
    },
    deletePage(page) {
      fetch("https://localhost:5001/api/Page/" + page.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then((response) => {
        if (response.ok == false) {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Hata!",
          });
        } else {
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Sayfa başarıyla silindi",
          });
          this.getPages();
        }
      });
    },
    addNew() {
      this.$router.push("/createpage");
    },
  },
};
</script>

<style>
.button-container {
  max-width: 400px;
  padding: 20px;
}
</style>
