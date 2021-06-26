<template>
  <div class="Home">
    <notifications group="notification" class="notifications" />
    <!-- Main content -->
    <section class="content">
      <div class="form-tab-widget">
        <div
          class="box box-info"
          style="padding-top: 10px; padding-left: 20px; padding-right: 20px;"
        >
          <div class="row">
            <div class="col-md-12">
              <div class="box-header with-border">
                <h3 class="box-title">Select Shop</h3>
              </div>
            </div>
            <div class="col-md-12">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Shop ID</label>
                  <select class="form-control" v-on:change="get_shop_name" v-model="shop_id">
                    <option selected disabled value>Select SHOP</option>
                    <option
                      v-for="(item,index) in GET_SHOP_IDS"
                      :key="item+index+'121298129'"
                    >{{item}}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Shop Name</label>
                  <input
                    disabled
                    v-model="GET_shop_name"
                    class="form-control"
                    placeholder="Type Here"
                    type="text"
                  />
                </div>
              </div>
              <!-- <div class="col-md-4">
        <div class="form-group">
          <label class="box-title">Select Shop</label>  
        
            
          </div>
        </div>
              -->
            </div>
          </div>
          <br />
        </div>
        <div class="box box-success" style="padding: 10px">
          <div class="row">
            <div class="col-md-12">
              <div class="box-header with-border">
                <h3 class="box-title">POS Price</h3>
              </div>
            </div>
          </div>
          <br />
          <div class="row w-100">
            <div class="col-md-6">
              <label class>
                <iradio
                  v-model="commission_type.type"
                  v-bind:YamiComissionFree="CommissionTypeFree"
                  name="shopCommission"
                  setValue="free"
                ></iradio>&nbsp;&nbsp; Free
              </label>
            </div>

            <!-- <div class="col-md-3">
        <label class="">
          <iradio v-model="commission_type.type" v-bind:YamiComissionFix="CommissionTypeFix" name="shopCommission" setValue="fix"></iradio>
          &nbsp;&nbsp; Fix
        </label>
        <div class="fix_option fild_option" style="display:none;margin-left:-320px;" :class="{'show' : commission_type.type == 'fix'}">
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4" style="padding: 0 6%;">
                    <div class="form-group">
                        <label>Fixed fild</label>
                        <input v-model="commission_type.fixed_amount" type="text" placeholder="How Much" class="form-control input-sm">
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
            </div>-->
            <div class="col-md-3">
              <label class>
                <iradio
                  v-model="commission_type.type"
                  v-bind:YamiComissionMonthlyFix="CommissionTypeMonthlyFix"
                  name="shopCommission"
                  setValue="monthly"
                ></iradio>&nbsp;&nbsp; Monthly Fix
              </label>
            </div>
          </div>
          <template v-if="errors.shopCommission">
            <span class="text-danger fa fa-close form-control-feedback"></span>
            <div
              class="text-danger"
              v-for="(errorMsg, index) in errors.shopCommission"
              :key="index"
            >{{ errorMsg }}</div>
          </template>

          <div
            class="date_picker_option fild_option"
            style="display: none;"
            :class="{'show' : commission_type.type == 'free'}"
          >
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>Start Time</label>
                  <input
                    v-model="commission_type.start_time"
                    class="datepicker form-control"
                    data-date-format="mm/dd/yyyy"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>End Time</label>
                  <input
                    v-model="commission_type.end_time"
                    class="datepicker form-control"
                    data-date-format="mm/dd/yyyy"
                  />
                </div>
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>

          <div
            class="montlhy_option fild_option"
            style="display:none;"
            :class="{'show' : commission_type.type == 'monthly'}"
          >
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4" style="padding: 0 6%;">
                <div class="form-group">
                  <label>Monhtly Fixed type</label>
                  <input
                    v-model="commission_type.monthly_fixed_amount"
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
          class="box box-warning"
          style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
        >
          <div class="row">
            <div class="col-md-12">
              <div class="box-header with-border">
                <h3 class="box-title">POS Logo</h3>
              </div>
            </div>
          </div>

          <br />
          <div class="row">
            <FileUploader v-bind:setLOGO="GETIMG"></FileUploader>
          </div>
          <template v-if="errors">
            <span class="text-danger fa fa-close form-control-feedback"></span>
            <div
              class="text-danger"
              v-for="(errorMsg, index) in errors.shopLogo"
              :key="index"
            >{{ errorMsg }}</div>
          </template>
          <div class="col-sm-2"></div>
        </div>

        <div
          class="box box-warning"
          style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
        >
          <div class="row">
            <div class="col-md-12">
              <div class="box-header with-border">
                <h3 class="box-title">USB Stick</h3>
              </div>
            </div>
          </div>

          <br />

          <div class="row">
            <section class="usb_stick_animation">
              <div id="reading-key">
                <div id="key">
                  <span></span>
                  <span></span>
                </div>
                <div id="reading-animation">
                  <span></span>
                </div>
              </div>
            </section>
          </div>

          <div class="col-sm-2"></div>
        </div>

        <div
          class="box box-success"
          style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
        >
          <div class="row">
            <div class="col-md-12">
              <div class="box-header with-border">
                <h3 class="box-title">Generate Key</h3>
              </div>
            </div>
          </div>

          <br />

          <div class="row" style="text-align:center;">
            <h1>Enter Number To Generate The Serial</h1>

            <input
              type="text"
              class="input generateKeyInput"
              placeholder="Must Be Namber"
              @keyup.enter="GenerateSerial()"
              onfocus="if(this.placeholder != '') {this.placeholder = '';}"
              onblur="if(this.placeholder === '') {this.placeholder = 'Must Be Number';}"
            />

            <textarea readonly class="Show generateKeyTextarea"></textarea>
          <div class="row">
            <div class="col-md-8">
              <button @click="GenerateSerial()" class="generateKeyBtn" style="margin-right: 15%;">Genrate</button>
            </div>
            <div class="col-md-4">
              <button type="button" class="btn btn-primary save_data" >Save</button>
            </div>
          </div>

          </div>

          <div class="col-sm-2"></div>
        </div>

        <div
          class="box box-info"
          style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;"
        >
          <div class="row">
            <div class="col-md-12">
              <div class="box-header with-border">
                <h3 class="box-title">Login Details</h3>
              </div>
            </div>

            <br />
            <div class="col-md-12">
              <div class="col-md-4">
                <div class="form-group">
                  <label>Username</label>
                  <input
                    v-model="pos_auth.username"
                    type="text"
                    placeholder="Type a name ..."
                    class="form-control input-sm"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Password</label>
                  <input
                    v-model="pos_auth.password"
                    type="password"
                    placeholder="Type a name ..."
                    class="form-control input-sm"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Reset password</label>
                  <input
                    v-model="pos_auth.password_confirmation"
                    type="password"
                    placeholder="Type a name ..."
                    class="form-control input-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-right">
          <button
            type="button"
            :disabled="disableBtn"
            class="btn btn-primary save_data"
            @click.prevent="Save_Data()"
          >Add POS</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import select2 from "@/components/select2.vue";
import iradio from "@/components/iradio.vue";
import CKEditor from "@/components/CKEditor";
import FileUploader from "@/components/FileUploader.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "AddPOSForm",
  components: {
    select2,
    iradio,
    CKEditor,
    FileUploader
  },
  computed: {
    ...mapGetters(["GET_SHOP_IDS", "GET_shop_name"]),
    ...mapState(["ADD_POS_SUCCESS"])
  },
  data: function() {
    return {
      shop_id: "",
      disableBtn: false,
      pos_logo: "",
      commission_type: {
        type: null,
        start_time: null,
        end_time: null,
        percentage_type: null,
        fixed_amount: null,
        monthly_fixed_amount: null,
        commission_name: "pos"
      },
      pos_auth: {
        username: "",
        password: "",
        password_confirmation: ""
      },
      errors: {}
    };
  },
  created: function() {
    this.$store.watch(
      state => state.ADD_POS_SUCCESS,
      async value => {
        console.log("watching aksalksla");
        console.log(value);
        if (value === true) {
          console.log("notify congratulations");

          this.$notify({
            group: "notification",
            type: "success",
            title: "Success",
            text: "Created New POS Successfully,"
          });

          setTimeout(() => {
            location.reload();
          }, 5000);
        } else {
          this.disableBtn = false;
          this.$notify({
            group: "notification",
            type: "error",
            title: "failure",
            text: "Enter Correct Data,"
          });
        }
      }
    );
    // Do whatever makes sense now

    $(document).ready(function() {
      $("[data-mask]").inputmask();
    });
  },
  methods: {
    ...mapActions({
      Save_POS: "Save_POS",
      GET_SHOP_NAME: "GET_SHOP_NAME",
      GET_SHOPIDS: "GET_SHOPIDS",
      setNull: "SET_NULL_POS"
    }),
    get_shop_name() {
      console.log("getting shop name");
      console.log("shop_id:" + this.shop_id);
      this.GET_SHOP_NAME(this.shop_id);
    },
    async CommissionTypeFree() {
      this.commission_type.percentage_type = "";
      this.commission_type.fixed_amount = "";
      this.commission_type.monthly_fixed_amount = "";
    },
    async CommissionTypePercentage() {
      this.commission_type.start_time = "";
      this.commission_type.end_time = "";
      this.commission_type.fixed_amount = "";
      this.commission_type.monthly_fixed_amount = "";
    },
    async CommissionTypeFix() {
      this.commission_type.start_time = "";
      this.commission_type.end_time = "";
      this.commission_type.percentage_type = "";
      this.commission_type.monthly_fixed_amount = "";
    },
    async CommissionTypeMonthlyFix() {
      this.commission_type.start_time = "";
      this.commission_type.end_time = "";
      this.commission_type.fixed_amount = "";
      this.commission_type.percentage_type = "";
    },
    async GETIMG(value) {
      console.log("dskjdksj");
      console.log(value);
      this.pos_logo = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

      console.log(this.pos_logo);
    },
    GenerateSerial() {
      var chars =
          "A1a2B3b4C5c6D7d8E9e0F1f2G3g4H5h6I7i8J9j0K1k2M3m4N5n6L7l8O9o0P1p2Q3q4R5r6S7s8T9t0V1v2W3w4XxYyZz",
        length = document.getElementsByClassName("generateKeyInput")[0].value, // To Specifies The Length of The Serial
        RandomNumber,
        RandomSerial = "",
        i;

      for (i = 0; i < length; i++) {
        RandomNumber = Math.floor(Math.random() * chars.length); // To Make Random Number
        RandomSerial += chars.slice(RandomNumber, RandomNumber + 4) + "-"; // To Generate The Serial

        var Serial = RandomSerial.slice(0, RandomSerial.length - 1);

        document.getElementsByClassName(
          "generateKeyTextarea"
        )[0].innerHTML = Serial; // To Display The Serial
      }
    },

    Save_Data() {
      this.disableBtn = true;
      setTimeout(() => {
        console.log(this.pos_logo);
        this.Save_POS({
          shop_id: this.shop_id,
          commission_type: this.commission_type,
          pos_auth: this.pos_auth,
          pos_logo: this.pos_logo
        });
      }, 3000);
    }
  },
  mounted() {
    this.GET_SHOPIDS();
  }
};
</script>

<style>
.usb_stick_animation {
  /* padding: 100px; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* position: relative; */
  /* -webkit-box-shadow: 0 5px 15px 0 rgba(0,0,0,.1); */
  /* box-shadow: 0 5px 15px 0 rgba(0,0,0,.1); */
  /* top: 50%; */
  /* left: 50%; */
  /* -webkit-transform: translateX(-50%) translateY(-50%); */
}

#reading-key {
  position: relative;
  width: 54px;
  margin: 0 auto;
}

#key {
  width: 54px;
  height: 145px;
  background: #fefefe;
  position: relative;
  box-shadow: inset 0 0 0 2px #d9d9de, inset 0 0 0 5px #f4f4f5,
    inset 0 -50px 0 0 #f4f4f5;
  -webkit-border-radius: 1px;
  -webkit-border-bottom-right-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -moz-border-radius: 1px;
  -moz-border-radius-bottomright: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-radius: 1px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

#key::after,
#key::before,
#key span::after {
  content: "";
  display: block;
  position: absolute;
}

#key::after {
  width: 20px;
  height: 20px;
  background: #fff;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
  box-shadow: inset 0 0 0 2px #ddd;
}

#key span {
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
}

#key span,
#key span::before {
  width: 6px;
  height: 22px;
  background: #e5c499;
  display: block;
  border-radius: 6px;
}

#key span:nth-of-type(1) {
  margin-left: -5px;
}

#key span:nth-of-type(2) {
  margin-left: 5px;
}

#key span::before {
  content: "";
  position: absolute;
  top: 0;
  margin-left: -10px;
}

#key span:nth-of-type(2)::before {
  margin-left: 10px;
}

#key span::before {
  content: "";
}

#reading-animation {
  width: 140%;
  height: 4px;
  border-radius: 4px;
  background: #009de0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: reading-animation 2s infinite;
  opacity: 0.5;
}

@keyframes reading-animation {
  0% {
    top: 0%;
    opacity: 0.5;
  }

  25%,
  75% {
    opacity: 1;
  }

  50% {
    top: 100%;
    opacity: 0.5;
  }
}

#reading-animation span {
  display: block;
  width: 100%;
  height: 15px;
  background: -moz-linear-gradient(
    top,
    rgba(0, 157, 224, 0) 0%,
    rgba(0, 157, 224, 1) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 157, 224, 0) 0%,
    rgba(0, 157, 224, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 157, 224, 0) 0%,
    rgba(0, 157, 224, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00009de0', endColorstr='#009de0',GradientType=0 );
  margin-top: 3px;
  opacity: 0.2;
  opacity: 0;
  animation: reading-animation__span 2s infinite;
  transform: rotate(180deg);
  -webkit-filter: blur(1px);
}

@keyframes reading-animation__span {
  0% {
    opacity: 0;
    transform: rotate(0deg);
    margin-top: -30px;
    height: 30px;
  }

  25% {
    opacity: 0.5;
    height: 15px;
    margin-top: -15px;
  }

  50% {
    opacity: 0;
    transform: rotate(0deg);
    margin-top: -5px;
    height: 5px;
  }

  51% {
    transform: rotate(180deg);
    margin-top: 3px;
    height: 30px;
  }

  75% {
    opacity: 0.5;
    height: 15px;
  }

  100% {
    opacity: 0;
    height: 5px;
  }
}

.generateKeyInput {
  height: 30px;
  font: bold 16px tahoma;
  display: block;
  margin: 50px auto 0;
  text-align: center;
}

.generateKeyTextarea {
  width: 80%;
  margin: 50px 20px 20px;
  background: white;
  border-radius: 30px;
  text-align: center;
  color: black;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  outline: none;
  padding-top: 25px;
  font-family: tahoma;
  font-size: 16px;
}

.generateKeyBtn {
  width: 150px;
  height: 40px;
  display: block;
  font: bold 16px tahoma;
  border-radius: 15px;
  border: none;
  margin: 0 auto;
  background-color: black;
  color: white;
  outline: 0;
  transition: all 0.1s ease-in-out;
  border: 1px solid;
}
.generateKeyBtn:hover {
  background-color: #27ae60;
}

.generateKeyBtn:active {
  transform: translate(0px, 1px);
}
</style>
