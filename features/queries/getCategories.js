import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories {
    categories(first: 50) {
      id
      title
      slug
      image {
        id
        url
      }
    }
  }
`;
