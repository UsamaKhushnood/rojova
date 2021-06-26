<template>
<div class="ShopExtraService">

    <notifications group="notify" class="notifications"></notifications>

  <section class="content-header">
    <h1>
      Shop Service
      <small>Shop Extra</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Shop Service</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="text-right" style="margin-bottom: 20px;">
          <BsModal
              smaller
              type="green"
              :height="350"
            >
            <template #button>
              <span class="btn btn-info btn-table">
                Add Shop Service
              </span>
            </template>
            <template #title>Shop Service</template>
            <div class="">
              <FormShopService
                :formData="formData"
                :errors="errors"
              ></FormShopService>
            </div>
            <template #footer>
              <button type="button" @click.prevent="addService('submit')" class="btn btn-primary" :disable="disableAddBtn">
                <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i>  Add Shop Service
              </button>
            </template>
          </BsModal>
        </div>
        <!-- Data Table -->
        <div class="">
          <VclTable v-if="showLoader"></VclTable>
          <DataTable v-else :has_data="datas.length>0" :datas="datas">
            <template #header>
              <th class="id-column">ID.</th>
              <th>Service Name</th>
              <th class="text-center">Thumbnail</th>
              <th>Last Update</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>{{ data.id }}</td>
              <td>{{ data.name }}</td>
              <td class="text-center">
                <img height="35px" :src="data.image?data.image:'/images/user-dave-robert-35x35.png'">
              </td>
              <td>{{ data.updated_at }}</td>
              <td>
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table"
                      @click="addService('edit',data.id)">
                        <i class="fa fa-eye"></i>
                    </span>
                  </template>
                  <template #title>Menu Category</template>
                  <div class="">
                    <FormShopService
                      :formData="formData"
                      :errors="errors"
                    ></FormShopService>
                  </div>
                  <template #footer>
                    <button type="button" @click.prevent="addService('update',data.id)" class="btn btn-primary" :disabled="disableAddBtn">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Shop Service
                   </button>
                  </template>
                </BsModal>
                <button :disabled="disableDelBtn" class="btn btn-danger btn-table"
                  @click.prevent="removeData(data.id)">
                    <i class="fa fa-close"></i>
                </button>
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
import BsModal from '@/components/BsModal.vue'
import DataTable from '@/components/DataTable.vue'
import FormShopService from '@/components/extra/FormShopService.vue'
import { mapState } from 'vuex'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';

export default {
  name: 'ShopExtraService',
  components: {
    DataTable, BsModal, FormShopService,VclTable
  },
  data: function () {
    return {
      formData: {
        name: '',
        image: ''
      },
      datas : [],
      errors : {},
      disableAddBtn : false,
      disableDelBtn : false,
      showLoader : false
    }
  },
  mounted(){
      this.getShopServices();
  },
  methods: {
     getShopServices : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'shop_service/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.datas = response.data.data;
            }
            else
            {
                this.$notify({
                    group: 'notify',
                    type: 'warn',
                    title: 'Failure',
                    text: response.data.message || 'something went wrong, Please try again later.'
                }); 
            }
        })
        .catch(error => {
          console.log(error)
            this.showLoader = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    resetForm()
    {
      this.formData.name = '';
      this.formData.image = '';
    },
    getURI(type){
        switch(type)
        {
           case 'edit':
              return 'edit'
            case 'update':
              return 'update'
            default:
              return 'create'
        }
    },  
    getPayLoad(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formData.id = id;
          if(this.formData.image.indexOf('http')> -1){
            this.formData.image = ""
          }
          return this.formData;
        default : 
           return this.formData
      }
    },
    addService : function (type='submit',id='') {

        this.errors = {};
        var url = process.env.VUE_APP_API_BASE_URL+'shop_service/'+this.getURI(type);
        this.disableAddBtn = true;

        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:this.getPayLoad(type,id) , url})
        .then(response => {
            this.disableAddBtn = false;
            if(response.data.error == false){

                if(type == 'edit')
                {
                  this.formData = response.data.data;
                }
                else
                {
                  this.$notify({
                    group: 'notify',
                    type: 'success',
                    title: 'Success',
                    text: response.data.message
                  }); 
                  
                  this.resetForm();
                  this.$emit('closeModal')

                  setTimeout(()=>{
                    this.getShopServices();
                  },50)
                }
            }
            else
            {
                this.$notify({
                    group: 'notify',
                    type: 'warn',
                    title: 'Failure',
                    text: response.data.message || 'something went wrong, Please try again later.'
                }); 
            }
        })
        .catch(error => {
          console.log(error)
            this.disableAddBtn = false;
            if(error.response.status === 422){
              this.errors = error.response.data.errors
            }
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },

    removeData (dataId) {

        if(!confirm('Are you sure to delete?')){
          return;
        }

        var url = process.env.VUE_APP_API_BASE_URL+'shop_service/delete';
        this.disableDelBtn = true;
        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:{id : dataId} , url})
        .then(response => {
            this.disableDelBtn = false;
            if(response.data.error == false){
              this.$notify({
                group: 'notify',
                type: 'success',
                title: 'Success',
                text: response.data.message
              }); 
              this.getShopServices();
            }
            else
            {
              this.$notify({
                  group: 'notify',
                  type: 'warn',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong, Please try again later.'
              }); 
            }
        })
        .catch(error => {
          console.log(error)
            this.disableDelBtn = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    }
  }
}
</script>
