<template>
<div class="ShopDiscountManage">
  <section class="content-header">
    <h1>
      Manage Shop Coupon
      <small>Marketing</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Manage Shop Coupon</li>
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
              <th>Discount Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Discount Type</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ data.title }}</td>
              <td>{{ data.startDate }}</td>
              <td>{{ data.endDate }}</td>
              <td>{{ data.price }}</td>
              <td>{{ data.discountType }}</td>
              <td>
                <a href="#" class="btn btn-info btn-table"><i class="fa fa-eye"></i></a>
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
import { mapState } from 'vuex'

export default {
  name: 'MarketingShopCouponManage',
  components: {
    DataTable
  },
  computed: {
    ...mapState({
      datas: state => state.marketing.shopDiscountManage.datas
    })
  },
  created: function () {
    this.$store.dispatch('marketing/getShopDiscountManageData')
  }
}
</script>
