<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-12 col-md-6 q-pa-xs">
          <div class="row">
            <div class="col-12 col-md-6 q-pa-xs">
              <div class="flex">
                <q-img src="https://picsum.photos/500/300"></q-img>
              </div>
            </div>
            <div class="col-12 col-md-6 q-pa-xs">
              <div class="flex">
                <q-img src="https://picsum.photos/500/300"></q-img>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 q-pa-xs">
          <div class="text-h6 text-weight-bold">
            Indo Era
          </div>
          <div class="text-body2 q-mb-md">
            Women Purple Yoke Design Kurta with Palazzos & With Dupatta
          </div>
          <q-separator></q-separator>
          <div class="row q-mt-md">
            <div class="text-h6 q-ma-none text-weight-bold ">
              $ 1499
            </div>
            <div class="text-subtitle1 q-ma-xs">
              MRP
            </div>
            <div class="text-subtitle1 q-ma-xs" style="text-decoration: line-through;">
              $ 2000
            </div>
            <div class="text-subtitle1 q-ma-xs" style="color: red;">
              (20% OFF)
            </div>
          </div>
          <div class="text-subtitle2 text-positive">
            inclusive of all taxes
          </div>
          <div class="q-mt-sm">
            <div class="text-h6">Select Size</div>
            <!-- <div class="q-gutter-xs">
              <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="extra-small"
                label="XS"></q-radio>
              <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="small"
                label="S"></q-radio>
              <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="medium"
                label="M"></q-radio>
              <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="large"
                label="L"></q-radio>
              <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="extra-large"
                label="XL"></q-radio>
            </div> -->
            <div class="q-gutter-xs">
              <q-btn outline rounded color="bb-grey-150">XS</q-btn>
              <q-btn outline rounded color="bb-grey-150">S</q-btn>
              <q-btn outline rounded color="bb-grey-150">M</q-btn>
              <q-btn outline rounded color="bb-grey-150">L</q-btn>
              <q-btn outline rounded color="bb-grey-150">XL</q-btn>
            </div>
          </div>
          <div class="row q-ma-sm q-gutter-md">
            <q-btn color="red" icon="shopping_bag" label="Add to Bag"></q-btn>
            <q-btn outline icon="favorite_border" style="color: #9e9e9e;" label="Wishkist"></q-btn>
          </div>
          <q-separator class="q-mt-md" />
          <div class="text-h6 q-my-sm">PRODUCT DETAILS</div>
          <div class="text-body2" style="color: #9e9e9e;">
            Purple yoke design Kurta with Palazzos with dupatta
          </div>
          <div class="text-subtitle2 q-mt-md">
            Specifications
          </div>
          <div class="row">
            <div class="col-12 col-md-6 q-pr-xl">
              <q-list separator>
                <q-item>
                  <q-item-section>
                    <q-item-label caption>Sleeve Length</q-item-label>
                    <q-item-label>Three-Quarter Sleeves</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>
                    <q-item-label caption>Top Type</q-item-label>
                    <q-item-label>Kurta</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col-12 col-md-6 q-pr-xl">
              <q-list separator>
                <q-item>
                  <q-item-section>
                    <q-item-label caption>Top Shape</q-item-label>
                    <q-item-label>Straight</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>
                    <q-item-label caption>Bottom Type</q-item-label>
                    <q-item-label>Bottom Type</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>

          <q-separator class="q-mt-md" />

          <div>
            <div class="text-h6 q-my-md">
              RATINGS
            </div>
            <div class="row">
              <div class="col-12 col-md-4 q-pr-xl">
                <div class="text-h3">
                  4.5
                  <q-icon name="star" color="positive" style="font-size:x-large;" />
                </div>
                <div class="text-caption">
                  7.1K Verified Buyer
                </div>

              </div>
              <q-separator  vertical />
              <div class="col-12 col-md-6 q-px-sm q-ml-md">
                <div class="q-gutter-xs" style="display: flex; align-items: center">
                  <div class="text-subtittle-2">5</div>
                  <q-icon name="star" color="positive" style="font-size:x-small;" />
                  <q-linear-progress :value="0.4" color="green-6" />
                </div>
                <div class="q-gutter-xs" style="display: flex; align-items: center">
                  <div class="text-subtittle-2">4</div>
                  <q-icon name="star" color="positive" style="font-size:x-small;" />
                  <q-linear-progress :value="0.2" color="green-6" />
                </div>
                <div class="q-gutter-xs" style="display: flex; align-items: center">
                  <div class="text-subtittle-2">3</div>
                  <q-icon name="star" color="positive" style="font-size:x-small;" />
                  <q-linear-progress :value="0.05" color="green-3" />
                </div>
                <div class="q-gutter-xs" style="display: flex; align-items: center">
                  <div class="text-subtittle-2">2</div>
                  <q-icon name="star" color="positive" style="font-size:x-small;" />
                  <q-linear-progress :value="0.4" color="orange-5" />
                </div>
                <div class="q-gutter-xs" style="display: flex; align-items: center">
                  <div class="text-subtittle-2">1</div>
                  <q-icon name="star" color="positive" style="font-size:x-small;" />
                  <q-linear-progress :value="0.05" color="red" />
                </div>
              </div>
            </div>

            <q-separator class="q-mt-md" />

            <div class="q-my-md">
              <div class="text-body1">
                Code : <b>123456</b>
              </div>
            </div>
            <div class="q-my-md">
              <div class="text-body1">
                Seller : <text-body1 style="color: red; font-weight:bold">Fasion</text-body1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'CategoryPage',
  components: {
    //WhiteCard,
  },
  setup() {
    return {
      shape: ref(''),
    }
  },
})
</script>

<style></style>
