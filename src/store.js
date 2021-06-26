import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.headers.common['Authorization'] = 'Bearer gmZhgFkRLOMBBoPpO5qBakMJJKNrkSI3VA0NWHI07lcp5pZyIMW55yKyL59A';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
  

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PREFIXES : {},
    SHOPS_IDS:null, 
    SHOP_NAME:null,
    ADD_SHOP_SUCCESS:null,
    ADD_POS_SUCCESS:null,
    AUTH_TOKEN : false,
    SHOP_INFO:null, 
    is_new:null, 
    ALLSTATES:null,
    SHOP_SERVICES:null, 
    ALL_PARTY_SERVICES_CORE : [],
    addShopPopupData : { 
        client_id : null,
        owner_name : null,
        shop_details:{
          service_id : null,
          sub_service_id: null,
          shopKitchenFields:null, 
          reserved_food_id:null,
          cuisine_id:null,
          shop_service_id:null,
          description:null,
          logo_path:null,
          shop_name : null,
          shop_seo:null,
          shop_slug:null,
          hrb_no : null
        }, 
        extra_services : [],
        commission_type : {
          type : null,
          start_time : null,
          end_time : null,
          percentage_type : null,
          fixed_amount : null,
          monthly_fixed_amount : null
        }, 
        shop_phone : null,
        shop_fax : null,
        order_transfer :{
          type : null,
          email : null,
          fax : null,
          mail_to_fax : null,
          by_sms :  null, 
          google_print : null,
        },
        payment_method : {
          type : null,
          options : []
        },
        payouts : {
          type:null,
          receiver_option : {
            type : null, //to paypal or to bank
            owner_name : null,
            bank_name : null,
            iban : null,
            bic : null,
            paypal_id : null
          }
        },
        owner_info:{ 
          gender : null,
          first_name : null,
          last_name : null,
          zip_code : null,
          street : null,
          house_no : null,
          st_nr : null,
          umst_id : null,
          description:null,
          shop_auth : {
            email:null,
            password : null,
            password_confirmation : null, 
          },
          opening_time : [],
        },
        extra_notes : null,
        party_services_cores : {
          employees : [],
          furnitures : [],
          geschirs : [],
          zubereitungs : [],
          entertainments : [],
          effects : [],
          spezialiations : [],
          anlass : [],
          menues : [],
        },
        
    

     }
  },
  getters :{
    // isAuthenticated : state => { return state.COMPANY_DATA == null }
    GET_ADD_SHOP_SUCCESS: state => {return state.ADD_SHOP_SUCCESS;},
    GET_SHOP_IDS:state=>{return state.SHOPS_IDS;},
    GET_shop_name:state=>{return state.SHOP_NAME;}
  },
  mutations: {
  	SET_AUTH_TOKEN(state,data)
    {
       state.AUTH_TOKEN = data;
    },
    SET_PREFIXES(state,data){
      state.PREFIXES = data;
    },
    add_new_shop_first_step(state,data){
      state.is_new=data.shop_type == 'NewShop' ? 1 : 0;
    },
    Set_Shop_Details(state,data){
      state.addShopPopupData.shop_details.service_id=data.serviceID,
      state.addShopPopupData.shop_details.sub_service_id=data.Subservices,
      state.addShopPopupData.shop_details.reserved_food_id=data.shopReservedFoodType,
      state.addShopPopupData.shop_details.cuisine_id=data.shopCusines,
      state.addShopPopupData.shop_details.shop_service_id=data.shopServicesFields,
      state.addShopPopupData.shop_details.description=data.shopMetaDescription,
      state.addShopPopupData.shop_details.logo_path=data.shopLogo,
      state.addShopPopupData.shop_details.shop_name=data.shopName,
      state.addShopPopupData.shop_details.shop_seo=data.shopSEO, 
      state.addShopPopupData.shop_details.shop_slug=data.shopSlug
    },
    Set_Shop_Settings(state,data){
      
         state.addShopPopupData.commission_type.type=data.yami_comiision.type
         state.addShopPopupData.commission_type.start_time=data.yami_comiision.start_time
         state.addShopPopupData.commission_type.end_time=data.yami_comiision.end_time
         state.addShopPopupData.commission_type.percentage_type=data.yami_comiision.percentage_type
         state.addShopPopupData.commission_type.fixed_amount=data.yami_comiision.fixed_amount
         state.addShopPopupData.commission_type.monthly_fixed_amount=data.yami_comiision.monthly_fixed_amount
             
         //order transfer
         state.addShopPopupData.order_transfer.type=data.order_transfer.type
         state.addShopPopupData.order_transfer.email=data.order_transfer.email
         state.addShopPopupData.order_transfer.fax=data.order_transfer.fax_number
         state.addShopPopupData.order_transfer.mail_to_fax=data.order_transfer.mail_to_fax
         state.addShopPopupData.order_transfer.by_sms=data.order_transfer.by_sms
         state.addShopPopupData.order_transfer.google_print=data.order_transfer.google_print

         // payment methods
         state.addShopPopupData.payment_method.type=data.payment_methods.type
         if(data.payment_methods.type=="selected"){
           state.addShopPopupData.payment_method.options=data.payment_methods.payment_options

         }
         if(data.payment_methods.type=="all"){
          state.addShopPopupData.payment_method.options=data.payment_methods.cost_and_delivery_options
        } 
            //payouts methods
        state.addShopPopupData.payouts.type=data.payouts.schedule
        state.addShopPopupData.payouts.method=data.payouts.method
        state.addShopPopupData.payouts.receiver_option.type=data.payouts.receiver_option.type
        state.addShopPopupData.payouts.receiver_option.owner_name=data.payouts.receiver_option.owner_name
        state.addShopPopupData.payouts.receiver_option.bank_name=data.payouts.receiver_option.bank_name
        state.addShopPopupData.payouts.receiver_option.iban=data.payouts.receiver_option.iban
        state.addShopPopupData.payouts.receiver_option.bic=data.payouts.receiver_option.bic

        state.addShopPopupData.shop_phone=data.shop_phone_1
        state.addShopPopupData.shop_fax=data.shop_fax_1 
    },
    Set_Shop_Owner_Information(state,data){
      
       state.addShopPopupData.owner_info.gender=data.client_sex
       state.addShopPopupData.owner_info.first_name=data.client_first_name
       state.addShopPopupData.owner_info.last_name=data.client_last_name
       state.addShopPopupData.owner_info.zip_code=data.client_zip_code
       state.addShopPopupData.owner_info.street=data.client_street
       state.addShopPopupData.owner_info.house_no=data.client_house_number
       state.addShopPopupData.owner_info.st_nr=data.client_st_nr
       state.addShopPopupData.owner_info.umst_id=data.client_umst_id
       state.addShopPopupData.owner_info.shop_auth.email=data.shop_email
       state.addShopPopupData.owner_info.shop_auth.password=data.shop_password
       state.addShopPopupData.owner_info.shop_auth.password_confirmation=data.shop_re_password
       state.addShopPopupData.owner_info.opening_time=data.opening_timings
       state.addShopPopupData.owner_info.description=data.shop_details

       state.addShopPopupData.shop_details.hrb_no = data.hrb_no
       
    },
    SET_PARTYSERVICES(state,data){
      state.addShopPopupData.party_services_cores.employees = data.employees;
      state.addShopPopupData.party_services_cores.furnitures = data.furnitures;
      state.addShopPopupData.party_services_cores.geschirs = data.geschirs;
      state.addShopPopupData.party_services_cores.zubereitungs = data.zubereitungs;
      state.addShopPopupData.party_services_cores.entertainments = data.entertainments;
      state.addShopPopupData.party_services_cores.effects = data.effects;
      state.addShopPopupData.party_services_cores.spezialiations = data.spezialiations;
      state.addShopPopupData.party_services_cores.anlass = data.anlass;
      state.addShopPopupData.party_services_cores.menues = data.menues;
    },
    SET_EXTRASERVICES(state,data){
      state.addShopPopupData.extra_services = data;
    },
    SET_SHOP_INFO(state,data){
      state.SHOP_INFO=data[0];
    },
    SET_SHOP_SERVICES(state,data){
        state.SHOP_SERVICES=data; 
    },
    SET_ALL_STATES(state,data){
      state.ALLSTATES=data;
    },
    SET_ADD_SHOP_SUCCESS(state,data){
      state.ADD_SHOP_SUCCESS=data;
    },
    SET_SHOPS_IDS(state,data){
      state.SHOPS_IDS=data;
    },
    SET_SHOPNAME(state,data){
      state.SHOP_NAME=data;
    },
    SET_ADD_POS_SUCCESS(state,data){
      
      state.ADD_POS_SUCCESS=data;
      console.log("chaing data:"+state.ADD_POS_SUCCESS)
    },
    SET_ALL_PARTY_SERVICES_CORE(state,data){
      state.ALL_PARTY_SERVICES_CORE = data;
    }
  },
  actions: {

  	HTTP_POST_REQUEST({commit,state},data){
  		return new Promise((resolve,reject)=>{
  			axios.post(data.url, data.payload)
  			.then(function (response) {
  				resolve(response)
  			})
  			.catch(function (error) {
  			 	reject(error)
  			});
  		})
  	},
  	HTTP_GET_REQUEST({commit,state},url){
  		return new Promise((resolve,reject)=>{
  			axios.get(url)
  			.then(function (response) {
  				resolve(response)
  			})
  			.catch(function (error) {
  			 	reject(error)
  			});
  		})
    },
   async Add_New_Shop_First_Step({commit},data){
      console.log(data)
    await  setTimeout(commit('add_new_shop_first_step',data),1500);
    },
    async Save_Shop_Details({commit},data){
      setTimeout(() => {
        commit('Set_Shop_Details',data);
      }, 1500);
    },
    async SavePartyServices({commit},data){
      setTimeout(() => {
        commit('SET_PARTYSERVICES',data);
      }, 1500);
    },
    async SaveExtraServices({commit},data){
      setTimeout(() => {
        commit('SET_EXTRASERVICES',data);
      }, 1500);
    },
    async Save_Shop_Settings({commit},data){
      await setTimeout(() => {
        commit('Set_Shop_Settings',data)
      }, 1500);
    },
    async Save_Shop_Owner_Information({commit},data){
      await setTimeout(() => {
        commit('Set_Shop_Owner_Information',data)
      }, 
      1500);
    },
    async Save_Delivery_Data({commit},data){
      await setTimeout(() => {
         commit('Set_Delivery_Data',data)
      }, 1500);
    },
    async Upload_Shop_API({commit},data){
      // await setTimeout(() => {
      //   await axios.post('https://apis.yamiyami.de/admin-api/api/shop/request',{
            
      //   }).then((res)=>{
      //     console.log(res);
      //   }).catch((err)=>{
      //     console.log(err);
      //   });
      // }, 1500);
    },
    async Save_POS({commit},data){
      console.log(data.pos_logo);
      await axios.post(process.env.VUE_APP_API_BASE_URL+"pos/create",
      {
        "shop_id":data.shop_id, 
   "pos_logo":data.pos_logo,
   "commission_type" : {
          "type" : data.commission_type.type,
          "start_time" : data.commission_type.start_time,
          "end_time" : data.commission_type.end_time,
          "percentage_type" : data.commission_type.percentage_type,
          "fixed_amount" : data.commission_type.fixed_amount,
          "monthly_fixed_amount" : data.commission_type.monthly_fixed_amount,
          "commission_name":data.commission_type.commission_name 
        },
   "pos_auth" : {
          "username" : "shop",
          "password" : "1212",
          "password_confirmation" : "1212"
        }
      }).then((res)=>{
        console.log(res);
        if(res.data.error == false)
        {
          console.log("seting notification")
          commit('SET_ADD_POS_SUCCESS',true);
           
        } 
        else{   
          console.log("aksjaksjalksalk")
          commit('SET_ADD_POS_SUCCESS',false)  
        }

      }).catch((err)=>{
        commit('SET_ADD_POS_SUCCESS',false)  
        console.log(err);
      })
    },
    async Get_Services_and_Subservices({commit},data){
      await axios.get(process.env.VUE_APP_API_BASE_URL+'shopinfo').then(async (res)=>{
        console.log(res);
       await commit('SET_SHOP_INFO',res.data.data);
      }).catch((err)=>{
        console.log(err);   
         });   
         await axios.get(process.env.VUE_APP_API_BASE_URL+'shop_service/list').then(async(res)=>{
           console.log(res);
           await commit('SET_SHOP_SERVICES',res.data.data);
         }).catch((err)=>{
           console.log(err);
         })

         
    },
    async GET_SHOPIDS({commit}){
      console.log("getting the shop ids");
      await axios.get(process.env.VUE_APP_API_BASE_URL+"shop/ids").then(async(res)=>{
        
        console.log(res);
        await commit('SET_SHOPS_IDS',res.data.data);
      }).catch((err)=>{
        console.log(err);
      })
    },
    async GET_STATES({commit},data){
      console.log("getting state:"+data)
     await axios.post(process.env.VUE_APP_API_BASE_URL+"state/list",{
       country_id:data 
     },{
       headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
       }
     }).then((res)=>{
      
      console.log(res.data.data);
      
     
     }).catch((err)=>{
       console.log(err);
     });
    }, 
    async GET_SHOP_NAME({commit},data){
      await axios.post(process.env.VUE_APP_API_BASE_URL+"shop/name ",{
        uuid:data
      },{
        headers:{
          "Content-Type":"application/json",
           "Accept":"application/json"
        }
      }).then((res)=>{
         commit('SET_SHOPNAME',res.data.data[1]);
      }).catch((err)=>{
        console.log(err);
      })
    },
    async SET_NULL_POS({state}){
      state.ADD_POS_SUCCESS=null;
    },
    async SET_NULL_SHOP({state}){
      state.ADD_SHOP_SUCCESS=null;
    },
    async ADD_NEW_SHOP({commit,state},data){

      await axios.post(process.env.VUE_APP_API_BASE_URL+"shop/add/request",{
        "is_request":false,
        "is_new":state.is_new,
        "shop_service_id":state.addShopPopupData.shop_details.shop_service_id,
        "service_id":state.addShopPopupData.shop_details.service_id,
        "shop_name":state.addShopPopupData.shop_details.shop_name,
        "sub_service_id":[],
        "cuisine_id":state.addShopPopupData.shop_details.cuisine_id,
        "reserved_food_id":state.addShopPopupData.shop_details.reserved_food_id,
        "shop_seo":state.addShopPopupData.shop_details.shop_seo,
        "shop_slug":state.addShopPopupData.shop_details.shop_slug,
        "description":state.addShopPopupData.shop_details.description, 
        "logo_path":state.addShopPopupData.shop_details.logo_path,
        "hrb_no" : state.addShopPopupData.shop_details.hrb_no,
        "commission_type":state.addShopPopupData.commission_type,
        "phone":state.addShopPopupData.shop_phone,
        "fax":state.addShopPopupData.shop_fax,
        "order_type": state.addShopPopupData.order_transfer,
       "payment_method" : {
         type:state.addShopPopupData.payment_method.type,
         method:state.addShopPopupData.payment_method.options,
       },
        "pauouts":{
          type:state.addShopPopupData.payouts.type,
          receiver_option:{
            type:state.addShopPopupData.payouts.receiver_option.type,
            owner_name:state.addShopPopupData.payouts.receiver_option.owner_name,
            bank_name:state.addShopPopupData.payouts.receiver_option.bank_name,
            iban:state.addShopPopupData.payouts.receiver_option.iban,
            bic:state.addShopPopupData.payouts.receiver_option.bic
          }
        },
        "owner_info":{
          gender:state.addShopPopupData.owner_info.gender,
          first_name:state.addShopPopupData.owner_info.first_name,
          last_name:state.addShopPopupData.owner_info.last_name,
          zip_code:state.addShopPopupData.owner_info.zip_code,
          street:state.addShopPopupData.owner_info.street,
          house_no:state.addShopPopupData.owner_info.house_no,
          st_nr:state.addShopPopupData.owner_info.st_nr,
          umst_id:state.addShopPopupData.owner_info.umst_id,
          description:state.addShopPopupData.owner_info.description,
          shop_auth:{
            username:state.addShopPopupData.owner_info.shop_auth.email,
            password:state.addShopPopupData.owner_info.shop_auth.password,
            password_confirmation:state.addShopPopupData.owner_info.shop_auth.password_confirmation,
          },
          "shop_timing":[],//state.addShopPopupData.owner_info.opening_time
        },
        "extra_services" :  state.addShopPopupData.extra_services,
        "party_services_cores" : {
          ...state.addShopPopupData.party_services_cores
        },
        
        // "country_id":data.country_id,
        // "city_id":data.city_id,
        // "state_id":data.state_id, 

      },{headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }}).then((res)=>{
        console.log(res);
       
        if(res.data.error == false)
        {
          commit('SET_ADD_SHOP_SUCCESS',true);  
        }
        else{
          commit('SET_ADD_SHOP_SUCCESS',false);
        }
      }).catch((err)=>{ 
        commit('SET_ADD_SHOP_SUCCESS',false);
      })
    },
    async GET_PARTY_SERVICES({commit}){
      await axios.get(process.env.VUE_APP_API_BASE_URL+"partyservice/all").then(async(res)=>{
        await commit('SET_ALL_PARTY_SERVICES_CORE',res.data.data);
      }).catch((err)=>{
        console.log(err);
      })
    },

 
  },
  plugins: [new VuexPersistence().plugin]
})
