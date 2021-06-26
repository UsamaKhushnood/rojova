<template>
<div class="Request">

   <notifications group="notify" class="notifications"></notifications>

  <section class="content-header">
    <h1>
      Requests
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Requests</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <!-- Info Box -->
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-aqua"><i class="fa fa-question"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">New Request</span>
                <span class="info-box-number">{{ summery.new_request }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-red"><i class="fa fa-stop"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">Denied Request</span>
                <span class="info-box-number">{{ summery.denied_request }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-yellow"><i class="fa fa-pause"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">On Hold</span>
                <span class="info-box-number">{{ summery.hold_request }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".RequestNewRequestTab" data-toggle="tab" @click="getRequestListing('0')"><b>New Request</b></a></li>
            <li><a href=".RequestAcceptedRequestTab" data-toggle="tab" @click="getRequestListing('1')"><b>Accepted Request</b></a></li>
            <li><a href=".RequestDeniedRequestTab" data-toggle="tab" @click="getRequestListing('2')"><b>Denied Request</b></a></li>
            <li><a href=".RequestOnHoldRequestTab" data-toggle="tab" @click="getRequestListing('3')"><b>On Hold</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane RequestNewRequestTab active">

              <v-table-loader v-if="currentTab == '0' && isLoading" />

              <DataTable v-else :has_data="requestsData.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Shop Type</th>
                  <th>Request Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in requestsData" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ data.shop_name }}</td>
                  <td>{{ data.uuid }}</td>
                  <td>{{ data.type.name }}</td>
                  <td>{{ data.created_at }}</td>
                  <td>
                    <BsModal
                        type="green"
                      >
                      <template #button >
                        <span class="btn btn-info btn-table" @click="getRequestDetails(data.uuid)"><i class="fa fa-eye"></i></span>
                      </template>
                      <template #title>
                        {{ data.shopName }}
                      </template>
                      <div class="container-fluid" :class="{'white-bg' : showDetailsLoader}">
                        <section class="content-header">
                          <h1>Shop Profile</h1>
                          <ol class="breadcrumb">
                            <li><router-link to="/dashboard"><i class="fa fa-dashboard"></i> Home</router-link></li>
                            <li class="active">Shop Profile</li>
                          </ol>
                        </section>
                        <br/>
                        <div class="row">

                          <v-facebook-loader v-if="showDetailsLoader"/>

                          <div class="col-sm-3" v-if="!showDetailsLoader">
                            <ProfileBox :details="shopDetailsData"></ProfileBox>
                            <AboutBox :details="shopDetailsData"></AboutBox>
                          </div>
                          <div class="col-sm-9" v-if="!showDetailsLoader">
                            <ProfileTabs :details="shopDetailsData"></ProfileTabs>
                          </div>
                        </div>
                      </div>
                    </BsModal>
                    <!-- <BsModal
                        smaller
                        type="white"
                        :height="60"
                      >
                      <template #button>
                        <span class="btn btn-success btn-table"><i class="fa fa-check"></i></span>
                      </template>
                      <template #title>
                        Reason for Cancelation
                      </template>
                      <div class="container-fluid">
                        Due to low Balance this order is canceled
                      </div>
                    </BsModal> -->
                    <BsModal
                        smaller
                        type="white"
                        :height="70"
                      >
                      <template #button>
                        <span class="btn btn-danger btn-table"><i class="fa fa-minus-circle"></i></span>
                      </template>
                      <template #title>
                        Shop Options
                      </template>
                      <div class="container-fluid text-center">
                        <a href="#" class="btn btn-warning" style="margin-right: 20px;padding: 6px 40px;" @click="updateRequestStatus(data.id,3)">Suspend</a>
                        <a href="#" class="btn btn-danger" style="padding: 6px 40px;" @click="updateRequestStatus(data.id,2)">Deactivate</a>
                      </div>
                    </BsModal>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane RequestAcceptedRequestTab" >

                <v-table-loader v-if="currentTab == '1' && isLoading" />

              <DataTable v-else :has_data="acceptedRequests.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Shop Type</th>
                  <th>Request Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in acceptedRequests" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ data.shop_name }}</td>
                  <td>{{ data.uuid }}</td>
                  <td>{{ data.type.name }}</td>
                  <td>{{ data.created_at }}</td>
                  <td>
                   <BsModal
                        type="green"
                      >
                      <template #button >
                        <span class="btn btn-info btn-table" @click="getRequestDetails(data.uuid)"><i class="fa fa-eye"></i></span>
                      </template>
                      <template #title>
                        {{ data.shopName }}
                      </template>
                      <div class="container-fluid" :class="{'white-bg' : showDetailsLoader}">
                        <section class="content-header">
                          <h1>Shop Profile</h1>
                          <ol class="breadcrumb">
                            <li><router-link to="/dashboard"><i class="fa fa-dashboard"></i> Home</router-link></li>
                            <li class="active">Shop Profile</li>
                          </ol>
                        </section>
                        <br/>
                        <div class="row">

                          <v-facebook-loader v-if="showDetailsLoader"/>

                          <div class="col-sm-3" v-if="!showDetailsLoader">
                            <ProfileBox :details="shopDetailsData"></ProfileBox>
                            <AboutBox :details="shopDetailsData"></AboutBox>
                          </div>
                          <div class="col-sm-9" v-if="!showDetailsLoader">
                            <ProfileTabs :details="shopDetailsData"></ProfileTabs>
                          </div>
                        </div>
                      </div>
                    </BsModal>
                    <!-- <BsModal
                        smaller
                        type="white"
                        :height="60"
                      >
                      <template #button>
                        <span class="btn btn-danger btn-table"><i class="fa fa-check"></i></span>
                      </template>
                      <template #title>
                        Reason for Cancelation
                      </template>
                      <div class="container-fluid">
                        Due to low Balance this order is canceled
                      </div>
                    </BsModal> -->
                    <!-- <a href="#" class="btn btn-success btn-table"><label class="label">Accepted</label></a> -->
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane RequestDeniedRequestTab">

              <v-table-loader v-if="currentTab == '2' && isLoading" />

              <DataTable v-else :has_data="deniedRequests.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Shop Type</th>
                  <th>Request Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in deniedRequests" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ data.shop_name }}</td>
                  <td>{{ data.uuid }}</td>
                  <td>{{ data.type.name }}</td>
                  <td>{{ data.created_at }}</td>
                  <td>
                    <BsModal
                        type="green"
                      >
                      <template #button >
                        <span class="btn btn-info btn-table" @click="getRequestDetails(data.uuid)"><i class="fa fa-eye"></i></span>
                      </template>
                      <template #title>
                        {{ data.shopName }}
                      </template>
                      <div class="container-fluid" :class="{'white-bg' : showDetailsLoader}">
                        <section class="content-header">
                          <h1>Shop Profile</h1>
                          <ol class="breadcrumb">
                            <li><router-link to="/dashboard"><i class="fa fa-dashboard"></i> Home</router-link></li>
                            <li class="active">Shop Profile</li>
                          </ol>
                        </section>
                        <br/>
                        <div class="row">

                          <v-facebook-loader v-if="showDetailsLoader"/>

                          <div class="col-sm-3" v-if="!showDetailsLoader">
                            <ProfileBox :details="shopDetailsData"></ProfileBox>
                            <AboutBox :details="shopDetailsData"></AboutBox>
                          </div>
                          <div class="col-sm-9" v-if="!showDetailsLoader">
                            <ProfileTabs :details="shopDetailsData"></ProfileTabs>
                          </div>
                        </div>
                      </div>
                    </BsModal>
                    <!-- <BsModal
                        smaller
                        type="white"
                        :height="60"
                      >
                      <template #button>
                        <span class="btn btn-success btn-table"><i class="fa fa-check"></i></span>
                      </template>
                      <template #title>
                        Reason for Cancelation
                      </template>
                      <div class="container-fluid">
                        Due to low Balance this order is canceled
                      </div>
                    </BsModal> -->
                    <a href="#" class="btn btn-danger btn-table"><label class="label">Denied</label></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane RequestOnHoldRequestTab">
              
              <v-table-loader v-if="currentTab == '3' && isLoading" />

              <DataTable v-else :has_data="holdRequests.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Shop Type</th>
                  <th>Request Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in holdRequests" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ data.shop_name }}</td>
                  <td>{{ data.uuid }}</td>
                  <td>{{ data.type.name }}</td>
                  <td>{{ data.created_at }}</td>
                  <td>
                    <BsModal
                        type="green"
                      >
                      <template #button >
                        <span class="btn btn-info btn-table" @click="getRequestDetails(data.uuid)"><i class="fa fa-eye"></i></span>
                      </template>
                      <template #title>
                        {{ data.shopName }}
                      </template>
                      <div class="container-fluid" :class="{'white-bg' : showDetailsLoader}">
                        <section class="content-header">
                          <h1>Shop Profile</h1>
                          <ol class="breadcrumb">
                            <li><router-link to="/dashboard"><i class="fa fa-dashboard"></i> Home</router-link></li>
                            <li class="active">Shop Profile</li>
                          </ol>
                        </section>
                        <br/>
                        <div class="row">

                          <v-facebook-loader v-if="showDetailsLoader"/>

                          <div class="col-sm-3" v-if="!showDetailsLoader">
                            <ProfileBox :details="shopDetailsData"></ProfileBox>
                            <AboutBox :details="shopDetailsData"></AboutBox>
                          </div>
                          <div class="col-sm-9" v-if="!showDetailsLoader">
                            <ProfileTabs :details="shopDetailsData"></ProfileTabs>
                          </div>
                        </div>
                      </div>
                    </BsModal>
                    <!-- <BsModal
                        smaller
                        type="white"
                        :height="60"
                      >
                      <template #button>
                        <span class="btn btn-success btn-table"><i class="fa fa-check"></i></span>
                      </template>
                      <template #title>
                        Reason for Cancelation
                      </template>
                      <div class="container-fluid">
                        Due to low Balance this order is canceled
                      </div>
                    </BsModal> -->
                    <a href="#" class="btn btn-danger btn-table"><label class="label">On Hold</label></a>
                  </td>
                </tr>
              </DataTable>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
import BsModal from '@/components/BsModal.vue'
import ProfileBox from '@/components/ProfileBox.vue'
import AboutBox from '@/components/AboutBox.vue'
import ProfileTabs from '@/components/ProfileTabs.vue'
import { mapState, mapGetters } from 'vuex'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';

export default {
  name: 'Request',
  components: {
    DataTable, BsModal, ProfileBox, AboutBox, ProfileTabs,
    'v-table-loader' : VclTable,
    'v-facebook-loader' : VclFacebook
  },
  data(){
    return{
      summery : {
        new_request : 0,
        denied_request: 0,
        accepted_request : 0,
        hold_request : 0,
      },
      requestsData : [],
      acceptedRequests : [],
      deniedRequests : [],
      holdRequests : [],
      isLoading : false,
      currentTab : '0',
      showDetailsLoader : false,
      shopDetailsData : []
    }
  },
  computed: {
    
  },
  created: function () {
      this.getRequestListing();
  },
  methods:{
      getRequestListing : function(status = ''){

        var url = process.env.VUE_APP_API_BASE_URL+'shop/list'

        if(status != ''){
          url = url + '/'+status+'/-1'
          this.currentTab = status
        }
        else{
          url = url + '/ /-1'
        }

        this.isLoading = true;

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {

              this.isLoading = false;

            if(response.data.error == false)
            {
                this.summery.new_request    = response.data.data.summary.new_request;
                this.summery.denied_request = response.data.data.summary.denied_request;
                this.summery.hold_request   = response.data.data.summary.hold_request;

                if(status == '1')
                {
                   this.acceptedRequests = response.data.data.shop;
                }
                if(status == '2')
                {
                   this.deniedRequests = response.data.data.shop;
                }
                if(status == '3')
                {
                   this.holdRequests = response.data.data.shop;
                }
                else
                {
                   this.requestsData = response.data.data.shop;
                }
            }
            else
            {
              this.$notify({
                  group: 'notify',
                  type: 'warn',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong.'
                });
            }

        })
        .catch(error => {

          console.log(error)

            this.isLoading = false;

            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
      },
      getRequestDetails : function(id){

        var url = process.env.VUE_APP_API_BASE_URL+'shop/detail/'+id

        this.showDetailsLoader = true;

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {

            // console.log(response)

            this.showDetailsLoader = false;

            if(response.data.error == false && response.data.data)
            {
                this.shopDetailsData = response.data.data.shop;
            }
            else
            {
                this.$notify({
                    group: 'notify',
                    type: 'warn',
                    title: 'Failure',
                    text: response.data.message || 'something went wrong, Please try again later.'
                }); 
            }

        })
        .catch(error => {

          console.log(error)

            this.showDetailsLoader = false;

            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    updateRequestStatus : function(id,status){

        var url = process.env.VUE_APP_API_BASE_URL+'request/status'
        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:{id: id, status : status},url:url})
        .then(response => {

            if(response.data.error == false && response.data.data)
            {
                this.$notify({
                    group: 'notify',
                    type: 'success',
                    title: 'Success',
                    text: 'Status successfully updated'
                }); 
              this.getRequestListing();
            }
            else
            {
                this.$notify({
                    group: 'notify',
                    type: 'warn',
                    title: 'Failure',
                    text: response.data.message || 'something went wrong, Please try again later.'
                }); 
            }
        })
        .catch(error => {
          console.log(error)
          let errormessage = error.response.data.message;
          this.$notify({
              group: 'notify',
              type: 'error',
              title: 'Failure',
              text: errormessage
          });
        })
    }
  }
}
</script>

<style>
.white-bg
{
    background : white !important;
}
</style>