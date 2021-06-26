<template>
<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">
    <!-- Sidebar user panel -->
    <div class="user-panel">
      <div class="pull-left image">
        <!-- <img v-if="authUser.avater" :src="authUser.avater" class="img-circle">
        <img v-else class="img-circle place-holder-shimmer"> -->
      </div>
      <div class="pull-left info">
        <!-- <p :class="authUser.first_name&&authUser.last_name?'width-100':'width-100 place-holder-shimmer'">
          {{ authUser.first_name }}
          {{ authUser.last_name }}
        </p> -->
        <a href="#" @click.prevent>
          <!-- <span v-if="authUser.is_online">
            <i class="fa fa-circle text-success"></i> Online
          </span>
          <span v-if="!authUser.is_online">
            <i class="fa fa-circle text-defa"></i> Offline
          </span> -->
        </a>
      </div>
    </div>

    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu" data-widget="tree">

      <li :class="checkPath('Home')?'active':''">
        <router-link :to="getPath('Home')"><i class="fa fa-dashboard"></i> <span>Dashboard</span></router-link>
      </li>
        <li :class="checkPath('ReportsUserTicket')
          ||checkPath('ReportsShopTicket')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-files-o"></i>
            <span>Reports</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('ReportsUserTicket')">
              <i :class="checkPath('ReportsUserTicket')?'fa fa-circle':'fa fa-circle-o'"></i>
              User Ticket
            </router-link></li>
            <li><router-link :to="getPath('ReportsShopTicket')">
              <i :class="checkPath('ReportsShopTicket')?'fa fa-circle':'fa fa-circle-o'"></i>
              Shop Ticket
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('Request')?'active':''">
          <router-link :to="getPath('Request')"><i class="fa fa-list"></i> <span>Request</span></router-link>
        </li>

        <li :class="checkPath('PosSystem')?'active':''">
          <router-link :to="getPath('PosSystem')"><i class="fa fa-circle-o"></i> <span>POS System</span></router-link>
        </li>

        <li :class="checkPath('DeliverShop')
          ||checkPath('DeliverOrder')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-truck"></i>
            <span>Deliver</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('DeliverShop')">
              <i :class="checkPath('DeliverShop')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage Shop
            </router-link></li>
            <li><router-link :to="getPath('DeliverOrder')">
              <i :class="checkPath('DeliverOrder')?'fa fa-circle':'fa fa-circle-o'"></i>
              Order
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('DinnerShop')
          ||checkPath('DinnerOrder')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-birthday-cake"></i>
            <span>Dinners</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('DinnerShop')">
              <i :class="checkPath('DinnerShop')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage Shop
            </router-link></li>
            <li><router-link :to="getPath('DinnerOrder')">
              <i :class="checkPath('DinnerOrder')?'fa fa-circle':'fa fa-circle-o'"></i>
              Order
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('RestaurantShop')
          ||checkPath('RestaurantReservation')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-cutlery"></i>
            <span>Restaurants</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('RestaurantShop')">
              <i :class="checkPath('RestaurantShop')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage Restaurants
            </router-link></li>
            <li><router-link :to="getPath('RestaurantReservation')">
              <i :class="checkPath('RestaurantReservation')?'fa fa-circle':'fa fa-circle-o'"></i>
              Reservations
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('PartyServiceShop')
          ||checkPath('PartyServiceRequest')
          ||checkPath('PartyServiceBids')
          ||checkPath('PartyServiceBooking')
          ||checkPath('PartyServiceOwnerProfile')
          ||checkPath('PartyServiceProfile')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-glass"></i>
            <span>Party Service</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('PartyServiceShop')">
              <i :class="checkPath('PartyServiceShop')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage Shop
            </router-link></li>
            <li><router-link :to="getPath('PartyServiceRequest')">
              <i :class="checkPath('PartyServiceRequest')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage Request
            </router-link></li>
            <li><router-link :to="getPath('PartyServiceBids')">
              <i :class="checkPath('PartyServiceBids')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage Bids
            </router-link></li>
            <li><router-link :to="getPath('PartyServiceBooking')">
              <i :class="checkPath('PartyServiceBooking')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage Booking
            </router-link></li>
            <!-- <li><router-link :to="getPath('PartyServiceOwnerProfile')">
              <i :class="checkPath('PartyServiceOwnerProfile')?'fa fa-circle':'fa fa-circle-o'"></i>
              Owner Profile
            </router-link></li>
            <li><router-link :to="getPath('PartyServiceProfile')">
              <i :class="checkPath('PartyServiceProfile')?'fa fa-circle':'fa fa-circle-o'"></i>
              Profile
            </router-link></li>  -->
          </ul>
        </li>

        <li class="treeview">
          <a href="#">
            <i class="fa fa-cart-plus"></i>
            <span>Online Shop</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link to="/add-items"><i class="fa fa-circle-o"></i> Add Items</router-link></li>
            <li><router-link to="/sales-history"><i class="fa fa-circle-o"></i> Sales And Sales History</router-link></li>
          </ul>
        </li>

        <li :class="checkPath('ShopExtraParty')
          ||checkPath('ShopExtraService')
          ||checkPath('ShopExtraFood')
          ||checkPath('ShopExtraKitchen')
          ||checkPath('ShopExtraAdditive')
          ||checkPath('SettingsMenuImage')
          ||checkPath('OfferCards')
          ||checkPath('ShopExtraAllergy')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-plus-circle"></i>
            <span>Shop Extra</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('ShopExtraParty')">
              <i :class="checkPath('ShopExtraParty')?'fa fa-circle':'fa fa-circle-o'"></i>
              Party Services
            </router-link></li>
            <li><router-link :to="getPath('ShopExtraService')">
              <i :class="checkPath('ShopExtraService')?'fa fa-circle':'fa fa-circle-o'"></i>
              Shop Services
            </router-link></li>
            <li><router-link :to="getPath('ShopExtraFood')">
              <i :class="checkPath('ShopExtraFood')?'fa fa-circle':'fa fa-circle-o'"></i>
              Food Extras
            </router-link></li>
            <li><router-link :to="getPath('ShopExtraKitchen')">
              <i :class="checkPath('ShopExtraKitchen')?'fa fa-circle':'fa fa-circle-o'"></i>
              Shope Kitchen
            </router-link></li>
            <li><router-link :to="getPath('ShopExtraAdditive')">
              <i :class="checkPath('ShopExtraAdditive')?'fa fa-circle':'fa fa-circle-o'"></i>
              Additive
            </router-link></li>
            <li><router-link :to="getPath('ShopExtraAllergy')">
              <i :class="checkPath('ShopExtraAllergy')?'fa fa-circle':'fa fa-circle-o'"></i>
              Allergy
            </router-link></li>
            <li><router-link :to="getPath('SettingsMenuImage')">
              <i :class="checkPath('SettingsMenuImage')?'fa fa-circle':'fa fa-circle-o'"></i>
              Menage Menu Images
            </router-link></li>
            <li><router-link :to="getPath('OfferCards')">
              <i :class="checkPath('OfferCards')?'fa fa-circle':'fa fa-circle-o'"></i>
              Offer Cards
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('ShopOfferFood')
          ||checkPath('ShopOfferEvent')
          ||checkPath('ShopOfferStempcard')
          ||checkPath('ShopOfferOffer')
          ||checkPath('ShopOfferCoupon')
          ||checkPath('ShopOfferJob')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-percent"></i>
            <span>Shop Offer</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('ShopOfferFood')">
              <i :class="checkPath('ShopOfferFood')?'fa fa-circle':'fa fa-circle-o'"></i>
              Food Deals
            </router-link></li>
            <li><router-link :to="getPath('ShopOfferEvent')">
              <i :class="checkPath('ShopOfferEvent')?'fa fa-circle':'fa fa-circle-o'"></i>
              Shop Evens
            </router-link></li>
            <li><router-link :to="getPath('ShopOfferStempcard')">
              <i :class="checkPath('ShopOfferStempcard')?'fa fa-circle':'fa fa-circle-o'"></i>
              Stempcard
            </router-link></li>
            <li><router-link :to="getPath('ShopOfferOffer')">
              <i :class="checkPath('ShopOfferOffer')?'fa fa-circle':'fa fa-circle-o'"></i>
              Shop Offer
            </router-link></li>
            <li><router-link :to="getPath('ShopOfferCoupon')">
              <i :class="checkPath('ShopOfferCoupon')?'fa fa-circle':'fa fa-circle-o'"></i>
              Coupons
            </router-link></li>
            <li><router-link :to="getPath('ShopOfferJob')">
              <i :class="checkPath('ShopOfferJob')?'fa fa-circle':'fa fa-circle-o'"></i>
              Shop Jobs
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('PaymentPayout')
          ||checkPath('PaymentWay')
          ||checkPath('PaymentInvoice')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-credit-card-alt"></i>
            <span>Payments</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('PaymentPayout')">
              <i :class="checkPath('PaymentPayout')?'fa fa-circle':'fa fa-circle-o'"></i>
              Payouts
            </router-link></li>
            <li><router-link :to="getPath('PaymentWay')">
              <i :class="checkPath('PaymentWay')?'fa fa-circle':'fa fa-circle-o'"></i>
              Payment Way
            </router-link></li>
            <li><router-link :to="getPath('PaymentInvoice')">
              <i :class="checkPath('PaymentInvoice')?'fa fa-circle':'fa fa-circle-o'"></i>
              Invoice
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('ShopActivityOrder')
          ||checkPath('ShopActivityReservation')
          ||checkPath('ShopActivityTakeway')
          ||checkPath('ShopActivityParty')
          ||checkPath('ShopActivityReview')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-puzzle-piece"></i>
            <span>Shop Activity</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('ShopActivityOrder')">
              <i :class="checkPath('ShopActivityOrder')?'fa fa-circle':'fa fa-circle-o'"></i>
              Orders
            </router-link></li>
            <li><router-link :to="getPath('ShopActivityReservation')">
              <i :class="checkPath('ShopActivityReservation')?'fa fa-circle':'fa fa-circle-o'"></i>
              Reservations
            </router-link></li>
            <li><router-link :to="getPath('ShopActivityTakeway')">
              <i :class="checkPath('ShopActivityTakeway')?'fa fa-circle':'fa fa-circle-o'"></i>
              Takeaway
            </router-link></li>
            <li><router-link :to="getPath('ShopActivityParty')">
              <i :class="checkPath('ShopActivityParty')?'fa fa-circle':'fa fa-circle-o'"></i>
              Party Service
            </router-link></li>
            <li><router-link :to="getPath('ShopActivityReview')">
              <i :class="checkPath('ShopActivityReview')?'fa fa-circle':'fa fa-circle-o'"></i>
              Reviews
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('CustomerClient')
          ||checkPath('CustomerUser')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-users"></i>
            <span>Customers</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('CustomerClient')">
              <i :class="checkPath('CustomerClient')?'fa fa-circle':'fa fa-circle-o'"></i>
              YamiYami Clients
            </router-link></li>
            <li><router-link :to="getPath('CustomerUser')">
              <i :class="checkPath('CustomerUser')?'fa fa-circle':'fa fa-circle-o'"></i>
              YamiYami User
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('MarketingNewsLatter')
          ||checkPath('MarketingPopupSettings')
          ||checkPath('MarketingAddShopDiscount')
          ||checkPath('MarketingShopDiscountManage')
          ||checkPath('MarketingAddShopCoupon')
          ||checkPath('MarketingShopCouponManage')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-shopping-bag"></i>
            <span>Marketing</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('MarketingNewsLatter')">
              <i :class="checkPath('MarketingNewsLatter')?'fa fa-circle':'fa fa-circle-o'"></i>
              News Letter
            </router-link></li>
            <li><router-link :to="getPath('MarketingPopupSettings')">
              <i :class="checkPath('MarketingPopupSettings')?'fa fa-circle':'fa fa-circle-o'"></i>
              Popup Setting
            </router-link></li>
            <li class="treeview">
              <a href="#" @click.prevent="">
                <i :class="checkPath('MarketingAddShopDiscount')
                ||checkPath('MarketingShopDiscountManage')?'fa fa-circle':'fa fa-circle-o'"></i>
                <span>Shop Discount</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><router-link :to="getPath('MarketingAddShopDiscount')">
                  <i :class="checkPath('MarketingAddShopDiscount')?'fa fa-circle':'fa fa-circle-o'"></i>
                  Add Shop Discount
                </router-link></li>
                <li><router-link :to="getPath('MarketingShopDiscountManage')">
                  <i :class="checkPath('MarketingShopDiscountManage')?'fa fa-circle':'fa fa-circle-o'"></i>
                  Manage Shop Discount
                </router-link></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#" @click.prevent="">
                <i :class="checkPath('MarketingAddShopCoupon')
                ||checkPath('MarketingShopCouponManage')?'fa fa-circle':'fa fa-circle-o'"></i>
                <span>Shop Coupon</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><router-link :to="getPath('MarketingAddShopCoupon')">
                  <i :class="checkPath('MarketingAddShopCoupon')?'fa fa-circle':'fa fa-circle-o'"></i>
                  Add Shop Coupon
                </router-link></li>
                <li><router-link :to="getPath('MarketingShopCouponManage')">
                  <i :class="checkPath('MarketingShopCouponManage')?'fa fa-circle':'fa fa-circle-o'"></i>
                  Manage Shop Coupon
                </router-link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li :class="checkPath('IncomeShopIncome')
          ||checkPath('IncomeYamiYamiIncome')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-money"></i>
            <span>Income</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('IncomeShopIncome')">
              <i :class="checkPath('IncomeShopIncome')?'fa fa-circle':'fa fa-circle-o'"></i>
              Shop Income
            </router-link></li>
            <li><router-link :to="getPath('IncomeYamiYamiIncome')">
              <i :class="checkPath('IncomeYamiYamiIncome')?'fa fa-circle':'fa fa-circle-o'"></i>
              YamiYami Income
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('SettingsWebsiteSetting')
          ||checkPath('SettingsAdmin')
          ||checkPath('SettingsMenuImage')
          ||checkPath('SettingsEmailTemplates')
          ||checkPath('SettingsPolicyAndTerms')
          ||checkPath('SettingsWebsiteLanguage')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-cogs"></i>
            <span>YamiYami Settings</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('SettingsWebsiteSetting')">
              <i :class="checkPath('SettingsWebsiteSetting')?'fa fa-circle':'fa fa-circle-o'"></i>
              Website Settings
            </router-link></li>
            <li><router-link :to="getPath('SettingsAdmin')">
              <i :class="checkPath('SettingsAdmin')?'fa fa-circle':'fa fa-circle-o'"></i>
              Add Admin
            </router-link></li>
            <li><router-link :to="getPath('SettingsEmailTemplates')">
              <i :class="checkPath('SettingsEmailTemplates')?'fa fa-circle':'fa fa-circle-o'"></i>
              E-Mail Templates
            </router-link></li>
            <li><router-link :to="getPath('SettingsPolicyAndTerms')">
              <i :class="checkPath('SettingsPolicyAndTerms')?'fa fa-circle':'fa fa-circle-o'"></i>
              Policy And Termstings
            </router-link></li>
            <li><router-link :to="getPath('SettingsWebsiteLanguage')">
              <i :class="checkPath('SettingsWebsiteLanguage')?'fa fa-circle':'fa fa-circle-o'"></i>
              Website Languages
            </router-link></li>
          </ul>
        </li>
        <li :class="$route.path=='/statics'?'active':''">
          <router-link to="/statics"><i class="fa fa-bar-chart"></i> <span>Statics</span></router-link>
        </li>
      </ul>
      <br><br>
      <div class="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="FullScreen">
          <span class="fa fa-desktop" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Lock">
          <span class="fa fa-lock" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="" href="#"  @click="logout()" data-original-title="Logout">
          <span class="fa fa-power-off" aria-hidden="true"></span>
        </a>
      </div>
  </section>
</aside>
</template>

<script>
export default {
  name: 'MainSidebar',
  computed: {
    authUser () {
      // return this.$store.state.authUser
    }
  },
  methods: {
    getPath: function (routeName) {
      let path = '/'
      if (this.$router.resolve({ name: routeName }).route.path) { path = this.$router.resolve({ name: routeName }).route.path }
      return path
    },
    checkPath: function (routeName) {
      let result = false
      let path = this.getPath(routeName)
      if (this.$route.path === path) { result = true }
      return result
    },
    logout () {
      // localStorage.removeItem('token')
      // localStorage.removeItem('username')
      // this.$router.push({ name: 'Login' })
    }
  }
}
</script>
