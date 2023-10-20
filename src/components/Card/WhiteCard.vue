<template>
    <div class="q-pa-xl row">
      <!-- <q-card class="my-card" flat bordered>
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" /> -->

        <!-- <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Fashion
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section> -->

        <!-- <q-card-section class="q-pt-sm">

          <div class="text-h6 ellipsis">
              Fashion
            </div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
          <div class="text-subtitle1 text-weight-bold">
            Rs. 1200
          </div>
        </q-card-section>

        <q-separator /> -->

        <!-- <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary">
            Reserve
          </q-btn>
        </q-card-actions> -->
      <!-- </q-card> -->
      <div class="col-3 q-pa-xs" v-for="(card, index) in items" :key="index">
          <q-card class="my-card" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-sm">
            <div class="text-h6 ellipsis">
                {{ card.title }}
              </div>
            <div class="text-caption text-grey">
              {{ card.description }}
            </div>
            <div class="text-subtitle1 text-weight-bold">
              Rs. {{ card.amount }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'WhiteCard',
  setup() {
    const items = [
      {
        title: 'Fashion',
        description: 'Printed Curti',
        amount: '1200',
        //image: 'https://cdn.quasar.dev/img/parallax2.jpg'
        image: ''
      },
      {
        title: 'Alto',
        description: 'Printed Trending Curti',
        amount: '2200'
      },
      {
        title: 'Fashion',
        description: 'Printed Trending Curti',
        amount: '5000'
      },
      {
        title: 'Nike',
        description: 'Sportes wear',
        amount: '2400'
      },
      {
        title: 'Brand',
        description: 'Designed wear',
        amount: '2400'
      }
    ];

    return { items };
  }
});
</script>

<style>

</style>
