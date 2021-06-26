<template>
<div class="WebsiteLanguage">
  <section class="content-header">
    <h1>
      Email templates
      <small>YamiYami Settings</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Email templates

      </li>
    </ol>
  </section>
  <notifications group="notify" class="notifications"></notifications>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">

        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".SettingsEmailTemplatesWelcomeUser" data-toggle="tab"><b>User Welcome</b></a></li>
            <li><a href=".SettingsEmailTemplatesWelcomeOwner" data-toggle="tab"><b>Owner Welcome</b></a></li>
            <li><a href=".SettingsEmailTemplatesInvoiceTab" data-toggle="tab"><b>Invoice</b></a></li>
            <li><a href=".SettingsEmailTemplatesOrderTab" data-toggle="tab"><b>Order</b></a></li>
            <li><a href=".SettingsEmailTemplatesResrvaionsTab" data-toggle="tab"><b>Resrvaions</b></a></li>
            <li><a href=".SettingsEmailTemplatesBookingsTab" data-toggle="tab"><b>Bookings</b></a></li>
            <li><a href=".SettingsEmailTemplatesFeedbackTab" data-toggle="tab"><b>Feedback</b></a></li>
          </ul>
          <div class="row" style="padding: 10px 10px 20px 10px;">
            <!-- <div class="col-xs-3">
              <ul class="nav nav-tabs tabs-left sideways">
                <li class="active"><a href="#home-v" data-toggle="tab" @click="setActiveChild('welcome_user')">User Welcome</a></li>
                <li><a href="#user-welcome" data-toggle="tab" @click="setActiveChild('welcome_owner')">Owner Welcome</a></li>
                <li><a href="#messages-v" data-toggle="tab">3</a></li>
                <li><a href="#settings-v" data-toggle="tab">4</a></li>
              </ul>
            </div> -->
            <div class="col-xs-12">

              <div class="tab-content" >

              <!-- USER WELCOME EMAIL -->
              <div class="tab-pane SettingsEmailTemplatesWelcomeUser active" id="user-welcome">
                 <CKEditor v-model="welcomePayload['welcome_user']"></CKEditor>
                 <div class="row" style="margin-top:10px;">
                    <div class="col-md-12" >
                      <button class="btn btn-primary pull-right" :disabled="loaders[`USER_WELCOME_LOADER`]" @click="addTemplate('USER_WELCOME')">
                        <i class="fa fa-spinner fa-spin" v-if="loaders[`USER_WELCOME_LOADER`]"></i>  Add Template
                      </button>
                    </div>
                  </div>
              </div>
              <!-- #END - USER WELCOME EMAIL -->

              <!-- OWNER WELCOME EMAIL -->
              <VclTable v-if="isLoading"></VclTable>

                <div   v-else class="tab-pane SettingsEmailTemplatesWelcomeOwner">
                  <CKEditor v-model="welcomePayload['welcome_owner']"></CKEditor>
                  <div class="row" style="margin-top:10px;">
                    <div class="col-md-12" >
                      <button class="btn btn-primary pull-right" :disabled="loaders[`OWNER_WELCOME_LOADER`]" @click="addTemplate('OWNER_WELCOME')">
                        <i class="fa fa-spinner fa-spin" v-if="loaders[`OWNER_WELCOME_LOADER`]"></i>  Add Template
                      </button>
                    </div>
                  </div>
                </div>
                <!-- #END - OWNER WELCOME -->

                <div class="tab-pane SettingsEmailTemplatesInvoiceTab">
                  <CKEditor v-model="Invoice"></CKEditor>
                </div>
                <div class="tab-pane SettingsEmailTemplatesOrderTab">
                  <CKEditor v-model="Order"></CKEditor>
                </div>
                <div class="tab-pane SettingsEmailTemplatesResrvaionsTab">
                  <CKEditor v-model="Resrvaions"></CKEditor>
                </div>
                <div class="tab-pane SettingsEmailTemplatesBookingsTab">
                  <CKEditor v-model="Bookings"></CKEditor>
                </div>
                <div class="tab-pane SettingsEmailTemplatesFeedbackTab">
                  <CKEditor v-model="Feedback"></CKEditor>
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
  name: 'EmailTemplates',
  components: {
    CKEditor,
    VclTable
  },
  data: function () {
    return {
      welcome_shop_owner : '',
      Account: '',
      Invoice: '',
      Order: '',
      Resrvaions: '',
      Bookings: '',
      Feedback: '',
      isLoading : false,
      loaders : {
        'OWNER_WELCOME_LOADER' : false,
        'USER_WELCOME_LOADER' : false,
      },
      welcomePayload : {
        'welcome_user'  : null,
        'welcome_owner' : null
      },

    }
  },
  mounted(){
    this.getTemplates();
  },
  methods:{
    getTemplates : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'email_template/list';
        this.isLoading = true;

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
          this.isLoading = false;
            if(response.data.error == false)
            {
              //GET WELCOME OWNER EMAIL
              let ownerWelcome = response.data.data.find(d => d.key == 'welcome_owner');
              if(ownerWelcome && ownerWelcome.value !==  undefined){
                this.welcomePayload['welcome_owner']   = ownerWelcome.value;
              }

              //GET WELCOME USER EMAIL
              let userWelcome = response.data.data.find(d => d.key == 'welcome_user');
              if(userWelcome && userWelcome.value !==  undefined){
                this.welcomePayload['welcome_user']   = userWelcome.value;
              }
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
        case 'OWNER_WELCOME':
          return { key :'welcome_owner', value : this.welcomePayload['welcome_owner'] }
        case 'USER_WELCOME':
          return { key :'welcome_user', value : this.welcomePayload['welcome_user'] }
      }
    },
    addTemplate : function(type){

        let payload = this.preparePayload(type);

        this.loaders[`${type}_LOADER`] = true;

        var url = process.env.VUE_APP_API_BASE_URL+'email_template/create'
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
      },
  }
}
</script>
