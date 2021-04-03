import { getProduct } from '../services/Api'
// export const displayProducts = (products) => ({
//   type: 'FETCH_PRODUCTS',
//   products,
// });

export const getProducts = (params) => async (dispatch) => {
  const result = await getProduct();
  // dispatch(displayProducts(result.data.products));
  dispatch({ type: 'FETCH_PRODUCTS', products: result.data.data })
};

const initialState = { products: [], favoriteProducts: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS': {
      return {
        ...state,
        products: action.products,
      };
    }

    default:
      return state;
  }
}
