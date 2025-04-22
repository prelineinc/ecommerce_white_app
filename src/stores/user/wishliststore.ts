import { useGetUserById } from '../../api/user/user'
import { setItem, removeItem, getItem } from '../../utility/sessionStorage'
import { defineStore } from 'pinia'

type WishlistStoreType = {
  id: string
  amount: number
  name: string
  imagePath: string
  mrp: number
  isActive: boolean
  offer: number
  fit: string
  brand: string
}
export type wishlist = {
  recentWishlist: WishlistStoreType[]
}
const EMPTY_WISHLIST_STORE: WishlistStoreType[] = [
  {
    id: '',
    amount: 0,
    name: '',
    imagePath: '',
    mrp: 0,
    isActive: false,
    offer: 0,
    fit: '',
    brand: ''
  }
]
const redirectOnFailedLogin = (e: Error) => {
  //can't use vue router because it is not guaranteed to be loaded at this point
  // window.location.replace(
  //   ROUTE_PATHS.accessDenied + '?error=' + encodeURIComponent(e.message)
  // );
}

export const useWishlistStore = defineStore('wishlist', {
  state: (): wishlist => {
    const sessionWishlist = getItem<WishlistStoreType[]>('wishlist') ?? EMPTY_WISHLIST_STORE;
    const data = sessionWishlist.length > 1 ?JSON.parse( sessionWishlist.toString()):EMPTY_WISHLIST_STORE;
    return { recentWishlist: data.filter((x: any) => x.id !== '') }
  },
  actions: {
    setWishlist(this: WishlistStoreType, wishlistStore: WishlistStoreType) {
      setItem('wishlist', { recentWishlist: [wishlistStore] })
    },
    resetCart() {
      removeItem('wishlist')
    },
    async initialize(wishlist: WishlistStoreType[]) {
      this.recentWishlist = wishlist
      setItem('wishlist', this.recentWishlist)
    },

    // TODO: Make this a getter within the store.
    async addCart(wishlist: WishlistStoreType) {
      console.log('wishlist', wishlist)
      const filteredCartItems = this.recentWishlist.filter((x) => {
        if (x?.id !== wishlist?.id) return true
      })
      this.recentWishlist = [wishlist, ...filteredCartItems]
      setItem('wishlist', JSON.stringify(this.recentWishlist))
      const e = new Error('errString' as string)
      redirectOnFailedLogin(e)
    },
    async removeCart(cartId: string) {
     
      const filteredCartItems = this.recentWishlist.filter((x) => {
        if (x?.id !== cartId){
          return x;
        }
      });
      this.recentWishlist = [...filteredCartItems]
      setItem('wishlist', JSON.stringify(this.recentWishlist))
    }
  },
  getters: {
    isWishlistExist: (state) => state.recentWishlist
  }
})
