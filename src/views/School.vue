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
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-item-modal'"
                  >
                    <i class="fa fa-plus-circle"></i>
                    Add Item
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="manageItemsFields"
                    :items="manageSchoolItems"
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
                        alt="image"
                        style="width: 100px; height: auto"
                      />
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(itemName)="data">
                      {{ data.item.itemName }}
                    </template>
                    <template #cell(sound)="data">
                      <div class="container">
                        <audio controls>
                          <source :src="data.item.sound1" type="audio/mpeg" />
                        </audio>
                      </div>
                      <div class="container">
                        <audio controls>
                          <source :src="data.item.sound2" type="audio/mpeg" />
                        </audio>
                      </div>
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a class="editLink"
                        v-b-modal="'edit-item-modal' + data.index + 'item'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a class="deleteLink"
                        v-b-modal="'delete-item-modal' + data.index + 'item'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      <DeleteItemModal :index="data.index + 'item'"></DeleteItemModal>
                      <EditItemModal :index="data.index + 'item'"></EditItemModal>
                    </template>
                  </b-table>
                </div>
              </b-card-text>
              <AddItemModal></AddItemModal>
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
      manageItemsFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "image", label: "Image" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "category", label: "Category" },
        // A regular column
        { key: "itemName", label: "Item Name" },
        { key: "sound", label: "Sound" },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      manageSchoolItems: [
        {
          image: require("@/assets/img/media/realistic/4.jpg"),
          category: "categ",
          itemName: "categ",
          sound1: require("@/assets/Count On Me.mp3"),
          sound2: require("@/assets/Count On Me.mp3"),
        },
        {
          image: require("@/assets/img/media/realistic/4.jpg"),
          category: "categ",
          itemName: "categ",
          sound1: require("@/assets/Count On Me.mp3"),
          sound2: require("@/assets/Count On Me.mp3"),
        },
        {
          image: require("@/assets/img/media/realistic/4.jpg"),
          category: "categ",
          itemName: "categ",
          sound1: require("@/assets/Count On Me.mp3"),
          sound2: require("@/assets/Count On Me.mp3"),
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