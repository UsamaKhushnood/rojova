<template>
<div class="ShopActivityReview">
  <section class="content-header">
    <h1>
      Reviews
      <small>Shop Activity</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Reviews</li>
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
                <span class="info-box-text">CURRENT REVIEWS</span>
                <span class="info-box-number"> summery.current </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-red"><i class="fa fa-stop"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">SEEN REVIEWS</span>
                <span class="info-box-number"> summery.seen </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-yellow"><i class="fa fa-pause"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">UNSEEN REVIEWS</span>
                <span class="info-box-number"> summery.unSeen </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".ShopActivityReviewNewShopActivityReviewTab" data-toggle="tab"><b>Current Review</b></a></li>
            <li><a href=".ShopActivityReviewAcceptedShopActivityReviewTab" data-toggle="tab"><b>Seen Review</b></a></li>
            <li><a href=".ShopActivityReviewDeniedShopActivityReviewTab" data-toggle="tab"><b>UnSeen Review</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane ShopActivityReviewNewShopActivityReviewTab active">
              <DataTable :has_data="current.length>0">
                <template #header>
                  <th class="id-column">Review ID</th>
                  <th>Shop</th>
                  <th>User Name</th>
                  <th>Reviews</th>
                  <th>Average Rating</th>
                  <th>Date/Time</th>
                  <th>Status</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in current" :key="index">
                  <td>{{ data.id }}</td>
                  <td>{{ data.shop }}</td>
                  <td>{{ data.userName }}</td>
                  <td>{{ data.reviews }}</td>
                  <td>
                    <i v-if="data.averageRating<1" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<2" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<3" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<4" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<5" class="fa fa-star" style="color: #00a65a"></i>

                    <i v-if="data.averageRating>=1" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=2" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=3" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=4" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=5" class="fa fa-star-o"></i>
                  </td>
                  <td>{{ data.dateTime }}</td>
                  <td>
                    <label class="btn btn-success btn-table" v-if="data.status=='Seen'">{{ data.status }}</label>
                    <label class="btn btn-warning btn-table" v-if="data.status=='UnSeen'">{{ data.status }}</label>
                  </td>
                  <td>
                    <a href="#" class="btn btn-info btn-table"><i class="fa fa-eye"></i></a>
                    <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopActivityReviewAcceptedShopActivityReviewTab">
              <DataTable :has_data="seen.length>0">
                <template #header>
                  <th class="id-column">Review ID</th>
                  <th>Shop</th>
                  <th>User Name</th>
                  <th>Reviews</th>
                  <th>Average Rating</th>
                  <th>Date/Time</th>
                  <th>Status</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in seen" :key="index">
                  <td>{{ data.id }}</td>
                  <td>{{ data.shop }}</td>
                  <td>{{ data.userName }}</td>
                  <td>{{ data.reviews }}</td>
                  <td>
                    <i v-if="data.averageRating<1" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<2" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<3" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<4" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<5" class="fa fa-star" style="color: #00a65a"></i>

                    <i v-if="data.averageRating>=1" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=2" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=3" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=4" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=5" class="fa fa-star-o"></i>
                  </td>
                  <td>{{ data.dateTime }}</td>
                  <td>
                    <label class="btn btn-success btn-table" v-if="data.status=='Seen'">{{ data.status }}</label>
                    <label class="btn btn-warning btn-table" v-if="data.status=='UnSeen'">{{ data.status }}</label>
                  </td>
                  <td>
                    <a href="#" class="btn btn-info btn-table"><i class="fa fa-eye"></i></a>
                    <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopActivityReviewDeniedShopActivityReviewTab">
              <DataTable :has_data="unSeen.length>0">
                <template #header>
                  <th class="id-column">Review ID</th>
                  <th>Shop</th>
                  <th>User Name</th>
                  <th>Reviews</th>
                  <th>Average Rating</th>
                  <th>Date/Time</th>
                  <th>Status</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in unSeen" :key="index">
                  <td>{{ data.id }}</td>
                  <td>{{ data.shop }}</td>
                  <td>{{ data.userName }}</td>
                  <td>{{ data.reviews }}</td>
                  <td>
                    <i v-if="data.averageRating<1" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<2" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<3" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<4" class="fa fa-star" style="color: #00a65a"></i>
                    <i v-if="data.averageRating<5" class="fa fa-star" style="color: #00a65a"></i>

                    <i v-if="data.averageRating>=1" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=2" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=3" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=4" class="fa fa-star-o"></i>
                    <i v-if="data.averageRating>=5" class="fa fa-star-o"></i>
                  </td>
                  <td>{{ data.dateTime }}</td>
                  <td>
                    <label class="btn btn-success btn-table" v-if="data.status=='Seen'">{{ data.status }}</label>
                    <label class="btn btn-warning btn-table" v-if="data.status=='UnSeen'">{{ data.status }}</label>
                  </td>
                  <td>
                    <a href="#" class="btn btn-info btn-table"><i class="fa fa-eye"></i></a>
                    <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
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
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ShopActivityReview',
  components: {
    DataTable
  },
  data(){
    return{
      current: [],
      seen: [],
      unSeen: [],
    }
  }
}
</script>
