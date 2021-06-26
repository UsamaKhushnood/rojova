<template>
<div class="CustomerClient">
  <section class="content-header">
    <h1>
      YamiYami Clients
      <small>Customers</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">YamiYami Clients</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">

        <!-- Data Table -->
        <div class="">
          <VclTable v-if="isLoading"/>
          <DataTable v-else :has_data="datas.length>0" :datas="datas">
            <template #header>
              <th class="id-col-client">ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registered</th>

              <th>Status</th>

              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>
                <span v-if="ownerPrefix">
                  {{ownerPrefix}}{{index+1}}
                </span>
                <span v-else>
                  {{index+1}}
                </span>
              </td>
              <td>{{ data.first_name }}</td>
              <td>{{ data.last_name }}</td>
              <td>{{ data.created_at }}</td>

              <td>
                <a href="#" @click.prevent="" class="btn btn-success btn-table" v-if="data.status=='active'">Active</a>
                <a href="#" @click.prevent="" class="btn btn-warning btn-table" v-if="data.status=='inActive'">In Active</a>
                <a href="#" @click.prevent="" class="btn btn-danger btn-table" v-if="data.status=='suspended'">Suspended</a>
              </td>
              <td>
                <BsModal
                    type="green"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                  </template>

<template>
  <div class="content-wrapper" style="margin-left: 0; padding-top:0;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Owner</h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> Home
          </a>
        </li>
        <li class="active">PartyService Profile</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-3">
          <!-- Profile Image -->
          <div class="box box-primary">
            <div class="box-body box-profile">
              <img
                class="profile-user-img img-responsive img-circle"
                src="/images/user4-128x128.jpg"
                alt="User profile picture"
              />

              <h3 class="profile-username text-center">Nina Mcintire</h3>



              <ul class="list-group list-group-unbordered">
                <li class="list-group-item">
                  <b>Owner ID</b>
                  <a class="pull-right">YO-100001</a>
                </li>
                <li class="list-group-item">
                  <b>Delivery Shops</b>
                  <a class="pull-right">1,322</a>
                </li>
                <li class="list-group-item">
                  <b>Resturants</b>
                  <a class="pull-right">543</a>
                </li>
                <li class="list-group-item">
                  <b>Dinners</b>
                  <a class="pull-right">543</a>
                </li>
                <li class="list-group-item">
                  <b>PartyService</b>
                  <a class="pull-right">13,287</a>
                </li>
              </ul>

              <a href="#" class="btn btn-primary btn-block">
                <b>Follow</b>
              </a>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

          <!-- About Me Box -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">About Me</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">

              <strong>
                <i class="fa fa-map-marker margin-r-5"></i> Location
              </strong>

              <p class="text-muted">Malibu, California</p>

              <hr />

              <strong>
                <i class="fa fa-phone margin-r-5"></i> Mobile
              </strong>

              <p> 024502454554357 </p>

              <hr />

              <strong>
                <i class="fa fa-at margin-r-5"></i> E-mail
              </strong>

              <p>email@something.com</p>

              <hr />

              <strong>
                <i class="fa fa-clipboard margin-r-5"></i> Activity
              </strong>

              <p>02.12.2020-17:50</p>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-9">
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#OwnerInfo" data-toggle="tab">Owner Info</a>
              </li>
              <li>
                <a href="#Tax" data-toggle="tab">Tax</a>
              </li>
              <li>
                <a href="#Documents" data-toggle="tab">Documents</a>
              </li>
              <li>
                <a href="#Shops" data-toggle="tab">Shops</a>
              </li>
              <li>
                <a href="#Banks" data-toggle="tab">Banks</a>
              </li>
            </ul>

            <!-- tab content  -->

            <div class="tab-content">
              <!-- OwnerInfo tab menu  -->
              <div class="active tab-pane" id="OwnerInfo">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped" style="width: 500px;">
                      <thead>
                        <tr>
                          <td colspan="2">
                            <h3>Owner Info</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Name</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Last Name</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Zip Code</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Address</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Mobile</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>Dummy</td>
                        </tr>
                        <tr>
                          <th>Phone</th>
                          <td>Dummy</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Tax tab menu  -->
              <div class="tab-pane" id="Tax">
                <div class="row">
                  <div class="col-lg-12">
                                        <table id="example1" class="table table-bordered table-striped" style="width: 500px;">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>Tax</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>ST-Nr</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>UMST</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>HRB</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Documents tab menu  -->
              <div class="tab-pane" id="Documents">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>Documents</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>
                                <div class="box box-primary" style="width: 240px;">
                                    <div class="imageBox">
                                        <img src="/images/user4-128x128.jpg" style="min-height: 50px;">
                                    </div>
                                    <div class="uploadCardPics">
                                        <div class="txt">
                                            <i class="fa fa-camera"></i>
                                            <span style="margin-left: 10px;">ID Card Front</span>
                                        </div>
                                        <div class="options" style="text-align: right;">
                                            <i class="fa fa-download" style="margin-right:10px;"></i>
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="box box-primary" style="width: 240px;">
                                    <div class="imageBox">
                                        <img src="/images/user4-128x128.jpg" style="min-height: 50px;">
                                    </div>
                                    <div class="uploadCardPics">
                                        <div class="txt">
                                            <i class="fa fa-camera"></i>
                                            <span style="margin-left: 10px;">ID Card Front</span>
                                        </div>
                                        <div class="options" style="text-align: right;">
                                            <i class="fa fa-download" style="margin-right:10px;"></i>
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="box box-primary" style="width: 240px;">
                                    <div class="imageBox">
                                        <img src="/images/user4-128x128.jpg" style="min-height: 50px;">
                                    </div>
                                    <div class="uploadCardPics">
                                        <div class="txt">
                                            <i class="fa fa-camera"></i>
                                            <span style="margin-left: 10px;">ID Card Front</span>
                                        </div>
                                        <div class="options" style="text-align: right;">
                                            <i class="fa fa-download" style="margin-right:10px;"></i>
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="box box-primary" style="width: 240px;">
                                    <div class="imageBox">
                                        <img src="/images/user4-128x128.jpg" style="min-height: 50px;">
                                    </div>
                                    <div class="uploadCardPics">
                                        <div class="txt">
                                            <i class="fa fa-camera"></i>
                                            <span style="margin-left: 10px;">ID Card Front</span>
                                        </div>
                                        <div class="options" style="text-align: right;">
                                            <i class="fa fa-download" style="margin-right:10px;"></i>
                                            <i class="fa fa-eye"></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Shops tab menu  -->
              <div class="tab-pane" id="Shops">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="2">
                            <h3>Shop Name</h3>
                          </td>
                          <td>
                            <h3 style="text-align: right;">Shop ID</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Shop Name</th>
                          <td style="text-align: center;">Dummy</td>
                          <td rowspan="4" style="text-align: right;">
                              <img src="/images/user4-128x128.jpg">
                          </td>
                        </tr>
                        <tr>
                          <th>Shop Type</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                        <tr>
                          <th>Zip Code</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                        <tr>
                          <th>Address</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                      </tbody>
                    </table> 
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="2">
                            <h3>Shop Name</h3>
                          </td>
                          <td>
                            <h3 style="text-align: right;">Shop ID</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Shop Name</th>
                          <td style="text-align: center;">Dummy</td>
                          <td rowspan="4" style="text-align: right;">
                              <img src="/images/user4-128x128.jpg" >
                          </td>
                        </tr>
                        <tr>
                          <th>Shop Type</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                        <tr>
                          <th>Zip Code</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                        <tr>
                          <th>Address</th>
                          <td style="text-align: center;">Dummy</td>
                        </tr>
                      </tbody>
                    </table> 
                  </div>
                </div>
              </div>

              <!-- Banks tab menu -->
              <div class="tab-pane" id="Banks">
                    <table id="example1" class="table table-bordered table-striped" style="width: 500px;">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>Bank</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Bank Name</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>Owner Name</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>IBAN</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>BIC</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                      </tbody>
                    </table>
                                        <table id="example1" class="table table-bordered table-striped" style="width: 500px;">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>PayPal</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>PayPal ID</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>Owner Name</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                      </tbody>
                    </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>
                </BsModal>
                <BsModal
                    smaller
                    type="white"
                    :height="70"
                  >
                  <template #button>
                    <span class="btn btn-success btn-table"><i class="fa fa-close"></i></span>
                  </template>
                  <template #title>
                    Shop Options
                  </template>
                  <div class="container-fluid text-center">
                    <a href="#" v-if="data.status!='active'"
                      @click.prevent="changeStatus(data.id, 'active')"
                      class="btn btn-success"
                      style="margin-right: 20px;padding: 6px 40px;">
                        Active
                    </a>
                    <a href="#" v-if="data.status!='inActive'"
                      @click.prevent="changeStatus(data.id, 'inActive')"
                      class="btn btn-warning"
                      style="margin-right: 20px;padding: 6px 40px;">
                        Deactivate
                    </a>
                    <a href="#" v-if="data.status!='suspended'"
                      @click.prevent="changeStatus(data.id, 'suspended')"
                      class="btn btn-danger"
                      style="padding: 6px 40px;">
                        Suspend
                    </a>
                  </div>
                </BsModal>
              </td>
            </tr>
          </DataTable>
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
import PartyServiceOwnerProfile from '@/views/party/PartyServiceOwnerProfile.vue'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';
import { mapState } from 'vuex'

export default {
  name: 'CustomerClient',
  components: {
    DataTable, BsModal, ProfileBox, AboutBox, ProfileTabs, VclTable,PartyServiceOwnerProfile
  },
  computed : {
      ...mapState(['PREFIXES']),
      ownerPrefix(){
        if(Object.keys(this.PREFIXES).length > 0 && this.PREFIXES.owner_id !== undefined){
          return this.PREFIXES.owner_id;
        }
        return null;
      }
  },
  data(){
    return{
      isLoading : false,
      datas : []
    }
  },
   mounted(){
    this.getPrefixes();
    this.getClientListing();
  },
  methods:{
    getPrefixes : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'prefix/list';
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            if(response.data.error == false && response.data.data)
            {   
              let data = Object.assign({}, response.data.data);
              this.$store.commit('SET_PREFIXES',data);
            }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getClientListing : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'show_owner/list'
        this.isLoading = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.isLoading = false;
            if(response.data.error == false)
            {
                this.datas = response.data.data;
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
  }
}
</script>
<style >
.id-col-client
{
  width : 110px !important;
}
</style>