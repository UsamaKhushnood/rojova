<template>
<div class="Request">
  <section class="content-header">
    <h1>
      Manage Booking
      <small>Party Service</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Manage Booking</li>
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
                <span class="info-box-text">BOOKINGS TOTAL</span>
                <span class="info-box-number"> summery.total </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-green"><i class="fa fa-play-circle-o"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">BOOKINGS ACTIVE</span>
                <span class="info-box-number"> summery.active </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-red"><i class="fa fa-stop"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">BOOKINGS CLOSED</span>
                <span class="info-box-number"> summery.closed </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="tab-pane RequestNewRequestTab active">
          <DataTable :has_data="combinedDatas.length>0">
            <template #header>
              <th class="id-column">Booking ID</th>
              <th>User Name</th>
              <th>Shop Name</th>
              <th>Budget</th>
              <th>Delivery Date</th>
              <th>Status</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in combinedDatas" :key="index">
              <td>{{ data.id }}</td>
              <td>{{ data.userName }}</td>
              <td>{{ data.shopName }}</td>
              <td>{{ data.budget }}</td>
              <td>{{ data.deliveryDate }}</td>
              <td>
                <a href="#" @click.prevent="" class="btn btn-success btn-table" v-if="data.status=='Delivered'">{{ data.status }}</a>
                <a href="#" @click.prevent="" class="btn btn-danger btn-table" v-if="data.status=='Cancled'">{{ data.status }}</a>
              </td>
              <td>
                <BsModal
                    smaller
                    type="white"
                    :height="600"
                  >
                  <template #button>
                    <span class="btn btn-success btn-table"><i class="fa fa-eye"></i></span>
                  </template>
                  <div class="">
                    <iframe src="/pdf/Instructions.pdf" style="height: 550px; width: 800px;"></iframe>
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
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PartyServiceBooking',
  components: {
    DataTable, BsModal
  },
  data(){
    return{
      active : '',
      closed : '',
      suspended : '',
      combinedDatas : []
    }
  },
}
</script>
