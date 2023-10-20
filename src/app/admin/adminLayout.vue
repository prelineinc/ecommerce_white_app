<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-dark">
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title class="text-primary">
          Ecommerce App

        </q-toolbar-title>
        <!-- <q-tabs indicator-color="transparent" inline-label class="bg-white text-dark">
          <q-btn-dropdown auto-close stretch flat label="Women">
            <q-list>
              <q-item clickable>
                <q-item-section>chudi</q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section>Jeans</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn-dropdown auto-close stretch flat label="Kids">
            <q-list>
              <q-item clickable>
                <q-item-section>Shirt</q-item-section>
              </q-item>

              <q-item clickable>
                <q-item-section>Pants</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-tabs> -->

        <q-btn color="primary" flat @mouseover="pages = true" label="Pages" no-caps>
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
        </q-btn>

        <!-- <q-btn color="primary" flat @mouseleave="woman = false" @mouseover="kids = true" label="Kids" no-caps>
      <q-menu v-model="kids" @mouseleave="kids = false"  fit>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Shirts</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Pants</q-item-section>
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

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

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
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const text = ref('')
const pages = ref(false)
const kids = ref(false);
const router = useRouter();

// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
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
