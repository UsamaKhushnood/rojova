<template>
<div class="MenuImage">
  <section class="content-header">
    <h1>
      Shop Income
      <small>Income</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Shop Income</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="nav-tabs-custom" style="margin-top: 30px;">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".IncomeShopIncomeDeliveryIncome" data-toggle="tab"><b>Delivery Income</b></a></li>
            <li><a href=".IncomeShopIncomeRestaurantIncome" data-toggle="tab"><b>Restaurant Income</b></a></li>
            <li><a href=".IncomeShopIncomePartyServiceIncome" data-toggle="tab"><b>Party Service Income</b></a></li>
            <li><a href=".IncomeShopIncomeDinnersIncome" data-toggle="tab"><b>Dinners Income</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane IncomeShopIncomeDeliveryIncome active">
              <!-- Data Table -->
              <DataTable :has_data="deliveryIncome.length>0">
                <template #header>
                  <th class="id-column">Shop Id</th>
                  <th>Shop Name</th>
                  <th>Month</th>
                  <th>Orders</th>
                  <th>YamiYami Fee</th>
                  <th>Online Fee</th>
                  <th>Canceld</th>
                  <th>Total</th>
                  <th>Options</th>
                </template>
                <tr v-for="(data, index) in deliveryIncome" :key="index">
                  <td>{{ data.shopId }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.month }}</td>
                  <td>{{ data.orders }}</td>
                  <td>{{ data.yamiyamiFee }}</td>
                  <td>{{ data.onlineFee }}</td>
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
                        <Income></Income>
                      </div>
                    </BsModal>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane IncomeShopIncomeRestaurantIncome">
              <!-- Data Table -->
              <DataTable :has_data="restaurantIncome.length>0">
                <template #header>
                  <th class="id-column">Shop Id</th>
                  <th>Shop Name</th>
                  <th>Month</th>
                  <th>Orders</th>
                  <th>YamiYami Fee</th>
                  <th>Online Fee</th>
                  <th>Canceld</th>
                  <th>Total</th>
                  <th>Options</th>
                </template>
                <tr v-for="(data, index) in restaurantIncome" :key="index">
                  <td>{{ data.shopId }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.month }}</td>
                  <td>{{ data.orders }}</td>
                  <td>{{ data.yamiyamiFee }}</td>
                  <td>{{ data.onlineFee }}</td>
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
                        <Income></Income>
                      </div>
                    </BsModal>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane IncomeShopIncomePartyServiceIncome">
              <!-- Data Table -->
              <DataTable :has_data="partyServiceIncome.length>0">
                <template #header>
                  <th class="id-column">Shop Id</th>
                  <th>Shop Name</th>
                  <th>Month</th>
                  <th>Orders</th>
                  <th>YamiYami Fee</th>
                  <th>Online Fee</th>
                  <th>Canceld</th>
                  <th>Total</th>
                  <th>Options</th>
                </template>
                <tr v-for="(data, index) in partyServiceIncome" :key="index">
                  <td>{{ data.shopId }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.month }}</td>
                  <td>{{ data.orders }}</td>
                  <td>{{ data.yamiyamiFee }}</td>
                  <td>{{ data.onlineFee }}</td>
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
                        <Income></Income>
                      </div>
                    </BsModal>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane IncomeShopIncomeDinnersIncome">
              <!-- Data Table -->
              <DataTable :has_data="dinnersIncome.length>0">
                <template #header>
                  <th class="id-column">Shop Id</th>
                  <th>Shop Name</th>
                  <th>Month</th>
                  <th>Orders</th>
                  <th>YamiYami Fee</th>
                  <th>Online Fee</th>
                  <th>Canceld</th>
                  <th>Total</th>
                  <th>Options</th>
                </template>
                <tr v-for="(data, index) in dinnersIncome" :key="index">
                  <td>{{ data.shopId }}</td>
                  <td>{{ data.shopName }}</td>
                  <td>{{ data.month }}</td>
                  <td>{{ data.orders }}</td>
                  <td>{{ data.yamiyamiFee }}</td>
                  <td>{{ data.onlineFee }}</td>
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
                        <Income></Income>
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
import Income from '@/components/Income.vue'
import { mapState } from 'vuex'

export default {
  name: 'YamiYamiIncome',
  components: {
    DataTable, BsModal, Income
  },
  computed: {
    ...mapState({
      deliveryIncome: state => state.income.shopIncome.deliveryIncome,
      restaurantIncome: state => state.income.shopIncome.restaurantIncome,
      partyServiceIncome: state => state.income.shopIncome.partyServiceIncome,
      dinnersIncome: state => state.income.shopIncome.dinnersIncome
    })
  },
  created: function () {
    this.$store.dispatch('income/getShopIncomeData')
  }
}
</script>
