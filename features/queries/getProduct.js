import { gql } from '@apollo/client';

export default gql`
  query getProduct($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      description
      available
      productImage {
        id
        url
      }
      rating
      categories {
        ... on Category {
          title
        }
      }
    }
  }
`;
