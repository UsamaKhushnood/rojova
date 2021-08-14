<template>
  <div>
    <b-modal
      :id="'edit-past-events-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Past Event"
    >
      <div class="modal-body">
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
            <label>City</label>
          </b-col>
          <b-col cols="8">
            <input type="text" class="form-control border" placeholder="City" />
          </b-col>
        </b-row>
        <b-row class="align-items-center mb-4">
          <b-col cols="4">
            <label>Phone No</label>
          </b-col>
          <b-col cols="8">
            <input
              type="text"
              class="form-control border"
              placeholder="Phone No"
            />
          </b-col>
        </b-row>

        <b-row class="align-items-center mb-4">
          <b-col cols="4">
            <label>Upload Logo</label>
          </b-col>
          <b-col cols="8">
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
      file1: null,
      file2: null,
    };
  },
};
</script>