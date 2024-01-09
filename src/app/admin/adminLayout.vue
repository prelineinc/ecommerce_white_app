<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-dark">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-primary">
          Ecommerce App

        </q-toolbar-title>

        <!-- <q-btn color="primary" flat @mouseover="pages = true" label="Pages" no-caps>
          <q-menu v-model="pages" @mouseleave="pages = false" fit>
            <q-list style="min-width: 100px">
              <q-item clickable @click="productPage('item')">
                <q-item-section>Item</q-item-section>
              </q-item>
              <q-item clickable @click="productPage('category')">
                <q-item-section>Category</q-item-section>
              </q-item>
              <q-item clickable @click="productPage('product')">
                <q-item-section>Product</q-item-section>
              </q-item>
              <q-item clickable @click="productPage('coupon')">
                <q-item-section>Coupon</q-item-section>
              </q-item>
              <q-item clickable @click="productPage('offer')">
                <q-item-section>Offer</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn> -->

        <q-input dense borderless v-model="text" input-class="text-left" class="q-mx-lg q-px-md search-bar"
          placeholder="Search Products" style="width: 35%;">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search"></q-icon>
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''"></q-icon>
          </template>
        </q-input>

        <q-btn flat round icon="person">
          <q-tooltip class="q-pa-lg bg-black text-white">
            Profile
          </q-tooltip>
        </q-btn>
        <!-- <q-btn flat round icon="favorite">
          <q-tooltip>
            Cart
          </q-tooltip>
        </q-btn>
        <q-btn flat round icon="shopping_bag">
          <q-tooltip>
            Bag
          </q-tooltip>
        </q-btn> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Ecommerce Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @click="productPage(link.label)"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from '../../components/EssentialLink.vue';
import { useRouter } from 'vue-router';

const essentialLinks: any[] = [
  {
    title: 'User',
    //caption: 'Community Quasar projects',
    icon: 'person',
    link: 'http://localhost:9000/#/user'
  },
  {
    title: 'Items',
    label: 'item',
    // caption: 'quasar.dev',
    icon: 'view_list',
    link: 'http://localhost:9000/#/item'
  },
  {
    title: 'Category',
    // caption: 'github.com/quasarframework',
     icon: 'category',
   link: 'http://localhost:9000/#/category'
  },
  {
    title: 'Product',
    // caption: 'chat.quasar.dev',
     icon: 'inventory',
     link: 'http://localhost:9000/#/product'
  },
  {
    title: 'Coupon',
    // caption: 'forum.quasar.dev',
     icon: 'percent',
     link: 'http://localhost:9000/#/coupon'
  },
  {
    title: 'Offers',
    // caption: '@quasarframework',
      icon: 'local_offer',
     link: 'http://localhost:9000/#/offer'
  },
  {
    title: 'Banner',
    //caption: '@QuasarFramework',
    icon: 'image',
    link: 'http://localhost:9000/#/banner'
  },
  {
    title: 'Payment',
    //caption: 'Community Quasar projects',
    icon: 'payments',
    link: 'http://localhost:9000/#/payment'
  },
  {
    title: 'Order',
    //caption: '@QuasarFramework',
    icon: 'inventory',
    link: 'http://localhost:9000/#/delivery'
  },
];

const text = ref('')
const pages = ref(false)
const kids = ref(false);
const router = useRouter();

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function productPage(message: string) {
  // Access the event target value
  router.push(message);
}
</script>

<style scoped>
.search-bar {
  width: 35%;
  background: #e0e0e078;
  border-radius: 50px;
  border: 1px solid #e0e0e075;
}
</style>
