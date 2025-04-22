<template>
  <div class="min-h-screen bg-gray-100 pt-2 pb-16">
    <div class="w-full mx-auto 2xl:container px-4">
      <div class="relative my-2">
        <BreadCrumComponent :item="productbreadcrum"/>
      </div>
      <div class="my-6">
        <h1 class="m-0 text-2xl font-bold">{{route.query.name}}</h1>
      </div>
      <div class="flex flex-col md:flex-row gap-2 md:gap-5 lg:gap-10">
        <div class="w-full md:w-80">
          <div class="bg-white rounded-lg mb-3 shadow">
            <ul class="py-3 flex flex-row md:flex-col flex-wrap">
              <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                <a
                  @click="RedirectProfile()" :class="route.name === 'Profile' ? '!border-yellow-600 text-yellow-900':''"
                  class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-yellow-600 focus:text-yellow-800 hover:no-underline cursor-pointer"
                  >Profile & Address</a
                >
              </li>
              <!-- <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                <a  @click="RedirectPassword()" :class="route.name === 'Password' ? '!border-yellow-600 text-yellow-900':''"
                  class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-yellow-600 focus:text-yellow-800 hover:no-underline cursor-pointer"
                  >Change Password</a
                >
              </li> -->
                <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                <a
                  @click="RedirectOrders()" :class="route.name === 'Orders' ? '!border-yellow-600 text-yellow-900':''"
                  class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-yellow-600 focus:text-yellow-800 hover:no-underline cursor-pointer"
                  >My Orders</a
                >
              </li>
              <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                <a
                  @click="RedirectWishlist()" :class="route.name === 'WishList' ? '!border-yellow-600 text-yellow-900':''"
                  class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-yellow-600 focus:text-yellow-800 hover:no-underline cursor-pointer"
                  >My Wishlist</a
                >
              </li>
              <!-- <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                <a @click="RedirectProfile()" :class="route.name === 'Profile' ? '!border-yellow-600 text-yellow-900':''"
                  class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-yellow-600 focus:text-yellow-800 hover:no-underline cursor-pointer"
                  >My Refunds</a
                >
              </li> -->
              <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                <a
                  @click="RedirectTrack()" :class="route.name === 'Track' ? '!border-yellow-600 text-yellow-900':''"
                  class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-yellow-600 focus:text-yellow-800 hover:no-underline cursor-pointer"
                  >Track Order</a
                >
              </li>
              <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                <a  @click="RedirectSupport()" :class="route.name === 'Support' ? '!border-yellow-600 text-yellow-900':''"
                  class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-yellow-600 focus:text-yellow-800 hover:no-underline cursor-pointer"
                >
                  Help & Support</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full">
          <div class="bg-white rounded-lg p-4 mb-3 shadow grid">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue';
import { useRouter ,useRoute} from 'vue-router'
import {  RouterView } from 'vue-router';
import {BreadCrumComponent} from '../../components/user/index';
const router = useRouter()
const route = useRoute()
const breadcrumDetails = ref(['Account',  ]);
const productbreadcrum = computed(()=>{
return {
    name:route.name?.toString(),
    href:route?.fullPath,
      breadcrumbs: [
        { id: 1, name: 'Account', href: '/account/profile' },
        // { id: 2, name: route.query.type, href: '#' }
      ]
    }
});
const RedirectOrders = () => {
  router.push('/account/orders');
}
const RedirectProfile = () => {
  router.push('/account/profile');
}
const RedirectWishlist = () => {
  router.push('/account/wishlist');
}

const RedirectPassword = () => {
  router.push('/account/password');
}

const RedirectSupport = () => {
  router.push('/account/support');
}

const RedirectRefund= () => {
  router.push('/account/wishlist');
}

const RedirectTrack= () => {
  router.push('/account/track');
}




</script>

<style>
</style>