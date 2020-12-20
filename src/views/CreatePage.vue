<template>
  <div class="q-gutter-md">
    <div class="row">
      <h4 class="q-ma-sm text-left">Create Page</h4>
    </div>
    <hr />
    <div class="row q-gutter-md">
      <div class="col-6 q-gutter-md">
        <q-input filled v-model="page.pageTitle" label="pagetitle" />
        <q-input filled v-model="page.url" label="url" />
        <q-input filled v-model="page.slug" label="slug" />
        <q-input filled v-model="page.language" label="language" />
      </div>
    </div>
    <div class="row">
      <div
        class="q-gutter-md col-4"
        v-for="(section, index) in page.sections"
        :key="'section-' + index"
      >
        <q-card bordered class="q-ma-lg">
          <q-card-section>
            <div class="text-h6">{{ `Section ${index + 1}` }}</div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="q-gutter-md">
            <q-input
              filled
              v-model="section.sectionTitle1"
              label="sectionTitle1"
            />
            <q-input
              filled
              v-model="section.sectionTitle2"
              label="sectionTitle2"
            />
            <q-input
              filled
              v-model="section.sectionSubTitle1"
              label="sectionSubTitle1"
            />
            <q-input
              filled
              v-model="section.sectionSubTitle2"
              label="sectionSubTitle1"
            />
            <q-input
              filled
              v-model="section.sectionContent"
              label="sectionContent"
            />
          </q-card-section>
        </q-card>
        <br />
      </div>
    </div>
    <div class="text-right q-mr-lg q-gutter-sm">
      <q-btn color="primary" label="Create" @click="addPage()" />
      <q-btn text-color="secondary" label="Cancel" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Createpage",
  data() {
    return {
      id: undefined,
      page: {
        id: "",
        pageTitle: "",
        url: "",
        slug: "",
        language: "",
        sections: [
          {
            sectionTitle1: "",
            sectionTitle2: "",
            sectionSubTitle1: "",
            sectionSubTitle2: "",
            sectionContent: "",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    addPage() {
      let page = {
        id: this.page.id,
        pageTitle: this.page.pageTitle,
        url: this.page.url,
        slug: this.page.slug,
        language: this.page.language,
        sections: this.page.sections,
      };
      fetch("https://localhost:5001/api/Page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(page),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.error) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: response.error,
            });
          } else {
            this.$q.notify({
              color: "green-4",
              textColor: "white",
              icon: "cloud_done",
              message: "Yeni kullanıcı oluşturuldu",
            });
            this.$router.push("/pagelist");
          }
        });
    },
  },
};
</script>
