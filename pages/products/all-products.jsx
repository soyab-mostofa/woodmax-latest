import { gql } from '@apollo/client';
import React from 'react';
import client from '../../features/Apollo';
import { Stack, Container, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/widgets/FilterBar';

const AllProductsPage = (props) => {
  const products = props.data.products;

  return (
    <Container maxW={'4xl'} mt={4}>
      <FilterBar />
      <Grid autoColumns={'50%'} templateColumns={'1fr 1fr'} width="100%">
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export async function getStaticProps() {
  const data = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: data,
    revalidate: 10,
  };
}

export default AllProductsPage;
