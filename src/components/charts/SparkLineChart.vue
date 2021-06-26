<template>
  <div :id="'SparkLine__'+uniqNumber"></div>
</template>

<script>
export default {
  name: 'SparkLineChart',
  components: {},
  props: ['data'],
  data: function () {
    return {
      uniqNumber: 0
    }
  },
  created: function () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    $(document).ready(function () {
      $('#SparkLine__' + vm.uniqNumber).sparkline(vm.data, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: '#ebf4f9',
        height: '50',
        width: '80'
      })
    })
  }
}
</script>
