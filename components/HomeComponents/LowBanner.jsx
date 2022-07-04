import { Text, Flex } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import { BsTruck } from 'react-icons/bs';

const LowBanner = () => {
  return (
    <HStack
      justify={'center'}
      p={10}
      spacing={5}
      my={10}
      backgroundColor={'blackAlpha.900'}
      color={'whiteAlpha.900'}
    >
      <VStack align={'flex-start'}>
        <Heading size={'sm'}>Free Shipping Inside Dhaka</Heading>
        <Text>For every order</Text>
      </VStack>
      <BsTruck size={60} />
    </HStack>
  );
};

export default LowBanner;
