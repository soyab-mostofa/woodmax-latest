import { gql } from '@apollo/client';
import { Text, Button, Container, Heading } from '@chakra-ui/react';
import ClientOnly from '../../../components/ClientOnly';
import Rating from 'react-rating';
import ProductImage from '../../../components/widgets/ProductImage';
import client from '../../../features/Apollo';

import getProduct from '../../../features/queries/getProduct';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { VStack } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';

function Product({ product }) {
  return (
    <Container maxW={'6xl'} my={'16'}>
      <Stack direction={['column', null, 'row']}>
        <ProductImage image={product.productImage[0]} />

        <VStack
          flexBasis={['auto', 'auto', '100%']}
          align={'flex-start'}
          px={4}
          spacing={8}
        >
          <Heading color="blackAlpha.700" size={['sm', 'md']}>
            {product.title}
          </Heading>
          <VStack spacing={2} align="flex-start">
            <Heading size={['sm', 'md']}>Rating</Heading>
            <Rating readonly placeholderRating={product.rating} />
          </VStack>
          <VStack rounded={'2xl'} spacing={2} align="flex-start">
            <Heading size={['sm', 'md']}>Description</Heading>
            <Text>{product.description}</Text>
          </VStack>
          <Button variant={'solid'}>Add to cart</Button>
        </VStack>
      </Stack>
    </Container>
  );
}

export default Product;
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getID {
        products {
          id
        }
      }
    `,
  });

  const paths = data.products.map((p) => ({
    params: { id: p.id },
  }));

  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const { data } = await client.query({
    query: getProduct,
    variables: { id: id },
  });

  return {
    props: { product: data.product },
    revalidate: 10,
  };
}
