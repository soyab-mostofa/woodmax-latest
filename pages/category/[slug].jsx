import client from '../../features/Apollo';
import { gql } from '@apollo/client';
import { GET_CATEGORY_BY_SLUG } from '../../features/queries/getCategoryByName';
import { Heading, Button, Flex, Container } from '@chakra-ui/react';
import ProductCard from '../../components/ProductCard';

import Link from 'next/link';

const CategoryPage = ({ category }) => {
  if (!category) return null;

  if (category.products.length === 0)
    return (
      <Container height={'48'} textAlign={'center'}>
        <Heading textAlign={'center'} mt={40} mb={'8'} color={'blackAlpha.900'}>
          No {category.title.toUpperCase()} found
        </Heading>

        <Link href="http://localhost:3000/products/all-products">
          <Button variant={'link'}>Go to all products</Button>
        </Link>
      </Container>
    );

  return (
    <Container maxW={'7xl'} pt={4}>
      <Heading py={4}>{category.title}</Heading>
      <Flex
        flexWrap={'wrap'}
        justify={{ base: 'center', md: 'flex-start' }}
        gap="4px"
      >
        {category.products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </Flex>
    </Container>
  );
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
