<template>
  <div class="Home">
    <section class="content-header">
      <h1>
        Add Shop Discount
        <small>Marketing</small>
      </h1>
      <ol class="breadcrumb">
        <li><router-link to="/"><i class="fa fa-dashboard"></i> Home</router-link></li>
        <li class="active">Add Shop Discount</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="box">
        <div class="box-body">
          <div class="form-tab-widget">
            <div class="wizard-inner">
              <ul class="nav nav-tabs wizard" role="tablist">
                <li role="presentation" :class="formStep==1?'active':''+formStep>1?'completed':''">
                  <a href="#" @click.prevent="formStep=1">
                    <span class="nmbr">1</span>Discount
                  </a>
                </li>

                <li role="presentation" :class="formStep==2?'active':''+formStep>2?'completed':''">
                  <a href="#" @click.prevent="formStep=2">
                    <span class="nmbr">2</span>Discount Setting
                  </a>
                </li>
                <li role="presentation" :class="formStep==3?'active':''+formStep>3?'completed':''">
                  <a href="#" @click.prevent="formStep=3">
                    <span class="nmbr">3</span>Discount Date
                  </a>
                </li>
              </ul>
            </div>
            <div class="tab-content">
              <div :class="formStep==1?'active tab-pane':'tab-pane'" role="tabpanel">
                <h4 class="page-header">Discount</h4>
                <div class="row">
                  <div class="col-md-8 col-md-offset-2">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Coupon Title</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Discount Title">
                    </div>
                  </div>
                  <div class="col-md-12"><hr/></div>
                  <div class="col-md-8 col-md-offset-2">
                    <div class="form-group">
                      <label>Shop</label>
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
                  <div class="col-md-12"><hr/></div>
                  <div class="col-md-8 col-md-offset-2">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                      <label>
                        <iradio v-model="r3" name="how_much" setValue="%"></iradio>
                        Select %
                      </label>
                    </div>
                    <div class="col-md-4">
                      <label>
                        <iradio v-model="r3" name="how_much" setValue="€"></iradio>
                        Select €
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12"><hr/></div>
                  <div class="col-md-8 col-md-offset-2" v-show="r3">
                    <div class="col-md-2">
                      <label>
                        <icheck v-model="r5" name="select_much" setValue="Checked"></icheck>
                        Free
                      </label>
                    </div>
                    <div class="col-md-10">
                      <input type="text" class="form-control"  placeholder="How Much">
                    </div>
                  </div>
                  <div class="col-md-12" v-show="r3"><hr/></div>
                </div>
                <div class="text-right">
                  <button type="button" class="btn btn-primary next-step" @click.prevent="formStep=2">Click to go next</button>
                </div>
              </div>
              <div :class="formStep==2?'active tab-pane':'tab-pane'" role="tabpanel">
                <h4 class="page-header">Discount Settings</h4>
                <div class="row">
                  <div class="col-md-4">Coupon For Shop Type</div>
                  <div class="col-md-8">
                    <div class="form-group">
                      <label class="col-md-4">
                        <iradio v-model="r3" name="how_much" setValue="Bringdieste"></iradio>
                        Bringdieste
                      </label>
                      <label class="col-md-4">
                        <iradio v-model="r3" name="how_much" setValue="Party Service"></iradio>
                        Party Service
                      </label>
                      <label class="col-md-4">
                        <iradio v-model="r3" name="how_much" setValue="Restaurants"></iradio>
                        Restaurants
                      </label>
                      <label class="col-md-4">
                        <br/>
                        <iradio v-model="r3" name="how_much" setValue="Takeaway"></iradio>
                        Takeaway
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12"><hr/></div>
                  <div class="col-md-4">Coupon For Shop Services</div>
                  <div class="col-md-8">
                    <div class="form-group">
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
                  <div class="col-md-4">Coupon For User Type</div>
                  <div class="col-md-8">
                    <div class="form-group">
                      <label class="col-md-4">
                        <iradio v-model="r3" name="how_much" setValue="All User"></iradio>
                        All User
                      </label>
                      <label class="col-md-4">
                        <iradio v-model="r3" name="how_much" setValue="My User"></iradio>
                        My User
                      </label>
                      <label class="col-md-4">
                        <iradio v-model="r3" name="how_much" setValue="First Order"></iradio>
                        First Order
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12"><hr/></div>
                  <div class="col-md-4">Coupon Type</div>
                  <div class="col-md-8">
                    <div class="form-group">
                      <label class="col-md-4">
                        <iradio v-model="r3" name="how_much" setValue="One Time"></iradio>
                        One Time
                      </label>
                      <label class="col-md-4">
                        <iradio v-model="r3" name="how_much" setValue="Always"></iradio>
                        Always
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12"><hr/></div>
                </div>
                <div class="text-right">
                  <button type="button" class="btn btn-default prev-step" @click.prevent="formStep=1">Previous</button>
                  <button type="button" class="btn btn-primary next-step" @click.prevent="formStep=3">Click to go next</button>
                </div>
              </div>
              <div :class="formStep==3?'active tab-pane':'tab-pane'" role="tabpanel">
                <h4 class="page-header">Discount Dates</h4>
                <div class="row">
                  <div class="col-md-4">Start Date</div>
                  <div class="col-md-8">
                    <div class="input-group">
                      <div class="input-group-addon">
                        <i class="fa fa-calendar"></i>
                      </div>
                      <input type="text" class="form-control" v-model="date" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask>
                    </div>
                    <span class="text-muted help-block">dd/mm/yyyy</span>
                  </div>
                  <div class="col-md-12"><hr/></div>
                  <div class="col-md-4">End Date</div>
                  <div class="col-md-8">
                    <div class="input-group">
                      <div class="input-group-addon">
                        <i class="fa fa-calendar"></i>
                      </div>
                      <input type="text" class="form-control" v-model="date" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask>
                    </div>
                    <span class="text-muted help-block">dd/mm/yyyy</span>
                  </div>
                  <div class="col-md-12"><hr/></div>
                  <div class="col-md-4">Description</div>
                  <div class="col-md-8">
                    <CKEditor v-model="textEdit"></CKEditor>
                  </div>
                  <div class="col-md-12"><hr/></div>
                </div>
                <div class="text-right">
                  <button type="button" class="btn btn-default prev-step" @click.prevent="formStep=2">Previous</button>
                  <button type="button" class="btn btn-success next-step" @click.prevent="formStep=4">Submit</button>
                </div>
              </div>
              <div :class="formStep==4?'active tab-pane':'tab-pane'" role="tabpanel">
                <div style="text-align: center;margin-top: 25vh;margin-bottom: 25vh;">
                  <h2>Complete</h2>
                  <p>You have successfully completed all steps.</p>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import select2 from '@/components/select2.vue'
import iradio from '@/components/iradio.vue'
import icheck from '@/components/icheck.vue'
import CKEditor from '@/components/CKEditor'

export default {
  name: 'MarketingAddShopDiscount',
  components: {
    select2, iradio, icheck, CKEditor
  },
  data: function () {
    return {
      formStep: 1,
      ShopStep: 'Alabama',
      r3: null,
      r5: '',
      date: '',
      textEdit: ''
    }
  },
  created: function () {
    $(document).ready(function () {
      $('[data-mask]').inputmask()
    })
  }
}
</script>
