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

  <div :class="!errors.password?'form-group':'form-group has-error has-feedback'">
    <label>Password</label>
    <input type="password" class="form-control" v-model="adminData.password">
    <template v-if="errors.password">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.password" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.services?'form-group':'form-group has-error has-feedback'">
    <label>Services</label>
    <select2 v-model="services" multiple>
      <option>Alabama</option>
      <option>Alaska</option>
      <option>California</option>
      <option>Delaware</option>
      <option>Tennessee</option>
      <option>Texas</option>
      <option>Washington</option>
    </select2>
    <template v-if="errors.services">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.services" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div class="form-group">
    <FileUploader v-model="adminData.image"></FileUploader>
  </div>
</div>
</template>

<script>
import select2 from '@/components/select2.vue'
import FileUploader from '@/components/FileUploader.vue'

export default {
  name: 'FormSettingsAdmin',
  components: { FileUploader, select2 },
  props: {
    errors: Object,
    adminData: Object
  },
  data: function () {
    return {
      uniqNumber: 0,
      services: []
    }
  }
}
</script>
