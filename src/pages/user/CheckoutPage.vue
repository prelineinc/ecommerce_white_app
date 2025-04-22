<template>
  <div class="min-h-screen bg-gray-100 pt-2 pb-16">
    <div class="container mx-auto px-4">
      <div class="relative my-2">
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
          <li aria-current="page">
            <span class="text-blue-600"> Checkout </span>
          </li>
        </ul>
      </div>
      <div class="my-6">
        <h1 class="m-0 text-2xl font-bold">Checkout</h1>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
        <div class="xl:col-span-8">
          <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <div class="flex item-center justify-between mb-3">
              <h2 class="text-lg font-bold ">Saved Address</h2>
              <button
                class="rounded-md bg-yellow-300 px-2 p-1 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-ou"
                @click="openModal(null)">
                Add Address
              </button>
            </div>
            <p v-if="addressData?.addressByUserId == undefined"
              class="text-gray-500 min-h-5 flex items-center justify-center">
              No address found!
            </p>

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
              <div class="xl:col-span-6 p-3 mb-2 flex items-start justify-around border rounded-lg"
                :class="{ 'bg-yellow-100 border-yellow-500': selectedAddressId === x.id }"
                v-for="x in addressData?.addressByUserId" :key="x.id">
                <input type="radio" :value="x.id" :id="'address' + x.id" v-model="selectedAddressId"
                  v-on:change="locationcheck(x)" class="mr-4 mt-1 text-yellow-900 focus:outline-yellow-900" />
                <label :for="'address' + x.id" class="flex flex-col flex-1">
                  <!-- <span class="inline-block mb-2 font-medium">{{ x.receiverName }}</span> -->
                  <div>
                    <span class="inline-block mb-2 font-medium">{{ x.receiverName }}</span>
                    <button v-if="x.isHome" class="ml-2 rounded-xl p-1 px-2 text-xs text-gray-600 bg-gray-200">
                      Home
                    </button>
                    <button v-else-if="x.isOther" class="ml-4 rounded-xl p-1 px-2 text-xs text-gray-600 bg-gray-200">
                      Office
                    </button>
                  </div>
                  <span class="text-sm">
                    <span class="text-slate-800">{{ x.completeAddress }}, {{ x.locality }},</span>
                  </span>
                  <span class="text-sm">
                    <span class="text-slate-800">{{ x.city }}, {{ x.state }} - {{ x.pincode }}</span>
                  </span>
                  <span class="text-sm">
                    <span class="text-slate-800">{{ x.receiverMobileNo }}</span>
                  </span>
                </label>
                <button
                  class="rounded-md p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-200 transition duration-200 ease-out"
                  @click="openModal(x)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke-width="1.5"
                    stroke="currentColor" class="size-3">
                    <path
                      d="M16.318 6.11l-3.536-3.535 1.415-1.414c.63-.63 2.073-.755 2.828 0l.707.707c.755.755.631 2.198 0 2.829L16.318 6.11zm-1.414 1.415l-9.9 9.9-4.596 1.06 1.06-4.596 9.9-9.9 3.536 3.536z">
                    </path>
                  </svg>
                </button>
                <button
                  class="rounded-md p-2 text-gray-400 hover:text-red-600 hover:bg-red-200 transition duration-200 ease-out"
                  @click="RemoveAddress(x.id)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path d="M3 6h18v2H3V6zm3 3h12v12H6V9zm3 2v8h2v-8H9zm4 0v8h2v-8h-2zm-2-7h4v2h-4V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <h2 class="mb-4 text-lg font-bold">Contact Details</h2>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
              <div class="xl:col-span-6">
                <label for="phoneNumberInput" class="inline-block mb-2 font-medium">Phone Number</label>
                <input type="text" id="phoneNumberInput" v-model="phone"
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Enter phone number" />
              </div>
              <div class="xl:col-span-6">
                <label for="emailAddressInput" class="inline-block mb-2 font-medium">Email Address</label>
                <input type="email" id="emailAddressInput" v-model="email"
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Enter email" />
              </div>
            </div>
          </div> -->
          <!-- <div class="bg-white rounded-lg p-5 mb-3 shadow">
            <h2 class="mb-4 text-lg font-bold">Delivery Address</h2>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
              <div class="xl:col-span-6">
                <label for="firstNameInput" class="inline-block mb-2 font-medium">First Name</label>
                <input type="text" id="firstNameInput" v-model="firstName"
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Enter First Name" />
              </div>
              <div class="xl:col-span-6">
                <label for="lastNameInput" class="inline-block mb-2 font-medium">Last Name</label>
                <input type="text" id="lastNameInput" v-model="lastName"
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Last Name" />
              </div>
              <div class="xl:col-span-12">
                <label for="streetAddressInput" class="inline-block mb-2 font-medium">Door No., Apartment Name, Street
                  Name</label>
                <input type="text" id="streetAddressInput" v-model="fulladdress"
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Street address" />
              </div>
              <div class="xl:col-span-12">
                <label for="townCityInput" class="inline-block mb-2 font-medium">Town/City</label>
                <input type="text" id="townCityInput" v-model="city"
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Town/City" />
              </div>
              <div class="xl:col-span-4">
                <label for="localityInput" class="inline-block mb-2 font-medium">Locality</label>
                <input type="text" id="localityInput" v-model="locality"
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Locality" />
              </div>
              <div class="xl:col-span-4">
                <label for="stateInput" class="inline-block mb-2 font-medium">State</label>
                <input type="text" id="stateInput" v-model="state"
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="State" />
              </div>
              <div class="xl:col-span-4">
                <label for="zipcodeInput" class="inline-block mb-2 font-medium">ZipCode</label>
                <input type="text" id="zipcodeInput" v-model="zipcode" required
                  class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="ZipCode" />
              </div>
            </div>
            <button @click="addAddress()"
              class="mt-6 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
              Add address
            </button>
          </div> -->
        </div>
        <div class="xl:col-span-4">
          <div class="bg-white rounded-lg p-5 mb-3 shadow sticky top-0">
            <h2 class="mb-4 text-lg font-bold">Order Summary</h2>
            <div class="mt-6">
              <div v-if="!store.recentCart[0]?.isRental" class="mb-2 flex justify-between">
                <a @click="Promocode()" class="text-blue-700">Apply Promo Code</a>
              </div>
              <table v-if="!store.recentCart[0]?.isRental" class="w-full mb-3">
                <tbody>
                  <tr v-for="x of store.recentCart.filter(opt => opt.selectQuantity !== null && opt.selectQuantity > 0)"
                    :key="x.id">
                    <td class="px-4 py-3 border-b border-dashed first:pl-0 last:pr-0 border-slate-200">
                      <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0">
                          <img :src="`${imagePath}${x.imagePath}`" :alt="`${imagePath}${x.imagePath}`" class="h-10" />
                        </div>
                        <div class="grow">
                          <h6 class="mb-1">
                            <a style="cursor: pointer" @click="RedirectToItemPage(x.id)"
                              class="transition-all duration-300 ease-linear hover:text-custom-500">{{ x.name }}</a>
                          </h6>
                          <p class="text-slate-500">
                            &#8377;{{ x.amount }} x {{ x.selectQuantity }} &VerticalLine; White
                            &VerticalLine;
                            {{
                            x.size.find((option) => option.sizedata?.id === x.selectedSize)
                            ?.sizedata?.size
                            }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-2 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 text-right">
                      <div>&#8377;{{ x.amount * x.selectQuantity }}</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">Total</td>
                    <td class="font-semibold text-right cart-subtotal">&#8377;{{ totalPrice }}</td>
                  </tr>
                  <tr>
                    <td class="py-1">Discount</td>
                    <td class="font-semibold text-right cart-discount text-green-600">
                      - &#8377;{{ discountAmount }}
                    </td>
                  </tr>
                  <tr v-if="discountedPrice > 0">
                    <td class="py-1">Coupon Discount</td>
                    <td class="font-semibold text-right cart-discount text-green-600">
                      - &#8377;{{ ((totalAmount + taxAmount) * discountedPrice).toFixed(1) }}
                    </td>
                  </tr>
                  <!-- <tr>
                    <td class="py-1">Shipping Price</td>
                    <td class="font-semibold text-right cart-shipping">&#8377;40</td>
                  </tr> -->
                  <tr>
                    <td class="py-1">Platform Fee (2%)</td>
                    <td class="font-semibold text-right cart-tax">&#8377;{{ taxAmount }}</td>
                  </tr>
                  <tr v-if="picked === 'COD' && isAvailable">
                    <td class="py-1">Cash on Delivery Charges</td>
                    <td class="font-semibold text-right cart-tax">&#8377;50</td>
                  </tr>
                  <tr>
                    <td class="pt-4 font-bold">Total Amount</td>
                    <td class="pt-4 font-semibold text-right cart-total text-lg">
                      &#8377;{{ finalAmount.toFixed(1) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table v-else class="w-full mb-3">
                <tbody>
                  <tr v-for="x of store.recentCart.filter(opt => opt.selectQuantity !== null && opt.selectQuantity > 0)"
                    :key="x.id">
                    <td class="px-4 py-3 border-b border-dashed first:pl-0 last:pr-0 border-slate-200">
                      <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0">
                          <img :src="`${imagePath}${x.imagePath}`" :alt="`${imagePath}${x.imagePath}`" class="h-10" />
                        </div>
                        <div class="grow">
                          <h6 class="mb-1">
                            <a style="cursor: pointer" @click="RedirectToItemPage(x.id)"
                              class="transition-all duration-300 ease-linear hover:text-custom-500">{{ x.name }}</a>
                          </h6>
                          <p class="text-slate-500">
                            &#8377;{{ x.amount }} x {{ x.days }}
                            &VerticalLine;
                            {{
                            x.size.find((option) => option.sizedata?.id === x.selectedSize)
                            ?.sizedata?.size
                            }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-2 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 text-right">
                      <div>&#8377;{{ x.amount * x.days }}</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">Total</td>
                    <td class="font-semibold text-right cart-subtotal">&#8377;{{ totalRentalPrice }}</td>
                  </tr>
                  <tr>
                    <td class="py-1">Advance</td>
                    <td class="font-semibold text-right cart-discount">
                      &#8377;{{ totalRentalAdvance }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1">Platform Fee (2%)</td>
                    <td class="font-semibold text-right cart-tax">&#8377;{{ platformfee }}</td>
                  </tr>
                  <tr>
                    <td class="py-1">Shipping Fee :</td>
                    <td class="font-semibold text-right cart-tax">&#8377;{{ rentalDeliveryFee }}</td>
                  </tr>
                  <tr>
                    <td class="pt-4 font-bold">Total Amount</td>
                    <td class="pt-4 font-semibold text-right cart-total text-lg">
                      &#8377;{{ finalprice }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="!store.recentCart[0]?.isRental && isAvailable" class="grid sm:grid-cols-2 gap-2">
                <div class="block">
                  <input type="radio" name="payment" value="COD" v-model="picked"
                    class="peer absolute w-px h-px opacity-0" id="COD" checked />
                  <label for="COD"
                    class="group flex p-3 block w-full bg-white border border-gray-400 rounded-md text-sm peer-checked:bg-yellow-100 peer-checked:border-yellow-500">
                    <span
                      class="border border-gray-400 rounded-full mr-2 w-4 h-4 mt-0.5 peer-checked:group-[]:border-yellow-900 peer-checked:group-[]:bg-yellow-900"></span>
                    <h5 class="text-sm text-gray-800 peer-checked:group-[]:font-bold">COD</h5>
                  </label>
                </div>
                <div class="block">
                  <input type="radio" value="razorpay" v-model="picked" name="payment"
                    class="peer absolute w-px h-px opacity-0" id="razorpay" />
                  <label for="razorpay"
                    class="group flex p-3 block w-full bg-white border border-gray-400 rounded-md text-sm peer-checked:bg-yellow-100 peer-checked:border-yellow-500">
                    <span
                      class="border border-gray-400 rounded-full mr-2 w-4 h-4 mt-0.5 peer-checked:group-[]:border-yellow-900 peer-checked:group-[]:bg-yellow-900"></span>
                    <h5 class="text-sm text-gray-800 peer-checked:group-[]:font-bold">Razorpay Payment</h5>
                  </label>
                </div>
              </div>
              <div v-else class="grid sm:grid-cols-2 gap-2">
                <div class="block">
                  <input type="radio" value="razorpay" v-model="picked" name="payment"
                    class="peer absolute w-px h-px opacity-0" id="razorpay" checked />
                  <label for="razorpay"
                    class="group flex p-3 block w-full bg-white border border-gray-400 rounded-md text-sm peer-checked:bg-yellow-100 peer-checked:border-yellow-500">
                    <span
                      class="border border-gray-400 rounded-full mr-2 w-4 h-4 mt-0.5 peer-checked:group-[]:border-yellow-900 peer-checked:group-[]:bg-yellow-900"></span>
                    <h5 class="text-sm text-gray-800 peer-checked:group-[]:font-bold">Razorpay Payment</h5>
                  </label>
                </div>
              </div>
              <button v-if="picked == 'COD' && isAvailable" @click="CODPayment()"
                class="mt-6 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
                Continue to COD
              </button>
              <button v-else @click="Payment()"
                class="mt-6 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
                Continue to Razorpay Payment
              </button>
              <div v-if="!store.recentCart[0]?.isRental && !isAvailable && selectedAddressId !== null"
                class="ml-4 mt-6 text-xs text-gray-600">
                <p>* COD option not applicable for this order location.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="modalConfirmOrder"
      class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
      <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
        <div class="flex justify-between items-center p-4">
          <div class="font-bold text-base">Order Placed Successfully!</div>
          <button onclick="closeModal('modalConfirmOrder')" type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="p-4">
          <div class="flex">
            <ExclamationCircleIcon class="w-8 h-8 text-orange-600" aria-hidden="true" />
            <div class="flex-1 pt-1 pl-4 text-gray-800">
              Order Informations will be avaliable in your Account.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="modalPromoCode"
      class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 py-4">
      <div class="relative w-full max-w-md md:max-w-lg mx-auto shadow-xl rounded-md bg-white p-6 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center border-b pb-3">
          <h2 class="font-bold text-lg text-gray-800">Promo Code</h2>
          <button onclick="closeModal('modalPromoCode')" class="text-gray-500 hover:text-gray-800 p-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div class="p-4 bg-gray-50 rounded-lg mt-4">
          <h3 class="text-md font-semibold text-gray-800 mb-4">Apply Coupon Code</h3>
          <form v-on:submit.prevent="applyCoupon()">
            <div class="flex flex-col md:flex-row items-center gap-2">
              <input type="text" id="couponCode" name="couponCode" v-model="couponCode"
                class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                placeholder="Enter your coupon code" onchange="couponCode = '', isApplied = false">
              <button
                class="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
                Apply
              </button>
            </div>
          </form>

          <div v-if="isApplied" class="mt-4 text-xs text-green-500">
            ✅ Coupon applied successfully!
          </div>
          <div v-else-if="applyCode && !isApplied" class="mt-4 text-xs text-red-500">
            Sorry, this coupon is not valid for this user.
          </div>
        </div>

        <!-- promo code - 2 -->
        <!-- <div class="mt-4 p-6 mx-8 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg text-center">
          <p class="text-lg mb-1">Flat<span class="text-yellow-300 font-bold"> 50% OFF</span> order above &#8377;1000!
          </p>
          <p class="text-base mb-1 text-xs">Use coupon code:</p>
          <div class="flex justify-center text-sm items-center space-x-2 mb-2">
            <span id="cpnCode" class="border-dashed border text-white px-4 py-2 rounded-l">FLATON1000</span>
            <span id="cpnBtn" class="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
              @click="copyToClipboard('Flat50')">Copy Code</span>
          </div>
          <div class="text-[10px] mt-1 opacity-90">
            <p>Valid until <span class="font-semibold">Dec 31, 2023</span></p>
            <p>Terms and conditions apply.</p>
          </div>
        </div> -->

        <div class="mt-4 mx-5 rounded-2xl shadow-lg border border-yellow-300 bg-gradient-to-b from-yellow-50 to-white"
          v-for="item in couponResult?.couponsByUser" :key="item.id">
          <div className="px-4 pt-4">
            <p className="text-lg font-bold text-gray-800">{{item.name}}</p>
            <p className="text-sm text-yellow-600 font-medium mt-1">
              {{item.description}}
            </p>
          </div>
          <div className="flex justify-center items-center space-x-2 my-2">
            <span
              className="border border-dashed border-yellow-400 px-5 py-2 rounded-xl bg-gray-100 text-gray-800 font-bold tracking-widest text-sm">
              {{item.code}}
            </span>
          </div>
          <p className="p-2 rounded-b-2xl bg-yellow-300 text-xs font-semibold text-gray-800 text-center cursor-pointer hover:bg-yellow-400 transition-all"
            @click="copyToClipboard(item)">
            Apply Now 🚀
          </p>
        </div>
      </div>
    </div>

    <div id="modalRemove" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
      role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" tabindex="-1">
      <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
        <div class="flex justify-between items-center p-4">
          <div class="font-bold text-lg text-gray-900">Coupon Not Applicable</div>
          <button onclick="closeModal('modalRemove')" type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="p-4 pt-0 text-gray-800 text-center">
          {{ modelmessage }}
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div class="flex item-center justify-between">
          <h2 v-if="!addressId" class="mb-3 text-lg font-bold">Add Address</h2>
          <h2 v-else class="mb-3 text-lg font-bold">Update Address</h2>
          <button class="rounded-md text-gray-400 hover:text-gray-800 transition duration-200 ease-out"
            @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke-width="1.2"
              stroke="currentColor" class="size-6">
              <path
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z">
              </path>
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
          <div class="xl:col-span-6">
            <label for="firstNameInput" class="inline-block mb-2 font-medium">First Name</label>
            <input type="text" id="receivername" v-model="receivername"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Enter First Name" />
          </div>
          <div class="xl:col-span-6">
            <label for="phoneNumberInput" class="inline-block mb-2 font-medium">Phone Number</label>
            <input type="text" v-model="receiverphone" id="receiverphone"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Enter First PhoneNo" />
          </div>
          <div class="xl:col-span-12">
            <label for="streetAddressInput" class="inline-block mb-2 font-medium">Door No., Apartment Name, Street
              Name</label>
            <input type="text" v-model="fulladdress" id="fulladdress"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Street address" />
          </div>

          <div class="xl:col-span-12">
            <label for="localityInput" class="inline-block mb-2 font-medium">Locality</label>
            <input type="text" v-model="locality" id="locality"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Locality" />
          </div>
          <div class="xl:col-span-12">
            <label for="townCityInput" class="inline-block mb-2 font-medium">Town/City</label>
            <input type="text" v-model="city" id="city"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Town/City" />
          </div>
          <div class="xl:col-span-4">
            <label for="stateInput" class="inline-block mb-2 font-medium">State</label>
            <input type="text" v-model="state" id="state"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="State" />
          </div>
          <div class="xl:col-span-4">
            <label for="zipcodeInput" class="inline-block mb-2 font-medium">PinCode</label>
            <input type="text" v-model="zipcode" required id="pinCode"
              class="form-input block w-full rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="PinCode" />
          </div>
          <div class="xl:col-span-12">
            <label for="zipcodeInput" class="inline-block mb-2 font-medium">Address Type</label>
            <div class="flex gap-5">
              <div class="flex items-center">
                <input type="radio" name="address" value="home" v-model="selectedType" class="peer absolute opacity-0"
                  id="home" checked />
                <label for="home"
                  class="group flex px-3 py-2 bg-white border border-gray-400 rounded-md text-sm peer-checked:bg-yellow-100 peer-checked:border-yellow-500">
                  <span
                    class="border border-gray-400 rounded-full mr-2 w-4 h-4 mt-0.5 peer-checked:group-[]:border-yellow-900 peer-checked:group-[]:bg-yellow-900"></span>
                  <h5 class="text-sm text-gray-800 peer-checked:group-[]:font-bold">Home</h5>
                </label>
              </div>
              <div class="flex">
                <input type="radio" value="office" v-model="selectedType" name="address"
                  class="peer absolute w-px h-px opacity-0" id="office" />
                <label for="office"
                  class="group flex p-3 bg-white border border-gray-400 rounded-md text-sm peer-checked:bg-yellow-100 peer-checked:border-yellow-500">
                  <span
                    class="border border-gray-400 rounded-full mr-2 w-4 h-4 mt-0.5 peer-checked:group-[]:border-yellow-900 peer-checked:group-[]:bg-yellow-900"></span>
                  <h5 class="text-sm text-gray-800 peer-checked:group-[]:font-bold">Office</h5>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-4">
          <button v-if="!addressId" @click="addAddress()" :disabled="!isFormValid" class="my-4 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out
            disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed">
            Add Address
          </button>
          <button v-else @click="UpdateAddress()" :disabled="!isFormValid"
            class="my-4 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
            Save Address
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../../stores/user/cartstore'
import { imagePath } from '../../constant/commonPath'
import type { CartStoreType } from '../../types/user/cartStore'
import { computed, onMounted, ref, watch } from 'vue'
import { useCreateOrder } from '../../api/user/payment'
import { useQuery, useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useAuthStore } from '../../stores/authstore'
import { GetAddressByUser, CreateAddress } from '../../api/user/address'
import { useRouter } from 'vue-router'
import { GetValidUserCoupon } from '../../api/user/coupon'

//545cdffa-1bed-4df9-be09-8324327c29da

//alert();
const store = useCartStore()
declare var Razorpay: any
const authstore = useAuthStore()
const router = useRouter()
console.log(authstore.$state.recentAuth.id)
const selectedAddressId = ref(null)
console.log(selectedAddressId.value)
const phone = ref(null)
const email = ref(null)
const firstName = ref(null)
const lastName = ref(null)
const receivername = ref<string>('')
const receiverphone = ref<string>('')
  const fulladdress = ref<string>('')
const locality = ref<string>('')
const city = ref<string>('')
const state = ref<string>('')
const zipcode = ref<string>('')
const checkPin = ref('')
const isAvailable = ref(false)
const picked = ref(isAvailable.value && isAvailable ? 'COD' : 'razorpay');
const rentalDeliveryFee = ref(50)
const discountedPrice = ref(0);
const couponId = ref(null);
const modelmessage = ref('')
const couponCode = ref('')
const applyCode = ref('')
const isApplied = ref(false)
const addressId = ref<any>();
const selectedType = ref('home');
const showModal = ref(false);
const totalAmount = computed(() => {
  let total = 0
  store.recentCart.map((x) => {
    total = total + x.amount * x.selectQuantity
  })
  return total
})
console.log(totalAmount.value)

const discountAmount = computed(() => {
  let total = 0
  store.recentCart.map((x) => {
    total = total + x.mrp * x.selectQuantity
  })
  let discount = total - totalAmount.value
  return discount
})

const totalPrice = computed(() => {
  let total = 0
  store.recentCart.map((x) => {
    total = total + x.mrp * x.selectQuantity
  })
  return total
})

const taxAmount = computed(() => {
  let tax = (totalAmount.value * 2) / 100
  return tax
})

const finalAmount = computed(() => {
  let total = (totalAmount.value + taxAmount.value)
  let final = total - (total * discountedPrice.value)
  if(picked.value == 'COD'){
    final=final+50;
  }
  return final
})

const totalRentalPrice = computed(() => {
  let total = 0
  store.recentCart.map((x) => {
    total = total + (x.amount * x.days)
  })
  return total
})

const totalRentalAdvance = computed(() => {
  let total = 0
  store.recentCart.map((x) => {
    total = total + (x.amount * x.days *50)/100
  })
  return total
})

const platformfee = computed(() => {
  let tax = (totalRentalPrice.value * 2) / 100;
  return tax
})

const finalprice = computed(() => {
  let total = totalRentalPrice.value + totalRentalAdvance.value + platformfee.value + rentalDeliveryFee.value
  return total
})

const copyToClipboard = (item: any) => {
  const allMatch = store.recentCart.every(element => element.categoryType === item.categoryTypeId);
  if (!allMatch) {
    if (item.categoryTypeId === 1) {
      modelmessage.value = 'This coupon is valid only for clothes, but your cart contains items from multiple categories. Please remove the other items and try again!'
    } else if (item.categoryTypeId === 4) {
      modelmessage.value = 'This coupon is valid only for beauty products, but your cart contains items from multiple categories. Please remove the other items and try again!'
    } else if (item.categoryTypeId === 5) {
      modelmessage.value = 'This coupon is valid only for toys, but your cart contains items from multiple categories. Please remove the other items and try again!'
    } else {
      modelmessage.value = 'This coupon is not valid!'
    }
    document.getElementById('modalRemove').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
    return;
  }
  navigator.clipboard.writeText(item.code);
  couponId.value = item.id;
  discountedPrice.value = Number(item.offer) / 100;
  console.log(discountedPrice);
  closeModal('modalPromoCode');
};

const applyCoupon = () => {
  if (!couponCode.value) {
    alert("Please enter a coupon code!");
    return;
  }
  console.log(couponCode)
  applyCode.value = couponCode.value
  refetchVerifyCoupon()
} 


//picked.value = store.recentCart[0]?.isRental && isAvailable ? 'razorpay' : 'COD'

const amount = computed(() => 
  store.recentCart[0]?.isRental ? finalprice.value.toFixed(1).toString() : finalAmount.value.toFixed(1).toString()
);

const locationcheck = async(address: any) => {
 // checkPin.value = '600001'
  checkPin.value = address.pincode
  //await refetchLocationAvailble();
}

const { result: locationAvailble, refetch: refetchLocationAvailble } = useQuery(
  gql`
    query GetLocationByPincode($pincode: String!) {
      locationByPincode(pincode: $pincode) {
        id
        state
        city
        pincode
        createdOn
      }
    }
  `,
  computed(() => ({
    pincode: checkPin.value,
  })),
);

watch(locationAvailble, () => {
  if(locationAvailble?.value?.locationByPincode && !store.recentCart[0]?.isRental ) {
    isAvailable.value = true
    picked.value = 'COD'
  }
  else if(locationAvailble?.value?.locationByPincode == null) {
    isAvailable.value = false
    picked.value = 'razorpay'
  }
})

//fetch rezororderid
const { result: data, refetch: refetchOrder } = useQuery(
  computed(() => {
    return gql`
  query {
    razorOrderId(amount: "${amount.value.toString()}")
 }`
  })
)
console.log(data.value)

const { result: addressData, refetch: refetchNewAddress } = useQuery(
  computed(() => {
    return gql`
  query {
    addressByUserId(userid: "${authstore.$state.recentAuth.id}") {
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
 }`
  })
)
console.log('initalnewaddress', addressData)

const { result: couponResult, refetch: refetchCouponResult} = GetValidUserCoupon(authstore.$state.recentAuth.id);

const { result: verifyCoupon, refetch: refetchVerifyCoupon } = useQuery(
  gql`
    query VerifyCouponByUser($userid: UUID!, $code: String!) {
    verifyCouponByUser(userid: $userid, code: $code) {
      id
      name
      description
      offer
      code
      isActive
      createdOn
      validDate
      categoryTypeId
    }
  }
  `,
  computed(() => ({
    userid: authstore.$state.recentAuth.id,
    code: applyCode.value
  })),
);


watch(verifyCoupon, () => {
  if (verifyCoupon.value?.verifyCouponByUser) {
    isApplied.value = true;
    copyToClipboard(verifyCoupon.value.verifyCouponByUser);
  } else {
    isApplied.value = false;
  }
});

const openModal = (data: any) => {
  if (data == null) {
    addressId.value = '';
    receivername.value = '';
    receiverphone.value = ''
    fulladdress.value = '';
    locality.value = '';
    city.value = '';
    state.value = '';
    zipcode.value = '';
    selectedType.value = 'home'
  }
  else {
    addressId.value = data.id;
    receivername.value = data.receiverName;
    receiverphone.value = data.receiverMobileNo;
    fulladdress.value = data.completeAddress;
    locality.value = data.locality;
    city.value = data.city;
    state.value = data.state;
    zipcode.value = data.pincode
    selectedType.value = data.isHome ? 'home' : 'office'
    console.log(addressId.value)
  }

  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const isFormValid = computed(() => {
  return receivername.value && receiverphone.value && fulladdress.value && city.value && locality.value && state.value && zipcode.value;
});

const CREATE_ADDRESS = gql`
  mutation CreateAddress($address: AddressInput!) {
    createAddress(address: $address)
  }
`

const createAddress = useMutation(CREATE_ADDRESS, {
  optimisticResponse: {
    createAddress: true
  }
})

const addAddress = async () => {
  try {
    const response = await createAddress.mutate({
      address: {
        id: '00000000-0000-0000-0000-000000000000',
        userId: authstore.$state.recentAuth.id,
        receiverName: receivername.value || authstore.$state.recentAuth.name,
        receiverMobileNo: receiverphone.value,
        completeAddress: fulladdress.value,
        locality: locality.value,
        city: city.value,
        state: state.value,
        pincode: zipcode.value,
        isHome: selectedType.value == 'home' ? true : false,
        isOther: selectedType.value == 'office' ? true : false,
        isActive: true
      }
    })

    if (response?.data?.createAddress) {
      alert('New address created successfully')
      refetchNewAddress()
      closeModal()
    } else {
      alert('New address created failed.')
      console.log('Profile update failed.')
    }
  } catch (error) {
    console.error('Error updating address:', error)
  }
}

const UPDATE_ADDRESS = gql`
  mutation UpdateAddress($address: AddressInput!) {
    updateAddress(address: $address)
  }
`

const updateAddress = useMutation(UPDATE_ADDRESS, {
  optimisticResponse: {
    updateAddress: true
  }
});

const UpdateAddress = async () => {
  console.log('update')
  try {
    const response = await updateAddress.mutate({
      address: {
        id: addressId.value,
        userId: authstore.$state.recentAuth?.id,
        receiverName: receivername.value,
        receiverMobileNo: receiverphone.value,
        completeAddress: fulladdress.value,
        locality: locality.value,
        city: city.value,
        state: state.value,
        pincode: zipcode.value,
        isHome: selectedType.value == 'home' ? true : false,
        isOther: selectedType.value == 'office' ? true : false,
        isActive: true,
      },
    });

    if (response?.data?.updateAddress) {
      alert("Address updated successfully")
      refetchNewAddress()
      closeModal()
    } else {
      alert("Address updated failed.")
    }
  } catch (error) {
    console.error("Error updating address:", error);
  }
}

const RemoveAddress = async (id: any) => {
  console.log('remove')
  try {
    const response = await updateAddress.mutate({
      address: {
        id: id,
        isActive: false,
      },
    });

    if (response?.data?.updateAddress) {
      alert("Address removed successfully")
      refetchNewAddress()
      closeModal()
    } else {
      alert("Address removed failed.")
    }
  } catch (error) {
    console.error("Error updating address:", error);
  }
}

const RemoveCart = (id: string) => {
  store.removeCart(id)
}

const Payment = async () => {
  refetchOrder()
  if (data.value.razorOrderId !== null && selectedAddressId.value !== null) {
    const options: any = {
      description: 'Ecommerce app',
      image: 'https://prelinehealthcare.com/Scripts/assets/images/01-preline.svg',
      currency: 'INR',
      //key: "rzp_test_W6WCLSEZjLtGmK",
      key: 'rzp_live_PuCOeuFWxUVBO2',
      amount: !store.recentCart[0]?.isRental ? finalAmount.value * 100 : finalprice.value * 100, // 2000 paise = INR 20
      //amount: 10 * 100,
      name: 'Preline',
      order_id: data.value.razorOrderId,
      status: 'captured',
      captured: true,
      prefill: {
        email: authstore.$state.recentAuth.email || null,
        contact: authstore.$state.recentAuth.contactNo,
        name: authstore.$state.recentAuth.name
      },
      handler: (response: any) => {
        console.log(response)
        if (response !== null) {
          addOrder(response)
        }
      },
      theme: {
        color: 'blue'
      },
      modal: {
        ondismiss: function () {
          alert('Payment Dismissed')
        }
      }
    }
    console.log(options)

    if (options.order_id !== '') {
      try {
        const razorpay = new Razorpay(options)
        razorpay.open()
      } catch (error) {
        //const message = JSON.parse(error)
        //alert(message.description);
      }
    }
  } else {
    alert('Please confirmed address!')
  }

  // if (options.order_id !== '') {
  //   try {
  //     const razorpay = new Razorpay(options)
  //     razorpay.open()

  //   } catch (error: any) {
  //     //const message = JSON.parse(error)
  //     //alert(message.description);
  //   }
  // }

  // const url = "https://localhost:7069/api/payment/getrazororderid/"
  // fetch(url + "100")
  //   .then((res) => res.text())
  //   .then((x) => {
  //     console.log(x);
  //     options.order_id = x;
  //     console.log(options);
  //     if (options.order_id !== "") {
  //       const razorpay = new Razorpay(options);
  //       razorpay.open();
  //     }
  //   })
  //   .catch((error) => console.error("Error fetching data:", error));
}

const CODPayment = async () => {
  if (selectedAddressId.value !== null) {
    try {
      const response = await createOrder.mutate({
        order: {
          id: '00000000-0000-0000-0000-000000000000',
          //itemId: JSON.stringify([{itemId: "9A5D5862-D3AB-48C6-BC46-40B6383D12FB", size: "xs", count: "2"}]),
          itemId: JSON.stringify(items),
          userId: authstore.$state.recentAuth.id,
          addressId: selectedAddressId.value,
          totalCount: store.recentCart.length,
          totalAmount: totalAmount.value.toString(),
          finalAmount: finalAmount.value.toString(),
          deliveryCharge: 'Free',
          expectedDelivery: null,
          isShipped: false,
          isCancelled: false,
          isDelivered: false,
          isReturned: false,
          isExchage: false,
          isActive: true,
          paymentOrderId: 'COD',
          paymentSignature: 'COD',
          transactionId: 'COD',
          refundId: null,
          transactionDate: null,
          isRental: false,
          rentDays: 0,
          fromDate: null,
          toDate: null,
          expectedReturn:  null,
          isExtended: false,
          advance: 0,
          couponId: couponId.value || null
        }
      })

      if (response?.data?.createOrder) {
        console.log('Profile updated successfully:', response)
        updateItemCount()
      } else {
        alert('Profile update failed.')
        console.log('Profile update failed.')
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  } else {
    alert('Please confirmed address!')
  }
}
const items: {
  id: any
  name: any
  size: any
  count: any
  amount: any
  brandsize: any
  gst: any
}[] = []

store.recentCart.forEach((item: any) => {
  const data = {
    id: item.id,
    name: item.name,
    size: item.selectedSize,
    count: item.selectQuantity,
    amount: item.amount,
    brandsize: item.selectedBrandSize,
    gst: item.gst
  }
  items.push(data)
})

const INSERT_Order = gql`
  mutation createOrder($order: OrderInput!) {
    createOrder(order: $order)
  }
`
const createOrder = useMutation(INSERT_Order, {
  optimisticResponse: {
    createOrder: true
  }
})

const addOrder = async (data: any) => {
  try {
    if (!store.recentCart[0]?.isRental) {
      const response = await createOrder.mutate({
        order: {
          id: '00000000-0000-0000-0000-000000000000',
          //itemId: JSON.stringify([{itemId: "9A5D5862-D3AB-48C6-BC46-40B6383D12FB", size: "xs", count: "2"}]),
          itemId: JSON.stringify(items),
          userId: authstore.$state.recentAuth.id,
          addressId: selectedAddressId.value,
          totalCount: store.recentCart.length,
          totalAmount: totalAmount.value.toString(),
          finalAmount: finalAmount.value.toString(),
          deliveryCharge: 'Free',
          expectedDelivery: null,
          isShipped: false,
          isCancelled: false,
          isDelivered: false,
          isReturned: false,
          isExchage: false,
          isActive: true,
          paymentOrderId: data.razorpay_payment_id,
          paymentSignature: data.razorpay_signature,
          transactionId: data.razorpay_order_id,
          refundId: null,
          transactionDate: null,
          isRental: false,
          rentDays: 0,
          fromDate: null,
          toDate: null,
          expectedReturn:  null,
          isExtended: false,
          advance: 0,
          couponId: couponId.value || null
        }
      })
      if (response?.data?.createOrder) {
        console.log('Profile updated successfully:', response)
        updateItemCount()
      } else {
        alert('Profile update failed.')
        console.log('Profile update failed.')
      }
    }
    else {
      const response = await createOrder.mutate({
        order: {
          id: '00000000-0000-0000-0000-000000000000',
          //itemId: JSON.stringify([{itemId: "9A5D5862-D3AB-48C6-BC46-40B6383D12FB", size: "xs", count: "2"}]),
          itemId: JSON.stringify(items),
          userId: authstore.$state.recentAuth.id,
          addressId: selectedAddressId.value,
          totalCount: store.recentCart.length,
          totalAmount: totalRentalPrice.value.toString(),
          finalAmount: finalprice.value.toString(),
          deliveryCharge: rentalDeliveryFee.value.toString(),
          expectedDelivery: null,
          isShipped: false,
          isCancelled: false,
          isDelivered: false,
          isReturned: false,
          isExchage: false,
          isActive: true,
          paymentOrderId: data.razorpay_payment_id,
          paymentSignature: data.razorpay_signature,
          transactionId: data.razorpay_order_id,
          refundId: null,
          transactionDate: null,
          isRental: true,
          rentDays: store.recentCart[0].days,
          fromDate: store.recentCart[0].dates.from,
          toDate: store.recentCart[0].dates.to,
          expectedReturn: store.recentCart[0]?.dates?.to ? new Date(new Date(store.recentCart[0].dates.to).setDate(new Date(store.recentCart[0].dates.to).getDate() + 1)).toISOString().split('T')[0] : null,
          isExtended: false,
          advance: totalRentalAdvance.value,
          couponId: null
        }
      })
      if (response?.data?.createOrder) {
        console.log('Profile updated successfully:', response)
        updateItemCount()
      } else {
        alert('Profile update failed.')
        console.log('Profile update failed.')
      }
    }
  } catch (error) {
    console.error('Error updating profile:', error)
  }
}

const UPDATE_ITEMCOUNT = gql`
  mutation updateItemAvailableCount($itemavailable: ItemAvailableInput!) {
    updateItemAvailableCount(itemavailable: $itemavailable)
  }
`
const updateItem = useMutation(UPDATE_ITEMCOUNT, {
  optimisticResponse: {
    updateItemAvailableCount: true
  }
})

const updateItemCount = async () => {
  items.forEach(async (list: any) => {
    const itemdetails = {
      id: '00000000-0000-0000-0000-000000000000',
      itemId: list.id,
      size1: list.size,
      size1Count: list.count
    }
    console.log(itemdetails)
    try {
      const response = await updateItem.mutate({
        itemavailable: {
          id: '00000000-0000-0000-0000-000000000000',
          itemId: list.id,
          size1: list.size,
          size1Count: list.count
        }
      })

      if (response?.data?.updateItemAvailableCount) {
        // alert("Order placed successfully")
        // console.log("Profile updated successfully:", response);
        document.getElementById('modalConfirmOrder').style.display = 'block'
        document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
        store.removeCart(list.id)
        router.push('/account/orders')
      } else {
        alert('Profile update failed.')
        console.log('Profile update failed.')
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  })
}

const Promocode = async () => {
    document.getElementById('modalPromoCode').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
    couponCode.value = ''
    applyCode.value = ''
}
onMounted(() => {
  //alert('adsfa');
})

window.closeModal = function (modalId) {
  document.getElementById(modalId).style.display = 'none'
  document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
}
const RedirectToItemPage = (itemId: string) => {
  //:href="'item/'+y?.id"
  router.push('/item/' + itemId)
}
</script>

<style scoped>
.custom-size {
  max-width: 35rem !important;
  /* height: 30rem !important; */
}

.custom-height {
  top: 5rem !important;
  /* bottom: 5rem !important; */
}

.date-range {
  display: flex;
  gap: 20px;
  align-items: center;
}

input[type="date"] {
  margin-left: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h4 {
  font-weight: normal;
  font-size: 10px;
  margin: 0;
}
</style>