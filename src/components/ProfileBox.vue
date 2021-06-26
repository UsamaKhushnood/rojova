<template>
<div class="box box-primary">
  <div class="box-body box-profile">
    <img class="profile-user-img img-responsive " :src="details.logo_path" alt="Shop Logo">

    <h3 class="profile-username text-center">{{details.shop_name}}</h3>

    <p class="text-muted text-center">{{details.shop_slug}}</p>

    <ul class="list-group list-group-unbordered">
      <li class="list-group-item">
        <b>Phone</b> <a class="pull-right">{{details.phone}}</a>
      </li>
      <li class="list-group-item">
        <b>Email</b> <a class="pull-right">{{details.email}}</a>
      </li>
      <li class="list-group-item">
        <b>Fax</b> <a class="pull-right">{{details.fax}}</a>
      </li>
      
    </ul>

    <!-- <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a> -->
  </div>
  <!-- /.box-body -->
</div>
</template>

<script>
export default {
  name: 'ProfileBox',
  props:{
    details : {
      type : [Array,Object],
      default : () => {}
    }
  },
}
</script>

<style scoped>

.profile-user-img
{
   height : 150px;
   width : 400px;
}

</style>