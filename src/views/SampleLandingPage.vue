<template>
  <div class="wrapper">
    <div class="container">
      <div class="navbar row q-pt-lg">
        <div class="col-2 text-left">
          <span>SKS Funding</span>
        </div>
        <div class="col-10">
          <span class="q-mr-lg">HOME</span>
          <span class="q-mr-lg">ABOUT</span>
          <span class="q-mr-lg">HOW IT WORK</span>
          <span class="q-mr-lg">BENEFITS</span>
          <span class="q-mr-lg">RECENTLY CLAIMED</span>
          <span class="q-mr-xl">HAPPY FACE</span>
          <q-btn outline class="q-mr-lg" color="primary" label="Outline" />
          <q-btn color="white" text-color="black" label="Standard" />
        </div>
      </div>
      <div class="row main-section">
        <div class="col-6 q-mt-xl text-left">
          <h2 class="text-weight-bolder" style="line-height: 60px">
            Make smarter <br />
            decisions for your <br />
            better family life
          </h2>
          <h4 style="line-height: 60px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h4>
          <q-btn
            class="q-mt-xl q-px-lg"
            size="lg"
            unelevated
            color="deep-orange"
            label="claim now"
          />
        </div>
        <div class="col-6"></div>
      </div>
    </div>
    <div class="row">
      <img class="instagram-logo" src="../assets/instagram.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SampleLandingPage",
};
</script>

<style>
.wrapper {
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
}
.container {
  margin-left: 80px;
}
.navbar {
  color: #253179;
  font-weight: 500;
  cursor: pointer;
}
.wrapper {
  background-image: url("../assets/background-image.jpeg");
  background-size: cover;
  width: 100%;
  height: 100vh;
}
.instagram-logo {
  width: 100px;
}
</style>