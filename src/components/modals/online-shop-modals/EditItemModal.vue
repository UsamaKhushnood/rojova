<template>
  <div>
    <b-modal
      :id="'edit-online-shop-item-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Item"
    >
      <div class="container mt-2">
        <b-row>
          <b-col cols="4">
            <div>
              <label class="mt-3 mb-4">Select Category</label>
            </div>
            <div>
              <label class="mt-3">Title</label>
            </div>
            <div>
              <label class="mt-3">Banner Upload</label>
            </div>
          </b-col>
          <b-col cols="8">
            <div class="musicCategory mt-3">
              <b-form-select
                v-model="selected"
                :options="options"
                class="selectBox"
              ></b-form-select>
            </div>
            <div class="col-sm-7 controls mt-3">
              <input
                id="title"
                type="title"
                name="categ"
                placeholder="Title"
                class="form-control col-xs-12"
              />
            </div>
            <div class="uploadFile mt-3">
              <b-form-file
                v-model="file1"
                :state="Boolean(file1)"
                placeholder="Select a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </div>
          </b-col>
        </b-row>
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

<style scoped>
.selectBox {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px;
}
</style>

<script>
export default {
  props: ["index"],
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      file1: null,
      file2: null,
      // statusSelected: null,
      // statusOption: [
      //     { value: null, text: "Please select an option"},
      //     { value: "a", text: "Publish"  },
      //     { value: "b", text: "UnPublish"  }
      // ]
    };
  },
};
</script>
