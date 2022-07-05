import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import NextLink from 'next/link';

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
        <VStack align={'flex-start'} flexBasis="100%" width="100%">
          <Heading>Categories</Heading>
          <Grid width={'full'} gridTemplateColumns={'repeat(3, 1fr)'}>
            {categories.map((cat) => (
              <VStack key={cat.id}>
                <Box position={'relative'} h={'16'} w={'16'}>
                  <Image
                    src={cat.image.url}
                    objectFit={'contain'}
                    alt={cat.image.id}
                    layout="fill"
                  />
                </Box>
                <Link
                  href={`/categories/${cat.slug}`}
                  as={NextLink}
                  textTransform={'capitalize'}
                >
                  {cat.title}
                </Link>
              </VStack>
            ))}
          </Grid>
        </VStack>
        <HStack width={'full'}>
          <VStack flexBasis={'50%'}>
            <Box pos={'relative'} h={'64'} width={'full'}>
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
          </VStack>
          <VStack flexBasis={'50%'}>
            <Box pos={'relative'} h={64} width={'full'}>
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
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default HomeCategory;
