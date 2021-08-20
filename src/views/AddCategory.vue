<template>
  <div>
    <section id="page-content">
      <div class="">
        <div class=" bg-white px-4 pb-2" >
          <div class=" addButtons p-3">
            <button
              class="btn btn-success btn-md"
              style="margin-right: 20px"
              v-b-modal="'add-online-shop-category-modal'"
            >
              <i class="fa fa-plus-circle"></i>
              Add Category
            </button>
            <AddCategoryModal></AddCategoryModal>
            <button
              class="btn btn-success btn-md"
              v-b-modal="'add-online-shop-subcategory-modal'"
            >
              <i class="fa fa-plus-circle"></i>
              Add Subcategory
            </button>
            <AddSubCategoryModal></AddSubCategoryModal>
          </div>
          <div class=" mt-4">
            <div>
              <b-table
                small
                :fields="addCategoryFields"
                :items="addCategoryItems"
                responsive="sm"
              >
                <!-- A virtual column -->
                <template #cell(ID)="data">
                  {{ data.index + 1 }}
                </template>

                <!-- A custom formatted column -->

                <template #cell(Category)="data">
                  {{ data.item.Category }}
                </template>
                <template #cell(SubCategory)="data">
                  {{ data.item.SubCategory }}
                </template>
                <template #cell(Option)="data">
                  <div class="allLinks">
                    <a
                      class="editLink"
                      v-b-modal="'edit-category-subcategory-modal' + data.index"
                    >
                      <i
                        class="fa fa-pencil"
                        style="font-size: 16px; color: #e9573f"
                      ></i>
                      <EditCategorySubCategoryModal
                        :index="data.index"
                      ></EditCategorySubCategoryModal>
                    </a>
                    <a
                      class="deleteLink"
                      v-b-modal="
                        'delete-online-shop-category-modal' + data.index
                      "
                    >
                      <i
                        class="fa fa-trash-o"
                        style="font-size: 16px; color: #367fa9"
                      ></i>
                      <DeleteCategoryModal
                        :index="data.index"
                      ></DeleteCategoryModal>
                    </a>
                  </div>
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.space {
  height: 25px;
  background-color: white;
  border-radius: 0px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom: 1px solid #ddd;
}
.addButtons {
  display: flex;
  justify-content: center;
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
import AddCategoryModal from "@/components/modals/online-shop-modals/AddCategoryModal";
import AddSubCategoryModal from "@/components/modals/online-shop-modals/AddSubCategoryModal";
import EditCategorySubCategoryModal from "@/components/modals/online-shop-modals/EditCategorySubCategoryModal";
import DeleteCategoryModal from "@/components/modals/online-shop-modals/DeleteCategoryModal";
export default {
  components: {
    AddCategoryModal,
    AddSubCategoryModal,
    EditCategorySubCategoryModal,
    DeleteCategoryModal,
  },
  data() {
    return {
      addCategoryFields: ["ID", "Category", "SubCategory", "Option"],

      addCategoryItems: [
        {
          Category: "Sameer12",
          SubCategory: "categ",
        },
        {
          Category: "Sameer12",
          SubCategory: "categ",
        },
        {
          Category: "Sameer12",
          SubCategory: "categ",
        },
      ],
    };
  },
};
</script>