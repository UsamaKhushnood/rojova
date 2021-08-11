<template>
  <div>
    <b-modal
      :id="'view-manage-bazar-item-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="md"
      title="View Items"
    >
      <div class="d-flex align-items-center px-3">
        <div class="row w-100">
          <div class="bigImage me-3">
            <img
              src="@/assets/img/media/realistic/4.jpg"
              alt=""
              style="width: 300px"
            />
          </div>
        </div>
        <div class="row w-100">
          <div class="row mb-3">
            <img
              src="@/assets/img/media/realistic/4.jpg"
              alt=""
              style="width: 150px"
            />
          </div>
          <div class="row">
            <img
              src="@/assets/img/media/realistic/4.jpg"
              alt=""
              style="width: 150px"
            />
          </div>
        </div>
        <div class="row w-100 align-items-center">
          <h5>Item Title</h5>
          <ul>
            <li>Price: $1200</li>
            <li>Status: New</li>
            <li>Warranty: No</li>
          </ul>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            vitae.
          </p>
        </div>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="success" @click="ok()"> Edit </b-button>
        <b-button size="md" variant="danger" @click="cancel()">
          Remove Item
        </b-button>
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
