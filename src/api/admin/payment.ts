import { apiUrl } from '@/constant/admin/admin'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'


//import { gql } from 'node_modules/@apollo/client/core/index'
//import { useQuery } from 'node_modules/@vue/apollo-composable/dist/useQuery'

const usePaymentDetails = () => {

    //console.log('');

const QUERY_PAYMENT_INFO = gql`
query {
    payments {
      id
      amount,
      createdOn,
      orderId,
      isActive,
      
    }
   
  }
`
return useQuery(QUERY_PAYMENT_INFO);
    

}

export default usePaymentDetails;







