<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="group relative cursor-pointer">
    <div class="relative overflow-hidden shadow group-hover:shadow-lg rounded-md duration-300">
      <div v-if="item?.itemAvailables[0]?.totalCount == 0" class="w-full overflow-hidden rounded-md bg-white h-60 lg:h-80">
        <img style="z-index: 3;" :src="`${imagePath}${item.imagePath}`"
          class="h-full w-full object-contain object-center group-hover:scale-110 duration-300 opacity-50" />
        <span  className="absolute bottom-0 w-full flex items-end">
      
          <span className="bg-white w-full text-xs text-center text-red-700 p-3">
            OUT OF STOCK
          </span>
        </span>
      </div>
      <div v-else class="w-full overflow-hidden rounded-md bg-white h-60 lg:h-80">
        <img style="z-index: 3;" :src="`${imagePath}${item.imagePath}`"
          class="h-full w-full object-contain object-center group-hover:scale-110 duration-300" />
             </div>
      <ul v-if="!item.isRental" class="list-none flex flex-wrap items-center gap-2 absolute left-0 top-[10px] start-4">
        <li>
          <span class="bg-orange-600 text-white text-[12px] font-bold px-1.5 py-0.5 rounded h-5">{{ item?.offer }} %
            Off</span>
        </li>
        <!-- <li >
          <span class="bg-red-600 text-white text-[12px] font-bold px-2.5 py-0.5 rounded h-5">New</span>
        </li> -->

      </ul>
      <ul v-if="isWishlisted"
        class="list-none absolute z-[99] top-[10px] end-4 space-y-1">
        <li>
          <button type="button" @click="UpdateWishlist(item)"
            class="group size-10 inline-flex items-center justify-center tracking-wide align-middle duration-300 text-center rounded-full border-orange-200 bg-orange-100 text-slate-900 hover:bg-orange-200 shadow hover:shadow-md">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
              stroke-linejoin="round" class="size-4 fill-orange-400" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
              </path>
            </svg>
          </button>
        </li>
      </ul>
      <ul v-else
        class="list-none absolute z-[99] top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-300 space-y-1">
        <li>
          <button type="button" @click="UpdateWishlist(item)"
            class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-300 text-center rounded-full bg-white text-gray-800 hover:bg-orange-500 hover:text-white shadow hover:shadow-md">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
              stroke-linejoin="round" class="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
              </path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h3 class="text-base leading-snug font-medium">
        <a @click="RedirectToItemDetails(item.id)" class="group-hover:text-gray-1000 group-hover:no-underline">
          <span aria-hidden="true" class="absolute inset-0 z-10" />

          {{ item.name }} - {{ props.brand?.name }}
        </a>
      </h3>
      <p v-if="!item?.isRental" class="mt-2 mb-0">
        <span class="text-smtext-gray-900 font-bold mr-2">Rs.{{ item?.amount }}</span>
        <span class=" text-sm text-red-500 line-through">Rs.{{ item?.mrp }}</span>
      </p>
      <p v-else class="mt-2 mb-0">
        <span class="text-sm text-gray-900 font-bold mr-1">Rs.{{ ((item?.mrp * 5) / 100).toFixed()}}</span>
        <span className="text-xs text-gray-500">/ day</span>
        <span class="ml-2 text-sm text-red-500 line-through">Rs.{{ item?.mrp }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../../types/user/item'
import { onMounted, ref, watchEffect } from 'vue'
import { imagePath } from '../../constant/commonPath'
import { useRouter } from 'vue-router';
import { useCartStore } from '../../stores/user/cartstore';
import type { CartStoreType } from '../../types/user/cartStore';
import { useWishlistStore } from "../../stores/user/wishliststore";
import type { WishlistStoreType } from '../../types/user/wishlistStore';
import gql from 'graphql-tag';
import { useAuthStore } from '../../stores/authstore';
import { useQuery, useMutation } from '@vue/apollo-composable';


const store = useCartStore();
const wishlist = useWishlistStore();
const props = defineProps<{
  item: Item,
  brand: any
}>();

const router = useRouter();
const cartItems = store.isCartExist as CartStoreType[];
const wishlistItems = wishlist.isWishlistExist as WishlistStoreType[];
const authstore = useAuthStore();
const wishlisted = ref([])
const isWishlisted = ref(false)

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
    const wishlist = wishListData?.value?.wishListsByUserId
    isWishlisted.value = wishlist.find((x: any) => x.itemId.includes(props.item?.id)) ? true : false
  }
})

onMounted(() => {
  
  refetchWishListData()
   //console.log('item', props.item)
  // console.log('store',store.isCartExist);
  //console.log('brand',props.brand);
  //console.log('wishlist', wishlist.isWishlistExist);
})


const RedirectToItemDetails = (id: string) => {
  UpdateViewCount(id);
  router.push(`/item/${id}`);
}

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

const UpdateWishlist = async (item: any) => {
  if (authstore.$state.recentAuth.id == "") {
    router.push('/login')
  }
  else {
    try {
      const response = await updateWishList.mutate({
        wishList: {
          id: '00000000-0000-0000-0000-000000000000',
          itemId: item.id,
          userId: authstore.$state.recentAuth.id,
          isActive: isWishlisted.value ? false : true,
        }
      })

      if (response?.data?.updateWishList) {
        await refetchWishListData({ userId: authstore?.$state?.recentAuth.id });
        if (wishListData) {
          const wishlist = wishListData?.value?.wishListsByUserId
          isWishlisted.value = wishlist.find((x: any) => x.itemId.includes(item.id)) ? true : false
        }
      } else {
        AddToWishlist(item)
      }
    } catch (error) {
      console.error('Error Updated wishlist:', error)
    }
  }

}

const CREATE_WISHLIST = gql`
  mutation CreateWishList($wishList: WishListInput!) {
    createWishList(wishList: $wishList)
  }
`
const createWishList = useMutation(CREATE_WISHLIST, {
  optimisticResponse: {
    createWishList: true
  }
})

const AddToWishlist = async (item: any) => {
  try {
    const response = await createWishList.mutate({
      wishList: {
        id: '00000000-0000-0000-0000-000000000000',
        itemId: item.id,
        userId: authstore.$state.recentAuth.id,
        isActive: true,
      }
    })

    if (response?.data?.createWishList) {
      await refetchWishListData({ userId: authstore?.$state?.recentAuth.id });
      if (wishListData) {
        const wishlist = wishListData?.value?.wishListsByUserId
        isWishlisted.value = wishlist.find((x: any) => x.itemId.includes(item.id)) ? true : false
      }
    } else {
      console.log('Wishlist added failed.')
    }
  } catch (error) {
    console.error('Error create wishlist:', error)
  }
}

const UPDATE_VIEWCOUNT = gql`
  mutation UpdateItemViewCount($itemdetails: ItemInput!) {
    updateItemViewCount(itemdetails: $itemdetails)
  }
`;

const updateViewCount = useMutation(UPDATE_VIEWCOUNT, {
  optimisticResponse: {
    updateItemViewCount: true,
  },
});

const UpdateViewCount = async (item: any) => {
  if(authstore?.$state?.recentAuth.id) {
    CreateUserViewCount(item)
  }
  try {
    const response = await updateViewCount.mutate({
      itemdetails: {
        id: item,
      }
    })
    if (response?.data?.updateItemViewCount) {
      console.log('Item count upaded', response?.data?.updateItemViewCount)
    } else {
      console.log('Item count failed.')
    }
  } catch (error) {
    console.error('Error create wishlist:', error)
  }
}

const CREATE_USERVIEWCOUNT = gql`
  mutation CreateRecommendedItem($item: RecommendedItemInput!) {
    createRecommendedItem(item: $item)
  }
`;

const createRecommendedItem = useMutation(CREATE_USERVIEWCOUNT, {
  optimisticResponse: {
    createRecommendedItem: true,
  },
});

const CreateUserViewCount = async (itemid: any) => {
  console.log('userviewcount', authstore?.$state?.recentAuth.id)
  try {
    const response = await createRecommendedItem.mutate({
      item: {
        id: '00000000-0000-0000-0000-000000000000',
        itemId: itemid,
        userId: authstore?.$state?.recentAuth.id,
        viewCount: 1
      }
    })
    if (response?.data?.createRecommendedItem) {
      console.log('User Item count upaded', response?.data?.createRecommendedItem)
    } else {
      console.log('User Item count failed.')
    }
  } catch (error) {
    console.error('Error create item:', error)
  }
  
}
</script>