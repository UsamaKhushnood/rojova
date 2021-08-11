<template>
  <div>
    <section id="page-content">
      <div>
        <b-card no-body class="p-4 pb-5">
          <b-tabs pills card vertical nav-wrapper-class="w-25">
            <b-tab active>
              <template #title>
                <i class="fa fa-bullhorn iconStyle"></i>
                <strong>Posts</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-music iconStyle"></i>
                <strong>Music</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-rss iconStyle"></i>
                <strong>News</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-calendar iconStyle"></i>
                <strong>Events</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-video-camera iconStyle"></i>
                <strong>Videos</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-cart-plus iconStyle"></i>
                <strong>Online Shop</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-cart-arrow-down iconStyle"></i>
                <strong>Bazar</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-clock-o iconStyle"></i>
                <strong>History</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-television iconStyle"></i>
                <strong>Media</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template #title>
                <i class="fa fa-check-circle iconStyle"></i>
                <strong>Voting</strong>
              </template>
              <b-card-text>
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme inline me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                    />
                    <label for="act2">Activate</label>
                  </div>
                  <div class="rdio rdio-theme inline me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                    />
                    <label for="act2">Deactivate</label>
                  </div>
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
ul#__BVID__100__BV_tab_controls_ {
  padding: 0;
}
li.nav-item {
  padding-top: 10px;
  padding-bottom: 10px;
}
.card .x-pills,
.card .tab-content {
  margin-top: 0;
}
</style>