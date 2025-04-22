<template>
    <div class="mb-4 pb-4">
      <h2 class="mb-3 text-lg font-bold">Personal Information</h2>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
        <div class="xl:col-span-6">
          <label for="firstNameInput" class="inline-block mb-2 font-medium">Old Password</label>
          <input
            type="text"
            id="firstNameInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Enter First Name"
          />
        </div>
        <!--end col-->
        <div class="xl:col-span-6">
          <label for="lastNameInput" class="inline-block mb-2 font-medium">New Password</label>
          <input
            type="text"
            id="lastNameInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Enter Last Name"
          />
        </div>
        <!--end col-->
        <div class="xl:col-span-6">
          <label for="phoneNumberInput" class="inline-block mb-2 font-medium">Phone Number</label>
          <input
            type="text"
            id="phoneNumberInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          />
        </div>
        <!--end col-->
        <div class="xl:col-span-6">
          <label for="emailAddressInput" class="inline-block mb-2 font-medium">Email Address</label>
          <input
            type="email"
            id="emailAddressInput"
            class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Enter email"
          />
        </div>
        <!--end col-->
      </div>
    </div>

  </template>
  
  <script setup lang="ts">
 

  

  </script>
  
  <style></style>
  