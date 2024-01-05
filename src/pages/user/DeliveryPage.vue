<template>
  <q-page>
    <div class="row">
      <div class="col-5 q-mt-md">
        <q-tabs v-model="tab" dense class="text-black" active-color="primary" indicator-color="primary" align="justify"
          narrow-indicator no-caps>
          <q-tab name="delivery" label="Delivered"></q-tab>
          <q-tab name="onprogress" label="Onprogress"></q-tab>
          <q-tab name="cancel" label="Cancel Order"></q-tab>
        </q-tabs>
        <q-separator></q-separator>
        <q-card class="my-card q-my-md" flat bordered>
          <q-item style="background: lightgray;">
            <q-item-section>
              <div class="row justify-between">
                <div class="column">
                  <div class="text-caption">
                    ORDER PLACED
                  </div>
                  <div class="text-subtitle1 text-weight-medium">
                    19 Oct 2023
                  </div>
                </div>
                <div class="column">
                  <div class="text-caption">
                    Shipped To
                  </div>
                  <div class="text-subtitle2" style="color:green;">John</div>
                </div>
                <div class="column">
                  <div class="text-caption">
                    ORDER #025-665-2589-000
                  </div>
                  <div class="text-subtitle2" style="color:green;">Invoice</div>
                </div>
              </div>
            </q-item-section>
          </q-item>
          <q-separator></q-separator>
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="row items-center q-gutter-md " align="center">
                <q-avatar v-if="tab == 'delivery'" rounded color="primary" text-color="white">R</q-avatar>
                <q-avatar v-if="tab == 'onprogress'" rounded color="primary" text-color="white">S</q-avatar>
                <q-avatar v-if="tab == 'cancel'" rounded color="primary" text-color="white">RS</q-avatar>
                <div v-if="tab == 'delivery'" class="text-body1">
                  Fashin Saree for womens
                </div>
                <div v-if="tab == 'onprogress'" class="text-body1">
                  Kids boys shirts
                </div>
                <div v-if="tab == 'cancel'" class="text-body1">
                  Designer pattern curthi
                </div>
              </div>
              <div v-if="tab == 'delivery'" class="column q-gutter-md">
                <div class="text-caption">Delivered</div>
                <div class="q-mt-none" align="center">
                  <q-icon name="check_circle" style="color: green"></q-icon>
                </div>
              </div>
              <div v-if="tab == 'onprogress'" class="column q-gutter-md">
                <div class="text-caption">On the way</div>
                <div class="q-mt-none" align="center">
                  <q-icon name="update" style="color: blue"></q-icon>
                </div>
              </div>
              <div v-if="tab == 'cancel'" class="column q-gutter-md">
                <div class="text-caption">Order Cancel</div>
                <div class="q-mt-none" align="center">
                  <q-icon name="highlight_off" style="color: red"></q-icon>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    return {
      tab: ref('delivery')
    }
  }

}
</script>

<style></style>
