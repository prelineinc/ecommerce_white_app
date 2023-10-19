<template>
  <q-page>
    <div class="row q-ma-lg">
      <div class="col-12 col-md-6 q-pa-xs">
        <q-card class="my-card" flat bordered style="width: 500px;">
          <q-card-section horizontal>
            <q-img class="col-5 q-ma-md" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-section style="width: 500px;">
              <div class="row justify-between">
                <div class="text-subtitle2">Fashion</div>
                <div class="item-end">
                  <q-icon name="cancel" />
                </div>

              </div>
              <div class="text-body">Sold by: Home Solution</div>
              <div class="row q-mt-md">
                <div class="text-caption q-ma-xs text-weight-bold ">
                  $ 1499
                </div>
                <div class="text-caption q-ma-xs" style="text-decoration: line-through;">
                  $ 2000
                </div>
                <div class="text-caption q-ma-xs" style="color: rgba(255, 0, 0, 0.608)">
                  81% off
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <q-separator vertical></q-separator>
      <div class="col-12 col-md-5 q-mx-md" style="display: flex; justify-content: center">
          <q-card class="my-card" flat bordered style="width: 500px;">
            <q-card-section>
              <div class="text-subtitle1">COUPON</div>
              <q-item class="row" style="justify-content: space-between">
                <div style="display: flex; align-items: center">
                  <q-icon name="style" size="1rem"/>
                <div class="text-subtitle1">Apply Coupons</div>
                </div>
                <div>
                  <q-btn outline style="color: #FF0080" label="Apply"></q-btn>
                </div>
              </q-item>
              <q-separator></q-separator>
              <div class="q-mt-md">
                Price Details:
              </div>
              <q-item style="justify-content: space-between;">
                <div class="text-subtitle1">
                  Total MRP
                </div>
                <div class="text-subtitle1">
                  $ 4,500
                </div>
              </q-item>
              <q-item style="justify-content: space-between;">
                <div class="text-subtitle1">
                  Dicount on MRP
                </div>
                <div class="text-subtitle1" color="success">
                  -$ 3,500
                </div>
              </q-item>
              <q-item style="justify-content: space-between;">
                <div class="text-subtitle1">
                  Convenience Fee
                </div>
                <div class="text-subtitle1" color="success">
                  $ 20
                </div>
              </q-item>
              <q-separator></q-separator>
              <q-item style="justify-content: space-between;">
                <div class="text-h6">
                  Total
                </div>
                <div class="text-subtitle1" color="success">
                  $ 1,500
                </div>
              </q-item>
              <q-btn class="full-width" style="background: #FF0080; color: white" label="Place Order"></q-btn>
            </q-card-section>
          </q-card>
        </div>
    </div>
  </q-page>
</template>

<script>
export default {

}
</script>

<style></style>
