<template>
  <div>
    <b-modal
      :id="'edit-bazar-sub-category-modal' + index" 
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Subcategory "
    >
      <div class="modal-body"> 
        <div class="row">
          <div class="input-group col-xs-12 align-items-center">
            <label
              class="col-sm-4 control-label mt-0"
              style="font-size: 15px;"
              >Select Category</label
            >
            <div class="selectCategory mt-3 mb-4 ps-2 col-sm-7">
              <b-form-select
                v-model="selected"
                :options="options"
                class="selectBox form-control border"
              ></b-form-select>
            </div>
            
          </div>
        </div>
        <div class="row align-items-center">
            <label
              class="col-sm-4 control-label mt-0"
              style="font-size: 15px;"
              >Sub Category Name</label
            >
            <div class="col-sm-7 controls">
              <input
                id="title"
                type="text"
                class="form-control col-xs-12 border"
                name="title"
                placeholder="Sub Category Name"
              />
            </div>
        </div>
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
/* .selectBox {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px;
  padding-right: 105px;
} */
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
    //   file1: null,
    //   file2: null,
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

