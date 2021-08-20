import Vue from 'vue'
import Router from 'vue-router'
import NewDash from "./views/NewDash"
import StandardUser from "./views/StandardUser"
import PremiumUser from "./views/PremiumUser"
import DiamondUser from "./views/DiamondUser"
import Post from "./views/Post"
import News from "./views/News"
import AddMusic from "./views/AddMusic"
import Artist from "./views/Artist"
import Videos from "./views/Videos"
import School from "./views/School"
import Events from "./views/Events"
import OnlineShopDashboard from "./views/OnlineShopDashboard"
import AddCategory from "./views/AddCategory"
import AddItems from "./views/AddItems"
import ManageItems from "./views/ManageItems"
import History from "./views/History"
import Tickets from "./views/Tickets"
import NewRequest from "./views/NewRequest"
import ManageFanPage from "./views/ManageFanPage"
import BlockedFanPage from "./views/BlockedFanPage"
import Income from "./views/Income"
import Donation from "./views/Donation"
import Voting from "./views/Voting"
import Media from "./views/Media"
import UserReport from "./views/UserReport"
import UserWarning from "./views/UserWarning"
import Bazar from "./views/Bazar"
import Language from "./views/Language"
import MainPage from "./views/MainPage"
import FTPSetting from "./views/FTPSetting"
import HowItWorks from "./views/HowItWorks"
import PaymentMethod from "./views/PaymentMethod"
import PaymentOffices from "./views/PaymentOffices"
import PageSettings from "./views/PageSettings"
import AddAdmin from "./views/AddAdmin"
import LevelSetting from "./views/LevelSetting"
import PolicyAndTerms from "./views/PolicyAndTerms"
import BannerSetting from "./views/BannerSetting"
import StandardUserSettings from "./views/StandardUserSettings"
import PremiumUserSettings from "./views/PremiumUserSettings"
import VIPUserSettings from "./views/VIPUserSettings"
import ChatSettings from "./views/ChatSettings"
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: "NewDash",component: NewDash },
    { path: '/standard-user', name: "StandardUser", component: StandardUser },
    { path: '/premium-user', name: "PremiumUser", component: PremiumUser },
    { path: '/diamond-user', name: "DiamondUser", component: DiamondUser },
    { path: '/post', name: "Post", component: Post },
    { path: '/news', name: "News", component: News },
    { path: '/add-music', name: "AddMusic", component: AddMusic },
    { path: '/artist', name: "Artist", component: Artist },
    { path: '/videos', name: "Videos", component: Videos },
    { path: '/school', name: "School", component: School },
    { path: '/events', name: "Events", component: Events },
    { path: '/online-shop-dashboard', name: "OnlineShopDashboard", component: OnlineShopDashboard },
    { path: '/add-category', name: "AddCategory", component: AddCategory },
    { path: '/add-items', name: "AddItems", component: AddItems },
    { path: '/manage-items', name: "ManageItems", component: ManageItems },
    { path: '/history', name: "History", component: History },
    { path: '/tickets', name: "Tickets", component: Tickets },
    { path: '/new-request', name: "NewRequest", component: NewRequest },
    { path: '/manage-fan-page', name: "ManageFanPage", component: ManageFanPage },
    { path: '/blocked-fan-page', name: "BlockedFanPage", component: BlockedFanPage },
    { path: '/income', name: "Income", component: Income },
    { path: '/donation', name: "Donation", component: Donation },
    { path: '/voting', name: "Voting", component: Voting },
    { path: '/media', name: "Media", component: Media },
    { path: '/user-report', name: "UserReport", component: UserReport },
    { path: '/user-warning', name: "UserWarning", component: UserWarning },
    { path: '/bazar', name: "Bazar", component: Bazar },
    { path: '/language', name: "Language", component: Language },
    { path: '/main-page', name: "MainPage", component: MainPage },
    { path: '/ftp-setting', name: "FTPSetting", component: FTPSetting },
    { path: '/how-it-works', name: "HowItWorks", component: HowItWorks },
    { path: '/payment-method', name: "PaymentMethod", component: PaymentMethod },
    { path: '/payment-offices', name: "PaymentOffices", component: PaymentOffices },
    { path: '/page-settings', name: "PageSettings", component: PageSettings },
    { path: '/add-admin', name: "AddAdmin", component: AddAdmin },
    { path: '/level-setting', name: "LevelSetting", component: LevelSetting },
    { path: '/policy-and-terms', name: "PolicyAndTerms", component: PolicyAndTerms },
    { path: '/banner-setting', name: "BannerSetting", component: BannerSetting },
    { path: '/standard-user-settings', name: "StandardUserSettings", component: StandardUserSettings },
    { path: '/premium-user-settings', name: "PremiumUserSettings", component: PremiumUserSettings },
    { path: '/vip-user-settings', name: "VIPUserSettings", component: VIPUserSettings },
    { path: '/chat-settings', name: "ChatSettings", component: ChatSettings },
  ]
});

export default router


