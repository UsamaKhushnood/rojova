<template>
<select :id="'select_' + uniqNumber" class="form-control" v-model="value" :multiple="multiple">
  <slot></slot>
</select>
</template>

<script>
export default {
  name: 'select2',
  props: [ 'value', 'multiple' ],
  computed: {
    localValue: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    }
  },
  data: function () {
    return {
      uniqNumber: 0
    }
  },
  created: function () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    $(document).ready(function () {
      $('#select_' + vm.uniqNumber).select2()
    })
  }
}
</script>
<style type="text/css">
  .select2 {
    display: block !important;
  }
</style>
