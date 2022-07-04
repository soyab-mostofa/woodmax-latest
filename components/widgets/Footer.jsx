import {
  Container,
  Text,
  Box,
  Heading,
  VStack,
  Stack,
  HStack,
} from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <Container maxWidth={'4xl'}>
      <Stack direction={['column', 'row']} py={8} justify={'space-between'}>
        <VStack align={'center'}>
          <Link href="/">
            <Box pos={'relative'} mx={['auto', 'unset']} h={'36'} width={'36'}>
              <Image layout="fill" alt="logo" src="/w-logo-main.svg" />
            </Box>
          </Link>
          <HStack spacing={4}>
            <Link href="/">
              <BsFacebook size={24} />
            </Link>
            <Link href="/">
              <BsInstagram size={24} />
            </Link>
            <Link href="/">
              <BsPinterest size={24} />
            </Link>
            <Link href="/">
              <BsLinkedin size={24} />
            </Link>
          </HStack>
        </VStack>
        <VStack align={'flex-start'}>
          <Heading size={20}>Call Center</Heading>
          <Text>+8801865048207</Text>
        </VStack>

        <VStack align={'flex-start'}>
          <Heading size={20}>Company</Heading>
          <Text>About Us</Text>
          <Text>Campaigns</Text>
          <Text>Sustainability Commitment</Text>
        </VStack>

        <VStack align={'flex-start'}>
          <Heading size={20}>Explore</Heading>
          <Text>Services</Text>
          <Text>FAQs</Text>
          <Text>Loyalty Program</Text>
          <Text>Contact Us</Text>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Footer;
