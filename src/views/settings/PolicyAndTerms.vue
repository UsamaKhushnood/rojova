<template>
<div class="WebsiteLanguage">
  <notifications group="notify" class="notifications"></notifications>
  <section class="content-header">
    <h1>
      Policy and Terms
      <small>YamiYami Settings</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Policy and Terms

      </li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">

        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".SettingsPrivacyTermCurrentTab" data-toggle="tab"><b>Policy and Terms</b></a></li>
            <li><a href=".SettingsPrivacyTermDeniedTab" data-toggle="tab"><b>Privacy</b></a></li>
            <li><a href=".SettingsPrivacyTermOnHoldTab" data-toggle="tab"><b>Partner Terms</b></a></li>
            <li><a href=".SettingsCookies" data-toggle="tab"><b>Cookies</b></a></li>
            <li><a href=".SettingsOwnerInfo" data-toggle="tab"><b>Owner Info</b></a></li>
          </ul>
          <div class="tab-content">
            <VclTable v-if="isLoading"></VclTable>
            <div v-if="!isLoading" class="tab-pane SettingsPrivacyTermCurrentTab active">
              <CKEditor v-model="policy_terms"></CKEditor>
              <div class="row" style="margin-top:10px;">
              <div class="col-md-12" >
                <button class="btn btn-primary pull-right" :disabled="loaders[`TERMS_LOADER`]" @click="addPolicy('TERMS')">
                  <i class="fa fa-spinner fa-spin" v-if="loaders[`TERMS_LOADER`]"></i>  Add Policy & Terms
                </button>
              </div>
            </div>
            </div>
            <div v-if="!isLoading" class="tab-pane SettingsPrivacyTermDeniedTab">
              <CKEditor v-model="policy"></CKEditor>
              <div class="row" style="margin-top:10px;">
              <div class="col-md-12" >
                <button class="btn btn-primary pull-right" :disabled="loaders[`POLICY_LOADER`]" @click="addPolicy('POLICY')">
                  <i class="fa fa-spinner fa-spin" v-if="loaders[`POLICY_LOADER`]"></i>  Add Policy
                </button>
              </div>
            </div>
            </div>
            <div v-if="!isLoading" class="tab-pane SettingsPrivacyTermOnHoldTab">
              <CKEditor v-model="company_policy"></CKEditor>
              <div class="row" style="margin-top:10px;">
              <div class="col-md-12" >
                <button class="btn btn-primary pull-right" :disabled="loaders[`COMPANY_LOADER`]" @click="addPolicy('COMPANY')">
                  <i class="fa fa-spinner fa-spin" v-if="loaders[`COMPANY_LOADER`]"></i>  Add Company Policy
                </button>
              </div>
            </div>
            </div>
            <div v-if="!isLoading" class="tab-pane SettingsCookies">
              <CKEditor v-model="cookies"></CKEditor>
              <div class="row" style="margin-top:10px;">
              <div class="col-md-12" >
                <button class="btn btn-primary pull-right" :disabled="loaders[`COOKIES_LOADER`]" @click="addPolicy('COOKIES')">
                  <i class="fa fa-spinner fa-spin" v-if="loaders[`COOKIES_LOADER`]"></i>  Add Coockies
                </button>
              </div>
            </div>
            </div>
            <div v-if="!isLoading" class="tab-pane SettingsOwnerInfo">
              <CKEditor v-model="owner_info"></CKEditor>
              <div class="row" style="margin-top:10px;">
              <div class="col-md-12" >
                <button class="btn btn-primary pull-right" :disabled="loaders[`OWNER_LOADER`]" @click="addPolicy('OWNER')">
                  <i class="fa fa-spinner fa-spin" v-if="loaders[`OWNER_LOADER`]"></i>  Add Owner Info
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>
</template>

<script>
import CKEditor from '@/components/CKEditor'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';

export default {
  name: 'PolicyAndTerms',
  components: {
    CKEditor, VclTable
  },
  data: function () {
    return {
      policy_terms: '',
      policy: '',
      company_policy: '',
      cookies : '',
      owner_info : '',
      loaders : {
        'POLICY_LOADER' : false,
        'TERMS_LOADER' : false,
        'COMPANY_LOADER' : false,
        'COOKIES_LOADER' : false,
        'OWNER_LOADER' : false
      },
     isLoading : false
    }
  },
  mounted(){
    this.getPrivacyList();
  },
  methods:{
      getPrivacyList : function(){

        var url = process.env.VUE_APP_API_BASE_URL+'policy/list';
        this.isLoading = true;

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
          this.isLoading = false;
            if(response.data.error == false)
            {
                this.policy_terms   = response.data.data.policy_terms;
                this.policy         = response.data.data.policy;
                this.company_policy = response.data.data.company_policy;
            }
            else
            {
              this.$notify({
                group: 'auth',
                type: 'warn',
                title: 'Failure',
                text: response.data.message || 'something went wrong.'
              });
            }
        })
        .catch(error => {
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
      preparePayload : function(type){

        switch(type)
        {
          case 'POLICY':
            return { policy : this.policy }
          case 'COMPANY':
            return { company_policy : this.company_policy };
          case 'OWNER':
            return { owner_info : this.owner_info };
          case 'COOKIES':
            return { cookies : this.cookies };
          default:
          case 'TERMS':
            return { policy_terms : this.policy_terms };
        }
      },
      addPolicy : function(type){

        let payload = this.preparePayload(type);

        this.loaders[`${type}_LOADER`] = true;

        var url = process.env.VUE_APP_API_BASE_URL+'policy/create'
        this.$store.dispatch('HTTP_POST_REQUEST' , { payload : payload , url:url })
        .then(response => {
          this.loaders[`${type}_LOADER`] = false;

            if(response.data.error == false && response.data.data)
            {
                this.$notify({
                    group: 'notify',
                    type: 'success',
                    title: 'Success',
                    text: 'Added successfully updated'
                }); 
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
          this.loaders[`${type}_LOADER`] = false;
          console.log(error)
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
