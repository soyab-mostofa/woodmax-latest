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
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  return (
    <Box>
      <Container maxW="6xl" borderBottom={'1px'}>
        <Stack
          direction={['row']}
          align="center"
          justify="space-between"
          py={'2'}
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
                              {c.title}
                            </MenuItem>
                          ))}
                        </>
                      )}
                    </MenuList>
                  </ClientOnly>
                </Menu>
                <NextLink href={`/categories`}>
                  <Link fontWeight="bold">Products</Link>
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
  );
};

export default Header;
