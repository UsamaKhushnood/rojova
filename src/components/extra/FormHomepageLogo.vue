<template>
<div >
<div :class="!errors.homepage_logo?'form-group':'form-group has-error has-feedback'">
   <label>Homepage Logo</label>
  <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.homepage_logo"></FileUploader>
  <template v-if="errors.homepage_logo">
    <span class="fa fa-close form-control-feedback"></span>
    <div class="text-danger" v-for="(errorMsg, index) in errors.homepage_logo" :key="index">{{ errorMsg }}</div>
  </template> 
</div>
</div>
</template>

<script>
import FileUploader from '@/components/FileUploader.vue'

export default {
  name: 'FormHomeLogo',
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
      this.formData.homepage_logo=await this.getImg64(value);
    }
  }
}
</script>
