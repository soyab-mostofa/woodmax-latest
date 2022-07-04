import { gql } from '@apollo/client';

export default gql`
  query getProducts {
    products {
      title
      available
      price
      id
      rating
      rooms {
        id
      }
      slug
      description
      productImage {
        url
        id
      }
    }
  }
`;
