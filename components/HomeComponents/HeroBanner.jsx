import { Stack } from '@chakra-ui/react';
import {
  Text,
  Container,
  Button,
  Heading,
  Box,
  VStack,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HeroBanner = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <Box
      position="relative"
      width="100%"
      mx="auto"
      background={'#FFFFF0'}
      py="4"
    >
      <Container
        overflow="hidden"
        maxW={'6xl'}
        position="relative"
        width={'full'}
        mt={10}
        zIndex={'10'}
      >
        <Stack direction={['column', 'row']}>
          <VStack
            align={'flex-start'}
            pos={'relative'}
            marginEnd={'auto'}
            flexBasis={'50%'}
            flexGrow={0}
            flexShrink={0}
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
            pos={'relative'}
            height={['100px', '350px']}
            width={'100%'}
            h="fit-content"
          >
            <Image
              layout="fill"
              src="/assets/cat-furniture-neko-kagu-gif-1.gif  "
              alt="cat sleeping"
              objectFit="cover"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroBanner;
