import {} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import NextLink from 'next/link';
import { VStack } from '@chakra-ui/react';
function DrawerExample({ links }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} variant="link" onClick={onOpen}>
        <AiOutlineMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack textTransform={'capitalize'}>
              {links.map((link) => (
                <NextLink key={link.name} href="/">
                  <Link>{link.name}</Link>
                </NextLink>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerExample;
