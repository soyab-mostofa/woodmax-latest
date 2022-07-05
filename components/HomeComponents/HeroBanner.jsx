import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
    <Container
      overflow="hidden"
      maxW={'6xl'}
      position="relative"
      width={'full'}
      height={['md', '80']}
      mt={10}
      backgroundColor={'#EFEFEF'}
    >
      <Box
        position="absolute"
        mt={{ base: 40, sm: 0 }}
        height={'full'}
        width={{ base: 'md', sm: 'full' }}
        transform={'auto'}
        translateX={{ base: '-40vw', sm: '0' }}
        translateY={{ base: -10, sm: 0 }}
      >
        <Image
          priority
          src="/assets/hero-image.jpg"
          alt="hero image"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <VStack
        align={'flex-start'}
        pos={'relative'}
        marginEnd={'auto'}
        maxWidth={'64'}
        spacing={8}
        ms={{ base: 6, md: 14 }}
        pt={'7'}
      >
        <Heading
          as={motion.h2}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition="0.1s linear"
          fontSize={'2xl'}
        >
          Furniture
        </Heading>
        <Text
          as={motion.p}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition="0.1s linear"
        >
          Discover our expanded assortment of over 100 furniture pieces by
          designers who are represented in Woodmax collection.
        </Text>
        <Link href={'/products/all-products'}>
          <Button
            as={motion.button}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            variant={'outline'}
            borderColor="blackAlpha.900"
          >
            Shop All Furniture
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default HeroBanner;
