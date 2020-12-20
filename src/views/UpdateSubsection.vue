<template>
  <div class="q-gutter-md" v-if="section">
    <div class="row">
      <div class="col-4">
        <h4 class="q-ma-sm text-left">Update Subsection</h4>
      </div>
    </div>
    <hr />
    <div>
      <h5 class="text-left">Section Name: {{ section.sectionTitle1 }}</h5>
    </div>
    <div class="row">
      <sb-section
        v-for="(section, index) in section.subSections"
        :key="index"
        :section="section"
        :index="index"
        @deleted="deleteSubsection($event)"
        class="col-4"
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
      <q-btn color="primary" label="Update" @click="update()" />
      <q-btn text-color="negative" label="Cancel" @click="cancel()" />
    </div>
  </div>
</template>

<script>
import SbSection from "../components/SbSection";
export default {
  name: "UpdateSubsection",
  props: [],
  components: { SbSection },
  data() {
    return {
      id: undefined,
      section: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getData();
  },
  methods: {
    getData() {
      fetch("https://localhost:5001/api/Page/section/" + this.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          response.subSections.forEach((s) => {
            s.sectionSubTitle1 = s.sectionSubTitle1 || "";
            s.sectionSubTitle2 = s.sectionSubTitle2 || "";
            s.sectionContent = s.sectionContent || "";
          });
          this.section = response;
        });
    },
    addNewSection() {
      this.section.subSections.push({
        sectionSubTitle1: "",
        sectionSubTitle2: "",
        sectionContent: "",
      });
    },
    deleteSubsection(index) {
      this.section.subSections.splice(index, 1);
    },
    cancel() {
      this.$router.push("/pagelist");
    },
    update() {
      fetch(`https://localhost:5001/api/Page/section/${this.id}/subsections`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.section.subSections),
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
  },
};
</script>

<style>
</style>