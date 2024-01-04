<template>
  <q-page>
    <div class="row justify-center q-ma-lg">
      <div class="col-4 q-pa-xs">
        <div class="address-div">
          <div>
            <div class="text-body2">
              Deliver to : <b>John, 600 054</b>
            </div>
            <div class="text-caption">
              2/112, North Street, Chennai
            </div>
          </div>
          <div>
            <q-btn outline no-caps color="red-5" size="sm">
              Change Address
            </q-btn>
          </div>
        </div>

        <q-card class="my-card" flat bordered >
          <q-card-section horizontal>
            <q-btn outline class="absolute-top-right q-ma-sm " flat color="black" round icon="close" size="sm"></q-btn>
            <q-img class="col-5 q-ma-md" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-section >
              <div class="row justify-between">
                <div class="text-subtitle1 text-weight-bold">Fashion</div>
              </div>
              <div class="text-body text-grey">Designed Patten Dress</div>
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
      <div class="col-4 " >
          <q-card class="my-card" flat no-bordered style="width: 350px;">
            <q-card-section>
              <div class="text-subtitle2">COUPON</div>
              <div class="q-mb-sm price-detail-div" >
                <div style="display: flex; align-items: center">
                  <q-icon name="style" size="1rem"/>
                <div class="text-subtitle2">Apply Coupons</div>
                </div>
                <div>
                  <q-btn outline style="color: #FF0080" label="Apply" size="sm"></q-btn>
                </div>
              </div>
              <q-separator></q-separator>
              <div class="q-mt-md text-weight-medium">
                Price Details:
              </div>
              <div class="price-detail-div" >
                <div >
                  Total MRP
                </div>
                <div>
                  $ 4,500
                </div>
              </div>
              <div class="price-detail-div">
                <div>
                  Dicount on MRP
                </div>
                <div color="success">
                  -$ 3,500
                </div>
              </div>
              <div class="q-mb-sm price-detail-div">
                <div>
                  Convenience Fee
                </div>
                <div color="success">
                  $ 20
                </div>
              </div>
              <q-separator></q-separator>
              <div class="price-detail-div">
                <div >
                  Total
                </div>
                <div  color="success">
                  $ 1,500
                </div>
              </div>
              <q-btn class="full-width q-my-md" style="background: #FF0080; color: white" label="Place Order"></q-btn>
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

<style lang="scss" scoped>
.address-div {
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid lightgrey;
    margin: 10px 0px;
}

.price-detail-div {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 14px;
}
</style>
