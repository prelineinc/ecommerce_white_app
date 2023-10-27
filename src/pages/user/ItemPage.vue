<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-2 q-pa-md">
        <div>
          <div class="q-my-md text-subtitle text-weight-medium">Category</div>
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
          <div class="q-my-md text-subtitle text-weight-medium">Size</div>
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

        <div>
          <div class="q-my-md text-subtitle text-weight-medium">Color</div>
          <q-list bordered padding>
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check1"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Red</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check2"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Blue</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div>
          <div class="q-my-md text-subtitle text-weight-medium">Brand</div>
          <q-list bordered padding>
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check1"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Mitera</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check2"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Saree mall</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div>
          <div class="q-my-md text-subtitle text-weight-medium">Price</div>
          <q-list bordered padding>
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check1"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Rs. 1000 to Rs. 5000</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check2"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>Rs. 5000 to Rs. 10000</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div>
          <div class="q-my-md text-subtitle text-weight-medium">Discount Range</div>
          <q-list bordered padding>
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check1"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>10% and above</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check2"></q-checkbox>
              </q-item-section>

              <q-item-section>
                <q-item-label>20% and above</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-12 col-md-10">
        <WhiteCard @click="productPage"/>
      </div>
    </div>
  </div>
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

    return{
      productPage,
      check1: ref(false),
      check2: ref(false),
      check3: ref(false),
    }
  },

})
</script>

<style></style>
