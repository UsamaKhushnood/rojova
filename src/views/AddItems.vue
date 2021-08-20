<template>
  <div>
    <div class=" px-4 pb-2">
      <div>
        <b-card no-body>
          <b-tabs v-model="tabIndex" card>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Select Category</strong>
              </template>
              <b-card-text>
                <div class="panel-sub-heading">
                  <div class="inner-all">
                    <div
                      class="
                        progress progress-striped
                        active
                        no-margin
                        progress-xs
                      "
                    >
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 14.2857%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  
                  <b-table
                    small
                    :fields="addItemsFields"
                    :items="addItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(ID)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(Title)="data">
                      {{ data.item.Title }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(Category)="data">
                      {{ data.item.Category }}
                    </template>

                    <!-- Optional default data cell scoped slot -->

                    <template #cell(Option)="data">
                      <div class="allLinks">
                        <a class="viewLink" v-b-modal="'view-item-modal' + data.index">
                          <i
                            class="fa fa-eye"
                            style="font-size: 16px; color: black"
                          ></i>
                          <ViewItemModal :index="data.index"></ViewItemModal>
                        </a>
                        <a class="editLink" v-b-modal="'edit-online-shop-item-modal' + data.index">
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditItemModal :index="data.index"></EditItemModal>
                        </a>
                        <a class="deleteLink" v-b-modal="'delete-online-shop-item-modal' + data.index">
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteItemModal :index="data.index"></DeleteItemModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-file-text iconStyle"></i>
                <strong>Item Info</strong>
              </template>
              <b-card-text>
                <div class="panel-sub-heading">
                  <div class="inner-all">
                    <div
                      class="
                        progress progress-striped
                        active
                        no-margin
                        progress-xs
                      "
                    >
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 28.5714%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Text</p>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-credit-card iconStyle"></i>
                <strong>Item Images</strong>
              </template>
              <b-card-text>
                <div class="panel-sub-heading">
                  <div class="inner-all">
                    <div
                      class="
                        progress progress-striped
                        active
                        no-margin
                        progress-xs
                      "
                    >
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 42.8571%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Text</p>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-check-circle iconStyle"></i>
                <strong>Item Price</strong>
              </template>
              <b-card-text>
                <div class="panel-sub-heading">
                  <div class="inner-all">
                    <div
                      class="
                        progress progress-striped
                        active
                        no-margin
                        progress-xs
                      "
                    >
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 57.1429%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Text</p>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-check-circle iconStyle"></i>
                <strong>SEO</strong>
              </template>
              <b-card-text>
                <div class="panel-sub-heading">
                  <div class="inner-all">
                    <div
                      class="
                        progress progress-striped
                        active
                        no-margin
                        progress-xs
                      "
                    >
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 71.4286%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Text</p>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-check-circle iconStyle"></i>
                <strong>Inventory</strong>
              </template>
              <b-card-text>
                <div class="panel-sub-heading">
                  <div class="inner-all">
                    <div
                      class="
                        progress progress-striped
                        active
                        no-margin
                        progress-xs
                      "
                    >
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 85.7143%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Text</p>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-check-circle iconStyle"></i>
                <strong>Shipping</strong>
              </template>
              <b-card-text>
                <div class="panel-sub-heading">
                  <div class="inner-all">
                    <div
                      class="
                        progress progress-striped
                        active
                        no-margin
                        progress-xs
                      "
                    >
                      <div
                        class="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 100%"
                      ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Text</p>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
          <div
            class="
              mt-4
              px-4
              pt-4
              pb-3
              d-flex
              justify-content-between
              border-top
            "
          >
            <button
              type="button"
              class="btn btn-outline-success"
              @click="tabIndex--"
              v-show="tabIndex >= 1"
            >
              Previous
            </button>
            <button
              type="button"
              class="btn btn-outline-success"
              @click="tabIndex++"
              v-show="tabIndex <= 5"
            >
              Next
            </button>
          </div>

          
        </b-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.iconStyle {
  margin-right: 10px;
}
.allLinks {
  display: flex;
  align-items: center;
  width: 100%;
}
a.viewLink {
  border: 2px solid black;
  padding: 3px 7px;
  border-radius: 5px;
  cursor: pointer;
}
a.editLink {
  border: 2px solid #e9573f;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 3px;
}

 
</style>

<script>
import ViewItemModal from "@/components/modals/online-shop-modals/ViewItemModal"
import EditItemModal from "@/components/modals/online-shop-modals/EditItemModal"
import DeleteItemModal from "@/components/modals/online-shop-modals/DeleteItemModal"
export default {
  components: { ViewItemModal, EditItemModal, DeleteItemModal },
  data() {
    return {
      tabIndex: 0,
      addItemsFields: ["ID", "Title", "Category", "Option"],

      addItems: [
        {
          Title: "Sameer12",
          Category: "categ",
        },
        {
          Title: "Sameer12",
          Category: "categ",
        },
      ],
    };
  },
};
</script>