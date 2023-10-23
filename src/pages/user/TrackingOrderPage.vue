<template>
  <q-page>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="text-h6 q-pa-md">Tracking order</div>
        <q-card class="my-card" flat bordered>
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
            <div class="row justify-between">
              <div class="row q-gutter-md">
                <q-avatar rounded color="primary" text-color="white">J</q-avatar>
                <div class="text-body1">
                  Fashin Saree
                </div>
              </div>
              <div class="column q-gutter-md">
                <q-btn class="buttons" style="background: #dede02; color: white" label="Track Order" no-caps></q-btn>
                <q-btn class="buttons" outline style="color: rgba(128, 128, 128, 0.771)" label="Cancel order"
                  no-caps></q-btn>
              </div>
            </div>
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

<style scoped>
.buttons {
  width: 200px;
  font-size: smaller;
}
</style>
