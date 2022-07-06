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
import { Animation } from './Animation';

const HeroBanner = () => {
  return (
    <Box position="relative" overflow="hidden" width="100%" mx="auto">
      <Container
        overflow="hidden"
        maxW={'6xl'}
        position="relative"
        width={'full'}
        height={['md', '80']}
        mt={10}
        zIndex={'10'}
        backgroundColor={'#f2bc22'}
      >
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
        <Box
          position="absolute"
          width="100%"
          left={['0', '100']}
          top={['50', '-50', '-300']}
          zIndex="-1"
        >
          <Animation style={{ position: 'absolute' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;
