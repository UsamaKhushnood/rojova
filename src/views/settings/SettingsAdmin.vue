<template>
<div class="SettingsAdmin">
  <section class="content-header">
    <h1>
      Add Admin
      <small>YamiYami Settings</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Add Admin</li>
    </ol>
  </section>
  <notifications group="notification" class="notifications" />

  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="text-right" style="margin-bottom: 20px;">
          <BsModal
            :smaller="true"
            :height="600"
            type="green"
          >
            <template #button>
              <span class="btn btn-info" @click="adminData=JSON.parse(JSON.stringify(adminDefaultData))">Add New Admin</span>
            </template>
            <template #title>
              ADD NEW ADMINISTRATOR
            </template>
            <FormSettingsAdmin
              :errors="errors"
              :adminData="adminData"
            ></FormSettingsAdmin>
            <template #footer>
              <a class="btn btn-primary" style="float: right;" @click.prevent="submitLanguageForm()"> Save</a>
            </template>
          </BsModal>
        </div>
        <!-- Data Table -->
        <div class="">
          <VclTable v-if="showLoader" />
          <DataTable v-else :has_data="datas.length>0" :datas="datas">
            <template #header>
              <th class="id-column">ID.</th>
              <th>Image</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Services</th>
              <th class="option-column">Options</th>
            </template>
            <tr v-for="(data, index) in datas" :key="index">
              <td>#{{ data.id }}</td>
              <td>
                <img v-if="data.image" style="max-height:35px; max-width:35px" :src="data.image">
                <img v-if="!data.image" style="max-height:35px; max-width:35px" src="/images/user1-128x128.jpg">
              </td>
              <td>{{ data.first_name }} {{ data.last_name }}</td>
              <td>{{ data.email }}</td>
              <td>{{ data.phone }}</td>
              <td>
                <!-- <span v-for="(servicePlace, index) in JSON.parse(data.services)" :key="index">
                  {{servicePlace}}
                  <span v-if="(index + 1) < JSON.parse(data.services).length">,</span>
                </span> -->
              </td>
              <td>
                <BsModal
                    :smaller="true"
                    :height="600"
                    type="green" >
                  <template #button>
                    <span class="btn btn-info btn-table" @click="adminData=JSON.parse(JSON.stringify(data))">
                      <i class="fa fa-eye"></i>
                    </span>
                  </template>
                  <template #title>
                    SHOW ADMINISTRATOR
                  </template>
                  <FormSettingsAdmin
                    :errors="errors"
                    :adminData="adminData"
                  ></FormSettingsAdmin>
                  <template #footer>
                    <a class="btn btn-primary" style="float: right;" @click.prevent="submitLanguageForm(data.id)"> Save</a>
                  </template>
                </BsModal>
                <BsModal
                    :smaller="true"
                    :height="600"
                    type="green" >
                  <template #button>
                    <span class="btn btn-primary btn-table" @click="adminData=JSON.parse(JSON.stringify(data))">
                      <i class="fa fa-edit"></i>
                    </span>
                  </template>
                  <template #title>
                    EDIT ADMINISTRATOR
                  </template>
                  <FormSettingsAdmin
                    :errors="errors"
                    :adminData="adminData"
                  ></FormSettingsAdmin>
                  <template #footer>
                    <a class="btn btn-primary" style="float: right;" @click.prevent="submitLanguageForm(data.id)"> Save</a>
                  </template>
                </BsModal>
                <BsModal
                  :smaller="true"
                  :height="1"
                  type="red"
                >
                  <template #button>
                    <span class="btn btn-primary btn-table btn-table"><i class="fa fa-remove"></i></span>
                  </template>
                  <template #title>
                    REMOVE ADMIN
                  </template>
                  <template #footer>
                    <a class="btn btn-danger" style="float: right;" @click.prevent="removeAdmin(data.id)"> Confirm</a>
                  </template>
                </BsModal>
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
import FormSettingsAdmin from '@/components/FormSettingsAdmin.vue'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading';
import { mapState } from 'vuex'


export default {
  name: 'SettingsAdmin',
  components: {
    DataTable, BsModal, FormSettingsAdmin, VclTable
  },
  data: function () {
    return {
      adminData: {},
      adminDefaultData: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        services: '',
        telephone_number: '',
        image: '',
      },
      datas : [],
      errors : {},
      showLoader : false,
    }
  },
  mounted(){
    this.getAdmins();
  },
  methods: {
     getAdmins : function(){
        this.showLoader = true;
        var url = process.env.VUE_APP_API_BASE_URL+'admin/list'

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
          this.showLoader = false;

            if(response.data.error == false && response.data.data)
            {
                this.datas = response.data.data;
            }
            else
            {
                this.$notify({
                    group: 'notify',
                    type: 'warn',
                    title: 'Failure',
                    text: response.data.message || 'something went wrong, Please try again later.'
                }); 
            }

        })
        .catch(error => {
          this.showLoader = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
     },
    submitLanguageForm (adminId = null) {
      // Submit form from here
      let vm = this
      vm.$store.dispatch('settings/saveSettingsAdminData', {
        vm: vm,
        adminId: adminId,
        adminData: vm.adminData
      })
    },
    removeAdmin (adminId) {
      this.$emit('closeModal')
      this.$store.dispatch('settings/removeSettingsAdminData', {
        vm: this,
        adminId: adminId
      })
    }
  },
  
}
</script>
