import {
  LinkOverlay,
  Box,
  Heading,
  Text,
  Button,
  Badge,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const CardImage = ({ image }) => {
  const shimmer = (w, h) => `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient id="g">
              <stop stop-color="#333" offset="20%" />
              <stop stop-color="#222" offset="50%" />
              <stop stop-color="#333" offset="70%" />
            </linearGradient>
          </defs>
          <rect width="${w}" height="${h}" fill="#333" />
          <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
          <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>`;

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return (
    <Box position={'relative'} h={['60', '72', '80']} w={['full']}>
      <Image
        src={image.url}
        objectFit={'cover'}
        alt={image.id}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        layout="fill"
      />
    </Box>
  );
};

const ProductCard = ({ product, ...props }) => {
  return (
    <Box p={4} w={'sm'} borderWidth="1px" rounded="md" {...props}>
      <Box width={'full'}>
        <CardImage
          key={product.productImage.id}
          image={product.productImage[0]}
        />
        {/* {product.productImage.map((image) => (
          <CardImage key={image.id} image={image} />
        ))} */}
      </Box>

      <Link href={`/products/p/${product.id}`}>
        <Box>
          <Heading
            _hover={{
              background: 'white',
              color: 'teal.500',
            }}
            cursor="pointer"
            size="md"
            my="2"
          >
            {product.title}
          </Heading>

          <Badge variant={'solid'} fontSize={[16, 20]} colorScheme="green">
            Taka {product.price}
          </Badge>
          <Text noOfLines={3}>{product.description}</Text>
        </Box>
      </Link>
      <Button mt={2} variant={'solid'}>
        ADD TO CART
      </Button>
    </Box>
  );
};

export default ProductCard;
