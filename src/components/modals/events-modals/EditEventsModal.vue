<template>
  <div>
    <b-modal
      :id="'edit-events-modal' + index"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Events "
    >
      <div class="modal-body">
        <b-card no-body>
          <b-card-text class="p-4">
            <b-row class="align-items-center mb-4">
              <b-col cols="3">
                <label>Title</label>
              </b-col>
              <b-col cols="9">
                <input
                  type="text"
                  class="form-control border"
                  placeholder="Title"
                />
              </b-col>
            </b-row>
            <b-row class="align-items-center mb-4">
              <b-col cols="3">
                <label>Description</label>
              </b-col>
              <b-col cols="9">
                <vue-editor></vue-editor>
              </b-col>
            </b-row>
            <b-row class="align-items-center mb-4">
              <b-col cols="6">
                <b-input-group prepend="Start Date">
                  <b-form-input
                    aria-label="Start Date"
                    class="border border-left-0"
                    placeholder="Start Date"
                    type="date"
                    style="height: 38px"
                  ></b-form-input>
                </b-input-group>
              </b-col>
              <b-col cols="6">
                <b-input-group prepend="End Date">
                  <b-form-input
                    aria-label="End Date"
                    class="border border-left-0"
                    placeholder="End Date"
                    type="date"
                    style="height: 38px"
                  ></b-form-input>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row class="align-items-center mb-4">
              <b-col cols="3">
                <label>Entering Time</label>
              </b-col>
              <b-col cols="9">
                <input
                  type="time"
                  class="form-control border"
                  placeholder="Entering Time"
                />
              </b-col>
            </b-row>
            <b-row class="align-items-center mb-4">
              <b-col cols="3">
                <label>City</label>
              </b-col>
              <b-col cols="9">
                <input
                  type="text"
                  class="form-control border"
                  placeholder="City"
                />
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </div>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="md" variant="success" @click="ok()">
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
