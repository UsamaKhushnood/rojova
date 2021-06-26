<template>
<div class="ShopActivityReservation">
  <section class="content-header">
    <h1>
      Reservation
      <small>Shop Activity</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Reservation</li>
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
              <span class="info-box-icon bg-aqua"><i class="fa fa-sort-numeric-asc"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">CURRENT RESERVATIONS</span>
                <span class="info-box-number"> summery.current </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-red"><i class="fa fa-pause"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">ON HOLD RESERVATIONS</span>
                <span class="info-box-number"> summery.denied </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-yellow"><i class="fa fa-hand-stop-o"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">DENIED RESERVATIONS</span>
                <span class="info-box-number"> summery.onHold </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".ShopActivityReservationCurrentTab" data-toggle="tab"><b>Current Reservations</b></a></li>
            <li><a href=".ShopActivityReservationOnHoldTab" data-toggle="tab"><b>On Hold Reservations</b></a></li>
            <li><a href=".ShopActivityReservationDeniedTab" data-toggle="tab"><b>Denied Reservations</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane ShopActivityReservationCurrentTab active">
              <DataTable :has_data="current.length>0">
                <template #header>
                  <th class="id-column">ID</th>
                  <th>Shop Name</th>
                  <th>Time & Date</th>
                  <th>Type</th>
                  <th>Reservations For</th>
                  <th>For</th>
                  <th>Person</th>
                  <th>Status</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in current" :key="index">
                  <td>{{ data.pid }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.dateTime }}</td>
                  <td class="bg-maroon disabled color-palette">{{ data.type }}</td>
                  <td class="bg-yellow disabled color-palette text-center">{{ data.reservationFor }}</td>
                  <td class="bg-teal disabled color-palette text-center">{{ data.for }}</td>
                  <td>{{ data.person }}</td>
                  <td>
                    <span class="btn btn-warning btn-table" v-if="data.status=='Waiting'||data.status=='On Hold'">{{ data.status }}</span>
                    <span class="btn btn-danger btn-table" v-if="data.status=='Denied'">{{ data.status }}</span>
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
                        :height="70"
                      >
                      <template #button>
                        <span class="btn btn-danger btn-table"><i class="fa fa-close"></i></span>
                      </template>
                      <template #title>
                        Reservation Options
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
            <div class="tab-pane ShopActivityReservationOnHoldTab">
              <DataTable :has_data="onHold.length>0">
                <template #header>
                  <th class="id-column">ID</th>
                  <th>Shop Name</th>
                  <th>Time & Date</th>
                  <th>Type</th>
                  <th>Reservations For</th>
                  <th>For</th>
                  <th>Person</th>
                  <th>Status</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in onHold" :key="index">
                  <td>{{ data.pid }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.dateTime }}</td>
                  <td class="bg-maroon disabled color-palette">{{ data.type }}</td>
                  <td class="bg-yellow disabled color-palette text-center">{{ data.reservationFor }}</td>
                  <td class="bg-teal disabled color-palette text-center">{{ data.for }}</td>
                  <td>{{ data.person }}</td>
                  <td>
                    <span class="btn btn-warning btn-table" v-if="data.status=='Waiting'||data.status=='On Hold'">{{ data.status }}</span>
                    <span class="btn btn-danger btn-table" v-if="data.status=='Denied'">{{ data.status }}</span>
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
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopActivityReservationDeniedTab">
              <DataTable :has_data="denied.length>0">
                <template #header>
                  <th class="id-column">ID</th>
                  <th>Shop Name</th>
                  <th>Time & Date</th>
                  <th>Type</th>
                  <th>Reservations For</th>
                  <th>For</th>
                  <th>Person</th>
                  <th>Status</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in denied" :key="index">
                  <td>{{ data.pid }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.dateTime }}</td>
                  <td class="bg-maroon disabled color-palette">{{ data.type }}</td>
                  <td class="bg-yellow disabled color-palette text-center">{{ data.reservationFor }}</td>
                  <td class="bg-teal disabled color-palette text-center">{{ data.for }}</td>
                  <td>{{ data.person }}</td>
                  <td>
                    <span class="btn btn-warning btn-table" v-if="data.status=='Waiting'||data.status=='On Hold'">{{ data.status }}</span>
                    <span class="btn btn-danger btn-table" v-if="data.status=='Denied'">{{ data.status }}</span>
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
                        :height="50"
                      >
                      <template #button>
                        <span class="btn btn-danger btn-table"><i class="fa fa-ban"></i></span>
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
import BsModal from '@/components/BsModal.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ShopActivityReservation',
  components: {
    DataTable, BsModal
  },
  data(){
    return{
      current : [],
      denied : [],
      onHold : [],
    }
  }
}
</script>
