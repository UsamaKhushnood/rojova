<template>
<div class="ShopExtraAllergy">
  <section class="content-header">
    <h1>
      Allergies
      <small>Shop Extra</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Allergies</li>
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
              :height="210"
            >
            <template #button>
              <span class="btn btn-info btn-table">Add Allergy</span>
            </template>
            <template #title>Allergy</template>
            <div class="">
               <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                <label>Cuisine Name</label>
                <input v-model="formData.name" type="text" class="form-control" placeholder="Arabic Text">
                <template v-if="errors.name">
                  <span class="fa fa-close form-control-feedback"></span>
                  <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                </template>
              </div>
              <div :class="!errors.number?'form-group':'form-group has-error has-feedback'">
                <label>Cuisine Number</label>
                <input v-model="formData.number" type="text" class="form-control" placeholder="Arabic Text">
                <template v-if="errors.number">
                  <span class="fa fa-close form-control-feedback"></span>
                  <div class="text-danger" v-for="(errorMsg, index) in errors.number" :key="index">{{ errorMsg }}</div>
                </template>
              </div>
            </div>
            <template #footer>
              <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click.prevent="addAllergy('submit')">
               <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Allergy
              </button>
            </template>
          </BsModal>
        </div>
        <!-- Data Table -->
        <div class="">
          <VclTable v-if="showLoader" />
          <DataTable v-else :has_data="datas.length>0">
            <template #header>
              <th class="id-column">No.</th>
              
              <th>Allergy Name</th>
              <th>Allergy Number</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>{{ index+1 }}</td>
              
              <td>{{ data.name }}</td>
              <td>{{ data.number }}</td>
              <td>
                <BsModal
              smaller
              type="green"
              :height="200"
            >
            <template #button>
              <a href="#" class="btn btn-info btn-table"  @click="formData=JSON.parse(JSON.stringify(data))"><i class="fa fa-eye"></i></a>
            </template>
            <template #title>Allergy</template>
            <div class="">
              <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                <label>Cuisine Name</label>
                <input v-model="formData.name" type="text" class="form-control" placeholder="Arabic Text">
                <template v-if="errors.name">
                  <span class="fa fa-close form-control-feedback"></span>
                  <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                </template>
              </div>
              <div :class="!errors.number?'form-group':'form-group has-error has-feedback'">
                <label>Cuisine Number</label>
                <input v-model="formData.number" type="text" class="form-control" placeholder="Arabic Text">
                <template v-if="errors.number">
                  <span class="fa fa-close form-control-feedback"></span>
                  <div class="text-danger" v-for="(errorMsg, index) in errors.number" :key="index">{{ errorMsg }}</div>
                </template>
              </div>
            </div>
            <template #footer>
              <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click.prevent="addAllergy('update',data.id)">
               <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Allergy
              </button>
            </template>
          </BsModal>
                <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData(data.id)"><i class="fa fa-close"></i></a>
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
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';


export default {
  name: 'ShopExtraAllergy',
  components: {
    DataTable, BsModal, VclTable
  },
  data(){
    return{
      datas : [],
      showLoader : false,
      formData : {
        name : '',
        number : ''
      },
      errors : {},
      disableAddBtn : false,
      disableDelBtn : false
    }
  },
  mounted()
  {
    this.getAlergies();
  }, 
  methods: {
    getAlergies : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'allergy/list';
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
          return this.formData;
        default : 
           return this.formData
      }
    },
     addAllergy : function (type='submit',id='') {

        this.errors = {};
        var url = process.env.VUE_APP_API_BASE_URL+'allergy/'+this.getURI(type);
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
                  
                  this.formData= {
                    number : '',
                    name : ''
                  };
                  this.$emit('closeModal');
                  setTimeout(()=>{
                    this.getAlergies();
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

        var url = process.env.VUE_APP_API_BASE_URL+'allergy/delete';
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
              this.getAlergies();
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
