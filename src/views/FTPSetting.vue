<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body class="p-3">
          <b-card-text>
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                mb-4
                p-2
                border
              "
            >
              <div class="d-flex align-items-center w-25">
                <input class="form-control" type="search" placeholder="Seach" />
                <span class="btn btn-primary fa fa-search ms-2"></span>
              </div>
              <div class="addVideo">
                <button class="btn btn-success" v-b-modal="'add-new-server-modal'">Add New Server</button>
                <AddNewServerModal></AddNewServerModal>
              </div>
            </div>
            
            <div>
                  <b-table
                    small
                    :fields="ftpSettingsFields"
                    :items="ftpSettingsItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->

                    <template #cell(serverAddress)="data">
                      {{ data.item.serverAddress }}
                    </template>
                    
                    <template #cell(port)="data">
                      {{ data.item.port }}
                    </template>
                    <template #cell(username)="data">
                      {{ data.item.username }}
                    </template>
                    <template #cell(password)="data">
                      {{ data.item.password }}
                    </template>
                    <template #cell(fileLimit)="data">
                      {{ data.item.fileLimit }}
                    </template>
                    <template #cell(status)="data">
                      {{ data.item.status }}
                    </template>

                    <template #cell(actions)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                           v-b-modal="'edit-ftp-settings-modal' + data.index"
                        >
                          
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                          <EditFtpSettingsModal :index="data.index"></EditFtpSettingsModal>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-ftp-settings-modal' + data.index"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                          <DeleteFtpSettingsModal :index="data.index"></DeleteFtpSettingsModal>
                        </a>
                      </div>

                      
                    </template>
                  </b-table>
                </div>

            
          </b-card-text>
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
import AddNewServerModal from "@/components/modals/ftp-settings-modals/AddNewServerModal.vue"
import EditFtpSettingsModal from "@/components/modals/ftp-settings-modals/EditFtpSettingsModal.vue"
import DeleteFtpSettingsModal from "@/components/modals/ftp-settings-modals/DeleteFtpSettingsModal.vue"
export default {
  components: { AddNewServerModal, EditFtpSettingsModal, DeleteFtpSettingsModal },
  data(){
    return {
      ftpSettingsFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "serverAddress", label: "Server Address" },
        { key: "port", label: "Port" },
        { key: "username", label: "Username" },
        { key: "password", label: "Password" },
        { key: "fileLimit", label: "File Limit" },
        { key: "status", label: "Status" },
        { key: "actions", label: "Actions" },
      ],
      ftpSettingsItems: [
        {
          serverAddress: "1233",
          port: "5500",
          username: "Sam",
          password: "Sam123",
          fileLimit: "10",
          status: "1223455"
        },
        {
          serverAddress: "1233",
          port: "5500",
          username: "Sam",
          password: "Sam123",
          fileLimit: "10",
          status: "1223455"
        },
       
        
      ],
    }
  }
}
</script>