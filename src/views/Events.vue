<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Coming Soon</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md"
                 
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add Item
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="comingSoonFields"
                    :items="comingSoonItems"
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
                    <template #cell(start)="data">
                      {{ data.item.start }}
                    </template>
                    <template #cell(tickets)="data">
                      {{ data.item.tickets }}
                    </template>

                    <template #cell(option)>
                      <div class="allLinks">
                        <a class="editLink"
                        
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a class="deleteLink"
                        
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
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
                    v-b-modal="'add-category-modal'"
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add Category
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addItemCategoryFields"
                    :items="addSchoolCategoryItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(image)="data">
                      <img :src="data.item.image" alt="item image"
                      style="width: 100px; height: auto;">
                    </template>
                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-category-modal' + data.index + 'category'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-category-modal' + data.index + 'category'"
                           
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                    <DeleteCategoryModal :index="data.index + 'category'"></DeleteCategoryModal>
                    <EditCategoryModal :index="data.index + 'category'"></EditCategoryModal>

                    </template>
                  </b-table>
                </div>
              </b-card-text>

                <AddCategoryModal></AddCategoryModal>
              
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

a.deleteLink {
  border: 2px solid #367fa9;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 3px;
}
</style>

    
<script>
  import DeleteItemModal from "@/components/modals/school-modals/DeleteItemModal";
  import EditItemModal from "@/components/modals/school-modals/EditItemModal";
  import AddItemModal from "@/components/modals/school-modals/AddItemModal";
  import DeleteCategoryModal from "@/components/modals/school-modals/DeleteCategoryModal";
  import EditCategoryModal from "@/components/modals/school-modals/EditCategoryModal";
  import AddCategoryModal from "@/components/modals/school-modals/AddCategoryModal";
//  import EditVideoModal from "@/components/modals/videos-modals/EditVideoModal";
//  import AddVideoModal from "@/components/modals/videos-modals/AddVideoModal";
//  import AddVideoCategoryModal from "@/components/modals/videos-modals/AddVideoCategoryModal";
//  import EditVideoCategoryModal from "@/components/modals/videos-modals/EditVideoCategoryModal";
//  import DeleteVideoCategoryModal from "@/components/modals/videos-modals/DeleteVideoCategoryModal";

export default {
    components: {
     DeleteItemModal,
     EditItemModal,
     AddItemModal,
     DeleteCategoryModal,
     EditCategoryModal,
     AddCategoryModal,
  //      EditVideoModal,
  //      AddVideoModal,
  //      AddVideoCategoryModal,
  //      EditVideoCategoryModal,
  //      DeleteVideoCategoryModal,
   },
  data() {
    return {
      comingSoonFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "category", label: "Category" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "title", label: "Title" },
        // A regular column
        { key: "start", label: "Start" },
        { key: "tickets", label: "Tickets" },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      comingSoonItems: [
        {
          category: "categ",
          title: "categ",
          start: "categ",
          tickets: "categ",
        },
        {
          category: "categ",
          title: "categ",
          start: "categ",
          tickets: "categ",
        },
        {
          category: "categ",
          title: "categ",
          start: "categ",
          tickets: "categ",
        },
        
      ],
      addItemCategoryFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "image", label: "Image" },
        { key: "category", label: "Category" },
        //
        { key: "option", label: "Option" },
      ],
      addSchoolCategoryItems: [
        {
            image: require("@/assets/img/media/realistic/4.jpg"),
            category: 'categ'
        },
        {
            image: require("@/assets/img/media/realistic/4.jpg"),
            category: 'categ'
        },
        {
            image: require("@/assets/img/media/realistic/4.jpg"),
            category: 'categ'
        }
      ],
    };
  },
};
</script>