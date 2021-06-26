<template>
<div class="ShopExtraFood">
  <notifications group="notify" class="notifications"></notifications>

  <section class="content-header">
    <h1>
      Food Extra
      <small>Shop Extra</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Food Extra</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="nav-tabs-custom" style="margin-top: 30px;">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".ShopExtraFoodExtraCategory" data-toggle="tab"><b>Food Extra Category</b></a></li>
            <li><a href=".ShopExtraFoodExtraItem" data-toggle="tab"><b>Food Extra Item</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane ShopExtraFoodExtraCategory active">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                  smaller
                  type="green"
                  :height="305"
                >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Food Extra Category</span>
                  </template>
                  <template #title>Food Extra Category</template>
                  <div class="">
                    <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                      <label>Food Extra Category Name</label>
                      <input type="text" class="form-control" placeholder="Arabic Text" v-model="categoryPyload.name">
                      <template v-if="errors.name">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                      </template>  
                    </div>
                    <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                       <label>Image</label>
                      <FileUploader v-bind:setLOGO="GETIMG" v-model="categoryPyload.image"></FileUploader>
                      <template v-if="errors.image">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                      </template> 
                    </div>
                  </div>
                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddCtBtn" @click.prevent="addCategory('submit')">
                      <i class="fa fa-spinner fap-spin" v-if="disableAddCtBtn"></i>  Food Extra Category
                    </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader"></VclTable>
              <DataTable v-else :has_data="category.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Category Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in category" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" style="height:35px;width:35px;"></td>
                  <td>
                    <BsModal
                      smaller
                      type="green"
                      :height="105"
                    >
                  <template #button>
                    <a href="#" class="btn btn-info btn-table" @click.prevent="addCategory('edit',data.id)"><i class="fa fa-eye"></i></a>
                  </template>
                  <template #title>Food Extra Category</template>
                  <div class="">
                    <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                      <label>Food Extra Category Name</label>
                      <input type="text" class="form-control" placeholder="Arabic Text" v-model="categoryPyload.name">
                      <template v-if="errors.name">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                      </template>  
                    </div>
                  </div>
                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddCtBtn" @click.prevent="addCategory('update',data.id)">
                      <i class="fa fa-spinner fap-spin" v-if="disableAddCtBtn"></i>  Food Extra Category
                    </button>
                  </template>
                </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData('category',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraFoodExtraItem">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                  smaller
                  type="green"
                  :height="180"
                >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Food Extra Item</span>
                  </template>
                  <template #title>Menu Item</template>
                  <div class="">
                    <div :class="!itErrors.food_category_id?'form-group':'form-group has-error has-feedback'">
                      <label>Food Extra Category Name</label>
                      <select class="form-control" v-model="itemPayload.food_category_id" >
                        <option selected="" disabled="" value="">Select Category</option>
                        <option v-for="ct in category" :value="ct.id">{{ct.name}}</option>
                      </select>
                        <template v-if="itErrors.food_category_id">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in itErrors.food_category_id" :key="index">{{ errorMsg }}</div>
                        </template>  
                    </div>
                    <div :class="!itErrors.name?'form-group':'form-group has-error has-feedback'">
                      <label>Food Extra Item</label>
                      <input type="text" class="form-control" placeholder="Arabic Text" v-model="itemPayload.name">
                      <template v-if="itErrors.name">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in itErrors.name" :key="index">{{ errorMsg }}</div>
                      </template>
                    </div>
                  </div>
                  <template #footer>
                    <button type="button" class="btn btn-primary" @click.prevent="addItem('submit')" :disabled="disableAddItBtn">
                      <i class="fa fa-spinner fap-spin" v-if="disableAddItBtn"></i> Add Food Extra Item
                  </button>
                  </template>
                </BsModal>
              </div>
               <VclTable v-if="showLoader"></VclTable>
              <DataTable v-else :has_data="items.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Category Name</th>
                  <th>Item Name</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in items" :key="index">
                  <td>{{ index+1 }}</td>
                  <td ><span v-if="data.food_category">{{ data.food_category.name }}</span></td>
                  <td>{{ data.name }}</td>
                  <td>
                    <BsModal
                  smaller
                  type="green"
                  :height="200"
                >
                  <template #button>
                    <s<a href="#" class="btn btn-info btn-table" @click.prevent="addItem('edit',data.id)"><i class="fa fa-eye"></i></a>
                  </template>
                  <template #title>Menu Item</template>
                  <div class="">
                    <div :class="!itErrors.food_category_id?'form-group':'form-group has-error has-feedback'">
                      <label>Food Extra Category Name</label>
                      <select class="form-control" v-model="itemPayload.food_category_id" >
                        <option selected="" disabled="" value="">Select Category</option>
                        <option v-for="ct in category" :value="ct.id">{{ct.name}}</option>
                      </select>
                        <template v-if="itErrors.food_category_id">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in itErrors.food_category_id" :key="index">{{ errorMsg }}</div>
                        </template>  
                    </div>
                    <div :class="!itErrors.name?'form-group':'form-group has-error has-feedback'">
                      <label>Food Extra Item</label>
                      <input type="text" class="form-control" placeholder="Arabic Text" v-model="itemPayload.name">
                      <template v-if="itErrors.name">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in itErrors.name" :key="index">{{ errorMsg }}</div>
                      </template>
                    </div>
                  </div>
                  <template #footer>
                    <button type="button" class="btn btn-primary" @click.prevent="addItem('update',data.id)" :disabled="disableAddItBtn">
                      <i class="fa fa-spinner fap-spin" v-if="disableAddItBtn"></i> Add Food Extra Item
                  </button>
                  </template>
                </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData('item',data.id)"><i class="fa fa-close"></i></a>
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
import BsModal from '@/components/BsModal.vue'
import DataTable from '@/components/DataTable.vue'
import { mapState } from 'vuex'

import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';
import FileUploader from '@/components/FileUploader.vue'


export default {
  name: 'ShopExtraFood',
  components: {
    DataTable, BsModal, VclTable, FileUploader
  },
  data(){
    return{
      category : [],
      items : [],
      showLoader : false,
      categoryPyload : {
        name : '',
        image : ''
      },
      itemPayload : {
        food_category_id : '',
        name : ''
      },
      disableAddCtBtn : false,
      disableAddItBtn : false,
      errors : {},
      itErrors : {},
      disableDelBtn : false
    }
  },
  mounted(){
      this.getCategories();
      this.getItems();
  },
  methods:{
    async getImg64(value){
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    async GETIMG(value){
      this.categoryPyload.image=await this.getImg64(value);
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
          this.categoryPyload.id = id;
          return this.categoryPyload;
        default : 
           return this.categoryPyload
      }
    },
    getCategories : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'food_category/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.category = response.data.data;
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
    getItems : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'food_item/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.items = response.data.data;
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
    addCategory : function(type='submit',id=''){
       this.errors = {};
        var url = process.env.VUE_APP_API_BASE_URL+'food_category/'+this.getURI(type);
        this.disableAddCtBtn = true;
        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:this.getPayLoad(type,id) , url})
        .then(response => {
            this.disableAddCtBtn = false;
            if(response.data.error == false ){
                if(type == 'edit')
                {
                  this.categoryPyload = response.data.data;
                }
                else
                {
                  this.$notify({
                    group: 'notify',
                    type: 'success',
                    title: 'Success',
                    text: response.data.message
                  }); 

                  this.categoryPyload = {
                    name : '',
                    image : ''
                  }

                  this.$emit('closeModal')
                  setTimeout(()=>{
                    this.getCategories();
                  },50)
                  this.errors = {}
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
            if(error.response.status === 422){
              this.errors = error.response.data.errors
            }
            this.disableAddCtBtn = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    getItemPayLoad(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.itemPayload.id = id;
          return this.itemPayload;
        default : 
           return this.itemPayload
      }
    },
    addItem : function(type='submit',id=''){
       this.errors = {};
        var url = process.env.VUE_APP_API_BASE_URL+'food_item/'+this.getURI(type);
        this.disableAddItBtn = true;
        this.$store.dispatch('HTTP_POST_REQUEST' ,  { payload : this.getItemPayLoad(type,id), url})
        .then(response => {
            this.disableAddItBtn = false;
            if(response.data.error == false ){
                if(type == 'edit')
                {
                  this.itemPayload = response.data.data;
                }
                else
                {
                  this.$notify({
                    group: 'notify',
                    type: 'success',
                    title: 'Success',
                    text: response.data.message
                  }); 
                  this.itemPayload= {
                    food_category_id : '',
                    name : ''
                  };
                  this.$emit('closeModal');
                  setTimeout(()=>{
                    this.getItems();
                  },50)
                }
                this.itErrors = {}
                
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
            if(error.response.status === 422){
              this.itErrors = error.response.data.errors
            }
            this.disableAddItBtn = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    removeData (type='category' ,dataId) {

        if(!confirm('Are you sure to delete?')){
          return;
        }

        let URI = type == 'category' ? 'food_category/delete' : 'food_item/delete';

        var url = process.env.VUE_APP_API_BASE_URL+URI;
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
              if(type == 'category'){
                this.getCategories();
              }else{
                this.getItems();
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
