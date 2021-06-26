<template>
<div class="MenuImage">
  <section class="content-header">
    <h1>
      Offer Cards
      <small>YamiYami Settings</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Menu Images</li>
    </ol>
  </section>
  <notifications group="notify" class="notifications"></notifications>


  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="nav-tabs-custom" style="margin-top: 30px;">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".SettingsMenuImagesCategory" data-toggle="tab"><b>Events</b></a></li>
            <li><a href=".SettingsMenuImagesCardItem" data-toggle="tab"><b>Discount</b></a></li>
            <li><a href=".SettingsMenuImagesItemType" data-toggle="tab"><b>Coupons</b></a></li>
            <li><a href=".SettingsMenuImagesBanner" data-toggle="tab"><b>Food Deals</b></a></li>
            <li><a href=".Special" data-toggle="tab"><b>Special Offer</b></a></li>
            <li><a href=".hotDeals" data-toggle="tab"><b>Hot Deals</b></a></li>
          </ul>

          <div class="tab-content">
            <!-- Card 01 -->
            <div class="tab-pane SettingsMenuImagesCategory active">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal smaller :height="360" type="green">
                  <template #button>
                    <span class="btn btn-info">Add Menu Category</span>
                  </template>
                  <template #title>
                    Menu Category
                  </template>
                  <form style="margin-top: 20px;">
                      <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                        <label>Category Name</label>
                        <input v-model="formData.name" type="text" class="form-control">
                        <template v-if="errors.name">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                        </template>
                      </div>
                      <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                        <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
                        <template v-if="errors.image">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                        </template> 
                      </div>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addCategory('submit')"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Category 
                    </a>
                    </div>
                  </form>
                </BsModal>
              </div>

              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="menuCategory.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Category Name</th>
                  <th>Category Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in menuCategory" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal smaller :height="360" type="green">
                      <template #button>
                        <span class="btn btn-info btn-table" @click="formData=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></span>
                      </template>
                      <template #title>
                        Menu Category
                      </template>
                      <form style="margin-top: 20px;">
                        <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                      <label>Category Name</label>
                      <input v-model="formData.name" type="text" class="form-control">
                      <template v-if="errors.name">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                      </template>
                    </div>
                    <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                      <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
                      <template v-if="errors.image">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                      </template> 
                    </div>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addCategory('update',data.id)"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Category 
                    </a>
                    </div>
                      </form>
                    </BsModal>
                     <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData(data.id,'menu_category')"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            
            <!-- Card 02 -->
            <div class="tab-pane SettingsMenuImagesCardItem">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
             <BsModal smaller :height="360" type="green">
                  <template #button>
                    <span class="btn btn-info">Add Menu Item</span>
                  </template>
                  <template #title>
                    Menu Item
                  </template>
                  <form style="margin-top: 20px;">
                    <MenuItemForm
                    :formData="formDataItem"
                    :errors="errorsItem"
                    >
                    </MenuItemForm>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addItem('submit')"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Item 
                    </a>
                    </div>
                  </form>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="cardItem.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <!-- <th>Category Name</th> -->
                  <th>Menu Card Item</th>
                  <th>Category Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in cardItem" :key="index">
                  <td>{{ index+1 }}</td>
                  <!-- <td>{{ data.category }}</td> -->
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                     <BsModal smaller :height="360" type="green">
                  <template #button>
                    <span class="btn btn-info btn-table" @click="formDataItem=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></span>
                  </template>
                  <template #title>
                    Menu Item
                  </template>
                  <form style="margin-top: 20px;">
                    <MenuItemForm
                    :formData="formDataItem"
                    :errors="errorsItem"
                    >
                    </MenuItemForm>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addItem('update',data.id)"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Item 
                    </a>
                    </div>
                  </form>
                </BsModal>
                     <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData(data.id,'menu_category_item')"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>

            <!-- Card 03 -->
            <div class="tab-pane SettingsMenuImagesItemType">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal smaller :height="360" type="green">
                  <template #button>
                    <span class="btn btn-info">Menu Card Item Type</span>
                  </template>
                  <template #title>
                    Menu Card Item Type
                  </template>
                  <form style="margin-top: 20px;">
                    <FormMenuType
                    :formData="formDataType"
                    :errors="errorsType"
                    >
                    </FormMenuType>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" @click.prevent="addType('submit')" :disabled="disableAddBtn"> 
                       <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Card Item Type
                       </a>
                    </div>
                  </form>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="itemType.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Category Name</th>
                  <th>Menu Card Item</th>
                  <th>Category Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in itemType" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.category }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal smaller :height="360" type="green">
                  <template #button>
                   <span class="btn btn-info btn-table" @click="formDataType=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></span>
                  </template>
                  <template #title>
                    Menu Card Item Type
                  </template>
                  <form style="margin-top: 20px;">
                    <FormMenuType
                    :formData="formDataType"
                    :errors="errorsType"
                    >
                    </FormMenuType>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" @click.prevent="addType('update',data.id)" :disabled="disableAddBtn"> 
                       <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Card Item Type
                       </a>
                    </div>
                  </form>
                </BsModal>
                     <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData(data.id,'menu_category_type')"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>

            <!-- Card 04 -->
            <div class="tab-pane SettingsMenuImagesBanner">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal smaller :height="360" type="green">
                  <template #button>
                    <span class="btn btn-info">Add Menu Banner</span>
                  </template>
                  <template #title>
                    Menu Banner
                  </template>
                  <form style="margin-top: 20px;">
                      <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                        <label>Banner Name</label>
                        <input v-model="formData.name" type="text" class="form-control">
                        <template v-if="errors.name">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                        </template>
                      </div>
                      <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                        <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
                        <template v-if="errors.image">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                        </template> 
                      </div>
                     <div class="form-group">
                       <!-- Here -->
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addBanner('submit')"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Banner 
                    </a>
                    </div>
                  </form>
                </BsModal>
              </div>

              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="menuBanner.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Banner Name</th>
                  <th>Banner Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in menuBanner" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal smaller :height="360" type="green">
                      <template #button>
                        <span class="btn btn-info btn-table" @click="formData=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></span>
                      </template>
                      <template #title>
                        Menu Banner
                      </template>
                      <form style="margin-top: 20px;">
                        <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                      <label>Banner Name</label>
                      <input v-model="formData.name" type="text" class="form-control">
                      <template v-if="errors.name">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                      </template>
                    </div>
                    <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                      <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
                      <template v-if="errors.image">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                      </template> 
                    </div>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addBanner('update',data.id)"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Banner 
                    </a>
                    </div>
                      </form>
                    </BsModal>
                     <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData(data.id,'menu_banner')"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>

            <!-- Card 04 -->
            <div class="tab-pane Special">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal smaller :height="360" type="green">
                  <template #button>
                    <span class="btn btn-info">Add Menu Banner</span>
                  </template>
                  <template #title>
                    Menu Banner
                  </template>
                  <form style="margin-top: 20px;">
                      <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                        <label>Banner Name</label>
                        <input v-model="formData.name" type="text" class="form-control">
                        <template v-if="errors.name">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                        </template>
                      </div>
                      <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                        <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
                        <template v-if="errors.image">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                        </template> 
                      </div>
                     <div class="form-group">
                       <!-- Here -->
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addBanner('submit')"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Banner 
                    </a>
                    </div>
                  </form>
                </BsModal>
              </div>

              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="menuBanner.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Banner Name</th>
                  <th>Banner Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in menuBanner" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal smaller :height="360" type="green">
                      <template #button>
                        <span class="btn btn-info btn-table" @click="formData=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></span>
                      </template>
                      <template #title>
                        Menu Banner
                      </template>
                      <form style="margin-top: 20px;">
                        <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                      <label>Banner Name</label>
                      <input v-model="formData.name" type="text" class="form-control">
                      <template v-if="errors.name">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                      </template>
                    </div>
                    <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                      <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
                      <template v-if="errors.image">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                      </template> 
                    </div>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addBanner('update',data.id)"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Banner 
                    </a>
                    </div>
                      </form>
                    </BsModal>
                     <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData(data.id,'menu_banner')"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <!-- Card 04 -->
            <div class="tab-pane hotDeals">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal smaller :height="360" type="green">
                  <template #button>
                    <span class="btn btn-info">Add Menu Banner</span>
                  </template>
                  <template #title>
                    Menu Banner
                  </template>
                  <form style="margin-top: 20px;">
                      <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                        <label>Banner Name</label>
                        <input v-model="formData.name" type="text" class="form-control">
                        <template v-if="errors.name">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                        </template>
                      </div>
                      <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                        <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
                        <template v-if="errors.image">
                          <span class="fa fa-close form-control-feedback"></span>
                          <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                        </template> 
                      </div>
                     <div class="form-group">
                       <!-- Here -->
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addBanner('submit')"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Banner 
                    </a>
                    </div>
                  </form>
                </BsModal>
              </div>

              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="menuBanner.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Banner Name</th>
                  <th>Banner Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in menuBanner" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal smaller :height="360" type="green">
                      <template #button>
                        <span class="btn btn-info btn-table" @click="formData=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></span>
                      </template>
                      <template #title>
                        Menu Banner
                      </template>
                      <form style="margin-top: 20px;">
                        <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
                      <label>Banner Name</label>
                      <input v-model="formData.name" type="text" class="form-control">
                      <template v-if="errors.name">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
                      </template>
                    </div>
                    <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
                      <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
                      <template v-if="errors.image">
                        <span class="fa fa-close form-control-feedback"></span>
                        <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
                      </template> 
                    </div>
                     <div class="form-group">
                      <a class="btn btn-primary" style="float: right;margin-top: 10px;" :disaled="disableAddBtn" @click.prevent="addBanner('update',data.id)"> 
                        <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Menu Banner 
                    </a>
                    </div>
                      </form>
                    </BsModal>
                     <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData(data.id,'menu_banner')"><i class="fa fa-close"></i></a>
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
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';
import FileUploader from '@/components/FileUploader.vue'
import MenuItemForm from '@/components/extra/MenuItemForm.vue'
import FormMenuType from '@/components/extra/FormMenuType.vue'

export default {
  name: 'OfferCards',
  components: {
    DataTable, BsModal, VclTable, FileUploader, MenuItemForm, FormMenuType
  },
  data(){
    return{
      showLoader : false,
      disableAddBtn : false,
      menuCategory : [],
      cardItem : [],
      itemType : [],
      menuBanner : [],
      errors : {},
      errorsItem : {},
      formData : {
        name : '',
        image : ''
      },
      formDataItem : {
        name : '',
        image : ''
      },
      formDataType : {
        name : '',
        image : '',
      },
      errorsType : {},
      TYPE : ''
    }
  },
  mounted(){ 
    this.getCategories();
    this.getItems();
    this.getTypes();
    this.getBanners();
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
      this.formData.image=await this.getImg64(value);
    },
    
    getCategories : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'menu_category/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.menuCategory = response.data.data;
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
        var url = process.env.VUE_APP_API_BASE_URL+'menu_category_item/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.cardItem = response.data.data;
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

    getTypes : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'menu_category_type/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.itemType = response.data.data;
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

    getBanners : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'menu_banner/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.menuBanner = response.data.data;
            }else {
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

    addCategory : function (type='submit',id='') {

        this.TYPE = 'category';

        this.errors = {};
        var url = process.env.VUE_APP_API_BASE_URL+'menu_category/'+this.getURI(type);
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
                    image : '',
                    name : ''
                  };
                  this.$emit('closeModal');
                  setTimeout(()=>{
                    this.getCategories();
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

    addBanner : function (type='submit',id='') {

      this.TYPE = 'category';

      this.errors = {};
      var url = process.env.VUE_APP_API_BASE_URL+'menu_banner/'+this.getURI(type);
      this.disableAddBtn = true;

      this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:this.getPayLoad(type, id) , url})
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
                  image : '',
                  name : ''
                };
                this.$emit('closeModal');
                setTimeout(()=>{
                  this.getBanners();
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

    getPayLoadItem(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDataItem.id = id;
          if(this.formDataItem.image.indexOf('http')>-1){
            this.formDataItem.image = "";
          }
          return this.formDataItem;
        default : 
           return this.formDataItem
      }
    },

     addItem : function (type='submit',id='') {

        this.TYPE = 'item';

        this.errorsItem = {};
        var url = process.env.VUE_APP_API_BASE_URL+'menu_category_item/'+this.getURI(type);
        this.disableAddBtn = true;

        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:this.getPayLoadItem(type,id) , url})
        .then(response => {
            this.disableAddBtn = false;
            if(response.data.error == false){

              this.errorsItem = {};

                if(type == 'edit')
                {
                  this.formDataItem = response.data.data;
                }
                else
                {
                  this.$notify({
                    group: 'notify',
                    type: 'success',
                    title: 'Success',
                    text: response.data.message
                  }); 
                  
                  this.formDataItem= {
                    image : '',
                    name : ''
                  };
                  this.$emit('closeModal');
                  setTimeout(()=>{
                    this.getItems();
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
              this.errorsItem = error.response.data.errors
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
    
     getPayLoadType(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDataType.id = id;
          if(this.formDataType.image.indexOf('http')>-1){
            this.formDataType.image = "";
          }
          return this.formDataType;
        default : 
           return this.formDataType
      }
    },

     addType : function (type='submit',id='') {

        this.TYPE = 'type';

        this.errorsType = {};
        var url = process.env.VUE_APP_API_BASE_URL+'menu_category_type/'+this.getURI(type);
        this.disableAddBtn = true;

        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:this.getPayLoadType(type,id) , url})
        .then(response => {
            this.disableAddBtn = false;
            if(response.data.error == false){

              this.errorsType = {};

                if(type == 'edit')
                {
                  this.formDataType = response.data.data;
                }
                else
                {
                  this.$notify({
                    group: 'notify',
                    type: 'success',
                    title: 'Success',
                    text: response.data.message
                  }); 
                  
                  this.formDataType= {
                    image : '',
                    name : ''
                  };
                  this.$emit('closeModal');
                  setTimeout(()=>{
                    this.getTypes();
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
              this.errorsType = error.response.data.errors
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

    removeData (dataId, type='menu_category') {

        if(!confirm('Are you sure to delete?')){
          return;
        }

        var url = process.env.VUE_APP_API_BASE_URL+type+'/delete';
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
              this.getCategories();
              this.getItems();
              this.getTypes();
              this.getBanners();
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