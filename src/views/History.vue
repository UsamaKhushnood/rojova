<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Manage History</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button
                    class="btn btn-success btn-md"
                    v-b-modal="'add-history-modal'"
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add History
                  </button>
                  <AddHistoryModal></AddHistoryModal>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addNewsFields"
                    :items="addNewsItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(title)="data">
                      {{ data.item.title }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(languages)="data">
                      {{ data.item.languages }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-history-modal' + data.index"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditHistoryModal
                            :index="data.index"
                          ></EditHistoryModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-history-modal' + data.index"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteHistoryModal
                            :index="data.index"
                          ></DeleteHistoryModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
                </div>
              </b-card-text>
            </b-tab>

            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Add Category</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button
                    class="btn btn-success btn-md"
                    v-b-modal="'add-history-category-modal'"
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add Category
                  </button>
                  <AddCategoryModal></AddCategoryModal>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addCategoryFields"
                    :items="addCategoryItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>
                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-history-category-modal' + data.index"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditCategoryModal
                            :index="data.index"
                          ></EditCategoryModal>
                        </a>
                        <a class="deleteLink"
                            v-b-modal="'delete-history-category-modal' + data.index"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteCategoryModal :index="data.index"></DeleteCategoryModal>
                        </a>
                      </div>
                    </template>
                  </b-table>
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
  margin-right: 10px;
}
.imageStyles {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.badge {
  font-size: 13px;
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

 
</style>

    
<script>
import AddHistoryModal from "@/components/modals/history-modals/AddHistoryModal.vue";
import EditHistoryModal from "@/components/modals/history-modals/EditHistoryModal.vue";
import DeleteHistoryModal from "@/components/modals/history-modals/DeleteHistoryModal.vue";
import AddCategoryModal from "@/components/modals/history-modals/AddCategoryModal.vue";
import EditCategoryModal from "@/components/modals/history-modals/EditCategoryModal.vue";
import DeleteCategoryModal from "@/components/modals/history-modals/DeleteCategoryModal.vue";

export default {
  components: {
    AddHistoryModal,
    EditHistoryModal,
    DeleteHistoryModal,
    AddCategoryModal,
    EditCategoryModal,
    DeleteCategoryModal,
  },
  data() {
    return {
      addNewsFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "category", label: "Category" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "title", label: "Title" },
        // A regular column
        { key: "languages", label: "Languages" },
        //
        { key: "option", label: "Option" },
      ],
      addNewsItems: [
        {
          category: "Sameer",
          title: "categ",
          languages: "categ",
        },
        {
          category: "Sameer",
          title: "categ",
          languages: "categ",
        },
        {
          category: "Sameer",
          title: "categ",
          languages: "categ",
        },
      ],
      // new style

      addCategoryFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "category", label: "Category" },
        { key: "option", label: "Option" },
      ],
      addCategoryItems: [
        {
          category: "categ",
        },
        {
          category: "categ",
        },
      ],
    };
  },
};
</script>