import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const contents = [
  { name: 'chairs', slug: '/chairs' },
  { name: 'sofas', slug: '/sofas' },
  { name: 'Tables', slug: '/Tables' },
  { name: 'Beds', slug: '/Beds' },
  { name: 'Vanity', slug: '/Vanity' },
];

const HomeCategory = () => {
  return (
    <Container maxW={'6xl'} pt={'12'}>
      <Stack direction={['column', 'row']} spacing="24px">
        <VStack align={'flex-start'} flexBasis="100%">
          <Heading>Categories</Heading>
          {contents.map((cat) => (
            <Link textTransform={'capitalize'} key={cat.name}>
              {cat.name}
            </Link>
          ))}
        </VStack>
        <Box width={'full'}>
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
        </Box>
        <Box width={'full'}>
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
        </Box>
      </Stack>
    </Container>
  );
};

export default HomeCategory;
