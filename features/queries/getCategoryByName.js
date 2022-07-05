import { gql } from '@apollo/client';

export const GET_CATEGORY_BY_SLUG = gql`
  query getCategoryBySlug($slug: String!) {
    category(where: { slug: $slug }) {
      id
      title
      products {
        id
      }
    }
  }
`;
