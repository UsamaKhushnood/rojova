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
                <button class="btn btn-success" v-b-modal="'add-new-video-modal'">Add Video</button>
                <AddVideoModal></AddVideoModal>
              </div>
            </div>
            <!-- <div class="thumbnail repeater-thumbnail">
              <img src="@/assets/img/BILLY-ARGEL-GINGA.jpg" style="width: 100px; height: 90px" />
              <div class="img-description">
                <button type="button" class="btn btn-success">
                  <i
                    class="fa fa-pencil"
                    data-toggle="modal"
                    data-target="#edit_new_smile"
                  ></i>
                </button>
                <button
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#modal-remove"
                >
                  <i class="fa fa-trash"></i>
                </button>
              </div>

              <div class="col-x-12" style="background-color: #ddd">title</div>
            </div> -->
            <div class="overlayContent" style="height: 450px">
            <div class="container">
              <img src="@/assets/img/BILLY-ARGEL-GINGA.jpg" alt="" />
              <div class="text-center bg-black title">Title</div>
              <div class="overlay"></div>
              <div class="button">
                <a> <i class="fa fa-pencil"></i> </a>
                <a> <i class="fa fa-trash"></i> </a>
              </div>
            </div>
            </div>

            <div class="overflow-auto d-flex justify-content-center mt-4">
    <!-- Use text in props -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      
    ></b-pagination>


        </div>
          </b-card-text>
        </b-card>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 150px;
  height: 150px;
  float: left;
}

.overlay {
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    -webkit-transition: background 0.5s ease;
    transition: background 0.5s ease;
}

.container:hover .overlay {
  display: block;
  background: rgba(0, 0, 0, 0.75);
}

.container img {
position: absolute;
    width: 150px;
    height: 150px;
    left: 0;
}
.container .title {
  position: absolute;
  width: 150px;
  top: 150px;
  left: 0;
}

.button {
  position: absolute;
  width: 150px;
  left: 0;
  top: 65px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.button a {
  padding: 5px 15px;
  text-align: center;
  color: white;
  border: solid 2px white;
  z-index: 1;
}

.container:hover .button {
  opacity: 1;
}
.container:hover .button a i {
  color: white;
}
</style>

<script>
import AddVideoModal from "@/components/modals/main-page-modals/AddVideoModal"
export default {
  components: { AddVideoModal },
  data(){
    return {
      rows: 20,
        perPage: 5,
        currentPage: 1,
    }
  }
}
</script>