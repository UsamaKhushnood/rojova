<template>
  <div>
    <b-modal
      :id="'edit-admin-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Admin"
    >
      <div class="container mt-2">
        <b-row>
          <div>
            <b-input-group prepend="Name" class="mb-2">
              <b-form-input
                aria-label="Name"
                class="border border-left-0"
                placeholder="Name"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="Last Name" class="mb-2">
              <b-form-input
                aria-label="Last Name"
                class="border border-left-0"
                placeholder="Last Name"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="Email" class="mb-2">
              <b-form-input
                aria-label="Email"
                class="border border-left-0"
                placeholder="Email"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="Phone No" class="mb-2">
              <b-form-input
                aria-label="Phone No"
                class="border border-left-0"
                placeholder="Phone No"
              ></b-form-input>
            </b-input-group>
          </div>
        </b-row>
      </div>
      <div class="container mt-2">
        <b-row class="align-items-center mb-4">
          <b-col cols="3">
            <div>
              <label>Video Upload</label>
            </div>
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
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="secondary" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="md" variant="success" @click="ok()"> Add </b-button>
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
.uploadImage {
  margin-top: 180px;
}
</style>

<script>
export default {
  props: ["index"],
};
</script>
