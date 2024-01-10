<template>
  <q-layout view="lHh Lpr lFf">
    <q-page>
      <q-drawer side="right" v-model="leftDrawerOpen" bordered :width="350">
        <div class="q-mx-md row justify-between">
          <div v-if="isEdit == false" class="text-subtitle2">Add Product</div>
          <div v-if="isEdit == true" class="text-subtitle2">Edit Product</div>
          <q-btn icon="close" flat round dense size="sm" @click="handleClick"></q-btn>
        </div>
        <div class="q-ma-md">
          <q-form @submit.prevent="onSubmit">
            <q-input filled v-model="name" label="Title*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <q-input filled v-model="description" label="Description*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <q-input filled v-model="amount" label="Amount*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <div class="q-my-md">
              <q-btn class="full-width" label="Submit" type="submit" color="primary"></q-btn>
            </div>

          </q-form>
        </div>
      </q-drawer>
      <q-page-container class="q-my-md">
        <div class="q-mr-md row" style="display: flex; justify-content: space-between;">
          <div class="text-h6 q-mx-md">
            Product List
          </div>
          <q-btn v-if="!leftDrawerOpen" outline icon="add" style="color: #9e9e9e;" label="Add" size="sm" @click="handleClick"></q-btn>
        </div>
        <WhiteTable :title="pageTitle" @editData="handleEditData"/>
      </q-page-container>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WhiteTable from '../../components/Table/WhiteTable.vue';

const leftDrawerOpen = ref(false);
const isEdit = ref(false);

export default defineComponent({
  name: 'ProductPage',
  components: {
    WhiteTable,
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
    const description = ref(null);
    const amount = ref(null);

    const handleClick = () => {
      // Your click event logic goes here
      console.log('Button clicked!');
      isEdit.value = false;
      leftDrawerOpen.value = !leftDrawerOpen.value
    };

    const onSubmit = () => {
      console.log('submit');
    }
    return { leftDrawerOpen, name, description, amount, handleClick, onSubmit, pageTitle: 'product', isEdit };
  },
});
</script>

<style>

</style>
