import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import NextLink from 'next/link';
import { motion } from 'framer-motion';

const contents = [
  { name: 'chairs', slug: '/chairs' },
  { name: 'sofas', slug: '/sofas' },
  { name: 'Tables', slug: '/Tables' },
  { name: 'Beds', slug: '/Beds' },
  { name: 'Vanity', slug: '/Vanity' },
];

const HomeCategory = ({ categories }) => {
  return (
    <Container maxW={'6xl'} pt={'12'}>
      <VStack spacing="24px" width={'full'}>
        <VStack align={'flex-start'} flexBasis="100%" width="100%" mb={'8'}>
          <Heading
            as={motion.h2}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition="0.1s linear"
            alignSelf={'center'}
            mb={'8'}
          >
            Categories
          </Heading>
          <Grid
            width={'full'}
            gap={'30px'}
            gridTemplateColumns={[
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
          >
            {categories.map((cat) => (
              <VStack key={cat.id}>
                <NextLink href={`/${cat.__typename.toLowerCase()}/${cat.slug}`}>
                  <VStack textAlign="center">
                    <Box
                      as={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition="0.1s linear"
                      position={'relative'}
                      h={['16', '24', '36']}
                      w={['16', '24', '36']}
                      borderRadius={'50%'}
                      overflow={'hidden'}
                    >
                      <Image
                        src={cat.image.url}
                        objectFit={'cover'}
                        alt={cat.image.id}
                        layout="fill"
                      />
                    </Box>

                    <Link
                      marginTop={'10'}
                      textTransform={'capitalize'}
                      textAlign="center"
                    >
                      {cat.title}
                    </Link>
                  </VStack>
                </NextLink>
              </VStack>
            ))}
          </Grid>
        </VStack>
        <HStack width={'full'}>
          <VStack flexBasis={'50%'}>
            <NextLink href={'/category/vanity'}>
              <Box width={'full'}>
                <Box
                  as={motion.div}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  transition="0.1s linear"
                  pos={'relative'}
                  h={'64'}
                  width={'full'}
                >
                  <Image
                    layout="fill"
                    alt="logo"
                    src="/assets/images/Vanity1.jpeg"
                    objectFit="cover"
                  />
                </Box>

                <Link color={'blackAlpha.900'}>
                  <Text mt="2">Shop for Vanity</Text>
                </Link>
              </Box>
            </NextLink>
          </VStack>
          <VStack flexBasis={'50%'}>
            <NextLink href={'/category/storage'}>
              <Box width={'full'}>
                <Box
                  as={motion.div}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  transition="0.1s linear"
                  pos={'relative'}
                  h={64}
                  width={'full'}
                >
                  <Image
                    layout="fill"
                    alt="logo"
                    src="/assets/images/Storage1.jpg"
                    objectFit="cover"
                  />
                </Box>
                <Link color={'blackAlpha.900'}>
                  <Text mt="2">Shop for Storage</Text>
                </Link>
              </Box>
            </NextLink>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default HomeCategory;
