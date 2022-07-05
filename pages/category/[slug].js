import client from '../../features/Apollo';
import { gql } from '@apollo/client';
import { GET_CATEGORY_BY_SLUG } from '../../features/queries/getCategoryByName';

const CategoryPage = ({ category }) => {
  if (!category) return null;
  console.log(category);
  return <h1>category</h1>;
};

export default CategoryPage;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getCategoryIDs {
        categories {
          slug
        }
      }
    `,
  });

  const paths = data.categories.map((c) => ({
    params: { slug: c.slug },
  }));

  return { paths: paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const { data } = await client.query({
    query: GET_CATEGORY_BY_SLUG,
    variables: { slug },
  });

  return {
    props: {
      category: data.category,
    },
    revalidate: 10,
  };
}
