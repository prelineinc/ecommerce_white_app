<template>
  <div class="isolate bg-white px-6 py-10 sm:py-10 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true">
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Feedback </h2>

    </div>
    <form class="mx-auto mt-16 max-w-xl sm:mt-20" v-on:submit.prevent="submitFeedback()">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <!-- <div class="sm:col-span-2">
        <label for="title" class="block text-sm font-semibold leading-6 text-gray-900">Title</label>
        <div class="mt-2.5">
          <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div> -->
        <div class="sm:col-span-2 flex items-center justify-center">
          <div class="w-40 h-40 flex items-center justify-center bg-slate-100 rounded-md shrink-0 ">
            <img style="z-index: 3;" :src="`${imagePath}${route.query.itemid}.jpg`" 
            class="h-full w-full object-contain object-center cursor-pointer"
            @click="RedirectToItemDetails(route.query.itemid)"
            >
          </div>
        </div>

        <div class="sm:col-span-2">
          <label class="block text-sm font-semibold leading-6 text-gray-900">Rate Us</label>
          <div class="mt-2 flex gap-2">
            <span v-for="star in 5" :key="star" @click="setRating(star)" @mouseover="hoverRating = star"
              @mouseleave="hoverRating = rating" class="cursor-pointer text-3xl"
              :class="hoverRating >= star || rating >= star ? 'text-yellow-400' : 'text-gray-300'">
              ★
            </span>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Comments</label>
          <div class="mt-2.5">
            <textarea v-model="review" name="message" id="message" rows="4"
              placeholder="Please enter your comments here.."
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>

      </div>
      <div class="mt-10">
        <button :disabled="showSubmit" class="text-yellow-900 bg-yellow-400 hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full
      disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">Submit</button>
      </div>
    </form>
  </div>

</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { useAuthStore } from '../../stores/authstore';
import { useMutation, useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useRoute, useRouter } from "vue-router";
import { GetFeedBack } from "@/api/user/feedback";
import { useGetItemAvailableById } from "@/api/user/item";
import { imagePath } from "@/constant/commonPath";

const route = useRoute()
console.log('itemid', route.query.itemid)
console.log('orderid', route.query.orderid)
const itemid = ref(route.query.itemid)
const orderid = ref(route.query.orderid)
const authstore = useAuthStore();
//const type = ref(route.query.type as string)
// const { result: data, refetch: refetchItemById, loading } = useGetItemAvailableById(route.query.itemid)
// console.log('itemdata', data)
// const itemIdUpdated = computed(() => data?.value?.itemAvailablesByItemId.item)
// console.log('itemdataupdate', itemIdUpdated)
const { result, refetch } = GetFeedBack(route.query.orderid, route.query.itemid, authstore.$state.recentAuth.id)
console.log('result', result)
const rating = ref(0);
const hoverRating = ref(0);
const review = ref('');
const showSubmit = ref(false);
const router = useRouter()

watchEffect(() => {
  console.log('watch', result)
  if(result) {
    rating.value = result?.value?.feedbackByOrderId.rating
    review.value = result?.value?.feedbackByOrderId.comments
    showSubmit.value = true
  }
})

const setRating = (value: any) => {
  rating.value = value; // Update the selected rating
};

// const isFormInvalid = computed(() => {
//   return !review.value || !rating.value
// })

const CREATE_FEEDBACK = gql`
  mutation CreateFeedback($feedback: FeedbackInput!) {
    createFeedback(feedback: $feedback)
  }
  `

const createFeedback = useMutation(CREATE_FEEDBACK, {
  optimisticResponse: {
    createFeedback: true
  }
})

async function submitFeedback() {
  console.log(review.value, rating.value)
  const feedback = {
    id: "00000000-0000-0000-0000-000000000000",
    itemId: itemid.value,
    orderId: orderid.value,
    userId: authstore.$state.recentAuth.id,
    rating: rating.value,
    comments: review.value,
    isActive: true
  }
  console.log(feedback)

  if (review.value || rating.value) {
    try {
      const response = await createFeedback.mutate({
        feedback: {
          id: "00000000-0000-0000-0000-000000000000",
          itemId: itemid.value,
          orderId: orderid.value,
          userId: authstore.$state.recentAuth.id,
          rating: rating.value,
          comments: review.value,
          isActive: true
        },
      });

      if (response?.data?.createFeedback) {
        alert("Feedback created successfully")
        console.log("Feedback created successfully:", response);
        showSubmit.value = true;
      } else {
        alert("Feedback create failed.")
        console.log("Feedback create failed.");
      }
    } catch (error) {
      console.error("Error Feedback create:", error);
    }
  }
  else {
    alert("please enter a valuable feedback!")
  }
}

const RedirectToItemDetails = (itemId: any) => {
  router.push(`/item/${itemId}`);
}

</script>

<style></style>