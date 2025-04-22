<template>
    <div class="mx-auto mt-5">
  
  <div class="flex flex-col">
      <button @click="RedirectToItemPage()" style="max-width: 5rem;justify-content: right;" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Add</button>
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
    
        <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden ">
                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr><th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              
                            </th>
                            
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Product Name
                            </th>
                            
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Price
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Offer
                            </th>
                            
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Avaliable Count
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                               Category
                            </th>
                          
                            <th scope="col" class="p-4">
                              Details
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <tr v-for="x of itemData?.items" :key="x" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                          
                            <td>  <img style="max-width: 4rem;" :src="`${imagePath}${x?.imagePath}`"/></td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{{x.name}} </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">price : {{x?.amount}}&nbsp; mrp:{{ x?.mrp }}</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{{x?.offer}}% </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ x?.itemAvailables[0].totalCount }}</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{{ x?.categoryType.name }}</td>
                            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <!-- <a @click="RedirectToItemDetailPage(x.id)" class="text-blue-600 dark:text-blue-500 hover:underline">Details</a> -->
                                <button @click="RedirectToItemDetailPage(x.id)" style="max-width: 5rem;" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Details</button> 
                              
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
  import { imagePath } from '@/constant/commonPath';
  import {useItemDetails} from '../../api/admin/item';
  import Item from '../../types/admin/item';
  import { useRouter } from 'vue-router';
  const {result:itemData} = useItemDetails();
  console.log('brand',itemData as Item[]);
  const router = useRouter()
  const RedirectToItemDetailPage = (id)=>{
  router.push(`item/${id}`)
  }
  
  const RedirectToItemPage=()=>{
      router.push('item/add');
  }
  </script>
  
  <style>
  
  </style>