<template>
  <div>
    <b-modal
      :id="'upgrade-user-modal' + index"
      header-bg-variant="danger"
      header-text-variant="light"
      size="sm"
      title="Upgrade to Premium"
    >
      <div class="modal-body">
        <div class="form-group">
          <img
            style="border-radius: 50%; width: 40px; height: 40px"
            src="@/assets/img/DE.png"
          /><label style="padding-left: 5px">username</label>
        </div>
        <b-form-radio v-model="selected" name="some-radios" value="A">Standard</b-form-radio>
      <b-form-radio v-model="selected"  name="some-radios" value="B">Premium</b-form-radio>
 
                <div class="input-group col-xs-12" style="padding-top: 15px">
            <label
              class="col-sm-4 control-label"
              style="font-size: 15px; margin-top: 0"
              >Admin Password</label
            >
            <div class="col-sm-7 controls">
              <input
                id="title"
                type="password"
                class="form-control col-xs-12"
                name="categ"
                placeholder="Password"
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
        Upgrade
      </b-button>

      </template>
    </b-modal>
  </div>
</template>

<style scoped>
.modal-header {
    background-color: #28a745;
}
.input-group {
    align-items: center;
}
</style>

<script>
export default {
  props: ['index'],
    data() {
        return {
            selected: ''
        }
    }
}
</script>