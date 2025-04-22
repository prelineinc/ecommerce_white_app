import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'

import AdminLayout from '../app/admin/index'
import {
  AdminHomePage,
  BannerPage,
  BrandPage,
  ItemPage,
  PaymentPage,
  OrderPage,
  CategoryPage,
  AdminItemDetailPage,
  BannerDetailPage,
  BrandDetailPage,
  CategoryDetailPage,
  DeliveryDetailPage,
  OrderDetailPage,
  PaymentDetailPage,
  AddminAddItemPage,
  AddBrandPage,
  AddCategoryPage,
  AdminRentalItemPage,
  AdminReturnItemPage,
  RentalOrderPage,
  RentalOrderDetailPage,
  DashboardDetailPage
} from '../pages/admin/index'

import LoginPage from '../pages/LoginPage.vue'
import UserLayout from '../app/user/index'
//import UserHomePage from '../pages/user/UserHomePage.vue'

import {
  ItemDetailPage,
  UserHomePage,
  CartPage,
  CheckoutPage,
  FeedbackPage,
  UserItemPage,
  UserOrderPage,
  WishlistPage,
  ProfilePage,
  TermConditionPage,
  PrivacyPolicyPage,
  ContactPage,
  TrendingPage,
  AboutusPage,
  SupportPage,
  ReturnPolicyPage,
  UserOrderDetailPage,
  FAQPage,
  UserAccountPage,
  UserPasswordPage,
  SubCategoryPage,
  CancellationPolicyPage,
  UserRentalItemPage,
  RentalExtentionPage
} from '../pages/user/index'
import OtpPage from '../pages/OtpPage.vue'
import TrackOrderPage from '../pages/TrackOrderPage.vue'
import { useAuthStore } from '../stores/authstore'
import AccessDeniedPage from '@/pages/AccessDeniedPage.vue'

//const authStore = useAuthStore();
const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    meta:{requiredRoles: ['admin']},
    //beforeEnter: checkAuth,
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: AdminHomePage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Dashboard' }
      },
      {
        name: 'Dashboard Detail',
        path: 'dashboard/:type',
        component: DashboardDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Dashboard' }
      },
      {
        name: 'Banner',
        path: 'banner',
        component: BannerPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Banner' }
      },
      {
        name: 'BannerDetailPage',
        path: 'banner/:id',
        component: BannerDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Banner Detail' }
      },
      {
        name: 'Admin Brand',
        path: 'brand',
        component: BrandPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Brand' }
      },
      {
        name: 'AddBrand',
        path: 'brand/add',
        component: AddBrandPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Add Brand' }
      },
      {
        name: 'BrandDetailPage',
        path: 'brand/:id',
        component: BrandDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Brand Detail' }
      },
      {
        name: 'Delivery',
        path: 'delivery',
        component: AdminHomePage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Delivery' }
      },
      {
        name: 'DeliveryDetailPage',
        path: 'delivery/:id',
        component: DeliveryDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Delivery Detail' }
      },
      {
        name: 'AdminItem',
        path: 'item',
        component: ItemPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Item' }
      },
      {
        name: 'AdminItemDetailPage',
        path: 'item/:id',
        component: AdminItemDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Item Detail' }
      },
      {
        name: 'AdminAddItemPage',
        path: 'item/add',
        component: AddminAddItemPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Add Item' }
      },
      {
        name: 'Payment',
        path: 'payment',
        component: PaymentPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Payment' }
      },
      {
        name: 'PaymentDetailPage',
        path: 'payment/:id',
        component: PaymentDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Payment Detail' }
      },
      {
        name: 'OrderDetail',
        path: 'order',
        component: OrderPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Order' }
      },
      {
        name: 'OrderDetailPage',
        path: 'order/:id',
        component: OrderDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Order Detail' }
      },
      {
        name: 'Category',
        path: 'category',
        component: CategoryPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Category' }
      },
      {
        name: 'Add Category',
        path: 'category/add',
        component: AddCategoryPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Add Category' }
      },
      {
        name: 'CategoryDetailPage',
        path: 'category/:id',
        component: CategoryDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Category Detail' }
      },
      {
        name: 'AdminReturnItemPage',
        path: 'return',
        component: AdminReturnItemPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Return Item' }
      },
      {
        name: 'AdminRentalItemPage',
        path: 'rental',
        component: AdminRentalItemPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Rental Item' }
      },
      {
        name: 'RentalOrderDetail',
        path: 'rentalorder',
        component: RentalOrderPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Rental Order' }
      },
      {
        name: 'RentaOrderDetailPage',
        path: 'rentalorder/:id',
        component: RentalOrderDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Rental Order Detail' }
      },
    ]
  },
  {
    path: '/',
    name: 'User',
    component: UserLayout,
    meta: { requiresAuth: false, requiredRoles: [],pageTitle: 'Home' },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: { pageTitle: 'Preline | Login' }
      },
      {
        name: 'Home',
        path: '',
        component: UserHomePage,
        meta: { pageTitle: 'Preline | Home' }
      },
      {
        path: 'item',
        name: 'User Item',
        component: () => import('../pages/user/UserItemPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Item' }
      },
      {
        path: 'girls/:id',
        name: 'Girls',
        component: () => import('../pages/user/GirlsPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Girls' }
      },
      {
        path: 'boys',
        name: 'Boys',
        component: () => import('../pages/user/BoysPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Boys' }
      },{
        path: 'boys/:id',
        name: 'Boys',
        component: () => import('../pages/user/BoysPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Boys' }
      },
      {
        path: 'toys',
        name: 'Toys',
        component: () => import('../pages/user/ToysPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Toys' }
      },
      {
        path: 'toys/:id',
        name: 'Toys',
        component: () => import('../pages/user/ToysPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Toys' }
      },
      {
        path: 'baby-care',
        name: 'Baby Care',
        component: () => import('../pages/user/BabyCarePage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Baby Care' }
      },{
        path: 'baby-care/:id',
        name: 'Baby Care',
        component: () => import('../pages/user/BabyCarePage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Baby Care' }
      },
      {
        path: 'women',
        name: 'Women',
        component: () => import('../pages/user/WomenPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Mom' }
      },{
        path: 'women/:id',
        name: 'Women',
        component: () => import('../pages/user/WomenPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Mom' }
      },
      {
        path: 'rental',
        name: 'Rental',
        component: () => import('../pages/user/RentalPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Rental' }
      },
      {
        path: 'brand',
        name: 'Brand',
        component: () => import('../pages/user/BrandPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Brand' }
      },
      {
        path: 'brand/:id',
        name: 'Brand',
        component: () => import('../pages/user/BrandPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Brand' }
      },
      {
        path: 'best-seller',
        name: 'Best Seller',
        component: () => import('../pages/user/BestSellerPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Best Seller' }
      },
      {
        path: 'todays-offer',
        name: 'Todays Offer',
        component: () => import('../pages/user/TodaysOfferPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Todyas Offer' }
      },
      {
        path: 'category-type',
        name: 'Welcome',
        component: () => import('../pages/user/CategoryPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline' }
      },
      {
        path: 'offer-price/:price',
        name: 'Offer Price',
        component: () => import('../pages/user/OfferPricePage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Offer Price' }
      },
      {
        path: 'offer-discount/:discount',
        name: 'Top Offer',
        component: () => import('../pages/user/OfferDiscountPage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Offer Discount' }
      },
      {
        path: 'by-age/:age',
        name: 'Age',
        component: () => import('../pages/user/AgePage.vue'),
        meta: { requiresAuth: false, pageTitle: 'Preline | Age' }
      },
      {
        name: 'Item Detail',
        path: 'item/:id',
        component: ItemDetailPage,
        meta: { pageTitle: 'Preline | Item Detail' }
      },
      {
        name: 'UserRentalItem',
        path: 'rental',
        component: UserRentalItemPage,
        meta: { requiresAuth: false, pageTitle: 'Preline | Rental Item' }
      },
      {
        name: 'UserRentalItemDetail',
        path: 'rental/:id',
        component: UserRentalItemPage,
        meta: { pageTitle: 'Preline | Rental Item Detail' }
      },
      {
        name: 'UserOrderDetails',
        path: 'orders/:id',
        component: UserOrderDetailPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | User Order' }
      },

      {
        name: 'Checkout',
        path: 'checkout',
        component: CheckoutPage,
        meta: { pageTitle: 'Checkout' }
      },
      {
        name: 'Feedback',
        path: 'feedback/:itemid',
        component: FeedbackPage,
        meta: { requiresAuth: true, pageTitle: 'Preline | Feedback' }
      },
      {
        name: 'Feedback',
        path: 'feedback',
        component: FeedbackPage,
        meta: { requiresAuth: false, pageTitle: 'Preline | Feedback' }
      },
      {
        name: 'SubCategory',
        path: 'subcategory/:id',
        component: SubCategoryPage,
        meta: { requiresAuth: false, pageTitle: 'Preline | SubCategory' }
      },
      {
        name: 'Account',
        path: 'account',
        component: UserAccountPage,
        meta:{ requiredRoles: ['user'] },
        children: [
          {
            name: 'Profile',
            path: 'profile',
            component: ProfilePage,
            meta: { requiresAuth: true, pageTitle: 'Preline | Profile' }
          },
          {
            name: 'WishList',
            path: 'wishlist',
            component: WishlistPage,
            meta: { requiresAuth: true, pageTitle: 'Preline | Wish List' }
          },
          {
            name: 'Orders',
            path: 'orders',
            component: UserOrderPage,
            meta: { requiresAuth: true, pageTitle: 'Preline | Orders' }
          },
          {
            name: 'Support',
            path: 'support',
            component: SupportPage,
            meta: { requiresAuth: true, pageTitle: 'Preline | Support' }
          },
          {
            name: 'Password',
            path: 'password',
            component: UserPasswordPage,
            meta: { requiresAuth: true, pageTitle: 'Preline | Password' }
          },
          {
            name: 'Track',
            path: 'track',
            component: TrackOrderPage,
            meta: { requiresAuth: false, pageTitle: 'Preline | Track' }
          }
        ]
      },
      {
        name: 'TermsCondition',
        path: 'termscondition',
        component: TermConditionPage,
        meta: { pageTitle: 'Preline | Terms Condition' }
      },
      {
        name: 'PrivacyPolicy',
        path: 'privacypolicy',
        component: PrivacyPolicyPage,
        meta: { pageTitle: 'Preline | Privacy Policy' }
      },

      {
        name: 'CancellationPolicyPage',
        path: 'cancellationpolicy',
        component: CancellationPolicyPage,
        meta: { pageTitle: 'Preline | Cancellation Policy' }
      },
      {
        name: 'Contact',
        path: 'contact',
        component: ContactPage,
        meta: { pageTitle: 'Preline | Contact' }
      },
      {
        name: 'Trending',
        path: 'trending',
        component: TrendingPage,
        meta: { pageTitle: 'Preline | Trending' }
      },
      {
        name: 'Aboutus',
        path: 'aboutus',
        component: AboutusPage,
        meta: { pageTitle: 'Preline | Aboutus' }
      },

      {
        name: 'OTP',
        path: 'otp',
        component: OtpPage,
        meta: { pageTitle: 'Preline | OTP' }
      },
      {
        name: 'Return',
        path: 'returnpolicy',
        component: ReturnPolicyPage,
        meta: { pageTitle: 'Preline | Return Policy' }
      },
      {
        name: 'FAQ',
        path: 'faq',
        component: FAQPage,
        meta: { pageTitle: 'Preline | FAQ' }
      },
      {
        name: 'TRACK',
        path: 'track',
        component: TrackOrderPage,
        meta: { pageTitle: 'Preline | Track Order' }
      },
      {
        name: 'PrelineSupport',
        path: 'support',
        component: SupportPage,
        meta: { requiresAuth: false, pageTitle: 'Preline | Support' }
      },
      {
        name: 'RentalExtention',
        path: 'rentalextention/:id',
        component: RentalExtentionPage,
        meta: { requiresAuth: false, pageTitle: 'Preline | Extention' }
      },
      {
        path: 'access-denied',
        name:'Access Denied',
        component:AccessDeniedPage,
        meta: { requiresAuth: false, pageTitle: 'Preline | Access Denied' }
      },
    ]
  },  
  {
    path: '/:pathMatch(.*)*',
    meta: { requiredRoles: [] },
    redirect: '/'
  }
]
function removeQueryParams(to) {
  if (Object.keys(to.query).length) return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}
const createHistory = import.meta.env.SERVER
  ? createMemoryHistory
  : import.meta.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHistory

const router = createRouter({
  // scrollBehavior: (to, from) => {
  //   // If we aren't changing the path we are likely just changing a query param
  //   if (to.path === from.path) {
  //     return
  //   }
  //   return { left: 0, top: 0 }
  // },
  mode: 'history',
  history: createHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  }
})

const routerGlobal = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((matchedRoute) => matchedRoute.meta.requiresAuth)) {
    // to.matched.some((matchedRoute) => 
    //   {
    //     console.log('aaa',matchedRoute.meta?.requiredRoles)
    //             return matchedRoute.meta?.requiredRoles?.length;
    //   })

   const authStore = useAuthStore()
   const userType = parseJwt(authStore.recentAuth.accessToken)?.is_admin;
   if (
    to.matched
      .filter((matchedRoute) => matchedRoute.meta?.requiredRoles?.length)
      .every((matchedRouteWithRoleReq) =>
        matchedRouteWithRoleReq.meta?.requiredRoles?.some(
          (requiredRole) => {

          return (userType == requiredRole) ?true:false;
          }
            
        )
      )
  ) {
    // yes! user can visit the requested page
    next();
  } else {
    // no, user is logged in but doesn't have the right role required, redirect user to unauthorized
    next({ path: '/access-denied' });
  }
    //authStore.isUserExist === '' ? next({ path: '/login' }) : next()
  }
  document.title = to.meta.pageTitle !== undefined ? (to.meta.pageTitle as string) : 'Preline'
  next()
})

function parseJwt(token:string) {
  try {
    const base64Url = token.split('.')[1]; // Extract payload
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Fix encoding
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}

export default { router, routerGlobal }
