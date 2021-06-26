<template>
<div class="DataTable">
  <table v-if="has_data" :class="'table table-bordered table-striped table__'+uniqNumber">
    <thead>
    <tr>
      <slot name="header"></slot>
    </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
  <div v-else class="width-100p place-holder-shimmer" style="min-height: 250px;background: #eee">
    <h3 class="h3 text-center" style="padding-top: 120px">No data available</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    has_data: Boolean,
    datas: Array
  },
  data: function () {
    return {
      uniqNumber: 0,
      dataTable: null
    }
  },
  methods: {
    buildTable: function () {
      let vm = this
      let tableClass = vm.uniqNumber
      $(document).ready(function () {
        vm.dataTable = $('.table__' + tableClass).DataTable()
        $('.dataTables_wrapper').removeClass('form-inline')
      })
    },
    closeModal: function () {
      this.$emit('closeModal')
    }
  },
  watch: {
    has_data: function (val) {
      if (val) this.buildTable()
    },
    datas: function () {
      this.dataTable.destroy()
      if (this.has_data) this.buildTable()
    }
  },
  created: function () {
    this.uniqNumber = Math.floor(new Date().valueOf() * Math.random())
    this.buildTable()
    if (this.$parent) { this.$parent.$on('closeModal', this.closeModal) }
  }
}
</script>
