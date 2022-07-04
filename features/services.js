expot const fetchProducts = async (set) => {
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