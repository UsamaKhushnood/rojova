<template>
  <div class="ReportUserTicket">
    <section class="content-header">
      <h1>
        Tickets
        <small>User</small>
      </h1>
      <ol class="breadcrumb">
        <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
        <li class="active">Dashboard</li>
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
                  <h3> summery.new </h3>
                  <p>NEW TICKETS</p>
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
                  <h3>summery.active <sup style="font-size: 20px">%</sup></h3>
                  <p>ACTIVE TICKETS</p>
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
                  <h3> summery.closed </h3>
                  <p>CLOSED TICKETS</p>
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
              <li class="active"><a href=".ReportsNewTicketTab" data-toggle="tab"><b>New Tickets</b></a></li>
              <li><a href=".ReportsActiveTicketTab" data-toggle="tab"><b>Active Tickets</b></a></li>
              <li><a href=".ReportsClosedTicketTab" data-toggle="tab"><b>Closed Tickets</b></a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane ReportsNewTicketTab active">
               <!--  <DataTable :has_data="newData.length>0">
                  <template #header>
                    <th class="id-column">Ticket ID</th>
                    <th>Time & Date</th>
                    <th>Shop Name</th>
                    <th>Category</th>
                    <th class="option-column">Options</th>
                  </template>
                  <tr v-for="(data, index) in newData" :key="index">
                    <td>{{ data.ticketId }}</td>
                    <td>{{ data.dateTime }}</td>
                    <td>{{ data.shopName }}</td>
                    <td>{{ data.category }}</td>
                    <td>
                      <BsModal
                        type="green"
                      >
                        <template #button>
                          <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                        </template>
                        <div class="container-fluid">
                          <ChatBox></ChatBox>
                        </div>
                      </BsModal>
                      <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
                    </td>
                  </tr>
                </DataTable> -->
              </div>
              <div class="tab-pane ReportsActiveTicketTab">
              <!--   <DataTable :has_data="active.length>0">
                  <template #header>
                    <th class="id-column">Ticket ID</th>
                    <th>Time & Date</th>
                    <th>Shop Name</th>
                    <th>Category</th>
                    <th class="option-column">Options</th>
                  </template>
                  <tr v-for="(data, index) in active" :key="index">
                    <td>{{ data.ticketId }}</td>
                    <td>{{ data.dateTime }}</td>
                    <td>{{ data.shopName }}</td>
                    <td>{{ data.category }}</td>
                    <td>
                      <BsModal
                        type="green"
                      >
                        <template #button>
                          <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                        </template>
                        <div class="container-fluid">
                          <ChatBox></ChatBox>
                        </div>
                      </BsModal>
                      <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
                      <a href="#" class="btn btn-warning btn-table"><label class="label">Active</label></a>
                    </td>
                  </tr>
                </DataTable> -->
              </div>
              <div class="tab-pane ReportsClosedTicketTab">
                <!-- <DataTable :has_data="closed.length>0">
                  <template #header>
                    <th class="id-column">Ticket ID</th>
                    <th>Time & Date</th>
                    <th>Shop Name</th>
                    <th>Category</th>
                    <th class="option-column">Options</th>
                  </template>
                  <tr v-for="(data, index) in closed" :key="index">
                    <td>{{ data.ticketId }}</td>
                    <td>{{ data.dateTime }}</td>
                    <td>{{ data.shopName }}</td>
                    <td>{{ data.category }}</td>
                    <td>
                      <BsModal
                        type="green"
                      >
                        <template #button>
                          <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                        </template>
                        <div class="container-fluid">
                          <ChatBox></ChatBox>
                        </div>
                      </BsModal>
                      <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
                      <a href="#" class="btn btn-danger btn-table"><label class="label">Closed</label></a>
                    </td>
                  </tr>
                </DataTable> -->
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
import ChatBox from '@/components/ChatBox.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'UserTicket',
  components: {
    DataTable, BsModal, ChatBox
  },
  computed: {
    
  },
  created: function () {
    // this.$store.dispatch('reports/getTicketUserData')
  }
}
</script>
