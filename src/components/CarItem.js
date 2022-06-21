import { Delete } from '@mui/icons-material';
import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import ProductItemButton from './ProductItemButton';
import { TeeRexState } from '../context';
import { REMOVE_FROM_CART } from '../context/actions';
const CarItem = ({ product }) => {
  const { dispatch } = TeeRexState();

  const removeFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
  };
  return (
    <Card sx={{ maxWidth: '70%', minWidth: 500, p: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component='img'
          sx={{ width: 151 }}
          image={product.imageURL}
        />
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
          <Typography gutterBottom variant='h6' component='div'>
            {product.name}
          </Typography>
          <Typography
            gutterBottom
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            {product.currency + ' ' + product.price}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <ProductItemButton product={product} />
        <Box sx={{ flexGrow: 1 }} />

        <Box>
          <IconButton color='primary' component='span' onClick={removeFromCart}>
            <Delete />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CarItem;
