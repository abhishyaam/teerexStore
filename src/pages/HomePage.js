import React from 'react';
import { Filters, ProductItem } from '../components';
import { TeeRexState } from '../context';
import { Stack, Container, Divider, Grid } from '@mui/material';
import './styles.css';

const HomePage = () => {
  const {
    state: { products } = {},
    filtersState: {
      searchQuery,
      colorsFilter,
      typesFilter,
      gendersFilter,
      pricesFilter,
    } = {},
  } = TeeRexState();

  const filterProducts = () => {
    console.log(
      searchQuery,
      colorsFilter,
      typesFilter,
      gendersFilter,
      pricesFilter
    );
    let filteredProducts = products;
    if (colorsFilter?.length > 0) {
      filteredProducts = filteredProducts.filter(({ color }) =>
        colorsFilter.includes(color)
      );
    }

    if (typesFilter?.length > 0) {
      filteredProducts = filteredProducts.filter(({ type }) =>
        typesFilter.includes(type)
      );
    }

    if (gendersFilter?.length > 0) {
      filteredProducts = filteredProducts.filter(({ gender }) =>
        gendersFilter.includes(gender)
      );
    }

    if (pricesFilter?.length > 0) {
      filteredProducts = filteredProducts.filter(
        ({ price }) => price >= pricesFilter[0] && price <= pricesFilter[1]
      );
    }

    if (searchQuery?.length > 0) {
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
    <Container maxWidth='xl' sx={{ p: 2 }}>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Filters />
        <Grid container spacing={2}>
          {filterProducts()?.length ? (
            filterProducts()?.map((product) => (
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
