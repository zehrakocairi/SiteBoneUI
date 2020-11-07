<template>
  <div>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="merhabaDe()" class="bg-purple-3">Action 1 </q-btn>
        <q-btn flat class="button-text-color">Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "Sbcard",
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
  methods: {
    merhabaDe() {
      alert("merhaba!");
    },
  },
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 250px;
}
.button-text-color {
  color: #943541;
}
</style>
