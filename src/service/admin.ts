import gql from 'graphql-tag'

export const GetBrand = gql`
  query GetBrands {
    brands {
      id
      name
      logo
      description
    }
  }
`;
