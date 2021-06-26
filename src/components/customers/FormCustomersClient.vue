<template>
<div style="margin-top: 20px;">

  <div :class="!errors.first_name?'form-group':'form-group has-error has-feedback'">
    <label>First Name</label>
    <input type="text" class="form-control" v-model="adminData.first_name">
    <template v-if="errors.first_name">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.first_name" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.last_name?'form-group':'form-group has-error has-feedback'">
    <label>Last Name</label>
    <input type="text" class="form-control" v-model="adminData.last_name">
    <template v-if="errors.last_name">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.last_name" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.email?'form-group':'form-group has-error has-feedback'">
    <label>Email</label>
    <input type="text" class="form-control" v-model="adminData.email">
    <template v-if="errors.email">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.email" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.telephone_number?'form-group':'form-group has-error has-feedback'">
    <label>Telephone Number</label>
    <input type="text" class="form-control" v-model="adminData.telephone_number">
    <template v-if="errors.telephone_number">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.telephone_number" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.status?'form-group':'form-group has-error has-feedback'">
    <label>Status</label>
    <select2 v-model="status" multiple>
      <option value="active">Active</option>
      <option value="inActive">In Active</option>
      <option value="suspended">Suspended</option>
    </select2>
    <template v-if="errors.status">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.status" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

</div>
</template>

<script>

export default {
  name: 'FormCustomersClient',
  props: {
    errors: Object,
    formData: Object
  }
}
</script>
