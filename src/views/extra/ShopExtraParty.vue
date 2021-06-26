<template>
<div class="ShopExtraParty">
  <section class="content-header">
    <h1>
      Party Service
      <small>Shop Extra</small>
    </h1>
    <ol class="breadcrumb">
      <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
      <li class="active">Party Service</li>
    </ol>
  </section>
   <notifications group="notify" class="notifications"></notifications>


  <!-- Main content -->
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="nav-tabs-custom" style="margin-top: 30px;">
          <ul class="nav nav-tabs">
            <li class="active"><a href=".ShopExtraPartyServiceEmployer" data-toggle="tab"><b>Employer</b></a></li>
            <li><a href=".ShopExtraPartyServiceAdministration" data-toggle="tab"><b>Furniture</b></a></li>
            <li><a href=".ShopExtraPartyServiceKitchenstill" data-toggle="tab"><b>Geschir</b></a></li>
            <li><a href=".ShopExtraPartyServicePreparation" data-toggle="tab"><b>Zubereitung</b></a></li>
            <li><a href=".ShopExtraPartyServiceEvent" data-toggle="tab"><b>Entertainment</b></a></li>
            <li><a href=".ShopExtraPartyServiceCatering" data-toggle="tab"><b>Effects</b></a></li>
            <li><a href=".ShopExtraPartyServiceKitchen" data-toggle="tab"><b>Spezialitäten</b></a></li>
            <li><a href=".ShopExtraPartyServiceDrinks" data-toggle="tab"><b>Anlass</b></a></li>
            <li><a href=".ShopExtraPartyServiceMenu" data-toggle="tab"><b>Menüs</b></a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane ShopExtraPartyServiceEmployer active">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Employer</span>
                  </template>
                  <template #title>Add Employee</template>
                  <FormAddEmployee
                  :formData="formData"
                  :errors="errorsemployees"
                  >
                </FormAddEmployee>

                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('employees','submit')">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Save
                  </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="employer.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in employer" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <a  @click.prevent="formData=JSON.parse(JSON.stringify(data))" class="btn btn-info btn-table"><i class="fa fa-edit"></i></a>
                  </template>
                  <template #title>Update Employee</template>
                  <FormAddEmployee
                  :formData="formData"
                  :errors="errorsemployees"
                  >
                </FormAddEmployee>

                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('employees','update',data.id)">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Update
                  </button>
                  </template>
                </BsModal>
                    <a @click.prevent="removeData('employees',data.id)" :disabled="disableDelBtn" href="#" class="btn btn-danger btn-table"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraPartyServiceAdministration">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table" >Add Furniture</span>
                  </template>
                  <template #title>Add Furniture</template>
                  <FormAddAdminsitration
                  :formData="formDataAdmin"
                  :errors="errorsadministrations"
                  >
                 </FormAddAdminsitration>
                  <template #footer>
                    <button type="button" 
                    class="btn btn-primary" 
                    :disabled="disableAddBtn" 
                    @click="saveData('administrations','submit')">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Furniture
                    </button>
                  </template>
                </BsModal>
              </div>
              <DataTable :has_data="administration.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in administration" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <a href="#" class="btn btn-info btn-edit btn-table" @click="formDataAdmin=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></a>
                  </template>
                  <template #title>Update Furniture</template>
                  <FormAddAdminsitration
                  :formData="formDataAdmin"
                  :errors="errorsadministrations"
                  >
                 </FormAddAdminsitration>
                  <template #footer>
                    <button type="button" 
                    class="btn btn-primary" 
                    :disabled="disableAddBtn" 
                    @click="saveData('administrations','update',data.id)">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Update Furniture
                    </button>
                  </template>
                </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData('administrations',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraPartyServiceKitchenstill">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Geschir</span>
                  </template>
                  <template #title>Geschir</template>
                   <FormAddKitechenStill
                   :formData="formDatakitchen_stills"
                   :errors="errorskitchen_stills">
                   >
                   </FormAddKitechenStill>
                  <template #footer>
                    <button type="button" class="btn btn-primary" @click="saveData('kitchen_stills','submit')">
                      <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Save
                    </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="kitchenstill.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in kitchenstill" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    
                    <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <a href="#" class="btn btn-info btn-table"  @click="formDatakitchen_stills=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></a>
                  </template>
                  <template #title>Geschir</template>
                   <FormAddKitechenStill
                   :formData="formDatakitchen_stills"
                   :errors="errorskitchen_stills">
                   >
                   </FormAddKitechenStill>
                  <template #footer>
                    <button type="button" class="btn btn-primary" @click="saveData('kitchen_stills','update',data.id)">
                      <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Update
                    </button>
                  </template>
                </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData('kitchen_stills',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraPartyServicePreparation">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Zubereitung</span>
                  </template>
                  <template #title>Zubereitung</template>
                  <FormAddPrepration
                  :formData="formDatapreprations"
                  :errors="errorspreprations">
                  </FormAddPrepration>
                  <template #footer>
                    <button type="button" class="btn btn-primary" @click="saveData('preprations','submit')" :disabled="disableAddBtn">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Save
                    </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="preparation.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in preparation" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal
                      smaller
                      type="green"
                      :height="300"
                    >
                    <template #button>
                      <a href="#" class="btn btn-info btn-table"  @click="formDatapreprations=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></a>
                    </template>
                    <template #title>Zubereitung</template>
                    <FormAddPrepration
                    :formData="formDatapreprations"
                    :errors="errorspreprations">
                    </FormAddPrepration>
                    <template #footer>
                      <button type="button" class="btn btn-primary" @click="saveData('preprations','update',data.id)" :disabled="disableAddBtn">
                       <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Save
                      </button>
                    </template>
                    </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData('preprations',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraPartyServiceEvent">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Entertainment</span>
                  </template>
                  <template #title>Entertainment</template>
                  <FormAddEvent
                   :formData="formDataevents"
                   :errors="errorsevents">
                  </FormAddEvent>
                  <template #footer>
                    <button type="button" class="btn btn-primary" @click="saveData('events','submit')" :disabled="disableAddBtn">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Save
                    </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="event.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in event" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                    <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <a href="#" class="btn btn-edit btn-table btn-info"  @click="formDataevents=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></a>
                  </template>
                  <template #title>Entertainment</template>
                  <FormAddEvent
                   :formData="formDataevents"
                   :errors="errorsevents">
                  </FormAddEvent>
                  <template #footer>
                    <button type="button" class="btn btn-primary" @click="saveData('events','update',data.id)" :disabled="disableAddBtn">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Update
                    </button>
                  </template>
                </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData('events',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraPartyServiceCatering">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Effects</span>
                  </template>
                  <template #title>Effects</template>
                  <FormAddCatering
                    :formData="formDatacatering_types"
                    :errors="errorscatering_types">
                  </FormAddCatering>
                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('catering_types','submit')">
                      <i class="fa fa-spin fa-spinner" v-if="disableAddBtn"></i> Save
                    </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="catering.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in catering" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" height="35px;"></td>
                  <td>
                   
                    <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                     <a href="#" class="btn btn-info btn-table"  @click="formDatacatering_types=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></a>
                  </template>
                  <template #title>Catering Type</template>
                  <FormAddCatering
                    :formData="formDatacatering_types"
                    :errors="errorscatering_types">
                  </FormAddCatering>
                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('catering_types','update',data.id)">
                      <i class="fa fa-spin fa-spinner" v-if="disableAddBtn"></i> Update
                    </button>
                  </template>
                </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData('catering_types',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraPartyServiceKitchen">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Spezialitäten</span>
                  </template>
                  <template #title>Spezialitäten</template>
                  <FormAddKitchen
                    :formData="formDatakitchens"
                    :errors="errorskitchens"
                  >
                  </FormAddKitchen>
                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('kitchens','submit')">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Add Spezialitäten
                    </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="kitchen.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in kitchen" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" style="max-width:25px;max-height:35px"></td>
                  <td>
                    
                    <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <a href="#" class="btn btn-info btn-table"  @click="formDatakitchens=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></a>
                  </template>
                  <template #title>Spezialitäten</template>
                  <FormAddKitchen
                    :formData="formDatakitchens"
                    :errors="errorskitchens"
                  >
                  </FormAddKitchen>
                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('kitchens','update',data.id)">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Update Spezialitäten
                    </button>
                  </template>
                </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click="removeData('kitchens',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraPartyServiceDrinks">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Anlass</span>
                  </template>
                  <template #title>Anlass</template>
                  <FormAddDrink
                    :formData="formDatadrinks"
                    :errors="errorsdrinks">
                  </FormAddDrink>

                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('drinks','submit')">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Save
                  </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader"></VclTable>
              <DataTable v-else :has_data="drinks.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in drinks" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" style="max-width:35px;max-height:35px"></td>
                  <td>
                    <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <a href="#" class="btn btn-info btn-table"  @click="formDatadrinks=JSON.parse(JSON.stringify(data))"><i class="fa fa-edit"></i></a>
                  </template>
                  <template #title>Anlass</template>
                  <FormAddDrink
                    :formData="formDatadrinks"
                    :errors="errorsdrinks">
                  </FormAddDrink>

                  <template #footer>
                    <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('drinks','update',data.id)">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Update
                  </button>
                  </template>
                </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click="removeData('drinks',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
            <div class="tab-pane ShopExtraPartyServiceMenu">
              <!-- Data Table -->
              <div class="text-right" style="top: -80px; position: relative; margin-bottom: -34px;">
               
                <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                    <span class="btn btn-info btn-table">Add Menüs</span>
                  </template>
                  <template #title>Menüs</template>
                   <FormAddMenuStep
                   :formData="formDatamenu_steps_category"
                   :errors="errorsmenu_steps_category"
                   >
                  </FormAddMenuStep>
                  <template #footer>
                     <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('menu_steps_category','submit')">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Save
                  </button>
                  </template>
                </BsModal>
              </div>
              <VclTable v-if="showLoader" />
              <DataTable v-else :has_data="menu.length>0">
                <template #header>
                  <th class="id-column">No.</th>
                  <th>Category Name</th>
                  <th>Image</th>
                  <th class="option-column">Options</th>
                </template>
                <tr v-for="(data, index) in menu" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>{{ data.name }}</td>
                  <td><img :src="data.image" style="max-width:35px;max-height:35px;"></td>
                  <td>
                   
                    <BsModal
                    smaller
                    type="green"
                    :height="300"
                  >
                  <template #button>
                     <a href="#" class="btn btn-info btn-table"><i class="fa fa-edit"></i></a>
                  </template>
                  <template #title>Menüs</template>
                   <FormAddMenuStep
                   :formData="formDatamenu_steps_category"
                   :errors="errorsmenu_steps_category"
                   >
                  </FormAddMenuStep>
                  <template #footer>
                     <button type="button" class="btn btn-primary" :disabled="disableAddBtn" @click="saveData('menu_steps_category','update',data.id)">
                     <i class="fa fa-spinner fa-spin" v-if="disableAddBtn"></i> Update
                  </button>
                  </template>
                  </BsModal>
                    <a href="#" class="btn btn-danger btn-table" @click.prevent="removeData('menu_steps_category',data.id)"><i class="fa fa-close"></i></a>
                  </td>
                </tr>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import BsModal from '@/components/BsModal.vue'
import DataTable from '@/components/DataTable.vue'
import FileUploader from '@/components/FileUploader.vue'
import { VclFacebook, VclInstagram,VclTable } from 'vue-content-loading'
import FormAddEmployee from '@/components/extra/FormAddEmployee.vue'
import FormAddAdminsitration from '@/components/extra/FormAddAdministration.vue'
import FormAddKitechenStill from '@/components/extra/FormAddKitchenStill.vue'
import FormAddPrepration from '@/components/extra/FormAddPrepration.vue'
import FormAddEvent from '@/components/extra/FormAddEvent.vue'
import FormAddCatering from '@/components/extra/FormAddCatering.vue'
import FormAddKitchen from '@/components/extra/FormAddKitchen.vue'
import FormAddDrink from '@/components/extra/FormAddDrink.vue'
import FormAddMenuStep from '@/components/extra/FormAddMenuStep.vue'


export default {
  name: 'ShopExtraParty',
  components: {
    DataTable, BsModal, FileUploader, VclTable, FormAddEmployee, FormAddAdminsitration, FormAddKitechenStill,
    FormAddPrepration, FormAddEvent, FormAddCatering, FormAddKitchen, FormAddDrink, FormAddMenuStep
  },
  data(){
    return{
      employer : [],
      administration : [],
      kitchenstill : [],
      preparation : [],
      event : [],
      catering : [],
      kitchen : [],
      drinks : [],
      menu : [],
      showLoader : false,
      formData : {
        name : '',
        image : ''
      },
      formDataAdmin :{
        name : '',
        image : ''
      },
      formDatakitchen_stills : {
        name : '',
        image : ''
      },
      formDatapreprations:{
        name  : '',
        image : ''
      },
      errorspreprations : {},
      formDataevents:{
        name  : '',
        image : ''
      },
      errorsevents : {},
      formDatacatering_types:{
        name  : '',
        image : ''
      },
      errorscatering_types : {},
      formDatakitchens:{
        name  : '',
        image : ''
      },
      errorskitchens : {},
      formDatadrinks:{
        name  : '',
        image : ''
      },
      errorsdrinks : {},
      formDatamenu_steps_category:{
        name  : '',
        image : ''
      },
      errorsmenu_steps_category : {},
      errorskitchen_stills : {},
      errorsemployees : {},
      errorsadministrations : {},
      disableAddBtn : false,
      disableDelBtn : false
    }
  }, 
  mounted()
  {
    this.getEmployees();
    this.getAdministration();
    this.getKitchenStills();
    this.getPreparations();
    this.getEvents();
    this.getCaterings();
    this.getKitchens();
    this.getDrinks();
    this.getMenuSteps();
  },  
  methods: {
    getEmployees : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'employees/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.employer = response.data.data;
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
          console.log(error)
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
    getAdministration : function(){
        var url = process.env.VUE_APP_API_BASE_URL+'administrations/list';
        this.showLoader = true;
        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {
            this.showLoader = false;
            if(response.data.error == false && response.data.data){
                this.administration = response.data.data;
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
          console.log(error)
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
    getKitchenStills : function(){
      var url = process.env.VUE_APP_API_BASE_URL+'kitchen_stills/list';
       this.showLoader = true;
      this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
       .then(response => {
           this.showLoader = false;
           if(response.data.error == false && response.data.data){
              this.kitchenstill = response.data.data;
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
         console.log(error)
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
    getPreparations : function(){
      var url = process.env.VUE_APP_API_BASE_URL+'preprations/list';
       this.showLoader = true;
      this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
       .then(response => {
           this.showLoader = false;
           if(response.data.error == false && response.data.data){
              this.preparation = response.data.data;
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
         console.log(error)
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
    getEvents : function(){
      var url = process.env.VUE_APP_API_BASE_URL+'events/list';
       this.showLoader = true;
      this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
       .then(response => {
           this.showLoader = false;
           if(response.data.error == false && response.data.data){
              this.event = response.data.data;
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
         console.log(error)
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
    getCaterings : function(){
      var url = process.env.VUE_APP_API_BASE_URL+'catering_types/list';
       this.showLoader = true;
      this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
       .then(response => {
           this.showLoader = false;
           if(response.data.error == false && response.data.data){
              this.catering = response.data.data;
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
         console.log(error)
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
    getKitchens : function(){
      var url = process.env.VUE_APP_API_BASE_URL+'kitchens/list';
       this.showLoader = true;
      this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
       .then(response => {
           this.showLoader = false;
           if(response.data.error == false && response.data.data){
              this.kitchen = response.data.data;
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
         console.log(error)
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
    getDrinks : function(){
      var url = process.env.VUE_APP_API_BASE_URL+'drinks/list';
       this.showLoader = true;
      this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
       .then(response => {
           this.showLoader = false;
           if(response.data.error == false && response.data.data){
              this.drinks = response.data.data;
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
         console.log(error)
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
    getMenuSteps : function(){
      var url = process.env.VUE_APP_API_BASE_URL+'menu_steps_category/list';
       this.showLoader = true;
      this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
       .then(response => {
           this.showLoader = false;
           if(response.data.error == false && response.data.data){
              this.menu = response.data.data;
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
         console.log(error)
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
    getURI(type){
        switch(type)
        {
           case 'edit':
              return 'edit'
            case 'update':
              return 'update'
            default:
              return 'create'
        }
    },  
    getPayLoad(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formData.id = id;
          if(this.formData.image.indexOf('http')>-1){
            this.formData.image = "";
          }
          return this.formData;
        default : 
           return this.formData
      }
    },
    getPayLoadAdmin(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDataAdmin.id = id;
          if(this.formDataAdmin.image.indexOf('http')>-1){
            this.formDataAdmin.image = "";
          }
          return this.formDataAdmin;
        default : 
           return this.formDataAdmin
      }
    },
    getPayLoadKitchenStill(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDatakitchen_stills.id = id;
          if(this.formDatakitchen_stills.image.indexOf('http')>-1){
            this.formDatakitchen_stills.image = "";
          }
          return this.formDatakitchen_stills;
        default : 
           return this.formDatakitchen_stills
      }
    },
    getPayLoadPreprations(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDatapreprations.id = id;
          if(this.formDatapreprations.image.indexOf('http')>-1){
            this.formDatapreprations.image = "";
          }
          return this.formDatapreprations;
        default : 
           return this.formDatapreprations
      }
    },
    getPayLoadEvents(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDataevents.id = id;
          if(this.formDataevents.image.indexOf('http')>-1){
            this.formDataevents.image = "";
          }
          return this.formDataevents;
        default : 
           return this.formDataevents
      }
    },
    getPayLoadCatering(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDatacatering_types.id = id;
          if(this.formDatacatering_types.image.indexOf('http')>-1){
            this.formDatacatering_types.image = "";
          }
          return this.formDatacatering_types;
        default : 
           return this.formDatacatering_types
      }
    },
    getPayLoadKitchens(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDatakitchens.id = id;
          if(this.formDatakitchens.image.indexOf('http')>-1){
            this.formDatakitchens.image = "";
          }
          return this.formDatakitchens;
        default : 
           return this.formDatakitchens
      }
    },
    getPayLoadDrinks(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDatadrinks.id = id;
          if(this.formDatadrinks.image.indexOf('http')>-1){
            this.formDatadrinks.image = "";
          }
          return this.formDatadrinks;
        default : 
           return this.formDatadrinks
      }
    },
    getPayLoadMenuSteps(type,id){
      switch(type)
      {
        case 'edit':
          return { id : id}
        case 'update':
          this.formDatamenu_steps_category.id = id;
          if(this.formDatamenu_steps_category.image.indexOf('http')>-1){
            this.formDatamenu_steps_category.image = "";
          }
          return this.formDatamenu_steps_category;
        default : 
           return this.formDatamenu_steps_category
      }
    },

    saveData : function (uri='',type='submit',id='') {

        var self = this;

        self[`errors${uri}`] = {};

        var url = process.env.VUE_APP_API_BASE_URL+uri+'/'+this.getURI(type);
        this.disableAddBtn = true;

        let PL = this.getPayLoad(type,id);

        if(uri == 'administrations'){
          PL  = this.getPayLoadAdmin(type,id);
        }
        if(uri == 'kitchen_stills'){
          PL = this.getPayLoadKitchenStill(type,id);
        }
        if(uri == 'preprations'){
          PL = this.getPayLoadPreprations(type,id);
        }
        if(uri == 'events'){
          PL = this.getPayLoadEvents(type,id);
        }
        if(uri == 'catering_types'){
          PL = this.getPayLoadCatering(type,id);
        }
        if(uri == 'kitchens'){
          PL = this.getPayLoadKitchens(type,id);
        }
        if(uri == 'drinks'){
          PL = this.getPayLoadDrinks(type,id);
        }
        if(uri == 'menu_steps_category'){
          PL = this.getPayLoadMenuSteps(type,id);
        }

        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload: PL, url})
        .then(response => {
            this.disableAddBtn = false;
            if(response.data.error == false){

              self[`errors${uri}`] = {};

              this.$notify({
                group: 'notify',
                type: 'success',
                title: 'Success',
                text: response.data.message
              }); 
              
              this.$emit('closeModal')
              
              setTimeout(()=>{
                if(uri == 'employees'){
                  this.formData = {
                    name : '',
                    image : ''
                  }
                  this.getEmployees();
                }
                if(uri == 'administrations'){
                  this.formDataAdmin = {
                    name : '',
                    image : ''
                  }
                  this.getAdministration();
                }
                if(uri == 'kitchen_stills'){
                  this.formDatakitchen_stills = {
                    name : '',
                    image : ''
                  }
                  this.getKitchenStills();
                }
                if(uri == 'preprations'){
                  this.formDatapreprations = {
                    name : '',
                    image : ''
                  }
                  this.getPreparations();
                }
                if(uri == 'events'){
                  this.formDataevents = {
                    name : '',
                    image : ''
                  }
                  this.getEvents();
                }
                if(uri == 'catering_types'){
                  this.formDatacatering_types = {
                    name : '',
                    image : ''
                  }
                  this.getCaterings();
                }
                if(uri == 'kitchens'){
                  this.formDatakitchens = {
                    name : '',
                    image : ''
                  }
                  this.getKitchens();
                }
                if(uri == 'drinks'){
                  this.formDatadrinks = {
                    name : '',
                    image : ''
                  }
                  this.getDrinks();
                }
                if(uri == 'menu_steps_category'){
                  this.formDatamenu_steps_category = {
                    name : '',
                    image : ''
                  }
                  this.getMenuSteps();
                }


              },100)
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
          console.log(error)
            this.disableAddBtn = false;
            if(error.response.status === 422){
              self[`errors${uri}`] = error.response.data.errors
            }
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
     removeData (uri='employees',dataId) {

        if(!confirm('Are you sure to delete?')){
          return;
        }

        var url = process.env.VUE_APP_API_BASE_URL+uri+'/delete';
        this.disableDelBtn = true;
        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload:{id : dataId} , url})
        .then(response => {
          this.$emit('closeModal')
            this.disableDelBtn = false;
            if(response.data.error == false){
              this.$notify({
                group: 'notify',
                type: 'success',
                title: 'Success',
                text: response.data.message
              }); 
               setTimeout(()=>{
                  if(uri == 'employees'){
                    this.getEmployees();
                  }
                  if(uri == 'administrations'){
                    this.getAdministration();
                  }
                  if(uri == 'kitchen_stills'){
                    this.getKitchenStills();
                  }
                  if(uri =='preprations'){
                    this.getPreparations();
                  }
                  if(uri == 'events'){
                    this.getEvents();
                  }
                  if(uri == 'catering_types'){
                    this.getCaterings();
                  }
                  if(uri == 'kitchens'){
                    this.getKitchens();
                  }
                  if(uri == 'drinks'){
                    this.getDrinks();
                  }
                  if(uri == 'menu_steps_category'){
                    this.getMenuSteps();
                  }

              },100)
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
          this.$emit('closeModal')
          console.log(error)
            this.disableDelBtn = false;
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    }
  } 
}
</script>
