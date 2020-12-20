<template>
  <div>
    <div class="row">
      <div class="col-4">
        <h4 class="q-ma-sm text-left">Service Settings Form</h4>
      </div>
    </div>
    <hr />
    <br />
    <div class="q-pt-xl">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <q-card class="my-card q-pa-md">
            <q-card-section class="q-gutter-md">
              <q-input outlined v-model="text" label="Filled" :dense="true" />
              <q-input outlined v-model="text" label="Filled" :dense="true" />
              <q-input outlined v-model="text" label="Filled" :dense="true" />
              <q-input outlined v-model="text" label="Filled" :dense="true" />
              <div class="text-left">
                <q-checkbox
                  size="sm"
                  v-model="shape"
                  val="sm"
                  label="Size 'sm'"
                />
              </div>
              <div class="text-left">
                <q-toggle size="sm" v-model="value" />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceSettingsForm",
  data() {
    return {
      text: "",
      shape: ["line"],
      value: true,
    };
  },
};
</script>


<style>
</style>