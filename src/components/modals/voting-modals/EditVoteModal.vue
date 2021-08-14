<template>
  <div>
    <b-modal
      :id="'edit-vote-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Vote "
    >
      <div class="modal-body">
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <strong>En</strong>
              </template>
              <b-card-text>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Title</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Title"
                    />
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Banner Upload</label>
                  </b-col>
                  <b-col cols="9">
                    <div>
                      <b-form-file
                        v-model="file1"
                        :state="Boolean(file1)"
                        placeholder="Select a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        class="form-control border"
                      ></b-form-file>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Select Category</label>
                  </b-col>
                  <b-col cols="9">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <vue-editor></vue-editor>
                </b-row>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <strong>DE</strong>
              </template>
              <b-card-text>
                <p>Working</p>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <strong>KR</strong>
              </template>
              <b-card-text>
                <p>Working</p>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <strong>TR</strong>
              </template>
              <b-card-text>
                <p>Working</p>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <strong>IR</strong>
              </template>
              <b-card-text>
                <p>Working</p>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="success" @click="ok()">
          Save and add new
        </b-button>
        <b-button size="md" variant="primary" @click="cancel()">
          Save and close
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
    props: ['index'],
  data() {
    return {
      file1: null,
      file2: null,
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>
