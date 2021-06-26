<template>
<div class="Request">
  <section class="content-header">
    <h1>
      Coupons
      <small>Shop Offer</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Coupons</li>
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
              <span class="info-box-icon bg-aqua"><i class="fa fa-sort-numeric-asc"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">TOTAL COUPONS</span>
                <span class="info-box-number"> summery.total </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-green"><i class="fa fa-play-circle-o"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">COUPONS ACTIVE</span>
                <span class="info-box-number"> summery.active </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-yellow"><i class="fa fa-pause"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">COUPONS ON HOLD</span>
                <span class="info-box-number"> summery.onHold </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="tab-pane ShopOfferCouponNewTab active">
          <DataTable :has_data="combinedDatas.length>0">
            <template #header>
              <th class="id-column">Coupon ID</th>
              <th>Coupon Title</th>
              <th>Shop Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Sales</th>
              <th>Status</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in combinedDatas" :key="index">
              <td>{{ data.id }}</td>
              <td>{{ data.title }}</td>
              <td>{{ data.shopName }}</td>
              <td>{{ data.startDate }}</td>
              <td>{{ data.endDate }}</td>
              <td>{{ data.sales }}</td>
              <td>
                <a href="#" @click.prevent="" class="btn btn-success btn-table" v-if="data.status=='Active'">{{ data.status }}</a>
                <a href="#" @click.prevent="" class="btn btn-warning btn-table" v-if="data.status=='On Hold'">{{ data.status }}</a>
              </td>
              <td>
                <BsModal type="black" :height="690"
                  smaller
                  slim>
                  <template #button>
                    <span class="btn btn-table btn-success"><i class="fa fa-eye"></i></span>
                  </template>
                  <div class="shopbox">
                    <div class="shop-img">
                      <img src="/images/portal.png" alt="">
                      <div class="shopname">Shop Name</div>
                      <div class="discount-percent"></div><div class="percent">%</div>
                      <div class="rating-event">
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                    </div>
                    <div class="shop-content">
                      <h4 class="text-center">New Opening</h4><hr>
                      <p class="text-center"><b>Greek Food</b></p><hr>
                      <p class="text-center"><i class="fas fa-euro-sign"></i> &nbsp; &nbsp; Adult: 20 <i class="fas fa-euro-sign"></i>  | Kids: 20 <i class="fas fa-euro-sign"></i>  | Free</p><hr>
                      <p class="text-center"><i class="fas fa-calendar-alt"></i> &nbsp; &nbsp; <span class="red-color"><b>Every Day 10:00 - 15:00</b></span></p>
                      <a href="#" class="btn btn-block btn-reservation">Reservation</a>
                      <div class="shop-link">
                        <ul class="list-inline nav-justified">
                          <li><a href="#"><i class="fa fa-shopping-cart"></i> 258</a></li>
                          <li><a href="#"><i class="fa fa-share"></i> 258</a></li>
                          <li><a href="#"><i class="fa fa-heart"></i> 558</a></li>
                        </ul>
                      </div>
                    </div>
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
  name: 'ShopOfferCoupon',
  components: {
    DataTable, BsModal
  },
  data(){
    return{
        active : [],
        onHold : [],
        combinedDatas : [],
    }
  },
}
</script>
