<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body class="mt-0">
          <b-tabs pills card vertical nav-wrapper-class="w-25" content-class="addAdminTabsContent" class="addAdminTabs">
            <b-tab active>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 1</strong>
              </template>
              <b-card-text>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    mb-4
                    p-2
                    border
                  "
                >
                  <div class="d-flex align-items-center w-25">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Seach"
                    />
                    <span class="btn btn-primary fa fa-search ms-2"></span>
                  </div>
                  <div class="addVideo">
                    <button
                      class="btn btn-success"
                      v-b-modal="'add-admin-modal' + 't1-1'"
                    >
                      Add Admin
                    </button>
                    <AddAdminModal :index="'t1-1'"></AddAdminModal>
                  </div>
                </div>

                <div>
                  <b-table
                    small
                    :fields="addAdminFields"
                    :items="addAdminItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(image)="data">
                      <img
                        :src="data.item.image"
                        alt=""
                        style="width: 150px; height: auto"
                      />
                    </template>

                    <template #cell(name)="data">
                      {{ data.item.name }}
                    </template>
                    <template #cell(email)="data">
                      {{ data.item.email }}
                    </template>
                    <template #cell(phone)="data">
                      {{ data.item.phone }}
                    </template>

                    <template #cell(actions)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-admin-modal' + data.index + 't1-2'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditAdminModal
                            :index="data.index + 't1-2'"
                          ></EditAdminModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-admin-modal' + data.index + 't1-3'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAdminModal
                            :index="data.index + 't1-3'"
                          ></DeleteAdminModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>

                <div class="d-flex align-items-center mt-5">
                  <button class="btn btn-success">Submit</button>
                </div>
              </b-card-text>
            </b-tab>

            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 2</strong>
              </template>
              <b-card-text>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    mb-4
                    p-2
                    border
                  "
                >
                  <div class="d-flex align-items-center w-25">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Seach"
                    />
                    <span class="btn btn-primary fa fa-search ms-2"></span>
                  </div>
                  <div class="addVideo">
                    <button
                      class="btn btn-success"
                      v-b-modal="'add-admin-modal' + 't2-1'"
                    >
                      Add Admin
                    </button>
                    <AddAdminModal :index="'t2-1'"></AddAdminModal>
                  </div>
                </div>

                <div>
                  <b-table
                    small
                    :fields="addAdminFields"
                    :items="addAdminItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(image)="data">
                      <img
                        :src="data.item.image"
                        alt=""
                        style="width: 150px; height: auto"
                      />
                    </template>

                    <template #cell(name)="data">
                      {{ data.item.name }}
                    </template>
                    <template #cell(email)="data">
                      {{ data.item.email }}
                    </template>
                    <template #cell(phone)="data">
                      {{ data.item.phone }}
                    </template>

                    <template #cell(actions)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-admin-modal' + data.index + 't2-2'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditAdminModal
                            :index="data.index + 't2-2'"
                          ></EditAdminModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-admin-modal' + data.index + 't2-3'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAdminModal
                            :index="data.index + 't2-3'"
                          ></DeleteAdminModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>

                <div class="d-flex align-items-center mt-5">
                  <button class="btn btn-success">Submit</button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 3</strong>
              </template>
              <b-card-text>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    mb-4
                    p-2
                    border
                  "
                >
                  <div class="d-flex align-items-center w-25">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Seach"
                    />
                    <span class="btn btn-primary fa fa-search ms-2"></span>
                  </div>
                  <div class="addVideo">
                    <button
                      class="btn btn-success"
                      v-b-modal="'add-admin-modal' + 't3-1'"
                    >
                      Add Admin
                    </button>
                    <AddAdminModal :index="'t3-1'"></AddAdminModal>
                  </div>
                </div>

                <div>
                  <b-table
                    small
                    :fields="addAdminFields"
                    :items="addAdminItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(image)="data">
                      <img
                        :src="data.item.image"
                        alt=""
                        style="width: 150px; height: auto"
                      />
                    </template>

                    <template #cell(name)="data">
                      {{ data.item.name }}
                    </template>
                    <template #cell(email)="data">
                      {{ data.item.email }}
                    </template>
                    <template #cell(phone)="data">
                      {{ data.item.phone }}
                    </template>

                    <template #cell(actions)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-admin-modal' + data.index + 't3-2'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditAdminModal
                            :index="data.index + 't3-2'"
                          ></EditAdminModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-admin-modal' + data.index + 't3-3'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAdminModal
                            :index="data.index + 't3-3'"
                          ></DeleteAdminModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>
                <div class="d-flex align-items-center mt-5">
                  <button class="btn btn-success">Submit</button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 4</strong>
              </template>
              <b-card-text>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    mb-4
                    p-2
                    border
                  "
                >
                  <div class="d-flex align-items-center w-25">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Seach"
                    />
                    <span class="btn btn-primary fa fa-search ms-2"></span>
                  </div>
                  <div class="addVideo">
                    <button
                      class="btn btn-success"
                      v-b-modal="'add-admin-modal' + 't4-1'"
                    >
                      Add Admin
                    </button>
                    <AddAdminModal :index="'t4-1'"></AddAdminModal>
                  </div>
                </div>

                <div>
                  <b-table
                    small
                    :fields="addAdminFields"
                    :items="addAdminItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(image)="data">
                      <img
                        :src="data.item.image"
                        alt=""
                        style="width: 150px; height: auto"
                      />
                    </template>

                    <template #cell(name)="data">
                      {{ data.item.name }}
                    </template>
                    <template #cell(email)="data">
                      {{ data.item.email }}
                    </template>
                    <template #cell(phone)="data">
                      {{ data.item.phone }}
                    </template>

                    <template #cell(actions)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-admin-modal' + data.index + 't4-2'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditAdminModal
                            :index="data.index + 't4-2'"
                          ></EditAdminModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-admin-modal' + data.index + 't4-3'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAdminModal
                            :index="data.index + 't4-3'"
                          ></DeleteAdminModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>
                <div class="d-flex align-items-center mt-5">
                  <button class="btn btn-success">Submit</button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 5</strong>
              </template>
              <b-card-text>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    mb-4
                    p-2
                    border
                  "
                >
                  <div class="d-flex align-items-center w-25">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Seach"
                    />
                    <span class="btn btn-primary fa fa-search ms-2"></span>
                  </div>
                  <div class="addVideo">
                    <button
                      class="btn btn-success"
                      v-b-modal="'add-admin-modal' + 't5-1'"
                    >
                      Add Admin
                    </button>
                    <AddAdminModal :index="'t5-1'"></AddAdminModal>
                  </div>
                </div>

                <div>
                  <b-table
                    small
                    :fields="addAdminFields"
                    :items="addAdminItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(image)="data">
                      <img
                        :src="data.item.image"
                        alt=""
                        style="width: 150px; height: auto"
                      />
                    </template>

                    <template #cell(name)="data">
                      {{ data.item.name }}
                    </template>
                    <template #cell(email)="data">
                      {{ data.item.email }}
                    </template>
                    <template #cell(phone)="data">
                      {{ data.item.phone }}
                    </template>

                    <template #cell(actions)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-admin-modal' + data.index + 't5-2'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditAdminModal
                            :index="data.index + 't5-2'"
                          ></EditAdminModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-admin-modal' + data.index + 't5-3'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAdminModal
                            :index="data.index + 't5-3'"
                          ></DeleteAdminModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>
                <div class="d-flex align-items-center mt-5">
                  <button class="btn btn-success">Submit</button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 6</strong>
              </template>
              <b-card-text>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    mb-4
                    p-2
                    border
                  "
                >
                  <div class="d-flex align-items-center w-25">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Seach"
                    />
                    <span class="btn btn-primary fa fa-search ms-2"></span>
                  </div>
                  <div class="addVideo">
                    <button
                      class="btn btn-success"
                      v-b-modal="'add-admin-modal' + 't6-1'"
                    >
                      Add Admin
                    </button>
                    <AddAdminModal :index="'t6-1'"></AddAdminModal>
                  </div>
                </div>

                <div>
                  <b-table
                    small
                    :fields="addAdminFields"
                    :items="addAdminItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(image)="data">
                      <img
                        :src="data.item.image"
                        alt=""
                        style="width: 150px; height: auto"
                      />
                    </template>

                    <template #cell(name)="data">
                      {{ data.item.name }}
                    </template>
                    <template #cell(email)="data">
                      {{ data.item.email }}
                    </template>
                    <template #cell(phone)="data">
                      {{ data.item.phone }}
                    </template>

                    <template #cell(actions)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-admin-modal' + data.index + 't6-2'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditAdminModal
                            :index="data.index + 't6-2'"
                          ></EditAdminModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-admin-modal' + data.index + 't6-3'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAdminModal
                            :index="data.index + 't6-3'"
                          ></DeleteAdminModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>

                <div class="d-flex align-items-center mt-5">
                  <button class="btn btn-success">Submit</button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-bars iconStyle"></i>
                <strong>Level 7</strong>
              </template>
              <b-card-text>
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    mb-4
                    p-2
                    border
                  "
                >
                  <div class="d-flex align-items-center w-25">
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Seach"
                    />
                    <span class="btn btn-primary fa fa-search ms-2"></span>
                  </div>
                  <div class="addVideo">
                    <button
                      class="btn btn-success"
                      v-b-modal="'add-admin-modal' + 't7-1'"
                    >
                      Add Admin
                    </button>
                    <AddAdminModal :index="'t7-1'"></AddAdminModal>
                  </div>
                </div>

                <div>
                  <b-table
                    small
                    :fields="addAdminFields"
                    :items="addAdminItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(image)="data">
                      <img
                        :src="data.item.image"
                        alt=""
                        style="width: 150px; height: auto"
                      />
                    </template>

                    <template #cell(name)="data">
                      {{ data.item.name }}
                    </template>
                    <template #cell(email)="data">
                      {{ data.item.email }}
                    </template>
                    <template #cell(phone)="data">
                      {{ data.item.phone }}
                    </template>

                    <template #cell(actions)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-admin-modal' + data.index + 't7-2'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditAdminModal
                            :index="data.index + 't7-2'"
                          ></EditAdminModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-admin-modal' + data.index + 't7-3'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAdminModal
                            :index="data.index + 't7-3'"
                          ></DeleteAdminModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>
                <div class="d-flex align-items-center mt-5">
                  <button class="btn btn-success">Submit</button>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </section>
  </div>
</template>

<style scoped>
.iconStyle {
  font-size: 25px;
}

.allLinks {
  display: flex;
  align-items: center;
  width: 100%;
}
a.editLink {
  border: 2px solid #e9573f;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}

a.deleteLink {
  border: 2px solid #367fa9;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 3px;
}
</style>

<script>
import AddAdminModal from "@/components/modals/add-admin-modals/AddAdminModal.vue";
import EditAdminModal from "@/components/modals/add-admin-modals/EditAdminModal.vue";
import DeleteAdminModal from "@/components/modals/add-admin-modals/DeleteAdminModal.vue";
export default {
  components: { AddAdminModal, EditAdminModal, DeleteAdminModal },
  data() {
    return {
      addAdminFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "image", label: "Image" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "actions", label: "Actions" },
      ],
      addAdminItems: [
        {
          image: require("@/assets/img/media/realistic/4.jpg"),
          name: "Sameer",
          email: "user@email.com",
          phone: "00011122233",
        },
        {
          image: require("@/assets/img/media/realistic/4.jpg"),
          name: "Sameer",
          email: "user@email.com",
          phone: "00011122233",
        },
        {
          image: require("@/assets/img/media/realistic/4.jpg"),
          name: "Sameer",
          email: "user@email.com",
          phone: "00011122233",
        },
      ],
    };
  },
};
</script>