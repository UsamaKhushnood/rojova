<template>
  <div>
    <b-modal
      :id="'edit-edit-language-modal' + editEditIndex" 
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit"
    >
      <div class="modal-body"> 
        
        <div class="row align-items-center">
            <label
              class="col-sm-4 control-label mt-0"
              style="font-size: 15px;"
              >Account Details</label
            >
            <div class="col-sm-7 controls">
              <input
                id="title"
                type="text"
                class="form-control col-xs-12 border"
                name="title"
                placeholder="Account Details"
              />
            </div>
        </div>
        <div class="row align-items-center">
            <label
              class="col-sm-4 control-label mt-2"
              style="font-size: 15px;"
              >Activites</label
            >
            <div class="col-sm-7 controls">
              <input
                id="title"
                type="text"
                class="form-control col-xs-12 border mt-2"
                name="title"
                placeholder="Activites"
              />
            </div>
        </div>
        <div class="row align-items-center">
            <label
              class="col-sm-4 control-label mt-2"
              style="font-size: 15px;"
              >Activity</label
            >
            <div class="col-sm-7 controls">
              <input
                id="title"
                type="text"
                class="form-control col-xs-12 border mt-2"
                name="title"
                placeholder="Activity"
              />
            </div>
        </div>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="secondary" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="md" variant="success" @click="ok()">
          Save
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
    props: ['editEditIndex']
}
</script>



