<template>
  <div class="Home">
    <notifications group="notification" class="notifications" />

    <!-- Main content -->
    <section class="content">
      <div class="form-tab-widget">
        <div class="wizard-inner">
          <ul class="nav nav-tabs wizard tab-4" role="tablist">
            <li role="presentation" :class="formStep==1?'active':''+formStep>1?'completed':''">
              <a href="#" @click.prevent="formStep=1">
                <span class="nmbr">1</span> Shop Type
              </a>
            </li>
            <li role="presentation" :class="formStep==2?'active':''+formStep>2?'completed':''">
              <a href="#" @click.prevent="formStep=2">
                <span class="nmbr">2</span> Shop Setting
              </a>
            </li>
            <li role="presentation" :class="formStep==3?'active':''+formStep>3?'completed':''">
              <a href="#" @click.prevent="formStep=3">
                <span class="nmbr">3</span>Shop Owner
              </a>
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <div :class="formStep==1?'active tab-pane':'tab-pane'" role="tabpanel">
            <ShopDetailPopupP @stepChange="FormStepChange"></ShopDetailPopupP>
          </div>
          <div :class="formStep==2?'active tab-pane':'tab-pane'" role="tabpanel">
            <ShopSetting @stepChange="FormStepChange"></ShopSetting>
          </div>
          <div :class="formStep==3?'active tab-pane':'tab-pane'" role="tabpanel">
            <div
              class="box box-warning"
              style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
            >
              <div class="row">
                <div class="col-md-12">
                  <div class="box-header with-border">
                    <h3 class="box-title">Shop Owner Information</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <br />
                <div class="col-md-2 text-left">
                  <label class>
                    <iradio v-model="client_sex" name="ShopClientSex" setValue="male"></iradio>&nbsp;&nbsp; Male
                  </label>
                </div>
                <div class="col-md-2 text-left">
                  <label class>
                    <iradio v-model="client_sex" name="ShopClientSex" setValue="female"></iradio>&nbsp;&nbsp; Female
                  </label>
                </div>
                <template v-if="validation.hasError('client_sex')">
                  <div class="text-danger text-center">{{ validation.firstError('client_sex') }}</div>
                </template>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div
                    :class="!validation.hasError('client_first_name')?'form-group':'form-group has-error has-feedback'"
                  >
                    <label>First Name</label>
                    <input
                      class="form-control"
                      v-model="client_first_name"
                      placeholder="First Name"
                      type="text"
                    />
                    <template v-if="validation.hasError('client_first_name')">
                      <span class="text-danger fa fa-close form-control-feedback"></span>
                      <div class="text-danger">{{ validation.firstError('client_first_name') }}</div>
                    </template>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    :class="!validation.hasError('client_last_name')?'form-group':'form-group has-error has-feedback'"
                  >
                    <label>Last Name</label>
                    <input
                      class="form-control"
                      v-model="client_last_name"
                      placeholder="Last name"
                      type="text"
                    />
                    <template v-if="validation.hasError('client_last_name')">
                      <span class="text-danger fa fa-close form-control-feedback"></span>
                      <div class="text-danger">{{ validation.firstError('client_last_name') }}</div>
                    </template>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label>Zip Code</label>
                    <!-- <input class="form-control" v-model="client_zip_code" placeholder="Zip code" type="text"> -->
                    <v-select
                      v-model="client_zip_code"
                      :reduce="zipcode => zipcode.zipcode_id"
                      :options="ZIPCODE_LIST"
                      :filterable="false"
                      @search="onSearch"
                      @input="setData"
                    >
                      <template slot="no-options">Type to search Zipcode</template>
                      <template slot="option" slot-scope="data">
                        <div class="d-center">
                          {{ data.zipcode }} -
                          {{ data.name }}
                        </div>
                      </template>
                      <template slot="selected-option" slot-scope="data">
                        <div class="selected d-center">
                          <span v-if="data.zipcode">
                            {{ data.zipcode }} -
                            {{ data.name }}
                          </span>
                        </div>
                      </template>
                    </v-select>
                    <template v-if="validation.hasError('client_zip_code')">
                      <div class="text-danger">{{ validation.firstError('client_zip_code') }}</div>
                    </template>
                  </div>
                </div>
                <div class="col-md-8">
                  <div
                    :class="!validation.hasError('client_address')?'form-group':'form-group has-error has-feedback'"
                  >
                    <label>Address</label>
                    <input
                      class="form-control"
                      v-model="client_address"
                      placeholder="Street"
                      type="text"
                    />
                    <template v-if="validation.hasError('client_address')">
                      <span class="text-danger fa fa-close form-control-feedback"></span>
                      <div class="text-danger">{{ validation.firstError('client_address') }}</div>
                    </template>
                  </div>
                </div>
                <!-- <div class="col-md-3">
                  <div class="form-group">
                    <label>Street</label>
                  <input class="form-control" v-model="client_street" placeholder="Street" type="text">
                </div>
                </div>-->
                <!-- <div class="col-md-6">
                  <div class="form-group">
                    <label>House Number</label>
                  <input class="form-control" v-model="client_house_number" placeholder="House Number" type="text">
                </div>
                </div>-->
                <div class="col-md-4">
                  <div
                    :class="!validation.hasError('client_st_nr')?'form-group':'form-group has-error has-feedback'"
                  >
                    <label>ST-Nr</label>
                    <input
                      class="form-control"
                      v-model="client_st_nr"
                      placeholder="ST-Nr"
                      type="text"
                    />
                    <template v-if="validation.hasError('client_st_nr')">
                      <span class="text-danger fa fa-close form-control-feedback"></span>
                      <div class="text-danger">{{ validation.firstError('client_st_nr') }}</div>
                    </template>
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                    :class="!validation.hasError('hrb_no')?'form-group':'form-group has-error has-feedback'"
                  >
                    <label>HBR Nubmer</label>
                    <input class="form-control" v-model="hrb_no" placeholder="HBR No." type="text" />
                    <template v-if="validation.hasError('hrb_no')">
                      <span class="text-danger fa fa-close form-control-feedback"></span>
                      <div class="text-danger">{{ validation.firstError('hrb_no') }}</div>
                    </template>
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                    :class="!validation.hasError('client_umst_id')?'form-group':'form-group has-error has-feedback'"
                  >
                    <label>UMST-ID</label>
                    <input
                      class="form-control"
                      v-model="client_umst_id"
                      placeholder="UMST-ID"
                      type="text"
                    />
                    <template v-if="validation.hasError('client_umst_id')">
                      <span class="text-danger fa fa-close form-control-feedback"></span>
                      <div class="text-danger">{{ validation.firstError('client_umst_id') }}</div>
                    </template>
                  </div>
                </div>

                <div class="col-md-4">
                  <label>E-mail</label>
                  <input
                    class="form-control"
                    v-model="client_st_nr"
                    placeholder="E-mail"
                    type="text"
                  />
                </div>
                <div class="col-md-4">
                  <label>Repeated E-mail</label>
                  <input
                    class="form-control"
                    v-model="client_st_nr"
                    placeholder="Repeated E-mail"
                    type="text"
                  />
                </div>
                <div class="col-md-4">
                  <label>Mobile Number</label>
                  <input
                    class="form-control"
                    v-model="client_st_nr"
                    placeholder="Mobile Number"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div
              class="box box-success"
              style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
            >
              <div class="row">
                <div class="col-md-12">
                  <div class="box-header with-border">
                    <h3 class="box-title">Shop Login details</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-md-6">
                      <div
                        :class="!validation.hasError('shop_email')?'form-group':'form-group has-error has-feedback'"
                      >
                        <label>User Name</label>
                        <input
                          class="form-control"
                          v-model="shop_email"
                          placeholder="User Name"
                          type="text"
                        />
                        <template v-if="validation.hasError('shop_email')">
                          <span class="text-danger fa fa-close form-control-feedback"></span>
                          <div class="text-danger">{{ validation.firstError('shop_email') }}</div>
                        </template>
                      </div>
                    </div>
                    <div class="col-md-3" style="positon: relative">
                      <div
                        :class="!validation.hasError('shop_password')?'form-group':'form-group has-error has-feedback'"
                      >
                        <label>Password</label>
                        <input class="form-control" v-model="shop_password" :type="passwordFieldShow1" />
                        <i class="showPasswordButton" :class="[ isShowingError ? 'fa-eye-slash' : 'fa-eye', 'fa']"  @click="passwordShowBtn1()"></i>
                        <template v-if="validation.hasError('shop_password')">
                          <span class="text-danger fa fa-close form-control-feedback"></span>
                          <div class="text-danger">{{ validation.firstError('shop_password') }}</div> 
                        </template>
                      </div>
                    </div>

                    <div class="col-md-3"  style="positon: relative">
                      <div
                        :class="!validation.hasError('shop_re_password')?'form-group':'form-group has-error has-feedback'"
                      >
                        <label>Repeat Password</label>
                        <input class="form-control" v-model="shop_re_password" :type="passwordFieldShow2" />
                          <i class="showPasswordButton" :class="[ isShowingError2 ? 'fa-eye-slash' : 'fa-eye', 'fa']"  @click="passwordShowBtn2()"></i>
                        <template v-if="validation.hasError('shop_re_password')">
                          <span class="text-danger fa fa-close form-control-feedback"></span>
                          <div class="text-danger">{{ validation.firstError('shop_re_password') }}</div>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="box box-danger"
              style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
            >
              <div class="row">
                <div class="col-md-12">
                  <div class="box-header with-border">
                    <h3 class="box-title">Map</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>Zip Code</label>
                        <v-select
                          v-model="shop_zip_code"
                          :reduce="zipcode => zipcode.zipcode_id"
                          :options="ZIPCODE_LIST"
                          :filterable="false"
                          @search="onSearch"
                          @input="setData"
                        >
                          <template slot="no-options">Type to search Zipcode</template>
                          <template slot="option" slot-scope="data">
                            <div class="d-center">
                              {{ data.zipcode }} -
                              {{ data.name }}
                            </div>
                          </template>
                          <template slot="selected-option" slot-scope="data">
                            <div class="selected d-center">
                              <span v-if="data.zipcode">
                                {{ data.zipcode }} -
                                {{ data.name }}
                              </span>
                            </div>
                          </template>
                        </v-select>
                        <template v-if="validation.hasError('shop_zip_code')">
                          <div class="text-danger">{{ validation.firstError('shop_zip_code') }}</div>
                        </template>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div
                        :class="!validation.hasError('shop_street')?'form-group':'form-group has-error has-feedback'"
                      >
                        <label>Street</label>
                        <input
                          class="form-control"
                          v-model="shop_street"
                          placeholder="Street"
                          type="text"
                        />
                        <template v-if="validation.hasError('shop_street')">
                          <span class="text-danger fa fa-close form-control-feedback"></span>
                          <div class="text-danger">{{ validation.firstError('shop_street') }}</div>
                        </template>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div
                        :class="!validation.hasError('shop_house_number')?'form-group':'form-group has-error has-feedback'"
                      >
                        <label>House-no</label>
                        <input
                          class="form-control"
                          v-model="shop_house_number"
                          placeholder="House No"
                          type="text"
                        />
                        <template v-if="validation.hasError('shop_house_number')">
                          <span class="text-danger fa fa-close form-control-feedback"></span>
                          <div class="text-danger">{{ validation.firstError('shop_house_number') }}</div>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.890234907154!2d68.3532028144847!3d25.374994983813757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c708af1ae5cc5%3A0x577a94f1f6dff877!2sZeeshan+Autos!5e0!3m2!1sen!2s!4v1478542713420"
                    width="100%"
                    height="450"
                    frameborder="0"
                    style="border:0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div
              class="box box-primary"
              style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
            >
              <div class="row">
                <div class="col-md-12">
                  <div class="box-header with-border">
                    <h3 class="box-title">Additional Notes</h3>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <CKEditor v-model="shop_details"></CKEditor>
              </div>
            </div>

            <ul class="list-inline pull-right">
              <li>
                <button
                  type="button"
                  class="btn btn-primary save_data"
                  @click.prevent="Save_Data()"
                >Add Shop</button>
              </li>
            </ul>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>

<script>

import AddClient from "@/components/add-shop/AddClient";
import ShopDetailPopupP from "@/components/extra/ShopDetailPopupP.vue";
import ShopSetting from "@/components/add-shop/ShopSetting";
import ShopDeliveryArea from "@/components/add-shop/ShopDeliveryArea";
import { mapActions, mapState, mapGetters } from "vuex";

import _ from "lodash";
import "vue-select/dist/vue-select.css";

export default {
  name: "AddShopFormS3",

  components: {
    AddClient,
    ShopDetailPopupP,
    ShopSetting,
    ShopDeliveryArea,
  },
  computed: {
    ...mapState(["ADD_SHOP_SUCCESS"]),
    ...mapGetters(["GET_ADD_SHOP_SUCCESS"])
  },
  data: function() {
    return {
      VALIDATION_PASSED: false,
      disbalebtn: false,
      formStep: 1,
      passwordFieldShow1: 'password',
      passwordFieldShow2: 'password',
      client_sex: "male",
      client_first_name: "",
      client_last_name: "",
      client_zip_code: "",
      client_street: "",
      client_address: "",
      client_house_number: "",
      client_st_nr: "",
      client_umst_id: "",
      isShowingError:  false,
      isShowingError2:  false,

      opening_timings: {
        day: ["1", "2", "3", "4", "5", "6", "7"],
        morning_soon_start: ["", "", "", "", "", "", ""],
        morning_soon_end: ["", "", "", "", "", "", ""],
        afternoon_evening_start: ["", "", "", "", "", "", ""],
        afternoon_evening_end: ["", "", "", "", "", "", ""],
        permanently_open_start: ["", "", "", "", "", "", ""],
        permanently_open_end: ["", "", "", "", "", "", ""]
      },

      shop_email: "",
      shop_password: "",
      shop_re_password: "",
      shop_street: "",
      shop_details: "",
      shop_house_number: "",
      shop_zip_code: "",

      shop_delivery_county: "",
      shop_delivery_state: "",
      shop_delivery_city: "",
      hrb_no: "",
      ZIPCODE_LIST: []
    };
  },
  validators: {
    client_sex: function(value) {
      return this.$Validator.value(value).required("Gender is required.");
    },
    client_first_name: function(value) {
      return this.$Validator.value(value).required("First name is required.");
    },
    client_last_name: function(value) {
      return this.$Validator.value(value).required("Last name is required.");
    },
    client_zip_code: function(value) {
      return this.$Validator
        .value(value)
        .required("Owner Zip code is required.");
    },
    client_address: function(value) {
      return this.$Validator
        .value(value)
        .required("Owner address is required.");
    },
    client_st_nr: function(value) {
      return this.$Validator.value(value).required("Owner ST NR. is required.");
    },
    hrb_no: function(value) {
      return this.$Validator.value(value).required("Owner HBR is required.");
    },
    client_umst_id: function(value) {
      return this.$Validator
        .value(value)
        .required("Owner HMST ID is required.");
    },
    shop_email: function(value) {
      return this.$Validator
        .value(value)
        .required("Shop email is required.")
        .email();
    },
    shop_password: function(value) {
      return this.$Validator
        .value(value)
        .required("Shop password is required.");
    },
    "shop_re_password, shop_password": function(repeat, password) {
      return this.$Validator
        .value(repeat)
        .required()
        .match(password);
    },
    shop_zip_code: function(value) {
      return this.$Validator
        .value(value)
        .required("Shop Zip code is required.");
    },
    shop_street: function(value) {
      return this.$Validator
        .value(value)
        .required("Shop street no is required.");
    },
    shop_house_number: function(value) {
      return this.$Validator
        .value(value)
        .required("Shop House no is required.");
    }
  },
  watch: {
    async VALIDATION_PASSED(val) {
      if (val === true) {
        this.disbalebtn = true;
        await this.SaveShopOwner();
        await this.ADDSHOP({});
      }
    }
  },
  created() {
    this.$store.watch(
      state => state.ADD_SHOP_SUCCESS,
      async value => {
        if (value === true) {
          this.$notify({
            group: "notification",
            type: "success",
            title: "Success",
            text: "Created New Shop Successfully,"
          });

          setTimeout(() => {
            this.setNull();
            location.reload();
          }, 5000);
        } else {
          this.disbalebtn = false;
          this.$notify({
            group: "notification",
            type: "error",
            title: "failure",
            text: "Enter Correct Data."
          });
        }
      }
    );
  },
  methods: {
    passwordShowBtn1(){
      this.passwordFieldShow1 = this.passwordFieldShow1 === 'password' ? 'text' : 'password';
      this.isShowingError = !this.isShowingError
    }
    ,
    passwordShowBtn2(){
      this.passwordFieldShow2 = this.passwordFieldShow2 === 'password' ? 'text' : 'password'
      this.isShowingError2 = !this.isShowingError2 
    }
    ,
    ...mapActions({
      ADDSHOP: "ADD_NEW_SHOP",
      setNull: "SET_NULL_SHOP"
    }),
    async Save_Data() {
      this.$validate().then(success => {
        if (success) {
          this.VALIDATION_PASSED = true;
        } else {
          this.$notify({
            group: "notification",
            type: "error",
            title: "ERROR",
            text: "Please fill all required data."
          });
        }
      });
    },
    SaveShopOwner: async function() {
      await this.Save_Shop_Owner({
        opening_timings: this.opening_timings,
        client_sex: this.client_sex,
        client_first_name: this.client_first_name,
        client_last_name: this.client_last_name,
        client_zip_code: this.client_zip_code,
        client_street: this.client_street,
        client_house_number: this.client_house_number,
        client_st_nr: this.client_st_nr,
        client_umst_id: this.client_umst_id,
        shop_email: this.shop_email,
        shop_password: this.shop_password,
        shop_re_password: this.shop_re_password,
        shop_street: this.shop_street,
        shop_details: this.shop_details,
        shop_house_number: this.shop_house_number,
        shop_zip_code: this.shop_zip_code,
        hrb_no: this.hrb_no
      });
      // this.formStep=5;
    },

    FormStepChange: function(step) {
      this.formStep = step;
    },
    onSearch(search, loading) {
      if (!search) {
        return;
      }
      loading(true);
      this.search(loading, search, this);
    },
    search: _.debounce((loading, search, vm) => {
      fetch(
        `${process.env.VUE_APP_API_BASE_URL}zipcode/search?q=${escape(search)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer PPLoEAOwBX3tKrmI9IDz8ShndcbUEV8uepcQG8hoQI66xqbJMj9rfzAXrChn"
          }
        }
      ).then(res => {
        res.json().then(json => {
          vm.ZIPCODE_LIST = json.data;
        });
        loading(false);
      });
    }, 350),
    setData(val) {
      let zipcode = this.ZIPCODE_LIST.find(d => d.zipcode_id == val);
      // this.shop_zip_code = zipcode.zipcode + " - " + zipcode.name;
    },
    ...mapActions({
      Save_Shop_Owner: "Save_Shop_Owner_Information",
      Get_Data: "Get_Services_and_Subservices",
      getPartyServices: "GET_PARTY_SERVICES"
    })
  },
  mounted() {
    this.Get_Data();
    this.getPartyServices();
  },
  created: function() {
    $(document).ready(function() {
      $("[data-mask]").inputmask();
    });
  }
};
</script>

<style scoped>
.wizard li {
  width: 33% !important;
}
.error {
  font-size: 14px !important;
}
.v-select {
  height: 34px;
}
.vs__dropdown-toggle {
  padding: 4px 2px 4px 5px !important;
  border-radius: 0px !important;
}
.vs__open-indicator {
  display: none;
}

.vs__dropdown-option--highlight {
  background: #70ad47 !important;
}


.showPasswordButton{
    position: absolute;
    top: 29px;
    right: 16px;
    padding: 6px 4px;
    margin-right: 12px;
    cursor: pointer;
}
</style>