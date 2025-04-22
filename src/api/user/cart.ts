import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const GetItemAvailablesBySizeId = (itemid: any, sizeid: any) => {
  const QUERY_GET_ItemAvailable = gql`
    query  GetItemAvailablesBySizeId{
  itemAvailablesBySizeId(itemid: "${itemid}", sizeid: "${sizeid}") {
    id,
    size1,
    size1Count,
    size2,
    size2Count,
    size3,
    size3Count,
    size4,
    size4Count,
    size5,
    size5Count,
    size6,
    size6Count,
    size7,
    size7Count,
    size8,
    size8Count,
    size9,
    size9Count,
    size10,
    size10Count,
  }
}
    `
  return useQuery(QUERY_GET_ItemAvailable)
}
