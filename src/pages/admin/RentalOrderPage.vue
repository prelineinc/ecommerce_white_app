<template>
    <div class="mx-auto mt-5">
        <div class="flex flex-col">
            <div class="md:flex justify-between items-center mb-3">
                <div class="md:flex items-center">
                    <!-- <label class="font-semibold md:me-2">Select: </label> -->
                    <select v-model="shortItem"
                        class="form-select form-input text-sm md:w-48 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:ring-0">
                        <option>Rental</option>
                        <option>Extention</option>
                    </select>
                </div>
            </div>
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Order Date
                                    </th>
                                    <th style="max-width: 5rem; justify-content: left" scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Items
                                    </th>
                                    <th scope="col"
                                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Delivered
                                    </th>
                                    <th scope="col" class="p-4">Status</th>
                                    <th scope="col" class="p-4">Details</th>
                                    <th scope="col" class="p-4">Invoice</th>
                                </tr>
                            </thead>
                            <tbody v-if="shortItem == 'Rental' && updatedRental" class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr v-for="x of updatedRental" :key="x"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="px-3.5 py-2.5 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        style="max-width: 1rem; justify-content: left">
                                        {{ formatDate(x?.createdOn) }}
                                    </td>
                                    <td class="py-2.5 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white"
                                        style="max-width: 10rem; overflow: hidden">
                                        <div v-for="y of JSON.parse(x?.itemId)" :key="y.id">
                                            <!-- {{ y }} -->
                                            <div :title="y.name">{{ y.name }} - {{ y.count }}</div>
                                        </div>
                                    </td>
                                    <td class="px-3.5 py-2.5 border-y border-gray-200">
                                        <span v-if="x?.isDelivered"
                                            class="delivery_status px-5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-300 text-green-900">Delivered</span>
                                        <span v-if="x?.isShipped"
                                            class="delivery_status px-5 py-0.5 text-xs inline-block font-medium rounded border bg-blue-100 border-blue-300 text-blue-900">Shipped</span>
                                        <span v-if="x?.isCancelled"
                                            class="delivery_status px-5 py-1 text-xs inline-block font-medium rounded border bg-red-100 border-red-300 text-red-900">Cancelled</span>
                                        <span v-else-if="x?.isReturned"
                                            class="delivery_status px-5 py-1 text-xs inline-block font-medium rounded border bg-orange-100 border-orange-300 text-orange-900">Returned</span>
                                        <span v-else-if="!x?.isShipped && !x?.isDelivered"
                                            class="delivery_status px-5 py-1 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-300 text-yellow-900">Pending</span>
                                    </td>
                                    <td class="px-3.5 py-2.5 text-sm font-medium text-center whitespace-nowrap">
                                        <div v-if="x?.isShipped">
                                            <button @click="isDeliveredOrder(x)" style="max-width: 5rem"
                                                class="w-full rounded-md bg-green-600 py-2 font-bold text-white shadow hover:shadow-lg hover:bg-green-400 transition duration-200 ease-out">
                                                Delivered
                                            </button>
                                        </div>
                                        <div v-else-if="x?.isDelivered">
                                            <button style="max-width: 5rem"
                                                class="bg-gray-200 text-gray-500 rounded-md px-3 py-2 text-sm font-medium"
                                                disabled>
                                                Delivered
                                            </button>
                                        </div>
                                        <!-- <div v-if="!x?.isShipped && !x?.isDelivered && x?.isCancelled"></div>
                      <div v-if="!x?.isCancelled"></div> -->
                                        <div v-else-if="x?.isCancelled || x?.isReturned"></div>
                                        <div v-else-if="!x?.isShipped && !x?.isDelivered">
                                            <button @click="isShippedOrder(x.id)" style="max-width: 5rem"
                                                class="w-full rounded-md bg-yellow-400 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-400 transition duration-200 ease-out">
                                                Shipped
                                            </button>
                                            &nbsp;
                                            <button @click="isDeliveredOrder(x)" style="max-width: 5rem"
                                                class="w-full rounded-md bg-green-600 py-2 font-bold text-white shadow hover:shadow-lg hover:bg-green-400 transition duration-200 ease-out">
                                                Delivered
                                            </button>
                                            <!-- <a @click="Confirmed(x.id)" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Confirm</a>
                                <a @click="Rejected(x.id)" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Reject</a> -->
                                        </div>
                                    </td>

                                    <td class="px-3.5 py-2.5 text-sm font-medium text-center whitespace-nowrap">
                                        <!-- <a @click="RedirectToOrderDetailPage(x.id)" class="text-blue-600 dark:text-blue-500 hover:underline">Details</a> -->

                                        <svg style="cursor: pointer" @click="RedirectToOrderDetailPage(x.id)"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                        </svg>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <!-- <a @click="RedirectToItemDetailPage(x.id)" class="text-blue-600 dark:text-blue-500 hover:underline">Details</a> -->

                                        <svg style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"
                                            @click="downloadInvoice(x.id)">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>

                            <tbody v-else-if="shortItem == 'Extention' && updatedExtention" class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr v-for="x of updatedExtention" :key="x"
                                    class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <td class="px-3.5 py-2.5 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        style="max-width: 1rem; justify-content: left">
                                        {{ formatDate(x?.createdOn) }}
                                    </td>
                                    <td class="py-2.5 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white"
                                        style="max-width: 10rem; overflow: hidden">
                                        <div v-for="y of JSON.parse(x?.order.itemId)" :key="y.id">
                                            <!-- {{ y }} -->
                                            <div :title="y.name">{{ y.name }} - {{ y.count }}</div>
                                        </div>
                                    </td>
                                    <td class="px-3.5 py-2.5 border-y border-gray-200">
                                        <span v-if="x?.isDelivered"
                                            class="delivery_status px-5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-300 text-green-900">Delivered</span>
                                        <span v-if="x?.isShipped"
                                            class="delivery_status px-5 py-0.5 text-xs inline-block font-medium rounded border bg-blue-100 border-blue-300 text-blue-900">Shipped</span>
                                        <span v-if="x?.isCancelled"
                                            class="delivery_status px-5 py-1 text-xs inline-block font-medium rounded border bg-red-100 border-red-300 text-red-900">Cancelled</span>
                                        <span v-else-if="x?.isReturned"
                                            class="delivery_status px-5 py-1 text-xs inline-block font-medium rounded border bg-orange-100 border-orange-300 text-orange-900">Returned</span>
                                        <span v-else-if="!x?.isShipped && !x?.isDelivered"
                                            class="delivery_status px-5 py-1 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-300 text-yellow-900">Pending</span>
                                    </td>
                                    <td class="px-3.5 py-2.5 text-sm font-medium text-center whitespace-nowrap">
                                        <div v-if="x?.isShipped">
                                            <button @click="isDeliveredOrder(x)" style="max-width: 5rem"
                                                class="w-full rounded-md bg-green-600 py-2 font-bold text-white shadow hover:shadow-lg hover:bg-green-400 transition duration-200 ease-out">
                                                Delivered
                                            </button>
                                        </div>
                                        <div v-else-if="x?.isDelivered">
                                            <button style="max-width: 5rem"
                                                class="bg-gray-200 text-gray-500 rounded-md px-3 py-2 text-sm font-medium"
                                                disabled>
                                                Delivered
                                            </button>
                                        </div>
                                        <!-- <div v-if="!x?.isShipped && !x?.isDelivered && x?.isCancelled"></div>
                      <div v-if="!x?.isCancelled"></div> -->
                                        <div v-else-if="x?.isCancelled || x?.isReturned"></div>
                                        <div v-else-if="!x?.isShipped && !x?.isDelivered">
                                            <button @click="isShippedOrder(x.id)" style="max-width: 5rem"
                                                class="w-full rounded-md bg-yellow-400 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-400 transition duration-200 ease-out">
                                                Shipped
                                            </button>
                                            &nbsp;
                                            <button @click="isDeliveredOrder(x)" style="max-width: 5rem"
                                                class="w-full rounded-md bg-green-600 py-2 font-bold text-white shadow hover:shadow-lg hover:bg-green-400 transition duration-200 ease-out">
                                                Delivered
                                            </button>
                                            <!-- <a @click="Confirmed(x.id)" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Confirm</a>
                                <a @click="Rejected(x.id)" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Reject</a> -->
                                        </div>
                                    </td>

                                    <td class="px-3.5 py-2.5 text-sm font-medium text-center whitespace-nowrap">
                                        <!-- <a @click="RedirectToOrderDetailPage(x.id)" class="text-blue-600 dark:text-blue-500 hover:underline">Details</a> -->

                                        <svg style="cursor: pointer" @click="RedirectToOrderDetailPage(x.orderId)"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                        </svg>
                                    </td>
                                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <!-- <a @click="RedirectToItemDetailPage(x.id)" class="text-blue-600 dark:text-blue-500 hover:underline">Details</a> -->

                                        <svg style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"
                                            @click="downloadInvoice(x.id)">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
                            class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                            <div class="flex flex-1 justify-between sm:hidden">
                                <a href="#"
                                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                                <a href="#"
                                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                            </div>
                            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                <div>
                                    <p class="text-sm text-gray-700">
                                        Showing
                                        <span class="font-medium">1</span>
                                        to
                                        <span class="font-medium">10</span>
                                        of
                                        <span class="font-medium">97</span>
                                        results
                                    </p>
                                </div>
                                <div>
                                    <nav class="isolate inline-flex -space-x-px rounded-md shadow-xs"
                                        aria-label="Pagination">
                                        <a @click="PreviousPage(currentPage)"
                                            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                            <span class="sr-only">Previous</span>
                                            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd"
                                                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                                        <a href="#" aria-current="page"
                                            class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                        <a href="#"
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                        <a href="#"
                                            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                        <span
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">...</span>
                                        <a href="#"
                                            class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                        <a href="#"
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                        <a href="#"
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                        <div @click="NextPage(currentPage)"
                                            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                            <span class="sr-only">Next</span>
                                            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd"
                                                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@vue/apollo-composable'
import orderDetails from '../../api/admin/order'
import type { parse } from 'path/posix'
import { useRouter } from 'vue-router'
import { formatDate } from '../../utility/dateFormat'
import { ref, computed } from 'vue'
import { watch } from 'vue'
const currentPage = ref(0);
const shortItem = ref('Rental')
const updatedPage = computed(() => currentPage.value);
//const QUERY_COMPANY_INFO = 
const { result, refetch, loading, error } = useQuery(computed(() => {
    return gql`
    query orders {
      ordersByPage(page: ${updatedPage.value}, rental: true) {
        id
          itemId
          isDelivered
          isShipped
          isCancelled
          isReturned
          isRental
          addressId
          createdOn
      }
    }
  `}
));

const { result: extentionData, refetch: refetchExtention, loading: extionLoading } = useQuery(computed(() => {
    return gql`
    query extentions {
        extentions {
    id
    extentDays
    from
    to
    orderId
    createdOn
    order {
      id
      itemId
          isDelivered
          isShipped
          isCancelled
          isReturned
          isRental
          addressId
          createdOn
    }
  }
    }
  `}
));

const updatedRental = computed(() => {
    return result.value?.ordersByPage || [];
})

const updatedExtention = computed(() => {
    return extentionData.value?.extentions || [];
})

watch(shortItem, () => {
    console.log(shortItem)
})

watch(loading, (isLoading) => {
  if (!isLoading && result.value?.ordersByPage) {
    const order = result.value?.ordersByPage;
  //console.log('aaa',catdata);
    // navigation.value.categories[0].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "1");
    // navigation.value.categories[1].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "2");
    // navigation.value.categories[2].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "4");
    // navigation.value.categories[3].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "5");
    // navigation.value.categories[4].sections[0].items = catdata.filter((item: any) => item.categoryTypeId == "3");
  }

});
//console.log('result', result)
const { result: orderData } = orderDetails()
//console.log('orderData', orderData)
const router = useRouter()
const Confirmed = (id) => {
    //console.log('id', id)
}
const Rejected = (id) => {
    //console.log('id', id)
}
const RedirectToOrderDetailPage = (id: any) => {
    router.push(`/admin/order/${id}`)
}

// const formatDate = (date:any) => {
//    return new Date(date).toLocaleDateString();
// }

const UPDATE_ORDER = gql`
    mutation UpdateOrderStatus($order: OrderInput!) {
      updateOrderStatus(order: $order)
    }
  `

const updateOrderStatus = useMutation(UPDATE_ORDER, {
    optimisticResponse: {
        updateOrderStatus: true
    }
})

async function isShippedOrder(id: any) {
    try {
        const response = await updateOrderStatus.mutate({
            order: {
                id: id,
                isShipped: true,
                isDelivered: false
            }
        })

        if (response?.data?.updateOrderStatus) {
            alert('Order update successfully')
            //console.log('Order update successfully:', response)
            refetch()
            window.location.reload()
        } else {
            alert('Order update failed.')
            //console.log('Order update failed.')
        }
    } catch (error) {
        console.error('Error Order update:', error)
    }
}

const CREATE_ORDER_DELIVERY = gql`
    mutation CreateDelivery($delivery: DeliveryInput!) {
      createDelivery(delivery: $delivery)
    }
  `

const createOrderDelivery = useMutation(CREATE_ORDER_DELIVERY, {
    optimisticResponse: {
        createDelivery: true
    }
})

async function isDeliveredOrder(data: any) {
    try {
        const response = await createOrderDelivery.mutate({
            delivery: {
                id: '00000000-0000-0000-0000-000000000000',
                orderId: data.id,
                address: data.addressId,
                deliveredDate: new Date().toISOString(),
                isDelivered: true,
                createdOn: new Date().toISOString(),
                isActive: true
            }
        })

        if (response?.data?.createDelivery) {
            alert('Order delivery updated successfully')
            //console.log('Order delivery updated successfully:', response)
            refetch()
            window.location.reload()
        } else {
            alert('Order update failed.')
            //console.log('Order update failed.')
        }
    } catch (error) {
        console.error('Error Order update:', error)
    }
}

const downloadInvoice = async (id: any) => {
    try {
        //const url = "https://localhost:7069/api/Home/postpdf/" + id;
        const url = 'https://white.prelinehealthcare.com/api/Home/postpdf/' + id
        const response = await fetch(url)
        //console.log(response.headers)
        if (response.ok) {
            const pdfArray = await response.blob()
            const blob = new Blob([pdfArray], {
                type: 'application/pdf;charset=utf-8',
            })
            const urls = URL.createObjectURL(blob)
            const file = document.createElement('a')
            file.href = urls
            file.download = id + '.pdf'
            document.body.appendChild(file)
            file.click()
            document.body.removeChild(file)
        } else {
            throw new Error(`Failed to fetch data: ${response.status}`)
        }
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

const NextPage = (pagenumber: number) => {

    currentPage.value = pagenumber + 1;
    //console.log('currentPage.value',currentPage.value);
    refetch();
}
const PreviousPage = (pagenumber: number) => {
    currentPage.value = pagenumber - 1;
    refetch();
}
</script>

<style></style>