<template>
  <div>
    <b-modal
      :id="'edit-video-category-modal' + index"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="Edit Category"
    >
      <b-row class="align-items-center mt-4 mb-4">
        <b-col cols="3">
          <label>Category Name</label>
        </b-col>
        <b-col cols="9">
          <input type="text" class="form-control border" placeholder="Category Name">
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

<script>
export default {
    props: ['index']
}
</script>