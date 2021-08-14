<template>
  <div>
    <b-modal
      :id="'add-gifs-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add New Smilie"
    >
      <b-row class="align-items-center mb-4">
        <b-input-group prepend="Title" class="mb-2" style="height: 30px">
          <b-form-input
            aria-label="Title"
            class="border border-left-0"
            placeholder="Title"
          ></b-form-input>
        </b-input-group>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Image Upload</label>
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
