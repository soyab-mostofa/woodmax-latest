import { gql } from '@apollo/client';
import React from 'react';
import client from '../../features/Apollo';
import { Stack } from '@chakra-ui/react';

import ProductCard from '../../components/ProductCard';

const AllProductsPage = (props) => {
  const products = props.data.products;

  return (
    <Stack direction={['column', 'row']}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Stack>
  );
};

export async function getStaticProps() {
  const data = await client.query({
    query: gql`
      query getProducts {
        products {
          id
          title
          available
          description
          price
          productImage {
            url
            id
            stage
            mimeType
          }
        }
      }
    `,
  });

  return {
    props: data,
  };
}

export default AllProductsPage;
