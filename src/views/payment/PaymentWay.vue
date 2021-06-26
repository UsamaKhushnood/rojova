<template>
<div class="PaymentWay">
  <section class="content-header">
    <h1>
      Payment Way
      <small>Payments</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Payment Way</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="text-right" style="margin-bottom: 20px;">
          <BsModal
              smaller
              type="white"
              :height="110"
            >
            <template #button>
              <span class="btn btn-info">Add New Payment</span>
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
        </div>
        <!-- Data Table -->
        <div class="">

          <DataTable :has_data="datas.length>0">
            <template #header>
              <th class="id-column">No.</th>
              <th>Title</th>
              <th>Euro</th>
              <th>%</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ data.title }}</td>
              <td>{{ data.euro }}</td>
              <td>{{ data.percent }}</td>
              <td>
                <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
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
import { mapState } from 'vuex'

export default {
  name: 'PaymentWay',
  components: {
    DataTable, BsModal
  },
  data(){
    return{
      datas : []
    }
  }
}
</script>
