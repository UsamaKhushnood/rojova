<template>
  <div>
    <b-modal
      :id="'add-new-donation-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add New Donation"
    >
      <b-row class="align-items-center mt-4 mb-4">
        <b-col cols="4">
          <label>Title</label>
        </b-col>
        <b-col cols="8">
          <input type="text" class="form-control border" placeholder="Title" />
        </b-col>
      </b-row>
      <b-row class="align-items-center mt-4 mb-4">
        <b-col cols="4">
          <label>Description</label>
        </b-col>
        <b-col cols="8">
          <input
            type="text"
            class="form-control border"
            placeholder="Description"
          />
        </b-col>
      </b-row>
      <b-row class="align-items-center mt-4 mb-4">
        <b-col cols="4">
          <label>Select Organization</label>
        </b-col>
        <b-col cols="8">
          <b-form-select
            v-model="selected"
            :options="options"
            class="form-control border"
          ></b-form-select>
        </b-col>
      </b-row>
      <b-row class="align-items-center mt-4 mb-4">
        <b-col cols="4">
          <label>Select Organization</label>
        </b-col>
        <b-col cols="8">
          <b-form-tags
            input-id="tags-basic"
            v-model="tagsValue"
            class="form-control border"
          ></b-form-tags>
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
  data() {
    return {
      selected: "A",
      options: [
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" },
      ],
      tagsValue: ["apple", "orange"],
    };
  },
};
</script>

