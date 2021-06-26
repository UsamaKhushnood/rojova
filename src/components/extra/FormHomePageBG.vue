<template>
<div >
<div :class="!errors.homepage_background?'form-group':'form-group has-error has-feedback'">
   <label>Homepage Background</label>
  <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.homepage_background"></FileUploader>
  <template v-if="errors.homepage_background">
    <span class="fa fa-close form-control-feedback"></span>
    <div class="text-danger" v-for="(errorMsg, index) in errors.homepage_background" :key="index">{{ errorMsg }}</div>
  </template> 
</div>
</div>
</template>

<script>
import FileUploader from '@/components/FileUploader.vue'

export default {
  name: 'FormHomeBG',
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
      this.formData.homepage_background=await this.getImg64(value);
    }
  }
}
</script>
