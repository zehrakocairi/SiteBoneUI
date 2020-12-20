<template>
  <div class="q-gutter-md">
    <div class="row">
      <div class="col-4">
        <h4 class="q-ma-sm text-left" v-if="isUpdatePage">Update Page</h4>
        <h4 class="q-ma-sm text-left" v-if="!isUpdatePage">Create Page</h4>
      </div>
    </div>
    <hr />
    <div class="row q-gutter-md full-width">
      <div class="col-6 q-gutter-md">
        <q-input
          v-model="page.pageTitle"
          label="pagetitle"
          outlined
          :dense="true"
        />
        <q-input v-model="page.url" label="url" outlined :dense="true" />
        <q-input v-model="page.slug" label="slug" outlined :dense="true" />
        <q-input
          v-model="page.language"
          label="language"
          outlined
          :dense="true"
        />
      </div>
    </div>
    <div class="row">
      <sb-section
        v-for="(section, index) in page.sections"
        :key="'section-' + index"
        :section="section"
        :index="index"
        :edit="true"
        @deleted="deleteSection($event)"
      ></sb-section>
      <div class="col-4 q-gutter-md">
        <q-card class="q-ma-lg">
          <a href="" @click.prevent="addNewSection()">
            <q-card-section>
              <q-responsive :ratio="1">
                <div class="rounded-borders text-black flex flex-center">
                  <span
                    class="material-icons text-primary"
                    style="font-size: 2rem"
                  >
                    add
                  </span>
                </div>
              </q-responsive>
            </q-card-section>
          </a>
        </q-card>
      </div>
    </div>
    <div class="text-right q-mr-lg q-gutter-sm">
      <q-btn
        color="primary"
        label="Update"
        v-if="isUpdatePage"
        @click="update()"
      />
      <q-btn
        color="primary"
        label="Create"
        v-if="!isUpdatePage"
        @click="create()"
      />
      <q-btn text-color="negative" label="Cancel" @click="cancel()" />
    </div>
  </div>
</template>

<script>
import SbSection from "../components/SbSection";
export default {
  name: "PageForm",
  components: { SbSection },
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
            subSections: [
              {
                sectionTitle1: "",
                sectionTitle2: "",
                sectionSubTitle1: "",
                sectionSubTitle2: "",
                sectionContent: "",
              },
            ],
          },
        ],
      },
      isUpdatePage: false,
    };
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.isUpdatePage = true;
    }
    if (this.isUpdatePage) {
      this.getPage();
    }
  },
  methods: {
    getPage() {
      fetch("https://localhost:5001/api/Page/" + this.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          this.page.id = response.id;
          this.page.pageTitle = response.pageTitle;
          this.page.url = response.url;
          this.page.slug = response.slug;
          this.page.language = response.language;
          this.page.sections = response.sections || [];
          this.page.sections.map((item) => {
            item.sectionSubTitle1 = item.sectionSubTitle1 ?? "";
            item.sectionSubTitle2 = item.sectionSubTitle2 ?? "";
            item.sectionContent = item.sectionContent ?? "";
            return item;
          });
        });
    },
    addNewSection() {
      this.page.sections.push({
        sectionSubTitle1: "",
        sectionSubTitle2: "",
        sectionContent: "",
      });
    },
    deleteSection(index) {
      this.page.sections.splice(index, 1);
    },
    update() {
      let page = {
        id: this.page.id,
        pageTitle: this.page.pageTitle,
        url: this.page.url,
        slug: this.page.slug,
        language: this.page.language,
        sections: this.page.sections,
      };
      fetch("https://localhost:5001/api/Page/" + this.page.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(page),
      }).then((response) => {
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
            message: "Sayfa başarıyla güncellendi",
          });
          this.$router.push("/pagelist");
        }
      });
    },
    cancel() {
      this.$router.push("/pagelist");
    },
    create() {
      let page = {
        pageTitle: this.page.pageTitle,
        url: this.page.url,
        slug: this.page.slug,
        language: +this.page.language,
        sections: this.page.sections,
      };
      fetch("https://localhost:5001/api/Page/" + this.page.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(page),
      }).then((response) => {
        debugger;
        if (response.error) {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: response.message,
          });
        } else {
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: response.message,
          });
          this.$router.push("/pagelist");
        }
      });
    },
  },
};
</script>

<style></style>
