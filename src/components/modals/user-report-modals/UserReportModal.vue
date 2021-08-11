<template>
  <div>
    <b-modal
      :id="'user-report-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Details"
    >
      <div class="container mt-2">
        <div class="d-flex align-items-center justify-content-center px-0">
          <img src="@/assets/img/BILLY-ARGEL-GINGA.jpg" alt="user image" style="width: 500px;">
        </div>
        <div class="d-flex align-items-center px-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fugiat djfdjfkldjf.</p>
        </div>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="secondary" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="md" variant="success" @click="ok()">
          Solved
        </b-button>
        <b-button size="md" variant="primary" @click="ok()">
          Reply
        </b-button>
      </template>
    </b-modal>
  </div>
</template>


<script>
export default {
    props: ['index'],
  
};
</script>
