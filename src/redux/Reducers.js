// src/redux/reducers.js
const initialState = {
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
}

export default rootReducer;

