<template >
  <div>
    <!-- <div>
      {{ title }}
    </div> -->
    <div class="q-pa-md" v-if="title === 'user'">
      <q-table :rows="userrows" :columns="usercolumns" row-key="name" :filter="filter">
        <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        <template v-slot:body-cell-action="{ row }">
          <q-td :props="row.props" class="text-right">
            <q-btn flat round icon="edit" size="sm"  @click='changeUsername()'>
            </q-btn>
            <q-btn flat round icon="delete" size="sm" @click="removeData = true">
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="q-pa-md" v-if="title === 'item'">
      <q-table :rows="itemrows" :columns="itemcolumns" row-key="name" :filter="filter">
        <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        <template v-slot:body-cell-action="{ row }">
          <q-td :props="row.props" class="text-right">
            <q-btn flat round icon="edit" size="sm" @click='changeUsername()'>
            </q-btn>
            <q-btn flat round icon="delete" size="sm" @click="removeData = true">
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="q-pa-md" v-if="title === 'category'">
      <q-table :rows="categoryrows" :columns="categorycolumns" row-key="name" :filter="filter">
        <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        <template v-slot:body-cell-action="{ row }">
          <q-td :props="row.props" class="text-right">
            <q-btn flat round icon="edit" size="sm" @click='changeUsername()'>
            </q-btn>
            <q-btn flat round icon="delete" size="sm" @click="removeData = true">
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md" v-if="title === 'product'">
      <q-table :rows="productrows" :columns="productcolumns" row-key="name" :filter="filter">
        <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        <template v-slot:body-cell-action="{ row }">
          <q-td :props="row.props" class="text-right">
            <q-btn flat round icon="edit" size="sm" @click='changeUsername()'>
            </q-btn>
            <q-btn flat round icon="delete" size="sm" @click="removeData = true">
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md" v-if="title === 'order'">
      <q-table :rows="orderrows" :columns="ordercolumns" row-key="name" :filter="filter">
        <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        <template v-slot:body-cell-action="{ row }">
          <q-td :props="row.props" class="text-right">
            <q-btn flat round icon="edit" size="sm" @click='changeUsername()'>
            </q-btn>
            <q-btn flat round icon="delete" size="sm" @click="removeData = true">
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
    <div class="q-pa-md" v-if="title === 'payment'">
      <q-table :rows="paymentrows" :columns="paymentcolumns" row-key="name" :filter="filter">
        <template v-slot:top-right>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        <template v-slot:body-cell-action="{ row }">
          <q-td :props="row.props" class="text-right">
            <q-btn flat round icon="edit" size="sm" @click='changeUsername()'>
            </q-btn>
            <q-btn flat round icon="delete" size="sm" @click="removeData = true">
            </q-btn>
          </q-td>

        </template>
      </q-table>
    </div>
    <div>
      <q-dialog v-model="removeData">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">Please Confirm !</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Are yor sure want to remove?
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="CANCEL" v-close-popup />
            <q-btn flat label="OK" v-close-popup />

          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usercolumns, userrows } from 'src/constants/cart';
import { itemcolumns, itemrows } from 'src/constants/item';
import { categorycolumns, categoryrows } from 'src/constants/category';
import { productcolumns, productrows } from 'src/constants/product';
import { ordercolumns, orderrows } from 'src/constants/order';
import { paymentcolumns, paymentrows } from 'src/constants/payment';

export default defineComponent({
  props: {
    title: String
  },
  methods: {
   changeUsername() {
     this.$emit('editData', true)
   }
 },
  setup() {
    const removeData = ref(false);
    const filter = ref('');

    return {
      filter,
      usercolumns,
      userrows,
      removeData,
      itemcolumns,
      itemrows,
      categorycolumns,
      categoryrows,
      productcolumns,
      productrows,
      ordercolumns,
      orderrows,
      paymentcolumns,
      paymentrows
      //changeUsername
    }
  }
})
</script>

<style lang="scss" scoped>
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
}
</style>
