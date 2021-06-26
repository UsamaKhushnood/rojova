<template>
<div class="PopupSetting">
  <section class="content-header">
    <h1>
      Popup Setting
      <small>Marketing</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Popup Setting</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="text-right" style="margin-bottom: 20px;">
          <BsModal
              smaller
              type="white"
              :height="180"
            >
            <template #button>
              <span class="btn btn-info">Add Popup Setting</span>
            </template>
            <template #title>Popup Setting</template>
            <div class="">
              <div class="form-group">
                <label>Setting Name</label>
                <input type="text" class="form-control" placeholder="">
              </div>
              <div class="form-group">
                <label>Setting Number</label>
                <input type="text" class="form-control" placeholder="">
              </div>
            </div>
            <template #footer>
              <span class="btn btn-info">Save</span>
            </template>
          </BsModal>
        </div>
        <!-- Data Table -->
        <div class="">

          <DataTable :has_data="datas.length>0">
            <template #header>
              <th class="id-column">No.</th>
              <th>Popup Setting Number</th>
              <th> Popup Setting Name</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ data.number }}</td>
              <td>{{ data.name }}</td>
              <td>
                <a href="#" class="btn btn-info btn-table"><i class="fa fa-eye"></i></a>
                <a href="#" class="btn btn-success btn-table"><i class="fa fa-close"></i></a>
              </td>
            </tr>
          </DataTable>
        </div>

      </div>
    </div>
  </section>
</div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
import BsModal from '@/components/BsModal.vue'
import { mapState } from 'vuex'

export default {
  name: 'MarketingPopupSettings',
  components: {
    DataTable, BsModal
  },
  computed: {
    ...mapState({
      datas: state => state.marketing.popupSettings.datas
    })
  },
  created: function () {
    this.$store.dispatch('marketing/getPopupSettingsData')
  }
}
</script>
