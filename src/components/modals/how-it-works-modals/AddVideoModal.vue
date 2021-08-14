<template>
  <div>
    <b-modal
      :id="'add-how-it-works-video-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add New Video"
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
          <label>Video Upload</label>
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


<script>
export default {
  props: ["index"],
};
</script>
