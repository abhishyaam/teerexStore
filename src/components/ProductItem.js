import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import ProductItemButton from './ProductItemButton';

const ProductItem = ({ product }) => {
  return (
    <Grid data-testid='test-product-item' item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          sx={{ width: 150, height: 150 }}
          image={product.imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {product.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography gutterBottom variant='h6' component='div'>
              {`${product.currency} ${product.price}`}
            </Typography>
            <ProductItemButton product={product} />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default React.memo(ProductItem);
