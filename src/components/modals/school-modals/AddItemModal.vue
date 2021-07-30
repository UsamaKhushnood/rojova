<template>
  <div>
    <b-modal
      :id="'add-item-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add Category"
    >
      <div class="container mt-2">
        <b-row>
          <b-col cols="4">
            <div>
              <label class="mt-4 mb-4">Select Category</label>
            </div>
            <div>
              <label class="mt-4">Item Name</label>
            </div>
            <div>
              <label class="itemImage">Item Image</label>
            </div>
            <div>
              <label class="uploadSound1">Upload Sound 1</label>
            </div>
            <div>
              <label class="uploadSound2">Upload Sound 2</label>
            </div>
           
          </b-col>
          <b-col cols="8">
            <div class="mt-3 mb-4">
              <b-form-select
                v-model="selected"
                :options="options"
                class="selectBox"
              ></b-form-select>
            </div>
            <div class="itemName mt-3">
              <input type="text" placeholder="Item Name" />
            </div>
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
            <div class="uploadFile mt-3">
                <div
                class="fileinput-preview thumbnail"
                data-trigger="fileinput"
                style="
                  width: 200px;
                  height: 50px;
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
            <div class="uploadFile mt-3">
                <div
                class="fileinput-preview thumbnail"
                data-trigger="fileinput"
                style="
                  width: 200px;
                  height: 50px;
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
  padding-right: 135px;
}
.itemName {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.itemImage {
    margin-top: 190px;
}
.uploadSound1 {
    margin-top: 110px;
}
.uploadSound2 {
    margin-top: 107px;
}

</style>

<script>
export default {

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
