<template>
  <div class="ReportUserTicket">
    <section class="content-header">
      <h1>
        POS System
      </h1>
      <ol class="breadcrumb">
        <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
        <li class="active">POS System</li>
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
                  <h3> summery.delivers </h3>
                  <p>Deliver</p>
                </div>
                <div class="icon">
                  <i class="fa fa-truck"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div class="col-lg-4 col-xs-6">
              <div class="small-box bg-green">
                <div class="inner">
                  <h3> summery.dinners <sup style="font-size: 20px">%</sup></h3>
                  <p>Dinners</p>
                </div>
                <div class="icon">
                  <i class="fa fa-birthday-cake"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div class="col-lg-4 col-xs-6">
              <div class="small-box bg-red">
                <div class="inner">
                  <h3> summery.restaurants </h3>
                  <p>Restaurants</p>
                </div>
                <div class="icon">
                  <i class="fa fa-cutlery"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
          </div>

          <!-- Data Table -->
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href=".PosSystemDeliverTab" data-toggle="tab"><b>Deliver</b></a></li>
              <li><a href=".PosSystemDinnerTab" data-toggle="tab"><b>Dinners</b></a></li>
              <li><a href=".PosSystemRestaurantTab" data-toggle="tab"><b>Restaurants</b></a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane PosSystemDeliverTab active">
                <DataTable :has_data="delivers.length>0">
                  <template #header>
                    <th>Shop Name</th>
                    <th class="id-column">Shop ID</th>
                    <th>Contract Start</th>
                    <th>Status</th>
                    <th>POS Type</th>
                    <th class="option-column">Options</th>
                  </template>
                  <tr v-for="(data, index) in delivers" :key="index">
                    <td>{{ data.shopName }}</td>
                    <td>{{ data.shopId }}</td>
                    <td>{{ data.contractStart }}</td>
                    <td><label class="btn btn-success btn-table">{{ data.status }}</label></td>
                    <td>{{ data.posType }}</td>
                    <td>
                      <BsModal
                        type="green"
                      >
                        <template #button>
                          <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                        </template>
                        <template #title>Shop Name</template>
                        <div class="container">
                          <Income></Income>
                        </div>
                      </BsModal>
                      <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
                    </td>
                  </tr>
                </DataTable>
              </div>
              <div class="tab-pane PosSystemDinnerTab">
                <DataTable :has_data="dinners.length>0">
                  <template #header>
                    <th>Shop Name</th>
                    <th class="id-column">Shop ID</th>
                    <th>Contract Start</th>
                    <th>Status</th>
                    <th>POS Type</th>
                    <th class="option-column">Options</th>
                  </template>
                  <tr v-for="(data, index) in dinners" :key="index">
                    <td>{{ data.shopName }}</td>
                    <td>{{ data.shopId }}</td>
                    <td>{{ data.contractStart }}</td>
                    <td><label class="btn btn-success btn-table">{{ data.status }}</label></td>
                    <td>{{ data.posType }}</td>
                    <td>
                      <BsModal
                        type="green"
                      >
                        <template #button>
                          <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                        </template>
                        <template #title>Shop Name</template>
                        <div class="container">
                          <Income></Income>
                        </div>
                      </BsModal>
                      <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
                    </td>
                  </tr>
                </DataTable>
              </div>
              <div class="tab-pane PosSystemRestaurantTab">
                <DataTable :has_data="restaurants.length>0">
                  <template #header>
                    <th>Shop Name</th>
                    <th class="id-column">Shop ID</th>
                    <th>Contract Start</th>
                    <th>Status</th>
                    <th>POS Type</th>
                    <th class="option-column">Options</th>
                  </template>
                  <tr v-for="(data, index) in restaurants" :key="index">
                    <td>{{ data.shopName }}</td>
                    <td>{{ data.shopId }}</td>
                    <td>{{ data.contractStart }}</td>
                    <td><label class="btn btn-success btn-table">{{ data.status }}</label></td>
                    <td>{{ data.posType }}</td>
                    <td>
                      <BsModal
                        type="green"
                      >
                        <template #button>
                          <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                        </template>
                        <template #title>Shop Name</template>
                        <div class="container">
                          <Income></Income>
                        </div>
                      </BsModal>
                      <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
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
import Income from '@/components/Income.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PosSystem',
  components: {
    DataTable, BsModal, Income
  },
  data(){
    return {
        delivers : [],
        dinners : [],
        restaurants : [],
    }
  },
  computed: {
    // ...mapState({
    //   delivers: state => state.posSystem.delivers,
    //   dinners: state => state.posSystem.dinners,
    //   restaurants: state => state.posSystem.restaurants
    // }),
    // ...mapGetters({
    //   summery: 'posSystemSummery'
    // })
  },
  created: function () {
    // this.$store.dispatch('getPosSystemData')
  }
}
</script>
