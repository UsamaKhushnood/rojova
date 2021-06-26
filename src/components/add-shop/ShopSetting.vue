<template>
  <div>
    <div
      class="box box-success"
      style="padding-top: 10px; "
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">YamiYami Comission</h3>
          </div>
        </div>
      </div>
      <br />
      <div class="row w-100">
        <div class="col-md-4">
          <label class>
            <iradio
              v-model="yami_comiision.type"
              v-bind:YamiComissionFree="YamiComissionFree"
              name="shopCommission"
              setValue="free"
            ></iradio>&nbsp;&nbsp; Free
          </label>
        </div>
        <div class="col-md-4">
          <label class>
            <iradio
              v-model="yami_comiision.type"
              v-bind:YamiComissionPercentage="YamiComissionPercentage"
              name="shopCommission"
              setValue="percentage"
            ></iradio>&nbsp;&nbsp; Per Order
          </label>
        </div>
        <div class="col-md-4">
          <label class>
            <iradio
              v-model="yami_comiision.type"
              v-bind:YamiComissionFix="YamiComissionFix"
              name="shopCommission"
              setValue="fix"
            ></iradio>&nbsp;&nbsp; Per Month
          </label>
        </div>

        <!-- <div class="col-md-3">
        <label class="">
          <iradio v-model="yami_comiision.type" v-bind:YamiComissionMonthlyFix="YamiComissionMonthlyFix" name="shopCommission" setValue="monthly"></iradio>
          &nbsp;&nbsp; Monthly Fix
        </label>
        <div class="montlhy_option fild_option" style="display:none;" :class="{'show' : yami_comiision.type == 'monthly'}">
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4" style="padding: 0 6%;">
                    <div class="form-group">
                        <label>Monhtly Fixed type</label>
                        <input v-model="yami_comiision.monthly_fixed_amount" type="text" placeholder="How Much" class="form-control input-sm">
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
        </div>-->
      </div>
      <template v-if="validation.hasError('yami_comiision.type')">
        <span class="text-danger fa fa-close form-control-feedback"></span>
        <div class="text-danger">{{ validation.firstError('yami_comiision.type') }}</div>
      </template>

      <div
        class="date_picker_option fild_option"
        style="display: none;"
        :class="{'show' : yami_comiision.type == 'free'}"
      >
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3">
            <div class="form-group">
              <label>Start Time</label>
              <input
                type="date"
                v-model="yami_comiision.start_time"
                class="datepicker form-control"
                data-date-format="mm/dd/yyyy"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label>End Time</label>
              <input
                type="date"
                v-model="yami_comiision.end_time"
                class="datepicker form-control"
                data-date-format="mm/dd/yyyy"
              />
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>

      <div
        class="percentages_option fild_option"
        style="display:none;"
        :class="{'show' : yami_comiision.type == 'percentage'}"
      >
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4" style="padding: 0 6%;">
            <div class="form-group">
              <label>Select Percentage</label>
          <select class="form-control" >
            <option selected  value>Percentage value</option>
            <option  value>Percentage value</option>
            <option  value>Percentage value</option>
          </select>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>

      <div
        class="fix_option fild_option"
        style="display:none;"
        :class="{'show' : yami_comiision.type == 'fix'}"
      >
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4" style="padding: 0 6%;">
            <div class="form-group">
              <label>Fixed fild</label>
          <select class="form-control" >
            <option selected  value>Percentage value</option>
            <option  value>Percentage value</option>
            <option  value>Percentage value</option>
          </select>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>

    <div
      class="box box-primary"
      style="padding-bottom: 20px; padding-top: 10px;"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Shop Phone Fax</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div
            :class="!validation.hasError('shop_phone_1')?'form-group':'form-group has-error has-feedback'"
          >
            <label>Shop Phoe</label>
            <input
              v-model="shop_phone_1"
              class="form-control"
              placeholder="+49-511-12345678979"
              type="text"
            />
            <template v-if="validation.hasError('shop_phone_1')">
              <span class="text-danger fa fa-close form-control-feedback"></span>
              <div class="text-danger">{{ validation.firstError('shop_phone_1') }}</div>
            </template>
          </div>
        </div>
        <div class="col-md-6">
          <div
            :class="!validation.hasError('shop_fax_1')?'form-group':'form-group has-error has-feedback'"
          >
            <label>Shop Fax</label>
            <input
              v-model="shop_fax_1"
              class="form-control"
              placeholder="+49-511-12345678979"
              type="text"
            />
            <template v-if="validation.hasError('shop_fax_1')">
              <span class="text-danger fa fa-close form-control-feedback"></span>
              <div class="text-danger">{{ validation.firstError('shop_fax_1') }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div
      class="box box-warning"
      style="padding-top: 10px; "
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Order Transfer</h3>
          </div>
        </div>
      </div>
      <br />
      <div class="row w-100">
        <div class="col-md-3">
          <label class>
            <iradio
              v-model="Order_Transfer.type"
              v-bind:Order_Transfer_UMTS_Printer="Order_Transfer_UMTS_Printer"
              name="oderTrasfer"
              setValue="umtsprinter"
            ></iradio>&nbsp;&nbsp; UMTS Printer
          </label>
        </div>
        <div class="col-md-3">
          <label class>
            <iradio
              v-model="Order_Transfer.type"
              v-bind:Order_Transfer_Mail_to_Fax="Order_Transfer_Mail_to_Fax"
              name="oderTrasfer"
              setValue="mailtofax"
            ></iradio>&nbsp;&nbsp; Mail to Fax
          </label>
        </div>
        <div class="col-md-3">
          <label class>
            <iradio
              v-model="Order_Transfer.type"
              v-bind:Order_Transfer_By_SMS="Order_Transfer_By_SMS"
              name="oderTrasfer"
              setValue="bysms"
            ></iradio>&nbsp;&nbsp; By SMS
          </label>
        </div>
        <div class="col-md-3">
          <label class>
            <iradio
              v-model="Order_Transfer.type"
              v-bind:Order_Transfer_Google_Print="Order_Transfer_Google_Print"
              name="oderTrasfer"
              setValue="googleprint"
            ></iradio>&nbsp;&nbsp; Google Print
          </label>
        </div>
      </div>
      <template v-if="validation.hasError('Order_Transfer.type')">
        <div class="text-danger">{{ validation.firstError('Order_Transfer.type') }}</div>
      </template>

      <div
        class="date_picker_option fild_option"
        style="display: none;"
        :class="{'show' : Order_Transfer.type == 'umtsprinter'}"
      >
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3">
            <div class="form-group">
              <label>Type your Email</label>
              <input v-model="Order_Transfer.email" class="form-control" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label>Type your Fax Number</label>
              <input v-model="Order_Transfer.fax_number" class="form-control" />
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>

      <div
        class="percentages_option fild_option"
        style="display:none;"
        :class="{'show' : Order_Transfer.type == 'mailtofax'}"
      >
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4" style="padding: 0 6%;">
            <div class="form-group">
              <label>Mail to fax</label>
              <input
                v-model="Order_Transfer.mail_to_fax"
                type="text"
                placeholder="How Much"
                class="form-control input-sm"
              />
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>

      <div
        class="fix_option fild_option"
        style="display:none;"
        :class="{'show' : Order_Transfer.type == 'bysms'}"
      >
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4" style="padding: 0 6%;">
            <div class="form-group">
              <label>By SMS</label>
              <input
                v-model="Order_Transfer.by_sms"
                type="text"
                placeholder="How Much"
                class="form-control input-sm"
              />
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>

      <div
        class="montlhy_option fild_option"
        style="display:none;"
        :class="{'show' : Order_Transfer.type == 'googleprint'}"
      >
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4" style="padding: 0 6%;">
            <div class="form-group">
              <label>Google Print</label>
              <input
                v-model="Order_Transfer.google_print"
                type="text"
                placeholder="How Much"
                class="form-control input-sm"
              />
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>

    <div
      class="box box-danger"
      style="padding-top: 10px; "
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Payment Method</h3>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-6 text-center">
          <label class>
            <iradio
              v-model="payment_methods.type"
              v-bind:Payment_Methods_All="Payment_Methods_All"
              name="shopPaymentType"
              setValue="all"
            ></iradio>&nbsp;&nbsp; All Payment Methods
          </label>
        </div>
        <div class="col-md-6 text-center">
          <label class>
            <iradio
              v-model="payment_methods.type"
              v-bind:Payment_Methods_Select="Payment_Methods_Select"
              name="shopPaymentType"
              setValue="selected"
            ></iradio>&nbsp;&nbsp; Select Payment
          </label>
        </div>
        <template v-if="validation.hasError('payment_methods.type')">
          <div class="text-danger">{{ validation.firstError('payment_methods.type') }}</div>
        </template>

        <!-- <div
          class="col-sm-12 all_delivery_option fild_option"
          style="display: none;"
          :class="{'show' : payment_methods.type == 'all' }"
        >
          <div
            class="box box-info"
            style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
          >
            <div class="row">
              <div class="col-md-12">
                <div class="box-header with-border">
                  <h3 class="box-title">Delivery Cost and Deliver Options</h3>
                </div>
              </div>
              <div class="col-md-4">
                <label class>
                  <icheck
                    v-model="payment_methods.cost_and_delivery_options"
                    v-bind:addAllPaymentsMethods="Payment_Methods_Add_All_Payment_Method"
                    v-bind:removeAllPaymentMethod="Payment_Methods_Remove_All_Payment_Method"
                    name="shop-type"
                    setValue="pick up"
                  ></icheck>&nbsp;&nbsp;Pick Up
                </label>
              </div>
              <div class="col-md-4">
                <label class>
                  <icheck
                    v-model="payment_methods.cost_and_delivery_options"
                    v-bind:addAllPaymentsMethods="Payment_Methods_Add_All_Payment_Method"
                    v-bind:removeAllPaymentMethod="Payment_Methods_Remove_All_Payment_Method"
                    name="shop-type"
                    setValue="delivery"
                  ></icheck>&nbsp;&nbsp;Delivery
                </label>
              </div>
              <div class="col-md-4">
                <label class>
                  <icheck
                    v-model="payment_methods.cost_and_delivery_options"
                    v-bind:addAllPaymentsMethods="Payment_Methods_Add_All_Payment_Method"
                    v-bind:removeAllPaymentMethod="Payment_Methods_Remove_All_Payment_Method"
                    name="shop-type"
                    setValue="dine in"
                  ></icheck>&nbsp;&nbsp;Dine in
                </label>
              </div>
            </div>
          </div>
        </div> -->

        <div
          class="col-sm-12 select_payment_option fild_option"
          style="display: none;"
          :class="{'show' : payment_methods.type == 'selected'}"
        >
          <div
            class="box"
            style="padding-bottom: 45px; padding-top: 10px; margin-bottom:0;"
          >
            <div class="row">
              <div class="col-md-12">
                <div class="box-header with-border">
                  <h3 class="box-title">Select Payment Options</h3>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <label class>
                <icheck
                  v-model="payment_methods.payment_options"
                  v-bind:addSelectedPaymentsMethods="Payment_Methods_Add_Select_Payment_Method"
                  v-bind:removeSelectedPaymentMethod="Payment_Options_Remove_Select_Payment_Method"
                  name="shop-type"
                  setValue="cash"
                ></icheck>&nbsp;&nbsp;Cash
              </label>
            </div>
            <div class="col-md-3">
              <label class>
                <icheck
                  v-model="payment_methods.payment_options"
                  v-bind:addSelectedPaymentsMethods="Payment_Methods_Add_Select_Payment_Method"
                  v-bind:removeSelectedPaymentMethod="Payment_Options_Remove_Select_Payment_Method"
                  name="shop-type"
                  setValue="paypal"
                ></icheck>&nbsp;&nbsp;Paypal
              </label>
            </div>
            <div class="col-md-3">
              <label class>
                <icheck
                  v-model="payment_methods.payment_options"
                  v-bind:addSelectedPaymentsMethods="Payment_Methods_Add_Select_Payment_Method"
                  v-bind:removeSelectedPaymentMethod="Payment_Options_Remove_Select_Payment_Method"
                  name="shop-type"
                  setValue="giropay"
                ></icheck>&nbsp;&nbsp;GiroPay
              </label>
            </div>
            <div class="col-md-3">
              <label class>
                <icheck
                  v-model="payment_methods.payment_options"
                  v-bind:addSelectedPaymentsMethods="Payment_Methods_Add_Select_Payment_Method"
                  v-bind:removeSelectedPaymentMethod="Payment_Options_Remove_Select_Payment_Method"
                  name="shop-type"
                  setValue="Bill pay"
                ></icheck>&nbsp;&nbsp;Billpay
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="shopPaymentType=='Selected'">
        <hr />
        <div class="col-md-3">
          <label class>
            <icheck v-model="shopPaymentMethod" name="shopPaymentMethod" setValue="cash"></icheck>&nbsp;&nbsp; Cash
          </label>
        </div>
        <div class="col-md-3">
          <label class>
            <icheck v-model="shopPaymentMethod" name="shopPaymentMethod" setValue="paypal"></icheck>&nbsp;&nbsp; Paypal
          </label>
        </div>
        <div class="col-md-3">
          <label class>
            <icheck v-model="shopPaymentMethod" name="shopPaymentMethod" setValue="giroPay"></icheck>&nbsp;&nbsp; GiroPay
          </label>
        </div>
        <div class="col-md-3">
          <label class>
            <icheck v-model="shopPaymentMethod" name="shopPaymentMethod" setValue="billpay"></icheck>&nbsp;&nbsp; Billpay
          </label>
        </div>
      </div>
      <template v-if="errors.shopPaymentMethod">
        <span class="text-danger fa fa-close form-control-feedback"></span>
        <div
          class="text-danger"
          v-for="(errorMsg, index) in errors.shopPaymentMethod"
          :key="index"
        >{{ errorMsg }}</div>
      </template>
    </div>

    <div
      class="box box-warning"
      style="padding-bottom: 20px; padding-top: 10px;"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="box-header with-border">
            <h3 class="box-title">Payouts</h3>
          </div>
        </div>
      </div>
      <div class="row" style="padding:20px;">
        <div class="col-md-4 text-center">
          <label class>
            <iradio v-model="payouts.schedule" name="shopPayoutSchedule" setValue="daily"></iradio>&nbsp;&nbsp; Daily
          </label>
        </div>
        <div class="col-md-4 text-center">
          <label class>
            <iradio v-model="payouts.schedule" name="shopPayoutSchedule" setValue="weekly"></iradio>&nbsp;&nbsp; Weekly
          </label>
        </div>
        <div class="col-md-4 text-center">
          <label class>
            <iradio v-model="payouts.schedule" name="shopPayoutSchedule" setValue="monthly"></iradio>&nbsp;&nbsp; Monthly
          </label>
        </div>
        <div class="col-md-12 text-center">
          <template v-if="validation.hasError('payouts.schedule')">
            <div class="text-danger">{{ validation.firstError('payouts.schedule') }}</div>
          </template>
        </div>
        <div class="col-md-12">
          <hr />
        </div>
        <div class="row col-md-12" style="text-align:center">
          <div class>
            <div class="col-md-6">
              <label class>
                <iradio
                  v-model="payouts.receiver_option.type"
                  name="shopPayoutReceiverType"
                  setValue="paypal"
                ></iradio>&nbsp;&nbsp; To PayPal
              </label>
            </div>
            <div class="col-md-6">
              <label class>
                <iradio
                  v-model="payouts.receiver_option.type"
                  name="shopPayoutReceiverType"
                  setValue="Bank"
                ></iradio>&nbsp;&nbsp; Bank
              </label>
            </div>
          </div>
          <template v-if="validation.hasError('payouts.receiver_option.type')">
            <span class="text-danger fa fa-close form-control-feedback"></span>
            <div class="text-danger">{{ validation.firstError('payouts.receiver_option.type') }}</div>
          </template>
        </div>

        <div
          v-if="payouts.receiver_option.type=='paypal'"
          class="row bank_payment_option"
          style=" margin-top: 20px;text-align: left;"
        >
          <div class="col-md-12">
            <div
              :class="!validation.hasError('payouts.receiver_option.paypal_id')?'form-group':'form-group has-error has-feedback'"
            >
              <label>Paypal ID</label>
              <input
                v-model="payouts.receiver_option.paypal_id"
                class="form-control"
                placeholder="Owner Name"
                type="text"
              />
              <template v-if="validation.hasError('payouts.receiver_option.paypal_id')">
                <span class="text-danger fa fa-close form-control-feedback"></span>
                <div
                  class="text-danger"
                >{{ validation.firstError('payouts.receiver_option.paypal_id') }}</div>
              </template>
            </div>
          </div>
        </div>

        <div
          v-if="payouts.receiver_option.type=='Bank'"
          class="row bank_payment_option"
          style=" margin-top: 20px;text-align: left;"
        >
          <div class="col-md-6">
            <div
              :class="!validation.hasError('payouts.receiver_option.owner_name')?'form-group':'form-group has-error has-feedback'"
            >
              <label>Owner Name</label>
              <input
                v-model="payouts.receiver_option.owner_name"
                class="form-control"
                placeholder="Owner Name"
                type="text"
              />
              <template v-if="validation.hasError('payouts.receiver_option.owner_name')">
                <span class="text-danger fa fa-close form-control-feedback"></span>
                <div
                  class="text-danger"
                >{{ validation.firstError('payouts.receiver_option.owner_name') }}</div>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div
              :class="!validation.hasError('payouts.receiver_option.bank_name')?'form-group':'form-group has-error has-feedback'"
            >
              <label>Bank Name</label>
              <input
                v-model="payouts.receiver_option.bank_name"
                class="form-control"
                placeholder="Bank Name"
                type="text"
              />
              <template v-if="validation.hasError('payouts.receiver_option.bank_name')">
                <span class="text-danger fa fa-close form-control-feedback"></span>
                <div
                  class="text-danger"
                >{{ validation.firstError('payouts.receiver_option.bank_name') }}</div>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div
              :class="!validation.hasError('payouts.receiver_option.iban')?'form-group':'form-group has-error has-feedback'"
            >
              <label>IBAN</label>
              <input
                v-model="payouts.receiver_option.iban"
                class="form-control"
                placeholder="Type Here"
                type="text"
              />
              <template v-if="validation.hasError('payouts.receiver_option.iban')">
                <span class="text-danger fa fa-close form-control-feedback"></span>
                <div class="text-danger">{{ validation.firstError('payouts.receiver_option.iban') }}</div>
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div
              :class="!validation.hasError('payouts.receiver_option.bic')?'form-group':'form-group has-error has-feedback'"
            >
              <label>BIC</label>
              <input
                v-model="payouts.receiver_option.bic"
                class="form-control"
                placeholder="Type Here"
                type="text"
              />
              <template v-if="validation.hasError('payouts.receiver_option.bic')">
                <span class="text-danger fa fa-close form-control-feedback"></span>
                <div class="text-danger">{{ validation.firstError('payouts.receiver_option.bic') }}</div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ul class="list-inline pull-right">
      <li class="completed">
        <button
          type="button"
          class="btn btn-default prev-step"
          @click.prevent="PreviousStep()"
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
import { mapActions } from "vuex";
export default {
  name: "ShopSetting",
  components: {
    iradio,
    icheck
  },
  data: function() {
    return {
      nextStep: 4,
      previousStep: 2,
      errors: {},
      shop_phone_1: "",
      shop_fax_1: "",
      Order_Transfer: {
        type: null,
        email: null,
        fax_number: null,
        mail_to_fax: null,
        by_sms: null,
        google_print: null
      },
      yami_comiision: {
        type: null,
        start_time: null,
        end_time: null,
        percentage_type: null,
        fixed_amount: null,
        monthly_fixed_amount: null
      },
      payment_methods: {
        type: "",
        cost_and_delivery_options: [],
        payment_options: []
      },
      payouts: {
        schedule: null,
        method: null,
        receiver_option: {
          type: null, //to paypal or to bank
          owner_name: null,
          bank_name: null,
          iban: null,
          bic: null,
          paypal_id: null
        }
      },
      shopCommission: "free",
      shopPaymentType: "all",
      shopOrderTransfar: [],
      shopPaymentMethod: [],
      shopDeliveryOptions: [],
      shopDeliveryCost: 0.0,
      shopMiniOderCost: 0.0,
      shopCharge: 0.0,
      shopPayoutSchedule: "daily",
      shopPayoutType: "paypal"
    };
  },
  validators: {
    "yami_comiision.type": function(value) {
      return this.$Validator
        .value(value)
        .required("Commision type is required.");
    },
    shop_phone_1: function(value) {
      return this.$Validator.value(value).required("Shop phone is required.");
    },
    shop_fax_1: function(value) {
      return this.$Validator.value(value).required("Shop fax is required.");
    },
    "Order_Transfer.type": function(value) {
      return this.$Validator
        .value(value)
        .required("Order transfer is required.");
    },
    "payment_methods.type": function(value) {
      return this.$Validator
        .value(value)
        .required("Payment method is required.");
    },
    "payouts.schedule": function(value) {
      return this.$Validator.value(value).required("Payouts is required.");
    },
    "payouts.receiver_option.type": function(value) {
      return this.$Validator
        .value(value)
        .required("Payout method is required.");
    },
    "payouts.receiver_option.owner_name": function(value) {
      if (this.payouts.receiver_option.type == "Bank") {
        return this.$Validator.value(value).required("Owner name is required.");
      }
    },
    "payouts.receiver_option.bank_name": function(value) {
      if (this.payouts.receiver_option.type == "Bank") {
        return this.$Validator.value(value).required("Bank name is required.");
      }
    },
    "payouts.receiver_option.iban": function(value) {
      if (this.payouts.receiver_option.type == "Bank") {
        return this.$Validator.value(value).required("IBAN is required.");
      }
    },
    "payouts.receiver_option.bic": function(value) {
      if (this.payouts.receiver_option.type == "Bank") {
        return this.$Validator.value(value).required("BIC is required.");
      }
    },
    "payouts.receiver_option.paypal_id": function(value) {
      if (this.payouts.receiver_option.type == "paypal") {
        return this.$Validator.value(value).required("Paypal ID is required.");
      }
    }
  },
  methods: {
    ...mapActions({
      Save_Shop_Settings: "Save_Shop_Settings"
    }),
    async Payment_Methods_All() {
      //  this.payment_methods.payment_options=[];
      //  console.log(this.payment_methods);
    },
    async Payment_Methods_Select() {
      // console.log(this.payment_methods)
      //  this.payment_methods.cost_and_delivery_options=[];
    },
    async Payment_Methods_Add_All_Payment_Method(value) {
      this.payment_methods.cost_and_delivery_options.push(value);
    },
    async Payment_Methods_Add_Select_Payment_Method(value) {
      this.payment_methods.payment_options.push(value);
    },
    async Payment_Methods_Remove_All_Payment_Method(value) {
      this.payment_methods.cost_and_delivery_options = await this.payment_methods.cost_and_delivery_options.filter(
        item => {
          if (item != value) {
            return true;
          }
        }
      );
    },
    async Payment_Options_Remove_Select_Payment_Method(value) {
      this.payment_methods.payment_options = await this.payment_methods.payment_options.filter(
        item => {
          if (item != value) {
            return true;
          }
        }
      );
    },
    async YamiComissionFree() {
      this.yami_comiision.percentage_type = "";
      this.yami_comiision.fixed_amount = "";
      this.yami_comiision.monthly_fixed_amount = "";
    },
    async YamiComissionPercentage() {
      this.yami_comiision.start_time = "";
      this.yami_comiision.end_time = "";
      this.yami_comiision.fixed_amount = "";
      this.yami_comiision.monthly_fixed_amount = "";
    },
    async YamiComissionFix() {
      this.yami_comiision.start_time = "";
      this.yami_comiision.end_time = "";
      this.yami_comiision.percentage_type = "";
      this.yami_comiision.monthly_fixed_amount = "";
    },
    async YamiComissionMonthlyFix() {
      this.yami_comiision.start_time = "";
      this.yami_comiision.end_time = "";
      this.yami_comiision.fixed_amount = "";
      this.yami_comiision.percentage_type = "";
    },

    async Order_Transfer_UMTS_Printer() {
      this.Order_Transfer.mail_to_fax = "";
      this.Order_Transfer.by_sms = "";
      this.Order_Transfer.google_print = "";
    },
    async Order_Transfer_UMTS_Printer() {
      this.Order_Transfer.mail_to_fax = "";
      this.Order_Transfer.by_sms = "";
      this.Order_Transfer.google_print = "";
    },

    async Order_Transfer_By_SMS() {
      this.Order_Transfer.mail_to_fax = "";
      this.Order_Transfer.email = "";
      this.Order_Transfer.fax_number = "";
      this.Order_Transfer.google_print = "";
    },

    async Order_Transfer_Mail_to_Fax() {
      this.Order_Transfer.email = "";
      this.Order_Transfer.fax_number = "";
      this.Order_Transfer.by_sms = "";
      this.Order_Transfer.google_print = "";
    },

    async Order_Transfer_Google_Print() {
      this.Order_Transfer.email = "";
      this.Order_Transfer.fax_number = "";
      this.Order_Transfer.by_sms = "";
      this.Order_Transfer.mail_to_fax = "";
    },

    async finalStep(step) {
      this.$validate().then(success => {
        if (success) {
          this.Save_Shop_Settings({
            yami_comiision: this.yami_comiision,
            order_transfer: this.Order_Transfer,
            payment_methods: this.payment_methods,
            payouts: this.payouts,
            shop_phone_1: this.shop_phone_1,
            shop_fax_1: this.shop_fax_1
          });

          let vm = this;
          vm.$emit("stepChange", vm.nextStep);
        }
      });
    },
    async PreviousStep() {
      this.$emit("stepChange", this.previousStep);
    }
  }
};
</script>


<style>

  .row{
    margin-left:0 !important;
    margin-right:0 !important;
  }

.date_picker_option.fild_option {
  margin-top: 10px;
  width: 100%;
}
.fild_option {
  background: #fff;
  padding: 10px 15px 5px;
  margin-top: 10px;
  z-index: 9;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 95%;
  margin-bottom: 0px !important;
  height: 100%;
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
.percentages_option.fild_option.show {
  width: 100%;
}
.fix_option.fild_option.show {
  width: 100%;
}
.montlhy_option.fild_option.show {
  width: 100%;
}
.all_delivery_option.fild_option {
  width: 100%;
  padding-top: 0;
  box-shadow: none;
  text-align: left;
}
.select_payment_option.fild_option.show {
  width: 100%;
  padding-top: 0;
  box-shadow: none;
  text-align: left;
}
.fild_option.payouts_option.daly {
  position: relative;
  width: 1000px;
  left: 60px;
}
.fild_option.payouts_option.wek {
  position: relative;
  width: 1000px;
  left: -340px;
}
.fild_option.payouts_option.mon {
  position: relative;
  width: 1000px;
  left: -740px;
}
</style>