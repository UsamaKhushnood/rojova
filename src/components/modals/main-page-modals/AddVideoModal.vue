<template>
  <div>
    <b-modal
      :id="'add-new-video-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add New Video"
    >
      <b-row class="align-items-center mb-4">
        <b-input-group prepend="Title">
          <b-form-input
            aria-label="Title"
            class="border border-left-0"
            style="height: 38px"
            placeholder="Title"
          ></b-form-input>
        </b-input-group>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="6">
          <b-input-group prepend="Start Date">
            <b-form-input
              aria-label="Start Date"
              class="border border-left-0"
              style="height: 38px"
              placeholder="Start Date"
              type="date"
            ></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="6">
          <b-input-group prepend="End Date">
            <b-form-input
              aria-label="End Date"
              class="border border-left-0"
              style="height: 38px"
              placeholder="End Date"
              type="date"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="6">
          <b-input-group prepend="Start Time">
            <b-form-input
              aria-label="Start Time"
              class="border border-left-0"
              style="height: 38px"
              placeholder="Start Time"
              type="time"
            ></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="6">
          <b-input-group prepend="End Time">
            <b-form-input
              aria-label="End Time"
              class="border border-left-0"
              style="height: 38px"
              placeholder="End Time"
              type="time"
            ></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row class="align-items-center mb-4">
        <b-col cols="4">
          <label>Video Upload</label>
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
      <b-row class="align-items-center mb-4">
        <b-col cols="4">
          <label>Publish Now</label>
        </b-col>
        <b-col cols="8">
          <button class="btn btn-danger" v-b-modal="'no-publish-modal'">
            No
          </button>
          <NoPublishModal></NoPublishModal>
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
import NoPublishModal from "@/components/modals/main-page-modals/NoPublishModal";
export default {
  components: { NoPublishModal },
  props: ["index"],
};
</script>
