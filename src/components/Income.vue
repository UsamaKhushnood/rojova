<template>
<div class="">
  <!-- Main content -->
  <section class="content">

    <form class="form-inline well well-success" style="margin-bottom: 15px !important; padding: 5px !important">
      <div class="form-group">
        <select id="memoryType" class="form-control" style="margin-right: 20px !important;">
            <option value="GB" selected="selected">Select Month</option>
        </select>
      </div>
      <div class="form-group">
          <select id="memoryType" class="form-control">
              <option value="GB" selected="selected">Select Month</option>
          </select>
      </div>
      <div class="form-group">
          <span style="margin: 5px; font-size: 16px">to</span>
      </div>
      <div class="form-group" style="margin-right: 20px !important;">
          <select id="memoryType" class="form-control">
              <option value="GB" selected="selected">Select Month</option>
          </select>
      </div>
      <div class="form-group">
          <select id="memoryType" class="form-control">
              <option value="GB" selected="selected">Select Year</option>
          </select>
      </div>
      <div class="form-group">
          <span style="margin: 5px; font-size: 16px">to</span>
      </div>

      <div class="form-group" style="margin-right: 20px !important;">
          <select id="memoryType" class="form-control">
              <option value="GB" selected="selected">Select Year</option>
          </select>
      </div>

      <div class="form-group" style="margin-right: 20px !important;">
          <select id="memoryType" class="form-control">
              <option value="GB" selected="selected">Sort By</option>
          </select>
      </div>

      <div class="form-group" style="margin-right: 20px !important;">
        <div class="input-group">
          <input type="text" class="form-control" name="keywords" placeholder="Search...">
          <div class="input-group-btn">
            <button type="button" class="btn btn-white">
              <i class="ace-icon fa fa-search icon-on-right bigger-110"></i>
            </button>
          </div>
        </div>
      </div>
    </form>

    <div class="box">
      <div class="box-body">

        <div class="nav-tabs-custom" style="margin-top: 5px;">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".IncomeYamiYamiIncomeMonthlyIncome" data-toggle="tab"><b>Monthly Income</b></a></li>
            <li><a href=".IncomeYamiYamiIncomeYearlyIncome" data-toggle="tab"><b>Yearly Income</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane IncomeYamiYamiIncomeMonthlyIncome active">
              <!-- Data Table -->
              <DataTable :has_data="monthly.length>0">
                <template #header>
                  <th class="id-column">Month</th>
                  <th>YamiYAmi fee</th>
                  <th>Online Fee</th>
                  <th>Canceld</th>
                  <th>Total</th>
                  <th>Options</th>
                </template>
                <tr v-for="(data, index) in monthly" :key="index">
                  <td>{{ data.month }}</td>
                  <td>{{ data.onlineShop }}</td>
                  <td>{{ data.payouts }}</td>
                  <td>{{ data.canceld }}</td>
                  <td>{{ data.total }}</td>
                  <td>
                    <BsModal
                        type="green"
                      >
                      <template #button>
                        <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                      </template>
                      <template #title>Shop Name</template>
                      <div class="container">
                        <Query></Query>
                      </div>
                    </BsModal>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane IncomeYamiYamiIncomeYearlyIncome">
              <!-- Data Table -->
              <DataTable :has_data="yearly.length>0">
                <template #header>
                  <th class="id-column">Month</th>
                  <th>Delivery Services</th>
                  <th>Restaurants</th>
                  <th>Party Service</th>
                  <th>Takeaway</th>
                  <th>Online Shop</th>
                  <th>Payouts</th>
                  <th>Canceld</th>
                  <th>Total</th>
                  <th>Options</th>
                </template>
                <tr v-for="(data, index) in yearly" :key="index">
                  <td>{{ data.month }}</td>
                  <td>{{ data.deliveryServices }}</td>
                  <td>{{ data.restaurants }}</td>
                  <td>{{ data.partyService }}</td>
                  <td>{{ data.takeaway }}</td>
                  <td>{{ data.onlineShop }}</td>
                  <td>{{ data.payouts }}</td>
                  <td>{{ data.canceld }}</td>
                  <td>{{ data.total }}</td>
                  <td>
                    <BsModal
                        type="green"
                      >
                      <template #button>
                        <span class="btn btn-info btn-table"><i class="fa fa-eye"></i></span>
                      </template>
                      <template #title>Shop Name</template>
                      <div class="container">
                        <Query></Query>
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
import Query from '@/components/Query.vue'
import { mapState } from 'vuex'

export default {
  name: 'Income',
  components: {
    DataTable, BsModal, Query
  },
  computed: {
    ...mapState({
      monthly: state => state.income.yamiyamiIncome.monthly,
      yearly: state => state.income.yamiyamiIncome.yearly
    })
  },
  created: function () {
    this.$store.dispatch('income/getYamiyamiIncomeData')
  }
}
</script>
