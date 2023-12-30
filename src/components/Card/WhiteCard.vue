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
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg">
            <div class="rating absolute-bottom-left text-subtitle2" >
              {{ card.rate }}
              <q-icon name="star" color="green"></q-icon>
              <q-separator class="q-ma-xs" color="gray" vertical />
              <text-caption>{{ card.feedback }}</text-caption>
          </div>
          </q-img>

          <q-card-section class="q-pt-sm">
            <div class="text-h6 ellipsis">
                {{ card.title }}
              </div>
            <div class="text-caption text-grey">
              {{ card.description }}
            </div>
            <div class="q-pt-sm">
              <text-subtitle1 class="text-weight-bold">
                Rs. {{ card.amount }}
              </text-subtitle1>
              <text-caption class="q-pl-sm" style="text-decoration: line-through; color:lightgray">Rs. {{ card.mrp }}</text-caption>
              <text-caption class="q-pl-sm" style="color:#ff7f50">({{ card.offer }})</text-caption>
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
        image: '',
        rate: '4.2',
        mrp: '3999',
        offer: '30% OFF',
        feedback: '101'
      },
      {
        title: 'Alto',
        description: 'Printed Trending Curti',
        amount: '2200',
        rate: '4.0',
        mrp: '3599',
        offer: '10% OFF',
        feedback: '5.1k'
      },
      {
        title: 'Fashion',
        description: 'Printed Trending Curti',
        amount: '5000',
        rate: '3.8',
        mrp: '6999',
        offer: '10% OFF',
        feedback: '96'
      },
      {
        title: 'Nike',
        description: 'Sportes wear',
        amount: '2400',
        rate: '4.5',
        mrp: '4999',
        offer: '20% OFF',
        feedback: '2.2k'
      },
      {
        title: 'Brand',
        description: 'Designed wear',
        amount: '999',
        rate: '4.1',
        mrp: '3000',
        offer: '30% OFF',
        feedback: '30'
      }
    ];

    return { items };
  }
});
</script>

<style lang="scss" scoped>
  .rating {
    padding: 0px 5px;
    font-size: 10px;
    margin-left: 5px;
    margin-bottom: 5px;
    background: #ffffffcf;
    border: 1px solid white;
    border-radius: 2px;
    color: black;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

  }

</style>
