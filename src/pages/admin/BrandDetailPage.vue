<template>
  <div class="isolate bg-white px-6 lg:px-8">
    <form v-on:submit.prevent="submitBrand()">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="col-span-full flex justify-center">
              <img class="mt-2" style="max-width: 8rem;" :src="`${imageBrandPath}${logo}`"/>
            </div>
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Brand Name</label>
              <div class="mt-2">
                <input type="text" v-model="name" name="name" id="name" autocomplete="address-level2"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            
            <div class="col-span-full">
              <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
              <div class="mt-2">
                <textarea id="description" name="description" placeholder="Enter a description" v-model="description" rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
              <!-- <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences description.</p> -->
            </div>

            <div class="col-span-full">
              <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Change Logo</label>
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
                    class="mx-auto h-40 w-40 object-cover" />

                  <div class=" flex text-sm leading-6 text-gray-600">
                    <label for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Change a file</span>
                      <input id="file-upload" name="file-upload" type="file" @change="onFileChange" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, up to 50MB</p>
                </div>
              </div>
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
        <button
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Update Brand
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
import { GetBrandById } from '../../api/admin/brand';
import gql from 'graphql-tag';
import { useMutation } from '@vue/apollo-composable';
import { controllerUrlPath, imageBrandPath } from '../../constant/commonPath';
const { result: categoryDate } = useCategoryDetails()
console.log('categoryDate', categoryDate)

const route = useRoute()
const router = useRouter()
const id = ref(route.params.id as string)
console.log('id', id.value);

const { result: brandData } = GetBrandById(id.value);
console.log(brandData)

const brandid = ref();
const name = ref<string>();
const description = ref<string>();
const active = ref<boolean>();
  const selectedFile = ref();
  const imagePreview = ref();
  const logo = ref();

const categoryType = ref<string>();

const brand = ref<string>();


watch(brandData,()=>{
  brandid.value = brandData?.value?.brandsById.id;
  name.value = brandData?.value?.brandsById.name;
  description.value = brandData?.value?.brandsById.description;
  active.value = brandData?.value?.brandsById.isActive;
  logo.value = brandData?.value?.brandsById.logo;
})

// const createItem =()=>{
//   console.log('createItem',name)
// }

const UPDATE_BRAND = gql`
  mutation updateBrand($brand: BrandInput!) {
    updateBrand(branddetails: $brand)
  }
`;

const updateBrand = useMutation(UPDATE_BRAND, {
  optimisticResponse: {
    updateBrand: true,
  },
});

async function submitBrand() {
  try {
    if (selectedFile.value == null) {
      const response = await updateBrand.mutate({
        brand: {
          id: brandid.value,
          name: name.value,
          logo: logo.value,
          description: description.value,
          modifiedOn: new Date().toISOString(),
          isActive: active.value,
        },
      });

      if (response?.data?.updateBrand) {
        console.log("Brand updated successfully:", response);
        alert("Brand updated successfully")
        router.push('/admin/brand')
      } else {
        console.log("Brand updated failed.");
      }
    }
    else {
      const data = {
        id: brandid.value,
        name: name.value,
        logo: logo.value,
        description: description.value,
        modifiedOn: new Date().toISOString(),
        isActive: active.value,
      }
      const formData = new FormData();
      formData.append('file', selectedFile.value);
      formData.append('branddetails', JSON.stringify(data));

      fetch(`${controllerUrlPath}PostUpdateBrand`, {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update data');
          }
          return response.json();
        })
        .then(data => {
          alert('Brand updated successfully')
          router.push('/admin/brand')
          console.log('Success:', data)
        }
        )
        .catch((error) => console.error('Error:', error));
    }

  } catch (error) {
    console.error("Error updated brand:", error);
  }
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
  
  <style>
</style>