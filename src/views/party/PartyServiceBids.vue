<template>
<div class="Request">
  <section class="content-header">
    <h1>
      Manage Bids
      <small>Party Service</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Manage Bids</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <!-- Info Box -->
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-aqua"><i class="fa fa-sort-numeric-asc"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">BIDS TOTAL</span>
                <span class="info-box-number"> summery.total </span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-green"><i class="fa fa-play-circle-o"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">BIDS ACTIVE</span>
                <span class="info-box-number"> summery.active </span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-red"><i class="fa fa-stop"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">BIDS CLOSED</span>
                <span class="info-box-number"> summery.closed </span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-yellow"><i class="fa fa-lock"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">BIDS SUSPEND</span>
                <span class="info-box-number"> summery.suspended </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="tab-pane RequestNewRequestTab active">
          <DataTable :has_data="combinedDatas.length>0">
            <template #header>
              <th class="id-column">Request ID</th>
              <th>User Name</th>
              <th>Request Type</th>
              <th>Request Title</th>
              <th>Request Date</th>
              <th>Bids</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in combinedDatas" :key="index">
              <td>{{ data.id }}</td>
              <td>{{ data.userName }}</td>
              <td>{{ data.type }}</td>
              <td>{{ data.title }}</td>
              <td>{{ data.date }}</td>
              <td>{{ data.bids }}</td>
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
  name: 'PartyServiceBids',
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
