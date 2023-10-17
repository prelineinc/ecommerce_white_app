<template>
  <q-page>
    <div class="q-pa-xl row">
    <div class=" q-pr-md col-8">
      <!-- <q-card class="my-card">
      <div class="flex items-center justify-evenly">
       <h4>Flat 100%</h4>
      </div>
    </q-card> -->

      <div class=" flex items-center justify-evenly" style="border: 5px solid #F2C037;">
        <h4>Flat 50% OFF</h4>
        <div class="circle1"></div>
      </div>

    </div>
    <div class="col-4">
      <div class="bg-warning flex items-center justify-evenly" style="border: 5px solid #F2C037;">
        <h4>Order On our App</h4>
      </div>
    </div>
  </div>
  <!-- <div class="q-mx-sm row">
    <div class="col-3">
      <DashboardCard />
    </div>
    <div class="col-3">
      <DashboardCard />
    </div>
    <div class="col-3">
      <DashboardCard />
    </div>
    <div class="col-3">
      <DashboardCard />
    </div>
  </div> -->
  <!-- <div class="q-mx-sm row">
    <div class="col-3" v-for="(card, index) in items" :key="index">
      <q-card class="my-card" >
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-center" >
          <div class="text-h6">{{ card.title }}</div>
          <div class="text-h5">Flat {{ card.off }} Off</div>
          <p>Shop Now</p>
        </div>
      </q-img>
    </q-card>
    </div>
  </div> -->
  <div>
    <div class="q-mb-sm flex items-center justify-evenly" style="font-size: xx-large;">Catageray</div>
    <DashboardCard />
  </div>


  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';
import WhiteCard from '../../components/Card/WhiteCard.vue';
import DashboardCard from '../../components/Card/DashboardCard.vue'
export default defineComponent({
  name: 'DashBoardPage',
  components: {
    //WhiteCard,
    DashboardCard
  }
})
</script>

<style lang="scss" scoped>
.circle1 {
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
}
</style>
