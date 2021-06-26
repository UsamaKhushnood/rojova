<template>
<div class="PaymentPayout">
  <section class="content-header">
    <h1>
      Payouts
      <small>Payments</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Payouts</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">

        <!-- Data Table -->
        <div class="">
          <DataTable :has_data="datas.length>0">
            <template #header>
              <th class="id-column">No.</th>
              <th>Month</th>
              <th>Income</th>
              <th>Commission</th>
              <th>Purchase</th>
              <th>POS</th>
              <th>Topay Total</th>
              <th>Yami Earn</th>
              <th>Status</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ data.month }}</td>
              <td>{{ data.income }}</td>
              <td class="bg-green disabled color-palette">{{ data.commission }}</td>
              <td class="bg-green disabled color-palette">{{ data.purchase }}</td>
              <td class="bg-green disabled color-palette">{{ data.pos }}</td>
              <td class="bg-red disabled color-palette">{{ data.toPayTotal }}</td>
              <td class="bg-green disabled color-palette">{{ data.yamiEarn }}</td>
              <td>{{ data.status }}</td>
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
  name: 'PaymentPayout',
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
