<template>
  <div id="app" class="wrapper">
    <ThemeHeader></ThemeHeader>
    <MainSidebar></MainSidebar>
    <div class="simple-scroll">
      <div class="content-wrapper">
        <router-view/>
      </div>
    </div>
    <!-- <ThemeFooter></ThemeFooter> -->
    <ControlSidebar></ControlSidebar>
    <div class="control-sidebar-bg"></div>

  </div>
</template>

<script>
import ThemeHeader from '@/components/ThemeHeader.vue'
import MainSidebar from '@/components/MainSidebar.vue'
// import ThemeFooter from '@/components/ThemeFooter.vue'
import ControlSidebar from '@/components/ControlSidebar.vue'

export default {
  name: 'Theme',
  components: {
    ThemeHeader, MainSidebar, ControlSidebar
  },
  created: async function () {
    $(document).ready(function () {
      $('.wrapper .content-wrapper').slimScroll({
        color: '#555',
        alwaysVisible: false,
        height: 'calc(100vh - 55px)',
        distance: '0px'
      })
    })
    
  }

}
</script>


</style>

<style>
  
.notification-content, .notification-title
{
    color : #fff;
}
.notifications
{
    margin-top: 15px;
    margin-right: 10px;
}  
.error
{
    color : #FF0000 !important;
    font-size: 12px;
}
input.error
{
    border-color: #FF0000 !important;
    -webkit-box-shadow: 0 0 3px 1px #FF0000 !important;
    box-shadow: 0 0 3px 1px #FF0000 !important;
}

</style>
