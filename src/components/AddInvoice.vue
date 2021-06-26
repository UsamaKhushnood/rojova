<template>
<div class="">
  <div class="form-group">
    <label>Search for Shop</label>
    <input type="text" class="form-control" placeholder="...">
  </div>
  <div class="row">
    <div class="col-sm-6">
      <div class="form-group">
        <label>Select Country</label>
        <select2 v-model="ShopStep">
          <option>Alabama</option>
          <option>Alaska</option>
          <option>California</option>
          <option>Delaware</option>
          <option>Tennessee</option>
          <option>Texas</option>
          <option>Washington</option>
        </select2>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label>Select Cities</label>
        <select2 v-model="ShopStep">
          <option>Alabama</option>
          <option>Alaska</option>
          <option>California</option>
          <option>Delaware</option>
          <option>Tennessee</option>
          <option>Texas</option>
          <option>Washington</option>
        </select2>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label>Select Shop Type</label>
        <select2 v-model="ShopStep">
          <option>Alabama</option>
          <option>Alaska</option>
          <option>California</option>
          <option>Delaware</option>
          <option>Tennessee</option>
          <option>Texas</option>
          <option>Washington</option>
        </select2>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label>Select Shop</label>
        <select2 v-model="ShopStep">
          <option>Alabama</option>
          <option>Alaska</option>
          <option>California</option>
          <option>Delaware</option>
          <option>Tennessee</option>
          <option>Texas</option>
          <option>Washington</option>
        </select2>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label>Invoice Title</label>
        <input type="text" class="form-control" placeholder="">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-group">
        <label>Select Date</label>
        <div class="input-group">
          <div class="input-group-addon">
            <i class="fa fa-calendar"></i>
          </div>
          <input type="text" class="form-control" v-model="date" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <label>Invoice Items</label>
    </div>
  </div>
  <div class="row" v-for="index in itemCounter" :key="index">
    <div class="col-sm-4">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Type Service">
      </div>
    </div>
    <div class="col-sm-4">
      <div class="form-group">
        <input type="number" step="any" class="form-control" placeholder="Price">
      </div>
    </div>
    <div class="col-sm-4">
      <a href="#" class="btn btn-link" @click.prevent="itemCounter--">Remove Fields</a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 text-left">
      <a href="#" class="btn btn-link" @click.prevent="itemCounter++">Add New Fields</a>
    </div>
  </div>
</div>
</template>

<script>
import select2 from '@/components/select2.vue'

export default {
  name: 'AddInvoice',
  components: {
    select2
  },
  data: function () {
    return {
      ShopStep: 'Alabama',
      date: '',
      itemCounter: 1
    }
  },
  created: function () {
    $(document).ready(function () {
      $('[data-mask]').inputmask()
    })
  }
}
</script>
