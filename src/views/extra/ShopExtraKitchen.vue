<template>
<div class="ShopExtraKitchen">
  <section class="content-header">
    <h1>
      Shop Kitchen
      <small>Shop Extra</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Shop Kitchen</li>
    </ol>
  </section>
  <notifications group="notify" class="notifications"></notifications>


  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="text-right" style="margin-bottom: 20px;">
          <BsModal
              smaller
              type="green"
              :height="300"
            >
            <template #button>
              <span class="btn btn-info btn-table">
                Add Shop Kitchen
              </span>
            </template>
            <template #title>Shop Kitchen</template>
            <div class="">
              <FormShopKitchen
                :formData="formData"
                :errors="errors"
              ></FormShopKitchen>
            </div>
            <template #footer>
              <button type="button" @click.prevent="addKitchen('submit')" class="btn btn-primary" :disabled="disableAddBtn">
                <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i>  Add Shop Kitchen
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
              <th>Kitchen Name</th>
              <th class="text-center">Thumbnail</th>
              <th>Last Update</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>{{ data.id }}</td>
              <td>{{ data.cuisine_name }}</td>
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
                      @click="formData=JSON.parse(JSON.stringify(data))">
                        <i class="fa fa-eye"></i>
                    </span>
                  </template>
                  <template #title>Menu Category</template>
                  <div class="">
                    <FormShopKitchen
                      :formData="formData"
                      :errors="errors"
                    ></FormShopKitchen>
                  </div>
                  <template #footer>
                    <button type="button" @click.prevent="addKitchen('update',data.id)" :disabled="disableAddBtn" class="btn btn-primary"
                    > <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Shop Kitchen</button>
                  </template>
                </BsModal>
                <a href="#" class="btn btn-danger btn-table"
                  @click.prevent="removeData(data.id)">
                    <i class="fa fa-close"></i>
                </a>
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
import FormShopKitchen from '@/components/extra/FormShopKitchen.vue'
import { mapState } from 'vuex'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';


export default {
  name: 'ShopExtraKitchen',
  components: {
    DataTable, BsModal, FormShopKitchen, VclTable
  },
  data: function () {
    return {
      formData: {
        cuisine_name: '',
        image: ''
      },
      datas : [],
      errors : {},
      showLoader : false,
      disableAddBtn : false
    }
  },
  mounted()
  {
    this.getKitchends();
  },  
  methods: {
    getKitchends : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'cuisnes/list';
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
          if(this.formData.image.indexOf('http')>-1){
            this.formData.image = "";
          }
          return this.formData;
        default : 
           return this.formData
      }
    },
     addKitchen : function (type='submit',id='') {

        this.errors = {};
        var url = process.env.VUE_APP_API_BASE_URL+'cuisnes/'+this.getURI(type);
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
                  
                  this.formData.cuisine_name = '';
                  this.formData.image = '';
                  this.$emit('closeModal')
                  setTimeout(()=>{
                    this.getKitchends();
                  },100)
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

        var url = process.env.VUE_APP_API_BASE_URL+'cuisnes/delete';
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
              this.getKitchends();
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
  },

}
</script>
