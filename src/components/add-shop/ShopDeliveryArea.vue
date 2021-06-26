<template>
	<div>
		  
      <notifications group="notification" class="notifications" />

     <div class="box box-success" style="padding-bottom: 20px; padding-top: 10px; padding-left: 20px; padding-right: 20px;">
              <div class="row">
                <div class="col-md-12">
                  <div class="box-header with-border">
                    <h3 class="box-title">Delivery Area</h3>
                  </div>
                </div>
              </div>
		<div class="row">
      <div class="col-sm-12">
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label>Shop Country</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <select class="form-control"
             @change="getStateList" 
              v-model="delivery_area.country_id">   
              <option selected disabled value="">Select Country</option>
              <option v-for="country in countriesList" :value="country.id" :key="country.id">{{country.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label>Shop State</label>
          </div>
        </div>
        <div class="col-md-6">
         <div class="form-group">
            <select class="form-control" 
            @change="getCityList"
            v-model="delivery_area.state_id" >
              <option selected disabled value="">Select State</option>
              <option v-for="state in stateList" :key="state.id" :value="state.id">{{state.name}}</option>
            </select>
        </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="form-group">
              <label>Shop City</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <select class="form-control" v-model="delivery_area.city_id">
                <option selected disabled value="">Select City</option>
                <option v-for="city in cityList" :key="city.id" :value="city.id">{{city.name}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- :disabled="disbalebtn" -->
        <button type="button"   class="btn btn-primary save_data" @click.prevent="Save_Data()">Add Shop</button>
      </div> 
    </div>
    </div>
		
	</div> 
</template>

<script>
import {mapActions,mapState,mapGetters} from 'vuex';
	export default{
    name : 'ShopDeliveryArea',
    props:['close_modal'],
    data(){
      return{
        disbalebtn:false,
        countriesList : [],
        stateList : [],
        cityList : [],
        delivery_area:{
          state_id:'',
          country_id:'',
          city_id:'',
        }
      }
    },
      computed:{ 
        ...mapState(['ADD_SHOP_SUCCESS']),
        ...mapGetters(['GET_ADD_SHOP_SUCCESS'])
      },
      created(){
      this.$store.watch(state=>state.ADD_SHOP_SUCCESS,async (value)=> {
     if (value === true) {
        this.$notify({ 
               group: 'notification',
               type: 'success',
               title: 'Success',
               text: 'Created New Shop Successfully,'
           });
           
           setTimeout(()=>{
             this.setNull();
            location.reload();
           },5000)
      }
      else{
        
        this.disbalebtn=false;
        this.$notify({ 
            group: 'notification',
            type: 'error',
            title: 'failure',
            text: 'Enter Correct Data.'
        });
              
      }
      
      });
        // Do whatever makes sense now
  
      },
  
    mounted(){
      this.getCountriesList(); 
    },  
    methods:{ 
     ...mapActions({
      ADDSHOP:'ADD_NEW_SHOP',
      GETSTATES:"GET_STATES",
      setNull:'SET_NULL_SHOP'
     }),
     async get_states(value){
       await this.GETSTATES(value);
     },
     async Save_Data(){
       this.disbalebtn=true;
       await this.ADDSHOP({
          country_id:this.delivery_area.country_id,
          state_id:this.delivery_area.state_id,
          city_id:this.delivery_area.country_id
        });

     },
      getCountriesList : function(){

        var url = process.env.VUE_APP_API_BASE_URL+'country/list'

        this.$store.dispatch('HTTP_GET_REQUEST' ,  url)
        .then(response => {

            if(response.data.error == false && response.data.data)
            {
                this.countriesList = response.data.data;
            }
            else
            {
                this.$notify({ 
                    group: 'notify',
                    type: 'warn',
                    title: 'Failure',
                    text: response.data.message || 'something went wrong, Please try again later.'
                }); 
            }

        })
        .catch(error => {
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    getStateList : function(type){
  
        var url = process.env.VUE_APP_API_BASE_URL+'state/list'
        var id = this.delivery_area.country_id;

        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload : {country_id: this.delivery_area.country_id}, url : url})
        .then(response => {

            if(response.data.error == false && response.data.data)
            {   
              this.stateList = response.data.data;
            }
            else
            {
                this.$notify({ 
                    group: 'notify',
                    type: 'warn',
                    title: 'Failure',
                    text: response.data.message || 'something went wrong, Please try again later.'
                }); 
            }
        })
        .catch(error => {
          console.log(error)
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },
    getCityList : function(){

        var url = process.env.VUE_APP_API_BASE_URL+'city/list';
        this.$store.dispatch('HTTP_POST_REQUEST' ,  {payload: {state_id : this.delivery_area.state_id}, url : url})
        .then(response => {
            if(response.data.error == false && response.data.data)
            {   
              this.cityList = response.data.data;
            }
            else
            {   
              this.$notify({
                  group: 'notify',
                  type: 'warn',
                  title: 'Failure',
                  text: response.data.message || 'something went wrong, Please try again later.'
              }); 
            }
        })
        .catch(error => {
            let errormessage = error.response.data.message;
            this.$notify({
                group: 'notify',
                type: 'error',
                title: 'Failure',
                text: errormessage
            });
        })
    },

    }
	}
</script>
<style scoped>
.save_data{
  margin-left: auto;
  margin-right: 5%;
  display: flex; 
}
.notifications{
  z-index: 1000000000000000000000;
}
</style>