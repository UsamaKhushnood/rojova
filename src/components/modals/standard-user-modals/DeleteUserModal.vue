<template>
    <div>
        <b-modal
      :id="'delete-user-modal' + index"
      header-bg-variant="danger"
      header-text-variant="light"
      size="sm"
      title="Delete User"
    >

    <div class="modal-body" align="center">
          <label style="color:red;font-size:35px"><i class=" fa fa-exclamation-circle"></i></label>
          <br>
          <h4>Are you sure ?</h4>
          <br>
          <p>delete this user permentely</p>
      </div>
      <template #modal-footer="{ ok, cancel }">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="md" variant="danger" @click="cancel()">
        Yes! Delete it
      </b-button>
      <b-button size="md" variant="success" @click="ok()">
        No! Please Cancel
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