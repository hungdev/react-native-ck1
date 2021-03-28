const initialState = {
  listProducts: [],
  count: 0
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART":
      //console.log(action) => {type: 'ADD_PERSON', data: 'abc'}
      return {
        listProducts: [...state.listProducts, action.data]
      };

    default:
      return state;
  }
}
