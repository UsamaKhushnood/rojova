<template>
  <div>
    <b-modal
      :id="'add-category-modal'"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="Add Category"
    >
      <div class="modal-body" id="input-mask">
        <form method="post">
		   <div class="input-group col-xs-12">
              <label class="col-sm-4 control-label mt-0" style="font-size:15px"> Category Name</label>
				<div class="col-sm-7 controls">
				 <input id="title" type="title" class="form-control col-xs-12" name="categ" placeholder="Title">

				</div>
		      <br>
		  </div>
		</form>
        <div class="container mt-2">
            <b-row>
          <b-col cols="4">
            <div>
              <label class="uploadImage">Upload Image</label>
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
<style scoped>
.input-group {
    align-items: center;
}
.uploadImage {
    margin-top: 180px;
}
</style>
<script>
export default {
    props: ['index'],
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
}
</script>