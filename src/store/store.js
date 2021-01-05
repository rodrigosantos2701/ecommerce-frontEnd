import { createStore } from 'redux';

  const INITIAL_STATE = {
    data: []
  };

function productsReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, data: [ ...state.data, action ] };
    default:
      return state;
  }
}

const store = createStore(productsReducer);

export default store;