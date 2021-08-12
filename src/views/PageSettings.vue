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
                <div class="row p-3 pt-0 border-bottom">Page Settings</div>
                <div class="d-flex p-3 justify-content-between align-items-center w-100">
                  <div class="status me-5">Status</div>
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't1-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t1-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't1-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t1-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't2-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t2-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't2-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t2-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't3-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t3-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't3-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t3-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't4-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t4-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't4-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t4-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't5-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t5-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't5-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t5-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't6-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t6-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't6-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t6-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't7-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t7-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't7-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t7-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't8-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t8-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't8-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t8-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't9-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t9-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't9-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t9-2'"></DeactivateModal>
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
                  <div class="rdio rdio-theme d-flex align-items-center me-3">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      type="radio"
                      v-b-modal="'activate-modal' + 't10-1'"
                    />
                    <label for="act2">Activate</label>
                    <ActivateModal :index="'t10-1'"></ActivateModal>
                  </div>
                  <div class="rdio rdio-theme d-flex align-items-center me-auto">
                    <input
                      checked="checked"
                      id="act2"
                      name="radio"
                      data-toggle="modal"
                      data-target="#modal-act"
                      type="radio"
                      v-b-modal="'deactivate-modal' + 't10-2'"
                    />
                    <label for="act2">Deactivate</label>
                    <DeactivateModal :index="'t10-2'"></DeactivateModal>
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
.iconStyle {
  font-size: 25px;
}

</style>

<script>
import ActivateModal from "@/components/modals/page-settings-modals/ActivateModal.vue"
import DeactivateModal from "@/components/modals/page-settings-modals/DeactivateModal.vue"
export default {
  components: { ActivateModal, DeactivateModal }
}
</script>