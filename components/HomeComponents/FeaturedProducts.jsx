import { Flex, Heading, Button, Stack } from '@chakra-ui/react';

import Link from 'next/link';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box } from '@chakra-ui/react';
import SmallProductCard from '../widgets/SmallProductCard';

const FeaturedProducts = ({ products }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });

  return (
    <Box>
      <Heading textAlign={'center'} my={8}>
        Featured Products
      </Heading>
      <Box overflow="hidden" ref={emblaRef}>
        <Flex gap={4}>
          {products.map((product) => (
            <SmallProductCard product={product} id={'60'} key={product.id} />
          ))}
        </Flex>
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
