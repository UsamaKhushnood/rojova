<template>
<div>
 
  <div :class="containerClass" v-for="(option, index) in options" :key="index">
    <icheck
      :name="'select_field_' + uniqNumber"
      v-model="selectFields"    
      :setValue="option.id">
        {{ option[display] }}
    </icheck>
  </div>
</div>
</template>

<script>
// import { apolloQuery } from '@/vue-functions'

import icheck from '@/components/icheck.vue'

export default { 
  name: 'AjaxCheck',
  components: {
    icheck
  },
  props: [ 'value', 'display', 'endpoint', 'containerClass' ],
  data: function () {
    return {
      uniqNumber: 0,
      selectFields: [],
      options: []
    }
  },
  methods: {
    async getData () {
      let vm = this
      let optionList = await apolloQuery(
        vm, vm.endpoint, `
          id
          ${vm.display}`
      )
        .catch(error => { error = null })

      if (optionList) {
        vm.options = optionList
      }
    }
  },
  watch: {
    selectFields (val) {
      this.$emit('input', val)
    }
  },
  created () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    $(document).ready(async function () {
      vm.getData()
    })
  }
}
</script>
