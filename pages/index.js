import { gql } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import FeaturedProducts from '../components/HomeComponents/FeaturedProducts';
import HeroBanner from '../components/HomeComponents/HeroBanner';
import HomeCategory from '../components/HomeComponents/HomeCategory';
import client from '../features/Apollo';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const products = props.data.products;
  return (
    <div>
      <HeroBanner />
      <HomeCategory />
      <FeaturedProducts products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await client.query({
    query: gql`
      query getProducts {
        products {
          id
          title
          available
          description
          price
          productImage {
            url
            id
            stage
            mimeType
          }
        }
      }
    `,
  });

  return {
    props: data,
  };
}
