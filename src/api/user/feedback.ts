import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

export const GetFeedBack = (orderid: any, itemid: any, userid: any) => {
  const QUERY_GET_FEEDBACK = gql`
  query GetFeedbackByOrderId {
    feedbackByOrderId(orderid: "${orderid}", itemid: "${itemid}", userid: "${userid}") {
        id,
        rating,
        comments
    }
  }
`
  return useQuery(QUERY_GET_FEEDBACK)
}

export const CreateFeedBack = gql`
  mutation CreateFeedback($feedback: FeedbackInput!) {
    createFeedback(feedback: $feedback)
  }
`

export const GetFeedBackByItem = (itemId: any) => {
  const QUERY_GET_FEEDBACK_BY_ITEM = gql`
  query GetFeedbackByOrderId {
    feedbackByItemId(itemid: "${itemId}") {
        id,
        itemId,
        rating,
        comments,
        createdOn,
        user {
        id,
        name
        }
    }
  }
`
  return useQuery(QUERY_GET_FEEDBACK_BY_ITEM)
}
