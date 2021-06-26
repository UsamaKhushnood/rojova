<template>
  <div class="chart" :id="'AreaChart_'+uniqNumber"></div>
</template>

<script>
export default {
  name: 'AreaChart',
  components: {},
  props: {
    data: Array,
    config: Object
  },
  data: function () {
    return {
      uniqNumber: 0,
      lineConfig: {}
    }
  },
  methods: {
    setConfig: function () {
      let vm = this
      let defaultConfig = {
        element: 'AreaChart_' + vm.uniqNumber,
        resize: true,
        data: vm.data,
        xkey: 'y',
        ykeys: ['item1', 'item2'],
        labels: ['Item 1', 'Item 2'],
        lineColors: ['#a0d0e0', '#3c8dbc'],
        hideHover: 'auto'
      }
      if (vm.config) { vm.lineConfig = { ...defaultConfig, ...vm.config } } else { vm.lineConfig = defaultConfig }
    }
  },
  created: function () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    vm.setConfig()
    $(document).ready(function () {
      let area = Morris.Area(vm.lineConfig)
      // Fix for charts under tabs
      $('.box ul.nav a').on('shown.bs.tab', function () {
        area.redraw()
      })
    })
  }
}
</script>
