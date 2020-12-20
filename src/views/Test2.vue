<template>
  <div class="q-pa-lg">
    <q-card class="my-card card-wrap">
      <q-card-section class="row">
        <div class="col-8 q-px-md">
          <div class="logo-wrapper">
            <div class="row items-center">
              <img
                class="logo-dark q-mr-md"
                src="../assets/logo-dark.png"
                alt=""
              />
              <h5 class="text-weight-bold" style="letter-spacing: 1px">
                Kodilist
              </h5>
            </div>
          </div>
          <div>
            <div class="row items-center">
              <h6 class="text-weight-medium q-mb-sm q-mt-lg">
                Lets get connected across the globe.
              </h6>
            </div>
            <div class="row">
              <div class="col-6">
                <p class="text-left" style="font-size: 14px">
                  Social media is the ultimate equaliser. It gives a voice and a
                  platform to anyone willing to engage.
                </p>
                <img class="humans q-mt-sm" src="../assets/img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 q-pa-md">
          <q-card class="my-card login-section">
            <q-card-section class="q-px-md q-py-xl">
              <div class="row justify-center q-mt-md">
                <h4
                  class="q-mb-xs text-weight-bold"
                  style="letter-spacing: 1px"
                >
                  Welcome
                </h4>
                <p>Sign in to continue to our aplication.</p>
              </div>
              <div class="q-gutter-lg q-px-lg">
                <q-input
                  v-model="text"
                  placeholder="Email id"
                  class="inputLine"
                >
                  <template v-slot:append>
                    <span class="material-icons" style="color: white">
                      mail_outline
                    </span>
                  </template>
                </q-input>
                <q-input
                  v-model="password"
                  placeholder="Password"
                  class="inputLine"
                >
                  <template v-slot:append>
                    <span
                      class="material-icons"
                      style="color: white"
                      @click="showPassword = !showPassword"
                      v-if="showPassword"
                    >
                      visibility
                    </span>
                    <span
                      class="material-icons"
                      style="color: white"
                      @click="showPassword = !showPassword"
                      v-if="!showPassword"
                    >
                      visibility_off
                    </span>
                  </template>
                </q-input>
              </div>
              <div class="row justify-end q-mt-sm">
                <p class="col-6">Forgot password?</p>
              </div>
              <div class="q-mt-lg">
                <div class="signUp row justify-center items-center">
                  <span class="text-weight-bolder">Sign In</span>
                </div>
              </div>

              <div class="q-mt-lg q-mb-xl"></div>
              <div class="row justify-center q-pt-xl">
                <span class="text-caption">Don't have an account ?</span>
                <span class="text-weight-bold q-ml-xs"> Sign up</span>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "test2",
  data() {
    return {
      text: "",
      password: "",
      showPassword: true,
    };
  },
};
</script>

<style>
.card-wrap {
  height: auto;
}
.login-section {
  height: auto;
  width: 350px;
  background: #2c2958;
  color: white;
  border-radius: 7px;
}
.q-field__native {
  color: white;
}
.inputLine .q-field__control:before {
  border-bottom: 0.5px solid white !important;
}
.signUp {
  height: 30px;
  width: 120px;
  background: white;
  border-radius: 20px;
  color: #2c2958;
  margin: auto;
  cursor: pointer;
}
.signUp:hover {
  background: #e0e0e0;
  opacity: 0.3px;
}
.logo-dark {
  height: 50px;
  width: 50px;
}
.humans {
  width: 750px;
  height: 380px;
}
</style>