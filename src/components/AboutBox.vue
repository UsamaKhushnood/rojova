<<<<<<< HEAD
<template>
<div class="box box-primary">
  <div class="box-header with-border">
    <h3 class="box-title">Other Details</h3>
  </div>
  <!-- /.box-header -->
  <div class="box-body">
    <strong><i class="fa fa-book margin-r-5"></i> Required Services</strong>
    <p style="margin-top:10px;">
      <span 
        v-for= "sub in details.subservices"
        class="label" 
        style="margin-right: 5px"
        :class="['label-'+color[getRandomInt(4)]]">
          {{sub.name}}
        </span>
    </p>
  
    <hr>

    <!-- <strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>

    <p class="text-muted">Malibu, California</p>

    <hr> -->

    <strong><i class="fa fa-pencil margin-r-5"></i> Cusine</strong>

    <p style="margin-top:10px;">
      <span 
        v-for= "cus in details.cuisines"
        class="label" 
        style="margin-right: 5px"
        :class="['label-'+color[getRandomInt(4)]]">
          {{cus.cuisine_name}}
        </span>
    </p>
  

    <hr>

    <strong><i class="fa fa-file-text-o margin-r-5"></i> Receved Food</strong>

    <p style="margin-top:10px;">
      <span 
        v-for= "res in details.reservedfood"
        class="label label-primary" 
        style="margin-right: 5px">
          {{res.name}}
        </span>
    </p>
  
    
  </div>
  <!-- /.box-body -->
</div>
</template>

<script>
export default {
  name: 'AboutBox',
  props:{
    details : {
      type : [Array,Object],
      default : () => {}
    }
  },
  data(){
    return{
      color : [
        'danger',
        'success',
        'info',
        'warning',
        'primary'
      ]
    }
  },
  methods:{
    getRandomInt : function(max) {
      return Math.floor(Math.random() * Math.floor(max));;
    }
  }
}
</script>
=======
<template>
<div class="box box-primary">
  <div class="box-header with-border">
    <h3 class="box-title">Other Details</h3>
  </div>
  <!-- /.box-header -->
  <div class="box-body">
    <strong><i class="fa fa-book margin-r-5"></i> Required Services</strong>
    <p style="margin-top:10px;">
      <div class="row">  
        <div class="col-md-6 ctm-dv"  v-for= "sub in details.subservices">
           <span 
       
        class="label ctm-badge" 
        :class="['label-'+color[getRandomInt(4)]]">
          {{sub.name}}
        </span>
        </div>
         </div>
    </p>
  
    <hr>

    <!-- <strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>

    <p class="text-muted">Malibu, California</p>

    <hr> -->

    <strong><i class="fa fa-pencil margin-r-5"></i> Cusine</strong>

    <p style="margin-top:10px;">
       <div class="row">  
        <div class="col-md-6 ctm-dv" v-for= "cus in details.cuisines"> 
      <span 
        class="label ctm-badge" 
        :class="['label-'+color[getRandomInt(4)]]">
          {{cus.cuisine_name}}
        </span>
        </div>
      </div>
    </p>
  

    <hr>

    <strong><i class="fa fa-file-text-o margin-r-5"></i> Receved Food</strong>

    <p style="margin-top:10px;">
      <div class="row">  
        <div class="col-md-6 ctm-dv"  v-for= "res in details.reservedfood">
      <span 
       
        class="label label-primary ctm-badge" >
          {{res.name}}
        </span>
      </div>
    </div>
    </p>
  
    
  </div>
  <!-- /.box-body -->
</div>
</template>

<script>
export default {
  name: 'AboutBox',
  props:{
    details : {
      type : [Array,Object],
      default : () => {}
    }
  },
  data(){
    return{
      color : [
        'danger',
        'success',
        'info',
        'warning',
        'primary'
      ]
    }
  },
  methods:{
    getRandomInt : function(max) {
      return Math.floor(Math.random() * Math.floor(max));;
    }
  }
}
</script>

<style>

.ctm-badge
{
  font-size: 16px !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.ctm-dv
{
  margin-top : 10px !important;
  margin-bottom : 15px !important;
}
</style>
>>>>>>> 8937ba0b4b5bae15b8026d2ff0e3e9e38eeb74c8
