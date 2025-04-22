import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const GetCategory = () => {
  const QUERY_GET_CATEGORY = gql`
    query GetCategory {
      category {
        id
        name
        categoryTypeId
        imagePath
      }
    }
  `
  return useQuery(QUERY_GET_CATEGORY)
}

export const GetImagesByCategoryBanner = () => {
  const QUERY_IMAGES_BY_CATEGORY = gql`
    query GetImagesByCategoryBanner {
      imagesByCategoryBanner {
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
      }
    }
  `
  return useQuery(QUERY_IMAGES_BY_CATEGORY)
}
