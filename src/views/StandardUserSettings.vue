<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body class="mt-0">
          <b-tabs pills card vertical nav-wrapper-class="w-25">
            <b-tab active>
              <template #title>
                <i class="fa fa-bullhorn iconStyle"></i>
                <strong>Posts</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Post</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Like</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Dislike</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Comments</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Pray</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Sad</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Victory</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Report</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Reply Comment</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>View Later</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Voice Comment</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Add Post</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Post Images</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Post Videos</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share Position</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Live Stream</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Post Links</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-music iconStyle"></i>
                <strong>Music</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Music</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share Music</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Create Playlist</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Playlist Total</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Listen Amount Per Day</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Add to Favourite</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Artist to Favourite</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Send to Friend</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Buy Music</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-rss iconStyle"></i>
                <strong>News</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">News</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Like</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Dislike</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Comments</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Share</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Pray</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Sad</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Victory</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Report</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Reply Comment</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>View Later</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Voice Comment</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-calendar iconStyle"></i>
                <strong>Events</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Events</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Like</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Dislike</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Comments</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Share</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Pray</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Sad</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Victory</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Report</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Reply Comment</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>View Later</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Voice Comment</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="2">
                    <label>Buy Ticket</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-video-camera iconStyle"></i>
                <strong>Videos</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Videos</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Status</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share Videos</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Create Playlist</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Playlist Total</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Listen Amount Per Day</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Add to Favourite</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Artist to Favourite</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Send to Friend</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Buy Music</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-user iconStyle"></i>
                <strong>Friends</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Friends</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Send Friend Request</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Total Friends</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Family Option</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Acquaitance Option</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Family Tree</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>

                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-comments iconStyle"></i>
                <strong>Chat</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Chat</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Voice Message</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Text Message</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Sent Smilies</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Sent Videos</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Sent Images</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Sent Files</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share Position</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Voice Calls</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Video Calls</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share Position</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Sent Links</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-internet-explorer iconStyle"></i>
                <strong>Fanpage</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Fanpage</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Create Fanpage</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Fanpage Total</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Create Groups</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Group Total</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Be Follower</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Be Member</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Be Admin</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Be Author</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-cart-plus iconStyle"></i>
                <strong>Online Shop</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Online Shop</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Buy Items</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>View Later</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Wishlist</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>View Later</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div class="d-flex justify-content-end align-items-center mt-5 pt-2 border-top">
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
                
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-cart-arrow-down iconStyle"></i>
                <strong>Bazar</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Bazar</h4>
               
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Contact User</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Add Items</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>View Later</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Extend</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Repost</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Playlist Total</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div class="d-flex justify-content-end align-items-center mt-5 pt-2 border-top">
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-clock-o iconStyle"></i>
                <strong>History</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">History</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Like</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Dislike</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Comments</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Pray</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Sad</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Victory</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Report</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Reply Comment</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>View Later</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Voice Comment</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Add Post</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Post Images</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Post Videos</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share Position</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Live Stream</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Post Links</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div
                  class="
                    d-flex
                    justify-content-end
                    align-items-center
                    mt-5
                    pt-2
                    border-top
                  "
                >
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-television iconStyle"></i>
                <strong>Media</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Media</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Watch</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Add to Favourite</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <div class="d-flex justify-content-end align-items-center mt-5 pt-2 border-top">
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-check-circle iconStyle"></i>
                <strong>Voting</strong>
              </template>
              <b-card-text>
                <h4 class="mt-0">Voting</h4>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Vote</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                <b-row class="align-items-center mb-3">
                  <b-col cols="3">
                    <label>Share</label>
                  </b-col>
                  <b-col cols="5">
                    <b-form-select
                      v-model="selected"
                      :options="options"
                      class="form-control border"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-select>
                  </b-col>
                </b-row>
                
                <div class="d-flex justify-content-end align-items-center mt-5 pt-2 border-top">
                  <b-button pill variant="outline-success">Save</b-button>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </section>
  </div>
</template>

<style scoped>
.iconStyle {
  font-size: 25px;
}
</style>

<script>
export default {
  data() {
    return {
      selected: "A",
      options: [
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" },
      ],
    };
  },
};
</script>