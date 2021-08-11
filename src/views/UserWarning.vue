<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body class="p-3">
          
              <b-card-text>
                <div class="d-flex align-items-center mb-4">
                  <input class="form-control w-25" type="search" placeholder="Seach">
                  <span class="btn btn-primary fa fa-search ms-2"></span>
                </div>
                <div>
                  <b-table
                    small
                    :fields="userWarningFields"
                    :items="userWarningItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(image)="data">
                      <img :src="data.item.image" alt="thumbnail"
                      style="width: 150px; height: auto">
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(username)="data">
                      {{ data.item.username }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(warning)="data">
                      {{ data.item.warning }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-user-warning-modal' + data.index"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-user-warning-modal' + data.index"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      <DeleteUserWarningModal :index="data.index"></DeleteUserWarningModal>                      
                      <EditUserWarningModal :index="data.index"></EditUserWarningModal>
                    </template>
                  </b-table>
                </div>
              </b-card-text>
              <AddVideoModal></AddVideoModal>
            
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
import DeleteUserWarningModal from "@/components/modals/user-warning-modals/DeleteUserWarningModal.vue"
import EditUserWarningModal from "@/components/modals/user-warning-modals/EditUserWarningModal.vue"
export default {
  components: { DeleteUserWarningModal, EditUserWarningModal },
  data() {
    return {
      userWarningFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "image", label: "Image" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "username", label: "Username" },
        // A regular column
        { key: "warning", label: "Warning" },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      userWarningItems: [
        {
          image: require('@/assets/img/media/realistic/4.jpg'),
          username: "categ",
          warning: "categ"
        },
        {
          image: require('@/assets/img/media/realistic/4.jpg'),
          username: "categ",
          warning: "categ"
        },
        {
          image: require('@/assets/img/media/realistic/4.jpg'),
          username: "categ",
          warning: "categ"
        },
        
        
      ],
    

    
    };
  },
};
</script>