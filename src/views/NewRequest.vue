<template>
  <div>
    <section id="page-content">
      <div class="container bg-white p-4"></div>
      <div class="container bg-white">
      <b-card-text>
                
                <div>
                  <b-table
                    small
                    :fields="newRequestFields"
                    :items="newRequestItems"
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
                    <template #cell(username)="data">
                      {{ data.item.username }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(fanpageName)="data">
                      {{ data.item.fanpageName }}
                    </template>
                    <template #cell(status)="data">
                      {{ data.item.status }}
                    </template>
                    <template #cell(option)>
                      <div class="allLinks">
                        <a
                          class="acceptLink"
                          
                        >
                          <i
                            class="fa fa-check"
                            style="font-size: 16px; color: black"
                          ></i>
                          
                        </a>
                        <a
                          class="denyLink"
                          
                        >
                          <i
                            class="fa fa-times"
                            style="font-size: 16px; color: black"
                          ></i>
                          
                        </a>
                       
                      </div>
                      
                    </template>
                  </b-table>
                </div>
              </b-card-text>
      </div>
    </section>
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
a.acceptLink {
  border: 2px solid black;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 3px;
}
a.denyLink {
  border: 2px solid black;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}


</style>

    
<script>
export default {
  data() { 
    return {
      newRequestFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "category", label: "Category" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "username", label: "Username" },
        // A regular column
        { key: "fanpageName", label: "Fanpage Name" },
        // A virtual column made up from two fields
        { key: "status", label: "Status" },
        //
        { key: "option", label: "Option" },
      ],
      newRequestItems: [
        {
          category: "Sameer",
          username: "categ",
          fanpageName: "categ",
          status: "categ"
        },
        {
          category: "Sameer",
          username: "categ",
          fanpageName: "categ",
          status: "categ"
        },
        {
          category: "Sameer",
          username: "categ",
          fanpageName: "categ",
          status: "categ"
        },
        
      ],
      
    };
  },
  
};
</script>