<template>
  <q-page>
    <!-- <div class="q-pa-xl row">
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
    </div> -->
    <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="500px"
      control-color="amber"
    >
    <q-carousel-slide :name="1" img-src="https://marketplace.canva.com/EAFVHstxnwk/1/0/1600w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-BZb4KkCdNP0.jpg" />
      <q-carousel-slide :name="2" img-src="https://marketplace.canva.com/EAFLV0NR7qo/1/0/1600w/canva-white-grey-modern-fashion-new-collection-banner-landscape-YVJdopaRge4.jpg" />
      <q-carousel-slide :name="3" img-src="https://marketplace.canva.com/EAFIMHQ5yhE/1/0/1600w/canva-orange-and-teal-summer-sale-kids-fashion-bright-website-banner-L6kUMOWkkho.jpg" />

    </q-carousel>
  </div>
    <div>
      <div class="q-mb-sm flex items-center justify-evenly" style="font-size: xx-large;">Brand</div>
      <WhiteCarousel />
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
import WhiteCarousel from '../../components/Carousel/WhiteCarousel.vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'DashBoardPage',
  components: {
    //WhiteCard,
    DashboardCard,
    WhiteCarousel
  },
  setup() {
    const router = useRouter();

    const itemPage = () => {
      router.push('item');
    };

    return { itemPage,
      slide: ref(1),
      autoplay: ref(true) }
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
