<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Manage Items</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md" v-b-modal="'add-media-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Media
                  </button>
                  <AddMediaModal></AddMediaModal>
                </div>
                <div>
                  <b-table
                    small
                    :fields="manageItemsFields"
                    :items="manageItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(title)="data">
                      {{ data.item.title }}
                    </template>
                    
                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="viewLink"
                          v-b-modal="'view-manage-media-item-modal' + data.index" 
                        >
                          
                          <i
                            class="fa fa-eye"
                            style="font-size: 16px; color: black;"
                          ></i>
                          <ViewManageItemModal :index="data.index"></ViewManageItemModal>
                        </a>
                        <a
                          class="editLink"
                          v-b-modal="'edit-media-modal' + data.index"
                        >
                          
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditMediaModal :index="data.index"></EditMediaModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-manage-media-item-modal' + data.index"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteManageItemModal :index="data.index"></DeleteManageItemModal>
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
                  <button class="btn btn-success btn-md" v-b-modal="'add-media-category-modal'">
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
                          v-b-modal="'edit-media-category-modal' + data.index"
                        >
                          
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditCategoryModal :index="data.index"></EditCategoryModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-media-add-category-modal' + data.index"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteAddCategoryModal :index="data.index"></DeleteAddCategoryModal>
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
a.viewLink {
  border: 2px solid black;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 3px;
}
a.editLink {
  border: 2px solid #e9573f;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}

 
</style>

    
<script>
import ViewManageItemModal from "@/components/modals/media-modals/ViewManageItemModal"
import DeleteManageItemModal from "@/components/modals/media-modals/DeleteManageItemModal"
import DeleteAddCategoryModal from "@/components/modals/media-modals/DeleteAddCategoryModal"
import AddCategoryModal from "@/components/modals/media-modals/AddCategoryModal"
import EditCategoryModal from "@/components/modals/media-modals/EditCategoryModal"
import AddMediaModal from "@/components/modals/media-modals/AddMediaModal"
import EditMediaModal from "@/components/modals/media-modals/EditMediaModal"
export default {
  components: {
    ViewManageItemModal,
    DeleteManageItemModal,
    DeleteAddCategoryModal,
    AddCategoryModal,
    EditCategoryModal,
    AddMediaModal,
    EditMediaModal,
  },
  data() {
    return {
      
      manageItemsFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
        { key: "option", label: "Option" },
      ],
      manageItems: [
        {
          title: "categ",
          category: "categ",
        },
        {
          title: "categ",
          category: "categ",
        },
        
      ],
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