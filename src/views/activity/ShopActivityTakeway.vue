<template>
  <div class="ReportUserTicket">
    <section class="content-header">
      <h1>
        Takeaways
        <small>Shop Activity</small>
      </h1>
      <ol class="breadcrumb">
        <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
        <li class="active">Takeaways</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="box">
        <div class="box-body">
          <div class="row">
            <div class="col-lg-4 col-xs-6">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3> summery.current </h3>
                  <p>CURRENT TAKEAWAYS</p>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div class="col-lg-4 col-xs-6">
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> summery.canceld <sup style="font-size: 20px">%</sup></h3>
                  <p>CANCELD TAKEAWAYS</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div class="col-lg-4 col-xs-6">
              <div class="small-box bg-red">
                <div class="inner">
                  <h3> summery.total </h3>
                  <p>ALL TAKEAWAYS</p>
                </div>
                <div class="icon">
                  <i class="ion ion-pie-graph"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
          </div>

          <!-- Data Table -->
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href=".ShopActivityTakewayDeliverTab" data-toggle="tab"><b>Current Takeaways</b></a></li>
              <li><a href=".ShopActivityTakewayDinnerTab" data-toggle="tab"><b>Cancled Takeaways</b></a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane ShopActivityTakewayDeliverTab active">
                <DataTable :has_data="current.length>0">
                  <template #header>
                    <th class="id-column">Order Id</th>
                    <th>Shop Name</th>
                    <th>Time & Date</th>
                    <th>Order Cash</th>
                    <th>Order Paypal</th>
                    <th>Order Sofort</th>
                    <th>Sub Total</th>
                    <th>Status</th>
                    <th class="option-column">Options</th>
                  </template>
                  <tr v-for="(data, index) in current" :key="index">
                    <td>{{ data.orderId }}</td>
                    <td>{{ data.shopName }}</td>
                    <td>{{ data.dateTime }}</td>
                    <td class="bg-aqua disabled color-palette text-center">{{ data.orderCash }}</td>
                    <td class="bg-maroon disabled color-palette text-center">{{ data.orderPaypal }}</td>
                    <td class="bg-yellow disabled color-palette text-center">{{ data.orderSofort }}</td>
                    <td class="bg-teal disabled color-palette text-center">{{ data.subTotal }}</td>
                    <td>
                      <label class="btn btn-warning btn-table" v-if="data.status=='In Progress'">{{ data.status }}</label>
                      <label class="btn btn-success btn-table" v-if="data.status=='At Way'">{{ data.status }}</label>
                    </td>
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
                          <span class="btn btn-success btn-table"><i class="fa fa-close"></i></span>
                        </template>
                        <template #title>Cancle Takeaways</template>
                        <div class="">
                          <div class="form-group">
                            <label>Are u sure to remove the Takeaways? Please Select the reason</label>
                            <select2 v-model="CancleOrder" multiple>
                              <option>wrrong order</option>
                              <option>User not Open a door</option>
                              <option>Wrrong Food</option>
                              <option>User dont like the Food</option>
                              <option>User hase no money</option>
                              <option>Other</option>
                            </select2>
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
              <div class="tab-pane ShopActivityTakewayDinnerTab">
                <DataTable :has_data="canceld.length>0">
                  <template #header>
                    <th class="id-column">Order Id</th>
                    <th>Shop Name</th>
                    <th>Time & Date</th>
                    <th>Order Cash</th>
                    <th>Order Paypal</th>
                    <th>Order Sofort</th>
                    <th>Sub Total</th>
                    <th>Status</th>
                    <th class="option-column">Options</th>
                  </template>
                  <tr v-for="(data, index) in canceld" :key="index">
                    <td>{{ data.orderId }}</td>
                    <td>{{ data.shopName }}</td>
                    <td>{{ data.dateTime }}</td>
                    <td class="bg-aqua disabled color-palette text-center">{{ data.orderCash }}</td>
                    <td class="bg-maroon disabled color-palette text-center">{{ data.orderPaypal }}</td>
                    <td class="bg-yellow disabled color-palette text-center">{{ data.orderSofort }}</td>
                    <td class="bg-teal disabled color-palette text-center">{{ data.subTotal }}</td>
                    <td>
                      <label class="btn btn-warning btn-table" v-if="data.status=='In Progress'">{{ data.status }}</label>
                      <label class="btn btn-success btn-table" v-if="data.status=='At Way'">{{ data.status }}</label>
                    </td>
                    <td>
                      <BsModal
                          smaller
                          type="white"
                          :height="50"
                        >
                        <template #button>
                          <span class="btn btn-success btn-table"><i class="fa fa-ban"></i></span>
                        </template>
                        <template #title>Reason for Cancelation</template>
                        <div class="container-fluid">
                          Due to low Balance this order is canceled
                        </div>
                      </BsModal>
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
import select2 from '@/components/select2.vue'
import BsModal from '@/components/BsModal.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ShopActivityTakeway',
  components: {
    DataTable, BsModal, select2
  },
  data: function () {
    return {
      CancleOrder: [],
      current : [],
      canceld : [],
    }
  },
  
}
</script>
