const initialState = {
  listProducts: [],
  count: 0
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    // case "ADD_CART":
    //   //console.log(action) => {type: 'ADD_PERSON', data: 'abc'}
    //   return {
    //     listProducts: [...state.listProducts, { ...action.data, quantity: 1 }]
    //   };
    case "ADD_QUANTITY":
      const isExist = state.listProducts.find(e => e._id === action.data?._id)

      //console.log(action) => {type: 'ADD_PERSON', data: 'abc'}
      const updateProduct = !isExist ?
        [...state.listProducts, { ...action.data, quantity: 1 }]
        : state.listProducts.map(e => {
          if (e?._id === action.data?._id) {
            return ({ ...e, quantity: e.quantity + 1 })
          }
          return e
        })
      return {
        ...state,
        listProducts: updateProduct
      }
    case "REMOVE_QUANTITY":
      const reduceQuantity = state.listProducts.map(e => {
        if (e?._id === action.data?._id) {
          return ({ ...e, quantity: e.quantity - 1 })
        }
        return e
      })
      return {
        ...state,
        listProducts: reduceQuantity.filter(e => e.quantity > 0)
      }

    default:
      return state;
  }
}
