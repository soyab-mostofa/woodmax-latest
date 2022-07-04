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
    <Box position={'relative'} h={[40, 52]} w={'full'}>
      <Image
        src={image.url}
        objectFit={'contain'}
        alt={image.id}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        layout="fill"
      />
    </Box>
  );
};

const ProductCard = ({ product, mw = 'sm', p = '5' }) => {
  return (
    <Box maxW={mw} p={p} borderWidth="1px" rounded="md">
      <Box>
        {product.productImage.map((image) => (
          <CardImage key={image.id} image={image} />
        ))}
      </Box>
      <Heading size="md" my="2">
        <Link href="#">{product.title}</Link>
      </Heading>
      <Badge variant={'solid'} colorScheme="green">
        Taka {product.price}
      </Badge>
      <Text noOfLines={3}>{product.description}</Text>
      <Button mt={2} variant={'solid'}>
        ADD TO CART
      </Button>
    </Box>
  );
};

export default ProductCard;
