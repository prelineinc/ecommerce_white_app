import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const useUserOrderDetails = () => {
  //console.log('');

  const QUERY_ORDER_INFO = gql`
    query {
      orders {
        id
        itemId
        isDelivered
        createdOn
      }
    }
  `
  return useQuery(QUERY_ORDER_INFO)
}

export const CreateOrder = gql`
  mutation CreateOrder($order: OrderInput!) {
    createOrder(order: $order)
  }
`

export const GetOrderid = gql`
  query RazorOrderId($amount: String!) {
    razorOrderId(amount: $amount)
  }
`

export const GetOrderByUser = (userid: any) => {
  //console.log('');

  const QUERY_ORDER_BY_USER = gql`
  query OrdersByUserId {
    ordersByUserId(userid: "${userid}") {
        id
        itemId,
        userId,
        addressId,
        totalCount,
        totalAmount,
        finalAmount,
        deliveryCharge,
        expectedDelivery,
        isShipped,
        isCancelled,
        isDelivered,
        isReturned,
        isExchage,
        isActive,
        rentDays,
        fromDate,
        toDate,
        expectedReturn,
        isExtended,
        isRental,
        createdOn,
        modifiedOn
    }
  }
`
  return useQuery(QUERY_ORDER_BY_USER)
}
export const UpdateOrderCancelled = gql`
  mutation UpdateOrderCancelled($order: OrderInput!) {
    updateOrderCancelled(order: $order)
  }
`

export const GetOrderById = (id: any) => {
  //console.log('');

  const QUERY_ORDER_BY_ID = gql`
  query OrdersById {
    ordersById(id: "${id}") {
        id
        itemId,
        userId,
        addressId,
        totalCount,
        totalAmount,
        finalAmount,
        deliveryCharge,
        expectedDelivery,
        isShipped,
        isCancelled,
        isDelivered,
        isReturned,
        isExchage,
        isActive,
        rentDays,
        fromDate,
        toDate,
        expectedReturn,
        isExtended,
        isRental,
        advance
        createdOn,
        modifiedOn
    }
  }
`
  return useQuery(QUERY_ORDER_BY_ID)
}
export const CreateOrderReturn = gql`
  mutation CreateOrderReturn($orderreturn: OrderReturnInput!) {
    createOrderReturn(orderreturn: $orderreturn)
  }
`
