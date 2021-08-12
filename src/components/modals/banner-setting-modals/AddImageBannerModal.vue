<template>
  <div>
    <b-modal
      :id="'add-image-banner-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add New Banner"
    >
      <div class="container mt-2">
        <b-row>
          <div>

            
            
            <b-input-group prepend="Title" class="mb-2" style="height: 30px;">
              <b-form-input aria-label="Title" class="border border-left-0" placeholder="Title"></b-form-input>
            </b-input-group>
            <div class="d-flex w-100 mt-4">
                 <b-input-group prepend="Start Date" class="mb-2 me-3" style="height: 30px;">
              <b-form-input aria-label="Start Date" class="border border-left-0" placeholder="Start Date" type="date"></b-form-input>
            </b-input-group>
            <b-input-group prepend="End Date" class="mb-2" style="height: 30px;">
              <b-form-input aria-label="End Date" class="border border-left-0" placeholder="End Date" type="date"></b-form-input>
            </b-input-group>
            </div>
            <div class="d-flex w-100 mt-4">
                 <b-input-group prepend="Start Time" class="mb-2 me-3" style="height: 30px;">
              <b-form-input aria-label="Start Time" class="border border-left-0" placeholder="Start Time" type="time"></b-form-input>
            </b-input-group>
            <b-input-group prepend="End Time" class="mb-2" style="height: 30px;">
              <b-form-input aria-label="End Time" class="border border-left-0" placeholder="End Time" type="time"></b-form-input>
            </b-input-group>
            </div>
           
          </div>
        </b-row>

        <b-row>
          <b-col cols="4">
            <div>
              <label class="uploadImage">Image Upload</label>
            </div>
          </b-col>
          <b-col cols="8">
            
            <div class="uploadFile mt-3">
              <div
                class="fileinput-preview thumbnail"
                data-trigger="fileinput"
                style="
                  width: 200px;
                  height: 150px;
                  line-height: 150px;
                  border: 1px solid #ddd;
                "
              ></div>
              <div class="mt-2"></div>
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
        <b-button size="md" variant="secondary" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="md" variant="success" @click="ok()">
          Add
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
.uploadImage {
    margin-top: 180px;
}
</style>

<script>

export default {
  props: ["index"],

};
</script>
