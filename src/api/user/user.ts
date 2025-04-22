import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const UpdateUser = gql`
  mutation UpdateUser($user: UserInput!) {
    updateUser(userdetails: $user)
  }
`

export const useGetUserById = (useid: any) => {
  const QUERY_GET_USER_BY_ID = gql`
  query  GetUserById {
    userById(id: "${useid}") {
    id,
    name,
    email,
    contactNo
    password
  }
  }
`
  return useQuery(QUERY_GET_USER_BY_ID)
}
