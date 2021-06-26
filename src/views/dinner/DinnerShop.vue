<template>
<div class="Request">
  <section class="content-header">
    <h1>
      Manage Shop
      <small>Dinner</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Manage Shop</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <!-- Info Box -->
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-aqua"><i class="fa fa-sort-numeric-asc"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">TOTAL SHOPS</span>
                <span class="info-box-number"> summery.total </span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-green"><i class="fa fa-play-circle-o"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">SHOP ACTIVE</span>
                <span class="info-box-number"> summery.active </span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-red"><i class="fa fa-stop"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">SHOP CLOSED</span>
                <span class="info-box-number"> summery.closed </span>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box" style="background: #ecf0f5;">
              <span class="info-box-icon bg-yellow"><i class="fa fa-lock"></i></span>
              <div class="info-box-content" >
                <span class="info-box-text">SHOP SUSPEND</span>
                <span class="info-box-number"> summery.suspended </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Data Table -->
        <div class="tab-pane RequestNewRequestTab active">
          <VclTable v-if="isLoading"/>
           <DataTable v-else :has_data="combinedDatas.length>0">
            <template #header>
              <th class="id-column">#</th>
              <th>Shop ID</th>
              <th>Shop Name</th>
              <th>Location</th>
              <th>Phone Number</th>
              <th style="text-align:center;">Status</th>
              <th class="option-column"  style="text-align:center;">Options</th>
            </template>
            <tr v-for="(data, index) in combinedDatas" :key="index">
              <td>{{ index }}</td>
              <td>{{ data.uuid }}</td>
              <td>{{ data.shop_name }}</td>
              <td>{{ data.address }}</td>
              <td>{{ data.phone }}</td>
              <td style="text-align:center;">
                <a style="width:93px;" href="#" @click.prevent="" class="btn btn-success btn-table tex-center" v-if="data.status==1">Active</a>
                <a style="width:93px;" href="#" @click.prevent="" class="btn btn-danger btn-table tex-center" v-if="data.status==2">Closed</a>
                <a style="width:93px;" href="#" @click.prevent="" class="btn btn-warning btn-table tex-center" v-if="data.status==3">Suspended</a>
              </td>
              <td  style="text-align:center;">
                <BsModal
                    
                    type="blue"
                    :height="600"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table"><i class="fa fa-edit"></i></span>
                  </template>
                  <AddShopFormS> </AddShopFormS>
                </BsModal>
                                <BsModal                    
                    type="green"
                    :height="1100"
                    class="shopNameDetail"
                    > 
                  <template #button>
                    <a href="#" class="btn btn-success btn-edit btn-table" @click="formDataAdmin=JSON.parse(JSON.stringify(data))"><i class="fa fa-cog"></i></a>
                  </template>
                  <ShopNameDetails> </ShopNameDetails>
                </BsModal>
                <BsModal                    
                  type="red"
                  :height="900"> 
                <template #button>
                  <a href="#" class="btn btn-danger btn-edit btn-table" @click="formDataAdmin=JSON.parse(JSON.stringify(data))"> <i class="fa fa-times-circle"></i></a>
                </template>
                  <h1>Content Goes Here</h1>
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
import ShopNameDetails from '@/components/extra/ShopNameDetails.vue'
import AddShopFormS from '@/components/extra/AddShopFormS.vue'
import { mapState, mapGetters } from 'vuex'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';



export default {
  name: 'DinnerShop',
  components: {
    DataTable, BsModal, VclTable,ShopNameDetails,AddShopFormS
  },
  data(){
    return{
      active : '',
      closed : '',
      suspended : '',
      combinedDatas : [],
      isLoading : false,
    }
  },
  mounted(){
    this.getRequestListing();
  },
  methods:{
    getRequestListing : function(){

        var url = process.env.VUE_APP_API_BASE_URL+'shop/list/ /2'

        this.isLoading = true;

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {

              this.isLoading = false;

            if(response.data.error == false)
            {
                this.combinedDatas = response.data.data.shop
            }
            else
            {
              this.$notify({
                  group: 'notify',
                  type: 'warn',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong.'
                });
            }

        })
        .catch(error => {

          console.log(error)

            this.isLoading = false;

            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
      },
  }
}
</script>
