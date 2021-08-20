<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body>
          <b-tabs card>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Add Artist</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-artist-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Artist
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addArtistFields"
                    :items="addArtistItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(artistImage)="data">
                      <img :src="data.item.artistImage" alt="artist image"
                      style="width: 150px; height: auto">
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(firstName)="data">
                      {{ data.item.firstName }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(lastName)="data">
                      {{ data.item.lastName }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-artist-modal' + data.index + 'artist'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-artist-modal' + data.index + 'artist'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                      <DeleteArtistModal :index="data.index + 'artist'"></DeleteArtistModal>                      
                      <EditArtistModal :index="data.index + 'artist'"></EditArtistModal>                      

                    </template>
                  </b-table>
                </div>
              </b-card-text>
              <AddArtistModal></AddArtistModal>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Add Album</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-album-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Albums
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addAlbumFields"
                    :items="addAlbumItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(artist)="data">
                      {{ data.item.artist }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(albumsTitle)="data">
                      {{ data.item.albumsTitle }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(totalAlbums)="data">
                      {{ data.item.totalAlbums }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-album-modal' + data.index + 'album'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-album-modal' + data.index + 'album'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                        <DeleteAlbumModal :index="data.index + 'album'"></DeleteAlbumModal>           
                        <EditAlbumModal :index="data.index + 'album'"></EditAlbumModal>           

                    </template>
                  </b-table>
                </div>
              </b-card-text>
              <AddAlbumModal></AddAlbumModal>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-plus-circle iconStyle"></i>
                <strong>Upload Video Clips</strong>
              </template>
              <b-card-text>
                <div class="container-fluid mb-4" align="center">
                  <button class="btn btn-success btn-md"
                  v-b-modal="'add-video-clip-modal'">
                    <i class="fa fa-plus-circle"></i>
                    Add Video Clip
                  </button>
                </div>
                <div>
                  <b-table
                    small
                    :fields="addVideoFields"
                    :items="addVideoItems"
                    responsive="sm"
                  >
                    <!-- A virtual column -->
                    <template #cell(index)="data">
                      {{ data.index + 1 }}
                    </template>

                    <!-- A custom formatted column -->
                    <template #cell(artist)="data">
                      {{ data.item.artist }}
                    </template>

                    <!-- A virtual composite column -->
                    <template #cell(videoTitle)="data">
                      {{ data.item.videoTitle }}
                    </template>

                    <!-- Optional default data cell scoped slot -->
                    <template #cell(totalVideos)="data">
                      {{ data.item.totalVideos }}
                    </template>

                    <template #cell(option)="data">
                      <div class="allLinks">
                        <a
                          class="editLink"
                          v-b-modal="'edit-video-clip-modal' + data.index + 'video-clip'"
                        >
                          <i
                            class="fa fa-pencil"
                            style="font-size: 16px; color: #e9573f"
                          ></i>
                        </a>
                        <a
                          class="deleteLink"
                          v-b-modal="'delete-video-clip-modal' + data.index + 'video-clip'"
                        >
                          <i
                            class="fa fa-trash-o"
                            style="font-size: 16px; color: #367fa9"
                          ></i>
                        </a>
                      </div>
                           <EditVideoClipModal :index="data.index + 'video-clip'"></EditVideoClipModal>        
                           <DeleteVideoClipModal :index="data.index + 'video-clip'"></DeleteVideoClipModal>        

                    </template>
                  </b-table>
                </div>
              </b-card-text>
              <AddVideoClipModal></AddVideoClipModal>
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

 

</style>

    
<script>
import DeleteArtistModal from "@/components/modals/music-modals/DeleteArtistModal";
import DeleteAlbumModal from "@/components/modals/music-modals/DeleteAlbumModal";
import EditAlbumModal from "@/components/modals/music-modals/EditAlbumModal";
import EditArtistModal from "@/components/modals/music-modals/EditArtistModal";
import AddArtistModal from "@/components/modals/music-modals/AddArtistModal";
import AddAlbumModal from "@/components/modals/music-modals/AddAlbumModal";
import AddVideoClipModal from "@/components/modals/music-modals/AddVideoClipModal";
import EditVideoClipModal from "@/components/modals/music-modals/EditVideoClipModal";
import DeleteVideoClipModal from "@/components/modals/music-modals/DeleteVideoClipModal";


export default {
  components: {
    DeleteArtistModal,
    DeleteAlbumModal,
    EditAlbumModal,
    EditArtistModal,
    AddArtistModal,
    AddAlbumModal,
    AddVideoClipModal,
    EditVideoClipModal,
    DeleteVideoClipModal,
  },
  data() {
    return {
      addArtistFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "artistImage", label: "Artist Image" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "firstName", label: "First Name" },
        // A regular column
        { key: "lastName", label: "Last Name " },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      addArtistItems: [
        {
          artistImage: require('@/assets/img/media/realistic/4.jpg'),
          firstName: "categ",
          lastName: "categ"
        },
        {
          artistImage: require('@/assets/img/media/realistic/4.jpg'),
          firstName: "categ",
          lastName: "categ"
        },
        {
          artistImage: require('@/assets/img/media/realistic/4.jpg'),
          firstName: "categ",
          lastName: "categ"
        },
        
      ],
      addAlbumFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "artist", label: "Artist" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "albumsTitle", label: "Albums Title" },
        // A regular column
        { key: "totalAlbums", label: "Total Albums" },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      addAlbumItems: [
        {
          artist: 'categ',
          albumsTitle: "categ",
          totalAlbums: "categ"
        },
        {
          artist: 'categ',
          albumsTitle: "categ",
          totalAlbums: "categ"
        },
        {
          artist: 'categ',
          albumsTitle: "categ",
          totalAlbums: "categ"
        },
      ],
      addVideoFields: [
        // A virtual column that doesn't exist in items
        { key: "index", label: "ID" },
        // A column that needs custom formatting
        { key: "artist", label: "Artist" },
        // { key: 'userimg', label: 'User'},
        // A regular column
        { key: "videoTitle", label: "Video Title" },
        // A regular column
        { key: "totalVideos", label: "Total Videos" },
        // A virtual column made up from two fields
        //
        { key: "option", label: "Option" },
      ],
      addVideoItems: [
        {
          artist: 'categ',
          videoTitle: "categ",
          totalVideos: "categ"
        },
        {
          artist: 'categ',
          videoTitle: "categ",
          totalVideos: "categ"
        },
        {
          artist: 'categ',
          videoTitle: "categ",
          totalVideos: "categ"
        },   
      ],
    
    };
  },
};
</script>