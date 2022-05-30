import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import CarItem from '../components/CarItem';
import { TeeRexState } from '../context';
const CartPage = () => {
  const { state: { cart = [] } = {} } = TeeRexState();
  const currency = cart && cart[0] ? cart[0].currency : '';
  const calculateCartTotal = () =>
    !cart
      ? 0
      : cart.reduce((sum, { price, inCart }) => sum + price * inCart, 0);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        p: 2,
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        {cart?.map((product) => (
          <CarItem key={product.id} product={product} />
        ))}
      </Box>
      {/* Total price section */}
      <Box
        sx={{
          height: 150,
          p: 1,
        }}
      >
        <Card>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Checkout Summary
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              Total - {currency} {calculateCartTotal()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' sx={{ margin: '0 auto' }}>
              Proceed To Checkout
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default CartPage;
