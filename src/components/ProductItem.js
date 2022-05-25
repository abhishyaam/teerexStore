import React from 'react';
import { Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  cursor: 'pointer',
  maxHeight: '150px',
  height: '150px',
}));

const ProductItem = ({ product }) => {
  return (
    <Grid data-testid='test-product-item' item xs={6} sm={4} md={3} lg={2}>
      <Item sx={{ p: 1 }}>
        <div>{product.imageURL}</div>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='flex-end'
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <div>{product.price}</div>
          <div>{product.name}</div>
        </Stack>
      </Item>
    </Grid>
  );
};

export default ProductItem;
