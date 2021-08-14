<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Add News</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md" v-b-modal="'add-new-news-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add New News
                  </button>
                  <AddNewNewsModal></AddNewNewsModal>
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
                    <template #cell(newsDescription)="data">
                      {{ data.item.newsDescription }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(newsCategory)="data">
                      {{ data.item.newsCategory }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(newsImage)="data">
                      {{ data.item.newsImage }}
                    </template>
                    <template #cell(status)="data">
                      <b-badge
                        variant="success"
                        style="background-color: #28a745"
                        >{{ data.item.status }}</b-badge
                      >
                    </template>
                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="
                            'edit-news-modal' +
                            data.index"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"

                          ></i>
                          <EditNewsModal
                        :index="data.index"
                      ></EditNewsModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-news-modal' + data.index + 'news'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      
                      <DeleteNewsModal
                        :index="data.index + 'news'"
                      ></DeleteNewsModal>
                    </template>
                  </b-table>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Manage News</strong>
              </template>
              <b-card-text>
                <div>
                  <b-table
                    small
                    :fields="manageNewsFields"
                    :items="manageNewsItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(ID)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(newsDescription)="data">
                      {{ data.item.newsDescription }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(newsCategory)="data">
                      {{ data.item.newsCategory }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(newsImage)="data">
                      {{ data.item.newsImage }}
                    </template>
                    <template #cell(Status)="data">
                      <b-badge
                        variant="success"
                        style="background-color: #28a745"
                        >{{ data.item.Status }}</b-badge
                      >
                    </template>
                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="
                            'edit-manage-news-modal' + data.index"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditManageNewsModal :index="data.index"></EditManageNewsModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="
                            'delete-news-modal' + data.index + 'manage-news'
                          "
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      <DeleteNewsModal
                        :index="data.index + 'manage-news'"
                      ></DeleteNewsModal>
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
                  <button class="btn btn-success btn-md" v-b-modal="'add-news-category-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Category
                  </button>
                  <AddNewsCategoryModal></AddNewsCategoryModal>
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
                          v-b-modal="'edit-news-category-modal' + data.index"
                        >
                          <EditNewsCategoryModal
                            :index="data.index"
                          ></EditNewsCategoryModal>
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="
                            'delete-news-modal' + data.index + 'news-category'
                          "
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>

                      <DeleteNewsModal
                        :index="data.index + 'news-category'"
                      ></DeleteNewsModal>
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

a.deleteLink {
  border: 2px solid #367fa9;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 3px;
}
</style>

    
<script>
import AddNewNewsModal from "@/components/modals/news-modals/AddNewNewsModal";
import EditNewsModal from "@/components/modals/news-modals/EditNewsModal";
import EditManageNewsModal from "@/components/modals/news-modals/EditManageNewsModal";
import DeleteNewsModal from "@/components/modals/news-modals/DeleteNewsModal";
import EditNewsCategoryModal from "@/components/modals/news-modals/EditNewsCategoryModal";
import AddNewsCategoryModal from "@/components/modals/news-modals/AddNewsCategoryModal";

export default {
  components: {
    AddNewNewsModal,
    EditManageNewsModal,
    EditNewsModal,
    DeleteNewsModal,
    EditNewsCategoryModal,
    AddNewsCategoryModal,
  },
  data() {
    return {
      addNewsFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "newsDescription", label: "News Description" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "newsCategory", label: "News Category" },
        // A regular column
        { key: "newsImage", label: "News Image" },
        // A virtual column made up from two fields
        { key: "status", label: "Status" },
        //
        { key: "option", label: "Option" },
      ],
      addNewsItems: [
        {
          newsDescription: "Sameer",
          newsCategory: "categ",
          newsImage: "categ",
          status: "active",
          option: "buttons here",
        },
        {
          newsDescription: "Sameer",
          newsCategory: "categ",
          newsImage: "categ",
          status: "active",
          option: "buttons here",
        },
        {
          newsDescription: "Sameer",
          newsCategory: "categ",
          newsImage: "categ",
          status: "active",
          option: "buttons here",
        },
      ],
      // new style 
      manageNewsFields: [
        'ID','NewsDescription', 'NewsCategory', 'NewsImgaes', 'Status', 'Option'
      ],
      
      manageNewsItems: [
        {
          NewsDescription: "Sameer12",
          NewsCategory: "categ",
          NewsImgaes: "categ",
          Status: "active",
          Option: "buttons here",
        },
        {
          NewsDescription: "Sameer12",
          NewsCategory: "categ",
          NewsImgaes: "categ",
          Status: "active",
          Option: "buttons here",
        },
        {
          NewsDescription: "Sameer12",
          NewsCategory: "categ",
          NewsImgaes: "categ",
          Status: "active",
          Option: "buttons here",
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