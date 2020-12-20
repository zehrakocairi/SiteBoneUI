<template>
  <q-page class="row justify-center items-start">
    <q-card class="my-card sb-medium-inner">
      <q-card-section>
        <div class="row items-center">
          <div class="col">
            <span class="float-left page-title q-ml-md">Title</span>
          </div>
          <div class="col">
            <div class="row items-center float-right q-qutter-xs">
              <q-input
                size="sm"
                outlined
                v-model="text"
                label="Label"
                maxlength="12"
                :dense="true"
                class="float-right q-mr-sm"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="search" />
                </template>
              </q-input>
              <q-btn-dropdown
                color="primary"
                label="Download"
                class="float-right"
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Videos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Articles</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-mt-md">
        <div class="row q-gutter-md">
          <div class="col">
            <q-input outlined v-model="name" :dense="true" />
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="lastName"
              :dense="true"
              :disable="shouldLastnameEnable ? false : true"
              :class="shouldLastnameEnable ? 'primary-border' : ''"
            />
          </div>
          <div class="col">
            <q-input
              outlined
              v-model="email"
              :dense="true"
              :disable="shouldEmailEnable ? false : true"
              :class="shouldEmailEnable ? 'primary-border' : ''"
            />
          </div>
        </div>
        <div class="row q-mt-lg">
          <div class="col-4 text-left"><q-toggle v-model="isNameOpen" /></div>
          <div class="col-8">
            <q-input
              v-show="isNameOpen"
              outlined
              :dense="true"
              class="q-ml-sm"
            />
          </div>
        </div>
        <div
          style="background-color: #eeeff0; border-radius: 9px; cursor: pointer"
          class="row q-mt-lg full-width q-pa-md justify-center"
          @click="toggle()"
        >
          <div class="col-1 margin-auto" style="">
            <span
              class="material-icons"
              style="font-size: 35px; color: #e13950"
            >
              filter_list
            </span>
          </div>
          <div class="col-2 text-left margin-auto">
            <span class="">Adres seçiniz</span>
          </div>
          <div class="col margin-auto" v-if="show">
            <span class="material-icons float-right arrow-icon">
              keyboard_arrow_down
            </span>
          </div>
          <div class="col margin-auto" v-if="!show">
            <span class="material-icons float-right arrow-icon">
              keyboard_arrow_up
            </span>
          </div>
        </div>

        <div class="q-px-md q-py-xs">
          <q-card
            class="my-card q-mt-md q-pa-md q-gutter-sm sb-shadow-up card-default"
            :class="show ? 'card-open' : ''"
          >
            <div v-for="(address, index) in addresses" :key="index">
              <div class="row justify-center">
                <q-toggle
                  v-model="address.isAnd"
                  checked-icon="check"
                  color="red"
                  unchecked-icon="clear"
                  v-if="address.isAnd == null ? false : true"
                />
              </div>
              <q-card-section
                @mouseover="address.deleteClass = 'show-delete-icon'"
                @mouseleave="address.deleteClass = ''"
              >
                <div class="row justify-end">
                  <span
                    class="material-icons"
                    :class="address.deleteClass"
                    style="
                      color: #e03f47;
                      cursor: pointer;
                      visibility: hidden;
                      position: absolute;
                    "
                    @click="deleteAddress(index)"
                  >
                    delete
                  </span>
                </div>
                <div class="row q-gutter-sm">
                  <div class="col-6 q-ml-md">
                    <q-select
                      outlined
                      v-model="address.country"
                      :options="selectCountry"
                      :dense="true"
                      label="Outlined"
                      @input="
                        address.city = null;
                        address.district = null;
                      "
                    />
                  </div>
                  <div class="col">
                    <q-select
                      outlined
                      v-model="address.city"
                      :options="getCities(address.country)"
                      :dense="true"
                      label="Outlined"
                      :disable="
                        address.country == null || address.country == ''
                          ? true
                          : false
                      "
                      @input="address.district = null"
                    />
                  </div>
                  <div class="col q-mr-md">
                    <q-select
                      outlined
                      v-model="address.district"
                      :options="getDistrict(address.city)"
                      :dense="true"
                      label="Outlined"
                      :disable="
                        address.city == null || address.city == ''
                          ? true
                          : false
                      "
                    />
                  </div>
                </div>
              </q-card-section>
            </div>
            <div>
              <span
                class="material-icons q-mt-sm q-pa-sm"
                style="
                  border: 1px solid gray;
                  border-radius: 3px;
                  cursor: pointer;
                "
                @click="addAddress()"
              >
                add
              </span>
            </div>
          </q-card>
        </div>
        <div
          class="test1"
          :class="toggleState ? 'bg-pale' : ''"
          @click="toggleState = !toggleState"
        >
          <div class="test2" :class="toggleState ? 'toggle-open' : ''"></div>
        </div>
        <div
          class="z-toggle1 q-mt-md"
          :class="toggleRight ? 'toggleOnLeft' : ''"
          @click="toggleRight = !toggleRight"
        >
          <div
            class="z-toggle2"
            :class="toggleRight ? 'toggleKeyOnLeft' : ''"
          ></div>
        </div>
        <div class="z-dropdown q-mt-md" @click="up = !up">
          <div class="row float-left items-center">
            <div class="drop col-10 q-ml-md text-left">DROPDOWN</div>
            <div class="col drop-icon" v-if="!up">
              <span class="material-icons q-mr-md"> arrow_drop_down </span>
            </div>
            <div class="col drop-icon" v-if="up">
              <span class="material-icons q-mr-md"> arrow_drop_up </span>
            </div>
          </div>
        </div>
        <div class="drop-select shadow-2" v-if="up">
          <div class="row">test</div>

          <div class="row">test</div>
          <div class="row">test</div>
        </div>
      </q-card-section>
    </q-card>
    <div class="accessibility">
      <span class="material-icons access"> camera_alt </span>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "test1",
  data() {
    return {
      toggleState: false,
      toggleRight: false,
      text: "",
      isNameOpen: true,
      show: false,
      up: false,
      test: "ahmet",
      model: null,
      name: "",
      lastName: "",
      email: "",

      // countries: ["England", "Germany", "Georgia", "USD"],
      // cities: ["London", "Berlin", "Athens", "Georgia"],
      // districts: ["Epsom", "Kreuzberg", "Pireos", "Clay"],
      addresses: [
        { country: "", city: "", district: "", isAnd: null, deleteClass: "" },
      ],
      locations: [
        { country: "turkey", city: "istanbul", district: "kadikoy" },
        { country: "turkey", city: "izmir", district: "bornova" },
        { country: "turkey", city: "izmir", district: "buca" },
        { country: "england", city: "london", district: "epsom" },
        { country: "england", city: "cambridge", district: "manchester" },
        { country: "germany", city: "berlin", district: "kreuzberg" },
      ],
    };
  },
  computed: {
    selectCountry() {
      return [
        ...new Set(
          this.locations.map((loc) => {
            return loc.country;
          })
        ),
      ];
    },
    shouldLastnameEnable() {
      return this.name.length >= 10;
    },
    shouldEmailEnable() {
      return this.lastName.length >= 10;
    },
  },
  watch: {
    shouldLastnameEnable(newValue) {
      if (newValue == false) this.lastName = "";
    },
    shouldEmailEnable(newValue) {
      if (newValue == false) this.email = "";
    },
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    // onNameInput() {
    //   if (this.name.length <= 10) this.lastName = "";
    // }, name e @input="onNameInput" koyarsak watch ın yaptığını yapar.
    getCities(country) {
      return [
        ...new Set(
          this.locations.filter((l) => l.country === country).map((l) => l.city)
        ),
      ];
    },
    getDistrict(city) {
      return [
        ...new Set(
          this.locations
            .filter((l) => {
              return l.city === city;
            })
            .map((l) => l.district)
        ),
      ];
    },
    addAddress() {
      this.addresses.push({
        country: "",
        city: "",
        district: "",
        isAnd: false,
        deleteClass: "",
      });
    },
    deleteAddress(index) {
      this.addresses.splice(index, 1);
    },
  },
};
</script>

<style>
.sb-medium-inner {
  width: 90%;
  max-width: 1000px;
  min-height: 500px;
}
.page-title {
  font-size: 1.4rem;
  line-height: 1.9rem;
  color: #4050b5;
}
.sb-shadow-up {
  box-shadow: -1px 4px 8px 0px #e0e9ee;
}
.show-delete-icon {
  visibility: visible !important;
  font-size: 21px;
  right: 10px;
  top: -3px;
}
.arrow-icon {
  font-size: 24px;
  border-radius: 50px;
  background-color: white;
  color: rgb(225, 57, 80);
  padding: 18px;
}
.margin-auto {
  margin: auto !important;
}
.primary-border {
  border: 1px solid #4050b5;
  border-radius: 5px;
}
.access {
  border: 4px solid #4050b5;
  border-radius: 50%;
  padding: 30px;
  font-size: 35px;
  color: #4050b5;
  transition: all 0.5s ease;
}
.accessibility {
  display: inline-block;
  position: absolute;
  transition: border 0.5s ease, padding 0.5 ease;
}
.access:hover {
  background-color: #4050b5;
  color: white;
  font-size: 45px;
}
.accessibility:hover {
  border: 3px solid #4050b5;
  border-radius: 50%;
  padding: 17px;
}

.test1 {
  width: 50px;
  height: 20px;
  background: yellowgreen;
  position: relative;
  border-radius: 10px;
  transition: all 0.3s ease;
}
.test2 {
  width: 12px;
  height: 12px;
  border-radius: 20px;
  background: white;
  position: absolute;
  left: 4px;
  top: 4px;
  transition: all 0.3s ease;
}
.toggle-open {
  left: 36px;
  background: #4050b5;
}
.bg-pale {
  background: ghostwhite;
}
.z-toggle1 {
  width: 36px;
  height: 14px;
  background: #99a1d8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
}
.z-toggle2 {
  left: -2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4050b5;
  transition: all 0.3s ease;
  position: absolute;
  box-shadow: 1px 1px 1px 1px #4050b5;
}
.toggleOnLeft {
  background: #9f9f9f;
}
.toggleKeyOnLeft {
  background: #ffffff;
  left: 18px;
  box-shadow: 1px 1px 1px 1px #888888;
}
.card-default {
  transform: translate(0);
  transition: all 0.8s ease;
}
.card-open {
  transform: translate(100%, 100%);
}
.z-dropdown {
  height: 40px;
  width: 180px;
  background: #8e24a0;
  border-radius: 5px;
  color: #ffffff;
  display: flex;
}
.drop {
  font-weight: bold;
  letter-spacing: 0.5px;
}
.drop-icon {
  font-size: 25px;
}
.drop-select {
  height: 120px;
  width: 180px;
  background-color: white;
  border-radius: 5px;
}
</style>