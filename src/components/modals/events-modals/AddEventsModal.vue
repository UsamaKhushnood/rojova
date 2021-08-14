<template>
  <div>
    <b-modal
      :id="'add-events-modal'"
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Add Events "
    >
      <div class="modal-body">
        <b-card no-body>
          <b-tabs card v-model="tabIndex">
            <b-tab>
              <template #title>
                <strong>About Event</strong>
              </template>
              <b-card-text>
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
                  <b-col cols="3">
                    <label>Event Image</label>
                  </b-col>
                  <b-col cols="9">
                    <div>
                      <b-form-file
                        v-model="file1"
                        :state="Boolean(file1)"
                        placeholder="Select a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        class="form-control border"
                      ></b-form-file>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Upload Sound</label>
                  </b-col>
                  <b-col cols="9">
                    <div>
                      <b-form-file
                        v-model="file1"
                        :state="Boolean(file1)"
                        placeholder="Select a file or drop it here..."
                        drop-placeholder="Drop file here..."
                        class="form-control border"
                      ></b-form-file>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <strong>Location</strong>
              </template>
              <b-card-text>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Country</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Country"
                    />
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Zip Code</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Zip Code"
                    />
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Address</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Address"
                    />
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <strong>Promoter</strong>
              </template>
              <b-card-text>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>First Name</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="First Name"
                    />
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Last Name</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Last Name"
                    />
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Email</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Email"
                    />
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Phone Number</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Phone Number"
                    />
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Rojova Name</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Rojova Name"
                    />
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Rojova ID</label>
                  </b-col>
                  <b-col cols="9">
                    <input
                      type="text"
                      class="form-control border"
                      placeholder="Rojova ID"
                    />
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <strong>Ticket</strong>
              </template>
              <b-card-text>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Ticket Sale</label>
                  </b-col>
                  <b-col cols="9">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>Online Sale</label>
                  </b-col>
                  <b-col cols="9">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>‏Men Price</label>
                  </b-col>
                  <b-col cols="9">
                    <div class="d-flex align-items-center w-100">
                      <input
                        type="text"
                        class="form-control border me-3"
                        placeholder="Men Price"
                      />
                      <input
                        type="text"
                        class="form-control border"
                        placeholder="Notification"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>‏Women Price</label>
                  </b-col>
                  <b-col cols="9">
                    <div class="d-flex align-items-center w-100">
                      <input
                        type="text"
                        class="form-control border me-3"
                        placeholder="Women Price"
                      />
                      <input
                        type="text"
                        class="form-control border"
                        placeholder="Notification"
                      />
                    </div>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-4">
                  <b-col cols="3">
                    <label>‏Kids</label>
                  </b-col>
                  <b-col cols="9">
                    <div class="d-flex align-items-center w-100">
                      <input
                        type="text"
                        class="form-control border me-3"
                        placeholder="Kids"
                      />
                      <input
                        type="text"
                        class="form-control border"
                        placeholder="Notification"
                      />
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>
            <div
              class="
                d-flex
                align-items-center
                justify-content-between
                mt-3
                ms-3
                me-3
                pt-3
                pb-3
                border-top
              "
            >
              <b-button
                pill
                variant="outline-success"
                @click="tabIndex--"
                v-show="tabIndex >= 1"
                >Previous</b-button
              >
              <b-button
                pill
                variant="outline-success"
                @click="tabIndex++"
                v-show="tabIndex <= 2"
                >Next</b-button
              >
            </div>
          </b-tabs>
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
  data() {
    return {
      tabIndex: 0,
      file1: null,
      file2: null,
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>
