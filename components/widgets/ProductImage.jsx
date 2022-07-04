import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const ProductImage = ({ image }) => {
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
    <Box
      position={'relative'}
      p={4}
      h={['80', '96', 'md']}
      w={['full', 'full', '8xl']}
    >
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
export default ProductImage;
