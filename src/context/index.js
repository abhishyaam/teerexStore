import React, { useContext, createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { dataReducer, filtersReducer } from './reducers';
import { POPULATE_FILTER_PARAMS, POPULATE_PRODUCTS } from './actions';
import { getProducts } from '../apis/geektrust';
import { getFilterParams } from '../utils';
/**
 * Application Context
 * Uses useReducer Hook for state managment
 *
 *
 */
const Context = createContext({
  // state: { cart: [], products: [] },
  // filtersState: { searchQuery: '', filterParams: {} },
});

/**
 *
 * Store context provider
 * uses useReducer hook to provide app level data
 *
 */
const TeeRexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    products: [],
    cart: [],
  });

  const [filtersState, filtersDispatch] = useReducer(filtersReducer, {
    searchQuery: '',
    filterParams: {},
  });

  useEffect(() => {
    async function callGetProductsApi() {
      const response = await getProducts();
      const productList = await response;
      dispatch({ type: POPULATE_PRODUCTS, payload: productList });
      filtersDispatch({
        type: POPULATE_FILTER_PARAMS,
        //get filter params from a utility function
        payload: getFilterParams(productList),
      });
    }
    callGetProductsApi();
  }, []);

  return (
    <Context.Provider
      value={{ state, dispatch, filtersState, filtersDispatch }}
    >
      {children}
    </Context.Provider>
  );
};

export default TeeRexProvider;

export const TeeRexState = () => useContext(Context);
