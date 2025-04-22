<template>
  <div class="isolate bg-white px-6 lg:px-8">
    <form v-on:submit.prevent="createItem()">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <!-- <div class="sm:col-span-2 sm:col-start-1">
              <label for="categorytype" class="block text-sm font-medium leading-6 text-gray-900">Category Type</label>
              <div class="mt-2">
                <select v-model="categoryType" id="categorytype" name="categorytype" autocomplete="categorytype-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

                  <option>Boys</option>
                  <option>Girls</option>
                  <option>Toys</option>
                  <option>Beauty</option>
                  <option>Women</option>
                </select>
              </div>
            </div> -->
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div class="mt-2">
                <input type="text" v-model="name" name="name" id="name" autocomplete="address-level2"
                  placeholder="Enter a name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <!-- material col -->
            <div class="sm:col-span-3">
              <label for="material" class="block text-sm font-medium leading-6 text-gray-900">Category Type</label>
              <div class="mt-2">
                <select v-model="categoryType" id="categorytype" name="categorytype" autocomplete="categorytype-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option :value=0 disabled>Select a categorytype</option>
                  <option :value=2>Boys</option>
                  <option :value=1>Girls</option>
                  <option :value=5>Toys</option>
                  <option :value=4>Baby Care</option>
                  <option :value=3>Women</option>
                </select>
              </div>
            </div>
            <div class="col-span-full">
              <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
              <div class="mt-2">
                <textarea id="description" name="description" v-model="description" rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences description. [Optional]</p>
            </div>

            <div class="col-span-full">
              <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <svg v-if="!imagePreview" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd" />
                  </svg>

                  <!-- Image Preview -->
                  <img v-if="imagePreview" :src="imagePreview" alt="Uploaded Image"
                    class="mx-auto h-48 w-48 object-cover" />

                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" @change="onFileChange" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              <p class="mt-3 text-sm leading-6 text-red-400">*required</p>
            </div>
            <div class="sm:col-span-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="active" name="active" v-model="active" type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
                <div class="text-sm leading-6">
                  <label for="active" class="font-medium text-gray-900">Active</label>
                  <p class="text-gray-500">Make it visible of invisible to users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button :disabled="isFormInvalid"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add Category
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useGetItemAvailableById } from '../../api/user/item'
import useCategoryDetails from '../../api/admin/category'
import useBrandDetails from '../../api/admin/brand';
import { onMounted, ref, watch, defineEmits } from 'vue'
import { computed } from 'vue';
import { controllerUrlPath } from '../../constant/commonPath';
const { result: categoryDate } = useCategoryDetails()
console.log('categoryDate', categoryDate)

const router = useRouter()
const name = ref<string>();
const categoryType = ref<string>('0');
const selectedFile = ref();
const imagePreview = ref()
const active = ref<boolean>(false);
const description = ref<string>('');

const isFormInvalid = computed(() => {
  return !name.value || !selectedFile.value || !active.value
})

async function createItem() {
  const data = {
    id: "00000000-0000-0000-0000-000000000000",
    name: name.value,
    imagePath: null,
    categoryTypeId: categoryType,
    description: description.value || null,
    createdOn: new Date().toISOString(),
    modifiedOn: null,
    isActive: active.value,
  }

  const formData = new FormData();
  formData.append('file', selectedFile.value);
  formData.append('categorydetails', JSON.stringify(data));

  fetch(`${controllerUrlPath}postaddcategory`, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add category');
      }
      return response.json();
    })
    .then(data => {
      alert('Category added successfully')
      router.push('/admin/category')
      console.log('Success:', data)
    }
    )
    .catch((error) => console.error('Error:', error));
}


const onFileChange = (event: any) => {
  const file = event.target.files[0];
  selectedFile.value = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>

<style></style>