import { useGetUserById } from '../../api/user/user'
import { setItem, removeItem, getItem } from '../../utility/sessionStorage'
import { defineStore } from 'pinia'

type CartStoreType = {
  id: string;
  amount: number;
  name: string;
  imagePath: string;
  mrp: number;
  isActive: boolean;
  offer: number;
  fit: string;
  count:number;
  size:string;
  selectedSize:string;
  selectQuantity: number;
  selectSizeCount: number;
  selectedBrandSize: string;
  isRental: boolean,
  days: number,
  dates: {from: string, to: string},
  categoryType: number

}
export type cart = {
  recentCart: CartStoreType[]
}
const EMPTY_CART_STORE: CartStoreType[] = [
  {
    id: '',
    amount: 0,
    name: '',
    imagePath: '',
    mrp: 0,
    isActive: false,
    offer: 0,
    fit: '',
    count:0,
     size:'',
    selectedSize: '',
    selectQuantity: 0,
    selectSizeCount: 0,
    selectedBrandSize: '',
    isRental: false,
    days: 0,
    dates: {from: '', to: ''},
    categoryType: 0
  }
]
const redirectOnFailedLogin = (e: Error) => {
  //can't use vue router because it is not guaranteed to be loaded at this point
  // window.location.replace(
  //   ROUTE_PATHS.accessDenied + '?error=' + encodeURIComponent(e.message)
  // );
}

export const useCartStore = defineStore('cart', {
  state: (): cart => {
    const sessionCart = getItem<CartStoreType[]>('cart') ?? EMPTY_CART_STORE;
    const data = sessionCart.length > 1 ?JSON.parse( sessionCart.toString()):EMPTY_CART_STORE;
    return { recentCart: data.filter((x: any) => x.id !== '') }
  },
  actions: {
    setCart(this: CartStoreType, cartStore: CartStoreType) {
      setItem('cart', { recentCart: [cartStore] })
    },
    resetCart() {
      removeItem('cart')
    },
    async initialize(cartItem: CartStoreType[]) {
      this.recentCart = cartItem
      setItem('cart', this.recentCart)
    },

    // TODO: Make this a getter within the store.
    async addCart(cartItem: CartStoreType) {
      console.log('cartItem', cartItem)
      const filteredCartItems = this.recentCart.filter((x) => {
        if (x?.id !== cartItem?.id) return true
      })
      this.recentCart = [cartItem, ...filteredCartItems]
      setItem('cart', JSON.stringify(this.recentCart))
      //const e = new Error('errString' as string)
      //redirectOnFailedLogin(e)
    },
    async removeCart(cartId: string) {
     
      const filteredCartItems = this.recentCart.filter((x) => {
        if (x?.id !== cartId){
          return x;
        }
      });
      this.recentCart = [...filteredCartItems]
      setItem('cart', JSON.stringify(this.recentCart))
    },
    async updateCart(cartItem: CartStoreType) {
      console.log('updateCart', cartItem)
      const filteredCartItems = this.recentCart.map((x) => {
        if (x.id === cartItem.id) {
          return { ...x, ...cartItem };
        }
        return x;
      });
      console.log('filteredCartItems',filteredCartItems);
      this.recentCart = [...filteredCartItems]
      console.log('recentCart', this.recentCart);
      setItem('cart', JSON.stringify(this.recentCart))
      //const e = new Error('errString' as string)
      //redirectOnFailedLogin(e)
    },
  },
  getters: {
    isCartExist: (state) => state.recentCart
  }
})
