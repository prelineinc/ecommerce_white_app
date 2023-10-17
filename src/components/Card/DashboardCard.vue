<template>
  <div class="q-mx-sm row">
    <div class="q-pa-sm col-3" v-for="(card, index) in items" :key="index">
      <q-card class=" my-card">
      <q-img :src="card.image">
        <div class="absolute-bottom text-center" >
          <div class="text-h6">{{ card.title }}</div>
          <div class="text-h5">{{ card.off }} Off</div>
          <p>Shop Now</p>
        </div>
      </q-img>
    </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DashBoardCard',
  setup() {
    const items = [
      {
        title: 'Casual Woman wear',
        off: '40-50%',
        //image: 'https://cdn.quasar.dev/img/parallax2.jpg'
        image: ''
      },
      {
        title: 'Formal Woman wear',
        off: '30-50%'
      },
      {
        title: 'Traditional Woman wear',
        off: '10-20%'
      },
      {
        title: 'Woman tops',
        off: '10-50%'
      },
      {
        title: 'Jeans',
        off: '20-30%'
      },
      {
        title: 'Kids boys',
        off: 'UP TO 30%'
      },
      {
        title: 'Kids girls',
        off: 'UP TO 20%'
      },
      {
        title: 'Babies',
        off: 'UP TO 50%'
      }

    ];

    return { items };
  }
});
</script>

<style>

</style>
