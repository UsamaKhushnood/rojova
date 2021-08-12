<template>
  <div>
    <b-modal
      :id="'activate-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Activate"
    >
      <div class="modal-body">
        <p>Are you sure you want to activate this</p>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="secondary" @click="cancel()">
          No
        </b-button>
        <b-button size="md" variant="success" @click="ok()">
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