<template>
  <div>

    <div
      class="box box-success"
      style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">``
            <h3 class="box-title">Shop Name</h3>
          </div>
        </div>
      </div>
      <div
        :class="!validation.hasError('shopName')?'form-group':'form-group has-error has-feedback'"
      >
        <label>
          http://yamiyami.de/
          {{
          shopName.toLowerCase()
          .replace(/ /g,'-')
          .replace(/[^\w-]+/g,'')
          }}
        </label>
        <input
          type="text"
          v-model="shopName"
          placeholder="Type a name ..."
          class="form-control input-sm"
        />
        <template v-if="validation.hasError('shopName')">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div class="text-danger">{{ validation.firstError('shopName') }}</div>
        </template>
      </div>
    </div>

    <div
      class="box box-danger"
      style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Shop Cuisine</h3>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-4">Select your shop cuisines</div>
        <div class="col-md-8 shopCuisines" style="padding:0px !important">
          <div
            v-for="(item,index) in ALLSHOPCUSINES"
            :key="index+item.cuisine_name"
            class="col-md-4"
          >
            <label class>
              <icheck
                v-model="shopCusines"
                v-bind:addShopCusine="addShopCusine"
                v-bind:removeShopCusine="removeShopCusine"
                name="shopReservedFoodType"
                :setValue="item.id"
              ></icheck>
              &nbsp;&nbsp;{{item.cuisine_name}}
            </label>
          </div>
        </div>
      </div>
      <template v-if="validation.hasError('shopCusines')">
        <div class="text-danger">{{ validation.firstError('shopCusines') }}</div>
      </template>
      <div class="col-sm-2"></div>
    </div>



    <div
      v-if="showServices"
      class="box box-danger"
      style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Service</h3>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-4">Select Services</div>
        <div class="col-md-8">
          <div v-for="(item,index) in AllSERVICES" :key="index+item.name" class="col-md-4">
            <label class>
              <icheck
                v-model="services"
                v-bind:removeService="removeService"
                v-bind:addService="addService"
                name="shopReservedFoodType"
                :setValue="item.id"
              ></icheck>
              &nbsp;&nbsp;{{item.name}}
            </label>
          </div>
        </div>
      </div>
      <template v-if="errors.shopServicesFields">
        <span class="text-danger fa fa-close form-control-feedback"></span>
        <div
          class="text-danger"
          v-for="(errorMsg, index) in errors.shopServicesFields"
          :key="index"
        >{{ errorMsg }}</div>
      </template>
      <div class="col-sm-2"></div>
    </div>

    <!-- ONLY FOR PARTY SERVICES CORE -->
    <div>
      <div
        v-if="showPartyServiceCores"
        class="box box-warning"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Employees</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service employees</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.employees"
              :key="index+item.id"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="employees"
                  v-bind:removeEmployees="removeEmployees"
                  v-bind:addPartyService="addEmployees"
                  name="employees"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.employeesFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.employeesFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>
      <div
        v-if="showPartyServiceCores"
        class="box box-danger"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Furnitures</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service furnitures</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.furnitures"
              :key="index+item.name"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="furnitures"
                  v-bind:removeFurnitures="removeFurnitures"
                  v-bind:addFurnitures="addFurnitures"
                  name="furnitures"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.furnituresFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.furnituresFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>

      <div
        v-if="showPartyServiceCores"
        class="box box-success"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Geschir</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service geschir</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.geschirs"
              :key="index+item.id"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="geschirs"
                  v-bind:removeGeschirs="removeGeschirs"
                  v-bind:addFurnitures="addGeschirs"
                  name="geschirs"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.GeschirsFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.GeschirsFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>

      <div
        v-if="showPartyServiceCores || isResturant"
        class="box box-info"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Zubereitung</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service zubereitung</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.zubereitungs"
              :key="index+item.id"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="zubereitungs"
                  v-bind:removeZubereitungs="removeZubereitungs"
                  v-bind:addZubereitungs="addZubereitungs"
                  name="zubereitungs"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.zubereitungsFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.zubereitungsFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>

      <div
        v-if="showPartyServiceCores"
        class="box box-warning"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Entertainments</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service entertainments</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.entertainments"
              :key="index+item.id"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="entertainments"
                  v-bind:removeEntertainments="removeEntertainments"
                  v-bind:addEntertainments="addEntertainments"
                  name="entertainments"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.entertainmentFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.entertainmentFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>
      <div
        v-if="showPartyServiceCores"
        class="box box-primary"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Effects</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service effects</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.effects"
              :key="index+item.id"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="effects"
                  v-bind:removeEffects="removeEffects"
                  v-bind:addEffects="addEffects"
                  name="effects"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.effectstFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.effectsFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>
      <div
        v-if="showPartyServiceCores"
        class="box box-danger"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Spezialiation</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service spezilation</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.spezialiations"
              :key="index+item.id"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="spezialiations"
                  v-bind:removSpezialitaion="removeSpezialitaion"
                  v-bind:addSpezialitaion="addSpezialitaion"
                  name="spezialiations"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.effectsFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.effectsFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>

      <div
        v-if="showPartyServiceCores"
        class="box box-success"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Anlass</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service anlass</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.anlass"
              :key="index+item.id"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="anlass"
                  v-bind:removeAnlass="removeAnlass"
                  v-bind:addAnlass="addAnlass"
                  name="anlass"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.anlassFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.anlassFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>

      <div
        v-if="showPartyServiceCores"
        class="box box-info"
        style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="box-header with-border">
              <h3 class="box-title">Menues</h3>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4">Select party service menu</div>
          <div class="col-md-8">
            <div
              v-for="(item,index) in ALLPARTYSERVICES.menues"
              :key="index+item.id"
              class="col-md-4"
            >
              <label class>
                <icheck
                  v-model="menues"
                  v-bind:removeMenues="removeMenues"
                  v-bind:addMenues="addMenues"
                  name="menues"
                  :setValue="item.id"
                ></icheck>
                &nbsp;&nbsp;{{item.name}}
              </label>
            </div>
          </div>
        </div>
        <template v-if="errors.menuFields">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div
            class="text-danger"
            v-for="(errorMsg, index) in errors.menuFields"
            :key="index"
          >{{ errorMsg }}</div>
        </template>
        <div class="col-sm-2"></div>
      </div>
    </div>
    <div
      v-if="showServices"
      class="box box-primary"
      style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
    >
      <!-- <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Shop Slug</h3>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>
          http://yamiyami.de/pos/slug/
          {{ 
            shopName.toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'')
          }}
        </label>
        <input v-model="shopSlug" type="text" placeholder="Type a name ..." class="form-control input-sm">
      </div>
      <div class="col-sm-2"></div>-->
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Shop Services</h3>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-4">Select shop serivces</div>
        <div class="col-md-8">
          <div class="col-md-4">
            <label class>
              <icheck
                v-model="extra_services"
                v-bind:removeExtraServices="removeExtraServices"
                v-bind:addExtraServices="addExtraServices"
                name="extra_services"
                setValue="1"
              ></icheck>&nbsp;&nbsp;Delivery
            </label>
          </div>
          <div class="col-md-4">
            <label class>
              <icheck
                v-model="extra_services"
                v-bind:removeExtraServices="removeExtraServices"
                v-bind:addExtraServices="addExtraServices"
                name="extra_services"
                setValue="2"
              ></icheck>&nbsp;&nbsp;Pickup
            </label>
          </div>
          <div class="col-md-4">
            <label class>
              <icheck
                v-model="extra_services"
                v-bind:removeExtraServices="removeExtraServices"
                v-bind:addExtraServices="addExtraServices"
                name="extra_services"
                setValue="3"
              ></icheck>&nbsp;&nbsp;Pre Order
            </label>
          </div>
          <div class="col-md-4">
            <label class>
              <icheck
                v-model="extra_services"
                v-bind:removeExtraServices="removeExtraServices"
                v-bind:addExtraServices="addExtraServices"
                name="extra_services"
                setValue="4"
              ></icheck>&nbsp;&nbsp;ToGo
            </label>
          </div>
          <div class="col-md-4">
            <label class>
              <icheck
                v-model="extra_services"
                v-bind:removeExtraServices="removeExtraServices"
                v-bind:addExtraServices="addExtraServices"
                name="extra_services"
                setValue="5"
              ></icheck>&nbsp;&nbsp;Dine In
            </label>
          </div>
          <div class="col-md-4">
            <label class>
              <icheck
                v-model="extra_services"
                v-bind:removeExtraServices="removeExtraServices"
                v-bind:addExtraServices="addExtraServices"
                name="extra_services"
                setValue="6"
              ></icheck>&nbsp;&nbsp;Reservation
            </label>
          </div>
          <div class="col-md-4">
            <label class>
              <icheck
                v-model="extra_services"
                v-bind:removeExtraServices="removeExtraServices"
                v-bind:addExtraServices="addExtraServices"
                name="extra_services"
                setValue="7"
              ></icheck>&nbsp;&nbsp;Reservation Plus
            </label>
          </div>
        </div>
      </div>
      <template v-if="errors.furnituresFields">
        <span class="text-danger fa fa-close form-control-feedback"></span>
        <div
          class="text-danger"
          v-for="(errorMsg, index) in errors.furnituresFields"
          :key="index"
        >{{ errorMsg }}</div>
      </template>
      <div class="col-sm-2"></div>
    </div>

    <!-- END PARTY SERVICES CORE -->

    <div
      class="box box-success"
      style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Shop SEO</h3>
          </div>
        </div>
      </div>
      <br />
      <div
        :class="!validation.hasError('shopSeo')?'form-group':'form-group has-error has-feedback'"
      >
        <label>
          http://yamiyami.de/seo/
          {{
          shopName.toLowerCase()
          .replace(/ /g,'-')
          .replace(/[^\w-]+/g,'')
          }}
        </label>
        <input
          v-model="shopSeo"
          type="text"
          placeholder="Type a name ..."
          class="form-control input-sm"
        />
        <template v-if="validation.hasError('shopSeo')">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div class="text-danger">{{ validation.firstError('shopSeo') }}</div>
        </template>
      </div>
      <div class="col-sm-2"></div>
    </div>

    <div
      class="box box-danger"
      style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Shop Meta Description</h3>
          </div>
        </div>
      </div>
      <div
        :class="!validation.hasError('shopMetaDescription')?'form-group':'form-group has-error has-feedback'"
      >
        <textarea
          class="form-control"
          v-model="shopMetaDescription"
          placeholder="Wreite a meta ...."
        ></textarea>

        <template v-if="validation.hasError('shopMetaDescription')">
          <span class="text-danger fa fa-close form-control-feedback"></span>
          <div class="text-danger">{{ validation.firstError('shopMetaDescription') }}</div>
        </template>
      </div>
      <div class="col-sm-2"></div>
    </div>

    <div
      class="box box-warning"
      style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Shop Logo</h3>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <FileUploader v-bind:setLOGO="GETIMG" v-model="shopLogo"></FileUploader>
      </div>
      <template v-if="validation.hasError('shopLogo')">
        <div class="text-danger text-center">{{ validation.firstError('shopLogo') }}</div>
      </template>
      <div class="col-sm-2"></div>
    </div>
    <ul class="list-inline pull-right">
      <li class="completed">
        <button
          type="button"
          class="btn btn-default prev-step"
          @click.prevent="PreviousStep"
        >Previous</button>
      </li>
      <li>
        <button
          type="button"
          class="btn btn-primary next-step"
          @click.prevent="finalStep()"
        >Click to go next</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import { apolloMutate } from '@/vue-functions'

import iradio from "@/components/iradio.vue";
import icheck from "@/components/icheck.vue";

import FileUploader from "@/components/FileUploader.vue";
import AjaxCheck from "@/components/form/AjaxCheck.vue";

import { mapActions, mapState } from "vuex";

export default {
  name: "ShopDetailPopup",
  components: {
    iradio,
    icheck,
    FileUploader,
    AjaxCheck
  },
  computed: mapState({
    GetDATA: "SHOP_INFO",

    ALLSHOPCUSINES(state) {
      return state.SHOP_INFO.cuisine;
    },

    ALLRESERVEDFOOD(state) {
      return state.SHOP_INFO.reserved_food;
    },

    ALLSERVIESANDSUBSERVICES(state) {
      return state.SHOP_INFO.services_sub_services;
    },
    AllSERVICES(state) {
      return state.SHOP_SERVICES;
    },
    showReservedFood() {
      return !(this.serviceID == 1 || this.serviceID == 2);
    },
    showServices() {
      return !(this.serviceID == 3);
    },
    showPartyServiceCores() {
      return this.serviceID == 3;
    },
    isResturant() {
      return this.serviceID == 4;
    },
    ALLPARTYSERVICES(state) {
      return state.ALL_PARTY_SERVICES_CORE;
    }
  }),
  data: function() {
    return {
      shopType: "delivery",
      shopName: "",
      nextStep: 3,
      previousStep: 1,
      errors: {},
      serviceID: "",
      Subservices: [],
      shopMetaDescription: "",
      shopLogo: "",
      isResturant: true,

      shopReservedFoodType: [],
      shopCusines: [],
      shopServicesFields: [],
      shopSlug: "",
      shopSeo: "",
      services: [],
      sub_services: [],
      employees: [],
      furnitures: [],
      geschirs: [],
      zubereitungs: [],
      entertainments: [],
      effects: [],
      spezialiations: [],
      anlass: [],
      menues: [],
      extra_services: []
    };
  },
  validators: {
    serviceID: function(value) {
      return this.$Validator.value(value).required("Shop service is required.");
    },
    shopName: function(value) {
      return this.$Validator.value(value).required("Shop name is required.");
    },
    shopCusines: function(value) {
      return this.$Validator.value(value).required("Shop cuisine is required.");
    },
    // 'shopReservedFoodType': function (value) {
    //   return this.$Validator.value(value).required('Shop reserved food is required.');
    // },
    shopSeo: function(value) {
      return this.$Validator.value(value).required("Shop seo is required.");
    },
    shopMetaDescription: function(value) {
      return this.$Validator
        .value(value)
        .required("Shop meta decription is required.");
    },
    shopLogo: function(value) {
      return this.$Validator.value(value).required("Shop logo is required.");
    }
  },
  methods: {
    ...mapActions({
      SaveShopDetails: "Save_Shop_Details",
      SetPartyServices: "SavePartyServices",
      SetExtraServices: "SaveExtraServices"
    }),

    async clearSubServices() {
      this.Subservices = [];
    },
    async addService(value) {
      await this.services.push(value);
    },
    async removeService(value) {
      this.services = await this.services.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addShopCusine(value) {
      await this.shopCusines.push(value);
    },
    async removeShopCusine(value) {
      this.shopCusines = await this.shopCusines.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addReserveFoodType(value) {
      await this.shopReservedFoodType.push(value);
    },
    async removeReserveFoodType(value) {
      this.shopReservedFoodType = await this.shopReservedFoodType.filter(
        item => {
          if (item != value) {
            return true;
          }
        }
      );
    },
    async addSubService(value) {
      await this.Subservices.push(value);
    },
    async removeSubService(value) {
      this.Subservices = await this.Subservices.filter(item => {
        if (item != value) {
          return true;
        }
      });
      console.log(this.Subservices);
    },
    async addEmployees(value) {
      await this.employees.push(value);
    },
    async removeEmployees(value) {
      this.employees = await this.employees.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addFurnitures(value) {
      await this.furnitures.push(value);
    },
    async removeFurnitures(value) {
      this.furnitures = await this.furnitures.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addGeschirs(value) {
      await this.geschirs.push(value);
    },
    async removeGeschirs(value) {
      this.geschirs = await this.geschirs.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addZubereitungs(value) {
      await this.zubereitungs.push(value);
    },
    async removeZubereitungs(value) {
      this.zubereitungs = await this.zubereitungs.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addEntertainments(value) {
      await this.entertainments.push(value);
    },
    async removeEntertainments(value) {
      this.entertainments = await this.entertainments.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addEffects(value) {
      await this.effects.push(value);
    },
    async removeEffects(value) {
      this.effects = await this.effects.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addSpezialitaion(value) {
      await this.spezialiations.push(value);
    },
    async removeSpezialitaion(value) {
      this.spezialiations = await this.spezialiations.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addAnlass(value) {
      await this.anlass.push(value);
    },
    async removeAnlass(value) {
      this.anlass = await this.anlass.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addMenues(value) {
      await this.menues.push(value);
    },
    async removeMenues(value) {
      this.menues = await this.menues.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async addExtraServices(value) {
      await this.extra_services.push(value);
    },
    async removeExtraServices(value) {
      this.extra_services = await this.extra_services.filter(item => {
        if (item != value) {
          return true;
        }
      });
    },
    async finalStep() {
      this.$validate().then(success => {
        if (success) {
          this.SaveShopDetails({
            serviceID: this.serviceID,
            Subservices: this.Subservices,
            shopReservedFoodType: this.shopReservedFoodType,
            shopCusines: this.shopCusines,
            shopServicesFields: this.services,
            shopMetaDescription: this.shopMetaDescription,
            shopLogo: this.shopLogo,
            shopName: this.shopName,
            shopSEO: this.shopSeo,
            shopSlug: this.shopSlug
          });

          this.SetPartyServices({
            employees: this.employees,
            furnitures: this.furnitures,
            geschirs: this.geschirs,
            zubereitungs: this.zubereitungs,
            entertainments: this.entertainments,
            effects: this.effects,
            spezialiations: this.spezialiations,
            anlass: this.anlass,
            menues: this.menues
          });

          this.SetExtraServices(this.extra_services);
          let vm = this;
          vm.$emit("stepChange", vm.nextStep);
        }
      });
    },
    async PreviousStep() {
      this.$emit("stepChange", this.previousStep);
    },
    async getImg64(value) {
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    async GETIMG(value) {
      this.shopLogo = await this.getImg64(value);
    }
  }
};
</script>

<style>
.shopCuisines > .col-md-4 {
  padding: 0;
}

.party_option.fild_option.show {
  position: relative;
  width: 1100px;

  height: 127px;
}
.fild_option {
  background: #fff;
  padding: 10px 15px 5px;
  margin-top: 10px;
  z-index: 9;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 95%;
  margin-bottom: 35px;
  height: 100%;
}

.dinner_option,
.party_option {
  display: none;
}

.show {
  display: block !important;
}
.box.box-success {
  border-top-color: #00a65a;
}
.box {
  position: relative;
  border-radius: 3px;
  background: #ffffff;
  border-top: 3px solid #d2d6de;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.modal .panel .panel-heading {
  padding: 5px !important;
  border-top-right-radius: 3px !important;
  border-top-left-radius: 3px !important;
  border-bottom: 1px solid #ddd !important;
  -moz-border-radius: 0px !important;
  -webkit-border-radius: 0px !important;
  border-radius: 0px !important;
  margin-top: -10px !important;
}
.modal .panel .panel-heading .panel-title {
  padding: 10px !important;
  font-size: 17px !important;
}
.modal .panel .panel-heading .panel-title {
  font-weight: bold !important;
}
.panel .nav-tabs {
  position: relative !important;
  background-color: #fff !important;
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
}
.modal .nav-tabs,
.nav-tabs > li:first-child > a {
  margin-left: 0;
}
.modal .nav-tabs {
  border-bottom: none;
}
.modal .nav-tabs,
.nav-tabs > li:first-child > a {
  margin-left: 0;
}
.panel li {
  float: left !important;
  width: 13.5% !important;
  text-align: center;
}
.panel .nav-tabs > li {
  float: left !important;
  margin-bottom: -1px !important;
}
.panel .nav > li {
  position: relative !important;
  display: block !important;
}

.panel .nav-tabs li > *::after {
  content: none !important;
}

.panel .nav-tabs li::after {
  content: none !important;
}

.panel .nav-tabs li.active {
  padding-bottom: 10px !important;
  border-bottom: 2px solid #4a66f4 !important;
  transition: left 0.25s !important;
}

.modal .panel .panel-heading .nav > li > a {
  padding: 10px;
  background: transparent !important;
  color: #333 !important;
  position: relative;
  font-size: 14px;
  border: none;
  border-radius: 4px 4px 0 0;
  margin-right: 2px;
  line-height: 1.42857143;
}
.dinner_option.fild_option.show {
  position: relative;
  width: 1100px;
  left: -839px;
  height: 80px;
}
.fild_option {
  background: #fff;
  padding: 10px 15px 5px;
  margin-top: 10px;
  z-index: 9;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 95%;
  margin-bottom: 35px;
  height: 100%;
}
.panel .box-header.with-border {
  margin-bottom: 20px;
  padding-top: 0px !important;
}
</style>