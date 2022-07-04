import { HStack, Link } from '@chakra-ui/react';
import { InputGroup } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { InputRightElement } from '@chakra-ui/react';
import { Show } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Container, Box } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { BsCart, BsPerson, BsSearch } from 'react-icons/bs';

const HomeLinks = [
  {
    name: 'new',
    link: '/new',
    sub: [
      { name: 'Lorem Ipsum', link: 'http://lorem-ipsum.com/' },
      { name: 'Lorem Ipsum', link: 'http://lorem-ipsum.com/' },
      { name: 'Lorem Ipsum', link: 'http://lorem-ipsum.com/' },
      { name: 'Lorem Ipsum', link: 'http://lorem-ipsum.com/' },
    ],
  },
  { name: 'for home', link: '/home' },
  { name: 'for office', link: '/office' },
  { name: 'kids furniture', link: '/kids' },
  { name: 'hobby', link: '/hobby' },
  { name: 'on sale', link: '/sale' },
  { name: 'upcoming', link: '/upcoming' },
];

const NavDropdown = ({ items }) => {
  return (
    <Box>
      {items.map((item, i) => (
        <Link key={i}>{item}</Link>
      ))}
    </Box>
  );
};

const NavLink = ({ link }) => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <NextLink href={link.link}>
        <Link
          onMouseEnter={() => setShowMenu(false)}
          textTransform={'uppercase'}
        >
          {link.name}
        </Link>
      </NextLink>
    </>
  );
};

const Header = () => {
  return (
    <Box>
      <Container maxW="4xl">
        <Stack direction={['row']} align="center" justify="space-between">
          <Link href="/">
            <Box pos={'relative'} h={24} width={24}>
              <Image layout="fill" alt="logo" src="/w-logo-main.svg" />
            </Box>
          </Link>
          <HStack spacing={5}>
            <InputGroup>
              <Input size="md" placeholder="Search for furniture" />
              <InputRightElement>
                <BsSearch size={18} />
              </InputRightElement>
            </InputGroup>
            <Link href="/account">
              <BsPerson size={20} />
            </Link>
            <Link href="/account">
              <BsCart size={20} />
            </Link>
          </HStack>
        </Stack>
        <Show above="md">
          <HStack justify={'center'} mt={3}>
            {HomeLinks.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </HStack>
        </Show>
      </Container>
    </Box>
  );
};

export default Header;
