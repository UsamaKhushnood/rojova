<template>
<div >

<div :class="!errors.name?'form-group':'form-group has-error has-feedback'">
  <label>Name</label>
  <input v-model="formData.name" type="text" class="form-control">
  <template v-if="errors.name">
    <span class="fa fa-close form-control-feedback"></span>
    <div class="text-danger" v-for="(errorMsg, index) in errors.name" :key="index">{{ errorMsg }}</div>
  </template>
</div>
<div :class="!errors.image?'form-group':'form-group has-error has-feedback'">
   <label>Image</label>
  <FileUploader v-bind:setLOGO="GETIMG" v-model="formData.image"></FileUploader>
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
  name: 'FormAddDrink',
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
