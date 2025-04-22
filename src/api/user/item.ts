import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const useUserItemDetails = () => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
    query {
      items {
        id
        name
        description
        offer
        amount
        imagePath
        isActive
      }
    }
  `
  return useQuery(QUERY_ITEM_INFO)
}

export const useUserItemDetailsById = () => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
    query {
      items {
        id
        name
        description
        offer
        amount
        imagePath
        isActive
      }
    }
  `
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetItemById = (id: any) => {
  const QUERY_GET_ITEMS = gql`
  query  GetItemsById{
    itemsById(id: "${id}") {
      id,
        name,
        description,
        material,
        fit,
        imagePath,
        amount,
        mrp,
        offer,
        qualityChecked
        returnDay,
        isExchange
        isRental
        brand {
            id
            name
        }
        category {
            id
            name
        }
        categoryType {
            id
            name
        }
        isActive
        createdOn,
        feedbacks{
        rating
      }
    }
  }
`
  return useQuery(QUERY_GET_ITEMS)
}

export const useGetItemAvailableById = (itemid: any) => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
  query GetItemsAvailableByItemId {
    itemAvailablesByItemId(itemid: "${itemid}") {
      id,
        size1Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size1Count,
        size2Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size2Count,
        size3Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size3Count,
        size4Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size4Count,
        size5Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size5Count,
        size6Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size6Count,
        size7Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size7Count,
        size8Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size8Count,
        size9Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size9Count,
        size10Navigation {
          id,
            size,
            brandSize,
            waist,
            inseam,
            rise,
            outseam,
            skirt,
            bust,
            hip,
            front,
            kidsHeight,
            kidsWeight,
        },
        size10Count,
      totalCount
      item{
        id,
        name,
        description,
        material,
        fit,
        imagePath,
        amount,
        mrp,
        offer,
        gst,
        qualityChecked
        returnDay,
        isExchange,
        productDetail
        isRental
        createdOn
        brand {
          id
          name
        }
        category {
          id
          name
        }
        categoryType {
          id
          name
        }
        feedbacks{
          rating
          comments
          createdOn
          user {
            id
            name
          }
        }
        itemImages {
          itemId,
          path1,
          path2,
          path3,
          path4,
          path5,
          path6
        }
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const GetItemAvailablesBySizeId = (itemid: any, sizeid: any) => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
  query  GetItemAvailablesBySizeId{
    itemAvailablesBySizeId(itemid: "${itemid}", sizeid: "${sizeid}") {
      id,
      size1,
      size1Count,
      size2,
      size2Count,
      size3,
      size3Count,
      size4,
      size4Count,
      size5,
      size5Count,
      size6,
      size6Count,
      size7,
      size7Count,
      size8,
      size8Count,
      size9,
      size9Count,
      size10,
      size10Count,
    }
  }`
  return useQuery(QUERY_ITEM_INFO)
}
export const UpdateItemAvailableCount = gql`
  mutation UpdateItemAvailableCount($itemavailable: ItemAvailableInput!) {
    updateItemAvailableCount(itemavailable: $itemavailable)
  }
`

export const UpdateItemAvailableAddCount = gql`
  mutation UpdateAddItemAvailableCount($itemavailable: ItemAvailableInput!) {
    updateAddItemAvailableCount(itemavailable: $itemavailable)
  }
`

export const useGetItems = (page: number) => {
  const QUERY_ITEM_INFO = gql`
  query GetProduct {
    itemsByPage(page: ${page}) {
      id
      name
      description
      imagePath
      material
      amount
      offer
      mrp
      fit
      createdOn
      isRental
      brand {
        id
        name
      }
      feedbacks {
        rating
      }
      itemAvailables {
        id
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetItemByCategory = (id: any, page: number) => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
  query  GetItemsByCategoryId{
    itemsByCategoryId(categoryid: ${id}, page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material,
      amount,
      offer,
      mrp,
      fit,
      createdOn,

      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetItemByBrand = (id: any, page: number) => {
  console.log('id', id)

  const QUERY_ITEM_INFO = gql`
  query  GetItemsByBrandId{
    itemsByBrandId(brandid: "${id}", page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material,
      amount,
      offer,
      mrp,
      fit,
      createdOn,
      
      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
      id,
      totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const GetProductBySearh = (id: any, page: number) => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
  query  GetItemsBySearch{
    itemsBySearch(id: "${id}", page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material,
      amount,
      offer,
      mrp,
      fit,
      categoryId,
      brandId
      createdOn,
      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetProductByPrice = (amount: string, page: number) => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
  query  GetItemsByPrice{
    itemsByPrice(amount: "${amount}", page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material
      amount,
      offer,
      mrp,
      fit,
      createdOn,
      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetItemByOffer = (offer: string, page: number) => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
  query  GetItemsByOffer{
    itemsByOffer(offer: "${offer}", page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material
      amount,
      offer,
      mrp,
      fit,
      createdOn,
      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const GetProductByBudgetPrice = (id: any, price: string, page: number) => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
  query  GetItemsByBudgetPrice{
    itemsByBudgetPrice(categoryid: "${id}", amount: "${price}", page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material
      amount,
      offer,
      mrp,
      fit,
      createdOn,
      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetItemByCategoryType = (id: any, price: any, page: number) => {
  //console.log('');

  const QUERY_ITEM_INFO = gql`
  query  ItemsByCategoryTypeOffer{
    itemsByCategoryTypeOffer(categorytypeid: "${id}", offer: "${price}", page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material
      amount,
      offer,
      mrp,
      fit,
      createdOn,
      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetItemByAge = (less1: any, less6: any, greater6: any, id: any, page: number) => {
  const QUERY_ITEM_INFO = gql`
  query  ItemsByAge{
    itemsByAge(less1: ${less1}, less6: ${less6}, greater6: ${greater6} categorytypeid: "${id}", page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material
      amount,
      offer,
      mrp,
      fit,
      createdOn,
      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetItemByTodayOffer = (page: number) => {
  const QUERY_ITEM_INFO = gql`
  query  GetItemsByTodayOffer{
    itemsByTodayOffer(page: ${page}) {
      id,
      name,
      description,
      imagePath,
      material
      amount,
      offer,
      mrp,
      fit,
      createdOn,
      brand {
      id,
      name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

export const useGetUserRecommendedItem = (id: any) => {
  const QUERY_GET_RECOMMENDEDITEMS = gql`
  query  GetRecommendedItemsByUser{
    recommendedItemsByUser(id: "${id}") {
      id
    itemId
    viewCount
    item {
      id,
      name,
      description,
      imagePath,
      material
      amount,
      offer,
      mrp,
      fit,
      createdOn,
      category {
        id
        name
      }
      categoryType {
        id
        name
      }
      brand {
        id
        name
      }
      feedbacks{
        rating
      }
      itemAvailables {
        id,
        totalCount
      }
    }
    }
  }
`
  return useQuery(QUERY_GET_RECOMMENDEDITEMS)
}
