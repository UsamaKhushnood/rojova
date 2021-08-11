<template>
<header class="main-header">
  <!-- Logo -->
  <router-link to="/" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <!-- <span class="logo-mini">
      <img src="@/assets/images/yamiyamilogo.png" alt="logo" style="width: 50%">
    </span> -->
    <!-- logo for regular state and mobile devices -->
    <!-- <span class="logo-lg">
      <img src="@/assets/images/yamiyamilogo.png" alt="logo" style="width: 50%">
    </span> -->
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
          
          </ul>
       
        <!-- Control Sidebar Toggle Button -->
        <li>
          <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears" style="color: white"></i></a>
        </li>
   
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
