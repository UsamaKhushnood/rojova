<template>
<header class="main-header">
  <!-- Logo -->
  <router-link to="/" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-mini">
      <img src="@/assets/images/yamiyamilogo.png" alt="logo" style="width: 50%">
    </span>
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg">
      <img src="@/assets/images/yamiyamilogo.png" alt="logo" style="width: 50%">
    </span>
  </router-link>
  <!-- Header Navbar: style can be found in header.less -->
  <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>

    <div class="navbar-custom-menu">

      <ul class="nav navbar-nav">
        <li class="dropdown messages-menu">
            <form action="#" method="get" class="sidebar-form" style="margin: 7px 10px; width: 330px;">
      <div class="input-group">
        <input type="text" name="q" class="form-control" placeholder="Search...">
        <span class="input-group-btn">
              <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
              </button>
            </span>
      </div>
    </form>
        </li>
        <!-- Messages: style can be found in dropdown.less-->
        <li class="dropdown messages-menu" style="margin-right: 8px;">
          <router-link to="/reports/user-ticket" class="btn btn-success" data-toggle="dropdown" style="margin-top: 6px; padding-top: 8px; padding-bottom: 8px;">
            <!-- <i class="fa fa-list"></i> -->
            <span class="hidden-xs"> New Ticket</span>
            <!-- <span class="label label-danger" v-if="ticketUserSummery.new>0" style="top: -4px; right: -5px; text-align: center; font-size: 13px;">
              {{ ticketUserSummery.new }}
            </span> -->
            <span class="label label-danger"  style="top: -4px; right: -5px; text-align: center; font-size: 13px;">
            0
            </span>
          </router-link>
        </li>
        <li class="dropdown messages-menu" style="margin-right: 8px;">
          <router-link to="/request" class="btn btn-success" style="margin-top: 6px; padding-top: 8px; padding-bottom: 8px;">
            <!-- <i class="fa fa-bars"></i> -->
            <span class="hidden-xs"> New Request</span>
            <!-- <span class="label label-danger" v-if="requestsSummery.new>0" style="top: -4px; right: -5px; text-align: center; font-size: 13px;">
              {{ requestsSummery.new }}
            </span> -->
             <span class="label label-danger" style="top: -4px; right: -5px; text-align: center; font-size: 13px;">
              0 
            </span>

          </router-link>
        </li>
         <li class="messages-menu" style="margin-right: 8px;">
        </li>
        <li class=" messages-menu" style="margin-right: 8px;">

          <ul class="dropdown-menu">
           <!--  <li class="header">You have 4 messages</li> -->
            <li>
              <!-- inner menu: contains the actual data -->
              <ul class="menu">
                <li><!-- start message -->
                  <a href="#">
                    <div class="pull-left">
                     <i class="fa fa-circle-o"></i>
                    </div>
                    <h4>
                      Add Shop Items

                    </h4>

                  </a>
                </li>
                <li><!-- start message -->
                  <a href="#">
                    <div class="pull-left">
                     <i class="fa fa-circle-o"></i>
                    </div>
                    <h4>
                     Manage Shops

                    </h4>

                  </a>
                </li>
                <!-- end message -->

              </ul>
            </li>

          </ul>
        </li>
        <!-- Tasks: style can be found in dropdown.less -->

        <!-- User Account: style can be found in dropdown.less -->
        <li class="dropdown user user-menu">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <!-- <img v-if="authUser.avater" :src="authUser.avater" class="user-image"> -->
            <!-- <img v-else class="user-image place-holder-shimmer"> -->
            <!-- <span :class="authUser.first_name&&authUser.last_name?'hidden-xs':'hidden-xs width-100 display-inline-block place-holder-shimmer'">
              {{ authUser.first_name }}
              {{ authUser.lsat_name }}
            </span> -->
            <span>DUMMY LOGIN</span>
          </a>
          <ul class="dropdown-menu">
            <!-- User image -->
            <li class="user-header">
              <!-- <img v-if="authUser.avater" :src="authUser.avater" class="img-circle"> -->
              <!-- <img v-else class="img-circle place-holder-shimmer"> -->
              <!-- <p>
                <span :class="authUser.name?'':'width-100 place-holder-shimmer display-inline-block'">{{ authUser.name }}</span>
                -
                <span :class="authUser.designation?'':'width-100 place-holder-shimmer display-inline-block'">{{ authUser.designation }}</span>
                <small :class="authUser.memberFrom?'':'width-100p place-holder-shimmer'">Member since {{ authUser.memberFrom }}</small>
              </p> -->
            </li>
            <!-- Menu Body -->
            <!-- <li class="user-body">
              <div class="row">
                <div class="col-xs-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div class="col-xs-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div class="col-xs-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </div>
            </li> -->
            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                <router-link :to="getPath('Profile')" class="btn btn-default btn-flat">Profile</router-link>
              </div>
              <div class="pull-right">
                <a href="#" @click="logout()" class="btn btn-default btn-flat">Sign out</a>
              </div>
            </li>
          </ul>
        </li>
        <!-- Control Sidebar Toggle Button -->
        <li>
          <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import BsModal from '@/components/BsModal'
// import AddPOSForm from '@/components/AddPOSForm'
// import AddShopForm from '@/components/AddShopForm'
// import gql from 'graphql-tag'

export default {
  name: 'ThemeHeader',

  computed: {
    ...mapState({
      // authUser: state => state.authUser
    }),
    // ...mapGetters({
    //   requestsSummery: 'requestsSummery',
    //   ticketUserSummery: 'reports/ticketUserSummery'
    // })
  },
  methods: {
    getPath: function (routeName) {
      let path = '/'
      if (this.$router.resolve({ name: routeName }).route.path) { path = this.$router.resolve({ name: routeName }).route.path }
      return path
    },
    logout () {
       // this.$store.commit('SET_AUTH_TOKEN',false);
       localStorage.removeItem('AUTH_TOKEN');
       localStorage.clear();
       window.location.href = '/login'
      // onLogout()
      // localStorage.removeItem('token')
      // localStorage.removeItem('username')
      // this.$router.push({ name: 'Login' })
    },
    checkAuthToken () {
      // let isAuthenticated = new Date().getTime() > localStorage.getItem('expiresAT')
      // if (isAuthenticated) this.$router.push({ name: 'Login' })
    }
  },
  created: function () {
    // this.checkAuthToken()
  }
}
</script>
