<template>
  <q-layout view="lHh Lpr lFf">
    <q-page>
      <q-drawer side="right" v-model="leftDrawerOpen" bordered :width="300">
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
            Category List
          </div>
          <q-btn outline icon="add" style="color: #9e9e9e;" label="Add" @click="handleClick"></q-btn>
        </div>
        <WhiteTable />
      </q-page-container>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import WhiteTable from '../../components/Table/WhiteTable.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    WhiteTable,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const name = ref(null);
    const description = ref(null);
    const amount = ref(null);

    const handleClick = () => {
      // Your click event logic goes here
      console.log('Button clicked!');
      leftDrawerOpen.value = !leftDrawerOpen.value
    };

    const onSubmit = () => {
      console.log('submit');
    }
    return { leftDrawerOpen, name, description, amount, handleClick, onSubmit };
  },
});
</script>
