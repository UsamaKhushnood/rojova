<template>
<div class="PartyServiceRequest">
  <section class="content-header">
    <h1>
      Manage Requests
      <small>Party Service</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Manage Requests</li>
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
                <span class="info-box-text">NEW REQUEST</span>
                <span class="info-box-number"> summery.new </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-red"><i class="fa fa-stop"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">DENIED REQUEST</span>
                <span class="info-box-number"> summery.denied </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-yellow"><i class="fa fa-pause"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">ON HOLD</span>
                <span class="info-box-number"> summery.onHold </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".PartyServiceRequestCurrentTab" data-toggle="tab"><b>New Request</b></a></li>
            <li><a href=".PartyServiceRequestDeniedTab" data-toggle="tab"><b>Denied Request</b></a></li>
            <li><a href=".PartyServiceRequestOnHoldTab" data-toggle="tab"><b>On Hold Request</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane PartyServiceRequestCurrentTab active">
              <DataTable :has_data="current.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Request ID</th>
                  <th>User Name</th>
                  <th>Request Type</th>
                  <th>Request Title</th>
                  <th>Request Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in current" :key="index">
                  <td>#{{ index }}</td>
                  <td>{{ data.id }}</td>
                  <td>{{ data.userName }}</td>
                  <td>{{ data.type }}</td>
                  <td>{{ data.title }}</td>
                  <td>{{ data.date }}</td>
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
                    </BsModal>
                    <BsModal
                        smaller
                        type="white"
                        :height="60"
                      >
                      <template #button>
                        <span class="btn btn-danger btn-table"><i class="fa fa-minus-circle"></i></span>
                      </template>
                      <template #title>
                        Reason for Cancelation
                      </template>
                      <div class="container-fluid">
                        Due to low Balance this order is canceled
                      </div>
                    </BsModal>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane PartyServiceRequestDeniedTab">
              <DataTable :has_data="denied.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Request ID</th>
                  <th>User Name</th>
                  <th>Request Type</th>
                  <th>Request Title</th>
                  <th>Request Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in denied" :key="index">
                  <td>#{{ index }}</td>
                  <td>{{ data.id }}</td>
                  <td>{{ data.userName }}</td>
                  <td>{{ data.type }}</td>
                  <td>{{ data.title }}</td>
                  <td>{{ data.date }}</td>
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
                    </BsModal>
                    <a href="#" class="btn btn-danger btn-table">
                      <label class="label">Denied</label>
                    </a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane PartyServiceRequestOnHoldTab">
              <DataTable :has_data="onHold.length>0">
                <template #header>
                  <th class="id-column">#</th>
                  <th>Request ID</th>
                  <th>User Name</th>
                  <th>Request Type</th>
                  <th>Request Title</th>
                  <th>Request Date</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in onHold" :key="index">
                  <td>#{{ index }}</td>
                  <td>{{ data.id }}</td>
                  <td>{{ data.userName }}</td>
                  <td>{{ data.type }}</td>
                  <td>{{ data.title }}</td>
                  <td>{{ data.date }}</td>
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
                    </BsModal>
                    <a href="#" class="btn btn-primary btn-table">
                      <label class="label">On Hold</label>
                    </a>
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
  name: 'PartyServiceRequest',
  components: {
    DataTable, BsModal
  },
   data(){
    return{
      current : '',
      denied : '',
      onHold : '',
    }
  },
}
</script>
