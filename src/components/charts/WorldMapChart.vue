<template>
  <div class="chart" :id="'WorldMap__'+uniqNumber"></div>
</template>

<script>
export default {
  name: 'WorldMapChart',
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
      $('#WorldMap__' + vm.uniqNumber).vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        regionStyle: {
          initial: {
            fill: '#e4e4e4',
            'fill-opacity': 1,
            stroke: 'none',
            'stroke-width': 0,
            'stroke-opacity': 1
          }
        },
        series: {
          regions: [
            {
              values: vm.data,
              scale: ['#92c1dc', '#ebf4f9'],
              normalizeFunction: 'polynomial'
            }
          ]
        },
        onRegionLabelShow: function (e, el, code) {
          if (typeof vm.data[code] !== 'undefined') { el.html(el.html() + ': ' + vm.data[code] + ' new visitors') }
        }
      })
    })
  }
}
</script>
