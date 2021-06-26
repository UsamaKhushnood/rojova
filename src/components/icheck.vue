<template>
  <label :for="'icheck_' + uniqNumber">
    <input type="checkbox"  :value="setValue" :id="'icheck_'+uniqNumber" :name="name?name:'icn_'+uniqNumber">
    &nbsp;&nbsp; <slot></slot>
  </label>
</template> 
   
<script>
export default {
  name: 'icheck',
  props: [ 'value', 'name', 'setValue','addSubService','onDeleteSubService','removeReserveFoodType','addReserveFoodType','addShopCusine','removeShopCusine'
  ,'removeSelectedPaymentMethod','addSelectedPaymentsMethods','addAllPaymentsMethods','removeAllPaymentMethod',
  'removeService','addService'
   ],
  data: function () {
    return {
      uniqNumber: 0,
      localInputValue: null
    }
  },
  methods: {
    onChecked: function () {
      if(this.addService){
        this.addService(this.setValue);
      }
      if(this.addSelectedPaymentsMethods){
        this.addSelectedPaymentsMethods(this.setValue);
      }
      if(this.addAllPaymentsMethods){
        this.addAllPaymentsMethods(this.setValue);
      }
      if(this.addSubService){
this.addSubService(this.setValue);
      }
     
     if(this.addReserveFoodType){
       this.addReserveFoodType(this.setValue);
     }
     if(this.addShopCusine){
       this.addShopCusine(this.setValue)
     }
      let vm = this; let value = vm.value
         
      if (Array.isArray(vm.value)) {
        if (!(vm.value.indexOf(vm.setValue) > -1)) {

          value.push(vm.setValue)
        }
      }
      vm.$emit('input', value)
    },
    onUnChecked: function () {
      if(this.removeService){
        this.removeService(this.setValue);
      }
     
     if(this.removeAllPaymentMethod){
        this.removeAllPaymentMethod(this.setValue);
      }
      if(this.removeSelectedPaymentMethod){
        this.removeSelectedPaymentMethod(this.setValue);
      }
      if(this.onDeleteSubService){
this.onDeleteSubService(this.setValue);
      }
      if(this.removeShopCusine){
        this.removeShopCusine(this.setValue);
      } 
      if(this.removeReserveFoodType){
        this.removeReserveFoodType(this.setValue);
      }
      
      let vm = this; let value = vm.value  
      if (Array.isArray(vm.value)) {
        if (vm.value.indexOf(vm.setValue) > -1) {
          value = _.without(value, vm.setValue)
        }
      }
      vm.$emit('input', value)   
    }
  },
  created: function () {
    let vm = this
    if (Array.isArray(vm.value)) {
      vm.localInputValue = (vm.value.indexOf(vm.setValue) > -1)
    }
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    $(document).ready(function () {
      $('#icheck_' + vm.uniqNumber).iCheck({
        checkboxClass: 'icheckbox_flat-green'
      }).on('ifChecked', function (event) {
        vm.onChecked()
      }).on('ifUnchecked', function (event) {
        vm.onUnChecked()
      })
    })
  }
}
</script>
