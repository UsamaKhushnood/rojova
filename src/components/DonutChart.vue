<template>
  <div class="chart" :id="'DonutChart_'+uniqNumber"></div>
</template>

<script>
export default {
  name: 'DonutChart',
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
        element: 'DonutChart_' + vm.uniqNumber,
        data: vm.data
      }
      if (vm.config) { vm.lineConfig = { ...defaultConfig, ...vm.config } } else { vm.lineConfig = defaultConfig }
    }
  },
  created: function () {
    let vm = this
    vm.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    vm.setConfig()
    $(document).ready(function () {
      // setTimeout(function () {
      Morris.Donut.prototype.setLabels = function (label1, label2) {
        var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale
        inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3
        maxWidth = 1.8 * inner
        maxHeightTop = inner / 2
        maxHeightBottom = inner / 3
        this.text1.attr({
          text: label1,
          transform: ''
        })
        text1bbox = this.text1.getBBox()
        text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height)
        if (isNaN(text1scale) || text1scale === '-Infinity') {
          text1scale = '0.0'
        }
        this.text1.attr({
          transform: 'S' + text1scale + ',' + text1scale + ',' + (text1bbox.x + text1bbox.width / 2) + ',' + (text1bbox.y + text1bbox.height)
        })
        this.text2.attr({
          text: label2,
          transform: ''
        })
        text2bbox = this.text2.getBBox()
        text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height)
        if (isNaN(text2scale) || text2scale === '-Infinity') {
          text2scale = '0.0'
        }
        var t = {
          transform: 'S' + text2scale + ',' + text2scale + ',' + (text2bbox.x + text2bbox.width / 2) + ',' + text2bbox.y
        }
        return this.text2.attr(t)
      }
      Morris.Donut(vm.lineConfig)
      // }, 1000)
    })
  }
}
</script>
