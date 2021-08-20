<template>
  <div>
    <b-modal
      :id="'edit-language-modal' + index" 
      header-bg-variant="success"
      header-text-variant="light"
      size="sm"
      title="Edit Language"
    >
    <b-card no-body class="p-2">
        <b-card-text>
          
          <div>
            <b-table
              small
              :fields="languageFields"
              :items="languageItems"
              responsive="sm"
            >
              <!-- A virtual column -->
              <template #cell(index)="data">
                {{ data.index + 1 }}
              </template>

              <template #cell(type)="data">
                {{ data.item.type }}
              </template>

              <template #cell(file)="data">
                {{ data.item.file }}
              </template>

              <template #cell(progress)="data">
                <div class="menu-info mrgn0">
                  <div class="progress progress-sm mrgn0">
                    <div
                      :style="{width: data.item.progress}"
                      class="progress-bar progress-bar-info"
                      
                    >
                      {{ data.item.progress }}
                    </div>
                    <!-- <div
                      style="width: 45%"
                      class="progress-bar progress-bar-info"
                      v-else-if="data.item.progress == '45%'"
                    >
                      {{ data.item.progress }}
                    </div> -->
                  </div>
                </div>
              </template>

              <template #cell(done)="data">
                {{ data.item.done }}
              </template>

              <!-- A custom formatted column -->

              <template #cell(total)="data">
                {{ data.item.total }}
              </template>

              <template #cell(actions)="data">
                <div class="allLinks">
                  <a class="editLink" v-b-modal="'edit-edit-language-modal' + data.index">
                    <i
                      class="fa fa-pencil"
                      style="font-size: 16px; color: #e9573f"
                    ></i>
                    <EditEditLanguageModal :editEditIndex="data.index"></EditEditLanguageModal>
                  </a>
                  <!-- <a class="deleteLink">
                    <i
                      class="fa fa-trash-o"
                      style="font-size: 16px; color: #367fa9"
                    ></i>
                  </a> -->
                </div>
              </template>
            </b-table>
          </div>
        </b-card-text>
      </b-card>
      
      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        
        <b-button size="md" variant="primary" @click="cancel()">
          Close
        </b-button>
      </template>
    </b-modal>
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
import EditEditLanguageModal from "@/components/modals/language-modals/EditEditLanguageModal"
export default {
    props: ['index'],
    components: { EditEditLanguageModal },
  data() {
    return {
      languageFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "type", label: "Type" },
        { key: "file", label: "File" },
        { key: "progress", label: "Progress" },
        { key: "done", label: "Done" },
        { key: "total", label: "Total" },
        { key: "actions", label: "Actions" },
      ],
      languageItems: [
        {
          type: "Application",
          file: "Main",
          progress: "95%",
          done: "Done",
          total: "1234",
        },
        {
          type: "Application",
          file: "Task",
          progress: "95%",
          done: "Done",
          total: "1234",
        },
        {
          type: "Application",
          file: "Projects",
          progress: "95%",
          done: "Done",
          total: "1234",
        },
        {
          type: "Application",
          file: "Leads",
          progress: "95%",
          done: "Done",
          total: "1234",
        },
       
      ],
    };
  },
};
</script>


