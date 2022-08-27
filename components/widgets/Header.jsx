import {
  HStack,
  Link,
  Input,
  Stack,
  Show,
  Container,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';

import Image from 'next/image';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsCart, BsChevronBarDown, BsPerson, BsSearch } from 'react-icons/bs';
import ClientOnly from '../ClientOnly';
import { GET_CATEGORIES } from '../../features/queries/getCategories';
import DrawerExample from './Drawer';
import { useQuery } from '@apollo/client';
import { Slide } from '@chakra-ui/react';

const NavDropdown = ({ items }) => {
  return (
    <Box>
      {items.map((item, i) => (
        <Link key={i}>{item}</Link>
      ))}
    </Box>
  );
};

const RenderLinks = () => {};
const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        setShow(false);
        // if scroll up show the navbar
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  return (
    <Box pos={'fixed'} zIndex={200} width={'100%'} height={20}>
      {show && (
        <Box
          bg={'gray.200'}
          pos={'fixed'}
          zIndex={200}
          width={'100%'}
          height={20}
        >
          <Container maxW="6xl">
            <Stack
              direction={['row']}
              align="center"
              justify="space-between"
              py={'2'}
              width={'full'}
              height={'full'}
            >
              <Link href="/">
                <Box pos={'relative'} h={20} m={'-2'} width={20}>
                  <Image layout="fill" alt="logo" src="/w-logo-main.svg" />
                </Box>
              </Link>
              <Show above="md">
                <HStack spacing={4}>
                  <HStack>
                    <Menu>
                      <MenuButton
                        fontWeight="bold"
                        as={Link}
                        variant={'ghost'}
                        transition="all 0.2s"
                      >
                        Categories
                      </MenuButton>
                      <ClientOnly>
                        <MenuList position="relative" zIndex="100">
                          {loading ? (
                            <> </>
                          ) : (
                            <>
                              {data?.categories.map((c) => (
                                <MenuItem textTransform="capitalize" key={c.id}>
                                  <Link href={`/category/${c.slug}`}>
                                    {c.title}
                                  </Link>
                                </MenuItem>
                              ))}
                            </>
                          )}
                        </MenuList>
                      </ClientOnly>
                    </Menu>
                    <NextLink href={`/products/all-products`}>
                      <Link fontWeight="bold">Products</Link>
                    </NextLink>
                    <NextLink href={`/products/blogs`}>
                      <Link fontWeight="bold">Blogs</Link>
                    </NextLink>
                  </HStack>
                  <Link href="/account">
                    <BsPerson size={30} />
                  </Link>
                  <Link href="/account">
                    <BsCart size={30} />
                  </Link>
                </HStack>
              </Show>

              <Show below="md">
                <DrawerExample categories={data?.categories} />
              </Show>
            </Stack>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default Header;
