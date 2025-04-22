<template>
  <div v-if="wishlist.length > 0">
    <div class="pb-5 mb-5 border-b" v-for="x of wishlist" :key="x.id">
      <div class="grid gap-4 grid-cols-12">
        <div class="col-span-4 lg:col-span-2">
          <div class="rounded-md overflow-hidden bg-slate-100">
            <img @click="RedirectToItemDetails(x?.itemId)" :src="`${imagePath}${x?.item.imagePath}`" :alt="`${x?.item.name}`" />
          </div>
        </div>
        <!--end col-->
        <div class="flex flex-col col-span-8 lg:col-span-6">
          <div>
            <h5 class="mb-1 text-xl font-bold">
              <a style="cursor:pointer" @click="RedirectToItemDetails(x?.itemId)">{{ x?.item.name }}</a>
            </h5>
            <!-- <p class="mb-2 text-slate-500"><a href="#!">{{ x?.brand }}</a></p> -->
            <!-- <p class="mb-1 text-slate-500">Color: <span class="text-slate-800">White/Blue</span></p> -->
            <p class="mb-2 text-slate-500"><a href="#!" class="text-slate-800">{{ x?.item.fit }}</a></p>
          </div>
          <!-- <div class="flex items-center justify-between mt-auto">
            <div class="inline-flex text-center">
              <button type="button"
                class="size-8 transition-all duration-100 ease-out minus-value bg-yellow-300 rounded-l border-0 text-yellow-900 hover:bg-yellow-400 hover:text-yellow-1000 focus:bg-yellow-400 focus:text-yellow-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="minus" class="lucide lucide-minus inline-block size-5">
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <input type="number"
                class="text-center font-bold w-12 h-8 products-quantity form-input border border-yellow-300 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                :value="1" min="0" max="100" readonly />
              <button type="button"
                class="size-8 transition-all duration-100 ease-out plus-value border-0 rounded-r bg-yellow-300 text-yellow-900 hover:bg-yellow-400 hover:text-yellow-1000 focus:bg-yellow-400 focus:text-yellow-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  data-lucide="plus" class="lucide lucide-plus inline-block size-5">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
              <button type="button" title="Remove Wishlist"
                class="ml-3 font-medium text-red-500 hover:text-red-800 hover:bg-red-100 p-2 rounded-full"
                @click="RemoveWishlist(x)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          </div> -->
          <!-- <div class="flex items-center justify-between mt-auto">
            <div>
              <p class="mt-1 mb-2">
                <span class=" text-sm text-red-500 line-through mr-2">Rs.{{ x.mrp }}</span>
                <span class="text-sm text-gray-900 font-bold mr-2">Rs.{{ x.amount }}</span><br>
                <span class="text-sm text-green-400 font-bold mr-2">{{ x.offer }} % Off</span>
              </p>
            </div>
          </div> -->
          <div class="flex items-baseline mb-2">
              <div class="mr-3">
                <span class="text-xl font-bold text-gray-800 ">&#8377;{{ x?.item.amount }}</span>
              </div>
              <div class="mr-3">
                <span class="text-md line-through text-gray-400 ">&#8377;{{ x?.item.mrp }}</span>
              </div>
              <div class="mr-3">
                <span class="text-sm font-bold uppercase text-red-600 ">({{ x?.item.offer }}% OFF) </span>
              </div>
            </div>
          <!--end col-->
          <!-- <div class="flex justify-between w-full lg:flex-col lg:col-end-13 col-span-12 lg:col-span-4">
            <div class="mb-auto lg:text-right">
              <h6 class="products-price">
                <small class="font-normal line-through text-gray-500 px-3">&#8377;{{ x?.mrp }}</small>
                <span>&#8377;{{ x.amount }}</span>
              </h6>
            </div>
            <h6 class="mt-auto text-16 lg:text-right">
              &#8377;<span class="products-line-price text-xl font-bold">{{ x.amount }}</span>
            </h6>
          </div> -->
          <!--end col-->
          <div class="flex items-center justify-start mt-auto">
            <button @click="RedirectToItemDetails(x?.itemId)"
            class="inline-flex items-center justify-center bg-yellow-300 text-yellow-900 border border-yellow-500 py-2 px-4 rounded-full font-bold shadow-md hover:bg-yellow-200 hover:text-yellow-1000 hover:shadow-lg transition-all duration-200 ease-out w-48">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6 flex-shrink-0">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                </path>
              </svg>
            </span>
            <span class="font-bold pl-3">Move to Bag</span>
          </button>
          <button type="button" title="Remove Wishlist"
                class="ml-3 font-medium text-red-500 hover:text-red-800 hover:bg-red-100 p-2 rounded-full"
                @click="RemoveWishlist(x)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="pb-5 mb-5 border-b">No items available.</div>
  </div>
</template>


<script setup lang="ts">
import { useGetWishListByUserId } from '../../api/user/wishlist'
import { useWishlistStore } from '../../stores/user/wishliststore'
import { imagePath } from '../../constant/commonPath'
import { useRouter } from 'vue-router'
import RedirectPage from '../../utility/redirect'
import { useAuthStore } from '../../stores/authstore'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@vue/apollo-composable'
import { watch, ref, watchEffect } from 'vue'

const authstore = useAuthStore();
const router = useRouter()
const store = useWishlistStore()
const wishlist = ref([])

const QUERY_GET_WISHLIST = gql`
query GetWishListByUserId($userId: UUID!) {
  wishListsByUserId(userid: $userId) {
    id
    itemId
    item {
      id
      name
      description
      amount
      mrp
      offer
      imagePath
      brand{
        name
      }
      itemAvailables {
        totalCount
      }
    }
  }
}
`;

const { result: wishListData, refetch: refetchWishListData, loading } = useQuery(QUERY_GET_WISHLIST, {
  userId: authstore?.$state?.recentAuth.id,
});

watchEffect(() => {
  if(wishListData?.value?.wishListsByUserId) {
  wishlist.value = wishListData?.value?.wishListsByUserId
  }
})

const UPDATE_WISHLIST = gql`
  mutation UpdateWishList($wishList: WishListInput!) {
    updateWishList(wishList: $wishList)
  }
`
const updateWishList = useMutation(UPDATE_WISHLIST, {
  optimisticResponse: {
    updateWishList: true
  }
})

const RemoveWishlist = async (item: any) => {
  try {
    const response = await updateWishList.mutate({
      wishList: {
        id: '00000000-0000-0000-0000-000000000000',
        itemId: item.itemId,
        userId: authstore.$state.recentAuth.id,
        isActive: false,
      }
    })

    if (response?.data?.updateWishList) {
      refetchWishListData()
    } else {
      alert('Wishlist Updated failed.')
      console.log('Wishlist Updated failed.')
    }
  } catch (error) {
    console.error('Error Updated wishlist:', error)
  }
}

// const RemoveWishlist = (item: any) => {
//   console.log('RemoveWishlist', item.id)
//   store.removeCart(item.id)
// }

const RedirectToItemDetails = (id: string) => {
  router.push(`/item/${id}`)
}
</script>


<style></style>