<template>
  <div>
    <b-modal
      :id="'add-office-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add Office"
    >
      <div class="container mt-2">
        <b-row>
          <div>
            <b-input-group prepend="Office Name" class="mb-2" style="height: 30px">
              <b-form-input
                aria-label="Office Name"
                class="border border-left-0"
                placeholder="Office Name"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="Name"
              class="mb-2 mt-3"
              style="height: 30px"
            >
              <b-form-input
                aria-label="Name"
                class="border border-left-0"
                placeholder="Name"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="Last Name" class="mb-2 mt-3" style="height: 30px">
              <b-form-input
                aria-label="Last Name"
                class="border border-left-0"
                placeholder="Last Name"
              ></b-form-input>
            </b-input-group>

            <b-input-group
              prepend="Email"
              class="mb-2 mt-3"
              style="height: 30px"
            >
              <b-form-input
                aria-label="Email"
                class="border border-left-0"
                placeholder="Emaile"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="Phone No" class="mb-2 mt-3" style="height: 30px">
              <b-form-input
                aria-label="Phone No"
                class="border border-left-0"
                placeholder="Phone No"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="Country" class="mb-2 mt-3" style="height: 30px">
              <b-form-input
                aria-label="Country"
                class="border border-left-0"
                placeholder="Country"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="City" class="mb-2 mt-3" style="height: 30px">
              <b-form-input
                aria-label="City"
                class="border border-left-0"
                placeholder="City"
              ></b-form-input>
            </b-input-group>
            <b-input-group prepend="Address" class="mb-2 mt-3" style="height: 30px">
              <b-form-input
                aria-label="Address"
                class="border border-left-0"
                placeholder="Address"
              ></b-form-input>
            </b-input-group>
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
import NoPublishModal from "@/components/modals/main-page-modals/NoPublishModal";
export default {
  components: { NoPublishModal },
  props: ["index"],
};
</script>
