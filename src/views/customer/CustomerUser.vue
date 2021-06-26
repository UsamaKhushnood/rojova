<template>
<div class="CustomerUser">
  <section class="content-header">
    <h1>
      YamiYami Users
      <small>Customers</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">YamiYami Users</li>
    </ol>
  </section>
  <notifications group="notify" class="notifications"></notifications>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">

        <!-- Data Table -->
        <div class="">
          <VclTable v-if="isLoading"/>
          <DataTable v-else :has_data="datas.length>0">
            <template #header>
              <!-- <th>Select</th> -->
              <th class="id-col-user">ID</th>
              <th>Gender</th>
              <th>Name</th>
              <th>Registered</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <!-- <td class="sorting_1"><input type="checkbox" name="check"></td> -->
              <td>
                <span v-if="userPrefix">
                  {{userPrefix}}{{ index + 1 }}
                </span>
                <span v-else>
                  {{ index + 1 }}
                </span>
                
              </td>
              <td><img :src="data.avater" height="35px"></td>
              <td>{{ data.first_name }} {{data.last_name}}</td>
              <td>{{ data.created_at }}</td>

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
      <h1>User Profile</h1>
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
                  <b>User ID</b>
                  <a class="pull-right">YO_10001</a>
                </li>
                <li class="list-group-item">
                  <b>Orders</b>
                  <a class="pull-right">1,322</a>
                </li>
                <li class="list-group-item">
                  <b>Reservation</b>
                  <a class="pull-right">543</a>
                </li>
                <li class="list-group-item">
                  <b>Reservation plus</b>
                  <a class="pull-right">13,287</a>
                </li>
                <li class="list-group-item">
                  <b>Reviews</b>
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
                <a href="#Delivery" data-toggle="tab">Delivery</a>
              </li>
              <li>
                <a href="#Dinners" data-toggle="tab">Dinners</a>
              </li>
              <li>
                <a href="#Reservation" data-toggle="tab">Reservation</a>
              </li>
              <li>
                <a href="#PartyService" data-toggle="tab">Party Service</a>
              </li>
              <li>
                <a href="#Reviews" data-toggle="tab">Reviews</a>
              </li>
              <li>
                <a href="#Affliate" data-toggle="tab">Affliate</a>
              </li>
              <li>
                <a href="#Settings" data-toggle="tab">Settings</a>
              </li>
            </ul>

            <!-- tab content  -->

            <div class="tab-content">
              <!-- Delivery tab menu  -->
              <div class="active tab-pane" id="Delivery">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Delivery Orders</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Order ID</th>
                          <th>Shop Name</th>
                          <th>Order Type</th>
                          <th>Paid</th>
                          <th>Amount</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Dinners tab menu  -->
              <div class="tab-pane" id="Dinners">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Dinner Orders</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Order ID</th>
                          <th>Shop Name</th>
                          <th>Order Type</th>
                          <th>Paid</th>
                          <th>Amount</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Reservation tab menu  -->
              <div class="tab-pane" id="Reservation">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Reservations</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Reservations ID</th>
                          <th>Shop Name</th>
                          <th>Reservations Type</th>
                          <th>Paid</th>
                          <th>Amount</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- party service tab menu -->
              <div class="tab-pane" id="PartyService">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Party Service</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Order ID</th>
                          <th>Shop Name</th>
                          <th>Order Type</th>
                          <th>Paid</th>
                          <th>Amount</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Reviews tab menu  -->
              <div class="tab-pane" id="Reviews">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Reviews</h3>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Review ID</th>
                          <th>Shop Name</th>
                          <th>Stars</th>
                          <th>Time and Date</th>
                          <th>Status</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Affliate tab menu  -->
              <div class="tab-pane" id="Affliate">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="7">
                            <h3>Affliate</h3>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="6">
                            <h2 style="text-align:center; font-weight: 900;">Affliate Link</h2>
                          </td>
                          <td class="earningCol" style="color: green; text-align:center;">
                            <h2 style="font-weight: 900;  position: relative;">5,99 &euro;</h2>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">#</th>
                          <th>Username</th>
                          <th>User ID</th>
                          <th>Join Date</th>
                          <th>Amount</th>
                          <th>Earn</th>
                          <th style="text-align: center;">Option</th>
                          <!-- <th style="width: 8%">Options</th>  -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th style="width: 40px; text-align: center;">1</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">2</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <th style="width: 40px; text-align: center;">3</th>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td>Dummy</td>
                          <td style="text-align: center;">
                            <a
                              href="#offer"
                              data-toggle="modal"
                              data-target="#offer"
                              class="btn btn-success"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Settings tab menu -->
              <div class="tab-pane" id="Settings">
                <h3 style="font-weight: 900;">Settings</h3>
                <div class="box box-success accountSuspend">
                  <h4 style="font-weight:900">Suspend the Account</h4>
                  <p>Account will be resume after a week</p>
                </div>
                <div class="box box-success accountSuspend">
                  <h4 style="font-weight:900">Suspend the Account</h4>
                  <p>Account will be resume after a week</p>
                </div>
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
                    <a href="#" class="btn btn-warning" style="margin-right: 20px;padding: 6px 40px;">Suspend</a>
                    <a href="#" class="btn btn-danger" style="padding: 6px 40px;">Deactivate</a>
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
import { mapState } from 'vuex'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';


export default {
  name: 'CustomerUser',
  components: {
    DataTable, BsModal, ProfileBox, AboutBox, ProfileTabs, VclTable
  },
  computed : {
      ...mapState(['PREFIXES']),
      userPrefix(){
        if(Object.keys(this.PREFIXES).length > 0 && this.PREFIXES.user_id !== undefined){
          return this.PREFIXES.user_id;
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
    this.getUserListing();
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
    getUserListing : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'users/list'
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
<style>
.id-col-user
{
  width : 120px !important;
}
</style>