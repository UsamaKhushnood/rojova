<template>
  <div>
<div :class="!errors.website_favicon?'form-group':'form-group has-error has-feedback'">
   <label>Website Favicon</label>
  <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.website_favicon"></FileUploader>
  <template v-if="errors.website_favicon">
    <span class="fa fa-close form-control-feedback"></span>
    <div class="text-danger" v-for="(errorMsg, index) in errors.website_favicon" :key="index">{{ errorMsg }}</div>
  </template> 
</div>
</div>
</template>

<script>
import FileUploader from '@/components/FileUploader.vue'

export default {
  name: 'FormSettingsFavicon',
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
      this.formData.website_favicon=await this.getImg64(value);
    }
  }
}
</script>
