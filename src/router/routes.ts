import { RouteRecordRaw } from 'vue-router';

const isActive=true;
const admin = [
  {
    path: '/',
    component: () => import('../app/admin/adminLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/admin/IndexPage.vue') },
      { path: 'category', component: () => import('../pages/admin/CategoryPage.vue') },
      { path: 'coupon', component: () => import('../pages/admin/CouponPage.vue') },
      { path: 'item', component: () => import('../pages/admin/ItemPage.vue') },
      { path: 'offer', component: () => import('../pages/admin/OfferPage.vue') },
      { path: 'product', component: () => import('../pages/admin/ProductPage.vue') },
      { path: 'banner', component: () => import('../pages/admin/BannerPage.vue') },
      { path: 'delivery', component: () => import('../pages/admin/DeliveryPage.vue') }
    ],
  }
];
const user = [
  {
    path: '/',
    component: () => import('../app/user/userLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/user/HomePage.vue') },
      { path: 'cart', component: () => import('../pages/user/CartPage.vue') },
      { path: 'item', component: () => import('../pages/user/ItemPage.vue') },
      { path: 'offer', component: () => import('../pages/user/OfferPage.vue') },
      { path: 'product', component: () => import('../pages/user/ProductPage.vue') },
      { path: 'profile', component: () => import('../pages/user/ProfilePage.vue') },
      { path: 'trackorder', component: () => import('../pages/user/TrackingOrderPage.vue') },
      { path: 'trending', component: () => import('../pages/user/TrendingPage.vue') },
      { path: 'wishlist', component: () => import('../pages/user/WishListPage.vue') },
      { path: 'delivery', component: () => import('../pages/user/DeliveryPage.vue') }
    ],
  }
];

const conditionalRoutes = isActive? admin : user;
const routes = [
  ...conditionalRoutes
  ,{
    path: '/:catchAll(.*)*',
    component: () => import('../sharedcomponents/PageNotFound.vue'),
  }
  ,{
    path: '/login',
    component: () => import('../pages/LoginPage.vue'),
  },
  ,{
    path: '/signup',
    component: () => import('../pages/SignupPage.vue'),
  },
];

export default routes;
