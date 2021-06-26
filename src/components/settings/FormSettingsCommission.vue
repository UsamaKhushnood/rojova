<template>
<div style="margin-top: 20px;">

  <div :class="!errors.service_id?'form-group':'form-group has-error has-feedback'">
    <label>Service</label>
    <select class="form-control" v-model="formData.service_id">
      <option value="" selected="" disabled="">Select service</option>
      <option v-for="service in services" :value="service.id">{{service.name}}</option>
    </select>
    <template v-if="errors.service_id">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.service_id" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.type?'form-group':'form-group has-error has-feedback'">
    <label>Type</label>
    <select  class="form-control" v-model="formData.type">
      <option value="" selected="" disabled="">Select Type</option>
      <option value="Per Order">Per Order</option>
      <option value="Per Month">Per Month</option>
    </select>
    <template v-if="errors.type">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.type" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.commission_type?'form-group':'form-group has-error has-feedback'">
    <label>Commission Type</label>
     <select  class="form-control" v-model="formData.commission_type">
      <option value="" selected="" disabled="">Select Type</option>
      <option value="Price">Price</option>
      <option value="Percent">Percent</option>
    </select>
    <template v-if="errors.commission_type">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.commission_type" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.value?'form-group':'form-group has-error has-feedback'">
    <label>Value</label>
    <input type="number" step="any" class="form-control" v-model.number="formData.value">
    <template v-if="errors.value">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.value" :key="index">{{ errorMsg }}</div>
    </template>
  </div>
</div>
</template>

<script>

export default {
  name: 'FormSettingsCommission',
  props: {
    errors: Object,
    formData: Object,
    services : [Object,Array]
  }
}
</script>
