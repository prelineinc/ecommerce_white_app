<template>
  <div>
    <AdminHeader />
    <div class="min-h-screen bg-gray-100 pt-2 pb-16">
      <div class="w-full mx-auto 2xl:container px-4">
        <div class="flex flex-col md:flex-row gap-2 sm:gap-5 md:gap-10">
          <div class="w-full md:w-80">
            <div class="bg-white rounded-lg mb-3 shadow">
              <ul class="py-3 flex flex-row md:flex-col flex-wrap">
                <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                  <a @click="RedirectDashboard()"
                    :class="route.name === 'Dashboard' ? '!border-blue-500 text-blue-600' : ''"
                    class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-blue-500 focus:text-blue-500 hover:no-underline cursor-pointer">Dashboard</a>
                </li>
                <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                  <a @click="RedirectItem()" :class="route.name === 'AdminItem' ? '!border-blue-500 text-blue-600' : ''"
                    class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-blue-500 focus:text-blue-500 hover:no-underline cursor-pointer">Item</a>
                </li>
                <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                  <a @click="RedirectOrders()"
                    :class="route.name === 'OrderDetail' ? '!border-blue-500 text-blue-600' : ''"
                    class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-blue-500 focus:text-blue-500 hover:no-underline cursor-pointer">Order</a>
                </li>
                <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                  <a @click="RedirectRentalOrders()"
                    :class="route.name === 'RentalOrderDetail' ? '!border-blue-500 text-blue-600' : ''"
                    class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-blue-500 focus:text-blue-500 hover:no-underline cursor-pointer">Rental
                    Order</a>
                </li>
                <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                  <a @click="RedirectBrand()" :class="route.name === 'Admin Brand' ? '!border-blue-500 text-blue-600' : ''"
                    class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-blue-500 focus:text-blue-500 hover:no-underline cursor-pointer">Brand</a>
                </li>
                <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                  <a @click="RedirectCategory()"
                    :class="route.name === 'Category' ? '!border-blue-500 text-blue-600' : ''"
                    class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-blue-500 focus:text-blue-500 hover:no-underline cursor-pointer">Category</a>
                </li>
                <li class="py-1 grow-1 shrink-0	basis-full sm:basis-1/3">
                  <a @click="RedirectBanner()" :class="route.name === 'Banner' ? '!border-blue-500 text-blue-600' : ''"
                    class="block border-b-4 md:border-b-0 md:border-l-4 border-transparent py-2 px-4 font-semibold text-center md:text-left transition-colors hover:text-blue-500 focus:text-blue-500 hover:no-underline cursor-pointer">Banner</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full">
            <div class="bg-white rounded-lg p-4 mb-3 shadow">
              <router-view :key="$route.path" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AdminHeader from './AdminHeader.vue'
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { BreadCrumComponent } from '../../components/user/index';
const router = useRouter()
const route = useRoute()
const breadcrumDetails = ref(['Account', route.name?.toString()]);
const RedirectOrders = () => {
  router.push('/admin/order')
}
const RedirectRentalOrders = () => {
  router.push('/admin/rentalorder')
}
const RedirectDashboard = () => {
  router.push('/admin/dashboard')
}
const RedirectItem = () => {
  router.push('/admin/item')
}

const RedirectBrand = () => {
  router.push('/admin/brand')
}

const RedirectSupport = () => {
  router.push('/admin/support')
}

const RedirectCategory = () => {
  router.push('/admin/category')
}

const RedirectBanner = () => {
  router.push('/admin/banner')
}
</script>

<style></style>
