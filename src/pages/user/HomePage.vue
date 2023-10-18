<template>
  <q-page>
    <div class="q-pa-xl row">
      <div class=" q-pr-md col-8">

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
    <div>
      <div class="q-mb-sm flex items-center justify-evenly" style="font-size: xx-large;">Catageray</div>
      <DashboardCard @click="itemPage" />
    </div>


  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';
import WhiteCard from '../../components/Card/WhiteCard.vue';
import DashboardCard from '../../components/Card/DashboardCard.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'DashBoardPage',
  components: {
    //WhiteCard,
    DashboardCard
  },
  setup() {
    const router = useRouter();

    const itemPage = () => {
      router.push('item');
    };

    return { itemPage }
  },

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
