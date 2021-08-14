<template>
  <div>
    <b-modal
      :id="'view-ticket-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="View Ticket"
    >
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Title Name</label>
        </b-col>
        <b-col cols="9">
          <p class="mb-0">Title Name</p>
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>URL</label>
        </b-col>
        <b-col cols="9">
          <a href="https://youtube.com">www.youtube.com</a>
        </b-col>
      </b-row>

      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        
        <b-button size="md" variant="secondary" @click="cancel()">
          Close
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["index"],
};
</script>
