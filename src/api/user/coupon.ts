import { useQuery } from "@vue/apollo-composable"
import gql from "graphql-tag"

export const GetValidUserCoupon = (userid: any) => {
    const QUERY_GET_COUPON = gql`
    query  GetValidUserCoupon{
      couponsByUser(userid: "${userid}") {
        id
        name
        description
        offer
        code
        isActive
        createdOn
        validDate
        categoryTypeId
      }
    }
  `
    return useQuery(QUERY_GET_COUPON)
  }