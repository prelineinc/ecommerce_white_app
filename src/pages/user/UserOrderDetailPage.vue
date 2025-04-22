<template>
  <div class="min-h-screen bg-gray-100 pt-2 pb-16">
    <div class="w-full 2xl:container mx-auto px-4">
      <!-- <div class="relative my-2">
        <ul class="mb-0 flex">
          <li>
            <a href="/" class="duration-500 ease-in-out hover:text-blue-500 hover:no-underline">Home</a>
          </li>
          <li class="text-slate-400 mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
              fill="currentColor">
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </li>
          <li>
            <a href="/" class="duration-500 ease-in-out hover:text-blue-500 hover:no-underline">Orders</a>
          </li>
          <li class="text-slate-400 mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
              fill="currentColor">
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </li>
          <li aria-current="page">
            <span class="text-blue-600">
              Order-123456
            </span>
          </li>
        </ul>
      </div> -->
      <div class="my-6 flex items-center justify-between">
        <h1 class="m-0 text-2xl font-bold">Order-{{ data?.ordersById?.id }}</h1>
        <div style="cursor: pointer" class="flex items-center justify-center  p-1 bg-blue-100 text-blue-700 rounded-md float-right">
          <h1 class="p-1 text-s font-bold">Invoice</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="size-6" @click="downloadInvoice(data?.ordersById?.id)">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-5">
        <div>
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <h6 class="mb-1 underline">#{{ data?.ordersById?.id }}</h6>
            <p class="text-slate-500">Order ID</p>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <h6 class="mb-1 font-bold text-gray-800">{{ formatDate(data?.ordersById?.createdOn) }}</h6>
            <p class="text-slate-500">Order Date</p>
          </div>
        </div>
        <div v-if="!data?.ordersById?.isRental">
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <h6 class="mb-1 font-bold text-gray-800">{{ formatDate(data?.ordersById?.expectedDelivery) }}</h6>
            <p class="text-slate-500">Expected Delivery Date</p>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <h6 class="mb-1 font-bold text-gray-800">&#8377;{{Number(data?.ordersById?.finalAmount ?? 0).toFixed(2)}}</h6>
            <p class="text-slate-500">Order Amount</p>
          </div>
        </div>
        <div>
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <span v-if="data?.ordersById?.isDelivered"
              class="mb-1 px-3 py-1 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500">Delivered</span>
            <span v-if="data?.ordersById?.isShipped"
              class="mb-1 px-3 py-1 text-xs inline-block font-medium rounded border bg-blue-100 border-blue-200 text-blue-500">Shipped</span>
            <span v-if="data?.ordersById?.isCancelled"
              class="mb-1 px-3 py-1 text-xs inline-block font-medium rounded border bg-red-100 border-red-200 text-red-500">Cancelled</span>
            <span v-else-if="data?.ordersById?.isReturned"
              class="mb-1 px-3 py-1 text-xs inline-block font-medium rounded border bg-orange-100 border-orange-200 text-orange-500">Returned</span>
            <span v-else-if="!data?.ordersById?.isShipped && !data?.ordersById?.isDelivered"
              class="mb-1 px-3 py-1 text-xs inline-block font-medium rounded border bg-red-100 border-red-200 text-red-500">Pending</span>
            <p class="text-slate-500">Order Status</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-x-5">
        <div class="sm:col-span-6 md:col-span-4 col-span-12">
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <div class="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-md float-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h6 class="mb-4 text-base text-slate-500">Delivery Details</h6>

            <h6 class="mb-1 font-bold text-gray-800">{{ orderAddress.receiverName }}</h6>
            <p class="mb-1 text-slate-500 ">{{ orderAddress.completeAddress }}, {{ orderAddress.locality }}</p>
            <p class="text-slate-500 ">{{ orderAddress.city }}, {{ orderAddress.state }} - {{ orderAddress.pincode }}
            </p>
            <p class="mb-1 text-slate-500 ">{{ orderAddress.receiverMobileNo }}</p>
          </div>
        </div>
        <div class="sm:col-span-6 md:col-span-4 col-span-12">
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <div class="flex items-center justify-center w-12 h-12 rounded-md float-right bg-green-100 text-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>
            <h6 class="mb-4 text-base text-slate-500">Payment Details</h6>

            <p class="mb-1 font-bold text-gray-800">Payment Method: <b>{{ paymentDetails?.Method }}</b></p>
            <h6 v-if="paymentDetails?.Method == 'card'" class="mb-1 text-slate-500">Card ID: {{ paymentDetails?.CardId
              }}</h6>
            <p v-if="paymentDetails?.Method == 'card'" class="mb-1 text-slate-500 ">Card Number: <b>xxxx xxxx xxxx {{
                paymentDetails?.CardNo }}</b></p>
            <p v-if="paymentDetails?.Method == 'wallet'" class="mb-1 text-slate-500 ">Wallet Name: <b>{{
                paymentDetails?.Wallet }}</b></p>
            <p v-else-if="orderPayment?.paymentByOrderId?.paymentOrderId == 'COD'" class="mb-1 text-slate-500 "><b>Cash
                on delivery</b></p>
          </div>
        </div>
        <div class="sm:col-span-6 md:col-span-4 col-span-12">
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-md float-right bg-orange-100 text-orange-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h6 class="mb-4 text-base text-slate-500">Customer Contact</h6>

            <a class="transition-all duration-100 ease-linear hover:text-blue-700">prelineinc@gmail.com</a><br>
            <a class="transition-all duration-100 ease-linear hover:text-blue-700">jagath@preline.in</a><br>
            <a class="transition-all duration-100 ease-linear hover:text-blue-700">+91-7539942415</a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5">
        <div class="col-span-1 md:col-span-6 lg:col-span-8">
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <div class="flex items-center mb-4">
              <h6 class="text-lg font-bold">Order Status</h6>
            </div>
            <div>
              <div :class="{ 'done': currentStep >= 1 }"
                class="relative pl-6 before:absolute before:border-l before:left-[3px] before:border-slate-300 [&.done]:before:border-blue-500 before:top-1.5 before:-bottom-1.5 after:absolute after:w-2 after:h-2 after:bg-white after:border after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-blue-500 [&.done]:after:border-blue-500">
                <div class="flex gap-4">
                  <div class="grow">
                    <h6 class="mb-2 text-gray-800 text-base font-medium">Order Placed</h6>
                    <p class="text-gray-400">Your order has been successfully submitted.</p>
                  </div>
                  <p class="text-sm text-gray-400 shrink-0">{{ formatDate(data?.ordersById?.createdOn) }}</p>
                </div>
              </div>

              <div :class="{ 'done': currentStep >= 2 }"
                class="relative pl-6 before:absolute before:border-l before:left-[3px] before:border-slate-300 [&.done]:before:border-blue-500 before:top-1.5 before:-bottom-1.5 after:absolute after:w-2 after:h-2 after:bg-white after:border after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-blue-500 [&.done]:after:border-blue-500">
                <div class="flex gap-4">
                  <div class="grow">
                    <h6 class="mb-2 text-gray-800 text-base font-medium">Order Processing</h6>
                    <p class="text-gray-400">Once the order is received, it goes through the
                      processing stage. During this time, the items are gathered, and the order is prepared for
                      shipment.</p>
                  </div>
                  <p class="text-sm text-gray-400 shrink-0">{{ formatDate(data?.ordersById?.createdOn) }}</p>
                </div>
              </div>

              <div :class="{ 'done': currentStep >= 3 }"
                class="relative pl-6 before:absolute before:border-l before:left-[3px] before:border-slate-300 [&.done]:before:border-blue-500 before:top-1.5 before:-bottom-1.5 after:absolute after:w-2 after:h-2 after:bg-white after:border after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-blue-500 [&.done]:after:border-blue-500">
                <div class="flex gap-4">
                  <div class="grow">
                    <h6 class="mb-2 text-gray-800 text-base font-medium">Shipped Order</h6>
                    <p class="text-gray-400">The order is shipped out to the customer's designated
                      delivery address.</p>
                  </div>
                  <p v-if="data?.ordersById?.isShipped || data?.ordersById?.isDelivered"
                    class="text-sm text-gray-400 shrink-0">{{ formatDate(data?.ordersById?.modifiedOn || null) }}</p>
                </div>
              </div>

              <!-- <div :class="{'done': currentStep >= 4}"
           class="relative pl-6 before:absolute before:border-l before:left-[3px] before:border-slate-300 [&.done]:before:border-blue-500 before:top-1.5 before:-bottom-1.5 after:absolute after:w-2 after:h-2 after:bg-white after:border after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-blue-500 [&.done]:after:border-blue-500">
        <div class="flex gap-4">
          <div class="grow">
            <h6 class="mb-2 text-gray-800 text-base font-medium">Out for Delivery</h6>
            <p class="text-gray-400">This status indicates that the order is currently out
                      for delivery by the shipping or courier company.</p>
          </div>
          <p class="text-sm text-gray-400 shrink-0">{{ formatDate(data?.ordersById?.modifiedOn || null) }}</p>
        </div>
      </div> -->

              <div :class="{ 'done': currentStep >= 4 }"
                class="relative pl-6 before:absolute before:border-l before:left-[3px] before:border-slate-300 [&.done]:before:border-blue-500 before:top-1.5 before:-bottom-1.5 after:absolute after:w-2 after:h-2 after:bg-white after:border after:border-slate-300 after:rounded-full after:left-0 after:top-1.5 pb-4 last:before:hidden [&.done]:after:bg-blue-500 [&.done]:after:border-blue-500">
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
        <div class="col-span-1 md:col-span-6 lg:col-span-4">
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <h2 class="mb-4 text-lg font-bold">Order Summary</h2>
            <div class="mt-6">
              <table class="w-full mb-3">
                <tbody v-if="!data?.ordersById?.isRental">

                  <tr v-for="y of JSON.parse(data?.ordersById?.itemId)" :key="y.id">
                    <td class="px-4 py-3 border-b border-dashed first:pl-0 last:pr-0 border-slate-200">
                      <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0">
                          <img :src="`${imagePath}${y?.id}.jpg`" class="h-10">
                        </div>
                        <div class="grow">
                          <h6 class="mb-1">
                            <a @click="data?.ordersById?.isDelivered ? RedirectToFeedBack(y?.id, data?.ordersById?.id) : RedirectToItemDetails(y?.id)"
                              class="transition-all duration-300 ease-linear hover:text-blue-500 cursor-pointer">
                              {{y.name }}
                            </a>
                          </h6>
                          <p v-if="y?.amount != null" class="text-slate-500">&#8377;{{ y.amount }} x {{ y.count }}
                            &VerticalLine; {{ y.brandsize }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td v-if="y?.amount != null"
                      class="px-4 py-2 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 text-right">
                      <div v-if="data?.ordersById?.isDelivered" class="grow">
                        <div class="mb-1">&#8377; {{ y.amount * y.count }}</div>
                        <div>
                          <a class="text-5 text-red-500 transition-all duration-300 ease-linear hover:text-red-400 cursor-pointer"
                            @click="RedirectToFeedBack(y?.id, data?.ordersById?.id)">
                            Rate us
                          </a>
                        </div>
                      </div>
                      <div v-else class="mb-1">&#8377; {{ y.amount * y.count }}</div>
                    </td>
                  </tr>

                  <tr>
                    <td class="py-1">Sub Total</td>
                    <td class="font-semibold text-right cart-subtotal">&#8377;{{ data?.ordersById?.totalAmount }}</td>
                  </tr>
                  <!-- <tr>
                    <td class="py-1">Discount</td>
                    <td class="font-semibold text-right cart-discount">-&#8377;26.00</td>
                  </tr> -->
                  <tr>
                    <td class="py-1">Shipping Price</td>
                    <td class="font-semibold text-right cart-shipping">&#8377;0</td>
                  </tr>
                  <tr>
                    <td class="py-1">Estimated Tax (2%) </td>
                    <td class="font-semibold text-right cart-tax">&#8377; {{ taxAmount }}</td>
                  </tr>
                  <tr>
                    <td class="pt-4 font-bold">Total Amount </td>
                    <td class="pt-4 font-semibold text-right cart-total text-lg">
                      &#8377;{{ Number(data?.ordersById?.finalAmount ?? 0).toFixed(2) }}</td>
                  </tr>
                </tbody>

                <tbody v-else>
                  <tr v-for="y of JSON.parse(data?.ordersById?.itemId)" :key="y.id">
                    <td class="px-4 py-3 border-b border-dashed first:pl-0 last:pr-0 border-slate-200">
                      <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0">
                          <img :src="`${imagePath}${y?.id}.jpg`" class="h-10">
                        </div>
                        <div class="grow">
                          <h6 class="mb-1"><a style="cursor:pointer" @click="RedirectToItemPage(y.id)"
                              class="transition-all duration-300 ease-linear hover:text-blue-500 ">{{y.name}}</a>
                          </h6>
                          <p v-if="y?.amount != null" class="text-slate-500">&#8377;{{ y.amount }} x {{
                            data?.ordersById?.rentDays }}
                            &VerticalLine; {{ y.brandsize }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td v-if="y?.amount != null"
                      class="px-2 py-2 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 text-right">
                      <div>&#8377; {{ y.amount * data?.ordersById?.rentDays}}</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">Sub Total</td>
                    <td class="font-semibold text-right cart-subtotal">&#8377; {{data?.ordersById?.totalAmount}}</td>
                  </tr>
                  <tr>
                    <td class="py-1">Advance</td>
                    <td class="font-semibold text-right cart-shipping">&#8377; {{ data?.ordersById?.advance}}</td>
                  </tr>
                  <tr>
                    <td class="py-1">Estimated Tax (2%) </td>
                    <td class="font-semibold text-right cart-tax">&#8377; {{ taxAmount }}</td>
                  </tr>
                  <tr>
                    <td class="py-1">Others </td>
                    <td class="font-semibold text-right cart-tax">&#8377; {{ data?.ordersById?.deliveryCharge}}</td>
                  </tr>
                  <tr>
                    <td class="pt-4 font-bold">Total Amount </td>
                    <td class="pt-4 font-semibold text-right cart-total text-lg">
                      &#8377;{{Number(data?.ordersById?.finalAmount ?? 0).toFixed(2)}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-span-1 md:col-span-6 lg:col-span-4"
            v-if="!data.ordersById?.isShipped && !data.ordersById?.isDelivered && showCancel < 1">
            <div class="bg-white rounded-lg p-5 mb-3 shadow">
              <button @click="cancelOrder()"
                class="w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
                Cancel Order
              </button>
            </div>
          </div>
          <div class="col-span-1 md:col-span-6 lg:col-span-4"
            v-if="data.ordersById?.isDelivered && (new Date().getTime() - new Date(data.ordersById?.modifiedOn).getTime()) /(1000 * 60 * 60 * 24) <= 2 && !data.ordersById?.isRental">
            <div class="bg-white rounded-lg p-5 mb-3 shadow">
              <button @click="openModal"
                class="w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
                Instant Return
              </button>
            </div>
          </div>
          <div
            v-if="data.ordersById?.isRental && (new Date(data.ordersById?.toDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) > 0"
            class="col-span-1 md:col-span-6 lg:col-span-4">
            <div class="bg-white rounded-lg p-5 mb-3 shadow">
              <button @click="RedirectToExtention"
                class="w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
                Extention
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-5 rounded-lg shadow-lg w-1/3">
        <h2 class="text-xl font-bold mb-4">Instant Return</h2>
        <!-- <p>Are you sure you want to initiate an instant return?</p> -->
        <div class="mt-6">
          <table class="w-full mb-3">
            <tbody>

              <tr v-for="y of JSON.parse(data?.ordersById?.itemId)" :key="y.id">
                <td class="px-4 py-3 border-b border-dashed first:pl-0 last:pr-0 border-slate-200">
                  <div class="flex items-center gap-3">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0">
                      <img :src="`${imagePath}${y?.id}.jpg`" class="h-10">
                    </div>
                    <div class="grow">
                      <h6 class="mb-1"><a @click="RedirectToItemDetails(y?.id)"
                          class="transition-all duration-300 ease-linear hover:text-blue-500">{{ y.name }}</a>
                      </h6>
                      <p v-if="y?.amount != null" class="text-slate-500">&#8377;{{ y.amount }} x {{ y.count }}
                        &VerticalLine; {{ y.brandsize }}
                      </p>
                    </div>
                  </div>
                </td>
                <td v-if="y?.amount != null"
                  class="px-4 py-2 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 text-right">
                  <div>&#8377; {{ y.amount * y.count }}</div>
                </td>
                <td class="px-4 py-2 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 text-right">
                  <input type="checkbox" :value="y.id" v-model="selectedItemId" @change="addItem(y)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Reason</label>
          <div class="mt-2.5">
            <textarea v-model="message" name="message" id="message" rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <button @click="closeModal" class="px-4 py-2 bg-red-500 text-white rounded-md mr-2">Cancel</button>
          <button @click="orderReturns" class="px-4 py-2 bg-green-500 text-white rounded-md">Confirm</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { GetOrderById } from '../../api/user/order';
import { formatDate } from '../../utility/dateFormat';
import { imagePath } from '../../constant/commonPath'
import { computed, defineEmits } from 'vue';
import { GetAddressById } from '../../api/user/address';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { watch } from 'vue';
import { ref } from 'vue';
import { useAuthStore } from '../../stores/authstore';
import { watchEffect } from 'vue';
const authstore = useAuthStore();
const showModal = ref(false);
const message = ref('')
const selectedItemId = ref<string | null>(null)
const selectedItem = ref<any | []>([])
const currentDate = ref<Date>(new Date());
const showCancel = ref(0)
const isInstantReturn = ref(0)

const route = useRoute();
const paymentDetails = ref(null)
const { result: data, refetch: refetchData } = GetOrderById(route.params.id);

watchEffect(() => {
  const createdOn = new Date(data?.value?.ordersById?.createdOn || '');
  const modifyOn = new Date(data?.value?.ordersById?.createdOn || '');
  const now = currentDate.value;

  // iscanceltime different
  const diffInTime = now.getTime() - createdOn.getTime();
  showCancel.value = diffInTime / (1000 * 60 * 60);

  // isreturnday different
  if(data?.value?.ordersById?.isDelivered) {
    isInstantReturn.value = now.getDate() - modifyOn.getDate();
  }
})

const openModal = () => {
  showModal.value = true 
}

const closeModal = () => {
  showModal.value = false
}

const userData = computed(() => {
  return authstore.$state.recentAuth;
});

const orderData = computed(() => {
  return data.value?.ordersById || {};
});

const taxAmount = computed(() => {
  return (orderData.value.totalAmount * 2) / 100 || 0;
});

const addressId = computed(() => {
  return orderData?.value.addressId;
});

const currentStep = computed(() => {
  let step = 0;
  if (data.value?.ordersById.isShipped) step = 2
  else if (data.value?.ordersById.isDelivered) step = 4
  else step = 1
  return step
});

const { result: address, refetch: refetchAddress } = useQuery(
  computed(() => {
    return gql`
  query  GetAddressById{
    addressById(id: "${addressId.value}") {
        id,
        receiverName,
        receiverMobileNo,
        completeAddress,
        locality,
        city,
        state,
        pincode,
        isHome,
        isOther,
        isActive,
    }
  }
`
  })
)

const orderAddress = computed(() => {
  return address?.value?.addressById || {};
});

const { result: orderPayment, refetch: refetchorder } = useQuery(
  computed(() => {
    return gql`
  query PaymentByOrderId {
    paymentByOrderId(orderid: "${route.params.id}") {
    id
    paymentOrderId
    transactionId
    }
  }
`
  })
)

watch(orderPayment, (newValue) => {
  if (!newValue || !newValue.paymentByOrderId) {
    console.log('No valid payment orderId found.');
    return;
  }

  const payment = newValue.paymentByOrderId;
  console.log('Payment orderId:', payment.paymentOrderId);

  const { result: paymentdetails, refetch: refetchPaymentDetails } = useQuery(
    gql`
      query RazorPayment($paymentId: String!) {
        razorPayment(paymentid: $paymentId)
      }
    `,
    { paymentId: payment.paymentOrderId }
  );

  watch(paymentdetails, (newPaymentDetails) => {
    if (newPaymentDetails && newPaymentDetails.razorPayment) {
      try {
        const parsedPaymentDetails = JSON.parse(newPaymentDetails.razorPayment);
        paymentDetails.value = parsedPaymentDetails;
        console.log('Parsed paymentDetails:', paymentDetails.value);
      } catch (error) {
        console.error('Error parsing razorPayment:', error);
      }
    } else {
      console.log('No valid payment details found.');
    }
  });
});

// const UPDATE_CANCEL_ORDER = gql`
//   mutation (
//     $id: UUID!
//     $finalAmount: String!
//     $isCancelled: Boolean!
//   ) {
//     updateOrderCancelled(
//       order: {
//         id: $id
//         finalAmount: $finalAmount
//         isCancelled: $isCancelled
//       }
//     )
//   }
// `;

// const emit = defineEmits(["close", "updated", "error"]);

// const { mutate: updateCancelOrder, onError } = useMutation(UPDATE_CANCEL_ORDER, {
//   variables: {
//       id: "4706af1b-dcfe-4f3b-ad22-ac3707dcc3cb",
//       finalAmount: "53.04",
//       isCancelled: true,
//   },
//   optimisticResponse: {
//     updateOrderCancelled: true, 
//   },
// });

// onError(() => {
//   emit("error");
// });

// async function cancelOrder() {
//   const dataList = {
//     id: orderData.value.id,
//     finalAmount: orderData.value.finalAmount,
//     isCancelled: true,
//   };

//   console.log('Data being sent:', dataList);
//   emit("close");
//   try {
//     await updateCancelOrder();
//     emit("updated");
//   } catch (error) {
//     emit("error");
//   }
// }

const UPDATE_ORDER = gql`
  mutation UpdateOrderCancelled($order: OrderInput!) {
    updateOrderCancelled(order: $order)
  }
  `

const updateOrderCancelled = useMutation(UPDATE_ORDER, {
  optimisticResponse: {
    updateOrderCancelled: true
  }
})

async function cancelOrder() {
  try {
    const response = await updateOrderCancelled.mutate({
      order: {
        id: orderData.value.id,
        finalAmount: orderData.value.finalAmount,
        isCancelled: true,
      },
    });

    if (response?.data?.updateOrderCancelled) {
      alert("Order cancelled successfully")
      console.log("Order cancelled successfully:", response);
      router.push('/account/orders');
    } else {
      alert("Order cancel failed.")
      console.log("Order cancel failed.");
    }
  } catch (error) {
    console.error("Error Order cancel:", error);
  }
}

function addItem  (item: any) {
    const checkedItem = {
      id: item.id,
      name: item.name,
      size: item.size,
      count: item.count,
    };
    console.log(checkedItem);
    const existingItemIndex = selectedItem.value.find(
    (i: any) => i.id === checkedItem.id
  );
  console.log(existingItemIndex)

  if (existingItemIndex == undefined) {
    selectedItem.value.push(checkedItem);
    console.log("add", selectedItem.value);
  } else {
    selectedItem.value.splice(existingItemIndex, 1);
    console.log("remove", selectedItem.value);
  }
    
  };

const CREATE_ORDERRETURN = gql`
  mutation CreateOrderReturn($orderreturn: OrderReturnInput!) {
    createOrderReturn(orderreturn: $orderreturn)
  }
  `

const createOrderReturn = useMutation(CREATE_ORDERRETURN, {
  optimisticResponse: {
    createOrderReturn: true
  }
})

async function orderReturns() {

  const data = {
        id: "00000000-0000-0000-0000-000000000000",
        orderId: orderData.value.id,
        itemId: JSON.stringify(selectedItem.value),
        userId: authstore.$state.recentAuth.id,
        comment: message.value || null,
        isReceived: false,
        expectedDate: null,
        isDelivered: false,
        deliveredDate: null,
        isActive: true,
        createdOn: null,
      }
      console.log(data);  
      showModal.value = false
  try {
    const response = await createOrderReturn.mutate({
      orderreturn: {
        id: "00000000-0000-0000-0000-000000000000",
        orderId: orderData.value.id,
        itemId: JSON.stringify(selectedItem.value),
        userId: authstore.$state.recentAuth.id,
        comment: message.value || null,
        isReceived: false,
        expectedDate: null,
        isDelivered: false,
        deliveredDate: null,
        isActive: true,
        createdOn: null,
      }
    });

    if (response?.data?.createOrderReturn) {
      alert("Order updated successfully")
      console.log("Order updated successfully:", response);
      router.push('/account/orders');
    } else {
      alert("Order update failed.")
      console.log("Order update failed.");
    }
  } catch (error) {
    console.error("Error Order update:", error);
  }
  
}

const router = useRouter()

const RedirectToItemDetails = (itemId: any) => {
  router.push(`/item/${itemId}`);
}

const RedirectToFeedBack = (itemId: any, orderId: any) => {
  router.push(`/feedback?itemid=${itemId}&orderid=${orderId}`)
}

const RedirectToExtention = () => {
  //router.push('/rentalextention')
  router.push(`/rentalextention/${orderData.value.id}`);
}

const downloadInvoice = async (id: any) => {
    try {
      //const url = "https://localhost:7069/api/Home/postpdf/" + id;
      const url = 'https://white.prelinehealthcare.com/api/Home/postpdf/' + id
      const response = await fetch(url)
      console.log(response.headers)
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

<style scoped>
input[type="date"] {
    margin: 5px 0;
    padding: 8px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 140px;
}
.date-range {
    display: flex;
    gap: 10px;
}
</style>