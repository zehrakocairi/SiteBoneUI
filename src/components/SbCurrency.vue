<template>
  <div class="q-mr-md">
    <span style="font-weight: bold">$</span>
    <span style="border-right: solid white 1px">
      {{ usdRate }}
      <span class="material-icons" v-if="!isHigherUsd"> south </span>
      <span class="material-icons q-px-xs" v-if="isHigherUsd"> north </span>
    </span>

    <span class="material-icons q-ml-xs"> euro_symbol </span>
    <span class="q-px-xs"
      >{{ eurRate }}
      <span class="material-icons" v-if="!isHigherEur"> south </span>
      <span class="material-icons" v-if="isHigherEur"> north </span></span
    >
  </div>
</template>

<script>
export default {
  name: "sbCurrency",
  data() {
    return {
      usdRate: null,
      eurRate: null,
      isHigherUsd: true,
      isHigherEur: true,
    };
  },
  created() {
    this.getCurrency(); // ilkini manual çalıştırıyoruz.
    setInterval(this.getCurrency, 5 * 60 * 1000);
  },
  watch: {
    usdRate(newValue, oldValue) {
      if (newValue > oldValue) {
        this.isHigherUsd = true;
      } else {
        this.isHigherUsd = false;
      }
    },
    eurRate(newValue, oldValue) {
      this.isHigherEur = newValue > oldValue;
    },
  },
  methods: {
    getCurrency() {
      fetch("https://api.exchangeratesapi.io/latest?base=TRY", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          const { USD, EUR } = response.rates;
          this.usdRate = (1 / USD).toFixed(3);
          this.eurRate = (1 / EUR).toFixed(3);
        });
    },
  },
};
</script>

<style>
</style>