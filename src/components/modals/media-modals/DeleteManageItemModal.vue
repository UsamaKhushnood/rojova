<template>
  <div>
    <b-modal
      :id="'delete-manage-media-item-modal' + index"
      header-bg-variant="danger"
      header-text-variant="light"
      size="sm"
      title="Remove"
    >
      <div class="modal-body">
        <p>Are you sure you want to remove this</p>
      </div>
      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="danger" @click="cancel()">
          Yes! Delete it
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