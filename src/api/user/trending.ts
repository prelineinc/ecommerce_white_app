import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const GetImageByTrending = () => {
  //console.log('');

  const QUERY_IMAGE_BY_TRENDING = gql`
    query GetImagesByTrending {
      imagesByTrending {
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
  return useQuery(QUERY_IMAGE_BY_TRENDING)
}
