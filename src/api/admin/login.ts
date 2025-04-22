import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const LoginDetails = () => {
  const useGetUserDetails = () => {
    const QUERY_COMPANY_INFO = gql`
      query orders {
        orders {
          createdOn
          itemId
        }
      }
    `
    const { result, loading, error } = useQuery(QUERY_COMPANY_INFO)
  }
  return useGetUserDetails
}

export default LoginDetails
