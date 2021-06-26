import Vue from 'vue'
import Router from 'vue-router'
// Pages
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Request from './views/Request.vue'
import Profile from './views/Profile.vue'
import PosSystem from './views/PosSystem.vue'
// Dinner Tab
import DinnerShop from './views/dinner/DinnerShop.vue'
import DinnerOrder from './views/dinner/DinnerOrder.vue'
// Reports Tab
import ReportsUserTicket from './views/reports/UserTicket.vue'
import ReportsShopTicket from './views/reports/ShopTicket.vue'
// Deliver Tab
import DeliverShop from './views/deliver/DeliverShop.vue'
import DeliverOrder from './views/deliver/DeliverOrder.vue'
// Restaurant Tab
import RestaurantShop from './views/restaurant/RestaurantShop.vue'
import RestaurantReservation from './views/restaurant/RestaurantReservation.vue'
// Party Service Tab
import PartyServiceShop from './views/party/PartyServiceShop.vue'
import PartyServiceBids from './views/party/PartyServiceBids.vue'
import PartyServiceRequest from './views/party/PartyServiceRequest.vue'
import PartyServiceBooking from './views/party/PartyServiceBooking.vue'
import PartyServiceProfile from './views/party/PartyServiceProfile.vue'
import PartyServiceOwnerProfile from './views/party/PartyServiceOwnerProfile.vue'
// Shop Offer Tab
import ShopOfferJob from './views/offer/ShopOfferJob.vue'
import ShopOfferFood from './views/offer/ShopOfferFood.vue'
import ShopOfferEvent from './views/offer/ShopOfferEvent.vue'
import ShopOfferOffer from './views/offer/ShopOfferOffer.vue'
import ShopOfferCoupon from './views/offer/ShopOfferCoupon.vue'
import ShopOfferStempcard from './views/offer/ShopOfferStempcard.vue'
// Shop Extra Tab
import ShopExtraFood from './views/extra/ShopExtraFood.vue'
import ShopExtraParty from './views/extra/ShopExtraParty.vue'
import ShopExtraService from './views/extra/ShopExtraService.vue'
import ShopExtraAllergy from './views/extra/ShopExtraAllergy.vue'
import ShopExtraKitchen from './views/extra/ShopExtraKitchen.vue'
import ShopExtraAdditive from './views/extra/ShopExtraAdditive.vue'
import SettingsMenuImage from './views/settings/MenuImage.vue'
// Customer Tab
import CustomerUser from './views/customer/CustomerUser.vue'
import CustomerClient from './views/customer/CustomerClient.vue'
// Payments Tab
import PaymentWay from './views/payment/PaymentWay.vue'
import PaymentPayout from './views/payment/PaymentPayout.vue'
import PaymentInvoice from './views/payment/PaymentInvoice.vue'
// Shop Activity Tab
import ShopActivityOrder from './views/activity/ShopActivityOrder.vue'
import ShopActivityParty from './views/activity/ShopActivityParty.vue'
import ShopActivityReview from './views/activity/ShopActivityReview.vue'
import ShopActivityTakeway from './views/activity/ShopActivityTakeway.vue'
import ShopActivityReservation from './views/activity/ShopActivityReservation.vue'
// Marketing Tab
import MarketingNewsLatter from './views/marketing/MarketingNewsLatter.vue'
import MarketingPopupSettings from './views/marketing/MarketingPopupSettings.vue'
import MarketingAddShopCoupon from './views/marketing/MarketingAddShopCoupon.vue'
import MarketingAddShopDiscount from './views/marketing/MarketingAddShopDiscount.vue'
import MarketingShopCouponManage from './views/marketing/MarketingShopCouponManage.vue'
import MarketingShopDiscountManage from './views/marketing/MarketingShopDiscountManage.vue'
// Income Tab
import IncomeShopIncome from './views/income/ShopIncome.vue'
import IncomeYamiYamiIncome from './views/income/YamiYamiIncome.vue'
// Settings Tab
import SettingsWebsiteLanguage from './views/settings/WebsiteLanguage.vue'
import OfferCards from './views/settings/offerCards.vue'
import SettingsPolicyAndTerms from './views/settings/PolicyAndTerms.vue'
import SettingsEmailTemplates from './views/settings/EmailTemplates.vue'
import SettingsWebsiteSetting from './views/settings/WebsiteSetting.vue'
import SettingsAdmin from './views/settings/SettingsAdmin.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Pages
    { path: '/dashboard', name: 'Home', component: Home },
    { path: '/', name: 'Login', component: Login, meta: { requiresAuth: true} },
    // { path: '/register', name: 'Register', component: Register },
    { path: '/request', name: 'Request', component: Request },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/pos-system', name: 'PosSystem', component: PosSystem },
    // Reports Tab
    { path: '/reports/user-ticket', name: 'ReportsUserTicket', component: ReportsUserTicket },
    { path: '/reports/shop-ticket', name: 'ReportsShopTicket', component: ReportsShopTicket },
    // Deliver Tab
    { path: '/deliver/shop', name: 'DeliverShop', component: DeliverShop },
    { path: '/deliver/order', name: 'DeliverOrder', component: DeliverOrder },
    // Dinner Tab
    { path: '/dinner/shop', name: 'DinnerShop', component: DinnerShop },
    { path: '/dinner/order', name: 'DinnerOrder', component: DinnerOrder },
    // Restaurant Tab
    { path: '/restaurant/shop', name: 'RestaurantShop', component: RestaurantShop },
    { path: '/restaurant/reservation', name: 'RestaurantReservation', component: RestaurantReservation },
    // Party Service Tab
    { path: '/party-service/shop', name: 'PartyServiceShop', component: PartyServiceShop },
    { path: '/party-service/request', name: 'PartyServiceRequest', component: PartyServiceRequest },
    { path: '/party-service/bids', name: 'PartyServiceBids', component: PartyServiceBids },
    { path: '/party-service/booking', name: 'PartyServiceBooking', component: PartyServiceBooking },
    { path: '/party-service/profile', name: 'PartyServiceProfile', component: PartyServiceProfile },
    { path: '/party-service/OwnerProfile', name: 'PartyServiceOwnerProfile', component: PartyServiceOwnerProfile },
    // Shop Offer Tab
    { path: '/shop-offer/foods', name: 'ShopOfferFood', component: ShopOfferFood },
    { path: '/shop-offer/events', name: 'ShopOfferEvent', component: ShopOfferEvent },
    { path: '/shop-offer/stempcards', name: 'ShopOfferStempcard', component: ShopOfferStempcard },
    { path: '/shop-offer/offers', name: 'ShopOfferOffer', component: ShopOfferOffer },
    { path: '/shop-offer/coupons', name: 'ShopOfferCoupon', component: ShopOfferCoupon },
    { path: '/shop-offer/jobs', name: 'ShopOfferJob', component: ShopOfferJob },
    // Payment Tab
    { path: '/payments/payout', name: 'PaymentPayout', component: PaymentPayout },
    { path: '/payments/payment-way', name: 'PaymentWay', component: PaymentWay },
    { path: '/payments/invoice', name: 'PaymentInvoice', component: PaymentInvoice },
    // Customers Tab
    { path: '/customers/client', name: 'CustomerClient', component: CustomerClient },
    { path: '/customers/user', name: 'CustomerUser', component: CustomerUser },
    // Shop Activity Tab
    { path: '/shop-activity/orders', name: 'ShopActivityOrder', component: ShopActivityOrder },
    { path: '/shop-activity/reservations', name: 'ShopActivityReservation', component: ShopActivityReservation },
    { path: '/shop-activity/takeaway', name: 'ShopActivityTakeway', component: ShopActivityTakeway },
    { path: '/shop-activity/party-service', name: 'ShopActivityParty', component: ShopActivityParty },
    { path: '/shop-activity/reviews', name: 'ShopActivityReview', component: ShopActivityReview },
    // Shop Extra Tab
    { path: '/shop-extra/allergy', name: 'ShopExtraAllergy', component: ShopExtraAllergy },
    { path: '/shop-extra/additive', name: 'ShopExtraAdditive', component: ShopExtraAdditive },
    { path: '/shop-extra/kitchen', name: 'ShopExtraKitchen', component: ShopExtraKitchen },
    { path: '/shop-extra/shop-service', name: 'ShopExtraService', component: ShopExtraService },
    { path: '/shop-extra/food-extra', name: 'ShopExtraFood', component: ShopExtraFood },
    { path: '/shop-extra/party-service', name: 'ShopExtraParty', component: ShopExtraParty },
    { path: '/shop-extra/menu-images', name: 'SettingsMenuImage', component: SettingsMenuImage },
    // Marketing Tab
    { path: '/marketing/news-latter', name: 'MarketingNewsLatter', component: MarketingNewsLatter },
    { path: '/marketing/popup-settings', name: 'MarketingPopupSettings', component: MarketingPopupSettings },
    { path: '/marketing/popup-settings/shop-coupon/add', name: 'MarketingAddShopCoupon', component: MarketingAddShopCoupon },
    { path: '/marketing/popup-settings/shop-discount/add', name: 'MarketingAddShopDiscount', component: MarketingAddShopDiscount },
    { path: '/marketing/popup-settings/shop-coupon/manage', name: 'MarketingShopCouponManage', component: MarketingShopCouponManage },
    { path: '/marketing/popup-settings/shop-discount/manage', name: 'MarketingShopDiscountManage', component: MarketingShopDiscountManage },
    // Income Tab
    { path: '/income/shop', name: 'IncomeShopIncome', component: IncomeShopIncome },
    { path: '/income/yamiyami', name: 'IncomeYamiYamiIncome', component: IncomeYamiYamiIncome },
    // Settings Tab
    { path: '/settings/laguages', name: 'SettingsWebsiteLanguage', component: SettingsWebsiteLanguage },
    { path: '/settings/policy-terms', name: 'SettingsPolicyAndTerms', component: SettingsPolicyAndTerms },
    { path: '/settings/email-templates', name: 'SettingsEmailTemplates', component: SettingsEmailTemplates },
    { path: '/settings/website', name: 'SettingsWebsiteSetting', component: SettingsWebsiteSetting },
    { path: '/settings/offers', name: 'OfferCards', component: OfferCards },
    { path: '/settings/admin', name: 'SettingsAdmin', component: SettingsAdmin }
  ]
})



// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem('AUTH_TOKEN')) {
//       // checking to avoid loop
//       if (to.name === 'Login') return next();
//       next({
//           path: '/'
//       });
//   }
//   else {
//      next();
//   }
// });

export default router


