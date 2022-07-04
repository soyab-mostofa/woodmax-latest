import { Container } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import ProductCard from '../ProductCard';

const FeaturedProducts = ({ products }) => {
  return (
    <Container maxW={'4xl'}>
      <Heading textAlign={'center'} my={8}>
        Featured Products
      </Heading>
      <Stack direction={['column', 'row']}>
        {products.map((product) => (
          <ProductCard product={product} mw={'60'} key={product.id} />
        ))}
      </Stack>
      <Flex justify="center" mt={8}>
        <Link href={'/products/all-products'}>
          <Button variant="outline" mx={'auto'}>
            See More Products
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default FeaturedProducts;
