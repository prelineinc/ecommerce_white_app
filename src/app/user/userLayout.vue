<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-dark">

        <q-toolbar-title class="text-primary" @click="homePage">
          Ecommerce App

        </q-toolbar-title>

        <q-btn color="primary" flat @mouseleave="kids = false" @mouseover="woman = true" label="Woman" @click="itemPage"
          no-caps>
          <q-menu v-model="woman" @mouseleave="woman = false" fit>
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Sarees</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Kurtas</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn color="primary" flat @mouseleave="woman = false" @mouseover="kids = true" label="Kids" @click="itemPage"
          no-caps>
          <q-menu v-model="kids" @mouseleave="kids = false" fit>
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Shirts</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Pants</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-input dense borderless v-model="text" input-class="text-left" class="q-mx-lg q-px-md search-bar"
          placeholder="Search Products" style="width: 35%;">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search"></q-icon>
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''"></q-icon>
          </template>
        </q-input>

        <q-btn flat round icon="person" @click="profilePage">
          <q-tooltip class="q-pa-md text-black shadow-4" :offset="[10, 10]">
          Profile
        </q-tooltip>
        </q-btn>
        <q-btn flat round icon="favorite" @click="productPage">
          <q-tooltip>
            Wishlist
          </q-tooltip>
        </q-btn>
        <q-btn flat round icon="shopping_bag" @click="cartPage">
          <q-tooltip>
            Bag
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const text = ref('')
const woman = ref(false)
const kids = ref(false)

const itemPage = () => {
  console.log('itempage');
  router.push('item');
}
const homePage = () => {
  router.push('');
}
const productPage = () => {
  router.push('wishlist');
}
const cartPage = () => {
  router.push('cart');
}
const profilePage = () => {
  router.push('profile');
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
