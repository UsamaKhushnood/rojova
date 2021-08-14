<template>
  <div>
    <b-modal
      :id="'add-online-shop-subcategory-modal'"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="Add Sub Category"
    >
      <b-row class="align-items-center mt-4 mb-4">
        <b-col cols="4">
          <label>Category Name</label>
        </b-col>
        <b-col cols="8">
          <input type="text" class="form-control border" placeholder="Category Name">
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="4">
          <label>Sub Category Name</label>
        </b-col>
        <b-col cols="8">
          <input type="text" class="form-control border" placeholder="Sub Category Name">
        </b-col>
      </b-row>
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

