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

      <li :class="checkPath('NewDash')?'active':''">
        <router-link :to="getPath('NewDash')"><i class="fa fa-tachometer"></i> <span>Dashboard</span></router-link>
      </li>
        <li :class="checkPath('StandardUser')
          ||checkPath('StandardUser')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-user-o"></i>
            <span>Users</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('StandardUser')">
              <i :class="checkPath('StandardUser')?'fa fa-circle':'fa fa-circle-o'"></i>
              Standard User
            </router-link></li>
            <li><router-link :to="getPath('PremiumUser')">
              <i :class="checkPath('PremiumUser')?'fa fa-circle':'fa fa-circle-o'"></i>
              Premium User
            </router-link></li>
            <li><router-link :to="getPath('DiamondUser')">
              <i :class="checkPath('DiamondUser')?'fa fa-circle':'fa fa-circle-o'"></i>
              Diamond User
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('Post')?'active':''">
          <router-link :to="getPath('Post')"><i class="fa fa-bullhorn"></i> <span>Post</span></router-link>
        </li>

        <li :class="checkPath('News')?'active':''">
          <router-link :to="getPath('News')"><i class="fa fa-newspaper-o"></i> <span>News</span></router-link>
        </li>

        <li :class="checkPath('AddMusic')
          ||checkPath('AddMusic')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-music"></i>
            <span>Music</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('AddMusic')">
              <i :class="checkPath('AddMusic')?'fa fa-circle':'fa fa-circle-o'"></i>
              Add Music
            </router-link></li>
            <li><router-link :to="getPath('Artist')">
              <i :class="checkPath('Artist')?'fa fa-circle':'fa fa-circle-o'"></i>
              Artist
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('Videos')?'active':''">
          <router-link :to="getPath('Videos')"><i class="fa fa-video-camera"></i> <span>Videos</span></router-link>
        </li>
        <li :class="checkPath('School')?'active':''">
          <router-link :to="getPath('School')"><i class="fa fa-graduation-cap"></i> <span>School</span></router-link>
        </li>
        <li :class="checkPath('Events')?'active':''">
          <router-link :to="getPath('Events')"><i class="fa fa-calendar"></i> <span>Events</span></router-link>
        </li>
        <li :class="checkPath('OnlineShopDashboard')
          ||checkPath('OnlineShopDashboard')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-cart-plus"></i>
            <span>Online Shop</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('OnlineShopDashboard')">
              <i :class="checkPath('OnlineShopDashboard')?'fa fa-circle':'fa fa-circle-o'"></i>
              Dashboard
            </router-link></li>
            
            <li><router-link :to="getPath('AddCategory')">
              <i :class="checkPath('AddCategory')?'fa fa-circle':'fa fa-circle-o'"></i>
              Add Category
            </router-link></li>
            <li><router-link :to="getPath('AddItems')">
              <i :class="checkPath('AddItems')?'fa fa-circle':'fa fa-circle-o'"></i>
              Add Items
            </router-link></li>
            <li><router-link :to="getPath('ManageItems')">
              <i :class="checkPath('ManageItems')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage Items
            </router-link></li>
            <li><router-link :to="getPath('Orders')">
              <i :class="checkPath('Orders')?'fa fa-circle':'fa fa-circle-o'"></i>
              Orders
            </router-link></li>
            <li><router-link :to="getPath('Cancelled')">
              <i :class="checkPath('Cancelled')?'fa fa-circle':'fa fa-circle-o'"></i>
              Cancelled
            </router-link></li>
            <li><router-link :to="getPath('InShipping')">
              <i :class="checkPath('InShipping')?'fa fa-circle':'fa fa-circle-o'"></i>
              In Shipping
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('History')?'active':''">
          <router-link :to="getPath('History')"><i class="fa fa-clock-o"></i> <span>History</span></router-link>
        </li>
        <li :class="checkPath('Tickets')?'active':''">
          <router-link :to="getPath('Tickets')"><i class="fa fa-ticket"></i> <span>Tickets</span></router-link>
        </li>
        <li :class="checkPath('NewRequest')
          ||checkPath('NewRequest')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-user"></i>
            <span>Fan Page</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('NewRequest')">
              <i :class="checkPath('NewRequest')?'fa fa-circle':'fa fa-circle-o'"></i>
              New Requests
            </router-link></li>
            <li><router-link :to="getPath('ManageFanPage')">
              <i :class="checkPath('ManageFanPage')?'fa fa-circle':'fa fa-circle-o'"></i>
              Manage FanPage
            </router-link></li>
            <li><router-link :to="getPath('BlockedFanPage')">
              <i :class="checkPath('BlockedFanPage')?'fa fa-circle':'fa fa-circle-o'"></i>
              Blocked FanPage
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('Income')?'active':''">
          <router-link :to="getPath('Income')"><i class="fa fa-money"></i> <span>Income</span></router-link>
        </li>
        <li :class="checkPath('Donation')?'active':''">
          <router-link :to="getPath('Donation')"><i class="fa fa-heartbeat"></i> <span>Donation</span></router-link>
        </li>
        <li :class="checkPath('Voting')?'active':''">
          <router-link :to="getPath('Voting')"><i class="fa fa-pie-chart"></i> <span>Voting</span></router-link>
        </li>
        <li :class="checkPath('Media')?'active':''">
          <router-link :to="getPath('Media')"><i class="fa fa-television"></i> <span>Media</span></router-link>
        </li>
        <li :class="checkPath('UserReport')
          ||checkPath('UserReport')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-bug"></i>
            <span>Reports</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('UserReport')">
              <i :class="checkPath('UserReport')?'fa fa-circle':'fa fa-circle-o'"></i>
              User Report
            </router-link></li>
            <li><router-link :to="getPath('UserWarning')">
              <i :class="checkPath('UserWarning')?'fa fa-circle':'fa fa-circle-o'"></i>
              User Warning
            </router-link></li>
          </ul>
        </li>
        <li :class="checkPath('Bazar')?'active':''">
          <router-link :to="getPath('Bazar')"><i class="fa fa-cart-plus"></i> <span>Bazar</span></router-link>
        </li>
        
        <li :class="checkPath('Language')
          ||checkPath('Language')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-cogs"></i>
            <span>Settings</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('Language')">
              <i :class="checkPath('Language')?'fa fa-circle':'fa fa-circle-o'"></i>
              Language
            </router-link></li>
            <li><router-link :to="getPath('MainPage')">
              <i :class="checkPath('MainPage')?'fa fa-circle':'fa fa-circle-o'"></i>
              Main Page
            </router-link></li>
            <li><router-link :to="getPath('FTPSetting')">
              <i :class="checkPath('FTPSetting')?'fa fa-circle':'fa fa-circle-o'"></i>
              FTP Setting
            </router-link></li>
            <li><router-link :to="getPath('HowItWorks')">
              <i :class="checkPath('HowItWorks')?'fa fa-circle':'fa fa-circle-o'"></i>
              How It Works
            </router-link></li>
            <li><router-link :to="getPath('PaymentMethod')">
              <i :class="checkPath('PaymentMethod')?'fa fa-circle':'fa fa-circle-o'"></i>
              Payment Method
            </router-link></li>
            <li><router-link :to="getPath('PaymentOffices')">
              <i :class="checkPath('PaymentOffices')?'fa fa-circle':'fa fa-circle-o'"></i>
              Payment Offices
            </router-link></li>
            <li><router-link :to="getPath('PageSettings')">
              <i :class="checkPath('PageSettings')?'fa fa-circle':'fa fa-circle-o'"></i>
              Page Settings
            </router-link></li>
            
            <li :class="checkPath('AddAdmin')
          ||checkPath('AddAdmin')?'active treeview':' treeview'">
          <a href="#" @click.prevent="">
            <i class="fa fa-files-o"></i>
            <span>Add Admin</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="getPath('AddAdmin')">
              <i :class="checkPath('AddAdmin')?'fa fa-circle':'fa fa-circle-o'"></i>
              Add Admin
            </router-link></li>
            <li><router-link :to="getPath('LevelSetting')">
              <i :class="checkPath('LevelSetting')?'fa fa-circle':'fa fa-circle-o'"></i>
              Level Setting
            </router-link></li>
          </ul>
        </li>
        <li><router-link :to="getPath('PolicyAndTerms')">
              <i :class="checkPath('PolicyAndTerms')?'fa fa-circle':'fa fa-circle-o'"></i>
              Policy And Terms
            </router-link>
            </li>
        <li><router-link :to="getPath('BannerSetting')">
              <i :class="checkPath('BannerSetting')?'fa fa-circle':'fa fa-circle-o'"></i>
              Banner Setting
            </router-link>
            </li>
        <li><router-link :to="getPath('StandardUserSettings')">
              <i :class="checkPath('StandardUserSettings')?'fa fa-circle':'fa fa-circle-o'"></i>
              Standard User Settings
            </router-link>
            </li>
        <li><router-link :to="getPath('PremiumUserSettings')">
              <i :class="checkPath('PremiumUserSettings')?'fa fa-circle':'fa fa-circle-o'"></i>
              Premium User Settings
            </router-link>
            </li>
        <li><router-link :to="getPath('VIPUserSettings')">
              <i :class="checkPath('VIPUserSettings')?'fa fa-circle':'fa fa-circle-o'"></i>
              VIP User Settings
            </router-link>
            </li>
        <li><router-link :to="getPath('ChatSettings')">
              <i :class="checkPath('ChatSettings')?'fa fa-circle':'fa fa-circle-o'"></i>
              Chat Settings
            </router-link>
            </li>
            
          </ul>
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
