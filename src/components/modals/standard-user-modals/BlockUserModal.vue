<template>
  <div>
    <b-modal
      :id="'block-user-modal' + index"
      header-bg-variant="danger"
      header-text-variant="light"
      size="sm"
      title="Block User"
    >
      <b-row class="align-items-center w-75 mb-4">
        <b-col cols="2">
          <img
            style="border-radius: 50%; width: 40px; height: 40px"
            src="@/assets/img/DE.png"
          />
        </b-col>
        <b-col cols="10">
          <label>username</label>
        </b-col>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col>
          <label><b>Block User for(days)</b></label>
          <input
            type="text"
            class="form-control border mt-2"
            placeholder="Type number of days"
          />
        </b-col>
      </b-row>

      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="danger" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="md" variant="success" @click="ok()"> Confirm </b-button>
      </template>
    </b-modal>
  </div>
</template>
<style scoped>
input.col-sm-12:focus {
  border: 1px solid black;
}

input.col-sm-12 {
  border: 1px solid lightgrey;
  border-radius: 5px;
}
</style>

<script>
export default {
  props: ["index"],
};
</script>


