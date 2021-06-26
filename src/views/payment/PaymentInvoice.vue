<template>
<div class="PaymentInvoice">
  <section class="content-header">
    <h1>
      Invoice Payments
      <small>Payments</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Invoice Payments</li>
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
                <span class="info-box-text">New INVOICE</span>
                <span class="info-box-number"> summery.new </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-red"><i class="fa fa-stop"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">Denied INVOICE</span>
                <span class="info-box-number"> summery.denied </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-yellow"><i class="fa fa-pause"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">On Hold</span>
                <span class="info-box-number"> summery.onHold </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
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
  </section>
</div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
import BsModal from '@/components/BsModal.vue'
import AddInvoice from '@/components/AddInvoice.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'PaymentInvoice',
  components: {
    DataTable, BsModal, AddInvoice
  },
  data(){
    return{
      newData : [],
      accepted : [],
      denied : [],
      onHold : [],
    }
  }
}
</script>
