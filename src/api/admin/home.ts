import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const userDetails = () => {
  const QUERY_COMPANY_INFO = gql`
    query {
      usersCountByAdmin {
        totalCount
        todaysCount
        percentageChanges
      }
    }
  `
  return useQuery(QUERY_COMPANY_INFO)
}

export const itemDetails = () => {
  const QUERY_COMPANY_INFO = gql`
    query {
      itemsCountByAdmin {
        todaysTrendCount
        todaysRentalCount
        userViewCount
        mostViewCount
        todaysTrendPercentage
        todaysRentalPercentage
        userViewPercentage
        mostViewPercentage
      }
    }
  `
  return useQuery(QUERY_COMPANY_INFO)
}

export const orderDetails = () => {
  const QUERY_ITEM_INFO = gql`
    query {
      paymentsCountByAdmin {
        totalCount
        todaysCount
        todaysCodCount
        todaysRazorPayCount
        todaysDeliveryCount
        totalSale
        todaysSales
        percentageChanges
        todaysCodPrecentage
        todaysRazorPayPercentage
        todaysDeliveryPercentage
        totalSalesPercentage
        todaysSalePercentage
      }
    }
  `
  return useQuery(QUERY_ITEM_INFO)
}
