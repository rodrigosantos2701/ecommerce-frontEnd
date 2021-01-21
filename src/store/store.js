import { createStore } from 'redux';


let history = []
let list = []
const INITIAL_STATE = {
  data: [],

};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      let found = list.includes(action.name)


      if (!found) {
        list.push(action.name)
        return { ...state, data: [...state.data, action] }
        break;

      }
      else {
        state = {
          ...state,
          data: state.data.filter((data, index) => data.id !== action.id),
        }
        let history = state.data.concat(action)
        return { ...state, data: history }
        break;
      }


    case 'DELETE_PRODUCT':
      list.splice(list.indexOf(action.name), 1);
      return {
        ...state,
        data: state.data.filter((data, index) => data.id !== action.payload)
      }
      break;


//  TO DO => ADICIONAR ADD-ITEM E REMOVE ITEM LINCADO COM O CART        

    default:
      return state;

  }
}




const store = createStore(productsReducer);

export default store;