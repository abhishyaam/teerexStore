import { ShoppingCartRounded } from '@mui/icons-material';
import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { TeeRexState } from '../context';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QTY,
} from '../context/actions';
const ProductItemButton = ({ product }) => {
  const { state: { cart = [] } = {}, dispatch } = TeeRexState();
  const [productItem, setProductItem] = useState(product);
  console.log('setProductItem', productItem.id);
  const addToCart = () => {
    const updatedProductItem = { ...productItem, inCart: 1 };
    setProductItem(updatedProductItem);
    dispatch({ type: ADD_TO_CART, payload: updatedProductItem });
  };

  const updateItemQty = (increment = true) => {
    const updatedQty = increment
      ? productItem.inCart + 1
      : productItem.inCart - 1;
    const updatedProductItem = { ...productItem, inCart: updatedQty };
    if (updatedQty === 0) {
      // setProductItem();
      dispatch({
        type: REMOVE_FROM_CART,
        payload: productItem,
      });
    } else {
      const payload = { ...productItem, inCart: updatedQty };
      dispatch({
        type: UPDATE_ITEM_QTY,
        payload,
      });
      setProductItem(updatedProductItem);
    }
  };

  return (
    <>
      {cart?.some(({ id }) => productItem.id === id) ? (
        <ButtonGroup
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant='text'
            disabled={productItem?.inCart === 0}
            onClick={() => updateItemQty(false)}
            size='medium'
            sx={{ fontSize: 18 }}
          >
            <span>-</span>
          </Button>

          <Box sx={{ p: 1 }}>{productItem?.inCart}</Box>
          <Button
            variant='text'
            size='medium'
            disabled={productItem.quantity === productItem?.inCart}
            onClick={() => updateItemQty()}
            sx={{ fontSize: 10 }}
          >
            <span>+</span>
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          variant='contained'
          onClick={addToCart}
          size='small'
          endIcon={<ShoppingCartRounded />}
          disabled={!productItem.quantity}
        >
          Add to
        </Button>
      )}
    </>
  );
};

export default React.memo(ProductItemButton);
