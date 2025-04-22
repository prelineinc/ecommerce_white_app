import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const GetAddressByUser = (id: any) => {
  const QUERY_ADDRESS_BY_USER = gql`
query  GetAddressByUserId{
  addressByUserId(userid: "${id}") {
      id,
      receiverName,
      receiverMobileNo,
      completeAddress,
      locality,
      city,
      state,
      pincode,
      isHome,
      isOther,
      isActive,
  }
}`
  return useQuery(QUERY_ADDRESS_BY_USER)
}

export const GetAddressById = (id: any) => {
  const QUERY_ADDRESS_BY_ID = gql`
  query  GetAddressById{
    addressById(id: "${id}") {
        id,
        receiverName,
        receiverMobileNo,
        completeAddress,
        locality,
        city,
        state,
        pincode,
        isHome,
        isOther,
        isActive,
    }
  }
`
  return useQuery(QUERY_ADDRESS_BY_ID)
}
export const CreateAddress = gql`
  mutation CreateAddress($address: AddressInput!) {
    createAddress(address: $address)
  }
`

export const UpdateAddress = gql`
  mutation UpdateAddress($address: AddressInput!) {
    updateAddress(address: $address)
  }
`
