import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QTY,
  POPULATE_PRODUCTS,
  FILTER_BY_SEARCH,
  POPULATE_FILTER_PARAMS,
} from '../actions';

//data reducer
export const dataReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case UPDATE_ITEM_QTY:
      return {
        ...state,
        cart: state.map((item) =>
          item.id === action.payload.id ? action.payload.qty : item.qty
        ),
      };

    case POPULATE_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
  }
};

//filters reducer
export const filtersReducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_SEARCH:
      return { ...state, searchQuery: action.payload };
    case POPULATE_FILTER_PARAMS:
      return { ...state, filterParams: action.payload };
  }
  return state;
};
