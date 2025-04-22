import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const VerifyUser = (mobileno: string) => {
  // const QUERY_GET_VERIFY_USER = mobileno !== '' ? gql`
  //     query {
  //        verifyUserByContactNo(mobileno: "${mobileno}"){
  //          id,
  //          contactNo
  //      }
  //    }
  //  `:gql('');
  const QUERY_GET_VERIFY_USER = gql`
  query {
     verifyUserByContactNo(mobileno: "${mobileno}"){
       id,
       contactNo
   }
 }
`;
  return useQuery(QUERY_GET_VERIFY_USER)
}

export const VerifyOtp = (id: any, mobileno: any, otp: string) => {
  const QUERY_GET_VERIFY_OTP = gql`
  query {
          verifyUserByOtp(userid: "${id}", mobileno: "${mobileno}", otp: "${otp}"){
          id,
          name,
          email,
          contactNo,
          password
      }
  }
`
  return useQuery(QUERY_GET_VERIFY_OTP)
}

export const CreateUser = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(userdetails: $user)
  }
`
