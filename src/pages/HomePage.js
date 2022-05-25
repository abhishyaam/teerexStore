import React from 'react';
import { Filters, ProductItem } from '../components';
import { TeeRexState } from '../context';
import { Stack, Container, Divider, Grid } from '@mui/material';
import './styles.css';

const HomePage = () => {
  const {
    state: { products },
    filtersState: { searchQuery },
  } = TeeRexState();

  const filterProducts = () => {
    let filteredProducts = products;
    if (searchQuery && searchQuery.length > 2) {
      filteredProducts = filteredProducts.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.color.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    }

    return filteredProducts;
  };

  return (
    <Container maxWidth='xl'>
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Filters />
        <Grid container spacing={2}>
          {filterProducts() && filterProducts().length ? (
            filterProducts().map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </Grid>
      </Stack>
    </Container>
  );
};

export default HomePage;
