<template>
  <label class="" :for="'icheck_'+uniqNumber" style="cursor: pointer;">
    <input type="radio"   :id="'icheck_'+uniqNumber" v-model="value" :name="name?name:'icn_'+uniqNumber" :value="setValue">
    <slot></slot>
  </label>
</template>    
 
<script>
export default {
  name: 'iradio',
  props: [ 'value', 'name', 'setValue','ClearSubServices','YamiComissionMonthlyFix','YamiComissionFix','YamiComissionFree','YamiComissionPercentage' 
  ,'Order_Transfer_Mail_to_Fax','Order_Transfer_By_SMS','Order_Transfer_Google_Print','Order_Transfer_UMTS_Printer',
  'Payment_Methods_Select','Payment_Methods_All'
  ],
  computed: {
    localValue: {
      get: function () {
        return this.value   
      }, 
      set: function (value) {
        this.$emit('input', value)
      }
    }
  }, 
  data: function () {
    return {
      uniqNumber: 0
    }
  },
  created: function () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    $(document).ready(function () {
      $('#icheck_' + vm.uniqNumber).iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
      }).on('ifChecked', function (event) {
        if(vm.ClearSubServices){
          vm.ClearSubServices();
        }
        if(vm.YamiComissionMonthlyFix){
          vm.YamiComissionMonthlyFix();
        }
        if(vm.YamiComissionFix){
          vm.YamiComissionFix
        }
        if(vm.YamiComissionFree){
          vm.YamiComissionFree()
        }
        if(vm.YamiComissionPercentage){
          vm.YamiComissionPercentage()
        }
        if(vm.Order_Transfer_UMTS_Printer){
          vm.Order_Transfer_UMTS_Printer();
        }
        if(vm.Order_Transfer_Mail_to_Fax){
          vm.Order_Transfer_Mail_to_Fax()
        }
        if(vm.Order_Transfer_By_SMS){
          vm.Order_Transfer_By_SMS()
        }
        if(vm.Order_Transfer_Google_Print){
          vm.Order_Transfer_Google_Print()
        }
        if(vm.Payment_Methods_All){
          vm.Payment_Methods_All();
        }
        if(vm.Payment_Methods_Select){
          vm.Payment_Methods_Select();
        }   
        vm.$emit('input', event.target.value)
      })
    })
  }
}
</script>
