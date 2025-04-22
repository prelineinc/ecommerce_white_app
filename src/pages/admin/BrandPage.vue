<template>
  <div class="mx-auto mt-5">

    <div class="flex flex-col">
      <button @click="redirectToAddBrandPage()" style="max-width: 5rem;justify-content: right;"
        class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Add</button>
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden ">
            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead class="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">

                  </th>
                  <th scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Brand Name
                  </th>
                  <th scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Active
                  </th>

                  <th scope="col" class="p-4">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <tr v-for="x of brandData?.brands" :key="x" class="hover:bg-gray-100 dark:hover:bg-gray-700">

                  <td>
                    <img style="max-width: 4rem;" :src="`${imageBrandPath}${x?.logo}`" />
                  </td>
                  <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ x?.name }}
                  </td>
                  <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    <div v-if="x?.isActive">
                      <p>Available</p>
                    </div>
                    <div v-else>
                      <p style="background-color: yellow;">NotAvailable</p>
                    </div>
                  </td>

                  <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <!-- <button @click="RedirectToBrandDetailPage(x.id)" style="max-width: 5rem;" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Details</button>  -->
                    <svg style="cursor: pointer" @click="RedirectToBrandDetailPage(x.id)"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { imageBrandPath } from '@/constant/commonPath';
import useBrandDetails from '../../api/admin/brand';
import Brand from '../../types/admin/brand';
import { useRouter } from 'vue-router';

const { result: brandData } = useBrandDetails();
console.log('brand', brandData as Brand[]);
const router = useRouter()
const redirectToAddBrandPage = () => {
  router.push('brand/add');
}

const RedirectToBrandDetailPage = (id: any) => {
  router.push(`brand/${id}`)
}

</script>

<style></style>