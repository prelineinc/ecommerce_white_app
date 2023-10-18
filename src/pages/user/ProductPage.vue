<template>
  <q-page>
    <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-4">
        Ratio: 1
        <q-img
          src="https://picsum.photos/500/300"
          :ratio="1"
        ></q-img>
      </div>
    </div>
  </div>
  </q-page>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent ({
  name: 'CategoryPage',
  components: {
    //WhiteCard,
  },
  setup() {
    return {

    }
  },
})
</script>

<style>

</style>
