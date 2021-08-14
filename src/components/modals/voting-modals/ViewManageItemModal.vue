<template>
  <div>
    <b-modal
      :id="'view-manage-item-modal' + index"
      header-bg-variant="primary"
      header-text-variant="light"
      size="sm"
      title="View Items"
    >
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Title</label>
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
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Banner</label>
        </b-col>
        <b-col cols="9">
          <img
            src="@/assets/img/BILLY-ARGEL-GINGA.jpg"
            alt="img"
            width="150px"
          />
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
  props: ["index"],
};
</script>
