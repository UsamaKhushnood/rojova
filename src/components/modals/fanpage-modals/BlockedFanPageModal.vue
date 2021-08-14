<template>
  <div>
    <b-modal
      :id="'blocked-fanpage-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Block Reason"
    >
      <b-row class="align-items-center mt-4 mb-4">
        <b-col cols="4">
          <label>Select Denied Reason</label>
        </b-col>
        <b-col cols="8">
          <b-form-select
            v-model="selected"
            :options="options"
            class="form-control border"
          ></b-form-select>
        </b-col>
      </b-row>
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
