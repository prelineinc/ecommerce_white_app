
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { useMutation } from '@apollo/client';

export const useGetOrderid = () => {
  //console.log('');

  const QUERY_ORDER_INFO = gql`
  query RazorOrderId($amount: String!) {
    razorOrderId(amount: $amount)
  }
`;
  return useMutation(QUERY_ORDER_INFO)
}

export const useCreateOrder = (orderId:string) => {

     const QUERY_ORDER_INFO = orderId !== '' ? gql`
    mutation CreateOrder($order: OrderInput!) {
      createOrder(order: $order)
    }
  ` : gql('');
    return useMutation(QUERY_ORDER_INFO)
  }

  export const useCreateOrderReturn = (orderId:string) => {

    const QUERY_ORDER_INFO = orderId !== '' ? gql`
    mutation CreateOrderReturn($orderreturn: OrderReturnInput!) {
      createOrderReturn(orderreturn: $orderreturn)
    }
  ` : gql('');
   return useMutation(QUERY_ORDER_INFO)
 }

 export const useGetOrderByUser = (userid: any)  => {

    const QUERY_ORDER_INFO = userid !== '' ? gql`
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
          createdOn,
          modifiedOn
      }
    }
   ` : gql('');
   return useQuery(QUERY_ORDER_INFO)
 }


export const UpdateOrderCancelled = gql`
 mutation UpdateOrderCancelled($order: OrderInput!) {
   updateOrderCancelled(order: $order)
 }
`;


export const useGetOrderById = (id: any)  => {

    const QUERY_ORDER_INFO = id !== '' ? gql`
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
          createdOn,
          modifiedOn
      }
    }
   ` : gql('');
   return useQuery(QUERY_ORDER_INFO)
 }

 export const GetPaymentByOrder = (id: any) => {
  const QUERY_PAYMENT_BY_ORDER = gql`
  query PaymentByOrderId {
    paymentByOrderId(orderid: "${id}") {
    id
    paymentOrderId
    transactionId
    order {
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
        createdOn,
        modifiedOn
      }
    }
  }
`
  return useQuery(QUERY_PAYMENT_BY_ORDER)
}