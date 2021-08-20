<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Add Music</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-music-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Music
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addMusicFields"
                    :items="addMusicItems"
                    responsive="sm"
                    class="tableStyles"
                  >
                    <!-- A virtual column -->
                    <!-- <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template> -->

                    <!-- A custom formatted column -->
                    <template #cell(musicName)="data">
                      <b>{{ data.item.musicName }}</b>
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(musicCategory)="data">
                      {{ data.item.musicCategory }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(track)="data">
                      <audio controls="">
                          <source :src="data.item.track" type="audio/ogg">
                        </audio>
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
                          v-b-modal="'edit-music-modal' + data.index + 'music'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>

                      </div>
                        <EditMusicModal :index="data.index + 'music'"></EditMusicModal>
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
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-category-modal'">
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

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(category)="data">
                      {{ data.item.category }}
                    </template>
                    <template #cell(status)="data">
                      <b-badge
                        variant="success"
                        style="background-color: #28a745"
                        >{{ data.item.status }}</b-badge
                      >
                    </template>
                    <template #cell(option)="data">
                      <div class="allLinks newsCategoryLinks">
                        <a
                          class="editLink"
                          v-b-modal="
                            'edit-music-category-modal' +
                            data.index +
                            'music-category'
                          "
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="
                            'delete-music-category-modal' +
                            data.index +
                            'music-category'
                          "
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      
                     
                      <EditNewsCategoryModal
                        :index="data.index + 'news-category'"
                      ></EditNewsCategoryModal>
                      <DeleteMusicCategoryModal
                        :index="data.index + 'music-category'"
                      ></DeleteMusicCategoryModal>
                      <EditMusicCategoryModal
                        :index="data.index + 'music-category'">
                        </EditMusicCategoryModal>
                    </template>
                  </b-table>    
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card><AddMusicModal></AddMusicModal> <AddCategoryModal></AddCategoryModal>
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
  justify-content: flex-start;
  width: 42%;
}
a.editLink {
  border: 2px solid #e9573f;
  padding: 3px 8px;
  border-radius: 5px;
  cursor: pointer;
}

 
.allLinks.newsCategoryLinks {
  display: flex;
}
</style>

    
<script>
import AddMusicModal from "@/components/modals/music-modals/AddMusicModal";
import AddCategoryModal from "@/components/modals/music-modals/AddCategoryModal";
import EditMusicModal from "@/components/modals/music-modals/EditMusicModal";
import DeleteMusicCategoryModal from "@/components/modals/music-modals/DeleteMusicCategoryModal";
import EditMusicCategoryModal from "@/components/modals/music-modals/EditMusicCategoryModal";

export default {
  components: {
      AddMusicModal,
      AddCategoryModal,
      EditMusicModal,
      DeleteMusicCategoryModal,
      EditMusicCategoryModal
  },
  data() {
    return {
      addMusicFields: [
        // A virtual column that doesn't exist in items
        // A column that needs custom formatting
        { key: "musicName", label: "Music Name" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "musicCategory", label: "Category" },
        // A regular column
        { key: "track", label: "Track" },
        // A virtual column made up from two fields
        { key: "status", label: "Status" },
        //
        { key: "option", label: "Option" },
      ],
      addMusicItems: [
        {
          musicName: "Sameer",
          musicCategory: "categ",
          track: require("@/assets/Count On Me.mp3"),
          status: "Publish",
        },
        {
          musicName: "Sameer",
          musicCategory: "categ",
          track: require("@/assets/Count On Me.mp3"),
          status: "Publish",
        },
        {
          musicName: "Sameer",
          musicCategory: "categ",
          track: require("@/assets/Count On Me.mp3"),
          status: "Publish",
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