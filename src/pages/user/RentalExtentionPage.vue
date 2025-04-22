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
                        <span class="text-blue-600"> Extension </span>
                    </li>
                </ul>
            </div>
            <div class="my-6">
                <h1 class="m-0 text-2xl font-bold">Rental Extension</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-x-5">
                <div class="xl:col-span-8 lg:col-span-7 md:col-span-6 sm:col-span-12">
                    <div class="bg-white rounded-lg p-5 mb-3 shadow sticky top-0">
                        <h2 class="mb-1 text-lg font-bold">Rental Details</h2>
                        <p class="mb-1 text-s">You're already booked rental for this item <span class="mb-1 text-md font-bold">From {{ formatDate(orderdata?.ordersById?.fromDate)  }} To {{ formatDate(orderdata?.ordersById?.toDate) }}</span>. Now you can extend the rental.</p>
                        <div class="mt-1">
                            <table class="w-full mb-3 text-sm sm:text-xs md:text-base">
                                <tbody>
                                    <tr v-for="x in JSON.parse(orderdata?.ordersById?.itemId)" :key="x.id">
                                        <td
                                            class="px-4 py-3 border-b border-dashed first:pl-0 last:pr-0 border-slate-200">
                                            <div class="flex items-center gap-3">
                                                <div
                                                    class="flex items-center justify-center w-24 h-24 rounded-md bg-slate-100 shrink-0">
                                                    <img :src="`${imagePath}${x?.id}.jpg`" :alt="`${x?.id}.jpg`" class="w-full max-w-[100px] sm:max-w-[70px] md:max-w-[90px]">
                                                </div>
                                                <div class="grow ">
                                                    <h6 class="mb-1">
                                                        <a style="cursor: pointer" @click="RedirectToItemPage(x.id)"
                                                            class="transition-all duration-300 ease-linear hover:text-custom-500">{{
                                                                x.name }}</a>
                                                    </h6>
                                                    <p v-if="x?.amount != null" class="text-slate-500">&#8377;{{
                                                        x.amount }} x {{
                                                            days }} days
                                                        &VerticalLine; {{ x.brandsize }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            class="px-4 py-2 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 text-left">
                                            <div>&#8377;{{ x.amount * days }}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-5 border-b border-dashed first:pl-0 last:pr-0 border-slate-200">
                                            <div class="flex justify-around gap-1">
                                                <div class="gap-3">
                                                    <label class="mr-3">
                                                        From:
                                                    </label>
                                                    <input type="date" id="fromDate" v-model="fromDate"
                                                        :min="fromMinDate" disabled/>
                                                </div>
                                                <div class="gap-3">
                                                    <label class="mr-3">
                                                        To:
                                                    </label>
                                                    <input type="date" id="toDate" v-model="toDate" :min="toMinDate" :max="maxDate" :disabled="!fromDate" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="xl:col-span-4 lg:col-span-5 md:col-span-6 sm:col-span-12">
                    <div class="bg-white rounded-lg p-5 mb-3 shadow sticky top-0">
                        <h2 class="mb-4 text-lg font-bold">Order Summary</h2>
                        <div class="mt-6">
                            <!-- <div class="mb-2 flex justify-between">
                                <a @click="Promocode()" class="text-blue-700">Apply Promo Code</a>
                            </div> -->
                            <table class="w-full mb-3 text-sm sm:text-xs md:text-base">
                                <tbody>
                                    <!-- <tr v-for="x of store.recentCart.filter(opt => opt.selectQuantity !== null && opt.selectQuantity > 0)"
                                        :key="x.id">
                                        <td
                                            class="px-4 py-3 border-b border-dashed first:pl-0 last:pr-0 border-slate-200">
                                            <div class="flex items-center gap-3">
                                                <div
                                                    class="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0">
                                                    <img :src="`${imagePath}${x.imagePath}`"
                                                        :alt="`${imagePath}${x.imagePath}`" class="h-10" />
                                                </div>
                                                <div class="grow">
                                                    <h6 class="mb-1">
                                                        <a style="cursor: pointer" @click="RedirectToItemPage(x.id)"
                                                            class="transition-all duration-300 ease-linear hover:text-custom-500">{{
                                                            x.name }}</a>
                                                    </h6>
                                                    <p class="text-slate-500">
                                                        &#8377;{{ x.amount }} x {{ x.selectQuantity }} &VerticalLine;
                                                        White
                                                        &VerticalLine;
                                                        {{
                                                        x.size.find((option) => option.sizedata?.id === x.selectedSize)
                                                        ?.sizedata?.size
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            class="px-4 py-2 border-b border-dashed first:pl-0 last:pr-0 border-slate-200 text-right">
                                            <div>&#8377;{{ x.amount * x.days }}</div>
                                        </td>
                                    </tr> -->
                                    <tr>
                                        <td class="py-1">Sub Total</td>
                                        <td class="font-semibold text-right cart-subtotal">&#8377;{{ totalRentalPrice }}
                                        </td>
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
                                    <!-- <tr>
                                        <td class="py-1">Shipping Fee :</td>
                                        <td class="font-semibold text-right cart-tax">&#8377;{{ rentalDeliveryFee }}
                                        </td>
                                    </tr> -->
                                    <tr>
                                        <td class="pt-4 font-bold">Total Amount</td>
                                        <td class="pt-4 font-semibold text-right cart-total text-lg">
                                            &#8377;{{ finalprice }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- <div class="grid sm:grid-cols-2 gap-2">
                                <div class="block">
                                    <input type="radio" value="razorpay" v-model="picked" name="payment"
                                        class="peer absolute w-px h-px opacity-0" id="razorpay" checked />
                                    <label for="razorpay"
                                        class="group flex p-3 block w-full bg-white border border-gray-400 rounded-md text-sm peer-checked:bg-yellow-100 peer-checked:border-yellow-500">
                                        <span
                                            class="border border-gray-400 rounded-full mr-2 w-4 h-4 mt-0.5 peer-checked:group-[]:border-yellow-900 peer-checked:group-[]:bg-yellow-900"></span>
                                        <h5 class="text-sm text-gray-800 peer-checked:group-[]:font-bold">Razorpay
                                            Payment</h5>
                                    </label>
                                </div>
                            </div> -->
                            <button @click="Payment()"
                                class="mt-6 w-full rounded-md bg-yellow-300 py-2 font-bold text-yellow-900 shadow hover:shadow-lg hover:bg-yellow-200 transition duration-200 ease-out">
                                Continue to Razorpay Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div id="modalConfirmOrder"
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
        </div> -->
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
import { useRouter, useRoute } from 'vue-router'
import { GetOrderById } from '../../api/user/order'
import { formatDate } from '@/utility/dateFormat'

//545cdffa-1bed-4df9-be09-8324327c29da

//alert();
const store = useCartStore()
declare var Razorpay: any
const authstore = useAuthStore()
const router = useRouter()
console.log(authstore.$state.recentAuth.id)
const selectedAddressId = ref(null)
console.log(selectedAddressId.value)
const picked = ref('COD');
const rentalDeliveryFee = ref(50)
const fromDate = ref<string>('')
const toDate = ref<string>('')
const days = ref(1)
const expectedreturn = ref<string>('')
const currentdate: string = new Date().toISOString().split('T')[0]
const minDate = currentdate
const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0];

const route = useRoute();
const orderid = route.params.id
const { result: orderdata, refetch: refetchData } = GetOrderById(route.params.id);
console.log('orderdata', orderdata)
const fromMinDate = ref<string>('')
const toMinDate = ref<string>('')

onMounted(async () => {
    const data = orderdata?.value?.ordersById;
    fromMinDate.value = new Date(data.toDate).toISOString().split("T")[0];
    fromDate.value = new Date(data.toDate).toISOString().split("T")[0];
    const nextToDay = new Date(data.toDate);
    nextToDay.setDate(nextToDay.getDate() + 1);
    toMinDate.value = nextToDay.toISOString().split("T")[0];
    toDate.value = nextToDay.toISOString().split("T")[0];
})

const totalRentalPrice = computed(() => {
    let total = 0
    try {
        const data = JSON.parse(orderdata?.value?.ordersById?.itemId);
        if (Array.isArray(data)) {
            total = data.reduce((acc, x) => acc + (x.amount * days.value), 0);
        }
    } catch (error) {
        console.error('Error parsing JSON in totalRentalPrice:', error);
    }

    return total
})

const totalRentalAdvance = computed(() => {
    let total = 0
    try {
        const data = JSON.parse(orderdata?.value?.ordersById?.itemId);
        if (Array.isArray(data)) {
            total = data.reduce((acc, x) => acc + (x.amount * days.value * 0.5), 0);
        }
    } catch (error) {
        console.error('Error parsing JSON in totalRentalAdvance:', error);
    }
    console.log('totlremt', total)

    return total
})

const platformfee = computed(() => {
    let tax = ((totalRentalPrice.value + totalRentalAdvance.value) * 2) / 100;
    return tax
})

const finalprice = computed(() => {
    let total = totalRentalPrice.value + totalRentalAdvance.value + platformfee.value
    return total
})

watch(toDate, (newToDate) => {
    console.log(fromDate.value, toDate.value)
    const startDate = new Date(fromDate.value);
    const endDate = new Date(newToDate);
    const timeDiff = endDate.getTime() - startDate.getTime();
    days.value = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert ms to days
    expectedreturn.value = new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)).toISOString().split('T')[0].toString()
    refetchOrder()

});


//fetch rezororderid
const { result: data, refetch: refetchOrder } = useQuery(
    computed(() => {
        return gql`
  query {
    razorOrderId(amount: "${finalprice.value.toString()}")
 }`
    })
)
console.log(data)


const Payment = async () => {
    refetchOrder()
    if (data.value.razorOrderId !== null) {
        const options: any = {
            description: 'Ecommerce app',
            image: 'https://prelinehealthcare.com/Scripts/assets/images/01-preline.svg',
            currency: 'INR',
            //key: "rzp_test_W6WCLSEZjLtGmK",
            key: 'rzp_live_PuCOeuFWxUVBO2',
            amount: finalprice?.value * 100, // 2000 paise = INR 20
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
                if (response != null) {
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
    }
}

const EXTENTION_Order = gql`
  mutation CreateOrderExtention($order: OrderInput!) {
    createOrderExtention(order: $order)
  }
`
const createOrderExtention = useMutation(EXTENTION_Order, {
    optimisticResponse: {
        createOrderExtention: true
    }
})

const addOrder = async (data: any) => {
    //refetchOrder()
    // const raz = data?.value?.razorOrderId
    // console.log(raz)
    const orderList = {
        id: orderid,
        userId: authstore.$state.recentAuth.id,
        totalAmount: totalRentalPrice.value.toString(),
        finalAmount: finalprice.value.toString(),
        paymentOrderId: data.razorpay_payment_id || null,
        paymentSignature: data.razorpay_signature || null,
        transactionId: data.razorpay_order_id || null,
        refundId: null,
        transactionDate: null,
        isRental: true,
        rentDays: days.value,
        fromDate: fromDate.value,
        toDate: toDate.value,
        // expectedReturn : toDate ? new Date(new Date(toDate).setDate(new Date(toDate).getDate() + 1)).toISOString().split('T')[0]: null,
        expectedReturn: expectedreturn.value.toString(),
        isExtended: true,
        advance: totalRentalAdvance.value,
        isActive: true
    }
    console.log(orderList)
    try {
        const response = await createOrderExtention.mutate({
            order: {
                id: orderid,
                userId: authstore.$state.recentAuth.id,
                totalAmount: totalRentalPrice.value.toString(),
                finalAmount: finalprice.value.toString(),
                paymentOrderId: data.razorpay_payment_id || null,
                paymentSignature: data.razorpay_signature || null,
                transactionId: data.razorpay_order_id || null,
                refundId: null,
                transactionDate: null,
                isRental: true,
                rentDays: days.value,
                fromDate: fromDate.value,
                toDate: toDate.value,
                // expectedReturn : toDate ? new Date(new Date(toDate).setDate(new Date(toDate).getDate() + 1)).toISOString().split('T')[0]: null,
                expectedReturn: expectedreturn.value.toString(),
                isExtended: true,
                advance: totalRentalAdvance.value,
                isActive: true
            }
        })
        if (response?.data?.createOrderExtention) {
            console.log('Order extention successfully:', response)
            alert('Order extention successfully.')
            // updateItemCount()
        } else {
            alert('Order update failed.')
            console.log('Profile update failed.')
        }
    } catch (error) {
        console.error('Error updating profile:', error)
    }
}

const RedirectToItemPage = (itemId: string) => {
    //:href="'item/'+y?.id"
    router.push('/item/' + itemId)
}
</script>

<style></style>