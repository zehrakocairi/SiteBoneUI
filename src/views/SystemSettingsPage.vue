<template>
  <div class="q-gutter-md">
    <div class="row">
      <div class="col-4">
        <h4 class="text-left q-ma-sm">System Settings Page</h4>
      </div>
    </div>
    <hr />
    <div class="q-pa-md">
      <q-table
        title="System Settings"
        :data="data"
        :columns="columns"
        row-key="id"
      >
        <template v-slot:body-cell-id="props">
          <q-td :props="props">
            <div>
              <q-btn
                outline
                color="negative"
                :label="props.value"
                @click="goToDetails(props.value)"
                size="xs"
              />
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-custombuttons="props">
          <q-td :props="props">
            <div>
              <q-btn
                round
                rounded
                flat
                color=""
                text-color="negative"
                icon="delete"
                @click="openConfirm(props)"
                size="sm"
              >
                <q-tooltip
                  anchor="center right"
                  self="center left"
                  :offset="[10, 10]"
                >
                  <strong>Delete</strong>
                </q-tooltip>
              </q-btn>
            </div>
          </q-td>
        </template>
      </q-table>
      <q-dialog v-model="confirm" persistent>
        <q-card v-if="selectedSettings">
          <q-card-section class="row items-center">
            <q-avatar icon="warning" color="primary" text-color="white" />
            <span class="q-ml-sm">
              {{ selectedSettings.name }} ayarını silmek istediğinizden emin
              misiniz?
            </span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Evet"
              @click="deleteSettings(selectedSettings)"
              color="primary"
              v-close-popup
            />
            <q-btn flat label="Hayır" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="alert">
        <q-card class="q-pa-md" style="min-width: 500px">
          <q-card-section>
            <div class="text-h6">Edit Setting</div>
            <div class="text-grey">System setting</div>
          </q-card-section>
          <q-card-section class="q-gutter-md">
            <q-input
              outlined
              :dense="true"
              v-model="selectedSettings.name"
              label="name"
            />
            <q-input
              v-model="selectedSettings.value"
              outlined
              type="textarea"
              label="value"
            />
          </q-card-section>
          <q-card-actions align="right" class="q-mr-sm">
            <q-btn
              label="Update"
              color="primary"
              size="sm"
              @click="update(selectedSettings.id)"
            />
            <q-btn
              text-color="negative"
              label="Cancel"
              size="sm"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemSettingsPage",
  data() {
    return {
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
          name: "name",
          align: "center",
          label: "Name",
          field: "name",
          sortable: true,
        },
        { name: "value", label: "Value", field: "value", sortable: true },
        {
          name: "custombuttons",
          align: "center",
          label: "Custom Buttons",
          field: "custombuttons",
          sortable: false,
        },
      ],
      data: [],
      alert: false,
      selectedSettings: {},
      confirm: false,
    };
  },
  created() {
    this.getData();
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    goToDetails(val) {
      this.alert = true;
      this.setSelectedSetting(val);
    },
    openConfirm(val) {
      this.confirm = true;
      this.setSelectedSetting(val.row.id);
    },
    setSelectedSetting(id) {
      this.selectedSettings = this.data.find((item) => {
        return item.id == id;
      });
    },
    getData() {
      fetch("https://localhost:5001/api/SystemSetting", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          this.data = response;
        });
    },
    update(id) {
      fetch("https://localhost:5001/api/SystemSetting/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.selectedSettings),
      }).then((response) => {
        if (response.status == 400) {
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
            message: "Sayfa başarıyla güncellendi",
          });
          this.alert = false;
        }
      });
    },
    deleteSettings(set) {
      fetch("https://localhost:5001/api/SystemSetting/" + set.id, {
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
            message: "Deleted",
          });
        } else {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Hata!",
          });
          this.confirm = false;
        }
        this.getData();
      });
    },
  },
};
</script>

<style>
</style>