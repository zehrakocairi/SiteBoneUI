<template>
  <div class="q-gutter-md col-4">
    <q-card bordered class="q-ma-lg">
      <q-card-section>
        <div class="text-h6 q-gutter-sm">
          <div>
            {{ `Section ${index + 1}` }}
          </div>
          <div
            style="position: absolute; right: 10px; top: -3px"
            class="q-gutter-sm"
          >
            <q-btn
              round
              color="negative"
              text-color="white"
              icon="delete"
              @click="deleteSection(index)"
              style="float: right; font-size: 10px"
            />
            <q-btn
              round
              color="primary"
              icon="edit"
              v-if="edit"
              :disable="disableEdit"
              @click="editSection(section.id)"
              style="float: right; font-size: 10px"
            >
              <q-tooltip v-if="disableEdit">
                Edit sayfasına gidebilmek için önce section'ı kaydedin.
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="q-gutter-md">
        <q-input
          outlined
          v-model="section.sectionTitle1"
          label="sectionTitle1"
          :dense="true"
        />
        <q-input
          outlined
          v-model="section.sectionTitle2"
          label="sectionTitle2"
          :dense="true"
        />

        <q-expansion-item
          expand-separator
          icon="article"
          label="Subsection Titles"
        >
          <q-editor
            v-model="section.sectionSubTitle1"
            :dense="$q.screen.lt.md"
            :toolbar="toolbarConfig"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana',
            }"
          />
          <q-editor
            v-model="section.sectionSubTitle2"
            :dense="$q.screen.lt.md"
            :toolbar="toolbarConfig"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana',
            }"
          />
          <q-editor
            v-model="section.sectionContent"
            :dense="$q.screen.lt.md"
            :toolbar="toolbarConfig"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana',
            }"
          />
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          icon="add_photo_alternate"
          label="Images"
        >
          <div class="q-gutter-sm q-py-sm">
            <q-uploader
              url="http://localhost:4444/upload"
              color="teal"
              flat
              bordered
              class="col-4"
            />
            <q-uploader
              url="http://localhost:4444/upload"
              color="teal"
              flat
              bordered
              class="col-4"
            />
            <q-uploader
              url="http://localhost:4444/upload"
              color="teal"
              flat
              bordered
              class="col-4"
            />
          </div>
        </q-expansion-item>
      </q-card-section>
    </q-card>
    <br />
  </div>
</template>

<script>
export default {
  name: "SbSection",
  props: {
    section: { type: Object },
    index: { type: Number },
    edit: { type: Boolean, default: false },
  },
  data() {
    return {
      toolbarConfig: [
        [
          {
            label: this.$q.lang.editor.align,
            icon: this.$q.iconSet.editor.align,
            fixedLabel: true,
            options: ["left", "center", "right", "justify"],
          },
        ],
        // [
        //   "bold",
        //   "italic",
        //   //'strike',
        //   //'underline',
        //   //'subscript',
        //   //'superscript',
        // ],
        // ["token", "hr", "link", "custom_btn"],
        // ["print", "fullscreen"],
        // [
        //   {
        //     label: this.$q.lang.editor.formatting,
        //     icon: this.$q.iconSet.editor.formatting,
        //     list: "no-icons",
        //     options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"],
        //   },
        //   {
        //     label: this.$q.lang.editor.fontSize,
        //     icon: this.$q.iconSet.editor.fontSize,
        //     fixedLabel: true,
        //     fixedIcon: true,
        //     list: "no-icons",
        //     options: [
        //       "size-1",
        //       "size-2",
        //       "size-3",
        //       "size-4",
        //       "size-5",
        //       "size-6",
        //       "size-7",
        //     ],
        //   },
        //{
        //label: $q.lang.editor.defaultFont,
        //icon: $q.iconSet.editor.font,
        //fixedIcon: true,
        //list: 'no-icons',
        //options: [
        //'default_font',
        //'arial',
        //'arial_black',
        //'comic_sans',
        //'courier_new',
        //'impact',
        //'lucida_grande',
        //'times_new_roman',
        //'verdana',
        //],
        //},
        //'removeFormat',
        // ],
        ["quote", "unordered", "ordered", "outdent", "indent"],
        ["undo", "redo"],
        ["viewsource"],
      ],
    };
  },
  computed: {
    disableEdit() {
      return this.section.id ? false : true;
    },
  },
  methods: {
    deleteSection(index) {
      this.$emit("deleted", index);
    },
    editSection(id) {
      this.$router.push("/updatesubsection/" + id);
    },
  },
};
</script>

<style>
</style>