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
                  <button class="btn btn-success btn-md">
                    <i class="fa fa-plus-circle"></i>
                    Add History
                  </button>
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
                    
                    <template #cell(option)>
                      <div class="allLinks">
                        <a
                          class="editLink"
                         
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          
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
                  <button class="btn btn-success btn-md" v-b-modal="'add-news-category-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Category
                  </button>
                  
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
                    <template #cell(option)>
                      <div class="allLinks">
                        <a
                          class="editLink"
                          
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          
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


export default {
  
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