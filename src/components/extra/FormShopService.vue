<template>
<div style="margin-top: 20px;">

  <div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
    <label>Service Name</label>
    <input type="text" class="form-control" v-model="formData.name">
    <template v-if="errors.name">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
    </template>
  </div>

  <div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
    <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image" :errors="errors"></FileUploader> 
     <template v-if="errors.image">
      <span class="fa fa-close form-control-feedback"></span>
      <div class="text-danger" v-for="(errorMsg, index) in errors.image" :key="index">{{ errorMsg }}</div>
    </template>     
  </div>
</div>
</template>

<script>
import FileUploader from '@/components/FileUploader.vue'

export default {
  name: 'FormShopService',
  components: { FileUploader },
  props: {
    errors: Object,
    formData: Object
  },
  methods:{
    async getImg64(value){
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    async GETIMG(value){
      this.formData.image=await this.getImg64(value);
    }
  }
}
</script>
