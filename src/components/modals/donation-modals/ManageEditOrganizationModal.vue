<template>
  <div>
    <b-modal
      :id="'manage-edit-organization-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Organization"
    >
      <b-row class="align-items-center mb-4">
        <b-col cols="4">
          <label>Organization Name</label>
        </b-col>
        <b-col cols="8">
          <input
            type="text"
            class="form-control border"
            placeholder="Organization Name"
          />
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="4">
          <label>Bank Account</label>
        </b-col>
        <b-col cols="8">
          <input
            type="text"
            class="form-control border"
            placeholder="Bank Account"
          />
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="4">
          <label>Paypal Account</label>
        </b-col>
        <b-col cols="8">
          <input
            type="text"
            class="form-control border"
            placeholder="Paypal Account"
          />
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="4">
          <label>Address</label>
        </b-col>
        <b-col cols="8">
          <input
            type="text"
            class="form-control border"
            placeholder="Address"
          />
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="4">
          <label>Upload</label>
        </b-col>
        <b-col cols="8">
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
  padding-right: 114px;
}
.firstName,
.lastName,
.city {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.status {
  margin-top: 185px !important;
}
</style>

<script>
export default {
  props: ["index"],
  data() {
    return {
      //   selected: null,
      //   options: [
      //     { value: null, text: "Please select an option" },
      //     { value: "a", text: "This is First option" },
      //     { value: "b", text: "Selected Option" },
      //     { value: { C: "3PO" }, text: "This is an option with object value" },
      //     { value: "d", text: "This one is disabled", disabled: true },
      //   ],
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
