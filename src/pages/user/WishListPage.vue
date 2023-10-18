<template>
  <q-page>
    <div class="text-h6 q-ml-xl q-pt-md">
      My Whichlist
    </div>
    <div>
      <WhiteCard @click="productPage" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WhiteCard from '../../components/Card/WhiteCard.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CategoryPage',
  components: {
    WhiteCard,
  },
  setup() {
    const router = useRouter();

    const productPage = () => {
      router.push('product');
    };

    return {
      productPage,
    }
  },

})
</script>

<style></style>
