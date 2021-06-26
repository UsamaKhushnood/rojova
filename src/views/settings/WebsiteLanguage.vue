<template>
<div class="WebsiteLanguage">
  <section class="content-header">
    <h1>
      Websie Languages
      <small>YamiYami Settings</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Websie Languages</li>
    </ol>
  </section>
   <notifications group="notify" class="notifications"></notifications>


  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="text-right" style="margin-bottom: 20px;">
          <BsModal
            :smaller="true"
            :height="320"
            type="green"
          >
            <template #button>
              <span class="btn btn-info">Add New Language</span>
            </template>
            <template #title>
              ADD LANGUAGE
            </template>
            <FormAddLanguage
            :formData="setLanguage"
            :errors="errors"
            >
           </FormAddLanguage>
            <template #footer>
              <a class="btn btn-primary" style="float: right;" @click.prevent="addLanguage" :disabled="disableDelBtn"> 
                <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i>  Save
              </a>
            </template>
          </BsModal>

          <BsModal
            :smaller="true"
            :height="100"
            type="green"
          >
            <template #button>
              <span class="btn btn-info" style="margin-left:10px;">Add English Word</span>
            </template>
            <template #title>
              ADD ENGLISH WORD
            </template>
            <div :class="!errorsWords.phrase?'form-group':'form-group has-error has-feedback'">
              <label>English Word <small>(DEFAULT)</small></label>
              <input v-model="phraseFormData.phrase" type="text" class="form-control">
              <template v-if="errorsWords.phrase">
                <span class="fa fa-close form-control-feedback"></span>
                <div class="text-danger" v-for="(errorMsg, index) in errorsWords.phrase" :key="index">{{ errorMsg }}</div>
              </template>
            </div>
            <template #footer>
              <a class="btn btn-primary" style="float: right;" @click.prevent="addPhrase" :disabled="disableAddWordBtn"> 
                <i class="fa fa-spinner fa-spin" v-if="disableAddWordBtn"></i>  Save
              </a>
            </template>
          </BsModal>
        </div>
        <!-- Data Table -->
        <div class="">
          <VclTable v-if="showLoader" />
          <DataTable  v-else :has_data="datas.length>0">
            <template #header>
              <th class="id-column">No.</th>
              <th>Image</th>
              <th>Language</th>
              <th class="text-center">View</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>{{ index+1 }}</td>
              <td><img style="max-height:35px; max-width:35px" :src="data.image"></td>
              <td>{{ data.name }}</td>
              <td class="text-center">
                <BsModal
                  type="green"
                >
                  <template #button>
                     <span class="btn btn-info btn-table" @click="getTranslation(data.id)"><i class="fa fa-eye"></i></span>
                  </template>
                  <template #title>
                   Translations
                  </template>
                  <div class="form-group" v-for="trans in transList">
                    <small>(ENGLISH WORD)</small><br>
                    <label>{{trans.phrase.phrase}}</label><br>
                    <small>({{data.name}}) Translation</small>
                    <input  type="text" class="form-control" disabled="" :value="trans.translation">
                    <hr>
                  </div>
                  
                  <template #footer>
                  </template>
                </BsModal>
              </td>
              <td>

                <BsModal
                  :smaller="true"
                  :height="200"
                  type="green"
                >
                  <template #button>
                     <span class="btn btn-info btn-table" @click="selectLang = data.id"><i class="fa fa-edit"></i></span>
                  </template>
                  <template #title>
                    Add Translation
                  </template>
                  <div :class="!errorsTranslation.phrase_id?'form-group':'form-group has-error has-feedback'">
                    <label>Select Word</label>
                    <select class="form-control" v-model="translationFormData.phrase_id">
                      <option selected="" value="" disabled="">Select an English WORD</option>
                      <option v-for="word in phraseList" :value="word.id">{{word.phrase}}</option>
                    </select>
                    <template v-if="errorsTranslation.phrase_id">
                      <span class="fa fa-close form-control-feedback"></span>
                      <div class="text-danger" v-for="(errorMsg, index) in errorsTranslation.phrase_id" :key="index">{{ errorMsg }}</div>
                    </template>
                  </div>
                  <div :class="!errorsTranslation.translation?'form-group':'form-group has-error has-feedback'">
                    <label>Add Translation</label>
                    <input v-model="translationFormData.translation" type="text" class="form-control" >
                    <template v-if="errorsTranslation.translation">
                      <span class="fa fa-close form-control-feedback"></span>
                      <div class="text-danger" v-for="(errorMsg, index) in errorsTranslation.translation" :key="index">{{ errorMsg }}</div>
                    </template>
                  </div>
                  <template #footer>
                    <a class="btn btn-primary" style="float: right;" @click.prevent="addTranslation" :disabled="disableAddTranslationBtn"> 
                      <i class="fa fa-spinner fa-spin" v-if="disableAddTranslationBtn"></i>  Save
                    </a>
                  </template>
                </BsModal>
                <BsModal
                  :smaller="true"
                  :height="1"
                  type="red"
                >
                  <template #button>
                    <span class="btn btn-danger btn-table"><i class="fa fa-remove"></i></span>
                  </template>
                  <template #title>
                    REMOVE LANGUAGE
                  </template>
                  <template #footer>
                    <a class="btn btn-danger" style="float: right;" :disabled="disableDelBtn" @click.prevent="removeData(data.id)"> 
                     <i class="fa-spinner fa-spin" v-if="disableDelBtn"></i>  Confirm
                  </a>
                  </template>
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
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';
import FormAddLanguage from '@/components/extra/FormAddLanguage.vue'

export default {
  name: 'WebsiteLanguage',
  components: {
    DataTable, BsModal, FormAddLanguage, VclTable
  },
  data: function () {
    return {
      setLanguage: {
        name: '',
        file: ''
      },
      datas : [],
      showLoader : false,
      errors : {},
      disableAddBtn : false,
      disableDelBtn : false,
      phraseFormData : {
        phrase : ''
      },
      disableAddWordBtn : false,
      errorsWords: {},
      phraseList : [],
      errorsTranslation : {},
      translationFormData : {
        phrase_id : '',
        language_id : '',
        translation : ''
      },
      disableAddTranslationBtn : false,
      selectLang : '',
      transList : []
    }
  },
  mounted()
  {
    this.getLanauges();
    this.getPhrases();
  },  
  methods: {
    getLanauges : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'language/list';
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
    getPhrases : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'phrase/list';
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.phraseList = response.data.data;
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
          this.setLanguage.id = id;
          if(this.setLanguage.image.indexOf('http')>-1){
            this.setLanguage.image = "";
          }
          return this.setLanguage;
        default : 
           return this.setLanguage
      }
    },
    addLanguage : function (type='submit',id='') {

        this.errors = {};
        var url = process.env.VUE_APP_API_BASE_URL+'language/'+this.getURI(type);
        this.disableAddBtn = true;

        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:this.getPayLoad(type,id) , url})
        .then(response => {
            this.disableAddBtn = false;
            if(response.data.error == false){
                if(type == 'edit')
                {
                  this.setLanguage = response.data.data;
                }
                else
                {
                  this.$notify({
                    group: 'notify',
                    type: 'success',
                    title: 'Success',
                    text: response.data.message
                  }); 
                  this.$emit('closeModal')   
                  setTimeout(()=>{
                    this.getLanauges();
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

        var url = process.env.VUE_APP_API_BASE_URL+'language/delete';
        this.disableDelBtn = true;
        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:{id : dataId} , url})
        .then(response => {
          this.$emit('closeModal')
            this.disableDelBtn = false;
            if(response.data.error == false){
              this.$notify({
                group: 'notify',
                type: 'success',
                title: 'Success',
                text: response.data.message
              }); 
               setTimeout(()=>{
                    this.getLanauges();
              },100)
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
          this.$emit('closeModal')
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
    },
    addPhrase : function () {

        this.errorsWords = {};
        var url = process.env.VUE_APP_API_BASE_URL+'phrase/create';
        this.disableAddWordBtn = true;

        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:this.phraseFormData , url})
        .then(response => {
            this.disableAddWordBtn = false;
            if(response.data.error == false){
              this.$notify({
                group: 'notify',
                type: 'success',
                title: 'Success',
                text: response.data.message
              }); 
              this.$emit('closeModal');
              this.phraseFormData.phrase = '';
              setTimeout(()=>{
                this.getPhrases();
              },50)
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
            this.disableAddWordBtn = false;
            if(error.response.status === 422){
              this.errorsWords = error.response.data.errors
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
    addTranslation : function () {

        this.errorsTranslation = {};
        var url = process.env.VUE_APP_API_BASE_URL+'translation/create';
        this.disableAddTranslationBtn = true;
        this.translationFormData.language_id = this.selectLang

        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:this.translationFormData , url})
        .then(response => {
            this.disableAddTranslationBtn = false;
            if(response.data.error == false){
              this.$notify({
                group: 'notify',
                type: 'success',
                title: 'Success',
                text: response.data.message
              }); 
              this.$emit('closeModal');
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
            this.disableAddTranslationBtn = false;
            if(error.response.status === 422){
              this.errorsTranslation = error.response.data.errors
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
    getTranslation : function(lang_id){
        var url = process.env.VUE_APP_API_BASE_URL+'translation/list/'+lang_id;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.transList = response.data.data;
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
  }
}
</script>
