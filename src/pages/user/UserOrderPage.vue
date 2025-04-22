<template>
  <div class="overflow-auto">
    <table class="w-full whitespace-nowrap">
      <thead class="bg-gray-200 text-left">
        <tr>
          <th class="px-3.5 py-2.5 font-semibold text-gray-800 border-b border-gray-300 sort">
            Order ID
          </th>
          <th class="px-3.5 py-2.5 font-semibold text-gray-800 border-b border-gray-300 sort">
            Order Date
          </th>
          <th class="px-3.5 py-2.5 font-semibold text-gray-800 border-b border-gray-300 sort">
            Delivery Date
          </th>
          <th class="px-3.5 py-2.5 font-semibold text-gray-800 border-b border-gray-300 sort">
            Total Items
          </th>
          <th class="px-3.5 py-2.5 font-semibold text-gray-800 border-b border-gray-300 sort">
            Amount
          </th>
          <th class="px-3.5 py-2.5 font-semibold text-gray-800 border-b border-gray-300 sort">
            Delivery Status
          </th>
          <th class="px-3.5 py-2.5 font-semibold text-gray-800 border-b border-gray-300">Action</th>
          <th scope="col" class="px-3.5 py-2.5 font-semibold text-gray-800 border-b border-gray-300">Invoice</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x of orderData?.ordersByUserId" :key="x?.id">
          <td class="px-3.5 py-2.5 border-y border-gray-200">
            <a @click="RedirectToOrderDetails(x?.id)"
              class="transition-all duration-150 ease-linear order_id text-custom-500 hover:text-custom-600">#{{x?.id.slice(30)}}</a>
          </td>
          <td class="px-3.5 py-2.5 border-y border-gray-200 order_date">{{formatDate(x?.createdOn)}}</td>
          <td class="px-3.5 py-2.5 border-y border-gray-200 delivery_date">{{formatDate(x?.expectedDelivery)}}</td>
          <td class="px-3.5 py-2.5 border-y border-gray-200 payment_method">
            <div v-for="y of JSON.parse(x?.itemId)" :key="y.id">
              <!-- {{ y }} -->
              <div :title="y.name">{{ y.name }} - {{ y.count }}</div>
            </div>
          </td>
          <td class="px-3.5 py-2.5 border-y border-gray-200 amount">&#8377;{{x?.finalAmount}}</td>
          <td class="px-3.5 py-2.5 border-y border-gray-200">
            <span v-if="x?.isDelivered"
              class="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-300 text-green-900">Delivered</span>
            <span v-if="x?.isShipped"
              class="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-blue-100 border-blue-300 text-blue-900">Shipped</span>

            <span v-if="x?.isCancelled"
              class="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-red-100 border-red-300 text-red-900">Cancelled</span>
            <span v-else-if="x?.isReturned"
              class="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-orange-100 border-orange-200 text-orange-600">Returned</span>
            <span v-else-if="!x?.isShipped && !x?.isDelivered"
              class="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-300 text-yellow-900">Pending</span>

          </td>
          <td class="px-3.5 py-2.5 border-y border-gray-200">
            <a class="px-4 py-1.5 transition-all duration-200 ease-linear text-gray-600 dropdown-item hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500"
              @click="RedirectToOrderDetails(x?.id)">
              View
            </a>
          </td>
          <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
            <!-- <a @click="RedirectToItemDetailPage(x.id)" class="text-blue-600 dark:text-blue-500 hover:underline">Details</a> -->

            <svg style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" class="size-6" @click="downloadInvoice(x.id)">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { GetOrderByUser } from '../../api/user/order'
import {formatDate} from '../../utility/dateFormat';
//b4c3fa3c-f8bc-40b9-bfb6-4204170a397f
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/authstore';

const router = useRouter()
const authstore = useAuthStore();
const { result: orderData } = GetOrderByUser(authstore.$state.recentAuth.id)

const RedirectToOrderDetails = (id: string) => {
  router.push(`/orders/${id}`);
}

const downloadInvoice = async (id: any) => {
    try {
      //const url = "https://localhost:7069/api/Home/postpdf/" + id;
      const url = 'https://white.prelinehealthcare.com/api/Home/postpdf/' + id
      const response = await fetch(url)
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
</script>

<style></style>