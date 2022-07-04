import { gql } from '@apollo/client';
import React from 'react';
import client from '../../features/Apollo';
import { Stack, Container, Grid, GridItem } from '@chakra-ui/react';
import getAllProducts from '../../features/queries/getAllProducts';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/widgets/FilterBar';

const AllProductsPage = (props) => {
  const products = props.data.products;

  return (
    <Container maxW={'4xl'} mt={4}>
      <FilterBar />
      <Grid
        gap={'4'}
        justifyContent={'center'}
        templateColumns={{ base: '1fr, 1fr', md: '1fr 1fr 1fr 1fr' }}
        width="100%"
      >
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
    query: getAllProducts,
  });

  return {
    props: data,
    revalidate: 10,
  };
}

export default AllProductsPage;
