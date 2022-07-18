import { gql } from '@apollo/client';
import {
  Text,
  Button,
  Container,
  Heading,
  VStack,
  Stack,
  Badge,
} from '@chakra-ui/react';
import Rating from 'react-rating';
import ProductImage from '../../../components/widgets/ProductImage';
import client from '../../../features/Apollo';
import getProduct from '../../../features/queries/getProduct';

function Product({ product }) {
  if (!product) return null;
  return (
    <Container maxW={'6xl'} my={'16'}>
      <Stack w={'full'} direction={['column', null, 'row']}>
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
            <Badge variant={'solid'}>
              <Heading size={['sm', 'md']}>Price</Heading>
            </Badge>

            <Text fontWeight={'thin'} fontSize={['25px', null, '35px']}>
              {product.price} Taka
            </Text>
          </VStack>
          <VStack spacing={2} align="flex-start">
            <Badge variant={'solid'}>
              <Heading size={['sm', 'md']}>Rating</Heading>
            </Badge>
            <Rating
              readonly
              className="rating"
              placeholderRating={product.rating}
            />
          </VStack>
          <VStack rounded={'2xl'} spacing={2} align="flex-start">
            <Badge variant={'solid'}>
              <Heading size={['sm', 'md']}>Description</Heading>
            </Badge>
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

  return { paths: paths, fallback: true };
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
