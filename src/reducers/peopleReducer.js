const initialState = {
  user: [],
  count: 0
};

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PERSON":
      //console.log(action) => {type: 'ADD_PERSON', data: 'abc'}
      return {
        user: [...state.user, action.data]
      };
    case "REMOVE_PERSON":
      return {
        //[1,2,3,4,5] => [1,2,3,5]
        user: state.user.filter((p) => p !== action.person)
      };
    default:
      return state;
  }
}
