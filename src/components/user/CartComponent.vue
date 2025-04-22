<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-[9999]" @close="open = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-[999] overflow-hidden">
        <div class="absolute inset-0  z-[999] overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-bold text-gray-900">Shopping Bag <span class="font-bold"
                          v-if="store.recentCart.length > 0">({{ store.recentCart.length }})</span></DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          @click="open = false">
                          <span class="absolute -inset-0.5"></span>
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li v-if="store.recentCart.length == 0">
                            <p class="text-gray-500 min-h-40 flex items-center justify-center">
                              Your bag is feeling lonely. Add some items.
                            </p>
                          </li>
                          <li v-if="!store.recentCart[0]?.isRental" v-for="(product, index) in store.recentCart"
                            :key="product.id" class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img :src="`${imagePath}${product?.imagePath}`" :alt="`${imagePath}${product?.imagePath}`"
                                class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <h3 class="flex justify-between text-base font-medium text-gray-900">
                                  <a @click="RedirectToItemDetails(product.id)" class="cursor-pointer">{{ product.name
                                    }}</a>
                                </h3>
                                <p class="mb-1 text-slate-500 text-xs"><span class="text-slate-800">{{ product.fit
                                    }}</span>
                                </p>
                                <!-- <p class="mb-1 text-slate-500 text-xs">Size: <span class="text-slate-800">M</span></p> -->
                              </div>
                              <div class="mb-3 mt-2">
                                <label class="mb-1 text-gray-700 font-semibold">Size: </label>
                                <select v-model="product.selectedSize"
                                  @change="sizechange(product.selectedSize, product.id, index)"
                                  class="p-1 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600">
                                  <option disabled value="">Select one</option>
                                  <!--commented issue-->
                                  <option
                                    v-for="option of product.size.filter(opt => opt.sizedata !== null && opt.sizecount > 0)"
                                    :key="option.sizedata?.id" :value="option.sizedata?.id" class="text-gray-700">
                                    {{ option.sizedata?.size }}
                                  </option>
                                </select>
                              </div>


                              <div class="flex items-center justify-between mt-auto">
                                <div class="inline-flex text-center">
                                  <button type="button" @click="Decrement(product.id)"
                                    class="size-8 transition-all duration-100 ease-out minus-value bg-yellow-300 text-yellow-900 rounded-l border-0 hover:bg-yellow-400 hover:text-yellow-1000"><svg
                                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" data-lucide="minus"
                                      class="lucide lucide-minus inline-block size-5">
                                      <path d="M5 12h14"></path>
                                    </svg></button>
                                  <!-- <input type="number"
                                    class="text-center font-bold w-12 h-8 products-quantity form-input border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                                    :value="1" min="0" max="100" readonly> -->
                                  <div class="text-center font-bold w-8 h-8 leading-8 border border-yellow-300">{{
                                    product.selectQuantity }}</div>
                                  <button type="button" @click="product.amount > 10 ? Increment(product.id) : null"
                                    class=" size-8 transition-all duration-100 ease-out plus-value border-0 rounded-r bg-yellow-300 text-yellow-900 hover:bg-yellow-400 hover:text-yellow-1000"><svg
                                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" data-lucide="plus"
                                      class="lucide lucide-plus inline-block size-5">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5v14"></path>
                                    </svg></button>
                                  <button type="button" @click="RemoveCartItem(product)"
                                    class="ml-3 font-medium text-red-500 hover:text-red-800 hover:bg-red-100 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke-width="1.5" stroke="currentColor" class="size-5">
                                      <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                  </button>
                                </div>
                                <div class="flex">
                                  <div class="line-through text-gray-400 mr-3">&#8377;{{ product.mrp *
                                    product.selectQuantity}}</div>
                                  <div>&#8377;{{ product.amount * product.selectQuantity }}</div>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li v-else v-for="(product, index) in store.recentCart" :key="product.id" class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                              <img :src="`${imagePath}${product?.imagePath}`" :alt="`${imagePath}${product?.imagePath}`"
                                class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div class="flex justify-between">
                                <div>
                                  <h3 class="flex justify-between text-base font-medium text-gray-900">
                                    <a @click="RedirectToItemDetails(product.id)" class="cursor-pointer">{{ product.name
                                      }}</a>
                                  </h3>
                                  <p class="mb-1 text-slate-500 text-xs"><span class="text-slate-800">{{ product.fit
                                      }}</span>
                                  </p>
                                </div>

                                <button type="button" @click="RemoveCartItem(product)"
                                  class="ml-3 font-medium text-red-500 hover:text-red-800 hover:bg-red-100 p-2 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </button>
                              </div>
                              <div class="flex items-center justify-between mt-auto">
                                <div class="flex">
                                  <div>&#8377;{{ product.amount }} &#215; {{ product.days }}</div>
                                  <div class="line-through text-gray-400 ml-3">&#8377;{{ product.mrp }}</div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li v-if="store.recentCart[0]?.isRental">
                            <div class="mb-3 mt-2">
                              <div class="flex gap-2">
                                <h4>
                                  From:
                                  <input type="date" id="fromDate" v-model="fromDate" :min="minDate" />
                                </h4>
                                <h4>
                                  To:
                                  <input type="date" id="toDate" v-model="toDate" :min="toMinDate" :max="maxDate"
                                    :disabled="!fromDate" />
                                </h4>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6" v-if="store.recentCart.length > 0">
                    <p class="mb-3 text-slate-500">Price Summary</p>

                    <table v-if="!store.recentCart[0].isRental" class="w-full mb-3">
                      <tbody class="table-total">
                        <tr>
                          <td class="py-1">Total :</td>
                          <td class="font-semibold text-right cart-subtotal">&#8377;{{ totalPrice }}</td>
                        </tr>
                        <tr>
                          <td class="py-1">Discount :</td>
                          <td class="font-semibold text-right cart-discount text-green-600">-&#8377;{{ discountAmount }}
                          </td>
                        </tr>
                        <!-- <tr>
                          <td class="py-1">Shipping Price :</td>
                          <td class="font-semibold text-right cart-shipping">&#8377;40</td>
                        </tr> -->
                        <tr>
                          <td class="py-1">Platform Fee (2%) : </td>
                          <td class="font-semibold text-right cart-tax">&#8377;{{ taxAmount }}</td>
                        </tr>
                        <tr class="font-bold">
                          <td class="py-1">Total price : </td>
                          <td class="font-semibold text-right cart-total">&#8377;{{ totalAmount + taxAmount }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table v-else class="w-full mb-3">
                      <tbody class="table-total">
                        <tr>
                          <td class="py-1">Sub Total :</td>
                          <td class="font-semibold text-right cart-subtotal">&#8377;{{ totalRentalPrice }}</td>
                        </tr>
                        <tr>
                          <td class="py-1">Advance :</td>
                          <td class="font-semibold text-right cart-discount">&#8377;{{ totalRentalAdvance }}
                          </td>
                        </tr>
                        <tr>
                          <td class="py-1">Platform Fee (2%) : </td>
                          <td class="font-semibold text-right cart-tax">&#8377;{{ platformfee }}</td>
                        </tr>
                        <tr>
                          <td class="py-1">Shipping Fee :</td>
                          <td class="font-semibold text-right cart-shipping">&#8377;{{ rentalDeliveryFee }}</td>
                        </tr>
                        <tr class="font-bold">
                          <td class="py-1">Total price : </td>
                          <td class="font-semibold text-right cart-total">&#8377;{{ finalprice }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div v-if="totalAmount !==0" class="mt-6">
                      <a style="cursor: pointer" @click="RedirectCheckout()"
                        class="flex items-center justify-center rounded-md border border-transparent bg-yellow-300 text-yellow-900 px-6 py-3 text-base font-bold shadow-md hover:bg-yellow-400 hover:bg-yellow-1000 hover:shadow-lg hover:no-underline">Checkout</a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import RedirectPage from '../../utility/redirect'
import { useCartStore } from '../../stores/user/cartstore'
import { imagePath } from '../../constant/commonPath'
import type { CartStoreType } from '../../types/user/cartStore'
import { useRouter } from 'vue-router'
import { GetItemAvailablesBySizeId } from '../../api/user/item'
import { useAuthStore } from '../../stores/authstore'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
const store = useCartStore()
const router = useRouter()
const authstore = useAuthStore();
const itemId = ref()
const sizeid = ref('')
const sizeindex = ref()
const fromDate = ref<string>('')
const toDate = ref<string>('')
const days = ref()
const rentalDeliveryFee = ref(50)
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1); // Add 1 day
const minDate: string = currentDate.toISOString().split('T')[0];
const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0];
const toMinDate = ref<string>('')

const GET_ITEMS_AVAILABLE_BY_ITEM_ID = gql`
  query GetItemsAvailableByItemId($itemId: UUID!) {
    itemAvailablesByItemId(itemid: $itemId) {
      id
      itemId
      size1
      size1Count
      size2
      size2Count
      size3
      size3Count
      size4
      size4Count
      size5
      size5Count
      size6
      size6Count
      size7
      size7Count
      size8
      size8Count
      size9
      size9Count
      size10
      size10Count
      totalCount
    }
  }
`;

const { result: sizeData, refetch: refetchSizeData } = useQuery(GET_ITEMS_AVAILABLE_BY_ITEM_ID, {
   itemId: itemId.value,
});

const isUserChanged = ref(false);

onMounted(async () => {
  isUserChanged.value = false;
  for (const item of store.recentCart) {
    itemId.value = item.id;
    fromDate.value = item?.dates?.from;
    toDate.value = item?.dates?.to;
    days.value = item.days;
    const nextDay = new Date(item?.dates?.from);
    nextDay.setDate(new Date(fromDate.value).getDate() + 1);
    toMinDate.value = nextDay.toISOString().split("T")[0];
    try {
      await refetchSizeData({ itemId: itemId.value });
      const fetchedData = sizeData?.value?.itemAvailablesByItemId;
      if (fetchedData) {
        const selectedSizeObj = item?.size.find((option: any) => option.sizedata?.id === item.selectedSize);
        for (let i = 1; i <= 10; i++) {
          const sizeKey = `size${i}`;
          const countKey = `size${i}Count`;

          if (fetchedData[sizeKey] === item.selectedSize) {
            if (fetchedData[countKey] > 0 && fetchedData.totalCount > 0) {
              item.selectQuantity = fetchedData[countKey] > 0 ? 1 : 0;
              item.selectSizeCount = fetchedData[countKey];
              item.selectedBrandSize = selectedSizeObj?.sizedata.size;
              break;
            }
            else {
              store.removeCart(itemId.value)
              break;
            }
          }
        }
      } else {
        console.warn("No data returned for itemId:", itemId.value);
      }
    } catch (error) {
      console.error("Error fetching data for item:", item.id, error);
    }
  }
  isUserChanged.value = true;
});

watch(() => sizeid.value, async (newSizeId) => {
    if (!newSizeId) return;

    try {
      await refetchSizeData({  itemId: itemId.value  });
      const fetchedData = sizeData?.value?.itemAvailablesByItemId;
      if (fetchedData) {
        for (let i = 1; i <= 10; i++) {
          const sizeKey = `size${i}`;
          const countKey = `size${i}Count`;
          if (fetchedData[sizeKey] === newSizeId) {
            const cartItem = store.recentCart[sizeindex.value];
              cartItem.selectedSize = newSizeId;
              cartItem.selectSizeCount = fetchedData[countKey];
              cartItem.selectQuantity = fetchedData[countKey] > 0 ? 1 : 0;
              cartItem.selectedBrandSize = cartItem?.size.find((option: any) => option.sizedata?.id === newSizeId)?.sizedata.size;
              store.updateCart(cartItem);
              break;
          }
        }
      } else {
        console.warn("No data fetched for the new size:", newSizeId);
      }
    } catch (error) {
      console.error("Error refetching data for new size:", newSizeId, error);
    }
  }
);

const props = defineProps<{
  openModal: boolean
}>()
const open = ref(false)

const RemoveCartItem = (product: CartStoreType) => {
  store.removeCart(product.id)
}
onMounted(() => {
  // console.log('dat sdda', props.openModal)
  open.value = props.openModal
})

watch([open], () => {
  //console.log('open', open.value)
})

const totalPrice = computed(() => {
  let total = 0
  store.recentCart.map((x) => {
    total = total + (x.mrp * x.selectQuantity)
  })
  return total
})

const totalAmount = computed(() => {
  let total = 0
  store.recentCart.map((x) => {
    total = total + (x.amount * x.selectQuantity)
  })
  return total
})

const discountAmount = computed(() => {
  let total = 0
  store.recentCart.map((x) => {
    total = total + (x.mrp * x.selectQuantity)
  })
  let discount = total - totalAmount.value
  return discount
})

const taxAmount = computed(() => {
  let tax = (totalAmount.value * 2) / 100
  return tax
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

watch(fromDate, (newFromDate) => {
  console.log(newFromDate)
  const startDate = new Date(newFromDate);
  const endDate = new Date(new Date(newFromDate).setDate(new Date(newFromDate).getDate() + 1 ));

  if (isUserChanged.value) {
    const nextDay = new Date(newFromDate);
    nextDay.setDate(startDate.getDate() + 1);
    toMinDate.value = nextDay.toISOString().split("T")[0];
    toDate.value = endDate.toISOString().split('T')[0];
    console.log("Updated toDate:", toDate.value);
    const timeDiff = endDate.getTime() - startDate.getTime();
    days.value = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    for (let i = 0; i < store.recentCart.length; i++) {
      store.recentCart[i].days = days.value
      store.recentCart[i].dates.from = newFromDate
      store.recentCart[i].dates.to = endDate.toISOString().split('T')[0]
      console.log(store.recentCart[i].dates.to)
    }
  }
})

watch(toDate, (newToDate) => {
  const startDate = new Date(fromDate.value);
  const endDate = new Date(newToDate);
  const timeDiff = endDate.getTime() - startDate.getTime();
  days.value = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert ms to days
  //days.value = endDate.getDate() - startDate.getDate() + 1;
  if (fromDate.value != undefined) {
    for (let i = 0; i < store.recentCart.length; i++) {
      store.recentCart[i].days = days.value
      store.recentCart[i].dates.from = fromDate.value
      store.recentCart[i].dates.to = newToDate
    }
  }
})

const RedirectCheckout = () => {
  //console.log('checkout')
  //open.value = false
  let a = false
  if (authstore.$state.recentAuth.id !== "") a = true
  if (a) {
    if (store.recentCart[0]?.isRental) {
      for (const item of store.recentCart) {
        const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
        const fromdate = new Date(new Date(item?.dates?.from).setHours(0, 0, 0, 0));
        if (fromdate < currentDate) {
          alert("Slot dates are not valid, Please select a new slot!");
          break;
        }
        else {
          open.value = false
          router.push('/checkout')
        }
      }
    }
    else {
      open.value = false
      router.push('/checkout')
    }
  }
  else {
    open.value = false
    router.push('/login')
  }
}

const RedirectToItemDetails = (itemId: any) => {
  open.value = false
  router.push(`/item/${itemId}`);
}

const Increment = (id: string) => {
  let cartItem = store.recentCart.find((x) => {
    if (x.id === id) {
      return x as CartStoreType
    }
  });

  //commented issue
  if (cartItem !== undefined) {
    if (cartItem.selectSizeCount > cartItem.selectQuantity) {
      cartItem.selectQuantity = cartItem.selectQuantity + 1;
      console.log('count:', cartItem?.selectQuantity)
    }
  }
}

const Decrement = (id: string) => {
  let cartItem = store.recentCart.find((x) => {
    if (x.id === id) {
      return x as CartStoreType
    }
  });
  if (cartItem !== undefined) {
    if (cartItem.selectQuantity !== 0) {
      cartItem.selectQuantity = cartItem.selectQuantity - 1;
    }
    // if (cartItem.selectQuantity === 0) {
    //   store.removeCart(cartItem.id);
    // } else {
    //   store.updateCart(cartItem);
    // }
    console.log('cartItem', cartItem);

  }

}

const sizechange = async (id: string, itemid: any, index: number) => {
  sizeid.value = id;
  itemId.value = itemid
  sizeindex.value = index
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