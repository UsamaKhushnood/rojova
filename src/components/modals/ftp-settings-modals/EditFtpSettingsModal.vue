<template>
  <div>
    <b-modal
      :id="'edit-ftp-settings-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Server"
    >
      <div class="container mt-2">
        <b-row>
          <div>
            <b-input-group prepend="Server Address" class="mb-2">
              <b-form-input aria-label="Server Address" class="border border-left-0" placeholder="Server Address"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Port" class="mb-2">
              <b-form-input aria-label="Port" class="border border-left-0" placeholder="Port"></b-form-input>
            </b-input-group>
            <b-input-group prepend="User Name" class="mb-2">
              <b-form-input aria-label="User Name" class="border border-left-0" placeholder="User Name"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Password" class="mb-2">
              <b-form-input aria-label="Password" class="border border-left-0" placeholder="Password"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Http Link" class="mb-2">
              <b-form-input aria-label="Http Link" class="border border-left-0" placeholder="Http Link"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Country" class="mb-2">
              <b-form-input aria-label="Country" class="border border-left-0" placeholder="Country"></b-form-input>
            </b-input-group>
            <b-input-group prepend="File Limit" class="mb-2">
              <b-form-input aria-label="File Limit" class="border border-left-0" placeholder="File Limit"></b-form-input>
            </b-input-group>
          </div>
        </b-row>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="secondary" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="md" variant="success" @click="ok()">
          Add
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<style scoped>
.selectBox {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px;
  padding-right: 114px;
}
.firstName,
.lastName,
.city {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.status {
  margin-top: 185px !important;
}
</style>

<script>
export default {
  props: ["index"],
};
</script>
