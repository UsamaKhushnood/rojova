<template>
<div>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Create New Shop</h3>
    </div>
    <div class="row">
      <div class="form-group" style="margin-top: 30px">
        <div class="col-md-4"></div>
        <div class="col-md-3">
          <div class="form-group">
              <iradio v-model="createShopType" name="createShopType" setValue="NewShop">
              &nbsp;&nbsp; New Shop <i class="fa fa-plus"></i> New Client
              </iradio>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <iradio v-model="createShopType" name="createShopType" setValue="AddShop">
              &nbsp;&nbsp; <i class="fa fa-plus"></i> Add Shop Only
            </iradio>
          </div>
        </div>
        <div 
          class="col-md-12 text-center " 
          style="margin-bottom:10px;" 
          :class="{'error': validation.hasError('createShopType')}">
              {{ validation.firstError('createShopType') }}
        </div>
      </div>
    </div>
    <div class="row">
      <div id="div1" v-if="createShopType=='AddShop'">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <div :class="!errors.id?'form-group':'form-group has-error has-feedback'">
            <label>Client ID -- {{queryClientData}}</label>
            <input type="text" v-model="clientId" placeholder="Find ID ..." class="form-control input-sm" id="how_much">
            <template v-if="errors.id">
              <span class="fa fa-close form-control-feedback"></span>
              <div class="text-danger" v-for="(errorMsg, index) in errors.id" :key="index">{{ errorMsg }}</div>
            </template>
          </div>
        </div>
        <div class="col-md-1" style="text-align: center;"> To </div>
        <div class="col-md-4">
          <div :class="!errors.id?'form-group':'form-group has-error has-feedback'">
            <label>Owner Name</label>

            <ajax-select v-model="clientId" endpoint="searchClients" display="first_name"></ajax-select>

            <template v-if="errors.id">
              <span class="fa fa-close form-control-feedback"></span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ul class="list-inline pull-right">
    <li>
      <button type="button" class="btn btn-primary next-step" @click.prevent="finalStep()">Click to go next</button>
    </li>
  </ul>
</div>
</template>

<script>  
// import { apolloQuery, apolloMutate } from '@/vue-functions'

import iradio from '@/components/iradio.vue'
import AjaxSelect from '@/components/form/AjaxSelect.vue'
import {mapActions} from 'vuex';
export default { 
  name: 'AddClient',
  components: {
    iradio, AjaxSelect
  },
  data: function () {
    return {
      createShopType: '',
      nextStep: 2,
      errors: {},
      clientId: null,
      clients: [],
      queryClientData: '', 
      fields: `
        data{
          id
          first_name
          last_name 
        }`
    }
  },
  validators  : {
      'createShopType': function (value) {
        return this.$Validator.value(value).required('Please select a shop type.');
      },
  },
  methods: {
    ...mapActions({
      'First_Step':'Add_New_Shop_First_Step'
    }),
    finalStep () {

      this.$validate().then(success => {
        if(success){
          let vm = this
          let dataId = vm.clientId
          this.First_Step({client_id:vm.clientId,shop_type:vm.createShopType});
          vm.errors = {}
          if (vm.createShopType === 'AddShop') {
            vm.setClientData(dataId)
          } else {
            vm.$emit('stepChange', vm.nextStep)
          }
          vm.$emit('stepChange', vm.nextStep)
        }
      })
    } 
  }
}
</script>
