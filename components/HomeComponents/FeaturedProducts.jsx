import { Container } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import ProductCard from '../ProductCard';
import useEmblaCarousel from 'embla-carousel-react';
import { Box } from '@chakra-ui/react';

const FeaturedProducts = ({ products }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });

  return (
    <Box>
      <Heading textAlign={'center'} my={8}>
        Featured Products
      </Heading>
      <Box overflow="hidden" ref={emblaRef}>
        <Stack spacing={4} direction={['row']}>
          {products.map((product) => (
            <ProductCard product={product} mw={'60'} key={product.id} />
          ))}
        </Stack>
      </Box>
      <Flex justify="center" mt={8}>
        <Link href={'/products/all-products'}>
          <Button variant="outline" mx={'auto'}>
            See More Products
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default FeaturedProducts;
