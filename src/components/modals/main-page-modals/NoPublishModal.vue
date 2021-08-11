<template>
  <div>
    <b-modal
      :id="'no-publish-modal'"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="Publish"
    >
      <div class="modal-body">
        <p>Are you sure you want to remove this</p>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="danger" @click="cancel()">
          No
        </b-button>
        <b-button size="md" variant="success" @click="ok()">
          Yes!
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