<template>
  <q-layout view="lHh Lpr lFf">
    <q-page>
      <q-drawer side="right" v-model="leftDrawerOpen" bordered :width="300">
        <div class="q-ma-lg row justify-between">
          <div class="text-subtitle2">Add Item</div>
          <q-btn icon="close" flat round dense size="sm" @click="handleClick"></q-btn>
        </div>

        <div class="q-ma-md">
          <q-form @submit.prevent="onSubmit" class="q-gutter-md">
            <q-input class="error" filled v-model="name" label="Name *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <q-input filled v-model="description" label="Description *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <q-input filled v-model="material" label="Material *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <q-input filled v-model="amount" label="Amount *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <q-input filled v-model="mrp" label="MRP *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <div>
              <q-item-label>Quality Check</q-item-label>
              <q-radio v-model="qualitycheck" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="true"
                label="Checked"></q-radio>
              <q-radio v-model="qualitycheck" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="false"
                label="Unchecked"></q-radio>
            </div>

            <div>
              <q-item-label>Exchange</q-item-label>
              <q-radio v-model="isExchange" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="true"
                label="Yes"></q-radio>
              <q-radio v-model="isExchange" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="false"
                label="No"></q-radio>
            </div>

            <div>
              <q-item-label class="q-my-sm">Upload Img</q-item-label>
              <q-uploader url="http://localhost:4444/upload" style="max-width: 250px"></q-uploader>
            </div>
            <div class="q-my-md">
              <q-btn class="full-width" label="Submit" type="submit" color="primary"></q-btn>
            </div>

          </q-form>
        </div>
      </q-drawer>
      <q-page-container class="q-my-md">
        <div class="q-mr-md row" style="display: flex; justify-content: space-between;">
          <div class="text-h6 q-mx-md">
            Item List
          </div>
          <q-btn v-if="!leftDrawerOpen" outline icon="add" style="color: #9e9e9e;" label="Add" size="sm"
            @click="handleClick"></q-btn>
        </div>
        <WhiteTable :title="pageTitle"/>
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
    const obj = ref({});
    const leftDrawerOpen = ref(false);
    const name = ref(null);
    const description = ref(null);
    const amount = ref(null);
    const material = ref(null);
    const mrp = ref(null);
    const qualitycheck = ref(null)
    const isExchange = ref(null);

    const handleClick = () => {
      // Your click event logic goes here
      console.log('Button clicked!');
      leftDrawerOpen.value = !leftDrawerOpen.value
    };

    const onSubmit = () => {
      console.log('submit');
    }
    return {
      leftDrawerOpen,
      name,
      description,
      amount,
      material,
      mrp,
      qualitycheck,
      isExchange,
      handleClick,
      onSubmit,
      pageTitle: 'item'
    };
  },
});
</script>
