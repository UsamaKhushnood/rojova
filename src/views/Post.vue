<template>
  <div>
    <section id="page-content">
      <b-card no-body>
        <b-tabs card>
          <b-tab>
            <template #title>
              <span>All Posts</span>
            </template>
            <b-card-text>
              <div class="container-fluid bg-white mb-0 searchPost">
                <div class="search input-group">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search"
                  />
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button">
                      <span class="fa fa-search"></span>
                      <span class="sr-only">Search</span>
                    </button>
                  </span>
                </div>
              </div>

              <div class="container-fluid bg-white post">
                <b-container>
                  <b-row
                    class="mt-3"
                    v-for="(post, postIndex) in posts"
                    :key="postIndex"
                  >
                    <b-col cols="2" class="mt-2">
                      <div class="col-xs-2 time" align="center">
                        <div class="col-xs-12 p-2">
                          <b>{{ post.postTime }} <br />ago</b>
                        </div>
                        <div class="vl col-xs-12"></div>
                      </div>
                    </b-col>
                    <b-col cols="10">
                      <div class="col-xs-10 post">
                        <div class="col-xs-12 post-header">
                          <div class="col-xs-4 username">
                            <img
                              style="
                                border-radius: 50%;
                                width: 40px;
                                height: 40px;
                              "
                              :src="post.userImage"
                            />
                            <label style="margin-left: 20px"
                              ><b>{{ post.username }}</b></label
                            >
                            <br />
                            <p style="margin-left: 61px">{{ post.location }}</p>
                          </div>
                          <div class="col-xs-8 postIcons" align="right">
                            <a
                              class="banLink"
                              v-b-modal="'block-user-modal' + postIndex"
                            >
                              <i class="fa fa-ban" style="font-size: 15px"></i>
                            </a>
                            <a
                              class="warnLink"
                              v-b-modal="'warn-user-modal' + postIndex"
                            >
                              <i
                                class="fa fa-exclamation-triangle"
                                style="font-size: 15px"
                              ></i>
                            </a>
                            <a
                              class="deleteLink"
                              v-b-modal="'delete-user-modal' + postIndex"
                            >
                              <i
                                class="fa fa-trash-o"
                                style="font-size: 15px"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <div class="col-xs-12 post-content">
                          <div class="col-xs-5">
                            <p>
                              <b>{{ post.postContent }}</b>
                            </p>
                            <div class="col-xs-6">
                              <img
                                style="width: 160px; height: auto"
                                :src="post.postImage"
                              />
                            </div>
                            <div class="col-xs-12 post-details">
                              <span>
                                <i
                                  class="fa fa-comments"
                                  aria-hidden="true"
                                ></i>
                                <label style="margin-left: 5px">2</label>
                              </span>

                              <span>
                                <i
                                  class="fa fa-thumbs-up"
                                  aria-hidden="true"
                                ></i>
                                <label style="margin-left: 5px">2</label>
                              </span>
                              <span>
                                <i
                                  class="fa fa-thumbs-down"
                                  aria-hidden="true"
                                ></i>
                                <label style="margin-left: 5px">2</label>
                              </span>

                              <span style="color: red">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                                <label style="margin-left: 5px">2</label>
                              </span>
                              <span>
                                <i class="fa fa-frown-o" aria-hidden="true"></i>
                                <label style="margin-left: 5px">2</label>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <BlockUserModal :index="postIndex"></BlockUserModal>
                      <WarnUserModal :index="postIndex"></WarnUserModal>
                      <DeleteUserModal :index="postIndex"></DeleteUserModal>
                    </b-col>
                  </b-row>
                  <!-- <b-row class="mt-3">
                    <b-col cols="2" class="mt-2">
                      <div class="col-xs-2 time" align="center">
                        <div class="col-xs-12 p-2">
                          <b>A month <br />ago</b>
                        </div>
                        <div class="vl col-xs-12"></div>
                      </div>
                    </b-col>
                    <b-col cols="10">
                      <div class="col-xs-10 post">
                        <div class="col-xs-12 post-header">
                          <div class="col-xs-4 username">
                            <img
                              style="
                                border-radius: 50%;
                                width: 40px;
                                height: 40px;
                              "
                              src="@/assets/img/DE.png"
                            />
                            <label style="margin-left: 20px"
                              ><b>username</b></label
                            >
                            <br />
                            <p style="margin-left: 61px">cairo</p>
                          </div>
                          <div class="col-xs-8 postIcons" align="right">
                            <a
                              class="banLink"
                              v-b-modal="'block-user-modal' + 'id'"
                            >
                              <i class="fa fa-ban" style="font-size: 15px"></i>
                            </a>
                            <a
                              class="warnLink"
                              v-b-modal="'warn-user-modal' + 'id'"
                            >
                              <i
                                class="fa fa-exclamation-triangle"
                                style="font-size: 15px"
                              ></i>
                            </a>
                            <a
                              class="deleteLink"
                              v-b-modal="'delete-user-modal' + 'id'"
                            >
                              <i
                                class="fa fa-trash-o"
                                style="font-size: 15px"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <div class="col-xs-12 post-content">
                          <div class="col-xs-5">
                            <p><b>post content</b></p>
                            <div class="col-xs-6">
                              <img
                                style="width: 160px; height: auto"
                                src="@/assets/img/BILLY-ARGEL-GINGA.jpg"
                              />
                            </div>
                            <div class="col-xs-12 post-details">
                              <span>
                                <i
                                  class="fa fa-comments"
                                  aria-hidden="true"
                                ></i>
                                <label style="margin-left: 5px">2</label>
                              </span>

                              <span>
                                <i
                                  class="fa fa-thumbs-up"
                                  aria-hidden="true"
                                ></i>
                                <label style="margin-left: 5px">2</label>
                              </span>
                              <span>
                                <i
                                  class="fa fa-thumbs-down"
                                  aria-hidden="true"
                                ></i>
                                <label style="margin-left: 5px">2</label>
                              </span>

                              <span style="color: red">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                                <label style="margin-left: 5px">2</label>
                              </span>
                              <span>
                                <i class="fa fa-frown-o" aria-hidden="true"></i>
                                <label style="margin-left: 5px">2</label>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <BlockUserModal :index="'id'"></BlockUserModal>
                      <WarnUserModal :index="'id'"></WarnUserModal>
                      <DeleteUserModal :index="'id'"></DeleteUserModal>
                    </b-col>
                  </b-row> -->
                </b-container>
              </div>

              <!-- Pagination Here -->
              <div class="overflow-auto">
                <div>
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    size="sm"
                  ></b-pagination>
                </div>
              </div>
              <!-- Pagination End -->
            </b-card-text>
          </b-tab>
          <b-tab>
            <template #title>
              <span>All Posts</span>
            </template>
            <b-card-text> </b-card-text>
          </b-tab>
          <b-tab>
            <template #title>
              <span>All Posts</span>
            </template>
            <b-card-text> </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </section>
  </div>
</template>

<style scoped>
.col-xs-10.post {
  border: none;
}
.col-xs-12.post-header {
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 0 15px;
  position: relative;
}
.col-xs-12.post-details {
  display: flex;
  justify-content: space-between;
  width: 160px;
}
.col-xs-12.post-content {
  border: 1px solid #ddd;
  padding: 15px;
}
.col-xs-8.postIcons {
  position: absolute;
  top: 10px;
  left: 83%;
}
.bg-white.container-fluid.searchPost {
  border: 1px solid #d0d0d0;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.search.input-group {
  display: flex;
  align-items: center;
  width: 30%;
}
.input-group .btn {
  border: 1px solid #d0d0d0;
  border-left: none;
  box-shadow: none;
}
.bg-white.container-fluid.post {
  display: flex;
  align-items: center;
  border: 1px solid #d0d0d0;
}
.col-xs-2.time {
  position: relative;
  background-color: #ddd;
  color: black;
}
.vl {
  border-left: 3px solid #ddd;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 81px;
}
.banLink {
  padding: 2px 7px;
  margin-right: 2px;
  cursor: pointer;
  background-color: #e9573f;
  color: white;
}
.warnLink {
  padding: 2px 7px;
  margin-right: 2px;
  cursor: pointer;
  background-color: gray;
  color: white;
}
.deleteLink {
  padding: 2px 7px;
  cursor: pointer;
  background-color: #009dc8;
  color: white;
}
</style>

<script>
import BlockUserModal from "@/components/modals/standard-user-modals/BlockUserModal";
import WarnUserModal from "@/components/modals/standard-user-modals/WarnUserModal";
import DeleteUserModal from "@/components/modals/standard-user-modals/DeleteUserModal";

export default {
  components: {
    BlockUserModal,
    WarnUserModal,
    DeleteUserModal,
  },
  data() {
    return {
      posts: [
        {
          postTime: "A month",
          userImage: require("@/assets/img/DE.png"),
          username: "username",
          location: "cairo",
          postContent: "post content",
          postImage: require("@/assets/img/BILLY-ARGEL-GINGA.jpg"),
        },
        {
          postTime: "A month",
          userImage: require("@/assets/img/DE.png"),
          username: "username",
          location: "cairo",
          postContent: "post content",
          postImage: require("@/assets/img/BILLY-ARGEL-GINGA.jpg"),
        },
      ],
      rows: 100,
      currentPage: 1,
    };
  },
};
</script>