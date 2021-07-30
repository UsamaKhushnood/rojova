<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Manage Video</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-video-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Video
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="manageVideoFields"
                    :items="manageVideoItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(thumbnail)="data">
                      <img :src="data.item.thumbnail" alt="thumbnail"
                      style="width: 150px; height: auto">
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(letters)="data">
                      {{ data.item.letters }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(videoTitle)="data">
                      {{ data.item.videoTitle }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-video-modal' + data.index + 'video'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-video-modal' + data.index + 'video'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      <DeleteVideoModal :index="data.index + 'video'"></DeleteVideoModal>                      
                      <EditVideoModal :index="data.index + 'video'"></EditVideoModal>
                    </template>
                  </b-table>
                </div>
              </b-card-text>
              <AddVideoModal></AddVideoModal>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Add Category</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-video-category-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Video Category
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addVideoCategoryFields"
                    :items="addVideoCategoryItems"
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

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-video-category-modal' + data.index + 'video'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-video-category-modal' + data.index + 'video'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                        <DeleteVideoCategoryModal :index="data.index + 'video'"></DeleteVideoCategoryModal>           
                        <EditVideoCategoryModal :index="data.index + 'video'"></EditVideoCategoryModal>           

                    </template>
                  </b-table>
                </div>
              </b-card-text>
              <AddVideoCategoryModal></AddVideoCategoryModal>
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
 import DeleteVideoModal from "@/components/modals/videos-modals/DeleteVideoModal";
 import EditVideoModal from "@/components/modals/videos-modals/EditVideoModal";
 import AddVideoModal from "@/components/modals/videos-modals/AddVideoModal";
 import AddVideoCategoryModal from "@/components/modals/videos-modals/AddVideoCategoryModal";
 import EditVideoCategoryModal from "@/components/modals/videos-modals/EditVideoCategoryModal";
 import DeleteVideoCategoryModal from "@/components/modals/videos-modals/DeleteVideoCategoryModal";

export default {
   components: {
     DeleteVideoModal,
     EditVideoModal,
     AddVideoModal,
     AddVideoCategoryModal,
     EditVideoCategoryModal,
     DeleteVideoCategoryModal,
   },
  data() {
    return {
      manageVideoFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "thumbnail", label: "Thumbnail" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "letters", label: "letters" },
        // A regular column
        { key: "videoTitle", label: "Video Title" },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      manageVideoItems: [
        {
          thumbnail: require('@/assets/img/media/realistic/4.jpg'),
          letters: "categ",
          videoTitle: "categ"
        },
        {
          thumbnail: require('@/assets/img/media/realistic/4.jpg'),
          letters: "categ",
          videoTitle: "categ"
        },
        {
          thumbnail: require('@/assets/img/media/realistic/4.jpg'),
          letters: "categ",
          videoTitle: "categ"
        },
        
      ],
      addVideoCategoryFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "category", label: "Category" },
        //
        { key: "option", label: "Option" },
      ],
      addVideoCategoryItems: [
        {
          category: 'categ',
        },
        {
          category: 'categ',
        },
        
        
      ],

    
    };
  },
};
</script>