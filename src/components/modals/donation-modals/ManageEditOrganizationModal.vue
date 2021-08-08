<template>
  <div>
    <b-modal
      :id="'manage-edit-organization-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Organization"
    >
      <div class="container mt-2">
        <b-row>
          <b-col cols="4">
            <div>
              <label class="mt-4 mb-4">Organization Name</label>
            </div>
            <div>
              <label class="mt-4">Bank Account</label>
            </div>
            <div>
              <label class="mt-5">Paypal Account</label>
            </div>
            <div>
              <label class="mt-4 mb-3">Address</label>
            </div>
            <div class="upload mt-5">
              <label>Upload</label>
            </div>

          </b-col>
          <b-col cols="8">
            
            <div class="firstName mt-3">
              <input type="text" placeholder="Organization Name" />
            </div>
            <div class="lastName mt-3">
              <input type="text" placeholder="Bank Account" />
            </div>
            <div class="city mt-3">
              <input type="text" placeholder="Paypal Account" />
            </div>
            <div class="city mt-3">
              <input type="text" placeholder="Address" />
            </div>
            <!-- <div class="city mt-3">
              <input type="text" placeholder="Upload Logo" />
            </div> -->
            

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
    props: ['index'],
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
