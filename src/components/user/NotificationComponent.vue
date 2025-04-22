<template>
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-[9999]" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900"
                          >Shopping cart</DialogTitle
                        >
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            @click="open = false"
                          >
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
  
                      <div class="mt-8">
                        <div class="flow-root">
                          <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li
                              v-for="product in store.recentCart"
                              :key="product.id"
                              class="flex py-6"
                            >
                              <div
                                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                              >
                                <img
                                  :src="`${imagePath}${product?.imagePath}`"
                                  :alt="`${imagePath}${product?.imagePath}`"
                                  class="h-full w-full object-cover object-center"
                                />
                              </div>
  
                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div
                                    class="flex justify-between text-base font-medium text-gray-900"
                                  >
                                    <h3>
                                      <a :href="product.imagePath">{{ product.name }}</a>
                                    </h3>
                                    <p class="ml-4">{{ product.amount }}</p>
                                  </div>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty {{ 1 }}</p>
  
                                  <div class="flex">
                                    <a style="cursor: pointer"
                                      @click="RemoveCartItem(product)"
                                      class="font-medium text-blue-600 hover:text-blue-500"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
  
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Price Summary</p>
                        <p >
                        Total price : {{ totalAmount }}
                      </p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">
                        Total item price : {{ totalAmount }}
                      </p>
                      <p class="mt-0.5 text-sm text-gray-500">
                        Discout price : {{ totalAmount }}
                      </p>
                      <p class="mt-0.5 text-sm text-gray-500">
                        Shipping price : {{ totalAmount }}
                      </p>
                      <div class="mt-6">
                        <a
                          style="cursor: pointer"
                          @click="RedirectCheckout()"
                          class="flex items-center justify-center rounded-md border border-transparent bg-yellow-300 text-yellow-900 px-6 py-3 text-base font-bold shadow-md hover:bg-yellow-400 hover:bg-yellow-1000 hover:shadow-lg hover:no-underline"
                          >Checkout</a
                        >
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
  import { computed, onMounted, ref, watch } from 'vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  import RedirectPage from '../../utility/redirect'
  import { useCartStore } from '../../stores/user/cartstore'
  import { imagePath } from '../../constant/commonPath'
  import type { CartStoreType } from '../../types/user/cartStore'
  import { useRouter } from 'vue-router'
  const store = useCartStore()
  const router = useRouter()
  
  const props = defineProps<{
    openModal: boolean
  }>()
  const open = ref(false)
  
  const RemoveCartItem = (product: CartStoreType) => {
    store.removeCart(product.id)
  }
  onMounted(() => {
    console.log('dat sdda', props.openModal)
    open.value = props.openModal
  })
  
  watch([open], () => {
    console.log('open', open.value)
  })
  
  const totalAmount = computed(() => {
    let total = 0
    store.recentCart.map((x) => {
      total = total + x.amount
    })
    return total
  })
  
  const RedirectCheckout = () => {
    console.log('checkout')
    let a = true
    if (a) router.push('checkout')
    else router.push('login')
  }
  </script>