<template>
  <div>
    <div class="row">
      <WhiteBreadCrumb />
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
          <div class="q-mt-sm q-pl-md" style="display: flex; justify-content: space-between; width: 235px">
            <div class="text-subtitle text-weight-medium">FILTER</div>
            <div class="text-subtittle text-red">CLEAR ALL</div>
          </div>
          <div>
            <div class="q-pa-md" style="max-width: 300px">
              <div class="q-gutter-md">
                <q-select outlined v-model="model" :options="options">
                  <template v-slot:selected>
                    Sort By:
                    {{ model }}
                  </template>
                </q-select>
              </div>
            </div>
          </div>
        </div>
    <div class="row">
      <div class="col-12 col-md-2">
        <div style="border: 1px solid lightgray;">
          <div class=" q-pl-md">

            <div class="q-my-md text-subtitle text-weight-medium">Category</div>
            <q-list>
              <div>
                <q-checkbox size="xs" v-model="check1"> Saree</q-checkbox>
              </div>
              <div>
                <q-checkbox size="xs" v-model="check2"> Chuti </q-checkbox>
              </div>
            </q-list>
            <!-- <q-list bordered padding>
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
          </q-list> -->
          </div>

          <q-separator class="q-my-md"></q-separator>

          <div class=" q-pl-md">
            <div class="q-my-md text-subtitle text-weight-medium">Size</div>
            <q-list>
              <div>
                <q-checkbox size="xs" v-model="check1">XS</q-checkbox>
              </div>
              <div>
                <q-checkbox size="xs" v-model="check2">S</q-checkbox>
              </div>
            </q-list>
          </div>

          <q-separator class="q-my-md"></q-separator>

          <div class=" q-pl-md">
            <div class="q-my-md text-subtitle text-weight-medium">Color</div>
            <q-list>
              <div>
                <q-checkbox size="xs" v-model="check1">Red</q-checkbox>
              </div>
              <div>
                <q-checkbox size="xs" v-model="check2">Blue</q-checkbox>
              </div>
            </q-list>
          </div>

          <q-separator class="q-my-md"></q-separator>

          <div class=" q-pl-md">
            <div class="q-my-md text-subtitle text-weight-medium">Brand</div>
            <q-list>
              <div>
                <q-checkbox size="xs" v-model="check1">Saree Mall</q-checkbox>
              </div>
              <div>
                <q-checkbox size="xs" v-model="check2">Fasion World</q-checkbox>
              </div>
            </q-list>
          </div>

          <q-separator class="q-my-md"></q-separator>

          <div class=" q-pl-md">
            <div class="q-my-md text-subtitle text-weight-medium">Price</div>
            <q-list>
              <div>
                <q-checkbox size="xs" v-model="check1">Rs.1,000 to Rs.5,000</q-checkbox>
              </div>
              <div>
                <q-checkbox size="xs" v-model="check2">Rs.5,000 to Rs.10,000</q-checkbox>
              </div>
            </q-list>
          </div>

          <q-separator class="q-my-md"></q-separator>

          <div class=" q-pl-md">
            <div class="q-my-md text-subtitle text-weight-medium">Discount Range</div>
            <div>
              <q-checkbox size="xs" v-model="check1">10% OFF</q-checkbox>
            </div>
            <div>
              <q-checkbox size="xs" v-model="check2">20% OFF</q-checkbox>
            </div>
          </div>
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
import WhiteBreadCrumb from 'src/components/BreadCrumb/WhiteBreadCrumb.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CategoryPage',
  components: {
    WhiteCard,
    WhiteBreadCrumb
  },
  setup() {
    const router = useRouter();

    const productPage = () => {
      router.push('product');
    };

    return {
      productPage,
      check1: ref(false),
      check2: ref(false),
      check3: ref(false),
      model: ref('Recommended'),
      options: [
        'Recommended', 'Whats New', 'Popularity'
      ]
    }
  },

})
</script>

<style></style>
