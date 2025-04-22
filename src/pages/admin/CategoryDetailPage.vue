<template>
  <div class="isolate bg-white px-6 lg:px-8">
    <form v-on:submit.prevent="createItem()">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-2 sm:col-start-1">
              <label for="categorytype" class="block text-sm font-medium leading-6 text-gray-900"
                >Category Type</label
              >
              <div class="mt-2">
                <select
                 v-model="categoryType"
                  id="categorytype"
                  name="categorytype"
                  autocomplete="categorytype-name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  
                  <option>Boys</option>
                  <option>Girls</option>
                  <option>Toys</option>
                  <option>Beauty</option>
                  <option>Women</option>
                </select>
              </div>
            </div>
              <div class="sm:col-span-2 sm:col-start-1">
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900"
                >Category Name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="name"
                  name="name"
                  id="name"
                  autocomplete="address-level2"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
 
           
         
           
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Category
        </button>
      </div>
    </form>
  </div>
</template>
  
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetItemAvailableById } from '../../api/user/item'
import useCategoryDetails, { GetCategoryById } from '../../api/admin/category'
import useBrandDetails from '../../api/admin/brand';
import { onMounted, ref, watch, defineEmits } from 'vue'
import { useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const id = ref(route.params.id as string)

const { result: categoryDate } = GetCategoryById(id.value);


const name = ref<string>();
const categoryType = ref<string>();

const catid = ref();
const description = ref<string>();
const active = ref<boolean>();
const selectedFile = ref();
const imagePreview = ref();
const imagePath = ref();

watch(categoryDate,()=>{
  catid.value = categoryDate?.value?.categoryById.id;
  name.value = categoryDate?.value?.categoryById.name;
  description.value = categoryDate?.value?.categoryById.description;
  active.value = categoryDate?.value?.categoryById.isActive;
  imagePath.value = categoryDate?.value?.categoryById.imagePath;
})

const createItem =()=>{
  console.log('createItem',name)
}
</script>
  
  <style>
</style>