<template>
  <q-layout view="lHh Lpr lFf">
    <q-page>
      <q-drawer side="right" v-model="leftDrawerOpen" bordered :width="350">
        <div class="q-mx-md row justify-between">
          <div v-if="isEdit == false" class="text-subtitle2">Add Order</div>
          <div v-if="isEdit == true" class="text-subtitle2">Edit Order</div>
          <q-btn icon="close" flat round dense size="sm" @click="handleClick"></q-btn>
        </div>
        <div class="q-ma-md">
          <q-form @submit.prevent="onSubmit">
            <q-input filled v-model="name" label="Full Name*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please Enter Name']"></q-input>
            <q-input filled v-model="username" label="User Name*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please Enter Phonenumber']"></q-input>
            <q-input filled v-model="address" label="Address*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please Enter Email']"></q-input>
              <q-input filled v-model="total" label="Total Amount*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please Enter Email']"></q-input>
              <q-select filled v-model="count" :options="options" label="Total Count"></q-select>
            <div class="q-my-md">
              <q-btn class="full-width" label="Submit" type="submit" color="primary"></q-btn>
            </div>
          </q-form>
        </div>
      </q-drawer>
      <q-page-container class="q-my-md">
        <div class="q-mr-md row" style="display: flex; justify-content: space-between;">
          <div class="text-h6 q-mx-md">
            Order List
          </div>

          <q-btn v-if="!leftDrawerOpen" outline icon="add" style="color: #9e9e9e;" label="Add" size="sm"
            @click="handleClick"></q-btn>
        </div>
        <WhiteTable :title="pageTitle" @editData="handleEditData" />
      </q-page-container>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WhiteTable from 'src/components/Table/WhiteTable.vue';

const leftDrawerOpen = ref(false);
const isEdit = ref(false);

export default defineComponent({
  name: 'OrderPage',
  components: {
    WhiteTable
  },

  methods: {
    handleEditData(data: any) {
      isEdit.value = data;
      leftDrawerOpen.value = data;
      console.log(data);
    }
  },

  setup() {
    const name = ref(null);
    const username = ref(null);
    const address = ref(null);
    const total = ref(null);
    const count = ref(null)


    const handleClick = () => {
      console.log('Button clicked!');
      isEdit.value = false;
      leftDrawerOpen.value = !leftDrawerOpen.value
    };

    const onSubmit = () => {
      console.log('submit');
    }
    const options = [
      '1', '2', '3', '4', '5'
    ]

    return { leftDrawerOpen, name, username, address, total, count, options, handleClick, onSubmit, pageTitle: 'order', isEdit };
  },

})
</script>

<style></style>
