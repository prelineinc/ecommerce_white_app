<template>
  <q-layout view="lHh Lpr lFf">
    <q-page>
      <q-drawer side="right" v-model="leftDrawerOpen" bordered :width="350">
        <div class="q-mx-md row justify-between">
          <div v-if="isEdit == false" class="text-subtitle2">Add Category</div>
          <div v-if="isEdit == true" class="text-subtitle2">Edit Category</div>
          <q-btn icon="close" flat round dense size="sm" @click="handleClick"></q-btn>
        </div>

        <div class="q-ma-md">
          <q-form @submit.prevent="onSubmit">
            <q-input filled v-model="name" label="Name *" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
            <q-input filled v-model="description" label="Description*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
              <div>
              <q-item-label class="q-my-sm">Upload Img</q-item-label>
              <q-uploader url="http://localhost:4444/upload" style="max-width: 250px"></q-uploader>
            </div>
            <div class="q-my-md">
              <q-btn class="full-width" label="Submit" type="submit" color="primary"></q-btn>

              <q-dialog v-model="successDialog" persistent transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6">Message</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Item has been add Successfully
                  </q-card-section>

                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup></q-btn>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>

          </q-form>
        </div>
      </q-drawer>
      <q-page-container class="q-my-md">
        <div class="q-mr-md row" style="display: flex; justify-content: space-between;">
          <div class="text-h6 q-mx-md">
            Category List
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
  name: 'IndexPage',
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
    const successDialog = ref(false)

    const handleClick = () => {
      // Your click event logic goes here
      console.log('Button clicked!');
      isEdit.value = false;
      leftDrawerOpen.value = !leftDrawerOpen.value
    };

    const onSubmit = () => {
      console.log('submit');
      successDialog.value = true;
    }
    return { leftDrawerOpen, name, description, amount, successDialog, handleClick, onSubmit, pageTitle: 'category', isEdit };
  },
});
</script>
