<template>
  <div>
    <b-modal
      :id="'upgrade-user-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Upgrade to Premium"
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
        <b-form-radio v-model="selected" name="some-radios" value="A">Standard</b-form-radio>
      <b-form-radio v-model="selected"  name="some-radios" value="B">Premium</b-form-radio>
      </b-row>
      <b-row class="align-items-center mb-4">
        <b-col cols="3">
          <label>Admin Password</label>
        </b-col>
        <b-col cols="9">
          <input type="text" class="form-control border" placeholder="Admin Password">
        </b-col>
      </b-row>

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