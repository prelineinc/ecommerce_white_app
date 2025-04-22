<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="flex items-center justify-center">
            <div class="flex flex-col justify-center p-12 p-lg-20 w-full max-w-md bg-gray-100 rounded-3xl">
                <div class="flex flex-col px-lg-10 pb-15">
                    <div class="text-center mb-8">
                        <h1 class="text-gray-900 text-3xl font-bold mb-4">Track Your Order</h1>
                        <div class="text-gray-500">Enter your order ID to track your order!</div>
                    </div>

                    <div class="mb-4">
                        <input v-model="orderId" type="text" id="otp" name="otp" autocomplete="otp"
                            placeholder="Enter your order ID"
                            class="block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" />
                    </div>

                    <div class="d-grid mb-2">
                        <button @click="trackOrder"
                            class="text-yellow-900 bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-100 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full">
                            Continue
                        </button>
                    </div>

                    <!-- <div class="text-gray-500 text-center" v-if="status">
                        <span>{{ status }}</span>
                    </div> -->
                </div>
            </div>
        </div>
        <div v-if="status" class="mt-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5">
                <div>
                    <div class="border border-gray-300 rounded-lg p-5 mb-3">
                        <h6 class="mb-1 underline">#{{ data?.ordersById?.id }}</h6>
                        <p class="text-slate-500">Order ID</p>
                    </div>
                </div>
                <div>
                    <div class="border border-gray-300 rounded-lg p-5 mb-3">
                        <h6 class="mb-1 font-bold text-gray-800">{{ formatDate(data?.ordersById?.createdOn) }}</h6>
                        <p class="text-slate-500">Order Date</p>
                    </div>
                </div>
                <div v-if="!data?.ordersById?.isRental">
                    <div class="border border-gray-300 rounded-lg p-5 mb-3">
                        <h6 class="mb-1 font-bold text-gray-800">{{ formatDate(data?.ordersById?.expectedDelivery) }}
                        </h6>
                        <p class="text-slate-500">Expected Delivery Date</p>
                    </div>
                </div>
                <div>
                    <div class="border border-gray-300 rounded-lg p-5 mb-3">
                        <h6 class="mb-1 font-bold text-gray-800">&#8377;{{ data?.ordersById?.finalAmount }}</h6>
                        <p class="text-slate-500">Order Amount</p>
                    </div>
                </div>
            </div>
            <div class="border border-gray-300 rounded-lg overflow-x-auto relative mb-3">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <!-- <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        </th> -->
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Items</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Size</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount</th>
                            <!-- <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Count</th> -->
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Created</th>
                            <th scope="col" v-if="!status.isShipped && !status.isDelivered"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Expected Delivery</th>
                            <th scope="col" v-if="status.isDelivered"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Delivered</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr v-for="y of JSON.parse(status.itemId)" :key="y.id">
                            <!-- <td class="px-6 py-4"><img :src="`${imagePath}${y.id}.jpg`" class="h-10"></td> -->
                            <td class="px-6 py-4">
                                <h6 class="mb-1"><a @click="RedirectToItemDetails(y?.id)"
                                        class="transition-all duration-300 ease-linear hover:text-blue-500 cursor-pointer">{{
                                            y.name }}</a>
                                </h6>
                            </td>
                            <td class="px-6 py-4">
                                <p class="text-slate-500">{{ y.brandsize }}
                                </p>
                            </td>
                            <td class="px-6 py-4">
                                <p class="text-slate-500">&#8377; {{ status.totalAmount }}
                                </p>
                            </td>
                            <!-- <td class="px-6 py-4">
                            <p class="text-slate-500">
                                {{ y.count }}
                            </p>
                        </td> -->
                            <td class="px-3.5 py-2.5">
                                <span v-if="status.isDelivered"
                                    class="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-300 text-green-900">Delivered</span>
                                <span v-if="status.isShipped"
                                    class="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-blue-100 border-blue-300 text-blue-900">Shipped</span>
                                <span v-if="!status.isShipped && !status.isDelivered"
                                    class="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-300 text-yellow-900">Pending</span>
                            </td>
                            <td class="px-6 py-4">
                                <p class="text-slate-500">{{ formatDate(status.createdOn) }}
                                </p>
                            </td>
                            <td class="px-6 py-4" v-if="!status.isShipped && !status.isDelivered">
                                <p class="text-slate-500">{{ formatDate(status.expectedDelivery) }}
                                </p>
                            </td>
                            <td class="px-6 py-4" v-if="status.isDelivered">
                                <p class="text-slate-500">{{ formatDate(status.modifiedOn) }}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="border border-gray-300 rounded-lg p-5 mb-3">
                <div class="flex items-center mb-4">
                    <h6 class="text-lg font-bold">Order Status</h6>
                </div>
                <div>
                    <div :class="{ 'done': currentStep >= 1 }"
                        class="relative pl-6 before:absolute before:border-l-2 before:left-[7px] before:border-slate-300 [&.done]:before:border-green-600 before:top-1.5 before:-bottom-1.5 after:absolute after:w-4 after:h-4 after:bg-white after:border-2 after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-green-600 [&.done]:after:border-green-600">
                        <div class="flex gap-4">
                            <div class="grow">
                                <h6 class="mb-2 text-gray-800 text-base font-medium">Order Placed</h6>
                                <p class="text-gray-400">Your order has been successfully submitted.</p>
                            </div>
                            <p class="text-sm text-gray-400 shrink-0">{{ formatDate(data?.ordersById?.createdOn) }}</p>
                        </div>
                    </div>

                    <div :class="{ 'done': currentStep >= 2 }"
                        class="relative pl-6 before:absolute before:border-l-2 before:left-[7px] before:border-slate-300 [&.done]:before:border-green-600 before:top-1.5 before:-bottom-1.5 after:absolute after:w-4 after:h-4 after:bg-white after:border-2 after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-green-600 [&.done]:after:border-green-600">
                        <div class="flex gap-4">
                            <div class="grow">
                                <h6 class="mb-2 text-gray-800 text-base font-medium">Order Processing</h6>
                                <p class="text-gray-400">Once the order is received, it goes through the
                                    processing stage. During this time, the items are gathered, and the order is
                                    prepared for
                                    shipment.</p>
                            </div>
                            <p class="text-sm text-gray-400 shrink-0">{{ formatDate(data?.ordersById?.createdOn) }}</p>
                        </div>
                    </div>

                    <div :class="{ 'done': currentStep >= 3 }"
                        class="relative pl-6 before:absolute before:border-l-2 before:left-[7px] before:border-slate-300 [&.done]:before:border-green-600 before:top-1.5 before:-bottom-1.5 after:absolute after:w-4 after:h-4 after:bg-white after:border-2 after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-green-600 [&.done]:after:border-green-600">
                        <div class="flex gap-4">
                            <div class="grow">
                                <h6 class="mb-2 text-gray-800 text-base font-medium">Shipped Order</h6>
                                <p class="text-gray-400">The order is shipped out to the customer's designated
                                    delivery address.</p>
                            </div>
                            <p v-if="data?.ordersById?.isShipped || data?.ordersById?.isDelivered"
                                class="text-sm text-gray-400 shrink-0">{{ formatDate(data?.ordersById?.modifiedOn ||
                                    null) }}</p>
                        </div>
                    </div>
                    <div :class="{ 'done': currentStep >= 4 }"
                        class="relative pl-6 before:absolute before:border-l-2 before:left-[7px] before:border-slate-300 [&.done]:before:border-green-600 before:top-1.5 before:-bottom-1.5 after:absolute after:w-4 after:h-4 after:bg-white after:border-2 after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-green-600 [&.done]:after:border-green-600">
                        <div class="flex gap-4">
                            <div class="grow">
                                <h6 class="mb-2 text-gray-800 text-base font-medium">Delivered</h6>
                                <p class="text-gray-400">Finally, when the order successfully reaches the
                                    customer's address and is handed over, the status changes to "Delivered."</p>
                            </div>
                            <p v-if="data?.ordersById?.isDelivered" class="text-sm text-gray-400 shrink-0">{{
                                formatDate(data?.ordersById?.modifiedOn || null) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { watch } from 'vue';
import { imagePath } from '@/constant/commonPath';
import { formatDate } from '@/utility/dateFormat';
import { useRouter } from 'vue-router';

//4706af1b-dcfe-4f3b-ad22-ac3707dcc3cb
//088009a5-d72b-4583-92d6-910c8d6ff248
const orderId = ref('');
const status = ref(null);
const queryReady = ref(false);

const { result: data, refetch: refetchData } = useQuery(
    computed(() => {
        if (!queryReady.value || !orderId.value) return null;
        return gql`
      query OrdersById {
        ordersById(id: "${orderId.value}") {
          id
          itemId
          userId
          addressId
          totalCount
          totalAmount
          finalAmount
          deliveryCharge
          expectedDelivery
          isShipped
          isCancelled
          isDelivered
          isReturned
          isExchage
          isRental
          isActive
          createdOn
          modifiedOn
        }
      }
    `;
    })
);

watch(data, () => {
    if (data.value) {
        status.value = data.value.ordersById;
        console.log(status.value);
    }
    else {
        alert("Please enter a valid order ID. No more results found!")
    }
});
const currentStep = computed(() => {
    let step = 0;
    if (data.value?.ordersById.isShipped) step = 2
    else if (data.value?.ordersById.isDelivered) step = 4
    else step = 1
    return step
});
const trackOrder = () => {
    if (orderId.value) {
        queryReady.value = true;
        refetchData();
    } else {
        alert("Please enter a valid order ID.")
    }
};
const router = useRouter()

const RedirectToItemDetails = (itemId: any) => {
    router.push(`/item/${itemId}`);
}


</script>

<style>
/* You can add custom styles here if needed */
</style>