import { apiUrl } from '@/constant/admin/admin'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'


//import { gql } from 'node_modules/@apollo/client/core/index'
//import { useQuery } from 'node_modules/@vue/apollo-composable/dist/useQuery'

export  const useItemDetails = () => {

    //console.log('');

const QUERY_ITEM_INFO = gql`
query  {
     items {
    amount
    brandId
    categoryId
    categoryTypeId
    createdOn
    description
    fit
    id
    imagePath
    isActive
    isExchange
    isToday
    material
    modifiedOn
    mrp
    name
    offer
    productDetail
    qualityChecked
    returnDay
    sizeChartId
    categoryType {
      createdOn
      id
      isActive
      modifiedOn
      name
    }
    itemAvailables {
      createdOn
      id
      isActive
      itemId
      modifiedOn
      size1
      size10
      size10Count
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
      totalCount
    }
    sizeChart {
      brandSize
      bust
      common
      createdOn
      front
      hip
      id
      inseam
      isActive
      isGreater6
      isLess1
      isLess6
      kidsHeight
      kidsWeight
      modifiedOn
      outseam
      rise
      size
      skirt
      waist
    }
  }
  }
`
return useQuery(QUERY_ITEM_INFO);
    

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
        productDetail
        isToday
        gst
        buyPrice
        buyPercentage
        viewCount
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
        isActive,
        isRental,
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
            common
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
            common
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
            common
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
            common
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
            common
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
            common
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
            common
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
            common
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
            common
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
            common
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
        buyPrice,
        buyPercentage,
        qualityChecked,
        returnDay,
        isExchange,
        isRental,
        productDetail,
        createdOn,
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
        }
      }
    }
  }
`
  return useQuery(QUERY_ITEM_INFO)
}

//default useItemDetails;

export const useGetSizeChart = () => {
  const QUERY_GET_SIZECHART = gql`
    query GetSizeCharts {
      sizeCharts {
        id
        size
        brandSize
        common
      }
    }
  `
  return useQuery(QUERY_GET_SIZECHART)
}

export const useGetSizeChartByName = (name: string) => {
  const QUERY_GET_SIZE = gql`
    query GetSizeChartsByName {
      sizeChartsByName(name: ${name}) {
        id
        size
        brandSize
        common
      }
    }
  `
  return useQuery(QUERY_GET_SIZE)
}


export  const useItemDetailsByPage = (page:number) => {

  //console.log('');

const QUERY_ITEM_INFO = gql`
query  {
   itemsByPage(page: ${page}) {
  amount
  brandId
  categoryId
  categoryTypeId
  createdOn
  description
  fit
  id
  imagePath
  isActive
  isExchange
  isToday
  material
  modifiedOn
  mrp
  name
  offer
  productDetail
  qualityChecked
  returnDay
  sizeChartId
  categoryType {
    createdOn
    id
    isActive
    modifiedOn
    name
  }
  itemAvailables {
    createdOn
    id
    isActive
    itemId
    modifiedOn
    size1
    size10
    size10Count
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
    totalCount
  }
  sizeChart {
    brandSize
    bust
    common
    createdOn
    front
    hip
    id
    inseam
    isActive
    isGreater6
    isLess1
    isLess6
    kidsHeight
    kidsWeight
    modifiedOn
    outseam
    rise
    size
    skirt
    waist
  }
}
}
`
return useQuery(QUERY_ITEM_INFO);
  

}

