<template>
  <div>
    <section id="page-content">
      <!-- <div class="container bg-white p-4"></div> -->
      <div class="p-4 bg-white">
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
              <template #cell(option)="data">
                <div class="allLinks">
                  <a class="acceptLink">
                    <i
                      class="fa fa-check"
                      style="font-size: 16px;"
                    ></i>
                  </a>
                  <a
                    class="denyLink"
                    v-b-modal="'denied-request-modal' + data.index"
                  >
                    <i
                      class="fa fa-times"
                      style="font-size: 16px;"
                    ></i>
                    <DeniedRequestModal
                      :index="data.index"
                    ></DeniedRequestModal>
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
color: red;
} 
a.denyLink {
color: red
} 
</style>

    
<script>
import DeniedRequestModal from "@/components/modals/fanpage-modals/DeniedRequestModal.vue";
export default {
  components: { DeniedRequestModal },
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
          status: "categ",
        },
        {
          category: "Sameer",
          username: "categ",
          fanpageName: "categ",
          status: "categ",
        },
        {
          category: "Sameer",
          username: "categ",
          fanpageName: "categ",
          status: "categ",
        },
      ],
    };
  },
};
</script>