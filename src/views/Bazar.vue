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
                    <template #cell(itemId)="data">
                      {{ data.item.itemId }}
                    </template>

                    <template #cell(userImage)="data">
                      <img :src="data.item.userImage" alt="user image"
                      style="width: 150px; height: auto">
                    </template>

                    
                    <template #cell(username)="data">
                      {{ data.item.username }}
                    </template>
                    
                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>

                    <template #cell(subCategory)="data">
                      {{ data.item.subCategory }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="viewLink"
                          v-b-modal="'view-manage-bazar-item-modal' + data.index" 
                        >
                          
                          <i
                            class="fa fa-eye"
                            style="font-size: 16px; color: black;"
                          ></i>
                          <ViewManageItemModal :index="data.index"></ViewManageItemModal>
                        </a>
                        <a
                          class="editLink"
                          v-b-modal="'edit-manage-bazar-item-modal' + data.index" 
                        >
                          
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditManageItemModal :index="data.index"></EditManageItemModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-manage-bazar-item-modal' + data.index"
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
                <div class="d-flex justify-content-center mb-4">
                  <button class="btn btn-success btn-md me-3" v-b-modal="'add-bazar-category-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Category
                  </button>
                  <AddCategoryModal></AddCategoryModal>
                  <button class="btn btn-success btn-md" v-b-modal="'add-bazar-sub-category-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Sub Category
                  </button>
                  <AddSubCategoryModal></AddSubCategoryModal>
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
                          v-b-modal="'edit-bazar-sub-category-modal' + data.index"
                        >
                          
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditSubCategoryModal :index="data.index"></EditSubCategoryModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-bazar-add-category-modal' + data.index"
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
import ViewManageItemModal from "@/components/modals/bazar-modals/ViewManageItemModal"
import EditManageItemModal from "@/components/modals/bazar-modals/EditManageItemModal"
import DeleteManageItemModal from "@/components/modals/bazar-modals/DeleteManageItemModal"
import DeleteAddCategoryModal from "@/components/modals/bazar-modals/DeleteAddCategoryModal"
import AddCategoryModal from "@/components/modals/bazar-modals/AddCategoryModal"
import AddSubCategoryModal from "@/components/modals/bazar-modals/AddSubCategoryModal"
import EditSubCategoryModal from "@/components/modals/bazar-modals/EditSubCategoryModal"
export default {
  components: {
    ViewManageItemModal,
    EditManageItemModal,
    DeleteManageItemModal,
    DeleteAddCategoryModal,
    AddCategoryModal,
    AddSubCategoryModal,
    EditSubCategoryModal,
  },
  data() {
    return {
      
      manageItemsFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "itemId", label: "Item ID" },
        { key: "userImage", label: "Image" },
        { key: "username", label: "Username" },
        { key: "category", label: "Category" },
        { key: "subCategory", label: "Subcategory" },
        { key: "option", label: "Option" },
      ],
      manageItems: [
        {
          itemId: "Hopkins",
          userImage: require('@/assets/img/media/realistic/4.jpg'),
          username: "Username",
          category: "categ",
          subCategory: "subcategory",
        },
        {
          itemId: "Hopkins",
          userImage: require('@/assets/img/media/realistic/4.jpg'),
          username: "Username",
          category: "categ",
          subCategory: "subcategory",
        }
        
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