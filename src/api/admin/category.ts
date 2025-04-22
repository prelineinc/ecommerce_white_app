import { apiUrl } from '@/constant/admin/admin'
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'


//import { gql } from 'node_modules/@apollo/client/core/index'
//import { useQuery } from 'node_modules/@vue/apollo-composable/dist/useQuery'

const useCategoryDetails = () => {

    //console.log('');

const QUERY_CATEGORY_INFO = gql`
query {
    category {
      id
      name
      description
      imagePath
      isActive
      categoryTypeId
      categoryType {
      id
      name
    }
    }
   
  }
`
return useQuery(QUERY_CATEGORY_INFO);
    

}

export default useCategoryDetails;

export const GetCategoryById = (id: any) => {
  const QUERY_GET_CATEGORY = gql`
    query GetCategoryById  {
      categoryById (id: "${id}") {
    id
    name
    description
    imagePath
    isActive
    categoryTypeId
    categoryType {
    id
    name
  }
  }
    }
  `
  return useQuery(QUERY_GET_CATEGORY)
}
