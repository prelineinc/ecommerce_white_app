import { apiUrl } from '@/constant/admin/admin'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import LoginDetails from './login'

//import { gql } from 'node_modules/@apollo/client/core/index'
//import { useQuery } from 'node_modules/@vue/apollo-composable/dist/useQuery'

const useBrandDetails = () => {

    //console.log('');

const QUERY_BRAND_INFO = gql`
query {
    brands {
      id,
      name,
      logo,
      description,
      isActive
    }
  }
`
return useQuery(QUERY_BRAND_INFO);
    

}

export default useBrandDetails;

export const GetBrandById = (id: any) => {
  const QUERY_GET_BRAND = gql`
    query GetBrandsById  {
      brandsById (id: "${id}") {
        id
        name
        logo
        description
        isActive
      }
    }
  `
  return useQuery(QUERY_GET_BRAND)
}
