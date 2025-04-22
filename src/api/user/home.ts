import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const useGetBrand = () => {
  const QUERY_GET_BRAND = gql`
    query GetBrands {
      brands {
        id
        name
        logo
        description
      }
    }
  `
  return useQuery(QUERY_GET_BRAND)
}

// export const VerifyUser = (mobileno: string) => gql`
//        query {
//           verifyUserByContactNo(mobileno: "${mobileno}"){
//             id,
//             name,
//             email,
//             contactNo
//           }
//       }
//     `;

export const useGetBrandSearch = (name: any) => {
  //console.log('name',name );
  const QUERY_GET_BRAND_BY_NAME = gql`
   query GetBrandsByName {
    brandsByName (keyvalue: "${name}"){
      id
      name
      logo
      description
    }
  }
`
  return useQuery(QUERY_GET_BRAND_BY_NAME)
}

export const GetImageByHome = () => {
  const QUERY_GET_BRAND = gql`
    query GetImagesByHome {
      imagesByHome {
        id
        path
        home
        banner
        offer
        trending
        discount
        category
        categoryId
        itemId
        categoryBanner
        createdOn
        price
        section
        order
        categoryType
        brandId
      }
    }
  `
  return useQuery(QUERY_GET_BRAND)
}
