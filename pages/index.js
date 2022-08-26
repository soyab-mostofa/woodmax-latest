import { gql } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import FeaturedProducts from '../components/HomeComponents/FeaturedProducts';
import HeroBanner from '../components/HomeComponents/HeroBanner';
import HomeCategory from '../components/HomeComponents/HomeCategory';
import LowBanner from '../components/HomeComponents/LowBanner';
import client from '../features/Apollo';
import getAllProducts from '../features/queries/getAllProducts';
import { GET_CATEGORIES } from '../features/queries/getCategories';
import useStore from '../features/store';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const fetchProducts = useStore((state) => state.fetchProducts);

  useState(() => {
    fetchProducts();
  }, []);

  const products = props.data.products;
  return (
    <div>
      <HeroBanner />
      <HomeCategory categories={props.categories} />
      <FeaturedProducts products={products} />
      <LowBanner />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getAllProducts,
  });

  const categories = await client.query({
    query: GET_CATEGORIES,
  });

  return {
    props: { data, categories: categories.data.categories },
    revalidate: 10,
  };
}
