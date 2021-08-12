<template>
  <div>
    <b-modal
      :id="'deactivate-modal' + index"
      header-bg-variant="danger"
      header-text-variant="light"
      size="sm"
      title="Deactivate"
    >
      <div class="modal-body">
        <p>Are you sure you want to deactivate this</p>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="secondary" @click="ok()">
          No
        </b-button>
        <b-button size="md" variant="danger" @click="cancel()">
          Yes
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