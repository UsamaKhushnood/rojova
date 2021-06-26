<template>
<div class="Request">
   <notifications group="notify" class="notifications"></notifications>

  <section class="content-header">
    <h1>
      Shop Name
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Shop Name</li>
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
                class="profile-user-img img-responsive img-square"
                src="/images/user4-128x128.jpg"
                alt="User profile picture"
              />
              <ul class="list-group list-group-unbordered" style="margin-top:15px">
                <li class="list-group-item">
                  <b>Shop ID</b>
                  <a class="pull-right">YU-100322</a>
                </li>
                <li class="list-group-item">
                  <b>Orders</b>
                  <a class="pull-right">5243</a>
                </li>
                <li class="list-group-item">
                  <b>Invoice</b>
                  <a class="pull-right">13</a>
                </li>
                <li class="list-group-item">
                  <b>Reviews</b>
                  <a class="pull-right">1050</a>
                </li>
              </ul> 
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

          <div class="box box-primary">
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
                <i class="fa fa-at margin-r-5"></i>Shop E-mail
              </strong>

              <p>email@something.com</p>

            </div>
            <!-- /.box-body -->
          </div>

          <div class="box box-primary">
            <!-- /.box-header -->
            <div class="box-body">

              <strong>
                <i class="fa fa-exclamation-circle margin-r-5"></i> Shop Service
              </strong>
              <table style="margin-top: 10px">
                <tr>
                  <td><a href="#" class="btn btn-primary">Delivery</a></td>
                  <td><a style="margin-left: 10px" href="#" class="btn btn-danger">Dine in</a></td>
                  <td><a style="margin-left: 10px" href="#" class="btn btn-warning">Pickup</a></td>
                </tr>
                <div style="margin-top: 10px"></div>
                <tr>
                  <td><a href="#" class="btn btn-success">Delivery</a></td>
                  <td><a style="margin-left: 10px" href="#" class="btn btn-info">Dine in</a></td>
                  <td><a style="margin-left: 10px" href="#" class="btn btn-warning">Pickup</a></td>
                </tr>
              </table>

              <hr />

              <strong>
                <i class="fa fa-exclamation-circle margin-r-5"></i> Shop Cuisine
              </strong>
              <div style="margin-top:10px">
                <table>
                  <tr>
                    <td><img src="/images/nations/de.png" width= "50px"></td>
                    <td><img src="/images/nations/de.png" style="margin-left: 10px;" width= "50px"></td>
                    <td><img src="/images/nations/de.png"  style="margin-left: 10px;" width= "50px"></td>
                  </tr>
                </table>
              </div>

              <hr />

              <strong>
                <i class="fa fa-exclamation-circle margin-r-5"></i>Used Services
              </strong>
              <table style="margin-top: 10px">
                <tr>
                  <td><a href="#" class="btn btn-primary">Yami Partner</a></td>
                  <td><a style="margin-left: 10px" href="#" class="btn btn-danger">POS</a></td>
                  <td><a style="margin-left: 10px" href="#" class="btn btn-warning">Online Shop</a></td>
                </tr>
              </table>

              <hr />

              <strong>
                <i class="fa fa-exclamation-circle margin-r-5"></i>Payment Method
              </strong>
              <table style="margin-top: 10px">
                <tr>
                  <td><a href="#" class="btn btn-primary">PayPal</a></td>
                  <td><a style="margin-left: 10px" href="#" class="btn btn-danger">Cash</a></td>
                  <td><a style="margin-left: 10px" href="#" class="btn btn-warning">Debit Card</a></td>
                </tr>
              </table>

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
                <a href="#Orders" data-toggle="tab">Orders</a>
              </li>
              <li>
                <a href="#Customer" data-toggle="tab">Customer</a>
              </li>
              <li>
                <a href="#Invoice" data-toggle="tab">Invoice</a>
              </li>
              <li>
                <a href="#Upgrade" data-toggle="tab">Upgrade</a>
              </li>
              <li>
                <a href="#Setting" data-toggle="tab">Setting</a>
              </li>
            </ul>

            <!-- tab content  -->

            <div class="tab-content">
              <!-- Orders tab menu  -->
              <div class="active tab-pane" id="Orders">
                <section >

                </section>
              </div>

              <!-- Customer tab menu  -->
              <div class="tab-pane" id="Customer">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>Customer</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Dummy</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>Dummy</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                          <th>Dummy</th>
                          <td>Dummy</td>
                          <td><a href="#">Edit</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Invoice tab menu  -->
              <div class="tab-pane" id="Invoice">
                <div class="row">
                  <div class="col-lg-12">
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".PaymentInvoiceNewPaymentInvoiceTab" data-toggle="tab"><b>New Invoice</b></a></li>
            <li><a href=".PaymentInvoiceAcceptedPaymentInvoiceTab" data-toggle="tab"><b>Accepted Invoice</b></a></li>
            <li><a href=".PaymentInvoiceDeniedPaymentInvoiceTab" data-toggle="tab"><b>Denied Invoice</b></a></li>
            <li><a href=".PaymentInvoiceOnHoldPaymentInvoiceTab" data-toggle="tab"><b>On Hold</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane PaymentInvoiceNewPaymentInvoiceTab active">
              <div class="text-right" style="margin-bottom: 0px;">
                <BsModal
                    smaller
                    type="white"
                    :height="450"
                  >
                  <template #button>
                    <span class="btn btn-info" style="top: -65px;position: relative;margin-bottom: -34px;">Create New Invoice</span>
                  </template>
                  <template #title>Create New Invoice</template>
                  <AddInvoice></AddInvoice>
                  <template #footer>
                    <span class="btn btn-default" @click.prevent="$emit('closeModal')">Cancle</span>
                    <span class="btn btn-success">Save</span>
                  </template>
                </BsModal>
              </div>
              <DataTable :has_data="newData.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Shop Type</th>
                  <th>PaymentInvoice Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in newData" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.shopId }}</td>
                  <td>{{ data.shopType }}</td>
                  <td>{{ data.requestDate }}</td>
                  <td>
                    <BsModal
                        smaller
                        type="white"
                        :height="600"
                      >
                      <template #button>
                        <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                      </template>
                      <div class="">
                        <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                      </div>
                    </BsModal>
                    <BsModal
                        smaller
                        type="white"
                        :height="110"
                      >
                      <template #button>
                        <span class="btn btn-success btn-table"><i class="fa fa-check"></i></span>
                      </template>
                      <template #title>Payment Method</template>
                      <div class="">
                        <div class="form-group">
                          <label>Add new Payment Method</label>
                          <input type="text" class="form-control" placeholder="Payment Method">
                        </div>
                      </div>
                      <template #footer>
                        <span class="btn btn-info">Save</span>
                      </template>
                    </BsModal>
                    <BsModal
                        smaller
                        type="white"
                        :height="110"
                      >
                      <template #button>
                        <span class="btn btn-danger btn-table"><i class="fa fa-minus-circle"></i></span>
                      </template>
                      <template #title>Payment Method</template>
                      <div class="">
                        <div class="form-group">
                          <label>Add new Payment Method</label>
                          <input type="text" class="form-control" placeholder="Payment Method">
                        </div>
                      </div>
                      <template #footer>
                        <span class="btn btn-info">Save</span>
                      </template>
                    </BsModal>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane PaymentInvoiceAcceptedPaymentInvoiceTab">
              <DataTable :has_data="accepted.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Shop Type</th>
                  <th>PaymentInvoice Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in accepted" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.shopId }}</td>
                  <td>{{ data.shopType }}</td>
                  <td>{{ data.requestDate }}</td>
                  <td>
                    <BsModal
                        smaller
                        type="white"
                        :height="600"
                      >
                      <template #button>
                        <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                      </template>
                      <div class="">
                        <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                      </div>
                    </BsModal>
                    <a href="#" class="btn btn-success btn-table"><label class="label">Accepted</label></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane PaymentInvoiceDeniedPaymentInvoiceTab">
              <DataTable :has_data="denied.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Shop Type</th>
                  <th>PaymentInvoice Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in denied" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.shopId }}</td>
                  <td>{{ data.shopType }}</td>
                  <td>{{ data.requestDate }}</td>
                  <td>
                    <BsModal
                        smaller
                        type="white"
                        :height="600"
                      >
                      <template #button>
                        <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                      </template>
                      <div class="">
                        <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                      </div>
                    </BsModal>
                    <a href="#" class="btn btn-danger btn-table"><label class="label">Denied</label></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane PaymentInvoiceOnHoldPaymentInvoiceTab">
              <DataTable :has_data="onHold.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Shop Name</th>
                  <th>Shop ID</th>
                  <th>Shop Type</th>
                  <th>PaymentInvoice Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in onHold" :key="index">
                  <td>{{ index }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.shopId }}</td>
                  <td>{{ data.shopType }}</td>
                  <td>{{ data.requestDate }}</td>
                  <td>
                    <BsModal
                        smaller
                        type="white"
                        :height="600"
                      >
                      <template #button>
                        <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                      </template>
                      <div class="">
                        <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
                      </div>
                    </BsModal>
                    <a href="#" class="btn btn-primary btn-table"><label class="label">On Hold</label></a>
                  </td>
                </tr>
              </DataTable>
            </div>
          </div>
        </div>
                  </div>
                </div>
              </div>

              <!-- Upgrade tab menu  -->
              <div class="tab-pane" id="Upgrade">
                <div class="row">
                  <div class="col-lg-12">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td>
                            <h3>Upgrade</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table> 
                  </div>
                </div>
              </div>

              <!-- Setting tab menu -->
              <div class="tab-pane" id="Setting">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td colspan="3">
                            <h3>Settings</h3>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <div class="box box-success accountSuspend">
                            <table  style="width: 100%;">
                              <tr>
                                <td>                 
                                  <h4 style="font-weight:900">Suspend the Account</h4>
                                </td>
                                <td>Status</td>
                                <td rowspan="2" style="position: relative; width: 240px;">
                                  <form action="">
                                    <input type="radio" name="rdo" id="yes" checked />
                                    <input type="radio" name="rdo" id="no"/>
                                    <div class="switch">
                                      <label for="yes">Yes</label>
                                      <label for="no">No</label>
                                      <span></span>
                                    </div>
                                  </form>
                                </td>
                              </tr>
                              <tr>
                                <td>                 
                                  <p>Account will be resume after a week</p>
                                </td>
                                <td>Online</td>
                            
                              </tr>
                            </table>
                          </div>
                        </tr>
                        <tr>
                          <div class="box box-success accountSuspend">
                            <table  style="width: 100%;">
                              <tr>
                                <td>                 
                                  <h4 style="font-weight:900">Suspend the Account</h4>
                                </td>
                                <td>Status</td>
                                <td rowspan="2" style="position: relative; width: 240px;">
                                  <form action="">
                                    <input type="radio" name="rdo" id="yes" checked />
                                    <input type="radio" name="rdo" id="no"/>
                                    <div class="switch">
                                      <label for="yes">Yes</label>
                                      <label for="no">No</label>
                                      <span></span>
                                    </div>
                                  </form>
                                </td>
                              </tr>
                              <tr>
                                <td>                 
                                  <p>Account will be resume after a week</p>
                                </td>
                                <td>Online</td>
                            
                              </tr>
                            </table>
                          </div>
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


<script>
import DataTable from '@/components/DataTable.vue'
import BsModal from '@/components/BsModal.vue'
import { mapState, mapGetters } from 'vuex'
import AddInvoice from '@/components/AddInvoice.vue'
import ShopNameDetails from '@/components/extra/ShopNameDetails.vue'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';



export default {
  name: 'ShopNameDetails',
  components: {
    DataTable, BsModal,VclTable, AddInvoice, ShopNameDetails
  },
  data(){
    return{
      active : '',
      closed : '',
      suspended : '',
      isLoading : false,
      combinedDatas : [],
      current : '',
      canceld : '',
      all : [],
      newData : [],
      accepted : [],
      denied : [],
      onHold : [],
    }
  },
  mounted(){
    this.getRequestListing();
  },
  methods:{
    getRequestListing : function(){

        var url = process.env.VUE_APP_API_BASE_URL+'shop/list/ /1'

        this.isLoading = true;

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {

              this.isLoading = false;

            if(response.data.error == false)
            {
                this.combinedDatas = response.data.data.shop
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
  },
    computed: {
  },
  created: function () {
  }
  
}
</script>
<style scoped>
  
.switch {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 50px;
  text-align: center;
  margin: -30px 0 0 -75px;
  background: #4cd964;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-radius: 25px;
}
.switch span {
  position: absolute;
  width: 20px;
  height: 4px;
  top: 50%;
  left: 50%;
  margin: -2px 0px 0px -4px;
  background: #fff;
  display: block;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-radius: 2px;
}
.switch span:after {
  content: "";
  display: block;
  position: absolute;
  width: 4px;
  height: 12px;
  margin-top: -8px;
  background: #fff;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-radius: 2px;
}
input[type=radio] {
  display: none;
}
.switch label {
  cursor: pointer;
  color: rgba(0,0,0,0.2);
  width: 60px;
  line-height: 50px;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
label[for=yes] {
  position: absolute;
  left: 0px;
  height: 20px;
}
label[for=no] {
  position: absolute;
  right: 0px;
}
#no:checked ~ .switch {
  background: #ff3b30;
}
#no:checked ~ .switch span {
  background: #fff;
  margin-left: -8px;
}
#no:checked ~ .switch span:after {
  background: #fff;
  height: 20px;
  margin-top: -8px;
  margin-left: 8px;
}
#yes:checked ~ .switch label[for=yes] {
  color: #fff;
}
#no:checked ~ .switch label[for=no] {
  color: #fff;
}

.modal-body{
  height: 950px !important;
}
.slimScrollDiv{
  height: 950px !important; 
}

.modal-body{
  height: 950px !important;
}
.slimScrollDiv{
  height: 950px !important; 
}


</style>


