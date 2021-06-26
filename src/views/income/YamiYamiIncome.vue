<template>
<div class="YamiyamiIncome">
  <section class="content-header">
    <h1>
      YamiYamiIncome
      <small>Income</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">YamiYamiIncome</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">

    <div class="row">
      <!-- /.col (LEFT) -->
      <div class="col-md-6">
        <!-- LINE CHART -->
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">Income Month</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body chart-responsive">
            <LineChart
              :data="[
                {y: '2011 Q1', item1: 2666},
                {y: '2011 Q2', item1: 2778},
                {y: '2011 Q3', item1: 4912},
                {y: '2011 Q4', item1: 12767},
                {y: '2012 Q1', item1: 6810},
                {y: '2012 Q2', item1: 5670},
                {y: '2012 Q3', item1: 820},
                {y: '2012 Q4', item1: 15073},
                {y: '2013 Q1', item1: 10687},
                {y: '2013 Q2', item1: 18432}
              ]"
              :config="{
                xkey: 'y',
                ykeys: ['item1'],
                labels: ['Item 1'],
                lineColors: ['#3c8dbc'],
                hideHover: 'auto',
                labelColor: '#333',
                lineWidth: 2,
                gridTextColor: '#333',
                gridStrokeWidth: 0.4,
                pointSize: 4,
                pointStrokeColors: ['#efefef'],
                gridLineColor: '#efefef',
                gridTextSize: 12
              }"
              style="height: 300px"
            ></LineChart>
          </div>
          <!-- /.box-body -->
        </div>

      </div>
      <!-- /.col (LEFT) -->
      <div class="col-md-6">
        <!-- LINE CHART -->
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">Income Year</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body chart-responsive">
            <LineChart
              :data="[
                { y: '2011 Q1', item: 2666 },
                { y: '2011 Q2', item: 2778 },
                { y: '2011 Q3', item: 4912 },
                { y: '2011 Q4', item: 3767 },
                { y: '2012 Q1', item: 6810 },
                { y: '2012 Q2', item: 5670 },
                { y: '2012 Q3', item: 4820 },
                { y: '2012 Q4', item: 15073 },
                { y: '2013 Q1', item: 10687 },
                { y: '2013 Q2', item: 8432 }
              ]"
              :config="{
                xkey: 'y',
                ykeys: ['item'],
                labels: ['Item 1'],
                lineColors: ['#3c8dbc'],
                hideHover: 'auto',
                labelColor: '#333',
                lineWidth: 2,
                gridTextColor: '#333',
                gridStrokeWidth: 0.4,
                pointSize: 4,
                pointStrokeColors: ['#efefef'],
                gridLineColor: '#efefef',
                gridTextSize: 12
              }"
              style="height: 300px"
            ></LineChart>
          </div>
          <!-- /.box-body -->
        </div>

      </div>
      <!-- /.col (RIGHT) -->
    </div>

    <div class="box">
      <div class="box-body">
        <form class="form-inline well" style="margin-bottom: 0px !important; padding: 5px !important">
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

        <div class="nav-tabs-custom" style="margin-top: 30px;">
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
                <tr v-for="(data, index) in monthly" :key="index">
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
import LineChart from '@/components/charts/LineChart.vue'
import { mapState } from 'vuex'

export default {
  name: 'YamiYamiIncome',
  components: {
    DataTable, BsModal, LineChart
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
