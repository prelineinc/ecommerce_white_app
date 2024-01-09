<template>
  <q-layout view="lHh Lpr lFf">
    <q-page>
      <q-drawer side="right" v-model="leftDrawerOpen" bordered :width="300">
        <div class="q-mx-md row justify-between">
          <div v-if="isEdit == false" class="text-subtitle2">Add User</div>
          <div v-if="isEdit == true" class="text-subtitle2">Edit User</div>
          <q-btn icon="close" flat round dense size="sm" @click="handleClick"></q-btn>
        </div>
        <div class="q-ma-md">
          <q-form @submit.prevent="onSubmit">
            <q-input filled v-model="name" label="Full Name*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please Enter Name']"></q-input>
            <q-input filled v-model="phonenumber" label="Phone Number*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please Enter Phonenumber']"></q-input>
            <q-input filled v-model="email" label="Email*" lazy-rules
              :rules="[val => val && val.length > 0 || 'Please Enter Email']"></q-input>
            <q-select filled v-model="usertype" :options="options" label="User Type"></q-select>
            <div class="q-my-md">
              <q-btn class="full-width" label="Submit" type="submit" color="primary"></q-btn>
            </div>
          </q-form>
        </div>
      </q-drawer>
      <q-page-container class="q-my-md">
        <div class="q-mr-md row" style="display: flex; justify-content: space-between;">
          <div class="text-h6 q-mx-md">
            User List
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
  name: 'UserPage',
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
    const phonenumber = ref(null);
    const email = ref(null);
    const usertype = ref(null);
    const filter = ref('')


    const handleClick = () => {
      console.log('Button clicked!');
      isEdit.value = false;
      leftDrawerOpen.value = !leftDrawerOpen.value
    };

    const onSubmit = () => {
      console.log('submit');
    }
    const options = [
      'Admin', 'User'
    ]

    return { leftDrawerOpen, name, phonenumber, email, filter, usertype, options, handleClick, onSubmit, pageTitle: 'user', isEdit };
  },

})
</script>

<style></style>
