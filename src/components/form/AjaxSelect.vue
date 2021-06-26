<template>
<select :id="'select_' + uniqNumber" :name="'select_field_' + uniqNumber" class="form-control" :multiple="multiple">
  <slot></slot>
</select>
</template>

<script>
// import { apolloQuery } from '@/vue-functions'

export default {
  name: 'AjaxSelect',
  props: [ 'value', 'multiple', 'display', 'endpoint' ],
  data: function () {
    return {
      uniqNumber: 0
    }
  },
  methods: {
    async searchData (query = false) {
      let vm = this
      let clientsList = await apolloQuery(
        vm, vm.endpoint, `
          data {
            id
            ${vm.display}
          }`,
        {
          first: ['Int!', 10],
          search: ['String', query]
        }, true
      )
        .catch(error => { error = null })

      if (clientsList) { return { results: clientsList.data } }
    }
  },
  created () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    $(document).ready(async function () {
      $('#select_' + vm.uniqNumber).select2({
        ajax: {
          transport (params, success, failure) {
            let { data } = params
            vm.searchData(data.q)
              .then(success)
              .catch(failure)
          },
          processResults: function (options) {
            let processedArray = []
            let { results } = options
            results.forEach(function (item) {
              processedArray.push({ id: item.id, text: item[vm.display] })
            })
            return { results: processedArray }
          }
        },
        minimumInputLength: 2,
        allowClear: false,
        tags: true
      })
        .on('select2:select', function (e) {
          vm.$emit('input', e.params.data.id)
        // console.log(e.params.data.id)
        })
    })
  }
}
</script>
<style type="text/css">
  .select2 {
    display: block !important;
  }
</style>
