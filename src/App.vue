/* eslint-disable no-debugger */
<template>
  <div id="app">
    <div class="">
      <q-layout
        view="lHh Lpr lff"
        container
        style="height: 915px"
        class="shadow-2 rounded-borders"
      >
        <q-header elevated class="bg-primary">
          <q-toolbar>
            <q-btn
              flat
              @click="drawer = !drawer"
              round
              dense
              icon="menu"
              size="15px"
            />
            <q-toolbar-title>SiteBone</q-toolbar-title>
            <sb-currency></sb-currency>
            <q-btn-dropdown color="primary" label="Username" size="13px">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar
                      icon="folder"
                      color="primary"
                      text-color="white"
                      size="24px"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Profile</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar
                      icon="assignment"
                      color="secondary"
                      text-color="white"
                      size="24px"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Log out</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above :width="190" :breakpoint="400">
          <q-scroll-area
            style="
              height: calc(100% - 150px);
              margin-top: 150px;
              border-right: 1px solid #ddd;
            "
          >
            <q-list padding class="menu-list">
              <q-item to="/pagelist" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon size="xs" color="#4a6673 " name="view_agenda" />
                </q-item-section>
                <q-item-section class="text-left"> Pages </q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/users" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon
                    size="xs"
                    color="#4a6673 "
                    name="supervisor_account"
                  />
                </q-item-section>

                <q-item-section class="text-left">Users</q-item-section>
              </q-item>
              <q-separator />

              <q-item to="/systemsettingspage" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon size="xs" color="#4a6673" name="build" />
                </q-item-section>

                <q-item-section class="text-left"
                  >System Settings
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/servicesettingspage" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon
                    size="xs"
                    color="#4a6673 "
                    name="miscellaneous_services"
                  />
                </q-item-section>
                <q-item-section class="text-left"
                  >Service Settings
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/servicesettingsform" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon size="xs" color="#4a6673 " name="help" />
                </q-item-section>
                <q-item-section class="text-left"> Test </q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/test1" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon size="xs" color="#4a6673 " name="help" />
                </q-item-section>
                <q-item-section class="text-left"> Test 1 </q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/test2" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon size="xs" color="#4a6673 " name="help" />
                </q-item-section>
                <q-item-section class="text-left"> Test 2 </q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/samplelandingpage" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon size="xs" color="#4a6673 " name="help" />
                </q-item-section>
                <q-item-section class="text-left"> Sample </q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/login" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon size="xs" color="#4a6673 " name="login" />
                </q-item-section>

                <q-item-section class="text-left"> Login </q-item-section>
              </q-item>
              <q-separator />
              <q-item to="/register" clickable v-ripple>
                <q-item-section avatar class="icon-width">
                  <q-icon size="xs" color="#4a6673 " name="person_add_alt_1" />
                </q-item-section>

                <q-item-section class="text-left"> Register </q-item-section>
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
            <q-footer elevated style="background-color: white; color: #4050b5">
              <p class="text-center q-ma-md">Created by Zehra</p>
            </q-footer>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>
<script>
import sbCurrency from "./components/SbCurrency";

export default {
  components: { sbCurrency },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {},
};
</script>
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
.icon-width {
  min-width: 0px !important;
}
.menu-list {
  margin: 5px;
}
.menu-list .q-item {
  padding-top: 0;
  padding-bottom: 0;
  min-height: 45px;
  margin: 7px 0;
}
.q-item.q-router-link--active,
.q-item--active {
  border-left: 4px solid !important ;
  border-radius: 4px;
}
</style>
