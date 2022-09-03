import { gql } from '@apollo/client';
import React, { useState } from 'react';
import client from '../../features/Apollo';
import { Stack, Container, Flex, GridItem } from '@chakra-ui/react';
import getAllProducts from '../../features/queries/getAllProducts';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/widgets/FilterBar';
import { removeDuplicates } from '../../helpers/removeDuplicates';
const AllProductsPage = (props) => {
  const products = props.data.products;
  const categories = products.map((p) => p.categories);
  const mergeCategories = categories.flat(1);
  const allCategories = removeDuplicates(mergeCategories.map((c) => c.title));
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <Container maxW={'8xl'} mt={4}>
      {/* <FilterBar allCategories={allCategories} /> */}
      <Flex flexWrap={'wrap'} justify="center" gap={'4'}>
        {filteredProducts.map((product) => (
          <GridItem key={product.id}>
            <ProductCard product={product} />
          </GridItem>
        ))}
      </Flex>
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
