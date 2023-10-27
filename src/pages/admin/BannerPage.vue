<template>
  <q-page>
    <div class="row">
      <div class="q-pa-md  col-3">
        <q-card dark bordered class="bg-grey-7 my-card">
          <q-card-section>
            <div class="text-h2 text-center">100</div>
          </q-card-section>

          <q-separator dark inset></q-separator>

          <q-card-section class="text-center">
            Item
          </q-card-section>
        </q-card>
      </div>

      <div class="q-pa-md col-3">
        <q-card dark bordered class="bg-deep-purple-4 my-card">
          <q-card-section>
            <div class="text-h2 text-center">20</div>
          </q-card-section>

          <q-separator dark inset></q-separator>

          <q-card-section class="text-center">
            Product
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-md col-3">
        <q-card dark bordered class="bg-info my-card">
          <q-card-section>
            <div class="text-h2 text-center">10</div>
          </q-card-section>

          <q-separator dark inset></q-separator>

          <q-card-section class="text-center">
            Delivery
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-md col-3">
        <q-card dark bordered class="bg-primary my-card">
          <q-card-section>
            <div class="text-h2 text-center">5</div>
          </q-card-section>

          <q-separator dark inset></q-separator>

          <q-card-section class="text-center">
            Offer
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
.card-item {
  color: #ffffff;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
