<template>
<div class="MenuImage">

  <notifications group="notification" class="notifications" />

  <section class="content-header">
    <h1>
      Website Setting
      <small>YamiYami Settings</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Website Setting</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="nav-tabs-custom" style="margin-top: 30px;">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".SettingsWebsiteCurrency" data-toggle="tab"><b>Currency</b></a></li>
            <li><a href=".SettingsWebsitePrefix" data-toggle="tab" @click="getPrefixes"><b>Prefix</b></a></li>
            <li><a href=".SettingsWebsiteWebsiteTitle" data-toggle="tab"><b>Website Title</b></a></li>
            <li><a href=".SettingsWebsiteUploadLogo" data-toggle="tab"><b>Upload Logo</b></a></li>
            <li><a href=".SettingsWebsiteHomepageImages" data-toggle="tab"><b>Mainpage Logo</b></a></li>
            <li><a href=".SettingsWebsiteZipCode" data-toggle="tab" @click="getCitiesWithPagination(50,1)"><b>Zip Code</b></a></li>
            <li><a href=".SettingsWebsiteCommission" data-toggle="tab" @click="getCommissions"><b>Commissions</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane SettingsWebsiteCurrency active">
              <!-- Data Table -->
              <VclTable v-if="showCurrencyLoader" />
              <table v-else class="table table-striped table-primary">
                <tbody>
                  <tr>
                    <td>Currency</td>
                    <td v-for="currency in currunciesList">
                      <label>
                        <iradio v-model="Currency" name="Currency" :setValue="currency.name"></iradio>
                        {{currency.name}}
                      </label>
                    </td>
                    <!-- <td style="width: 15%">
                      <a href="#" class="btn btn-success btn-table">Save</a>
                      <a href="#" class="btn btn-primary btn-table">Edit</a>
                    </td> -->
                  </tr>
                  <tr>
                    <td>Currency Type</td>
                    <td v-for="currency in currunciesList">
                      <label>
                        <iradio v-model="CurrencyType" name="CurrencyType" :setValue="currency.type"></iradio>
                        {{currency.type}}
                      </label>
                    </td>
                    <!-- <td style="width: 15%">
                      <a href="#" class="btn btn-success btn-table">Save</a>
                      <a href="#" class="btn btn-primary btn-table">Edit</a>
                    </td> -->
                  </tr>
                  <tr>
                    <td>Sign For Price</td>
                    <td v-for="currency in currunciesList">
                      <label>
                        <iradio v-model="CurrencySign" name="CurrencySign" :setValue="currency.sign"></iradio>
                        {{currency.sign}}
                      </label>
                    </td>
                    <!-- <td style="width: 15%">
                      <a href="#" class="btn btn-success btn-table">Save</a>
                      <a href="#" class="btn btn-primary btn-table">Edit</a>
                    </td> -->
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane SettingsWebsitePrefix">
              <!-- Data Table -->
              <VclTable v-if="loadingPrexies"></VclTable>
              <table v-else id="example1" class="table table-striped table-primary">
                <tbody>
                    <tr v-for="(prefix, key) in prefixesList" v-if="!['id','created_at','updated_at','is_active'].includes(key)">
                        <td style="width: 15%">{{key | formatText}}</td>
                        <td>
                            <input disabled 
                              type="text" 
                              class="form-control" 
                              placeholder="Text input" 
                              v-model="prefixesList[key]"
                              style="font-size : 18px;" 
                              :id="key"
                            >
                        </td>
                         <td style="width: 15%">
                          <a href="#" class="btn btn-success btn-table" @click="savePrefix(key,prefixesList[key])"
                          :disabled="disablePrefixes[key]">
                          <i class="fa fa-spinner fa-spin" v-if="disablePrefixes[key]"></i>
                            Save
                          </a>
                          <a :id="'btn-edit-'+key" href="#" class="btn btn-primary btn-table" @click="editField(key,true)">Edit</a>
                          <a style="display:none;" :id="'btn-cancel-'+key" href="#" class="btn btn-primary btn-table" @click="editField(key,false)">Cancel</a>
                         </td>

                    </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane SettingsWebsiteWebsiteTitle">
              <!-- Data Table -->
              <table id="example1" class="table table-striped table-primary">
                <tbody>
                  <tr>
                    <td style="width: 15%">Website Title</td>
                    <td>
                        <div :class="!titleErrors.website_title?'form-group':'form-group has-error has-feedback'">
                          <input type="text"
                           class="form-control" 
                           placeholder="Text input"
                           v-model="websiteTitle"
                           :disabled="!isTitleEnabled"
                          >
                          <template v-if="titleErrors.website_title">
                            <span class="fa fa-close form-control-feedback"></span>
                            <div class="text-danger" v-for="(errorMsg, index) in titleErrors.website_title" :key="index">{{ errorMsg }}</div>
                          </template>
                        </div>
                    </td>
                     <td style="width: 15%"><a href="#" class="btn btn-success btn-table" :disabled="disableTitleBtn || !isTitleEnabled" @click.prevent="saveTitle">
                     <i class="fa fa-spinner fa-spin" v-if="disableTitleBtn"></i> Save
                   </a>
                    <a href="#" class="btn btn-primary btn-table" @click.prevent="isTitleEnabled = !isTitleEnabled">Edit</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane SettingsWebsiteUploadLogo">
              <!-- Data Table -->
              <table id="example1" class="table table-striped table-primary">
                  <tbody>
                    <tr>
                     <td>
                        <FormSettingsLogo
                          :formData="formDataLogo"
                          :errors="errorsLogo"
                          >
                        </FormSettingsLogo>
                     </td>
                     <td>
                      <FormSettingsFavicon
                        :formData="formDataLogo"
                        :errors="errorsLogo"
                      >
                      </FormSettingsFavicon>
                     </td>
                    </tr>

                      <tr>
                          <td colspan="2" class="text-right">
                            <a href="#" class="btn btn-success" @click="saveLogoes" :disabled="disableLogoBtn">
                             <i class="fa fa-spinner fa-spin" v-if="disableLogoBtn"></i>  Save
                          </a>
                          </td>
                      </tr>

                  </tbody>
              </table>
            </div>
            <div class="tab-pane SettingsWebsiteHomepageImages">
              <!-- Data Table -->
              <table id="example1" class="table table-striped table-primary">
                  <tbody>
                      <tr>
                          <td>
                            <FormHomepageLogo
                              :formData="formDataHomepage"
                              :errors="errorsHomepage"
                            >
                            </FormHomepageLogo>
                          </td>
                          <td>
                            <FormHomePageFavicon
                              :formData="formDataHomepage"
                              :errors="errorsHomepage"
                            >
                            </FormHomePageFavicon>
                          </td>
                          <td>
                            <FormHomePageBG
                              :formData="formDataHomepage"
                              :errors="errorsHomepage"
                            >
                            </FormHomePageBG>
                          </td>
                      </tr>
                      <tr>
                          <td colspan="3" class="text-right">
                            <a href="#" class="btn btn-success" :disabled="disableHomepageBtn" @click.prevent="saveHomepage">
                             <i class="fa fa-spinner fa-spin" v-if="disableHomepageBtn"></i> Save
                            </a>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
            <div class="tab-pane SettingsWebsiteZipCode">
              <!-- Data Table -->

              <div class="text-right">
             
                
                <div class="col-md-3 pull-right" style="margin-bottom:10px;">
                  <BsModal
                  :smaller="true"
                  :height="100"
                  type="green" >
                  <template #button>
                    <span @click="addCityData.payload.name = null;" class="btn btn-primary" style="margin-right: 5px"><i class="fa fa-plus-circle"></i> Add City</span>
                  </template>
                  <template #title>
                    Add Citys
                  </template>
                  <div>
                    <div class="form-group">
                      <label>City Name</label>
                      <input type="text" class="form-control" placeholder="Put Name Here"
                      v-model="addCityData.payload.name"
                      :class="{'error' : addCityErrs.name}">
                      <span class="error" v-if="addCityErrs.name">{{addCityErrs.name[0]}}</span>
                    </div>
                  </div>
                  <template #footer>
                    <button class="btn btn-primary" style="float: right;" 
                      @click="saveCity('city/create')" 
                      :disbled="disableAddCityBtn"
                     > 
                      <i class="fa fa-spinner fa-spin" v-if="disableAddCityBtn"></i> Save
                    </button>
                  </template>
                  </BsModal>
                  <BsModal
                  :smaller="true"
                  :height="200"
                  type="green" >
                  <template #button>
                    <span class="btn btn-primary" style="margin-right: 5px"><i class="fa fa-plus-circle"></i> Add Zipcode</span>
                  </template>
                  <template #title>
                    Add Zipcode
                  </template>
                  <div>
                    
                    <div class="form-group">
                      <label>Select City</label>     
                      <v-select 
                          v-model="addZipcodeData.payload.city_id"
                          :reduce="c => c.id"
                          :options="CITY_SEARCH_LIST"
                          :filterable="false" 
                          @search="onSearch"
                          @input="setData"
                        > 
                        <template slot="no-options">
                            Type to search City
                        </template>
                        <template slot="option" slot-scope="data">
                          <div class="d-center">
                            {{ data.name }}
                            </div>
                        </template>
                        <template slot="selected-option" slot-scope="data">
                          <div class="selected d-center">
                            <span v-if="data.name">
                              {{ data.name }}
                            </span>
                          </div>
                        </template>
                        </v-select>
                        <span class="error" v-if="addZipcodeErrs.city_id">{{addZipcodeErrs.city_id[0]}}</span>
                    </div>
                    <div class="form-group">
                      <label>Zipcode</label>
                      <input type="number" class="form-control" placeholder="Put Zipcode Here"
                      v-model="addZipcodeData.payload.zipcode"
                      :class="{'error' : addZipcodeErrs.zipcode}">
                       <span class="error" v-if="addZipcodeErrs.zipcode">{{addZipcodeErrs.zipcode[0]}}</span>
                    </div>

                   
                  </div>
                  <template #footer>
                   <button class="btn btn-primary" style="float: right;" 
                      @click="saveZipcode('zipcode/create')" 
                      :disbled="disableAddZipcodeBtn"
                     > 
                      <i class="fa fa-spinner fa-spin" v-if="disableAddZipcodeBtn"></i> Save
                    </button>
                  </template>
                  </BsModal>
                </div>
                <div class="col-md-3 pull-right" style="margin-right:-70px;">
                  <input 
                    v-model="zipCodeSearch" 
                    type="search" 
                    name="search" 
                    placeholder="Search zipcode" 
                    class="form-control"
                    >
                </div>
                <br>
              </div>
              <br>

                      <VclTable v-if="loadingCities"> </VclTable>
                      <table v-show="!loadingCities" class="table table-bordered" style="margin-bottom: 0px">
                        <thead>
                          <tr>
                            <th>
                              City Name
                            </th>
                            <th class="text-center">Zipcode</th>
                            <th class="text-center">Edit City</th>
                            <th class="text-center">Edit Zipcode</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr  v-for="city in citiesListing.data">
                            <td>{{city.name}}</td>
                            <td class="text-center">
                             <span v-if="city.zipcode"> {{city.zipcode.zipcode}}</span> 
                            </td>
                            <td class="text-center">
                              <BsModal
                                    :smaller="true"
                                    :height="100"
                                    type="green" >
                                    <template #button>
                                      <span class="btn btn-table btn-info" @click="addCityData.payload.name = city.name"><i class="fa fa-edit"></i></span>
                                    </template>
                                    <template #title>
                                      Edit City
                                    </template>
                                    <div>
                                      <div class="form-group">
                                        <label>City Name</label>
                                        <input type="text" class="form-control" placeholder="Put Name Here"
                                        v-model="addCityData.payload.name"
                                        :class="{'error' : addCityErrs.name}">
                                        <span class="error" v-if="addCityErrs.name">{{addCityErrs.name[0]}}</span>
                                      </div>
                                    </div>
                                    <template #footer>
                                      <button class="btn btn-primary" style="float: right;" 
                                        @click="saveCity('city/update',city.id)" 
                                        :disbled="disableAddCityBtn"
                                       > 
                                        <i class="fa fa-spinner fa-spin" v-if="disableAddCityBtn"></i> Update
                                      </button>
                                    </template>
                                  </BsModal>
                              <!-- <span class="btn btn-danger btn-table"><i class="fa fa-close"></i></span> -->
                            </td>
                            <td class="text-center">
                              <BsModal
                                :smaller="true"
                                :height="200"
                                type="green" >
                                <template #button>
                                  <span class="btn btn-table btn-info" @click="setEditZipcodeData(city)"><i class="fa fa-edit"></i></span>
                                </template>
                                <template #title>
                                  Edit Zipcode
                                </template>
                                <div>
                                  
                                  <div class="form-group">
                                    <label>Select City</label>     
                                    <v-select 
                                        v-model="addZipcodeData.payload.city_id"
                                        :reduce="c => c.id"
                                        :options="CITY_SEARCH_LIST"
                                        :filterable="false" 
                                        @search="onSearch"
                                        @input="setData"
                                      > 
                                      <template slot="no-options">
                                          Type to search City
                                      </template>
                                      <template slot="option" slot-scope="data">
                                        <div class="d-center">
                                          {{ data.name }}
                                          </div>
                                      </template>
                                      <template slot="selected-option" slot-scope="data">
                                        <div class="selected d-center">
                                          <span v-if="data.name">
                                            {{ data.name }}
                                          </span>
                                        </div>
                                      </template>
                                      </v-select>
                                      <span class="error" v-if="addZipcodeErrs.city_id">{{addZipcodeErrs.city_id[0]}}</span>
                                      </div>
                                      <div class="form-group">
                                        <label>Zipcode</label>
                                        <input type="number" class="form-control" placeholder="Put Zipcode Here"
                                        v-model="addZipcodeData.payload.zipcode"
                                        :class="{'error' : addZipcodeErrs.zipcode}">
                                         <span class="error" v-if="addZipcodeErrs.zipcode">{{addZipcodeErrs.zipcode[0]}}</span>
                                      </div>
                                      </div>
                                      <template #footer>
                                       <button class="btn btn-primary" style="float: right;" 
                                          @click="saveZipcode('zipcode/update',city.zipcode.id)" 
                                          :disbled="disableAddZipcodeBtn"
                                         > 
                                          <i class="fa fa-spinner fa-spin" v-if="disableAddZipcodeBtn"></i> Update
                                        </button>
                                      </template>
                                      </BsModal>
                                  <!-- <span class="btn btn-danger btn-table"><i class="fa fa-close"></i></span> -->
                            </td>
                          </tr>
                          
                        </tbody>

                        <tfoot>
                          <tr>
                            <td colspan="4">
                              <div class="col-md-4" style="margin-top:10px">
                                Showing <b>{{CITY_TBL_COUNTER.from}}</b> 
                                  to <b>{{CITY_TBL_COUNTER.to}}</b> of <b>{{CITY_TBL_COUNTER.total}} </b> records
                              </div>
                              <div class="col-md-8 text-right">
                                <paginate
                                  :page-count="citiesPageCount"
                                  :click-handler="clickCallback"
                                  :prev-text="'Prev'"
                                  :next-text="'Next'"
                                  :container-class="'pagination'"
                                  :page-class="'page-item'">
                                </paginate>
                              </div>
                            </td>
                          </tr>
                        </tfoot>

                      </table>

            </div>
            <div class="tab-pane SettingsWebsiteCommission">
              <!-- Data Table -->
              <div class="text-right" style="position: relative; top: -50px; margin-bottom: -10px;width:120px;left:90%;">
                <BsModal
                    smaller
                    type="green"
                    :height="350"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">
                      Add Commission
                    </span>
                  </template>
                  <template #title>Commission Form</template>
                  <div class="">
                    <FormSettingsCommission
                      :services="servicesList"
                      :formData="commissionFormData"
                      :errors="commissionErrors"
                    ></FormSettingsCommission>
                  </div>
                  <template #footer>
                    <button type="button" @click.prevent="submitCommissionForm()" class="btn btn-primary" :disabled="disableCommissionBtn">
                      <i class="fa fa-spin fa-spinner" v-if="disableCommissionBtn"></i>  Add Commission
                    </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="loadingCommissios" />
              <DataTable v-else :has_data="commissionDatas.length>0" :datas="commissionDatas">
                <template #header>
                  <th class="id-column">ID.</th>
                  <th>Service</th>
                  <th>Type</th>
                  <th>Commission Type</th>
                  <th>Value</th>
                  <th>Last Update</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in commissionDatas" :key="index">
                  <td>{{ data.id }}</td>
                  <td>{{ data.service.name }}</td>
                  <td>{{ data.type }}</td>
                  <td>{{ data.commission_type }}</td>
                  <td>{{ data.value }}</td>
                  <td>{{ data.updated_at }}</td>
                  <td>
                    <BsModal
                        smaller
                        type="green"
                        :height="300"
                      >
                      <template #button>
                        <span class="btn btn-info btn-table"
                          @click="commissionFormData=JSON.parse(JSON.stringify(data))">
                            <i class="fa fa-edit"></i>
                        </span>
                      </template>
                      <template #title>Commission Form</template>
                      <div class="">
                        <FormSettingsCommission
                          :services="servicesList"
                          :formData="commissionFormData"
                          :errors="commissionErrors"
                        ></FormSettingsCommission>
                      </div>
                      <template #footer>
                        <button type="button" @click.prevent="submitCommissionForm(data.id)" class="btn btn-primary" :disabled="disableCommissionBtn">
                      <i class="fa fa-spin fa-spinner" v-if="disableCommissionBtn"></i>  Add Commission
                    </button>
                      </template>
                    </BsModal>
                    <a href="#" class="btn btn-danger btn-table"
                      @click.prevent="removeCommissionData(data.id)">
                        <i class="fa fa-close"></i>
                    </a>
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
import iradio from '@/components/iradio.vue'
import FormSettingsCommission from '@/components/settings/FormSettingsCommission.vue'
import { mapState } from 'vuex'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';
import FormSettingsLogo from '@/components/extra/FormSettingsLogo.vue'
import FormSettingsFavicon from '@/components/extra/FormSettingsFavicon.vue'
import FormHomepageLogo from '@/components/extra/FormHomepageLogo.vue'
import FormHomePageFavicon from '@/components/extra/FormHomePageFavicon.vue'
import FormHomePageBG from '@/components/extra/FormHomePageBG.vue'




export default {
  name: 'WebsiteSetting',
  components: {
    BsModal, iradio, DataTable, FormSettingsCommission, VclTable, FormSettingsLogo, FormSettingsFavicon,
    FormHomepageLogo, FormHomePageFavicon, FormHomePageBG
  },
  data: function () {
    return {
      showCurrencyLoader : false,
      currunciesList  : [],
      Currency: null,
      CurrencyType: null,
      CurrencySign: null,
      showSettingsLoader : false,
      settingsList : [],
      websiteTitle : "",
      isTitleEnabled : false,
      titleErrors : {},
      disableTitleBtn : false,
      formDataLogo : {
        website_logo : '',
        website_favicon : ''
      },
      errorsLogo : {},
      disableLogoBtn : false,
      formDataHomepage : {
        homepage_logo : '',
        homepage_favicon : '',
        homepage_background : ''
      },
      errorsHomepage : {},
      disableHomepageBtn : false,
      
      disablePrefixes : [],
      errorsPrefix : {},

      commissionDatas : [],
      commissionErrors : {},
      commissionFormData: {
        service_id : "",
        type : null,
        commission_type : null,
        value : null
      },
      disableAddCityBtn : false,
      addCityData:{
          payload: {
              state_id: '',
              name : ''
          },
          url: process.env.VUE_APP_API_BASE_URL
      },
      addCityErrs : [],
      addZipcodeData:{
          payload: {
              city_id: '',
              zipcode : '',
          },
          url: process.env.VUE_APP_API_BASE_URL
      },
      CITY_SEARCH_LIST : [],
      addZipcodeErrs : [],
      disableAddZipcodeBtn : false,
      prefixesList : {},
      loadingPrexies : false,
      citiesListing : [],
      citiesPageCount : 0,
      loadingCities : false,
      commissionErrors : {},
      servicesList : [],
      disableCommissionBtn : false,
      loadingCommissios : false,
      CITY_TBL_COUNTER : {
        from : 0,
        to : 0,
        total : 0
      },
      zipCodeSearch : null
    }
  },
  watch:{
    zipCodeSearch(val){
      this.onZipcodeTblSearch(val);
    }
  },
  mounted()
  {
    this.getCurrencies();
    this.getSettings();
    this.getServices();
  },
  methods: {

     clickCallback : function (pageNum) {
        this.getCitiesWithPagination(50,pageNum)
     },
     getCurrencies : function(){
        this.showCurrencyLoader = true;
        var url = process.env.VUE_APP_API_BASE_URL+'currency/list'

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
          this.showCurrencyLoader = false;

            if(response.data.error == false && response.data.data)
            {
                this.currunciesList = response.data.data;
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
          this.showCurrencyLoader = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
     },
     getSettings : function(){
        this.showSettingsLoader = true;
        var url = process.env.VUE_APP_API_BASE_URL+'settings/list'

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
          this.showSettingsLoader = false;

            if(response.data.error == false && response.data.data)
            {
                this.settingsList = response.data.data;
                this.websiteTitle = this.settingsList.website_title;
                this.formDataLogo.website_logo = this.settingsList.website_logo;
                this.formDataLogo.website_favicon = this.settingsList.website_favicon;
                this.formDataHomepage.homepage_logo = this.settingsList.homepage_logo;
                this.formDataHomepage.homepage_favicon = this.settingsList.homepage_favicon;
                this.formDataHomepage.homepage_background = this.settingsList.homepage_background;
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
          this.showSettingsLoader = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
     },
    saveTitle()
    {
      this.titleErrors = {};
      this.disableTitleBtn = true;
      this.isTitleEnabled = false;

      let url = process.env.VUE_APP_API_BASE_URL + 'settings/title';

      this.$store.dispatch('HTTP_POST_REQUEST' , { payload : { 'website_title' : this.websiteTitle}, url : url })
      .then(response => {
          this.disableTitleBtn = false;

          if(response.data.error == false)
          {
            this.$notify({
                group: 'notification',
                type: 'success',
                title: 'Success',
                text: 'Title Updated Successfully.'
            });
             this.getSettings();
             this.isTitleEnabled = false;
          }
          else
          {
              this.$notify({
                group: 'notification',
                type: 'error',
                title: 'Failure',
                text: response.data.message || 'something went wrong.'
              });
          }

      })
      .catch(error => {
        this.isTitleEnabled = true;
          this.disableTitleBtn = false;
          let errormessage = error.response.data.message;
          this.$notify({
              group: 'notification',
              type: 'error',
              title: 'Failure',
              text: errormessage
          });

          if (error && error.response && error.response.status && error.response.status == 422){
            this.titleErrors = error.response.data.errors;
          }
      })
    },
    saveLogoes()
    {
      this.errorsLogo = {};
      this.disableLogoBtn = true;

      let url = process.env.VUE_APP_API_BASE_URL + 'settings/logo';

      this.$store.dispatch('HTTP_POST_REQUEST' , { payload : this.formDataLogo, url : url })
      .then(response => {
          this.disableLogoBtn = false;

          if(response.data.error == false)
          {
            this.$notify({
                group: 'notification',
                type: 'success',
                title: 'Success',
                text: 'Title Updated Successfully.'
            });
             this.getSettings();
          }
          else
          {
              this.$notify({
                group: 'notification',
                type: 'error',
                title: 'Failure',
                text: response.data.message || 'something went wrong.'
              });
          }

      })
      .catch(error => {
          this.disableLogoBtn = false;
          let errormessage = error.response.data.message;
          this.$notify({
              group: 'notification',
              type: 'error',
              title: 'Failure',
              text: errormessage
          });

          if (error && error.response && error.response.status && error.response.status == 422){
            this.errorsLogo = error.response.data.errors;
          }
      })
    },
    saveHomepage()
    {
      this.errorsHomepage = {};
      this.disableHomepageBtn = true;

      let url = process.env.VUE_APP_API_BASE_URL + 'settings/homepage';

      this.$store.dispatch('HTTP_POST_REQUEST' , { payload : this.formDataHomepage, url : url })
      .then(response => {
          this.disableHomepageBtn = false;

          if(response.data.error == false)
          {
            this.$notify({
                group: 'notification',
                type: 'success',
                title: 'Success',
                text: 'Title Updated Successfully.'
            });
             this.getSettings();
          }
          else
          {
              this.$notify({
                group: 'notification',
                type: 'error',
                title: 'Failure',
                text: response.data.message || 'something went wrong.'
              });
          }

      })
      .catch(error => {
          this.disableHomepageBtn = false;
          let errormessage = error.response.data.message;
          this.$notify({
              group: 'notification',
              type: 'error',
              title: 'Failure',
              text: errormessage
          });

          if (error && error.response && error.response.status && error.response.status == 422){
            this.errorsHomepage = error.response.data.errors;
          }
      })
    },
    saveCity(URI='city/create',id='')
    {
        this.addCityErrs = [];
        this.disableAddCityBtn = true;
        this.addCityData.url = this.addCityData.url + URI
        if(URI == 'city/update'){
          this.addCityData.payload.id = id;
        }

        this.$store.dispatch('HTTP_POST_REQUEST' , this.addCityData)
        .then(response => {
            this.disableAddCityBtn = false;

            if(response.data.error == false)
            {
              this.$notify({
                  group: 'notification',
                  type: 'success',
                  title: 'Success',
                  text: response.data.message
              });

              this.$emit('closeModal');
              setTimeout(()=>{
                this.getCitiesWithPagination(50,1);
              },100);

            }
            else
            {
                this.$notify({
                  group: 'notification',
                  type: 'error',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong.'
                });
            }

        })
        .catch(error => {
            this.disableAddCityBtn = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notification',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });

            if (error && error.response && error.response.status && error.response.status == 422){
              this.addCityErrs = error.response.data.errors;
            }
        })
    },
    saveZipcode(URI = 'zipcode/create',id='')
    {
        this.addZipcodeErrs = [];
        this.disableAddZipcodeBtn = true;
        this.addZipcodeData.url = this.addZipcodeData.url + URI
        if(URI == 'zipcode/update'){
          this.addZipcodeData.payload.id = id;
        }

        this.$store.dispatch('HTTP_POST_REQUEST' , this.addZipcodeData)
        .then(response => {
            this.disableAddZipcodeBtn = false;

            if(response.data.error == false)
            {
              this.$notify({
                  group: 'notification',
                  type: 'success',
                  title: 'Success',
                  text: response.data.message
              });

              this.$emit('closeModal');
              setTimeout(()=>{
                this.getCitiesWithPagination(50,1)
              },100)

            }
            else
            {
                this.$notify({
                  group: 'notification',
                  type: 'error',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong.'
                });
            }

        })
        .catch(error => {
            this.disableAddZipcodeBtn = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notification',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });

            if (error && error.response && error.response.status && error.response.status == 422){
              this.addZipcodeErrs = error.response.data.errors;
            }
        })
    },
    getPrefixes : function(){
        this.loadingPrexies = true;
        var url = process.env.VUE_APP_API_BASE_URL+'prefix/list';
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
          this.loadingPrexies = false;
            if(response.data.error == false && response.data.data)
            {   
              this.prefixesList = Object.assign({}, response.data.data);
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
          this.loadingPrexies = false;
          console.log(error)
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    getCitiesWithPagination : function(limit=10,page=1,search=''){

        var url = process.env.VUE_APP_API_BASE_URL+`city/listing?limit=${limit}&page=${page}&search=${search}`;
        this.loadingCities = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.loadingCities = false;
            if(response.data.error == false && response.data.data)
            {   
              this.citiesListing          = response.data.data;
              this.citiesPageCount        = response.data.data.last_page;
              this.CITY_TBL_COUNTER.total = response.data.data.total;
              this.CITY_TBL_COUNTER.from  = response.data.data.from;
              this.CITY_TBL_COUNTER.to    = response.data.data.to;
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
          this.loadingCities = false;
          console.log(error)
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    editField(key,enable)
    {
       let input = document.getElementById(key);
       if(enable === true){
          document.getElementById(`btn-cancel-${key}`).style.display = 'inline-block';
          document.getElementById(`btn-edit-${key}`).style.display = 'none';
          input.removeAttribute('disabled');
       }
       if(enable === false){
        document.getElementById(`btn-cancel-${key}`).style.display = 'none';
        document.getElementById(`btn-edit-${key}`).style.display = 'inline-block';
          input.setAttribute('disabled','disabled');
       }
        
    },
    savePrefix(key,value)
    {
      this.errorsPrefix = {};
      this.disablePrefixes = [];
      this.disablePrefixes[key] = true;

      let data  = {};
      data[key] = value;

      let url = process.env.VUE_APP_API_BASE_URL + 'prefix/update';

      this.$store.dispatch('HTTP_POST_REQUEST' , { payload : data, url : url })
      .then(response => {
          this.disablePrefixes[key] = false;

          if(response.data.error == false)
          {
            this.$notify({
                group: 'notification',
                type: 'success',
                title: 'Success',
                text: 'Prefix Updated Successfully.'
            });
             this.getPrefixes();
          }
          else
          {
              this.$notify({
                group: 'notification',
                type: 'error',
                title: 'Failure',
                text: response.data.message || 'something went wrong.'
              });
          }

      })
      .catch(error => {
          this.disablePrefixes[key] = false;
          let errormessage = error.response.data.message;
          this.$notify({
              group: 'notification',
              type: 'error',
              title: 'Failure',
              text: errormessage
          });

          if (error && error.response && error.response.status && error.response.status == 422){
            this.errorsPrefix = error.response.data.errors;
          }
      })
    },
    getServices : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'services';
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
          this.loadingPrexies = false;
            if(response.data.error == false && response.data.data)
            {   
              this.servicesList = Object.assign({}, response.data.data.services);
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
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    getCommissions : function(){
        this.loadingCommissios = true;
        var url = process.env.VUE_APP_API_BASE_URL+'commission/list';
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
          this.loadingCommissios = false;
            if(response.data.error == false && response.data.data)
            {
              this.commissionDatas =  response.data.data;
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
          this.loadingCommissios = false;
          console.log(error)
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    submitCommissionForm (dataId = null) {
        this.commissionErrors = {};
        this.disableCommissionBtn = true;

        let data = {};

        if(dataId === null){
         data.url = process.env.VUE_APP_API_BASE_URL+'commission/create' 
         data.payload = this.commissionFormData
        }

        if(dataId !== null){
         data.url = process.env.VUE_APP_API_BASE_URL+'commission/update' 
         this.commissionFormData.id = dataId;
         data.payload = this.commissionFormData
        }

        this.$store.dispatch('HTTP_POST_REQUEST' , data )
        .then(response => {
            this.disableCommissionBtn = false;

            if(response.data.error == false)
            {
              this.$notify({
                  group: 'notification',
                  type: 'success',
                  title: 'Success',
                  text: 'State Added Successfully.'
              });
              this.$emit('closeModal');
              setTimeout(()=>{
                this.getCommissions();
              },1000)
            }
            else
            {
                this.$notify({
                  group: 'notification',
                  type: 'error',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong.'
                });
            }

        })
        .catch(error => {

          console.log(error)

            this.disableCommissionBtn = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notification',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });

            if (error && error.response && error.response.status && error.response.status == 422){
              this.commissionErrors = error.response.data.errors;
            }
        })
    },
    removeCommissionData (dataId) {

        if(!confirm('Are you sure to delete')){
          return;
        }

        let url = process.env.VUE_APP_API_BASE_URL+'commission/delete';
        this.$store.dispatch('HTTP_POST_REQUEST' , {payload : {id:dataId}, url : url} )
        .then(response => {
            if(response.data.error == false)
            {
              this.$notify({
                  group: 'notification',
                  type: 'success',
                  title: 'Success',
                  text: 'State deleted Successfully.'
              });
              this.$emit('closeModal');
              setTimeout(()=>{
                this.getCommissions();
              },1000)
            }
            else
            {
                this.$notify({
                  group: 'notification',
                  type: 'error',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong.'
                });
            }

        })
        .catch(error => {
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notification',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    onSearch(search, loading) {
      if(!search) { return }
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      fetch(
        `${process.env.VUE_APP_API_BASE_URL}city/search?q=${escape(search)}`,
        {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json',
          'Authorization' : 'Bearer PPLoEAOwBX3tKrmI9IDz8ShndcbUEV8uepcQG8hoQI66xqbJMj9rfzAXrChn'
        },
      }
        ).then(res => {
          res.json().then(json => {
            (vm.CITY_SEARCH_LIST = json.data)
          });
          loading(false);
        });
    }, 350),
    setData(val){
      let zipcode = this.CITY_SEARCH_LIST.find(d => d.zipcode_id == val);
      //do whatever required here
    },
    setEditZipcodeData(data){
      this.search(false, data.name, this);
      this.addZipcodeData.payload.city_id = data.id;
      this.addZipcodeData.payload.zipcode = data.zipcode.zipcode;
    },
    onZipcodeTblSearch(search){
      if(!search) { return }
      // this.tblSearch(search,this)
      // setTimeout(()=>{
        this.getCitiesWithPagination(50,1,search);
      // },)
    },
    tblSearch: _.debounce((search, vm) => {
      vm.getCitiesWithPagination(50,1,search);
    },50)

  },
}
</script>


<style>
.pagination
{
  margin : 0 !important;
}
</style>