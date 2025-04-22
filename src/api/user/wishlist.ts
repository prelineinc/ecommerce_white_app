import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

//import { gql } from 'node_modules/@apollo/client/core/index'
//import { useQuery } from 'node_modules/@vue/apollo-composable/dist/useQuery'

export const useUserWishListDetails = () => {
  //console.log('');

  const QUERY_WISHLIST_INFO = gql`
    query {
      wishLists {
        id
        itemId
        userId
        isActive
      }
    }
  `
  return useQuery(QUERY_WISHLIST_INFO)
}

export const useGetWishListByUserId = (id: any) => {

  const QUERY_GET_WISHLIST = gql`
query GetWishListByUserId {
  wishListsByUserId(userid: "${id}") {
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
      itemAvailables {
        totalCount
      }
    }
  }
}
`
  return useQuery(QUERY_GET_WISHLIST)
}
// export const GetWishlist = gql`
//   query GetWishListsByUserId($userid: ID!) {
//     wishListsByUserId(userid: $userid) {
//       id
//       itemId
//       item {
//         id
//         name
//       }
//     }
//   }
// `;

export const CreateWishList = gql`
  mutation CreateWishList($wishList: WishListInput!) {
    createWishList(wishList: $wishList)
  }
`

export const UpdateWishList = gql`
  mutation UpdateWishList($wishList: WishListInput!) {
    updateWishList(wishList: $wishList)
  }
`
