<template>
  <div>
    <b-modal
      :id="'add-online-shop-category-modal'" 
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add Category "
    >
      <div class="modal-body"> 
        <div class="row">
          <div class="input-group col-xs-12 align-items-center">
            <label
              class="col-sm-4 control-label mt-0"
              style="font-size: 15px;"
              >Category Name</label
            >
            <div class="col-sm-7 controls">
              <input
                id="title"
                type="text"
                class="form-control col-xs-12"
                name="title"
                placeholder="Category Name"
              />
            </div>
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


