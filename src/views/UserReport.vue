<template>
  <div>
    <section id="page-content">
      <b-container class="bv-example-row px-0">
        <b-row>
          <b-col cols="3">
            <b-button variant="danger" class="w-100">Compose Email</b-button>
            <b-list-group class="mt-3">
              <b-list-group-item active>
                <i class="fa fa-inbox"></i>
                New Report
                <span class="label pull-right text-black">7</span>
              </b-list-group-item>
              <b-list-group-item>
                <i class="fa fa-envelope-o"></i>
                Solved Report
              </b-list-group-item>
              <b-list-group-item>
                <i class="fa fa-certificate"></i>
                Awaiting
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col cols="9">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                w-100
                bg-success
                p-2
              "
            >
              <div class="inboxText text-white">Inbox(7)</div>
              <div class="d-flex align-items-center">
                <input
                  class="form-control pe-5"
                  type="search"
                  placeholder="Search Email"
                />
                <button
                  class="btn btn-primary fa fa-search ms-2"
                  type="submit"
                ></button>
              </div>
            </div>
            <div class="d-flex align-items-center w-100 bg-white p-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div class="d-flex align-items-center w-100 bg-white border-bottom p-3 pb-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>

              <div class="d-flex align-items-center justify-content-around users">
                <a href="#" style="margin-top: -12px;">
                  <img src="@/assets/img/avatar/35/2.png" alt="image" width="40px" />
                </a>
                <div class="emailContent">
                  <a v-b-modal="'user-report-modal'">John Smith</a>
                  <UserReportModal></UserReportModal>
                  <p class="emailText">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <span class="label label-success">New</span>
                  </p>
                  
                </div>
              </div>
              <span class="ms-auto">Today at 12:00 PM</span>
            </div>
            <div class="d-flex align-items-center w-100 bg-white border-bottom p-3 pb-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>

              <div class="d-flex align-items-center justify-content-around users">
                <a style="margin-top: -12px;">
                  <img src="@/assets/img/avatar/35/2.png" alt="image" width="40px" />
                </a>
                <div class="emailContent">
                  <a href="#">John Smith</a>
                  <p class="emailText">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <span class="label label-success">New</span>
                  </p>
                  
                </div>
              </div>
              <span class="ms-auto">Today at 12:00 PM</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<style scoped>
/* button.compose-email {
  padding: 10px 90px;
} */
.users {
  width: 60%;
}
</style>

<script>
import UserReportModal from "@/components/modals/user-report-modals/UserReportModal.vue";
export default {
  components: { UserReportModal }
}
</script>