import { gql } from '@apollo/client';

export default gql`
  query getProducts {
    products(first: 100) {
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
      categories {
        ... on Category {
          id
          title
        }
      }
    }
  }
`;
