<template>
  <div class="chart" :id="'LineChart_'+uniqNumber"></div>
</template>

<script>
export default {
  name: 'LineChart',
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
        element: 'LineChart_' + vm.uniqNumber,
        resize: true,
        data: vm.data,
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        lineColors: ['#efefef'],
        lineWidth: 2,
        hideHover: 'auto',
        gridTextColor: '#fff',
        gridStrokeWidth: 0.4,
        pointSize: 4,
        pointStrokeColors: ['#efefef'],
        gridLineColor: '#efefef',
        gridTextFamily: 'Open Sans',
        gridTextSize: 10
      }
      if (vm.config) { vm.lineConfig = { ...defaultConfig, ...vm.config } } else { vm.lineConfig = defaultConfig }
    }
  },
  created: function () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    vm.setConfig()
    $(document).ready(function () {
      let line = Morris.Line(vm.lineConfig)
      $('.box ul.nav a').on('shown.bs.tab', function () {
        line.redraw()
      })
    })
  }
}
</script>
