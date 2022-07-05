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
  Link,
  Spinner,
  Scale,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import NextLink from 'next/link';
import { VStack } from '@chakra-ui/react';
function DrawerExample({ categories }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} variant="link" onClick={onOpen}>
        <AiOutlineMenu size={30} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={'blackAlpha.900'}>
          <DrawerCloseButton color={'whiteAlpha.900'} size={'lg'} />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={'28'}>
            {categories ? (
              <VStack spacing={'4'} textTransform={'capitalize'}>
                {categories.map((category) => {
                  return (
                    <NextLink
                      key={category.id}
                      href={`/${category.__typename.toLowerCase()}/${
                        category.slug
                      }`}
                    >
                      <Link
                        onClick={onClose}
                        fontSize={'18px'}
                        fontWeight="semibold"
                        color={'whiteAlpha.900'}
                      >
                        {category.title}
                      </Link>
                    </NextLink>
                  );
                })}
              </VStack>
            ) : (
              <>
                <Spinner />
              </>
            )}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerExample;
