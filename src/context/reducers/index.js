import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QTY,
  POPULATE_PRODUCTS,
  FILTER_BY_SEARCH,
  POPULATE_FILTER_PARAMS,
  FILTER_BY_PRICE,
  FILTER_BY_TYPE,
  FILTER_BY_COLOR,
  FILTER_BY_GENDER,
  CLEAR_CART,
} from '../actions';

//data reducer
export const dataReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.id) item.inCart = 1;
          return item;
        }),
        cart: [...state.cart, { ...action.payload, inCart: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.id) item.inCart = 0;
          return item;
        }),
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case UPDATE_ITEM_QTY:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.id)
            item.inCart = action.payload.inCart;
          return item;
        }),
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.inCart = action.payload.inCart)
            : item.inCart
        ),
      };

    case POPULATE_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };

    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

//filters reducer
export const filtersReducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_SEARCH:
      return { ...state, searchQuery: action.payload };
    case FILTER_BY_COLOR:
      return { ...state, colorsFilter: action.payload };
    case FILTER_BY_TYPE:
      return { ...state, typesFilter: action.payload };
    case FILTER_BY_GENDER:
      return { ...state, gendersFilter: action.payload };
    case POPULATE_FILTER_PARAMS:
      return { ...state, filterParams: action.payload };
    case FILTER_BY_PRICE:
      return { ...state, pricesFilter: action.payload };
    default:
      return state;
  }
};
