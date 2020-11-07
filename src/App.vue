/* eslint-disable no-debugger */
<template>
  <div id="app">
    <div class="">
      <q-layout
        view="lHh Lpr lff"
        container
        style="height: 820px"
        class="shadow-2 rounded-borders"
      >
        <q-header elevated class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>SiteBone</q-toolbar-title>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above :width="160" :breakpoint="400">
          <q-scroll-area
            style="
              height: calc(100% - 150px);
              margin-top: 150px;
              border-right: 1px solid #ddd;
            "
          >
            <q-list padding>
              <q-item clickable v-ripple @click="goToPage('/')">
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section> Home </q-item-section>
              </q-item>

              <q-item active clickable v-ripple @click="goToPage('/about')">
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>

                <q-item-section> About </q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="goToPage('/contact')">
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>

                <q-item-section> Contact </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="goToPage('/login')">
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section> login </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>

          <q-img
            class="absolute-top"
            src="https://cdn.quasar.dev/img/material.png"
            style="height: 150px"
          >
            <div class="absolute-center bg-transparent">
              <q-avatar size="90px" class="q-mb-sm">
                <img src="./assets/logo.png" />
              </q-avatar>
            </div>
          </q-img>
        </q-drawer>

        <q-page-container>
          <q-page padding>
            <router-view />
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    goToPage(url) {
      this.$router.push(url);
    },
  },
};
</script>
>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
