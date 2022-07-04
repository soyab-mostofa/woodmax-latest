import { gql } from '@apollo/client';
import create from 'zustand';
import client from './Apollo';

const useStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  fetchProducts: async () => {
    const { data } = await client.query({
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

    set({ products: data.products });
  },
  filterProducts: ([min, max]) => {
    const products = get().products;
    console.log(products);
    const fltrProds = products.filter(
      (product) => product.price >= +min * 1000 && product.price <= +max * 1000
    );

    set({ filteredProducts: fltrProds });
  },
}));

export default useStore;
