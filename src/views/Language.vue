<template>
  <div>
    <section id="page-content">
      <b-card no-body class="p-3">
        <b-card-text>
          <div class="d-flex justify-content-center mb-4">
            <button class="btn btn-success btn-md"
            v-b-modal="'add-language-modal'">
              <i class="fa fa-plus-circle"></i>
              Add Language
            </button>
            <AddLanguageModal></AddLanguageModal>
          </div>
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

              <template #cell(icon)="data">
                <img :src="data.item.icon" alt="icon" style="width: 40px" />
              </template>

              <template #cell(language)="data">
                {{ data.item.language }}
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
                  <a class="editLink" v-b-modal="'edit-language-modal' + data.index">
                    <i
                      class="fa fa-pencil"
                      style="font-size: 16px; color: #e9573f"
                    ></i>
                    <EditLanguageModal :index="data.index"></EditLanguageModal>
                  </a>
                  <a class="deleteLink" v-b-modal="'delete-language-modal' + data.index">
                    <i
                      class="fa fa-trash-o"
                      style="font-size: 16px; color: #367fa9"
                    ></i>
                    <DeleteLanguageModal :index="data.index"></DeleteLanguageModal>
                  </a>
                </div>
              </template>
            </b-table>
          </div>
        </b-card-text>
      </b-card>
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
import AddLanguageModal from "@/components/modals/language-modals/AddLanguageModal"
import EditLanguageModal from "@/components/modals/language-modals/EditLanguageModal"
import DeleteLanguageModal from "@/components/modals/language-modals/DeleteLanguageModal"
export default {
  components: { AddLanguageModal, EditLanguageModal, DeleteLanguageModal  },
  data() {
    return {
      languageFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        { key: "icon", label: "Icon" },
        { key: "language", label: "Language" },
        { key: "progress", label: "Progress" },
        { key: "done", label: "Done" },
        { key: "total", label: "Total" },
        { key: "actions", label: "Actions" },
      ],
      languageItems: [
        {
          icon: require("@/assets/img/AE.png"),
          language: "Arabic",
          progress: "95%",
          done: "Done",
          total: "1234",
        },
        {
          icon: require("@/assets/img/GB.png"),
          language: "English",
          progress: "45%",
          done: "Done",
          total: "1234",
        },
      ],
    };
  },
};
</script>