import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const GetCategoryType = () => {
  const QUERY_GET_CATEGORYTYPE = gql`
    query GetCategoryType {
      categoryType {
        id
        name
        isActive
      }
    }
  `
  return useQuery(QUERY_GET_CATEGORYTYPE)
}