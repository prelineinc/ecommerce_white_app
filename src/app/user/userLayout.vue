<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-dark">

        <q-toolbar-title class="text-primary" @click="homePage">
          Ecommerce App
          <q-btn class="q-ml-md" color="dark" flat @mouseleave="kids = false" @mouseover="woman = true" label="Woman" @click="itemPage"
          no-caps>
          <q-menu v-model="woman" @mouseleave="woman = false" fit>
            <div class="row q-ma-md">
              <div class="column q-ml-md">
                <div class="text-caption item-title cursor-pointer">
                  Indian Wear
                </div>
                <div class="column">
                  <div class="text-body cursor-pointer text">
                    Kurtas
                  </div>
                  <div class="text-body cursor-pointer text">
                    Saree
                  </div>
                </div>
              </div>
              <div class="column q-ml-md">
                <div class="text-subtitle item-title cursor-pointer">
                  Weatern Wear
                </div>
                <div class="text-body cursor-pointer text">
                  Tops
                </div>
                <div class="text-body cursor-pointer text">
                  T-Shirts
                </div>
              </div>
              <div class="column q-ml-md">
                <div class="text-subtitle item-title">
                  FootWear
                </div>
                <div class="text-body cursor-pointer text">
                  Casual Shoes
                </div>
                <div class="text-body cursor-pointer text">
                  Heels
                </div>
              </div>
            </div>
          </q-menu>
        </q-btn>

        <q-btn color="dark" flat @mouseleave="woman = false" @mouseover="kids = true" label="Kids" @click="itemPage"
          no-caps>
          <q-menu v-model="kids" @mouseleave="kids = false" fit>
            <div class="row q-ma-md">
              <div class="column q-ml-md">
                <div class="text-caption item-title cursor-pointer">
                  Boys Clothing
                </div>
                <div class="column">
                  <div class="text-body cursor-pointer text">
                    T-Shirts
                  </div>
                  <div class="text-body cursor-pointer text">
                    Shirts
                  </div>
                  <div class="text-body cursor-pointer text">
                    Jeans
                  </div>
                </div>
              </div>
              <div class="column q-ml-md">
                <div class="text-subtitle item-title cursor-pointer">
                  Girls Clothing
                </div>
                <div class="text-body cursor-pointer text">
                  Tops
                </div>
                <div class="text-body cursor-pointer text">
                  T-Shirts
                </div>
                <div class="text-body cursor-pointer text">
                  Kurta sets
                </div>
              </div>
              <div class="column q-ml-md">
                <div class="text-subtitle item-title">
                  FootWear
                </div>
                <div class="text-body cursor-pointer text">
                  Casual Shoes
                </div>
                <div class="text-body cursor-pointer text">
                  Heels
                </div>
              </div>
            </div>
          </q-menu>
        </q-btn>
        </q-toolbar-title>

        <!-- <q-btn color="primary" flat @mouseleave="kids = false" @mouseover="woman = true" label="Woman" @click="itemPage"
          no-caps>
          <q-menu v-model="woman" @mouseleave="woman = false" fit>
            <div class="row q-ma-md">
              <div class="column q-ml-md">
                <div class="text-caption item-title">
                  Indian Wear
                </div>
                <div class="column">
                  <div class="text-body cursor-pointer text">
                    Kurtas
                  </div>
                  <div class="text-body cursor-pointer text">
                    Saree
                  </div>
                </div>
              </div>
              <div class="column q-ml-md">
                <div class="text-subtitle item-title">
                  Weatern Wear
                </div>
                <div class="text-body cursor-pointer text">
                  Tops
                </div>
                <div class="text-body cursor-pointer text">
                  T-Shirts
                </div>
              </div>
              <div class="column q-ml-md">
                <div class="text-subtitle item-title">
                  Weatern Wear
                </div>
                <div class="text-body cursor-pointer text">
                  Tops
                </div>
                <div class="text-body cursor-pointer text">
                  T-Shirts
                </div>
              </div>
            </div>
            <q-list style="min-width: 100px">
              <div class="text-subtitle2">
                    Indian Wear
                  </div>
                  <div class="text-body cursor-pointer text">
                    Kurtas
                  </div>
              <q-item clickable>
                <div class="text-body">
                    Kurtas
                  </div>
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
        </q-btn> -->

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
          <q-tooltip class="q-pa-md text-black shadow-4" :offset="[10, 10]">
            Wishlist
          </q-tooltip>
        </q-btn>
        <q-btn flat round  icon="shopping_bag" @click="cartPage">
          <q-tooltip class="q-pa-md text-black shadow-4" :offset="[10, 10]">
            Bag
          </q-tooltip>
        </q-btn>
        <!-- <div class="q-mx-sm text-center" @click="profilePage">
          <q-icon name="person_outline" size="sm"></q-icon>
        <div class="text-caption text-weight-medium text-center">Profile</div>
        </div>
        <div class="q-mx-sm text-center" @click="productPage">
          <q-icon name="favorite_outline" size="sm"></q-icon>
        <div class="text-caption text-weight-medium text-center">Wishlist</div>
        </div>

        <div class="q-mx-sm text-center" @click="cartPage">
          <q-icon name="shopping_bag" size="sm" ></q-icon>
        <div class="text-caption text-weight-medium text-center">Bag</div>
        </div> -->
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
  router.push('home');
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

.text:hover {
  font-weight: 600;
}

.item-title {
  color: orange;
}
</style>
