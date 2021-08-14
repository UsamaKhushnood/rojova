<template>
  <div>
    <b-modal
      :id="'add-category-modal'"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="Add Category"
    >
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Category Name</label>
        </b-col>
        <b-col cols="9">
          <input
            type="text"
            class="form-control border"
            placeholder="Category Name"
          />
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Upload Image</label>
        </b-col>
        <b-col cols="9">
          <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Select a file or drop it here..."
            drop-placeholder="Drop file here..."
            class="form-control border"
          ></b-form-file>
        </b-col>
      </b-row>

      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="primary" @click="ok()">
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