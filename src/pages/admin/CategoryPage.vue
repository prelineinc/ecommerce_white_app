<template>
  <div>
    <!-- <div >
         <q-list bordered padding>
       <q-item tag="label" v-ripple>
         <q-item-section side top>
           <q-checkbox v-model="check1"></q-checkbox>
         </q-item-section>

         <q-item-section>
           <q-item-label>Notifications</q-item-label>
           <q-item-label caption>
             Notify me about updates to apps or games that I downloaded
           </q-item-label>
         </q-item-section>
       </q-item>

       <q-item tag="label" v-ripple>
         <q-item-section side top>
           <q-checkbox v-model="check2"></q-checkbox>
         </q-item-section>

         <q-item-section>
           <q-item-label>Notifications</q-item-label>
           <q-item-label caption>
             Notify me about updates to apps or games that I downloaded
           </q-item-label>
         </q-item-section>
       </q-item>
     </q-list>
      </div> -->
    <!-- <WhiteCard />
    <WhiteCard />
    <WhiteCard />
    <WhiteCard /> -->
    <!-- <div class="col-3 q-pa-xs">
          <q-card class="my-card" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-sm">
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
        </q-card>
      </div>
      <div class="col-3 q-pa-xs">
          <q-card class="my-card" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-sm">
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
        </q-card>
      </div>
      <div class="col-3 q-pa-xs">
          <q-card class="my-card" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-sm">
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
        </q-card>
      </div><div class="col-3 q-pa-xs">
          <q-card class="my-card" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section class="q-pt-sm">
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
        </q-card>
      </div> -->


    <div class="row">
      <div class="col-12 col-md-2 q-pa-md">
        <div>
          <div class="text-h6">Category</div>
          <q-list bordered padding>
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check1"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Chuti</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check2"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Saree</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div>
          <div class="text-h6">Size</div>
          <q-list bordered padding>
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check1"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Small</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check2"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Medium</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-12 col-md-10">
        <WhiteCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WhiteCard from '../../components/Card/WhiteCard.vue';

export default defineComponent({
  name: 'CategoryPage',
  components: {
    WhiteCard,
  },
  setup() {
    return {
      check1: ref(true),
      check2: ref(false),
      check3: ref(false),
    }
  },

})
</script>

<style></style>
