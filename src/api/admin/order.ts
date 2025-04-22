import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const orderDetails = () => {
  const QUERY_COMPANY_INFO = gql`
    query {
      orders {
        id
        itemId
        isDelivered
        isShipped
        isCancelled
        isReturned
        addressId
        createdOn
      }
    }
  `
  return useQuery(QUERY_COMPANY_INFO)
}

export default orderDetails
