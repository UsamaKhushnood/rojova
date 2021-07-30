<template>
  <div>
    <b-modal
      :id="'block-user-modal' + index"
      header-bg-variant="danger"
      header-text-variant="light"
      size="sm"
      title="Block User"
    >
      <div>
        <div class="form-group">
          <img
            style="border-radius: 50%; width: 40px; height: 40px"
            src="@/assets/img/DE.png"
          /><label style="padding-left: 5px">username</label>
        </div>
        <div class="form-group clearfix">
          <label class="col-sm-12 control-label"
            ><b>Block User for(days)</b></label
          >
          <br />
          <div class="col-sm-12 controls">
            <input
              class="col-sm-12"
              style="padding: 5px"
              type="text"
              placeholder="Type number of days"
              value=""
            />
          </div>
        </div>
      </div>
      <template #modal-footer="{ ok, cancel }">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="md" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <b-button size="md" variant="success" @click="ok()">
        Confirm
      </b-button>

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
  props: ['index']
}
</script>


